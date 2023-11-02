"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9725],{3905:(e,a,r)=>{r.d(a,{Zo:()=>c,kt:()=>k});var n=r(7294);function t(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function l(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?l(Object(r),!0).forEach((function(a){t(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function p(e,a){if(null==e)return{};var r,n,t=function(e,a){if(null==e)return{};var r,n,t={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],a.indexOf(r)>=0||(t[r]=e[r]);return t}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var s=n.createContext({}),i=function(e){var a=n.useContext(s),r=a;return e&&(r="function"==typeof e?e(a):o(o({},a),e)),r},c=function(e){var a=i(e.components);return n.createElement(s.Provider,{value:a},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var r=e.components,t=e.mdxType,l=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=i(r),m=t,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return r?n.createElement(k,o(o({ref:a},c),{},{components:r})):n.createElement(k,o({ref:a},c))}));function k(e,a){var r=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var l=r.length,o=new Array(l);o[0]=m;var p={};for(var s in a)hasOwnProperty.call(a,s)&&(p[s]=a[s]);p.originalType=e,p[u]="string"==typeof e?e:t,o[1]=p;for(var i=2;i<l;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6197:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>i});var n=r(7462),t=(r(7294),r(3905));const l={title:"Custom scalars",date:new Date("2023-10-30T00:00:00.000Z"),authors:"lin-xii",tags:["Apollo","GraphQL","\u6e23\u7ffb\u8bd1"],sidebar_position:3},o=void 0,p={unversionedId:"Apollo Server/Defining a Schema/custom-scalars",id:"Apollo Server/Defining a Schema/custom-scalars",title:"Custom scalars",description:"GraphQL \u89c4\u8303\u5305\u542b\u4e86\u9ed8\u8ba4\u7684 scalar \u7c7b\u578b\uff0cInt\u3001Float\u3001String\u3001Boolean\u548cID\u3002\u867d\u7136\u8fd9\u4e9b scalar \u7c7b\u578b\u8986\u76d6\u4e86\u4e3b\u8981\u7684\u4f7f\u7528\u573a\u666f\uff0c\u4f46\u4e00\u4e9b\u5e94\u7528\u9700\u8981\u652f\u6301\u5176\u4ed6\u7684\u539f\u5b50\u6570\u636e\u7c7b\u578b(\u4f8b\u5982Date)\u6216\u7ed9\u73b0\u6709\u7684\u7c7b\u578b\u589e\u52a0\u6821\u9a8c\u3002\u4e3a\u4e86\u4f7f\u8fd9\u4e9b\u6210\u4e3a\u53ef\u80fd\uff0c\u4f60\u53ef\u4ee5\u5b9a\u4e49 custom scalar \u7c7b\u578b\u3002",source:"@site/docs/Apollo Server/Defining a Schema/custom-scalars.md",sourceDirName:"Apollo Server/Defining a Schema",slug:"/Apollo Server/Defining a Schema/custom-scalars",permalink:"/blog/docs/Apollo Server/Defining a Schema/custom-scalars",draft:!1,tags:[{label:"Apollo",permalink:"/blog/docs/tags/apollo"},{label:"GraphQL",permalink:"/blog/docs/tags/graph-ql"},{label:"\u6e23\u7ffb\u8bd1",permalink:"/blog/docs/tags/\u6e23\u7ffb\u8bd1"}],version:"current",sidebarPosition:3,frontMatter:{title:"Custom scalars",date:"2023-10-30T00:00:00.000Z",authors:"lin-xii",tags:["Apollo","GraphQL","\u6e23\u7ffb\u8bd1"],sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Unions and interfaces",permalink:"/blog/docs/Apollo Server/Defining a Schema/union-and-interface"},next:{title:"Directives",permalink:"/blog/docs/Apollo Server/Defining a Schema/directives"}},s={},i=[{value:"\u5b9a\u4e49 custom scalar",id:"\u5b9a\u4e49-custom-scalar",level:2},{value:"\u5b9a\u4e49 custom scalar \u7684\u903b\u8f91",id:"\u5b9a\u4e49-custom-scalar-\u7684\u903b\u8f91",level:2},{value:"\u4f8b\u5b50\uff1a<code>Date</code> scalar",id:"\u4f8b\u5b50date-scalar",level:2},{value:"<code>serialize</code>",id:"serialize",level:3},{value:"<code>parseValue</code>",id:"parsevalue",level:3},{value:"<code>parseLiteral</code>",id:"parseliteral",level:3},{value:"\u7ed9 Apollo Server \u63d0\u4f9b custom scalar",id:"\u7ed9-apollo-server-\u63d0\u4f9b-custom-scalar",level:2},{value:"\u4f8b\u5b50\uff1a\u9650\u5236\u6574\u6570\u4e3a\u5947\u6570",id:"\u4f8b\u5b50\u9650\u5236\u6574\u6570\u4e3a\u5947\u6570",level:2},{value:"\u5bfc\u5165\u7b2c\u4e09\u65b9\u7684 custom scalar",id:"\u5bfc\u5165\u7b2c\u4e09\u65b9\u7684-custom-scalar",level:2}],c={toc:i},u="wrapper";function d(e){let{components:a,...r}=e;return(0,t.kt)(u,(0,n.Z)({},c,r,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"GraphQL \u89c4\u8303\u5305\u542b\u4e86\u9ed8\u8ba4\u7684 scalar \u7c7b\u578b\uff0c",(0,t.kt)("inlineCode",{parentName:"p"},"Int"),"\u3001",(0,t.kt)("inlineCode",{parentName:"p"},"Float"),"\u3001",(0,t.kt)("inlineCode",{parentName:"p"},"String"),"\u3001",(0,t.kt)("inlineCode",{parentName:"p"},"Boolean"),"\u548c",(0,t.kt)("inlineCode",{parentName:"p"},"ID"),"\u3002\u867d\u7136\u8fd9\u4e9b scalar \u7c7b\u578b\u8986\u76d6\u4e86\u4e3b\u8981\u7684\u4f7f\u7528\u573a\u666f\uff0c\u4f46\u4e00\u4e9b\u5e94\u7528\u9700\u8981\u652f\u6301\u5176\u4ed6\u7684\u539f\u5b50\u6570\u636e\u7c7b\u578b(\u4f8b\u5982",(0,t.kt)("inlineCode",{parentName:"p"},"Date"),")\u6216\u7ed9\u73b0\u6709\u7684\u7c7b\u578b\u589e\u52a0\u6821\u9a8c\u3002\u4e3a\u4e86\u4f7f\u8fd9\u4e9b\u6210\u4e3a\u53ef\u80fd\uff0c\u4f60\u53ef\u4ee5\u5b9a\u4e49 custom scalar \u7c7b\u578b\u3002"),(0,t.kt)("h2",{id:"\u5b9a\u4e49-custom-scalar"},"\u5b9a\u4e49 custom scalar"),(0,t.kt)("p",null,"\u5c06\u4e0b\u9762\u7684\u8bed\u53e5\u6dfb\u52a0\u5230 schema \u4e2d\uff0c\u5c31\u53ef\u4ee5\u5b9a\u4e49\u4e00\u4e2a custom scalar \u7c7b\u578b\uff1a"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-graphql"},"scalar MyCustomScalar\n")),(0,t.kt)("p",null,"\u4f60\u53ef\u4ee5\u7acb\u523b\u4f7f\u7528",(0,t.kt)("inlineCode",{parentName:"p"},"MyCustomScalar"),"\uff0c\u5728 schema \u4e2d\u7684\u4efb\u4f55\u53ef\u4ee5\u4f7f\u7528\u9ed8\u8ba4 scalar \u7684\u5730\u65b9(\u4f8b\u5982\uff0c\u5bf9\u8c61\u5b57\u6bb5\u7684\u7c7b\u578b\u3001\u8f93\u5165\u7c7b\u578b\u7684\u5b57\u6bb5\u6216\u8005\u53c2\u6570)\u3002"),(0,t.kt)("p",null,"\u7136\u800c\uff0cApollo Server \u8fd8\u9700\u8981\u77e5\u9053\u5982\u4f55\u5904\u7406\u65b0\u7c7b\u578b\u7684\u503c\u3002"),(0,t.kt)("h2",{id:"\u5b9a\u4e49-custom-scalar-\u7684\u903b\u8f91"},"\u5b9a\u4e49 custom scalar \u7684\u903b\u8f91"),(0,t.kt)("p",null,"\u5728\u5b9a\u4e49\u4e00\u4e2a custom scalar \u7c7b\u578b\u540e\uff0c\u9700\u8981\u5b9a\u4e49 Apollo Server \u5982\u4f55\u5904\u7406\u8fd9\u4e2a\u7c7b\u578b\u3002\u7279\u522b\u662f\uff0c\u4f60\u9700\u8981\u5b9a\u4e49\u4e0b\u9762\u51e0\u70b9\uff1a"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"scalar \u7684\u503c\u5982\u4f55\u5728\u540e\u7aef\u8868\u793a",(0,t.kt)("ul",{parentName:"li"},(0,t.kt)("li",{parentName:"ul"},"This is often the representation used by the driver for your backing data store."),(0,t.kt)("li",{parentName:"ul"},"\u8fd9\u901a\u5e38\u662f\u9a71\u52a8\u7a0b\u5e8f\u7528\u4e8e\u5907\u4efd\u6570\u636e\u5b58\u50a8\u7684\u8868\u793a\u5f62\u5f0f\u3002"))),(0,t.kt)("li",{parentName:"ul"},"\u503c\u7684\u540e\u7aef\u8868\u73b0\u5f62\u5f0f\u5982\u4f55\u5e8f\u5217\u5316\u4e3a\u517c\u5bb9 JSON \u7684\u7c7b\u578b"),(0,t.kt)("li",{parentName:"ul"},"\u517c\u5bb9 JSON \u7684\u8868\u73b0\u5f62\u5f0f\u5982\u4f55\u53cd\u5e8f\u5217\u5316\u4e3a\u540e\u7aef\u7684\u8868\u73b0\u5f62\u5f0f")),(0,t.kt)("p",null,"\u5728",(0,t.kt)("inlineCode",{parentName:"p"},"GraphQLScalarType"),"\u7c7b\u7684\u5b9e\u4f8b\u4e2d\u5b9a\u4e49\u8fd9\u4e9b\u4ea4\u4e92\u3002"),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"\u79c1\u8d27\uff1a\u8868\u73b0\u5f62\u5f0f\uff0c\u6216\u8bb8\u6362\u6210\u5b58\u50a8\u65b9\u5f0f\uff0c\u66f4\u5408\u9002\u4e00\u70b9\uff1f")),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"\u66f4\u591a\u5173\u4e8e",(0,t.kt)("inlineCode",{parentName:"p"},"graphql"),"\u5e93\u7684\u7c7b\u578b\u7cfb\u7edf\uff0c\u53c2\u8003",(0,t.kt)("a",{parentName:"p",href:"https://graphql.org/graphql-js/type/"},"\u5b98\u65b9\u6587\u6863"))),(0,t.kt)("h2",{id:"\u4f8b\u5b50date-scalar"},"\u4f8b\u5b50\uff1a",(0,t.kt)("inlineCode",{parentName:"h2"},"Date")," scalar"),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},(0,t.kt)("strong",{parentName:"p"},"\u4e0b\u9762\u7684\u4ee3\u7801\uff0c\u9ed8\u8ba4\u4f7f\u7528 Typescript."),"\u4f60\u53ef\u4ee5\u4f7f\u7528\u6bcf\u4e2a\u4ee3\u7801\u5757\u4e2d\u7684\u4e0b\u62c9\u83dc\u5355\uff0c\u5207\u6362\u5230 JavaScript \u7684\u8bed\u8a00\u7248\u672c\u3002"),(0,t.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u4f60\u6b63\u5728\u4f7f\u7528 JavaScript\uff0c\u4f7f\u7528",(0,t.kt)("inlineCode",{parentName:"p"},".js"),"\u548c",(0,t.kt)("inlineCode",{parentName:"p"},".jsx"),"\u6587\u4ef6\u6269\u5c55\u540d\u800c\u4e0d\u662f",(0,t.kt)("inlineCode",{parentName:"p"},".ts"),"\u548c",(0,t.kt)("inlineCode",{parentName:"p"},".tsx"),"\u3002")),(0,t.kt)("p",null,"\u4e0b\u9762\u7684",(0,t.kt)("inlineCode",{parentName:"p"},"GraphQLScalarType"),"\u5bf9\u8c61\u4e3a\u4e00\u4e2a\u5c55\u793a\u65e5\u671f(\u8fd9\u662f\u4e00\u4e2a\u6700\u5e38\u89c1\u7684 custom scalar \u5b9e\u73b0\u65b9\u5f0f)\u7684 custom scalar \u5b9a\u4e49\u4e86\u5904\u7406\u903b\u8f91\u3002\u5b83\u5047\u8bbe\u6211\u4eec\u7684\u540e\u7aef\u4f7f\u7528 JavaScript \u7684",(0,t.kt)("inlineCode",{parentName:"p"},"Date"),"\u5bf9\u8c61\u8868\u8fbe\u4e00\u4e2a\u65e5\u671f\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-typescript"},'import { GraphQLScalarType, Kind } from "graphql";\n\nconst dateScalar = new GraphQLScalarType({\n  name: "Date",\n  description: "Date custom scalar type",\n  serialize(value) {\n    if (value instanceof Date) {\n      return value.getTime(); // Convert outgoing Date to integer for JSON\n    }\n    throw Error("GraphQL Date Scalar serializer expected a `Date` object");\n  },\n  parseValue(value) {\n    if (typeof value === "number") {\n      return new Date(value); // Convert incoming integer to Date\n    }\n    throw new Error("GraphQL Date Scalar parser expected a `number`");\n  },\n  parseLiteral(ast) {\n    if (ast.kind === Kind.INT) {\n      // Convert hard-coded AST string to integer and then to Date\n      return new Date(parseInt(ast.value, 10));\n    }\n    // Invalid hard-coded value (not an integer)\n    return null;\n  },\n});\n')),(0,t.kt)("p",null,"\u8fd9\u6bb5\u521d\u59cb\u5316\u8fc7\u7a0b\u5b9a\u4e86\u4e0b\u9762\u7684\u65b9\u6cd5\uff1a"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"serialize")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"parseValue")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"parseLiteral"))),(0,t.kt)("p",null,"\u8fd9\u4e9b\u65b9\u6cd5\u5171\u540c\u63cf\u8ff0\u4e86 Apollo Server \u5728\u6bcf\u4e00\u79cd\u573a\u666f\u4e0b\uff0c\u5982\u4f55\u4e0e scalar \u8fdb\u884c\u4ea4\u4e92\u3002"),(0,t.kt)("h3",{id:"serialize"},(0,t.kt)("inlineCode",{parentName:"h3"},"serialize")),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"serialize"),"\u65b9\u6cd5\u5c06 scalar \u7684\u540e\u7aef\u8868\u8fbe\u5f62\u5f0f\u8f6c\u6362\u4e3a\u517c\u5bb9 JSON \u7684\u683c\u5f0f\uff0c\u4f7f\u5f97 Apollo Server \u53ef\u4ee5\u5c06\u5176\u5305\u542b\u5728 operation \u7684\u54cd\u5e94\u4e2d\u3002"),(0,t.kt)("p",null,"\u5728\u524d\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c",(0,t.kt)("inlineCode",{parentName:"p"},"Date"),"\u5728\u540e\u7aef\u4ee5 JavaScript \u7684",(0,t.kt)("inlineCode",{parentName:"p"},"Date"),"\u5bf9\u8c61\u8868\u793a\u3002\u5f53\u6211\u4eec\u5728 GraphQL \u54cd\u5e94\u4e2d\u53d1\u9001\u4e00\u4e2a",(0,t.kt)("inlineCode",{parentName:"p"},"Date")," scalar \u65f6\uff0c\u6211\u4eec\u901a\u8fc7 JavaScript ",(0,t.kt)("inlineCode",{parentName:"p"},"Date"),"\u5bf9\u8c61\u7684",(0,t.kt)("inlineCode",{parentName:"p"},"getTime"),"\u51fd\u6570\uff0c\u5c06\u5176\u5e8f\u5217\u5316\u4e3a\u6574\u5f62\u6570\u503c\u3002"),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff0cApollo \u5ba2\u6237\u7aef\u65e0\u6cd5\u81ea\u52a8\u89e3\u6790 custom scalar(",(0,t.kt)("a",{parentName:"p",href:"https://github.com/apollographql/apollo-feature-requests/issues/2"},"\u53c2\u8003 issue"),")\uff0c\u6240\u4ee5\u4f60\u7684\u5ba2\u6237\u7aef\u5fc5\u987b\u5b9a\u4e49\u53cd\u5e8f\u5217\u5316\u8fd9\u4e2a scalar \u503c\u6240\u9700\u8981\u7684\u5904\u7406\u903b\u8f91\u3002")),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"\u79c1\u8d27\uff1a\u8fd9\u4e2a\u53cd\u5e8f\u5217\u5316\u7684\u903b\u8f91\uff0c\u662f\u600e\u4e48\u5e94\u7528\u5230 client \u7684\uff1f\u65b9\u6cd5\u5e94\u8be5\u662f\u5728 server \u5b9a\u4e49\u7684")),(0,t.kt)("h3",{id:"parsevalue"},(0,t.kt)("inlineCode",{parentName:"h3"},"parseValue")),(0,t.kt)("p",null,"\u5728 scalar \u7684 JSON \u503c\u88ab\u6dfb\u52a0\u5230 resolver \u7684",(0,t.kt)("inlineCode",{parentName:"p"},"args"),"\u4e4b\u524d\uff0c",(0,t.kt)("inlineCode",{parentName:"p"},"parseValue"),"\u65b9\u6cd5\u5c06\u5176\u8f6c\u6362\u4e3a\u540e\u7aef\u8868\u793a\u5f62\u5f0f\u3002"),(0,t.kt)("p",null,"\u5f53\u5ba2\u6237\u7aef\u5c06 scalar \u4f5c\u4e3a GraphQL \u53d8\u91cf\u4f20\u9012\u7ed9\u4e00\u4e2a\u53c2\u6570\u65f6\uff0cApollo Server \u4f1a\u8c03\u7528\u8fd9\u4e2a\u65b9\u6cd5\u3002(\u5f53 scalar \u5728 operation string \u4e2d\uff0c\u4f5c\u4e3a\u786c\u7f16\u7801\u63d0\u4f9b\u7ed9\u53c2\u6570\u65f6\uff0c\u4f1a\u8c03\u7528",(0,t.kt)("inlineCode",{parentName:"p"},"parseLiteral"),")"),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"\u79c1\u8d27\uff1aoperation string\uff0c\u6307\u7684\u662f operation \u7684\u5b57\u7b26\u4e32\u8868\u8fbe\u5f62\u5f0f\uff0c\u7c7b\u4f3c\u4e0b\u8fb9\u7684\u793a\u4f8b\uff1a")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-graphql"},"query GetBooks {\n  books {\n    title\n    author\n  }\n}\n")),(0,t.kt)("h3",{id:"parseliteral"},(0,t.kt)("inlineCode",{parentName:"h3"},"parseLiteral")),(0,t.kt)("p",null,"\u5f53\u4f20\u5165\u7684\u67e5\u8be2\u5b57\u7b26\u4e32\u5305\u542b\u786c\u7f16\u7801\u7684 scalar \u53c2\u6570\u65f6\uff0c\u8be5\u503c\u662f\u67e5\u8be2\u6587\u6863\u7684\u62bd\u8c61\u8bed\u6cd5\u6811(AST)\u7684\u4e00\u90e8\u5206\u3002Apollo Server \u8c03\u7528",(0,t.kt)("inlineCode",{parentName:"p"},"parseLiteral"),"\u65b9\u6cd5\u5c06\u8be5\u503c\u7684 AST \u8868\u793a\u5f62\u5f0f\u8f6c\u6362\u4e3a scalar \u7684\u540e\u7aef\u8868\u793a\u5f62\u5f0f\u3002"),(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"https://www.apollographql.com/docs/apollo-server/schema/custom-scalars/#example-the-date-scalar"},"\u5728\u524d\u9762\u7684\u4f8b\u5b50\u4e2d"),"\uff0c",(0,t.kt)("inlineCode",{parentName:"p"},"parseLiteral"),"\u5c06 AST \u503c\u4ece\u5b57\u7b26\u4e32\u8f6c\u6362\u4e3a\u6574\u6570\uff0c\u7136\u540e\u4ece\u6574\u5f62\u8f6c\u6362\u5230",(0,t.kt)("inlineCode",{parentName:"p"},"Date"),"\uff0c\u4ee5\u7b26\u5408",(0,t.kt)("inlineCode",{parentName:"p"},"parseValue"),"\u7684\u7ed3\u679c\u3002"),(0,t.kt)("h2",{id:"\u7ed9-apollo-server-\u63d0\u4f9b-custom-scalar"},"\u7ed9 Apollo Server \u63d0\u4f9b custom scalar"),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"\u5728\u4e0b\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u4f7f\u7528\u9876\u5c42\u7684 await \u8c03\u7528\u53bb\u5f02\u6b65\u8d77\u52a8\u670d\u52a1\u5668\u3002\u5982\u679c\u4f60\u60f3\u770b\u600e\u6837\u914d\u7f6e\u8fd9\u4e9b\uff0c\u53ef\u4ee5\u67e5\u770b ",(0,t.kt)("a",{parentName:"p",href:"https://www.apollographql.com/docs/apollo-server/getting-started#step-2-install-dependencies"},"Getting Started")," \u4ee5\u4e86\u89e3\u66f4\u591a\u3002")),(0,t.kt)("p",null,"\u5728\u5b9a\u4e49",(0,t.kt)("inlineCode",{parentName:"p"},"GraphQLScalarType"),"\u5b9e\u4f8b\u540e\uff0c\u5c06\u5176\u56ca\u62ec\u5728\u542b\u6709 schema \u5176\u4ed6\u7c7b\u578b\u548c\u5b57\u6bb5\u7684 resolver \u7684 resolver map \u4e2d\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-typescript"},'import { ApolloServer } from "@apollo/server";\nimport { startStandaloneServer } from "@apollo/server/standalone";\nimport { GraphQLScalarType, Kind } from "graphql";\n\nconst typeDefs = `#graphql\n scalar Date\n\n  type Event {\n    id: ID!\n    date: Date!\n  }\n\n  type Query {\n    events: [Event!]\n  }\n`;\n\nconst dateScalar = new GraphQLScalarType({\n  // See definition above\n});\n\nconst resolvers = {\n  Date: dateScalar,\n  // ...other resolver definitions...\n};\n\nconst server = new ApolloServer({\n  typeDefs,\n  resolvers,\n});\n\nconst { url } = await startStandaloneServer(server);\n\nconsole.log(`\ud83d\ude80 Server listening at: ${url}`);\n')),(0,t.kt)("h2",{id:"\u4f8b\u5b50\u9650\u5236\u6574\u6570\u4e3a\u5947\u6570"},"\u4f8b\u5b50\uff1a\u9650\u5236\u6574\u6570\u4e3a\u5947\u6570"),(0,t.kt)("p",null,"\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a",(0,t.kt)("inlineCode",{parentName:"p"},"Odd"),"\u7684 custom scalar\uff0c\u5b83\u53ea\u63a5\u53d7\u5947\u6570\uff1a"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-typescript"},'import { ApolloServer } from "@apollo/server";\nimport { startStandaloneServer } from "@apollo/server/standalone";\nimport { GraphQLScalarType, Kind, GraphQLError } from "graphql";\n\n// Basic schema\nconst typeDefs = `#graphql\n  scalar Odd\n\n  type Query {\n    # Echoes the provided odd integer\n    echoOdd(odd: Odd!): Odd!\n  }\n`;\n\n// Validation function for checking "oddness"\nfunction oddValue(value: number) {\n  if (typeof value === "number" && Number.isInteger(value) && value % 2 !== 0) {\n    return value;\n  }\n  throw new GraphQLError("Provided value is not an odd integer", {\n    extensions: { code: "BAD_USER_INPUT" },\n  });\n}\n\nconst resolvers = {\n  Odd: new GraphQLScalarType({\n    name: "Odd",\n    description: "Odd custom scalar type",\n    parseValue: oddValue,\n    serialize: oddValue,\n    parseLiteral(ast) {\n      if (ast.kind === Kind.INT) {\n        return oddValue(parseInt(ast.value, 10));\n      }\n      throw new GraphQLError("Provided value is not an odd integer", {\n        extensions: { code: "BAD_USER_INPUT" },\n      });\n    },\n  }),\n  Query: {\n    echoOdd(_, { odd }) {\n      return odd;\n    },\n  },\n};\n\nconst server = new ApolloServer({\n  typeDefs,\n  resolvers,\n});\n\nconst { url } = await startStandaloneServer(server);\n\nconsole.log(`\ud83d\ude80 Server listening at: ${url}`);\n')),(0,t.kt)("h2",{id:"\u5bfc\u5165\u7b2c\u4e09\u65b9\u7684-custom-scalar"},"\u5bfc\u5165\u7b2c\u4e09\u65b9\u7684 custom scalar"),(0,t.kt)("p",null,"\u5982\u679c\u5176\u4ed6\u7684\u5e93\u5b9a\u4e49\u4e86 custom scalar\uff0c\u4f60\u53ef\u4ee5\u5bfc\u5165\u5e76\u50cf\u5176\u4ed6\u7c7b\u578b\u4e00\u6837\u4f7f\u7528\u5b83\u3002"),(0,t.kt)("p",null,"\u4e3e\u4e2a\u4f8b\u5b50\uff0c",(0,t.kt)("inlineCode",{parentName:"p"},"graphql-type-json"),"\u5305\u5b9a\u4e49\u4e86",(0,t.kt)("inlineCode",{parentName:"p"},"GraphQLJSON"),"\u5bf9\u8c61\uff0c\u5b83\u662f",(0,t.kt)("inlineCode",{parentName:"p"},"GraphQLScalarType"),"\u7684\u4e00\u4e2a\u5b9e\u4f8b\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e2a\u5bf9\u8c61\u53bb\u5b9a\u4e49\u4e00\u4e2a\u53ea\u63a5\u53d7\u6709\u6548 JSON \u503c\u7684",(0,t.kt)("inlineCode",{parentName:"p"},"JSON"),"scalar\u3002"),(0,t.kt)("p",null,"\u9996\u5148\uff0c\u5b89\u88c5\u5e93\uff1a"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"$ npm install graphql-type-json\n")),(0,t.kt)("p",null,"\u7136\u540e\uff0c\u50cf\u5f80\u5e38\u4e00\u6837\uff0c\u5c06",(0,t.kt)("inlineCode",{parentName:"p"},"GraphQLJSON"),"\u5bf9\u8c61\u5bfc\u5165\u5e76\u6dfb\u52a0\u5230 resolver map \u4e2d\uff1a"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-typescript"},'import { ApolloServer } from "@apollo/server";\nimport { startStandaloneServer } from "@apollo/server/standalone";\nimport GraphQLJSON from "graphql-type-json";\n\nconst typeDefs = `#graphql\n  scalar JSON\n\n  type MyObject {\n    myField: JSON\n  }\n\n  type Query {\n    objects: [MyObject]\n  }\n`;\n\nconst resolvers = {\n  JSON: GraphQLJSON,\n  // ...other resolvers...\n};\n\nconst server = new ApolloServer({\n  typeDefs,\n  resolvers,\n});\n\nconst { url } = await startStandaloneServer(server);\n\nconsole.log(`\ud83d\ude80 Server listening at: ${url}`);\n')))}d.isMDXComponent=!0}}]);