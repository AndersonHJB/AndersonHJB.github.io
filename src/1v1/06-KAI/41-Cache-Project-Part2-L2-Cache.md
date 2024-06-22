---
title: Cache Project Part 2 Main Memory
icon: c
date: 2023-12-09 09:41:13
author: AI悦创
isOriginal: true
sticky: false
star: false
article: true
timeline: true
image: false
navbar: true
sidebarIcon: true
headerDepth: 5
comment: true
lastUpdated: true
editLink: false
backToTop: true
toc: true
---

**The Cache Project Part 2: L2 Cache**

**Due Friday, December 8**

The second part of the project is to simulate a direct-mapped, write-back L2 cache in C. As with the main memory part that you have already completed, in this simulated system data is written to and read from the L2 cache as entire 8-word cache lines, not individual words (which are 64 bits).

A detailed description of the L2 cache is found in the `l2_cache.c` file that you already downloaded at the start of the project. I have provided extensive comments in `l2_cache.c`  describing what the code should do. Your job is to fill in the missing code.

Remember, you need to work on your own on this project. Be sure to check the discussion board for helpful information.

Here are the steps you should take:

- **Step 1**

    You should see what the output of testing my compiled L2 code is by typing `./ben_test_l2` 

- **Step 2**

    Open the file `l2_cache.c` in an editor and read every line closely. You’ll see that I describe the organization of the L2 cache and that there are three procedures,`l2_initialize()`, `l2_cache_access()`, and `l2_insert_line()`, that you have to implement. You should also look closely at the related header files, `memory_subsystem_constants.h` and `l2_cache.h`.

    In `l2_cache.c`, the comments describe exactly what you have to do to implement the above three procedures to 1) initialize the L2 cache by clearing the valid bits in each cache entry, 2) support reads from and writes to the L2 cache, and 3) insert a new cache line into the L2 cache (possibly evicting another cache line).

    You should also take a look at my code in `test_l2.c`, so you can see how `l2_initialize()`, `l2_cache_access()`, and `l2_insert_line()` are called.

    The only file you need to modify for this part of the project is `l2_cache.c`.

- **Step 3**

    To test your code in `l2_cache.c`, you can use my `test_l2.c` file. To do so, compile them together by typing **make test_l2** and, if it compiles correctly, run the program by typing `./test_l2` The output when you run the program should be the same as the output when using my compiled version (`./ben_test_l2`). Feel free to read and modify the code in `test_l2.c` to aid in your debugging.

- **Step 4**

    Upload your `l2_cache.c` file and get started on part 3!

```c

/***********************************************************
  This file contains the code for the L2 cache. It is a
  2MB direct-mapped, write-back cache. Only the lowest
  48 bits of an address are actually used and the top 16
  bits of an address is ignored.

  Since a word is 64 bits (8 bytes) and a cache line is 8 words,
  there are a total of 64 bytes (which is 2^6 bytes) in a cache
  line. Thus, the lowest 6 bits (i.e. log 64) of an address are used to
  specify the byte offset within the cache line.

  Since the total amount of data in the L2 cache is 2MB
  (i.e. 2^21 bytes) and there are 64 bytes (i.e. 2^6 bytes)
  per cache line, the number of cache lines is:

     (2^21 bytes)/(2^6 bytes/cache line) = 2^15 cache lines

  Therefore, the index within an address used to select the cache
  line is 15 bits (i.e. log 2^15).

  Since the offset is the lowest 6 bits and the index is the next
  lowest 15 bits of the 48 bits of an address that are actually
  used, the tag bits are the remaining 48-(15+6) = 27 bits.

   So, the 64-bit address is decomposed as follows:

      16         27          15           6
  -------------------------------------------
 |  unused  |   tag    |    index   | offset |
  -------------------------------------------


   Each L2 cache entry is structured as follows:

    1 1    3        27
   ------------------------------------------------
   |v|d|reserved|  tag  |  8-word cache line data  |
   ------------------------------------------------

  where "v" is the valid bit and "d" is the dirty bit.
  The 3-bit "reserved" field is an artifact of using
  C -- it wouldn't be in the actual cache hardware.

************************************************************/

#include <stdio.h>
#include <stdint.h>
#include <stdlib.h>

#include "memory_subsystem_constants.h"
#include "l2_cache.h"


//number of cache entries (2^15)
#define L2_NUM_CACHE_ENTRIES (1<<15)

/***************************************************
This struct defines the structure of a single cache
entry in the L2 cache. It has the following fields:
  v_d_tag: a 32-bit unsigned int (uint32_t) containing
           the valid (v) bit at bit 31 (leftmost bit),
           the dirty bit (d) at bit 30, and the tag
           in bits 0 through 26 (the 27 rightmost bits)
  cache_line: an array of 8 words, constituting a single
              cache line.
****************************************************/
typedef struct {
    uint32_t v_d_tag;
    uint64_t cache_line[WORDS_PER_CACHE_LINE];
} L2_CACHE_ENTRY;


// Although addresses are 64 bits, only the lowest 48
// bits are actually used. The upper 16 bits are
// zeroed out, using this mask.

#define LOWER_48_BIT_MASK 0xFFFFFFFFFFFF

//the valid bit is bit 31 (leftmost bit) of v_d_tag word
//The mask is 1 shifted left by 31

#define L2_VBIT_MASK (0x1 << 31)

//dirty bit is bit 30 (second to leftmost bit) of v_d_tag word
//The mask is 1 shifted left by 30

#define L2_DIRTYBIT_MASK (0x1 << 30)

//tag is lowest 27 bits of v_d_tag word, so the mask is 0x7FFFFFF

#define L2_ENTRY_TAG_MASK 0x7FFFFFF


//The L2 cache is just an array of cache entries
L2_CACHE_ENTRY l2_cache[L2_NUM_CACHE_ENTRIES];

// Note that since l2_cache is an array of L2_CACHE_ENTRY structs,
// not an array of pointers, you would NOT use "->" to access the
// a field of an entry. For example, you would write
// l2_cache[i].v_d_tag, but NOT l2_cache[i]->v_d_tag.


/************************************************
            l2_initialize()

This procedure initializes the L2 cache by clearing
the valid bit of each cache entry.
************************************************/

void l2_initialize()
{
    // Just need to zero out the valid bit in each cache entry.
    // However, there's no reason not to write a 0 to the entire
    // v_d_tag field, since it's actually more efficient.

    // CODE HERE
    for(int i = 0; i < L2_NUM_CACHE_ENTRIES; i++) {
        l2_cache[i].v_d_tag = 0;
    }
}


// Bits 21-47 of an address are used as the tag bits.
// So the mask is 27 ones (so 7FFFFFF hex) shifted left by 21 bits.

#define L2_ADDRESS_TAG_MASK ((uint64_t) 0x7ffffff << 21)
#define L2_ADDRESS_TAG_SHIFT 21

//Bits 6-20 (so 15 bits in total) of an address specifies the index of the
//cache line within the L2 cache.
//The value of the mask is 15 ones (so 7FFF hex) shifted left by 6 bits

#define L2_INDEX_MASK (0x7fff << 6)
#define L2_INDEX_SHIFT 6

#define L2_HIT_STATUS_MASK 0x1

/****************************************************

          l2_cache_access()

This procedure implements the reading and writing of cache lines from
and to the L2 cache. The parameters are:

address:  unsigned 64-bit address. This address can be anywhere within
          a cache line. Only the lower 48 bits of the address are actually
          used.

write_data:  an array of unsigned 64-bit words. On a write operation,
             if there is a cache hit, 8 words are copied from write_data
             to the appropriate cache line in the L2 cache.

control:  an unsigned byte (8 bits), of which only the two lowest bits
          are meaningful, as follows:
          -- bit 0:  read enable (1 means read, 0 means don't read)
          -- bit 1:  write enable (1 means write, 0 means don't write)

read_data: an array of unsigned 64-bit words. On a read operation,
           if there is a cache hit, 8 words are copied from the
           appropriate cache line in the L2 cache to read_data.

status: this in an 8-bit output parameter (thus, a pointer to it is
        passed in).  The lowest bit of this byte should be set to
        indicate whether a cache hit occurred or not:
              cache hit: bit 0 of status = 1
              cache miss: bit 0 of status = 0
        Since a pointer is being passed in, the pointer
        must be dereferenced to set the bit: *status = ...

If the access results in a cache miss, then the only
effect is to set the lowest bit of the status byte to 0.

**************************************************/

void l2_cache_access(uint64_t address, uint64_t write_data[],
                     uint8_t control, uint64_t read_data[], uint8_t *status)
{

    // Only the lower 48 bits of the address are used.

    address = address & LOWER_48_BIT_MASK;

    //Extract from the address the index of the cache entry in the cache.
    //Use the L2_INDEX_MASK mask to mask out the appropriate
    //bits of the address and L2_INDEX_SHIFT
    //to shift the appropriate amount.

    // CODE HERE

    //Extract from the address the tag bits.
    //Use the L2_ADDRESS_TAG_MASK mask to mask out the appropriate
    //bits of the address and L2_ADDRESS_TAG_SHIFT
    //to shift the appropriate amount.

    // CODE HERE


    //if the selected cache entry has a zero valid bit or
    //if the entry's tag does not match the tag bits of
    //the address, then it is a cache miss. Set the
    //low bit of the status byte appropriately.

    // CODE HERE

    //Otherwise, it's a cache hit.
    //If the read-enable bit of the control parameter is set then copy
    //the cache line data in the cache entry into read_data.
    //If the write-enable bit of the control parameter is set then copy
    //write_data into the cache line data of the cache entry and
    //set the dirty bit.
    //Set the low bit of the status byte appropriately.

    // CODE HERE
//    address = address & LOWER_48_BIT_MASK;

    uint64_t index = (address & L2_INDEX_MASK) >> L2_INDEX_SHIFT;
    uint64_t tag = (address & L2_ADDRESS_TAG_MASK) >> L2_ADDRESS_TAG_SHIFT;

    uint32_t entryTag = l2_cache[index].v_d_tag & L2_ENTRY_TAG_MASK;
    *status = 0;

    if ((l2_cache[index].v_d_tag & L2_VBIT_MASK) && (entryTag == tag)) {
        *status = L2_HIT_STATUS_MASK;
        if (control & READ_ENABLE_MASK) {
            for (int i = 0; i < WORDS_PER_CACHE_LINE; i++) {
                read_data[i] = l2_cache[index].cache_line[i];
            }
        }
        if (control & WRITE_ENABLE_MASK) {
            for (int i = 0; i < WORDS_PER_CACHE_LINE; i++) {
                l2_cache[index].cache_line[i] = write_data[i];
            }
            l2_cache[index].v_d_tag |= L2_DIRTYBIT_MASK;
        }
    }
}

/********************************************************

             l2_insert_line()

This procedure inserts a new cache line into the L2 cache.

The parameters are:

address: 64-bit memory address for the new cache line.

write_data: an array of unsigned 64-bit words containing the
            cache line data to be inserted into the cache.

evicted_writeback_address: a 64-bit output parameter (thus,
          a pointer to it is passed) that, if the cache line
          being evicted needs to be written back to memory,
          should be assigned the memory address for the evicted
          cache line. Since it is a pointer, writing the
          memory address for the evicted line requires a
          pointer dereference:  *evicted_writeback_address = ...

evicted_writeback_data: an array of 64-bit words that, if the cache
          line being evicted needs to be written back to memory,
          should be assigned the cache line data for the evicted
          cache line. Since there are 8 words per cache line, the
          actual parameter should be an array of at least 8 words.

status: this in an 8-bit output parameter (thus, a pointer to it is
        passed).  The lowest bit of this byte should be set to
        indicate whether the evicted cache line needs to be
        written back to memory or not, as follows:
            0: no write-back required
            1: evicted cache line needs to be written back.
        To write the status bit, a pointer dereference is
        needed:  *status = ...

*********************************************************/

void l2_insert_line(uint64_t address, uint64_t write_data[],
                    uint64_t *evicted_writeback_address,
                    uint64_t evicted_writeback_data[],
                    uint8_t *status)
{

    // Only the lower 48 bits of the address are used.

    address = address & LOWER_48_BIT_MASK;

    //Extract from the address the index of the cache entry in the cache.
    //See l2_cache_access, above.

    // CODE HERE

    //Extract from the address the tag bits.
    //See l2_cache_access, above.

    uint64_t address_tag = (address & L2_ADDRESS_TAG_MASK) >> L2_ADDRESS_TAG_SHIFT;
    uint64_t index = (address & L2_INDEX_MASK) >> L2_INDEX_SHIFT;

    uint64_t entry_tag = l2_cache[index].v_d_tag & L2_ENTRY_TAG_MASK;

    uint64_t word_offset;

    //If the cache entry has a zero valid bit or a zero dirty bit,
    //then the entry can simply be overwritten with the new line.
    //Copy the data from write_data to the cache line in the entry,
    //set the valid bit of the entry, clear the dirty bit of the
    //entry, and write the tag bits of the address into the tag of
    //the entry. Clear the low bit of the status byte
    //to indicate that no write-back is needed. Nothing further
    //needs to be done in this cae.

    // CODE HERE

    //Otherwise, the current entry has to be written back before the
    //being overwritten by the new cache line.

    //The address to write the current entry back to is constructed from the
    //entry's tag and the index in the cache by:
    // (evicted_entry_tag << L2_ADDRESS_TAG_SHIFT) | (index << L2_INDEX_SHIFT)
    //This address should be written to the evicted_writeback_address output
    //parameter (don't forget the pointer dereference).
    //The cache line data in the current entry should be copied to the
    //evicted_writeback_data_array.
    //The low bit of the status byte should be set to 1 to indicate that
    //the write-back is needed.

    // CODE HERE

    //Then, copy the data from write_data to the cache line in the entry,
    //set the valid bit of the entry, clear the dirty bit of the
    //entry, and write the tag bits of the address into the tag of
    //the entry.

    // CODE HERE
//    address = address & LOWER_48_BIT_MASK;
//    uint64_t index = (address & L2_INDEX_MASK) >> L2_INDEX_SHIFT;
    uint64_t tag = (address & L2_ADDRESS_TAG_MASK) >> L2_ADDRESS_TAG_SHIFT;


    *status = 0;
    if (l2_cache[index].v_d_tag & L2_VBIT_MASK) {
        if (l2_cache[index].v_d_tag & L2_DIRTYBIT_MASK) {
            *status = 1;
            uint64_t evicted_tag = l2_cache[index].v_d_tag & L2_ENTRY_TAG_MASK;
            *evicted_writeback_address = (evicted_tag << L2_ADDRESS_TAG_SHIFT) | (index << L2_INDEX_SHIFT);
            for (int i = 0; i < WORDS_PER_CACHE_LINE; i++) {
                evicted_writeback_data[i] = l2_cache[index].cache_line[i];
            }
        }
    }

    l2_cache[index].v_d_tag = L2_VBIT_MASK | tag;
    for (int i = 0; i < WORDS_PER_CACHE_LINE; i++) {
        l2_cache[index].cache_line[i] = write_data[i];
    }
}
  

```

















欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！


::: details 公众号：AI悦创【二维码】

![](/gzh.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](/zsxq.jpg)