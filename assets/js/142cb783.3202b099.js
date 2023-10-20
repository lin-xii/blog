"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6806],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(a),g=r,d=c["".concat(s,".").concat(g)]||c[g]||u[g]||l;return a?n.createElement(d,i(i({ref:t},m),{},{components:a})):n.createElement(d,i({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},9545:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={title:"GraphQL schema \u547d\u540d\u4e60\u60ef",date:new Date("2023-10-13T00:00:00.000Z"),authors:"lin-xii",tags:["Apollo Server","GraphQL","Naming"]},i=void 0,o={permalink:"/blog/2023/apollo-server/naming-conventions",source:"@site/blog/2023/apollo-server/naming-conventions.md",title:"GraphQL schema \u547d\u540d\u4e60\u60ef",description:"\u770b\u4e86\u904d\u5b98\u65b9\u6587\u6863\uff0c\u603b\u7ed3\u4e86\u4e9b\u5e38\u7528\u7684\u547d\u540d\u4e60\u60ef\u3002",date:"2023-10-13T00:00:00.000Z",formattedDate:"2023\u5e7410\u670813\u65e5",tags:[{label:"Apollo Server",permalink:"/blog/tags/apollo-server"},{label:"GraphQL",permalink:"/blog/tags/graph-ql"},{label:"Naming",permalink:"/blog/tags/naming"}],readingTime:1.515,hasTruncateMarker:!0,authors:[{name:"\u6797\u5341\u4e8cXII",title:"\u5200\u8015\u706b\u79cd\u7684\u7a0b\u5e8f\u733f",url:"https://github.com/lin-xii",imageURL:"https://github.com/lin-xii.png",key:"lin-xii"}],frontMatter:{title:"GraphQL schema \u547d\u540d\u4e60\u60ef",date:"2023-10-13T00:00:00.000Z",authors:"lin-xii",tags:["Apollo Server","GraphQL","Naming"]},prevItem:{title:"GraphQL schema \u57fa\u672c\u6982\u5ff5",permalink:"/blog/2023/apollo-server/graphql-schema-basics"},nextItem:{title:"\u5c0f\u7834\u7ad9\u7b2c\u4e00\u7bc7blog",permalink:"/blog/2023/first-blog"}},s={authorsImageUrls:[void 0]},p=[{value:"TL;DR",id:"tldr",level:2},{value:"\u7ffb\u8bd1",id:"\u7ffb\u8bd1",level:2},{value:"Original docs",id:"original-docs",level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}],m={toc:p},c="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u770b\u4e86\u904d\u5b98\u65b9\u6587\u6863\uff0c\u603b\u7ed3\u4e86\u4e9b\u5e38\u7528\u7684\u547d\u540d\u4e60\u60ef\u3002"),(0,r.kt)("h2",{id:"tldr"},"TL;DR"),(0,r.kt)("p",null,"GraphQL \u89c4\u8303\u5e76\u6ca1\u6709\u5f3a\u5236\u8981\u6c42\u547d\u540d\u89c4\u8303\uff0c\u4f46\u5efa\u8bae\u9075\u5faa\u4ee5\u4e0b\u89c4\u5219\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Field names"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"camelCase")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Enum values"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"ALL_CAPS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Type names"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"PascalCase")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Enum names"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"PascalCase"))),(0,r.kt)("h2",{id:"\u7ffb\u8bd1"},"\u7ffb\u8bd1"),(0,r.kt)("p",null,"GraphQL \u89c4\u8303\u6ca1\u6709\u5f3a\u5236\u8981\u6c42\u547d\u540d\u89c4\u8303\u3002\u4e0d\u8fc7\uff0c\u5efa\u7acb\u547d\u540d\u89c4\u8303\u6709\u52a9\u4e8e\u786e\u4fdd\u4e00\u81f4\u6027\u3002\u6211\u4eec\u5efa\u8bae\u4f7f\u7528\u4ee5\u4e0b\u7ea6\u5b9a\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u5b57\u6bb5\u540d\u79f0"),"\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"camelCase"),"\u3002\u8bb8\u591a GraphQL \u5ba2\u6237\u7aef\u662f\u7528 JavaScript\u3001Java\u3001Kotlin \u6216\u8005 Swift \u5f00\u53d1\u7684\uff0c\u8fd9\u4e9b\u8bed\u8a00\u4e2d\uff0c\u53d8\u91cf\u901a\u5e38\u4f7f\u7528\u9a7c\u5cf0\u547d\u540d\u6cd5\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u679a\u4e3e\u503c"),"\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"ALL_CAPS"),"\u3002\u679a\u4e3e\u503c\u548c\u5e38\u91cf\u6bd4\u8f83\u76f8\u4f3c\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u7c7b\u578b\u540d\u79f0"),"\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"PascalCase"),"\u3002JavaScript \u7b49\u8bed\u8a00\uff0c\u7c7b\u540d\u901a\u5e38\u4f7f\u7528\u5e15\u65af\u5361\u547d\u540d\u6cd5\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u679a\u4e3e\u540d\u79f0"),"\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"PascalCase"),"\u3002")),(0,r.kt)("h2",{id:"original-docs"},"Original docs"),(0,r.kt)("p",null,"The GraphQL specification is flexible and doesn't impose specific naming guidelines. However, it's helpful to establish a set of conventions to ensure consistency across your organization. We recommend the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Field names")," should use ",(0,r.kt)("inlineCode",{parentName:"li"},"camelCase"),". Many GraphQL clients are written in JavaScript, Java, Kotlin, or Swift, all of which recommend camelCase for variable names."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Type names")," should use ",(0,r.kt)("inlineCode",{parentName:"li"},"PascalCase"),". This matches how classes are defined in the languages mentioned above."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Enum names")," should use ",(0,r.kt)("inlineCode",{parentName:"li"},"PascalCase"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Enum values")," should use ",(0,r.kt)("inlineCode",{parentName:"li"},"ALL_CAPS"),", because they are similar to constants.")),(0,r.kt)("p",null,"These conventions help ensure that most clients don't need to define extra logic to transform the results returned by your server."),(0,r.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://www.apollographql.com/docs/apollo-server/schema/schema#naming-conventions"},"Apollo Server Docs")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/graphql/graphql-spec"},"GraphQL Spec"))))}u.isMDXComponent=!0}}]);