"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9956],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var o=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,o,a=function(e,r){if(null==e)return{};var t,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=o.createContext({}),s=function(e){var r=o.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=s(e.components);return o.createElement(i.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},d=o.forwardRef((function(e,r){var t=e.components,a=e.mdxType,n=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(t),d=a,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||n;return t?o.createElement(f,l(l({ref:r},c),{},{components:t})):o.createElement(f,l({ref:r},c))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var n=t.length,l=new Array(n);l[0]=d;var p={};for(var i in r)hasOwnProperty.call(r,i)&&(p[i]=r[i]);p.originalType=e,p[u]="string"==typeof e?e:a,l[1]=p;for(var s=2;s<n;s++)l[s]=t[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6525:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>n,metadata:()=>p,toc:()=>s});var o=t(7462),a=(t(7294),t(3905));const n={title:"Introduction to Apollo Server",date:new Date("2023-10-20T00:00:00.000Z"),authors:"lin-xii",sidebar_label:"Introduction",sidebar_position:1,tags:["Apollo","GraphQL","\u6e23\u7ffb\u8bd1"]},l=void 0,p={unversionedId:"Apollo Server/Introduction",id:"Apollo Server/Introduction",title:"Introduction to Apollo Server",description:"Apollo Server \u662f\u4e00\u4e2a\u5f00\u6e90\u3001\u89c4\u8303\u5316\u7684 GraphQL \u670d\u52a1\u5668\u5b9e\u73b0\u3002 \u5b83\u517c\u5bb9\u4efb\u4f55 GraphQL \u5ba2\u6237\u7aef\uff0c\u5305\u62ec Apollo Client\u3002\u8fd9\u662f\u6784\u5efa\u4ea7\u54c1\u5316\u3001\u81ea\u6587\u6863\u5f0f\u3001\u6570\u636e\u5b58\u50a8\u65b9\u5f0f\u65e0\u5173\u7684 GraphQL API \u7684\u6700\u4f73\u65b9\u5f0f\u3002",source:"@site/docs/Apollo Server/Introduction.md",sourceDirName:"Apollo Server",slug:"/Apollo Server/Introduction",permalink:"/blog/docs/Apollo Server/Introduction",draft:!1,tags:[{label:"Apollo",permalink:"/blog/docs/tags/apollo"},{label:"GraphQL",permalink:"/blog/docs/tags/graph-ql"},{label:"\u6e23\u7ffb\u8bd1",permalink:"/blog/docs/tags/\u6e23\u7ffb\u8bd1"}],version:"current",sidebarPosition:1,frontMatter:{title:"Introduction to Apollo Server",date:"2023-10-20T00:00:00.000Z",authors:"lin-xii",sidebar_label:"Introduction",sidebar_position:1,tags:["Apollo","GraphQL","\u6e23\u7ffb\u8bd1"]},sidebar:"tutorialSidebar",next:{title:"Schema basics",permalink:"/blog/docs/Apollo Server/Defining a schema/graphql-schema-basics"}},i={},s=[{value:"\u4f60\u53ef\u4ee5\u5c06 Apollo Server \u7528\u4e8e\uff1a",id:"\u4f60\u53ef\u4ee5\u5c06-apollo-server-\u7528\u4e8e",level:4},{value:"Apollo Server \u53ef\u4ee5\u63d0\u4f9b\u4ec0\u4e48\u80fd\u529b\uff1a",id:"apollo-server-\u53ef\u4ee5\u63d0\u4f9b\u4ec0\u4e48\u80fd\u529b",level:4}],c={toc:s},u="wrapper";function m(e){let{components:r,...n}=e;return(0,a.kt)(u,(0,o.Z)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Apollo Server \u662f\u4e00\u4e2a",(0,a.kt)("a",{parentName:"strong",href:"https://github.com/apollographql/apollo-server"},"\u5f00\u6e90"),"\u3001\u89c4\u8303\u5316\u7684 GraphQL \u670d\u52a1\u5668\u5b9e\u73b0\u3002")," \u5b83\u517c\u5bb9\u4efb\u4f55 GraphQL \u5ba2\u6237\u7aef\uff0c\u5305\u62ec ",(0,a.kt)("a",{parentName:"p",href:"https://www.apollographql.com/docs/react"},"Apollo Client"),"\u3002\u8fd9\u662f\u6784\u5efa\u4ea7\u54c1\u5316\u3001\u81ea\u6587\u6863\u5f0f\u3001\u6570\u636e\u5b58\u50a8\u65b9\u5f0f\u65e0\u5173\u7684 GraphQL API \u7684\u6700\u4f73\u65b9\u5f0f\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u8fd9\u662f\u56fe\u7247",src:t(2618).Z,title:"Apollo Server",width:"1275",height:"648"})),(0,a.kt)("h4",{id:"\u4f60\u53ef\u4ee5\u5c06-apollo-server-\u7528\u4e8e"},"\u4f60\u53ef\u4ee5\u5c06 Apollo Server \u7528\u4e8e\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5c06 GraphQL server \u4f5c\u4e3a\u8d85\u7ea7 GraphQL \u670d\u52a1\u4e2d\u7684",(0,a.kt)("a",{parentName:"li",href:"https://www.apollographql.com/docs/apollo-server/using-federation/apollo-subgraph-setup"},"\u5b50\u670d\u52a1")),(0,a.kt)("li",{parentName:"ul"},"\u4f5c\u4e3a\u7ec4\u4ef6\u6ce8\u5165\u5230\u73b0\u6709\u7684 Node.js \u5e94\u7528\u4e2d\u3002\u8fd9\u4e9b\u5e94\u7528\u53ef\u4ee5\u662f\u57fa\u4e8e ",(0,a.kt)("a",{parentName:"li",href:"https://www.apollographql.com/docs/apollo-server/api/express-middleware"},"Express"),"\uff08\u5305\u62ec",(0,a.kt)("a",{parentName:"li",href:"https://www.apollographql.com/docs/apollo-server/integrations/mern"},"MERN"),"\u6280\u672f\u6808\uff09\u3001",(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@as-integrations/aws-lambda"},"AWS Lambda"),"\u3001",(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@as-integrations/azure-functions"},"Azure Functions"),"\u3001",(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@as-integrations/cloudflare-workers"},"Cloudflare"),"\u3001",(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@as-integrations/fastify"},"Fastify"),"\uff0c\u548c",(0,a.kt)("a",{parentName:"li",href:"https://www.apollographql.com/docs/apollo-server/integrations/integration-index"},"\u5176\u4ed6\u7684\u6846\u67b6\u6216\u5e73\u53f0"),"\u3002")),(0,a.kt)("h4",{id:"apollo-server-\u53ef\u4ee5\u63d0\u4f9b\u4ec0\u4e48\u80fd\u529b"},"Apollo Server \u53ef\u4ee5\u63d0\u4f9b\u4ec0\u4e48\u80fd\u529b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u7b80\u5355\u7684\u8bbe\u7f6e"),"\uff0c\u4f60\u7684\u5ba2\u6237\u7aef\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u5feb\u901f\u7684\u8fdb\u884c\u5f00\u53d1\u5de5\u4f5c"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u6e10\u8fdb\u5f0f\u5f15\u7528"),"\uff0c\u662f\u4f60\u80fd\u591f\u6309\u7167\u5b9e\u9645\u9700\u6c42\u6765\u6dfb\u52a0\u529f\u80fd\u7279\u6027"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u4f18\u79c0\u7684\u517c\u5bb9\u6027"),"\uff0c\u4e0e\u6570\u636e\u6e90\u3001\u6253\u5305\u65b9\u5f0f\u548c\u5ba2\u6237\u7aef\u5b9e\u73b0\u65b9\u5f0f\u65e0\u5173"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u751f\u4ea7\u80fd\u529b\u5b8c\u5907"),"\uff0c\u662f\u4f60\u53ef\u4ee5\u66f4\u81ea\u4fe1\u7684\u5c06 GraphQL \u5e94\u7528\u90e8\u7f72\u5230\u751f\u4ea7\u73af\u5883")))}m.isMDXComponent=!0},2618:(e,r,t)=>{t.d(r,{Z:()=>o});const o=t.p+"assets/images/introduction-bf39f26a199f1755a78e4fe0a9dcc4cb.jpg"}}]);