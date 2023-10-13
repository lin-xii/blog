"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[806],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),g=r,d=m["".concat(s,".").concat(g)]||m[g]||u[g]||l;return n?a.createElement(d,o(o({ref:t},c),{},{components:n})):a.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8477:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={title:"GraphQL schema \u547d\u540d\u4e60\u60ef",date:new Date("2023-10-13T00:00:00.000Z"),authors:"lin-xii",tags:["Apollo Server","GraphQL","Naming"]},o=void 0,i={permalink:"/blog/2023/apollo-server/naming-conventions",source:"@site/blog/2023/apollo-server/naming-conventions.md",title:"GraphQL schema \u547d\u540d\u4e60\u60ef",description:"\u770b\u4e86\u904d\u5b98\u65b9\u6587\u6863\uff0c\u603b\u7ed3\u4e86\u4e9b\u5e38\u7528\u7684\u547d\u540d\u4e60\u60ef\u3002",date:"2023-10-13T00:00:00.000Z",formattedDate:"2023\u5e7410\u670813\u65e5",tags:[{label:"Apollo Server",permalink:"/blog/tags/apollo-server"},{label:"GraphQL",permalink:"/blog/tags/graph-ql"},{label:"Naming",permalink:"/blog/tags/naming"}],readingTime:.93,hasTruncateMarker:!0,authors:[{name:"\u6797\u5341\u4e8cXII",title:"\u5200\u8015\u706b\u79cd\u7684\u7a0b\u5e8f\u733f",url:"https://github.com/lin-xii",imageURL:"https://github.com/lin-xii.png",key:"lin-xii"}],frontMatter:{title:"GraphQL schema \u547d\u540d\u4e60\u60ef",date:"2023-10-13T00:00:00.000Z",authors:"lin-xii",tags:["Apollo Server","GraphQL","Naming"]},nextItem:{title:"\u5c0f\u7834\u7ad9\u7b2c\u4e00\u7bc7blog",permalink:"/blog/2023/first-blog"}},s={authorsImageUrls:[void 0]},p=[{value:"TL;DR",id:"tldr",level:2},{value:"Original docs",id:"original-docs",level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u770b\u4e86\u904d\u5b98\u65b9\u6587\u6863\uff0c\u603b\u7ed3\u4e86\u4e9b\u5e38\u7528\u7684\u547d\u540d\u4e60\u60ef\u3002"),(0,r.kt)("h2",{id:"tldr"},"TL;DR"),(0,r.kt)("p",null,"GraphQL \u89c4\u8303\u5e76\u6ca1\u6709\u5f3a\u5236\u8981\u6c42\u547d\u540d\u89c4\u8303\uff0c\u4f46\u5efa\u8bae\u9075\u5faa\u4ee5\u4e0b\u89c4\u5219\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Field names"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"camelCase")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Enum values"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"ALL_CAPS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Type names"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"PascalCase")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Enum names"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"PascalCase"))),(0,r.kt)("h2",{id:"original-docs"},"Original docs"),(0,r.kt)("p",null,"The GraphQL specification is flexible and doesn't impose specific naming guidelines. However, it's helpful to establish a set of conventions to ensure consistency across your organization. We recommend the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Field names")," should use ",(0,r.kt)("inlineCode",{parentName:"li"},"camelCase"),". Many GraphQL clients are written in JavaScript, Java, Kotlin, or Swift, all of which recommend camelCase for variable names."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Type names")," should use ",(0,r.kt)("inlineCode",{parentName:"li"},"PascalCase"),". This matches how classes are defined in the languages mentioned above."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Enum names")," should use ",(0,r.kt)("inlineCode",{parentName:"li"},"PascalCase"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Enum values")," should use ",(0,r.kt)("inlineCode",{parentName:"li"},"ALL_CAPS"),", because they are similar to constants.")),(0,r.kt)("p",null,"These conventions help ensure that most clients don't need to define extra logic to transform the results returned by your server."),(0,r.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://www.apollographql.com/docs/apollo-server/schema/schema#naming-conventions"},"Apollo Server Docs")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/graphql/graphql-spec"},"GraphQL Spec"))))}u.isMDXComponent=!0}}]);