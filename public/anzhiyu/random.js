var posts=["posts/4a17b156.html","posts/c0155143.html","posts/9776190d.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };