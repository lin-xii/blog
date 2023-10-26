"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1670],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=u(n),k=l,h=s["".concat(o,".").concat(k)]||s[k]||c[k]||r;return n?a.createElement(h,i(i({ref:t},m),{},{components:n})):a.createElement(h,i({ref:t},m))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[s]="string"==typeof e?e:l,i[1]=p;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},8150:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>u});var a=n(7462),l=(n(7294),n(3905));const r={title:"GraphQL schema basics",date:new Date("2023-10-25T00:00:00.000Z"),authors:"lin-xii",sidebar_label:"Schema basics",tags:["Apollo","GraphQL","\u6e23\u7ffb\u8bd1"]},i=void 0,p={unversionedId:"Apollo Server/Defining a schema/graphql-schema-basics",id:"Apollo Server/Defining a schema/graphql-schema-basics",title:"GraphQL schema basics",description:"GraphQL \u670d\u52a1\u7aef \u4f7f\u7528 schema \u6765\u63cf\u8ff0\u6570\u636e\u7ed3\u6784\u3002schema \u5212\u5206\u4e86 type \u548c field \u7684\u5c42\u6b21\u7ed3\u6784\uff0c\u8fd9\u4e9b field \u901a\u5e38\u662f\u5b58\u50a8\u5728\u540e\u7aef\u6570\u636e\u5e93\u4e2d\u7684\u3002schema \u8fd8\u5b9a\u4e49\u4e86\u5ba2\u6237\u7aef\u53ef\u4ee5\u6267\u884c\u7684 queries \u548c mutations\u3002",source:"@site/docs/Apollo Server/Defining a schema/graphql-schema-basics.md",sourceDirName:"Apollo Server/Defining a schema",slug:"/Apollo Server/Defining a schema/graphql-schema-basics",permalink:"/blog/docs/Apollo Server/Defining a schema/graphql-schema-basics",draft:!1,tags:[{label:"Apollo",permalink:"/blog/docs/tags/apollo"},{label:"GraphQL",permalink:"/blog/docs/tags/graph-ql"},{label:"\u6e23\u7ffb\u8bd1",permalink:"/blog/docs/tags/\u6e23\u7ffb\u8bd1"}],version:"current",frontMatter:{title:"GraphQL schema basics",date:"2023-10-25T00:00:00.000Z",authors:"lin-xii",sidebar_label:"Schema basics",tags:["Apollo","GraphQL","\u6e23\u7ffb\u8bd1"]},sidebar:"tutorialSidebar",next:{title:"Introduction",permalink:"/blog/docs/Apollo Server/Introduction"}},o={},u=[{value:"The schema definition language",id:"the-schema-definition-language",level:2},{value:"\u5b57\u6bb5\u5b9a\u4e49",id:"\u5b57\u6bb5\u5b9a\u4e49",level:2},{value:"\u5b57\u6bb5\u5217\u8868",id:"\u5b57\u6bb5\u5217\u8868",level:3},{value:"\u5b57\u6bb5\u80fd\u5426\u4e3a null",id:"\u5b57\u6bb5\u80fd\u5426\u4e3a-null",level:3},{value:"\u5217\u8868\u80fd\u5426\u4e3a null",id:"\u5217\u8868\u80fd\u5426\u4e3a-null",level:4},{value:"\u652f\u6301\u7684\u7c7b\u578b",id:"\u652f\u6301\u7684\u7c7b\u578b",level:2},{value:"Scalar",id:"scalar",level:3},{value:"Object",id:"object",level:3},{value:"__typename \u5b57\u6bb5",id:"__typename-\u5b57\u6bb5",level:4}],m={toc:u},s="wrapper";function c(e){let{components:t,...n}=e;return(0,l.kt)(s,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"GraphQL \u670d\u52a1\u7aef \u4f7f\u7528 ",(0,l.kt)("strong",{parentName:"p"},"schema")," \u6765\u63cf\u8ff0\u6570\u636e\u7ed3\u6784\u3002schema \u5212\u5206\u4e86 ",(0,l.kt)("strong",{parentName:"p"},"type")," \u548c ",(0,l.kt)("strong",{parentName:"p"},"field")," \u7684\u5c42\u6b21\u7ed3\u6784\uff0c\u8fd9\u4e9b field \u901a\u5e38\u662f\u5b58\u50a8\u5728\u540e\u7aef\u6570\u636e\u5e93\u4e2d\u7684\u3002schema \u8fd8\u5b9a\u4e49\u4e86\u5ba2\u6237\u7aef\u53ef\u4ee5\u6267\u884c\u7684 ",(0,l.kt)("strong",{parentName:"p"},"queries")," \u548c ",(0,l.kt)("strong",{parentName:"p"},"mutations"),"\u3002"),(0,l.kt)("p",null,"\u8fd9\u7bc7\u6587\u7ae0\u4ecb\u7ecd\u4e86 schema \u7684\u57fa\u672c\u6982\u5ff5\uff0c\u4ee5\u53ca\u5982\u4f55\u521b\u5efa\u4e00\u4e2a GraphQL \u670d\u52a1\u7aef\u3002"),(0,l.kt)("h2",{id:"the-schema-definition-language"},"The schema definition language"),(0,l.kt)("p",null,"GraphQL \u89c4\u8303 \u5b9a\u4e49\u4e86\u65b9\u4fbf\u4eba\u4eec\u9605\u8bfb\u7684 ",(0,l.kt)("strong",{parentName:"p"},"schema definition language"),"(",(0,l.kt)("strong",{parentName:"p"},"SDL"),")\uff0cSDL \u7528\u6765\u5b9a\u4e49 schema \u7684\u7ed3\u6784\u5e76\u4e14\u4ee5\u5b57\u7b26\u4e32\u7684\u5f62\u5f0f\u5b58\u50a8\u3002"),(0,l.kt)("p",null,"\u8fd9\u662f\u4e00\u4e2a\u7b80\u77ed\u7684 schema \u793a\u4f8b\uff0c\u5305\u542b\u4e86 2 \u79cd\u5bf9\u8c61\u7c7b\u578b\uff1aBook \u548c Author\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type Book {\n  title: String\n  author: Author\n}\n\ntype Author {\n  name: String\n  books: [Book]\n}\n")),(0,l.kt)("p",null,"schema \u5b9a\u4e49\u4e86\u7c7b\u578b\u7684\u96c6\u5408\u548c\u5b83\u4eec\u4e4b\u95f4\u7684\u5173\u7cfb\u3002\u5728\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c\u4e00\u672c Book \u53ef\u4ee5\u4e0e\u4e00\u4f4d Author \u5173\u8054\uff0c\u5e76\u4e14\u4e00\u4f4d Author \u53ef\u4ee5\u5173\u8054\u591a\u672c Book\u3002"),(0,l.kt)("p",null,"\u56e0\u4e3a\u8fd9\u4e9b\u5173\u7cfb\u88ab\u5b9a\u4e49\u5728\u7edf\u4e00\u3001\u89c4\u8303\u7684 schema \u4e2d\uff0c\u5ba2\u6237\u7aef\u5f00\u53d1\u4eba\u5458\u80fd\u591f\u77e5\u9053\u54ea\u4e9b\u6570\u636e\u662f\u53ef\u7528\u7684\uff0c\u8fd8\u53ef\u4ee5\u5728\u4e00\u4e2a\u7cbe\u7b80\u7684 query \u4e2d\u67e5\u8be2\u5230\u9700\u8981\u7684\u6570\u636e\u3002"),(0,l.kt)("p",null,"\u6ce8\u610f\uff0cschema ",(0,l.kt)("strong",{parentName:"p"},"\u4e0d\u5b9a\u4e49"),"\u6570\u636e\u7684\u6765\u6e90\u4e0e\u5b58\u50a8\u65b9\u5f0f\u3002schema \u4e0e\u5b9e\u73b0\u5b8c\u5168\u65e0\u5173\u3002"),(0,l.kt)("h2",{id:"\u5b57\u6bb5\u5b9a\u4e49"},"\u5b57\u6bb5\u5b9a\u4e49"),(0,l.kt)("p",null,"\u5728 schema \u4e2d\uff0c\u5927\u90e8\u5206\u81ea\u5b9a\u4e49\u7684\u7c7b\u578b\uff0c\u90fd\u6709\u4e00\u4e2a\u6216\u591a\u4e2a\u5b57\u6bb5\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"# This Book type has two fields: title and author\ntype Book {\n  title: String # returns a String\n  author: Author # returns an Author\n}\n")),(0,l.kt)("p",null,"\u6bcf\u4e2a\u5b57\u6bb5\u90fd\u4f1a\u8fd4\u56de\u7c7b\u578b\u5b9a\u4e49\u7684\u6570\u636e\u3002\u4e00\u4e2a\u5b57\u6bb5\u8fd4\u56de\u7684\u7c7b\u578b\uff0c\u53ef\u4ee5\u662f scalar\u3001object\u3001enum\u3001union \u6216\u8005 interface\u3002"),(0,l.kt)("h3",{id:"\u5b57\u6bb5\u5217\u8868"},"\u5b57\u6bb5\u5217\u8868"),(0,l.kt)("p",null,"\u4e00\u4e2a\u5b57\u6bb5\u53ef\u4ee5\u8fd4\u56de\u4e00\u4e2a\u5305\u542b\u7279\u5b9a\u7c7b\u578b\u9879\u76ee\u7684",(0,l.kt)("strong",{parentName:"p"},"\u5217\u8868"),"\u3002\u53ef\u4ee5\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"[]"),"\u6765\u58f0\u660e\u5b57\u6bb5\u5217\u8868\uff0c\u5c31\u50cf\u8fd9\u6837\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type Author {\n  name: String\n  books: [Book] # A list of Books\n}\n")),(0,l.kt)("h3",{id:"\u5b57\u6bb5\u80fd\u5426\u4e3a-null"},"\u5b57\u6bb5\u80fd\u5426\u4e3a null"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u9664\u975e\u7279\u6b8a\u58f0\u660e\uff0c\u5728 schema \u4e2d\u5b9a\u4e49\u7684\u5b57\u6bb5\uff0c\u90fd\u662f\u53ef\u4ee5\u8fd4\u56de",(0,l.kt)("inlineCode",{parentName:"p"},"null"),"\u7684\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u5728\u5b57\u6bb5\u5b9a\u4e49\u4e2d\u6dfb\u52a0",(0,l.kt)("inlineCode",{parentName:"p"},"!"),"\u6765\u58f0\u660e\u5b57\u6bb5\u4e0d\u80fd\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"null"),"\uff0c\u5c31\u50cf\u8fd9\u6837\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type Author {\n  name: String! # Can't return null\n  books: [Book]\n}\n")),(0,l.kt)("p",null,"name \u5b57\u6bb5",(0,l.kt)("strong",{parentName:"p"},"\u4e0d\u80fd\u8fd4\u56de"),(0,l.kt)("inlineCode",{parentName:"p"},"null"),"\u3002\u5982\u679c\u4f60\u7684 GraphQL \u670d\u52a1\u5c1d\u8bd5\u8fd4\u56de",(0,l.kt)("inlineCode",{parentName:"p"},"null"),"\uff0c\u5c06\u4f1a\u629b\u51fa\u4e00\u4e2a\u9519\u8bef\u3002"),(0,l.kt)("h4",{id:"\u5217\u8868\u80fd\u5426\u4e3a-null"},"\u5217\u8868\u80fd\u5426\u4e3a null"),(0,l.kt)("p",null,"\u5728\u5b57\u6bb5\u5217\u8868\u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"!"),"\u53ef\u4ee5\u51fa\u73b0\u5728\u4e24\u4e2a\u4f4d\u7f6e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type Author {\n  books: [Book!]! # This list can't be null AND its list *items* can't be null\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c",(0,l.kt)("inlineCode",{parentName:"li"},"!"),"\u51fa\u73b0\u5728\u65b9\u62ec\u53f7",(0,l.kt)("em",{parentName:"li"},"\u5185\u90e8"),"\uff0c\u610f\u5473\u7740\u8fd4\u56de\u7684\u5217\u8868\u4e2d\uff0c",(0,l.kt)("em",{parentName:"li"},"\u5217\u8868\u9879"),"\u4e0d\u80fd\u4e3a",(0,l.kt)("inlineCode",{parentName:"li"},"null"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c",(0,l.kt)("inlineCode",{parentName:"li"},"!"),"\u51fa\u73b0\u5728\u65b9\u62ec\u53f7",(0,l.kt)("em",{parentName:"li"},"\u5916\u90e8"),"\uff0c\u610f\u5473\u7740\u8fd4\u56de\u7684",(0,l.kt)("em",{parentName:"li"},"\u5217\u8868\u672c\u8eab"),"\u4e0d\u80fd\u4e3a",(0,l.kt)("inlineCode",{parentName:"li"},"null"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5728",(0,l.kt)("em",{parentName:"li"},"\u4efb\u4f55\u60c5\u51b5"),"\u4e0b\uff0c\u5b57\u6bb5\u5217\u8868\u90fd\u662f\u53ef\u4ee5\u8fd4\u56de\u4e00\u4e2a",(0,l.kt)("em",{parentName:"li"},"\u7a7a"),"\u5217\u8868\u7684")),(0,l.kt)("h2",{id:"\u652f\u6301\u7684\u7c7b\u578b"},"\u652f\u6301\u7684\u7c7b\u578b"),(0,l.kt)("p",null,"\u6240\u6709\u5b9a\u4e49\u5728 GraphQL schema \u4e2d\u7684\u7c7b\u578b\uff0c\u90fd\u5c5e\u4e8e\u4ee5\u4e0b\u7c7b\u522b\u4e4b\u4e00\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#scalar"},"Scalar")),(0,l.kt)("li",{parentName:"ul"},"Object",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u8c61\u5305\u542b 3 \u79cd\u7279\u6b8a\u7684",(0,l.kt)("strong",{parentName:"li"},"\u6839\u64cd\u4f5c\u7c7b\u578b"),"\uff1aQuery\u3001Muation \u548c Subscription\u3002"))),(0,l.kt)("li",{parentName:"ul"},"Input"),(0,l.kt)("li",{parentName:"ul"},"Enum"),(0,l.kt)("li",{parentName:"ul"},"Union"),(0,l.kt)("li",{parentName:"ul"},"Interface")),(0,l.kt)("p",null,"\u6bcf\u4e00\u79cd\u5728\u540e\u6587\u90fd\u6709\u6240\u63cf\u8ff0\u3002"),(0,l.kt)("h3",{id:"scalar"},"Scalar"),(0,l.kt)("p",null,"Scalar \u7c7b\u578b\u7c7b\u4f3c\u5e38\u7528\u7f16\u7a0b\u8bed\u8a00\u4e2d\u7684\u539f\u59cb\u7c7b\u578b\u3002\u5b83\u4eec\u603b\u662f\u89e3\u6790\u4e3a\u5177\u4f53\u7684\u6570\u636e\u7c7b\u578b\u3002"),(0,l.kt)("p",null,"GraphQL \u9ed8\u8ba4\u7684 scalar \u7c7b\u578b\u6709\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Int"),"\uff1a\u6709\u7b26\u53f7 32-bit \u6574\u6570"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Float"),"\uff1a\u6709\u7b26\u53f7 \u53cc\u7cbe\u5ea6 \u6d6e\u70b9\u6570"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"String"),"\uff1aUTF-8 \u7f16\u7801\u7684\u5b57\u7b26\u4e32"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Boolean"),"\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"\u6216\u8005",(0,l.kt)("inlineCode",{parentName:"li"},"false")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ID"),"(\u521d\u59cb\u5316\u4e3a\u5b57\u7b26\u4e32)\uff1a\u4e00\u4e2a\u5e38\u88ab\u7528\u4e8e\u83b7\u53d6\u5bf9\u8c61\u6216\u7f13\u5b58\u952e\u503c\u7684\u552f\u4e00\u6807\u8bc6\u3002\u867d\u7136\u88ab\u521d\u59cb\u5316\u4e3a\u5b57\u7b26\u4e32\uff0c\u4f46",(0,l.kt)("inlineCode",{parentName:"li"},"ID"),"\u5e76\u4e0d\u662f\u4eba\u7c7b\u53ef\u8bfb\u7684\u3002")),(0,l.kt)("p",null,"\u8fd9\u4e9b\u539f\u59cb\u7c7b\u578b\u8986\u76d6\u4e86\u4e3b\u8981\u7684\u4f7f\u7528\u573a\u666f\u3002\u5728\u66f4\u5177\u4f53\u7684\u573a\u666f\u4e2d\uff0c\u53ef\u4ee5\u521b\u5efa \u81ea\u5b9a\u4e49 scalar \u7c7b\u578b\u3002"),(0,l.kt)("h3",{id:"object"},"Object"),(0,l.kt)("p",null,"GraphQL schema \u4e2d\uff0c\u5927\u591a\u6570\u81ea\u5b9a\u4e49\u7684\u7c7b\u578b\uff0c\u90fd\u662f\u5bf9\u8c61\u7c7b\u578b\u3002\u4e00\u4e2a\u5bf9\u8c61\u7c7b\u578b\u5305\u542b\u4e86\u591a\u4e2a\u5b57\u6bb5\u7684\u96c6\u5408\uff0c\u6bcf\u4e2a\u5b57\u6bb5\u90fd\u62e5\u6709\u5404\u81ea\u7684\u7c7b\u578b\u3002"),(0,l.kt)("p",null,"\u4e24\u4e2a Object \u7c7b\u578b\u53ef\u4ee5\u4e92\u76f8\u5305\u542b\u5f7c\u6b64\uff0c\u4f5c\u4e3a\u5404\u81ea\u5b57\u6bb5\u7684\u7c7b\u578b\u3002\u4f8b\u5982\u6211\u4eec\u4e4b\u524d\u793a\u4f8b\u6240\u793a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type Book {\n  title: String\n  author: Author\n}\n\ntype Author {\n  name: String\n  books: [Book]\n}\n")),(0,l.kt)("h4",{id:"__typename-\u5b57\u6bb5"},"_","_","typename \u5b57\u6bb5"),(0,l.kt)("p",null,"\u6bcf\u4e00\u4e2a schema \u4e2d\u7684 Object \u7c7b\u578b\uff0c\u90fd\u4f1a\u81ea\u52a8\u5305\u542b\u4e00\u4e2a\u540d\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"__typename"),"\u7684\u5b57\u6bb5\u3002\u8fd9\u4e2a\u5b57\u6bb5\uff0c\u4f1a\u4ee5",(0,l.kt)("inlineCode",{parentName:"p"},"String"),"\u7684\u5f62\u5f0f\uff0c\u8fd4\u56de\u8be5 Object \u7c7b\u578b\u7684\u540d\u79f0(\u4f8b\u5982\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"Book"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"Author"),")\u3002"),(0,l.kt)("p",null,"GraphQL \u5ba2\u6237\u7aef \u53ef\u4ee5\u901a\u8fc7\u5bf9\u8c61\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"__typename"),"\u6765\u5b8c\u6210\u5f88\u591a\u4e8b\u60c5\uff0c\u4f8b\u5982\u4e00\u4e2a\u53ef\u4ee5\u8fd4\u56de\u591a\u7c7b\u578b\u7684\u5b57\u6bb5\uff0c\u51b3\u5b9a\u8fd4\u56de\u4f55\u79cd\u7c7b\u578b(\u4f8b\u5982\uff1aunion \u6216\u8005 interface)\u3002Apollo \u5ba2\u6237\u7aef \u4f9d\u9760",(0,l.kt)("inlineCode",{parentName:"p"},"__typename"),"\u6765\u7f13\u5b58\u67e5\u8be2\u7ed3\u679c\uff0c\u56e0\u6b64\u5b83\u4f1a\u5728\u6bcf\u4e2a\u67e5\u8be2\u7684\u5bf9\u8c61\u4e2d\uff0c\u81ea\u52a8\u5305\u542b",(0,l.kt)("inlineCode",{parentName:"p"},"__typename"),"\u5b57\u6bb5\u3002"),(0,l.kt)("p",null,"\u56e0\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"__typename"),"\u603b\u662f\u6709\u6548\u7684\uff0c\u6240\u4ee5\u4e0b\u8fb9\u7684\u67e5\u8be2\u662f\u5408\u6cd5\u7684\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"query UniversalQuery {\n  __typename\n}\n")))}c.isMDXComponent=!0}}]);