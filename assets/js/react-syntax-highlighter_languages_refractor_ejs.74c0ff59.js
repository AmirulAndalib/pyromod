"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7176,3047],{791:(e,n,a)=>{var t=a(3205);function s(e){e.register(t),function(e){e.languages.ejs={delimiter:{pattern:/^<%[-_=]?|[-_]?%>$/,alias:"punctuation"},comment:/^#[\s\S]*/,"language-javascript":{pattern:/[\s\S]+/,inside:e.languages.javascript}},e.hooks.add("before-tokenize",(function(n){e.languages["markup-templating"].buildPlaceholders(n,"ejs",/<%(?!%)[\s\S]+?%>/g)})),e.hooks.add("after-tokenize",(function(n){e.languages["markup-templating"].tokenizePlaceholders(n,"ejs")})),e.languages.eta=e.languages.ejs}(e)}e.exports=s,s.displayName="ejs",s.aliases=["eta"]},3205:e=>{function n(e){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(a,t,s,o){if(a.language===t){var r=a.tokenStack=[];a.code=a.code.replace(s,(function(e){if("function"==typeof o&&!o(e))return e;for(var s,i=r.length;-1!==a.code.indexOf(s=n(t,i));)++i;return r[i]=e,s})),a.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(a,t){if(a.language===t&&a.tokenStack){a.grammar=e.languages[t];var s=0,o=Object.keys(a.tokenStack);!function r(i){for(var u=0;u<i.length&&!(s>=o.length);u++){var l=i[u];if("string"==typeof l||l.content&&"string"==typeof l.content){var g=o[s],c=a.tokenStack[g],p="string"==typeof l?l:l.content,f=n(t,g),k=p.indexOf(f);if(k>-1){++s;var d=p.substring(0,k),m=new e.Token(t,e.tokenize(c,a.grammar),"language-"+t,c),h=p.substring(k+f.length),v=[];d&&v.push.apply(v,r([d])),v.push(m),h&&v.push.apply(v,r([h])),"string"==typeof l?i.splice.apply(i,[u,1].concat(v)):l.content=v}}else l.content&&r(l.content)}return i}(a.tokens)}}}})}(e)}e.exports=n,n.displayName="markupTemplating",n.aliases=[]}}]);