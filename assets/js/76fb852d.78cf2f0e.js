"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2215],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var l=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=l.createContext({}),p=function(e){var t=l.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return l.createElement(c.Provider,{value:t},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,m=s["".concat(c,".").concat(d)]||s[d]||k[d]||a;return n?l.createElement(m,o(o({ref:t},u),{},{components:n})):l.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},798:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>k,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var l=n(7462),r=(n(7294),n(3905));const a={title:"JS Set\u4e3a\u4ec0\u4e48\u662f\u5e26\u952e\u7684\u96c6\u5408?",authors:"lin-xii",date:new Date("2023-06-14T00:00:00.000Z"),tags:["JavaScript","\u96c6\u5408"]},o=void 0,i={permalink:"/blog/2023/6\u6708/keyed-collection",source:"@site/blog/2023/6\u6708/keyed-collection.md",title:"JS Set\u4e3a\u4ec0\u4e48\u662f\u5e26\u952e\u7684\u96c6\u5408?",description:"\u9047\u4e8b\u4e0d\u51b3\u67e5\u6587\u6863\u3002",date:"2023-06-14T00:00:00.000Z",formattedDate:"2023\u5e746\u670814\u65e5",tags:[{label:"JavaScript",permalink:"/blog/tags/java-script"},{label:"\u96c6\u5408",permalink:"/blog/tags/\u96c6\u5408"}],readingTime:3.52,hasTruncateMarker:!0,authors:[{name:"\u6797\u5341\u4e8cXII",title:"\u5200\u8015\u706b\u79cd\u7684\u7a0b\u5e8f\u733f",url:"https://github.com/lin-xii",imageURL:"https://github.com/lin-xii.png",key:"lin-xii"}],frontMatter:{title:"JS Set\u4e3a\u4ec0\u4e48\u662f\u5e26\u952e\u7684\u96c6\u5408?",authors:"lin-xii",date:"2023-06-14T00:00:00.000Z",tags:["JavaScript","\u96c6\u5408"]},prevItem:{title:"TS Array.reduce\u6ca1\u6709\u4e0e\u6b64\u8c03\u7528\u5339\u914d\u7684\u91cd\u8f7d?",permalink:"/blog/2023/6\u6708/TS-Array-reduce-error"},nextItem:{title:"\u4f5c\u4e3a\u300c\u7801\u519c\u300d\u7684\u7b2c\u4e00\u4e2a\u5341\u5e74",permalink:"/blog/2023/6\u6708/first-ten-years"}},c={authorsImageUrls:[void 0]},p=[{value:"\u8d77\u56e0",id:"\u8d77\u56e0",level:2},{value:"\u8fc7\u7a0b",id:"\u8fc7\u7a0b",level:2},{value:"\u7ed3\u8bba",id:"\u7ed3\u8bba",level:2},{value:"\u8d44\u6599",id:"\u8d44\u6599",level:2}],u={toc:p},s="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,l.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u9047\u4e8b\u4e0d\u51b3\u67e5\u6587\u6863\u3002"),(0,r.kt)("h2",{id:"\u8d77\u56e0"},"\u8d77\u56e0"),(0,r.kt)("p",null,"\u4e3a\u4e86\u964d\u4f4e\u5e76\u53d1\u65f6\u7684 API \u8bf7\u6c42\u91cf, \u8fd9\u4e24\u5929\u5199\u4e86\u4e2a LRU Cache. \u5176\u4e2d\u7528\u5230\u4e86 Set \u505a AllowList, \u6765\u5224\u65ad API \u662f\u5426\u5e94\u8be5\u88ab\u7f13\u5b58."),(0,r.kt)("p",null,"\u5728 MDN \u67e5 API \u65f6, \u53d1\u73b0 Set \u88ab\u5f52\u7c7b\u5728 Keyed Collection \u4e2d. \u4e00\u76f4\u4ee5\u6765, \u4e0b\u610f\u8bc6\u89c9\u5f97 Set \u53ea\u662f value \u552f\u4e00\u7684 Array. \u5e94\u8be5\u5c5e\u4e8e Indexed Collection. \u611f\u89c9\u6709\u4e9b\u5947\u602a, \u6240\u4ee5\u5c31\u67e5\u4e86\u4e0b Set \u7684\u5b9e\u73b0\u673a\u5236"),(0,r.kt)("h2",{id:"\u8fc7\u7a0b"},"\u8fc7\u7a0b"),(0,r.kt)("p",null,"\u4e00\u5f00\u59cb, \u5148\u53bb MDN \u67e5\u7684\u6587\u6863, \u53ea\u8bf4\u4e86\u5c5e\u4e8e Keyed Collection, \u4f46\u6ca1\u7ec6\u8bf4\u4e3a\u4ec0\u4e48. \u53c8\u53bb ecma-international.org, \u67e5 ECMA \u6807\u51c6, \u7ed3\u679c\u4e5f\u6ca1\u6709\u660e\u786e\u8bf4\u660e, \u4e3a\u4ec0\u4e48 Set \u5c5e\u4e8e Keyed Collection. \u6211\u4e00\u5f00\u59cb\u8fd8\u89c9\u5f97\u662f\u6587\u6863\u5199\u5f97\u4e0d\u591f\u8be6\u7ec6, \u540e\u6765\u53d1\u73b0\u662f\u81ea\u5df1\u592a\u83dc\u4e86 \ud83d\ude02"),(0,r.kt)("p",null,"\u7b80\u5355\u601d\u8003\u4e86\u4e0b, \u6ca1\u60f3\u901a. \u5c31\u4f7f\u7528\u9b54\u6cd5\u6b66\u5668\u4e86. \u867d\u7136\u6709\u70b9\u524d\u540e\u4e0d\u4e00, \u4f46 copilot \u63d0\u4f9b\u4e86\u6700\u5173\u952e\u7684\u4fe1\u606f: Hash Table. \u4e0b\u8fb9\u662f copilot \u7684\u56de\u7b54"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5728 JavaScript \u4e2d\uff0cSet \u662f\u4e00\u79cd\u57fa\u4e8e\u54c8\u5e0c\u8868\u5b9e\u73b0\u7684\u6570\u636e\u7ed3\u6784\uff0c\u7528\u4e8e\u5b58\u50a8\u4e00\u7ec4\u552f\u4e00\u7684\u503c\u3002Set \u5c5e\u4e8e ECMAScript 6 \u4e2d\u65b0\u589e\u7684\u6570\u636e\u7c7b\u578b\u4e4b\u4e00\uff0c\u88ab\u5f52\u7c7b\u4e3a Keyed Collection \u7c7b\u578b\u3002")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Keyed Collection \u662f ECMAScript 6 \u4e2d\u65b0\u589e\u7684\u4e00\u79cd\u6570\u636e\u7c7b\u578b\uff0c\u7528\u4e8e\u5b58\u50a8\u4e00\u7ec4\u952e\u503c\u5bf9\u3002\u9664\u4e86 Set \u4e4b\u5916\uff0c\u8fd8\u5305\u62ec Map \u548c WeakMap\u3002\u8fd9\u4e9b\u6570\u636e\u7c7b\u578b\u90fd\u5177\u6709\u4ee5\u4e0b\u7279\u70b9\uff1a")),(0,r.kt)("blockquote",null,(0,r.kt)("ol",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ol"},"\u53ef\u4ee5\u4f7f\u7528\u4efb\u610f\u7c7b\u578b\u7684\u503c\u4f5c\u4e3a\u952e\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u53ef\u4ee5\u4f7f\u7528 for...of \u5faa\u73af\u904d\u5386\u952e\u503c\u5bf9\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u53ef\u4ee5\u4f7f\u7528 size \u5c5e\u6027\u83b7\u53d6\u952e\u503c\u5bf9\u7684\u6570\u91cf\u3002"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Set \u4f5c\u4e3a Keyed Collection \u7684\u4e00\u79cd\uff0c\u53ef\u4ee5\u4f7f\u7528\u4efb\u610f\u7c7b\u578b\u7684\u503c\u4f5c\u4e3a\u5143\u7d20\uff0c\u800c\u4e14\u6bcf\u4e2a\u5143\u7d20\u90fd\u662f\u552f\u4e00\u7684\u3002\u56e0\u6b64\uff0cSet \u53ef\u4ee5\u7528\u4e8e\u5b9e\u73b0\u96c6\u5408\u3001\u8fc7\u6ee4\u91cd\u590d\u503c\u7b49\u529f\u80fd\u3002")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0cSet \u548c Map \u7684\u5b9e\u73b0\u65b9\u5f0f\u4e0d\u540c\uff0c\u867d\u7136\u5b83\u4eec\u90fd\u5c5e\u4e8e Keyed Collection \u7c7b\u578b\u3002Map \u662f\u4e00\u79cd\u952e\u503c\u5bf9\u7684\u96c6\u5408\uff0c\u5176\u4e2d\u6bcf\u4e2a\u952e\u90fd\u662f\u552f\u4e00\u7684\uff0c\u53ef\u4ee5\u4f7f\u7528\u952e\u6765\u8bbf\u95ee\u5bf9\u5e94\u7684\u503c\u3002Set \u662f\u4e00\u79cd\u503c\u7684\u96c6\u5408\uff0c\u5176\u4e2d\u6bcf\u4e2a\u503c\u90fd\u662f\u552f\u4e00\u7684\uff0c\u53ef\u4ee5\u4f7f\u7528\u503c\u6765\u8bbf\u95ee\u5bf9\u5e94\u7684\u503c\u3002")),(0,r.kt)("p",null,"\u518d\u7136\u540e, \u5c31\u7834\u6848\u4e86... \u56e0\u4e3a Hash Table \u4e2d, \u6bcf\u4e2a\u5143\u7d20\u90fd\u6709\u552f\u4e00\u7684 key, \u7528 key \u6765\u8bbf\u95ee\u5bf9\u5e94\u7684\u503c. \u6240\u4ee5, Set \u76f8\u5f53\u4e8e\u4e00\u4e2a key-value \u76f8\u540c\u7684\u3001\u7279\u6b8a\u7684 Hash Table, \u6211\u8ba4\u4e3a\u4e5f\u53ef\u4ee5\u7406\u89e3\u4e3a, \u4e00\u79cd key-value \u4e00\u81f4\u3001\u7279\u6b8a\u7684 Map"),(0,r.kt)("h2",{id:"\u7ed3\u8bba"},"\u7ed3\u8bba"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Set \u662f\u57fa\u4e8e Hash Table \u5b9e\u73b0\u7684\u300c\u503c\u7684\u96c6\u5408\u300d"),(0,r.kt)("li",{parentName:"ol"},"\u7531\u4e8e Hash Table \u7684 key-value \u7279\u6027, Set \u7684 key-value \u76f8\u540c"),(0,r.kt)("li",{parentName:"ol"},"Set \u76f8\u5f53\u4e8e\u4e00\u79cd\u7279\u6b8a\u7684 Map")),(0,r.kt)("p",null,"\u6240\u4ee5, Set \u5c5e\u4e8e Keyed Collection"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"                                             \u250c\u2500\u2500\u2500\u2500\u2500\u2510\n                                          \u250c\u2500\u25b6\u2502Array\u2502\n                    \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2518\n                 \u250c\u2500\u25b6\u2502Indexed Collection\u2502\u2500\u2500\u2524\n                 \u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n                 \u2502                        \u2514\u2500\u25b6\u2502Typed Array\u2502\n                 \u2502                           \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502\n \u2502 Collection \u2502\u2500\u2500\u2524                           \u250c\u2500\u2500\u2500\u2510         *\n \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502                        \u250c\u2500\u25b6\u2502Map\u2502         *\n                 \u2502                        \u2502  \u2514\u2500\u2500\u2500\u2518         *\n                 \u2502                        \u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510     *\n                 \u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u251c\u2500\u25b6\u2502WeakMap\u2502     *  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n                 \u2514\u2500\u25b6\u2502 Keyed Collection \u2502\u2500\u2500\u2524  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518     *  \u2502Based on Hash Table\u2502\n                    \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502  \u250c\u2500\u2500\u2500\u2510         *  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n                                          \u251c\u2500\u25b6\u2502Set\u2502         *\n                                          \u2502  \u2514\u2500\u2500\u2500\u2518         *\n                                          \u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510     *\n                                          \u2514\u2500\u25b6\u2502WeakSet\u2502     *\n                                             \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518     *\n")),(0,r.kt)("h2",{id:"\u8d44\u6599"},"\u8d44\u6599"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://262.ecma-international.org/13.0/#sec-keyed-collections"},"https://262.ecma-international.org/13.0/#sec-keyed-collections")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Keyed_collections#key_and_value_equality_of_map_and_set"},"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Keyed_collections#key_and_value_equality_of_map_and_set"))))}k.isMDXComponent=!0}}]);