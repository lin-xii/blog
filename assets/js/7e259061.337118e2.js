"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6222],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>v});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),c=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(r),u=n,v=d["".concat(o,".").concat(u)]||d[u]||m[u]||i;return r?a.createElement(v,p(p({ref:t},s),{},{components:r})):a.createElement(v,p({ref:t},s))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,p=new Array(i);p[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[d]="string"==typeof e?e:n,p[1]=l;for(var c=2;c<i;c++)p[c]=r[c];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8371:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const i={title:"Directives",date:new Date("2023-10-31T00:00:00.000Z"),authors:"lin-xii",tags:["Apollo","GraphQL","\u6e23\u7ffb\u8bd1"],sidebar_position:4},p=void 0,l={unversionedId:"Apollo Server/Defining a Schema/directives",id:"Apollo Server/Defining a Schema/directives",title:"Directives",description:"\u5728\u627e Apollo Federation directives\uff1f\u53c2\u8003 Federation-specific GraphQL directives\u3002",source:"@site/docs/Apollo Server/Defining a Schema/directives.md",sourceDirName:"Apollo Server/Defining a Schema",slug:"/Apollo Server/Defining a Schema/directives",permalink:"/blog/docs/Apollo Server/Defining a Schema/directives",draft:!1,tags:[{label:"Apollo",permalink:"/blog/docs/tags/apollo"},{label:"GraphQL",permalink:"/blog/docs/tags/graph-ql"},{label:"\u6e23\u7ffb\u8bd1",permalink:"/blog/docs/tags/\u6e23\u7ffb\u8bd1"}],version:"current",sidebarPosition:4,frontMatter:{title:"Directives",date:"2023-10-31T00:00:00.000Z",authors:"lin-xii",tags:["Apollo","GraphQL","\u6e23\u7ffb\u8bd1"],sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Custom scalars",permalink:"/blog/docs/Apollo Server/Defining a Schema/custom-scalars"},next:{title:"Resolvers",permalink:"/blog/docs/Apollo Server/Resolving Operations/resolvers"}},o={},c=[{value:"\u6709\u6548\u4f4d\u7f6e",id:"\u6709\u6548\u4f4d\u7f6e",level:2},{value:"schema directive \u5bf9\u6bd4 operation directive",id:"schema-directive-\u5bf9\u6bd4-operation-directive",level:3},{value:"\u9ed8\u8ba4 directive",id:"\u9ed8\u8ba4-directive",level:2},{value:"custom directive",id:"custom-directive",level:2},{value:"In subgraphs",id:"in-subgraphs",level:3},{value:"Transformer function",id:"transformer-function",level:4}],s={toc:c},d="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u5728\u627e Apollo Federation directives\uff1f\u53c2\u8003 ",(0,n.kt)("a",{parentName:"p",href:"https://www.apollographql.com/docs/federation/federated-types/federated-directives/"},"Federation-specific GraphQL directives"),"\u3002")),(0,n.kt)("p",null,"\u4e00\u4e2a",(0,n.kt)("strong",{parentName:"p"},"directive"),"\u901a\u8fc7\u989d\u5916\u914d\u7f6e\u4fee\u9970\u4e00\u90e8\u5206 GraphQL schema \u6216 operation\u3002Apollo Server(\u6216\u8005 Apollo Client)\u8fd9\u7c7b\u5de5\u5177\u53ef\u4ee5\u8bfb\u53d6 GraphQL \u6587\u6863\u7684 directive \u5e76\u6839\u636e\u9700\u8981\u6267\u884c\u81ea\u5b9a\u4e49\u903b\u8f91\u3002"),(0,n.kt)("p",null,"directive \u524d\u9762\u4f7f\u7528",(0,n.kt)("inlineCode",{parentName:"p"},"@"),"\u5b57\u7b26\uff0c\u4f8b\u5982\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},'type ExampleType {\n  oldField: String @deprecated(reason: "Use `newField`.")\n  newField: String\n}\n')),(0,n.kt)("p",null,"\u8fd9\u4e2a\u4f8b\u5b50\u5c55\u793a\u4e86",(0,n.kt)("inlineCode",{parentName:"p"},"@deprecated"),"directive\uff0c\u5b83\u662f\u4e00\u4e2a",(0,n.kt)("a",{parentName:"p",href:"https://www.apollographql.com/docs/apollo-server/schema/directives/#default-directives"},"\u9ed8\u8ba4 directive"),"(\u4e5f\u5c31\u662f\u8bf4\uff0c\u5b83\u662f ",(0,n.kt)("a",{parentName:"p",href:"http://spec.graphql.org/June2018/#sec--deprecated"},"GraphQL \u89c4\u8303"),"\u7684\u4e00\u90e8\u5206)\u3002\u5b83\u5c55\u793a\u4e86\u4e0b\u9762\u7684\u5185\u5bb9\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"directive \u53ef\u4ee5\u643a\u5e26\u53c2\u6570(\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\u7684\u662f",(0,n.kt)("inlineCode",{parentName:"li"},"reason"),")\u3002"),(0,n.kt)("li",{parentName:"ul"},"directive \u51fa\u73b0\u5728\u5b83\u4eec\u9700\u8981\u4fee\u9970\u7684\u58f0\u660e\u4e4b\u540e(\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\u662f",(0,n.kt)("inlineCode",{parentName:"li"},"oldField"),"\u5b57\u6bb5)\u3002")),(0,n.kt)("h2",{id:"\u6709\u6548\u4f4d\u7f6e"},"\u6709\u6548\u4f4d\u7f6e"),(0,n.kt)("p",null,"\u6bcf\u4e2a directive \u5728 GraphQL scheme \u6216 operation \u4e2d\uff0c\u53ea\u80fd\u51fa\u73b0\u5728\u89c4\u5b9a\u7684\u4f4d\u7f6e\u3002\u8fd9\u4e9b\u4f4d\u7f6e\u5728 directive \u5b9a\u4e49\u5904\u5217\u51fa\u3002"),(0,n.kt)("p",null,"\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u8fd9\u91cc\u662f GraphQL \u89c4\u8303\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"@deprecated"),"directive \u5b9a\u4e49\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},'directive @deprecated(\n  reason: String = "No longer supported"\n) on FIELD_DEFINITION | ARGUMENT_DEFINITION | INPUT_FIELD_DEFINITION | ENUM_VALUE\n')),(0,n.kt)("p",null,"\u8fd9\u4e2a\u4f8b\u5b50\u8868\u660e",(0,n.kt)("inlineCode",{parentName:"p"},"@deprecated"),"\u53ef\u4ee5\u4fee\u9970\u5217\u51fa\u7684\u56db\u4e2a\u4f4d\u7f6e\u4e2d\u7684\u4efb\u4f55\u4e00\u4e2a\u3002\u4e5f\u8981\u6ce8\u610f",(0,n.kt)("inlineCode",{parentName:"p"},"reason"),"\u53c2\u6570\u662f\u53ef\u9009\u7684\u5e76\u4e14\u63d0\u4f9b\u4e86\u9ed8\u8ba4\u503c\u3002\u6bcf\u4e00\u4e2a\u4f4d\u7f6e\u7684\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},'# ARGUMENT_DEFINITION\n# Note: @deprecated arguments _must_ be optional.\ndirective @withDeprecatedArgs(\n  deprecatedArg: String @deprecated(reason: "Use `newArg`")\n  newArg: String\n) on FIELD\n\ntype MyType {\n  # ARGUMENT_DEFINITION (alternate example on a field\'s args)\n  fieldWithDeprecatedArgs(name: String @deprecated): String\n  # FIELD_DEFINITION\n  deprecatedField: String @deprecated\n}\n\nenum MyEnum {\n  # ENUM_VALUE\n  OLD_VALUE @deprecated(reason: "Use `NEW_VALUE`.")\n  NEW_VALUE\n}\n\ninput SomeInputType {\n  nonDeprecated: String\n  # INPUT_FIELD_DEFINITION\n  deprecated: String @deprecated\n}\n')),(0,n.kt)("p",null,"\u5982\u679c",(0,n.kt)("inlineCode",{parentName:"p"},"@deprecated"),"\u51fa\u73b0\u5728 GraphQL \u6587\u6863\u7684\u5176\u4ed6\u4f4d\u7f6e\uff0c\u5c06\u4ea7\u751f\u4e00\u4e2a\u9519\u8bef\u3002"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u521b\u5efa custom directive\uff0c\u9700\u8981\u5728 schema \u4e2d\u5b9a\u4e49\u5b83(\u8fd8\u6709\u5b83\u53ef\u4ee5\u4f7f\u7528\u7684\u4f4d\u7f6e)\u3002\u4e0d\u9700\u8981\u5b9a\u4e49\u50cf",(0,n.kt)("inlineCode",{parentName:"p"},"@deprecated"),"\u8fd9\u7c7b\u7684\u9ed8\u8ba4 directive\u3002")),(0,n.kt)("h3",{id:"schema-directive-\u5bf9\u6bd4-operation-directive"},"schema directive \u5bf9\u6bd4 operation directive"),(0,n.kt)("p",null,"\u901a\u5e38\uff0cdirective \u53ea\u51fa\u73b0\u5728 GraphQL schema \u6216 GraphQL operation \u4e2d(\u5f88\u5c11\u540c\u65f6\u51fa\u73b0\uff0c\u5c3d\u7ba1\u89c4\u8303\u5141\u8bb8\u8fd9\u79cd\u60c5\u51b5)\u3002"),(0,n.kt)("p",null,"\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u6240\u6709\u7684\u9ed8\u8ba4 directive\uff0c",(0,n.kt)("inlineCode",{parentName:"p"},"@deprecated"),"\u662f\u53ea\u80fd\u5728 schema \u4f7f\u7528\u7684 directive\uff0c\u800c",(0,n.kt)("inlineCode",{parentName:"p"},"@skip"),"\u548c",(0,n.kt)("inlineCode",{parentName:"p"},"@include"),"\u53ea\u80fd\u5728 operation \u4e2d\u4f7f\u7528\u3002"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://spec.graphql.org/June2018/#sec-Type-System.Directives"},"GraphQL \u89c4\u8303"),"\u5217\u51fa\u4e86 directive \u6240\u6709\u53ef\u80fd\u51fa\u73b0\u7684\u4f4d\u7f6e\u3002schema \u4f4d\u7f6e\u5728",(0,n.kt)("inlineCode",{parentName:"p"},"TypeSystemDirectiveLocation"),"\u5217\u51fa\uff0c\u800c operation \u4f4d\u7f6e\u5728",(0,n.kt)("inlineCode",{parentName:"p"},"ExecutableDirectiveLocation"),"\u4e2d\u5217\u51fa\u3002"),(0,n.kt)("h2",{id:"\u9ed8\u8ba4-directive"},"\u9ed8\u8ba4 directive"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"http://spec.graphql.org/June2018/#sec-Type-System.Directives"},"GraphQL \u89c4\u8303"),"\u5b9a\u4e49\u4e86\u4ee5\u4e0b\u7684\u9ed8\u8ba4 directive\uff1a"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"DIRECTIVE"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"@deprecated(reason: String)")),(0,n.kt)("td",{parentName:"tr",align:null},"\u5c06\u5b57\u6bb5\u6216\u679a\u4e3e\u503c\u7684 schema \u5b9a\u4e49\u6807\u8bb0\u4e3a\u4e0d\u63a8\u8350\u4f7f\u7528\uff0c\u7406\u7531\u662f\u53ef\u9009\u9879\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"@skip(if: Boolean!)")),(0,n.kt)("td",{parentName:"tr",align:null},"\u5982\u679c",(0,n.kt)("inlineCode",{parentName:"td"},"true"),"\uff0coperation \u4e2d\u88ab\u4fee\u9970\u7684\u5b57\u6bb5\u6216\u7247\u6bb5\u4e0d\u4f1a\u88ab GraphQL server \u89e3\u6790\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"@include(if: Boolean!)")),(0,n.kt)("td",{parentName:"tr",align:null},"\u5982\u679c",(0,n.kt)("inlineCode",{parentName:"td"},"false"),"\uff0coperation \u4e2d\u88ab\u4fee\u9970\u7684\u5b57\u6bb5\u6216\u7247\u6bb5\u4e0d\u4f1a\u88ab GraphQL server \u89e3\u6790\u3002")))),(0,n.kt)("h2",{id:"custom-directive"},"custom directive"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Apollo Server \u4e0d\u4e3a\u6539\u53d8 schema \u7684 custom directive \u63d0\u4f9b\u5185\u7f6e\u652f\u6301\u3002"),(0,n.kt)("p",{parentName:"blockquote"},"\u79c1\u8d27\uff1a\u8fd9\u610f\u5473\u7740\u5982\u679c\u60f3\u7528\uff0c\u9700\u8981\u81ea\u5df1\u5f00\u53d1")),(0,n.kt)("p",null,"schema \u80fd\u591f\u5b9a\u4e49\u4fee\u9970 schema \u5176\u4ed6\u90e8\u5206\u7684 custom directive\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"# Definition\ndirective @uppercase on FIELD_DEFINITION\n\ntype Query {\n  # Usage\n  hello: String @uppercase\n}\n")),(0,n.kt)("p",null,"\u5728\u5c06 schema \u4f20\u9012\u7ed9 Apollo Server \u4e4b\u524d\uff0c\u5982\u679c\u60f3\u5b9a\u4e49\u4e00\u4e2a custom directive \u53bb\u6539\u53d8 schema \u7684\u6267\u884c\u903b\u8f91\uff0c\u5efa\u8bae\u4f7f\u7528",(0,n.kt)("inlineCode",{parentName:"p"},"@graphql-tools"),"\u5e93\u3002\u53ef\u4ee5\u53c2\u8003",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apollographql/docs-examples/tree/main/apollo-server/v4/custom-directives/upper-case-directive"},"example of using a custom directive to transform a schema")),(0,n.kt)("h3",{id:"in-subgraphs"},"In subgraphs"),(0,n.kt)("p",null,"\u5728 federated graph \u4e2d\u4f7f\u7528 custom directvie \u4e4b\u524d\uff0c\u52a1\u5fc5\u601d\u8003\u4ee5\u4e0b\u51e0\u70b9\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c\u591a\u4e2a subgraph \u53ef\u4ee5\u89e3\u6790\u4e00\u4e2a\u7279\u5b9a\u5b57\u6bb5\uff0c\u6bcf\u4e2a subgraph \u51e0\u4e4e\u90fd\u5e94\u8be5\u5bf9\u8be5\u5b57\u6bb5\u4f7f\u7528(\u5b9a\u4e49\u5b8c\u5168\u76f8\u540c)\u7684 custom directive\u3002\u5426\u5219\uff0c\u8fd9\u4e2a\u5b57\u6bb5\u7684\u884c\u4e3a\u53ef\u80fd\u53d6\u51b3\u4e8e\u54ea\u4e00\u4e2a subgraph \u6765\u89e3\u6790\u5b83\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u56e0\u4e3a directive \u662f\u7279\u5b9a\u4e8e\u5404\u4e2a subgraph \u7684\uff0c\u4e0d\u540c\u7684 subgraph \u4f7f\u7528\u4e0d\u540c\u7684\u903b\u8f91\u5b9a\u4e49\u76f8\u540c\u7684 directive\uff0c\u5728\u6280\u672f\u4e0a\u662f\u53ef\u884c\u7684\u3002\u5982\u524d\u4e00\u70b9\u6240\u8ff0\uff0c\u5982\u679c custom directive \u88ab\u7528\u4e8e\u8fc7\u4e2a subgraph \u53bb\u89e3\u6790\u7279\u5b9a\u7684\u5b57\u6bb5\uff0c\u5219\u5e94\u8be5\u5728 subgraph \u4e2d\u7ed9\u540c\u4e00 directive \u5b9a\u4e49\u76f8\u540c\u7684\u903b\u8f91\u3002",(0,n.kt)("em",{parentName:"li"},"Composition"),"\u4e0d\u4f1a\u68c0\u6d4b\u6216\u8b66\u544a\u8fd9\u79cd\u4e0d\u4e00\u81f4\u3002",(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"\u79c1\u8d27\uff1acompostion \u8be5\u600e\u4e48\u7ffb\u8bd1\uff1f\u7ec4\u5408\u5404\u4e2a subgraph schema \u7684\u8fc7\u7a0b\uff1f"))),(0,n.kt)("li",{parentName:"ul"},"\u7ec4\u5408\u8fc7\u7a0b\u4ee5\u4e0d\u540c\u65b9\u5f0f\u5bf9\u5f85",(0,n.kt)("a",{parentName:"li",href:"https://www.apollographql.com/docs/federation/federated-types/composition/#executable-directives"},"\u53ef\u6267\u884c(\u5ba2\u6237\u7aef\u4fa7)"),"\u7684\u548c",(0,n.kt)("a",{parentName:"li",href:"https://www.apollographql.com/docs/federation/federated-types/composition/#type-system-directives"},"\u7c7b\u578b\u7cfb\u7edf(\u670d\u52a1\u5668\u4fa7)"),"\u7684\u547d\u4ee4\uff1a",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5728\u4ee5\u4e0b\u60c5\u51b5\uff0c\u53ef\u6267\u884c directive \u88ab\u7ec4\u5408\u5230 supergraph \u4e2d\uff1a",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6240\u6709 subgraph \u5b9a\u4e49\u4e86\u76f8\u540c\u7684 directive"),(0,n.kt)("li",{parentName:"ul"},"directive \u6ca1\u6709\u88ab\u5305\u542b\u5728\u4efb\u4f55",(0,n.kt)("inlineCode",{parentName:"li"},"@composeDirective"),"directive \u4e2d"))),(0,n.kt)("li",{parentName:"ul"},"\u7c7b\u578b\u7cfb\u7edf directive \u4e0d\u4f1a\u88ab\u5305\u542b\u5230 supergraph \u7684 schema \u4e2d\uff0c\u4f46\u662f\u5b83\u4eec\u901a\u8fc7",(0,n.kt)("inlineCode",{parentName:"li"},"@composeDirective"),"directive \u53ef\u4ee5\u63d0\u4f9b\u4fe1\u606f\u7ed9\u8def\u7531")))),(0,n.kt)("h4",{id:"transformer-function"},"Transformer function"),(0,n.kt)("p",null,"\u5982\u6211\u4eec\u7684\u4f8b\u5b50\u6240\u793a\uff0c\u5728 Apollo Server 3 \u548c 4 \u4e2d\uff0c\u53ef\u4ee5\u7ed9\u6bcf\u4e00\u4e2a subgraph schema \u7684 custom directive \u5b9a\u4e49 transformer \u51fd\u6570"),(0,n.kt)("p",null,"\u4e3a\u4e86\u5c06 transformer \u51fd\u6570\u5e94\u7528\u5230\u53ef\u6267\u884c subgraph schema\uff0c\u901a\u5e38\u8981\u5148\u4f7f\u7528",(0,n.kt)("inlineCode",{parentName:"p"},"buildSubgraphSchema"),"\u751f\u6210 subgraph schema\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"let subgraphSchema = buildSubgraphSchema({ typeDefs, resolvers });\n")),(0,n.kt)("p",null,"\u5e76\u975e\u76f4\u63a5\u5c06\u7ed3\u679c\u4f20\u9012\u7ed9",(0,n.kt)("inlineCode",{parentName:"p"},"ApolloServer"),"\u6784\u9020\u51fd\u6570\uff0c\u9996\u5148\u5e94\u7528\u6240\u6709\u7684 transformer \u51fd\u6570\u5230\u5b83\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},'// Transformer function for an @upper directive\nsubgraphSchema = upperDirectiveTransformer(subgraphSchema, "upper");\n')),(0,n.kt)("p",null,"\u5e94\u7528\u6240\u6709 transformer \u51fd\u6570\u540e\uff0c\u901a\u5e38\u63d0\u4f9b\u6700\u7ec8\u7684 subgraph schema \u7ed9",(0,n.kt)("inlineCode",{parentName:"p"},"ApolloServer"),"\u6784\u9020\u51fd\u6570\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"const server = new ApolloServer({\n  schema: subgraphSchema,\n  // ...other options...\n});\n")))}m.isMDXComponent=!0}}]);