webpackJsonp([85549614654720],{1122:function(n,s){n.exports={data:{site:{siteMetadata:{docsDirectory:"docs",github:{url:"https://github.com/n6g7/redux-saga-firebase"}}},file:{base:"sorting-filtering.md",sourceInstanceName:"guides",markdown:{html:'<h2>Using the realtime database</h2>\n<p>All three read methods (<a href="/redux-saga-firebase/reference/database#read"><code>database.read</code></a>, <a href="/redux-saga-firebase/reference/database#channel"><code>database.channel</code></a> and <a href="/redux-saga-firebase/reference/database#sync"><code>database.sync</code></a>) accepts references as strings, <a href="https://firebase.google.com/docs/reference/js/firebase.database.Reference"><code>Reference</code></a> objects or <a href="https://firebase.google.com/docs/reference/js/firebase.database.Query"><code>Query</code></a> objects.</p>\n<p>Using the last two options we can filter, sort and limit the results using the Firebase API methods (<a href="https://firebase.google.com/docs/reference/js/firebase.database.Reference#orderByChild"><code>orderByChild</code></a>, <a href="https://firebase.google.com/docs/reference/js/firebase.database.Reference#equalTo"><code>equalTo</code></a>, <a href="https://firebase.google.com/docs/reference/js/firebase.database.Reference#limitToLast"><code>limitToLast</code></a>, etc).</p>\n<h3>Filtering</h3>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// Will only get users for which the `isAdmin` key is `true`:</span>\n<span class="token keyword">const</span> admins <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token function">call</span><span class="token punctuation">(</span>\n  rsf<span class="token punctuation">.</span>database<span class="token punctuation">.</span>read<span class="token punctuation">,</span>\n  firebase<span class="token punctuation">.</span><span class="token function">database</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reference</span><span class="token punctuation">(</span><span class="token string">\'users\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">orderByChild</span><span class="token punctuation">(</span><span class="token string">\'isAdmin\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">equalTo</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<h3>Sorting</h3>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// Will get all users ordered by age:</span>\n<span class="token keyword">const</span> usersOrderedByAge <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token function">call</span><span class="token punctuation">(</span>\n  rsf<span class="token punctuation">.</span>database<span class="token punctuation">.</span>read<span class="token punctuation">,</span>\n  firebase<span class="token punctuation">.</span><span class="token function">database</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reference</span><span class="token punctuation">(</span><span class="token string">\'users\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">orderByChild</span><span class="token punctuation">(</span><span class="token string">\'age\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<h3>Limiting</h3>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// Will synchronize the five youngest users:</span>\n<span class="token keyword">yield</span> <span class="token function">fork</span><span class="token punctuation">(</span>\n  rsf<span class="token punctuation">.</span>database<span class="token punctuation">.</span>sync<span class="token punctuation">,</span>\n  firebase<span class="token punctuation">.</span><span class="token function">database</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reference</span><span class="token punctuation">(</span><span class="token string">\'users\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">orderByChild</span><span class="token punctuation">(</span><span class="token string">\'age\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">limitToFirst</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  action\n<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<h2>Using firestore</h2>\n<p>A similar approch works for firestore methods: <a href="https://n6g7.github.io/redux-saga-firebase/reference/firestore#getCollection"><code>getCollection</code></a>, <a href="https://n6g7.github.io/redux-saga-firebase/reference/firestore#syncCollection"><code>syncCollection</code></a> and <a href="https://n6g7.github.io/redux-saga-firebase/reference/firestore#channel"><code>channel</code></a>.</p>\n<p>They also accept <a href="https://firebase.google.com/docs/reference/js/firebase.firestore.CollectionReference">firebase.firestore.CollectionReference</a> and <a href="https://firebase.google.com/docs/reference/js/firebase.firestore.Query">firebase.firestore.Query</a> as argument.</p>\n<h3>Filtering</h3>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// Will only synchronise users for which the `isAdmin` key is `true`:</span>\n<span class="token keyword">yield</span> <span class="token function">fork</span><span class="token punctuation">(</span>\n  rsf<span class="token punctuation">.</span>firestore<span class="token punctuation">.</span>syncCollection<span class="token punctuation">,</span>\n  firestore<span class="token punctuation">.</span><span class="token function">collection</span><span class="token punctuation">(</span><span class="token string">\'users\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string">\'isAdmin\'</span><span class="token punctuation">,</span> <span class="token string">\'==\'</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  action\n<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<h3>Sorting, limiting</h3>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// Get the 10 youngest users:</span>\n<span class="token keyword">const</span> users <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token function">call</span><span class="token punctuation">(</span>\n  rsf<span class="token punctuation">.</span>firestore<span class="token punctuation">.</span>getCollection<span class="token punctuation">,</span>\n  firestore<span class="token punctuation">.</span><span class="token function">collection</span><span class="token punctuation">(</span><span class="token string">\'users\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">orderBy</span><span class="token punctuation">(</span><span class="token string">\'age\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">limit</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span>\n</code></pre>\n      </div>',frontmatter:{title:"Sorting and filtering"}}}},pathContext:{fileName:"sorting-filtering"}}}});
//# sourceMappingURL=path---guides-sorting-filtering-57707ef36714f6e9890f.js.map