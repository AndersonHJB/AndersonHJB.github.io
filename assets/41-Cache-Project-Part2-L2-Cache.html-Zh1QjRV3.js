import{_ as s}from"./gzh-DnOBNg6W.js";import{_ as n}from"./zsxq-BcdwOI-_.js";import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,o as l,a as i}from"./app-CJkn7D_W.js";const p={},c=i(`<p><strong>The Cache Project Part 2: L2 Cache</strong></p><p><strong>Due Friday, December 8</strong></p><p>The second part of the project is to simulate a direct-mapped, write-back L2 cache in C. As with the main memory part that you have already completed, in this simulated system data is written to and read from the L2 cache as entire 8-word cache lines, not individual words (which are 64 bits).</p><p>A detailed description of the L2 cache is found in the <code>l2_cache.c</code> file that you already downloaded at the start of the project. I have provided extensive comments in <code>l2_cache.c</code> describing what the code should do. Your job is to fill in the missing code.</p><p>Remember, you need to work on your own on this project. Be sure to check the discussion board for helpful information.</p><p>Here are the steps you should take:</p><ul><li><p><strong>Step 1</strong></p><p>You should see what the output of testing my compiled L2 code is by typing <code>./ben_test_l2</code></p></li><li><p><strong>Step 2</strong></p><p>Open the file <code>l2_cache.c</code> in an editor and read every line closely. You’ll see that I describe the organization of the L2 cache and that there are three procedures,<code>l2_initialize()</code>, <code>l2_cache_access()</code>, and <code>l2_insert_line()</code>, that you have to implement. You should also look closely at the related header files, <code>memory_subsystem_constants.h</code> and <code>l2_cache.h</code>.</p><p>In <code>l2_cache.c</code>, the comments describe exactly what you have to do to implement the above three procedures to 1) initialize the L2 cache by clearing the valid bits in each cache entry, 2) support reads from and writes to the L2 cache, and 3) insert a new cache line into the L2 cache (possibly evicting another cache line).</p><p>You should also take a look at my code in <code>test_l2.c</code>, so you can see how <code>l2_initialize()</code>, <code>l2_cache_access()</code>, and <code>l2_insert_line()</code> are called.</p><p>The only file you need to modify for this part of the project is <code>l2_cache.c</code>.</p></li><li><p><strong>Step 3</strong></p><p>To test your code in <code>l2_cache.c</code>, you can use my <code>test_l2.c</code> file. To do so, compile them together by typing <strong>make test_l2</strong> and, if it compiles correctly, run the program by typing <code>./test_l2</code> The output when you run the program should be the same as the output when using my compiled version (<code>./ben_test_l2</code>). Feel free to read and modify the code in <code>test_l2.c</code> to aid in your debugging.</p></li><li><p><strong>Step 4</strong></p><p>Upload your <code>l2_cache.c</code> file and get started on part 3!</p></li></ul><div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" data-title="c" style="background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"></span>
<span class="line"><span style="color:#88846F;">/***********************************************************</span></span>
<span class="line"><span style="color:#88846F;">  This file contains the code for the L2 cache. It is a</span></span>
<span class="line"><span style="color:#88846F;">  2MB direct-mapped, write-back cache. Only the lowest</span></span>
<span class="line"><span style="color:#88846F;">  48 bits of an address are actually used and the top 16</span></span>
<span class="line"><span style="color:#88846F;">  bits of an address is ignored.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">  Since a word is 64 bits (8 bytes) and a cache line is 8 words,</span></span>
<span class="line"><span style="color:#88846F;">  there are a total of 64 bytes (which is 2^6 bytes) in a cache</span></span>
<span class="line"><span style="color:#88846F;">  line. Thus, the lowest 6 bits (i.e. log 64) of an address are used to</span></span>
<span class="line"><span style="color:#88846F;">  specify the byte offset within the cache line.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">  Since the total amount of data in the L2 cache is 2MB</span></span>
<span class="line"><span style="color:#88846F;">  (i.e. 2^21 bytes) and there are 64 bytes (i.e. 2^6 bytes)</span></span>
<span class="line"><span style="color:#88846F;">  per cache line, the number of cache lines is:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">     (2^21 bytes)/(2^6 bytes/cache line) = 2^15 cache lines</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">  Therefore, the index within an address used to select the cache</span></span>
<span class="line"><span style="color:#88846F;">  line is 15 bits (i.e. log 2^15).</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">  Since the offset is the lowest 6 bits and the index is the next</span></span>
<span class="line"><span style="color:#88846F;">  lowest 15 bits of the 48 bits of an address that are actually</span></span>
<span class="line"><span style="color:#88846F;">  used, the tag bits are the remaining 48-(15+6) = 27 bits.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">   So, the 64-bit address is decomposed as follows:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">      16         27          15           6</span></span>
<span class="line"><span style="color:#88846F;">  -------------------------------------------</span></span>
<span class="line"><span style="color:#88846F;"> |  unused  |   tag    |    index   | offset |</span></span>
<span class="line"><span style="color:#88846F;">  -------------------------------------------</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">   Each L2 cache entry is structured as follows:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">    1 1    3        27</span></span>
<span class="line"><span style="color:#88846F;">   ------------------------------------------------</span></span>
<span class="line"><span style="color:#88846F;">   |v|d|reserved|  tag  |  8-word cache line data  |</span></span>
<span class="line"><span style="color:#88846F;">   ------------------------------------------------</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">  where &quot;v&quot; is the valid bit and &quot;d&quot; is the dirty bit.</span></span>
<span class="line"><span style="color:#88846F;">  The 3-bit &quot;reserved&quot; field is an artifact of using</span></span>
<span class="line"><span style="color:#88846F;">  C -- it wouldn&#39;t be in the actual cache hardware.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">************************************************************/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F92672;">#include</span><span style="color:#E6DB74;"> &lt;stdio.h&gt;</span></span>
<span class="line"><span style="color:#F92672;">#include</span><span style="color:#E6DB74;"> &lt;stdint.h&gt;</span></span>
<span class="line"><span style="color:#F92672;">#include</span><span style="color:#E6DB74;"> &lt;stdlib.h&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F92672;">#include</span><span style="color:#E6DB74;"> &quot;memory_subsystem_constants.h&quot;</span></span>
<span class="line"><span style="color:#F92672;">#include</span><span style="color:#E6DB74;"> &quot;l2_cache.h&quot;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">//number of cache entries (2^15)</span></span>
<span class="line"><span style="color:#F92672;">#define</span><span style="color:#A6E22E;"> L2_NUM_CACHE_ENTRIES</span><span style="color:#F8F8F2;"> (</span><span style="color:#AE81FF;">1</span><span style="color:#F92672;">&lt;&lt;</span><span style="color:#AE81FF;">15</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">/***************************************************</span></span>
<span class="line"><span style="color:#88846F;">This struct defines the structure of a single cache</span></span>
<span class="line"><span style="color:#88846F;">entry in the L2 cache. It has the following fields:</span></span>
<span class="line"><span style="color:#88846F;">  v_d_tag: a 32-bit unsigned int (uint32_t) containing</span></span>
<span class="line"><span style="color:#88846F;">           the valid (v) bit at bit 31 (leftmost bit),</span></span>
<span class="line"><span style="color:#88846F;">           the dirty bit (d) at bit 30, and the tag</span></span>
<span class="line"><span style="color:#88846F;">           in bits 0 through 26 (the 27 rightmost bits)</span></span>
<span class="line"><span style="color:#88846F;">  cache_line: an array of 8 words, constituting a single</span></span>
<span class="line"><span style="color:#88846F;">              cache line.</span></span>
<span class="line"><span style="color:#88846F;">****************************************************/</span></span>
<span class="line"><span style="color:#F92672;">typedef</span><span style="color:#66D9EF;font-style:italic;"> struct</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">    uint32_t</span><span style="color:#F8F8F2;"> v_d_tag;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">    uint64_t</span><span style="color:#F8F8F2;"> cache_line[WORDS_PER_CACHE_LINE];</span></span>
<span class="line"><span style="color:#F8F8F2;">} L2_CACHE_ENTRY;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// Although addresses are 64 bits, only the lowest 48</span></span>
<span class="line"><span style="color:#88846F;">// bits are actually used. The upper 16 bits are</span></span>
<span class="line"><span style="color:#88846F;">// zeroed out, using this mask.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F92672;">#define</span><span style="color:#A6E22E;"> LOWER_48_BIT_MASK</span><span style="color:#F92672;"> 0x</span><span style="color:#AE81FF;">FFFFFFFFFFFF</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">//the valid bit is bit 31 (leftmost bit) of v_d_tag word</span></span>
<span class="line"><span style="color:#88846F;">//The mask is 1 shifted left by 31</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F92672;">#define</span><span style="color:#A6E22E;"> L2_VBIT_MASK</span><span style="color:#F8F8F2;"> (</span><span style="color:#F92672;">0x</span><span style="color:#AE81FF;">1</span><span style="color:#F92672;"> &lt;&lt;</span><span style="color:#AE81FF;"> 31</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">//dirty bit is bit 30 (second to leftmost bit) of v_d_tag word</span></span>
<span class="line"><span style="color:#88846F;">//The mask is 1 shifted left by 30</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F92672;">#define</span><span style="color:#A6E22E;"> L2_DIRTYBIT_MASK</span><span style="color:#F8F8F2;"> (</span><span style="color:#F92672;">0x</span><span style="color:#AE81FF;">1</span><span style="color:#F92672;"> &lt;&lt;</span><span style="color:#AE81FF;"> 30</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">//tag is lowest 27 bits of v_d_tag word, so the mask is 0x7FFFFFF</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F92672;">#define</span><span style="color:#A6E22E;"> L2_ENTRY_TAG_MASK</span><span style="color:#F92672;"> 0x</span><span style="color:#AE81FF;">7FFFFFF</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">//The L2 cache is just an array of cache entries</span></span>
<span class="line"><span style="color:#F8F8F2;">L2_CACHE_ENTRY l2_cache[L2_NUM_CACHE_ENTRIES];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// Note that since l2_cache is an array of L2_CACHE_ENTRY structs,</span></span>
<span class="line"><span style="color:#88846F;">// not an array of pointers, you would NOT use &quot;-&gt;&quot; to access the</span></span>
<span class="line"><span style="color:#88846F;">// a field of an entry. For example, you would write</span></span>
<span class="line"><span style="color:#88846F;">// l2_cache[i].v_d_tag, but NOT l2_cache[i]-&gt;v_d_tag.</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">/************************************************</span></span>
<span class="line"><span style="color:#88846F;">            l2_initialize()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">This procedure initializes the L2 cache by clearing</span></span>
<span class="line"><span style="color:#88846F;">the valid bit of each cache entry.</span></span>
<span class="line"><span style="color:#88846F;">************************************************/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">void</span><span style="color:#A6E22E;"> l2_initialize</span><span style="color:#F8F8F2;">()</span></span>
<span class="line"><span style="color:#F8F8F2;">{</span></span>
<span class="line"><span style="color:#88846F;">    // Just need to zero out the valid bit in each cache entry.</span></span>
<span class="line"><span style="color:#88846F;">    // However, there&#39;s no reason not to write a 0 to the entire</span></span>
<span class="line"><span style="color:#88846F;">    // v_d_tag field, since it&#39;s actually more efficient.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">    // CODE HERE</span></span>
<span class="line"><span style="color:#F92672;">    for</span><span style="color:#F8F8F2;">(</span><span style="color:#66D9EF;font-style:italic;">int</span><span style="color:#F8F8F2;"> i </span><span style="color:#F92672;">=</span><span style="color:#AE81FF;"> 0</span><span style="color:#F8F8F2;">; i </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;"> L2_NUM_CACHE_ENTRIES; i</span><span style="color:#F92672;">++</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#F8F8F2;">        l2_cache[i].v_d_tag </span><span style="color:#F92672;">=</span><span style="color:#AE81FF;"> 0</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// Bits 21-47 of an address are used as the tag bits.</span></span>
<span class="line"><span style="color:#88846F;">// So the mask is 27 ones (so 7FFFFFF hex) shifted left by 21 bits.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F92672;">#define</span><span style="color:#A6E22E;"> L2_ADDRESS_TAG_MASK</span><span style="color:#F8F8F2;"> ((</span><span style="color:#66D9EF;font-style:italic;">uint64_t</span><span style="color:#F8F8F2;">) </span><span style="color:#F92672;">0x</span><span style="color:#AE81FF;">7ffffff</span><span style="color:#F92672;"> &lt;&lt;</span><span style="color:#AE81FF;"> 21</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F92672;">#define</span><span style="color:#A6E22E;"> L2_ADDRESS_TAG_SHIFT</span><span style="color:#AE81FF;"> 21</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">//Bits 6-20 (so 15 bits in total) of an address specifies the index of the</span></span>
<span class="line"><span style="color:#88846F;">//cache line within the L2 cache.</span></span>
<span class="line"><span style="color:#88846F;">//The value of the mask is 15 ones (so 7FFF hex) shifted left by 6 bits</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F92672;">#define</span><span style="color:#A6E22E;"> L2_INDEX_MASK</span><span style="color:#F8F8F2;"> (</span><span style="color:#F92672;">0x</span><span style="color:#AE81FF;">7fff</span><span style="color:#F92672;"> &lt;&lt;</span><span style="color:#AE81FF;"> 6</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F92672;">#define</span><span style="color:#A6E22E;"> L2_INDEX_SHIFT</span><span style="color:#AE81FF;"> 6</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F92672;">#define</span><span style="color:#A6E22E;"> L2_HIT_STATUS_MASK</span><span style="color:#F92672;"> 0x</span><span style="color:#AE81FF;">1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">/****************************************************</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">          l2_cache_access()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">This procedure implements the reading and writing of cache lines from</span></span>
<span class="line"><span style="color:#88846F;">and to the L2 cache. The parameters are:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">address:  unsigned 64-bit address. This address can be anywhere within</span></span>
<span class="line"><span style="color:#88846F;">          a cache line. Only the lower 48 bits of the address are actually</span></span>
<span class="line"><span style="color:#88846F;">          used.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">write_data:  an array of unsigned 64-bit words. On a write operation,</span></span>
<span class="line"><span style="color:#88846F;">             if there is a cache hit, 8 words are copied from write_data</span></span>
<span class="line"><span style="color:#88846F;">             to the appropriate cache line in the L2 cache.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">control:  an unsigned byte (8 bits), of which only the two lowest bits</span></span>
<span class="line"><span style="color:#88846F;">          are meaningful, as follows:</span></span>
<span class="line"><span style="color:#88846F;">          -- bit 0:  read enable (1 means read, 0 means don&#39;t read)</span></span>
<span class="line"><span style="color:#88846F;">          -- bit 1:  write enable (1 means write, 0 means don&#39;t write)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">read_data: an array of unsigned 64-bit words. On a read operation,</span></span>
<span class="line"><span style="color:#88846F;">           if there is a cache hit, 8 words are copied from the</span></span>
<span class="line"><span style="color:#88846F;">           appropriate cache line in the L2 cache to read_data.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">status: this in an 8-bit output parameter (thus, a pointer to it is</span></span>
<span class="line"><span style="color:#88846F;">        passed in).  The lowest bit of this byte should be set to</span></span>
<span class="line"><span style="color:#88846F;">        indicate whether a cache hit occurred or not:</span></span>
<span class="line"><span style="color:#88846F;">              cache hit: bit 0 of status = 1</span></span>
<span class="line"><span style="color:#88846F;">              cache miss: bit 0 of status = 0</span></span>
<span class="line"><span style="color:#88846F;">        Since a pointer is being passed in, the pointer</span></span>
<span class="line"><span style="color:#88846F;">        must be dereferenced to set the bit: *status = ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">If the access results in a cache miss, then the only</span></span>
<span class="line"><span style="color:#88846F;">effect is to set the lowest bit of the status byte to 0.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">**************************************************/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">void</span><span style="color:#A6E22E;"> l2_cache_access</span><span style="color:#F8F8F2;">(</span><span style="color:#66D9EF;font-style:italic;">uint64_t</span><span style="color:#FD971F;font-style:italic;"> address</span><span style="color:#F8F8F2;">, </span><span style="color:#66D9EF;font-style:italic;">uint64_t</span><span style="color:#FD971F;font-style:italic;"> write_data</span><span style="color:#F92672;">[]</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">                     uint8_t</span><span style="color:#FD971F;font-style:italic;"> control</span><span style="color:#F8F8F2;">, </span><span style="color:#66D9EF;font-style:italic;">uint64_t</span><span style="color:#FD971F;font-style:italic;"> read_data</span><span style="color:#F92672;">[]</span><span style="color:#F8F8F2;">, </span><span style="color:#66D9EF;font-style:italic;">uint8_t</span><span style="color:#F92672;"> *</span><span style="color:#FD971F;font-style:italic;">status</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">    // Only the lower 48 bits of the address are used.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">    address </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> address </span><span style="color:#F92672;">&amp;</span><span style="color:#F8F8F2;"> LOWER_48_BIT_MASK;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">    //Extract from the address the index of the cache entry in the cache.</span></span>
<span class="line"><span style="color:#88846F;">    //Use the L2_INDEX_MASK mask to mask out the appropriate</span></span>
<span class="line"><span style="color:#88846F;">    //bits of the address and L2_INDEX_SHIFT</span></span>
<span class="line"><span style="color:#88846F;">    //to shift the appropriate amount.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">    // CODE HERE</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">    //Extract from the address the tag bits.</span></span>
<span class="line"><span style="color:#88846F;">    //Use the L2_ADDRESS_TAG_MASK mask to mask out the appropriate</span></span>
<span class="line"><span style="color:#88846F;">    //bits of the address and L2_ADDRESS_TAG_SHIFT</span></span>
<span class="line"><span style="color:#88846F;">    //to shift the appropriate amount.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">    // CODE HERE</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">    //if the selected cache entry has a zero valid bit or</span></span>
<span class="line"><span style="color:#88846F;">    //if the entry&#39;s tag does not match the tag bits of</span></span>
<span class="line"><span style="color:#88846F;">    //the address, then it is a cache miss. Set the</span></span>
<span class="line"><span style="color:#88846F;">    //low bit of the status byte appropriately.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">    // CODE HERE</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">    //Otherwise, it&#39;s a cache hit.</span></span>
<span class="line"><span style="color:#88846F;">    //If the read-enable bit of the control parameter is set then copy</span></span>
<span class="line"><span style="color:#88846F;">    //the cache line data in the cache entry into read_data.</span></span>
<span class="line"><span style="color:#88846F;">    //If the write-enable bit of the control parameter is set then copy</span></span>
<span class="line"><span style="color:#88846F;">    //write_data into the cache line data of the cache entry and</span></span>
<span class="line"><span style="color:#88846F;">    //set the dirty bit.</span></span>
<span class="line"><span style="color:#88846F;">    //Set the low bit of the status byte appropriately.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">    // CODE HERE</span></span>
<span class="line"><span style="color:#88846F;">//    address = address &amp; LOWER_48_BIT_MASK;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">    uint64_t</span><span style="color:#F8F8F2;"> index </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> (address </span><span style="color:#F92672;">&amp;</span><span style="color:#F8F8F2;"> L2_INDEX_MASK) </span><span style="color:#F92672;">&gt;&gt;</span><span style="color:#F8F8F2;"> L2_INDEX_SHIFT;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">    uint64_t</span><span style="color:#F8F8F2;"> tag </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> (address </span><span style="color:#F92672;">&amp;</span><span style="color:#F8F8F2;"> L2_ADDRESS_TAG_MASK) </span><span style="color:#F92672;">&gt;&gt;</span><span style="color:#F8F8F2;"> L2_ADDRESS_TAG_SHIFT;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">    uint32_t</span><span style="color:#F8F8F2;"> entryTag </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> l2_cache[index].v_d_tag </span><span style="color:#F92672;">&amp;</span><span style="color:#F8F8F2;"> L2_ENTRY_TAG_MASK;</span></span>
<span class="line"><span style="color:#F92672;">    *</span><span style="color:#F8F8F2;">status </span><span style="color:#F92672;">=</span><span style="color:#AE81FF;"> 0</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F92672;">    if</span><span style="color:#F8F8F2;"> ((l2_cache[index].v_d_tag </span><span style="color:#F92672;">&amp;</span><span style="color:#F8F8F2;"> L2_VBIT_MASK) </span><span style="color:#F92672;">&amp;&amp;</span><span style="color:#F8F8F2;"> (entryTag </span><span style="color:#F92672;">==</span><span style="color:#F8F8F2;"> tag)) {</span></span>
<span class="line"><span style="color:#F92672;">        *</span><span style="color:#F8F8F2;">status </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> L2_HIT_STATUS_MASK;</span></span>
<span class="line"><span style="color:#F92672;">        if</span><span style="color:#F8F8F2;"> (control </span><span style="color:#F92672;">&amp;</span><span style="color:#F8F8F2;"> READ_ENABLE_MASK) {</span></span>
<span class="line"><span style="color:#F92672;">            for</span><span style="color:#F8F8F2;"> (</span><span style="color:#66D9EF;font-style:italic;">int</span><span style="color:#F8F8F2;"> i </span><span style="color:#F92672;">=</span><span style="color:#AE81FF;"> 0</span><span style="color:#F8F8F2;">; i </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;"> WORDS_PER_CACHE_LINE; i</span><span style="color:#F92672;">++</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#F8F8F2;">                read_data[i] </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> l2_cache[index].cache_line[i];</span></span>
<span class="line"><span style="color:#F8F8F2;">            }</span></span>
<span class="line"><span style="color:#F8F8F2;">        }</span></span>
<span class="line"><span style="color:#F92672;">        if</span><span style="color:#F8F8F2;"> (control </span><span style="color:#F92672;">&amp;</span><span style="color:#F8F8F2;"> WRITE_ENABLE_MASK) {</span></span>
<span class="line"><span style="color:#F92672;">            for</span><span style="color:#F8F8F2;"> (</span><span style="color:#66D9EF;font-style:italic;">int</span><span style="color:#F8F8F2;"> i </span><span style="color:#F92672;">=</span><span style="color:#AE81FF;"> 0</span><span style="color:#F8F8F2;">; i </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;"> WORDS_PER_CACHE_LINE; i</span><span style="color:#F92672;">++</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#F8F8F2;">                l2_cache[index].cache_line[i] </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> write_data[i];</span></span>
<span class="line"><span style="color:#F8F8F2;">            }</span></span>
<span class="line"><span style="color:#F8F8F2;">            l2_cache[index].v_d_tag </span><span style="color:#F92672;">|=</span><span style="color:#F8F8F2;"> L2_DIRTYBIT_MASK;</span></span>
<span class="line"><span style="color:#F8F8F2;">        }</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">/********************************************************</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">             l2_insert_line()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">This procedure inserts a new cache line into the L2 cache.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">The parameters are:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">address: 64-bit memory address for the new cache line.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">write_data: an array of unsigned 64-bit words containing the</span></span>
<span class="line"><span style="color:#88846F;">            cache line data to be inserted into the cache.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">evicted_writeback_address: a 64-bit output parameter (thus,</span></span>
<span class="line"><span style="color:#88846F;">          a pointer to it is passed) that, if the cache line</span></span>
<span class="line"><span style="color:#88846F;">          being evicted needs to be written back to memory,</span></span>
<span class="line"><span style="color:#88846F;">          should be assigned the memory address for the evicted</span></span>
<span class="line"><span style="color:#88846F;">          cache line. Since it is a pointer, writing the</span></span>
<span class="line"><span style="color:#88846F;">          memory address for the evicted line requires a</span></span>
<span class="line"><span style="color:#88846F;">          pointer dereference:  *evicted_writeback_address = ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">evicted_writeback_data: an array of 64-bit words that, if the cache</span></span>
<span class="line"><span style="color:#88846F;">          line being evicted needs to be written back to memory,</span></span>
<span class="line"><span style="color:#88846F;">          should be assigned the cache line data for the evicted</span></span>
<span class="line"><span style="color:#88846F;">          cache line. Since there are 8 words per cache line, the</span></span>
<span class="line"><span style="color:#88846F;">          actual parameter should be an array of at least 8 words.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">status: this in an 8-bit output parameter (thus, a pointer to it is</span></span>
<span class="line"><span style="color:#88846F;">        passed).  The lowest bit of this byte should be set to</span></span>
<span class="line"><span style="color:#88846F;">        indicate whether the evicted cache line needs to be</span></span>
<span class="line"><span style="color:#88846F;">        written back to memory or not, as follows:</span></span>
<span class="line"><span style="color:#88846F;">            0: no write-back required</span></span>
<span class="line"><span style="color:#88846F;">            1: evicted cache line needs to be written back.</span></span>
<span class="line"><span style="color:#88846F;">        To write the status bit, a pointer dereference is</span></span>
<span class="line"><span style="color:#88846F;">        needed:  *status = ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">*********************************************************/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">void</span><span style="color:#A6E22E;"> l2_insert_line</span><span style="color:#F8F8F2;">(</span><span style="color:#66D9EF;font-style:italic;">uint64_t</span><span style="color:#FD971F;font-style:italic;"> address</span><span style="color:#F8F8F2;">, </span><span style="color:#66D9EF;font-style:italic;">uint64_t</span><span style="color:#FD971F;font-style:italic;"> write_data</span><span style="color:#F92672;">[]</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">                    uint64_t</span><span style="color:#F92672;"> *</span><span style="color:#FD971F;font-style:italic;">evicted_writeback_address</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">                    uint64_t</span><span style="color:#FD971F;font-style:italic;"> evicted_writeback_data</span><span style="color:#F92672;">[]</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">                    uint8_t</span><span style="color:#F92672;"> *</span><span style="color:#FD971F;font-style:italic;">status</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">    // Only the lower 48 bits of the address are used.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">    address </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> address </span><span style="color:#F92672;">&amp;</span><span style="color:#F8F8F2;"> LOWER_48_BIT_MASK;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">    //Extract from the address the index of the cache entry in the cache.</span></span>
<span class="line"><span style="color:#88846F;">    //See l2_cache_access, above.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">    // CODE HERE</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">    //Extract from the address the tag bits.</span></span>
<span class="line"><span style="color:#88846F;">    //See l2_cache_access, above.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">    uint64_t</span><span style="color:#F8F8F2;"> address_tag </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> (address </span><span style="color:#F92672;">&amp;</span><span style="color:#F8F8F2;"> L2_ADDRESS_TAG_MASK) </span><span style="color:#F92672;">&gt;&gt;</span><span style="color:#F8F8F2;"> L2_ADDRESS_TAG_SHIFT;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">    uint64_t</span><span style="color:#F8F8F2;"> index </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> (address </span><span style="color:#F92672;">&amp;</span><span style="color:#F8F8F2;"> L2_INDEX_MASK) </span><span style="color:#F92672;">&gt;&gt;</span><span style="color:#F8F8F2;"> L2_INDEX_SHIFT;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">    uint64_t</span><span style="color:#F8F8F2;"> entry_tag </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> l2_cache[index].v_d_tag </span><span style="color:#F92672;">&amp;</span><span style="color:#F8F8F2;"> L2_ENTRY_TAG_MASK;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">    uint64_t</span><span style="color:#F8F8F2;"> word_offset;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">    //If the cache entry has a zero valid bit or a zero dirty bit,</span></span>
<span class="line"><span style="color:#88846F;">    //then the entry can simply be overwritten with the new line.</span></span>
<span class="line"><span style="color:#88846F;">    //Copy the data from write_data to the cache line in the entry,</span></span>
<span class="line"><span style="color:#88846F;">    //set the valid bit of the entry, clear the dirty bit of the</span></span>
<span class="line"><span style="color:#88846F;">    //entry, and write the tag bits of the address into the tag of</span></span>
<span class="line"><span style="color:#88846F;">    //the entry. Clear the low bit of the status byte</span></span>
<span class="line"><span style="color:#88846F;">    //to indicate that no write-back is needed. Nothing further</span></span>
<span class="line"><span style="color:#88846F;">    //needs to be done in this cae.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">    // CODE HERE</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">    //Otherwise, the current entry has to be written back before the</span></span>
<span class="line"><span style="color:#88846F;">    //being overwritten by the new cache line.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">    //The address to write the current entry back to is constructed from the</span></span>
<span class="line"><span style="color:#88846F;">    //entry&#39;s tag and the index in the cache by:</span></span>
<span class="line"><span style="color:#88846F;">    // (evicted_entry_tag &lt;&lt; L2_ADDRESS_TAG_SHIFT) | (index &lt;&lt; L2_INDEX_SHIFT)</span></span>
<span class="line"><span style="color:#88846F;">    //This address should be written to the evicted_writeback_address output</span></span>
<span class="line"><span style="color:#88846F;">    //parameter (don&#39;t forget the pointer dereference).</span></span>
<span class="line"><span style="color:#88846F;">    //The cache line data in the current entry should be copied to the</span></span>
<span class="line"><span style="color:#88846F;">    //evicted_writeback_data_array.</span></span>
<span class="line"><span style="color:#88846F;">    //The low bit of the status byte should be set to 1 to indicate that</span></span>
<span class="line"><span style="color:#88846F;">    //the write-back is needed.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">    // CODE HERE</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">    //Then, copy the data from write_data to the cache line in the entry,</span></span>
<span class="line"><span style="color:#88846F;">    //set the valid bit of the entry, clear the dirty bit of the</span></span>
<span class="line"><span style="color:#88846F;">    //entry, and write the tag bits of the address into the tag of</span></span>
<span class="line"><span style="color:#88846F;">    //the entry.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">    // CODE HERE</span></span>
<span class="line"><span style="color:#88846F;">//    address = address &amp; LOWER_48_BIT_MASK;</span></span>
<span class="line"><span style="color:#88846F;">//    uint64_t index = (address &amp; L2_INDEX_MASK) &gt;&gt; L2_INDEX_SHIFT;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">    uint64_t</span><span style="color:#F8F8F2;"> tag </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> (address </span><span style="color:#F92672;">&amp;</span><span style="color:#F8F8F2;"> L2_ADDRESS_TAG_MASK) </span><span style="color:#F92672;">&gt;&gt;</span><span style="color:#F8F8F2;"> L2_ADDRESS_TAG_SHIFT;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F92672;">    *</span><span style="color:#F8F8F2;">status </span><span style="color:#F92672;">=</span><span style="color:#AE81FF;"> 0</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F92672;">    if</span><span style="color:#F8F8F2;"> (l2_cache[index].v_d_tag </span><span style="color:#F92672;">&amp;</span><span style="color:#F8F8F2;"> L2_VBIT_MASK) {</span></span>
<span class="line"><span style="color:#F92672;">        if</span><span style="color:#F8F8F2;"> (l2_cache[index].v_d_tag </span><span style="color:#F92672;">&amp;</span><span style="color:#F8F8F2;"> L2_DIRTYBIT_MASK) {</span></span>
<span class="line"><span style="color:#F92672;">            *</span><span style="color:#F8F8F2;">status </span><span style="color:#F92672;">=</span><span style="color:#AE81FF;"> 1</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">            uint64_t</span><span style="color:#F8F8F2;"> evicted_tag </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> l2_cache[index].v_d_tag </span><span style="color:#F92672;">&amp;</span><span style="color:#F8F8F2;"> L2_ENTRY_TAG_MASK;</span></span>
<span class="line"><span style="color:#F92672;">            *</span><span style="color:#F8F8F2;">evicted_writeback_address </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> (evicted_tag </span><span style="color:#F92672;">&lt;&lt;</span><span style="color:#F8F8F2;"> L2_ADDRESS_TAG_SHIFT) </span><span style="color:#F92672;">|</span><span style="color:#F8F8F2;"> (index </span><span style="color:#F92672;">&lt;&lt;</span><span style="color:#F8F8F2;"> L2_INDEX_SHIFT);</span></span>
<span class="line"><span style="color:#F92672;">            for</span><span style="color:#F8F8F2;"> (</span><span style="color:#66D9EF;font-style:italic;">int</span><span style="color:#F8F8F2;"> i </span><span style="color:#F92672;">=</span><span style="color:#AE81FF;"> 0</span><span style="color:#F8F8F2;">; i </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;"> WORDS_PER_CACHE_LINE; i</span><span style="color:#F92672;">++</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#F8F8F2;">                evicted_writeback_data[i] </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> l2_cache[index].cache_line[i];</span></span>
<span class="line"><span style="color:#F8F8F2;">            }</span></span>
<span class="line"><span style="color:#F8F8F2;">        }</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">    l2_cache[index].v_d_tag </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> L2_VBIT_MASK </span><span style="color:#F92672;">|</span><span style="color:#F8F8F2;"> tag;</span></span>
<span class="line"><span style="color:#F92672;">    for</span><span style="color:#F8F8F2;"> (</span><span style="color:#66D9EF;font-style:italic;">int</span><span style="color:#F8F8F2;"> i </span><span style="color:#F92672;">=</span><span style="color:#AE81FF;"> 0</span><span style="color:#F8F8F2;">; i </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;"> WORDS_PER_CACHE_LINE; i</span><span style="color:#F92672;">++</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#F8F8F2;">        l2_cache[index].cache_line[i] </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> write_data[i];</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p><details class="hint-container details"><summary>公众号：AI悦创【二维码】</summary><figure><img src="`+s+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></details><div class="hint-container info"><p class="hint-container-title">AI悦创·编程一对一</p><p>AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh</p><p>C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh</p><p>方法一：<a href="http://wpa.qq.com/msgrd?v=3&amp;uin=1432803776&amp;site=qq&amp;menu=yes" target="_blank" rel="noopener noreferrer">QQ</a></p><p>方法二：微信：Jiabcdefh</p></div><figure><img src="'+n+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',12),t=[c];function o(r,d){return l(),e("div",null,t)}const b=a(p,[["render",o],["__file","41-Cache-Project-Part2-L2-Cache.html.vue"]]),m=JSON.parse('{"path":"/1v1/06-KAI/41-Cache-Project-Part2-L2-Cache.html","title":"Cache Project Part 2 Main Memory","lang":"zh-CN","frontmatter":{"title":"Cache Project Part 2 Main Memory","icon":"c","date":"2023-12-09T09:41:13.000Z","author":"AI悦创","isOriginal":true,"sticky":false,"star":false,"article":true,"timeline":true,"image":false,"navbar":true,"sidebarIcon":true,"headerDepth":5,"comment":true,"lastUpdated":true,"editLink":false,"backToTop":true,"toc":true,"feed":false,"seo":false,"head":[]},"headers":[],"git":{"createdTime":1701958942000,"updatedTime":1702906295000,"contributors":[{"name":"AndersonHJB","email":"cleland1432803776@icloud.com","commits":4}]},"readingTime":{"minutes":8.16,"words":2448},"localizedDate":"2023年12月9日","copyright":{"author":"AI悦创"}}');export{b as comp,m as data};
