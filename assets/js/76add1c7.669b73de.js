"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4402],{3905:(e,r,n)=>{n.d(r,{Zo:()=>d,kt:()=>k});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function p(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=t.createContext({}),s=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},d=function(e){var r=s(e.components);return t.createElement(i.Provider,{value:r},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},c=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=s(n),c=o,k=m["".concat(i,".").concat(c)]||m[c]||u[c]||a;return n?t.createElement(k,l(l({ref:r},d),{},{components:n})):t.createElement(k,l({ref:r},d))}));function k(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=c;var p={};for(var i in r)hasOwnProperty.call(r,i)&&(p[i]=r[i]);p.originalType=e,p[m]="string"==typeof e?e:o,l[1]=p;for(var s=2;s<a;s++)l[s]=n[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2395:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var t=n(7462),o=(n(7294),n(3905));const a={title:"Error handling",date:new Date("2023-11-03T00:00:00.000Z"),author:"lin-xii",tags:["Apollo","GraphQL","\u6e23\u7ffb\u8bd1"],sidebar_position:3},l=void 0,p={unversionedId:"Apollo Server/Resolving Operations/error-handling",id:"Apollo Server/Resolving Operations/error-handling",title:"Error handling",description:"Apollo Server v4 \u4ecb\u7ecd\u4e86\u4e00\u79cd\u56de\u9000\u7684\u53d8\u5316\uff0c\u63d0\u4f9b\u65e0\u6548\u53d8\u91cf\u4f1a\u4ea7\u751f\u4e86\u4e00\u4e2a 200 \u72b6\u6001\u7801\u800c\u975e 400\u3002\u4e3a\u4e86\u7f13\u89e3\u8fd9\u79cd\u60c5\u51b5\uff0c\u63d0\u4f9bstatus400ForVariableCoerctionErros: true\u9009\u9879\u7ed9ApolloServer\u6784\u9020\u51fd\u6570\u3002\u66f4\u591a\u4fe1\u606f\uff0c\u53c2\u8003migration guide",source:"@site/docs/Apollo Server/Resolving Operations/error-handling.md",sourceDirName:"Apollo Server/Resolving Operations",slug:"/Apollo Server/Resolving Operations/error-handling",permalink:"/blog/docs/Apollo Server/Resolving Operations/error-handling",draft:!1,tags:[{label:"Apollo",permalink:"/blog/docs/tags/apollo"},{label:"GraphQL",permalink:"/blog/docs/tags/graph-ql"},{label:"\u6e23\u7ffb\u8bd1",permalink:"/blog/docs/tags/\u6e23\u7ffb\u8bd1"}],version:"current",sidebarPosition:3,frontMatter:{title:"Error handling",date:"2023-11-03T00:00:00.000Z",author:"lin-xii",tags:["Apollo","GraphQL","\u6e23\u7ffb\u8bd1"],sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Context and contextValue",permalink:"/blog/docs/Apollo Server/Resolving Operations/sharing-context"},next:{title:"\u5173\u4e8e\u6211",permalink:"/blog/docs/about-me"}},i={},s=[{value:"\u5185\u7f6e\u9519\u8bef\u7801",id:"\u5185\u7f6e\u9519\u8bef\u7801",level:2},{value:"Custom error",id:"custom-error",level:2},{value:"Throwing error",id:"throwing-error",level:2},{value:"\u5305\u542b custom error \u7ec6\u8282",id:"\u5305\u542b-custom-error-\u7ec6\u8282",level:3},{value:"\u7701\u7565\u6216\u5305\u542b<code>stackTrace</code>",id:"\u7701\u7565\u6216\u5305\u542bstacktrace",level:2},{value:"\u5c4f\u853d\u548c\u8bb0\u5f55\u9519\u8bef",id:"\u5c4f\u853d\u548c\u8bb0\u5f55\u9519\u8bef",level:2},{value:"\u9488\u5bf9\u5ba2\u6237\u7aef\u54cd\u5e94",id:"\u9488\u5bf9\u5ba2\u6237\u7aef\u54cd\u5e94",level:3},{value:"For Apollo Studio reporting",id:"for-apollo-studio-reporting",level:3}],d={toc:s},m="wrapper";function u(e){let{components:r,...n}=e;return(0,o.kt)(m,(0,t.Z)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Apollo Server v4 \u4ecb\u7ecd\u4e86\u4e00\u79cd\u56de\u9000\u7684\u53d8\u5316\uff0c\u63d0\u4f9b\u65e0\u6548\u53d8\u91cf\u4f1a\u4ea7\u751f\u4e86\u4e00\u4e2a 200 \u72b6\u6001\u7801\u800c\u975e 400\u3002\u4e3a\u4e86\u7f13\u89e3\u8fd9\u79cd\u60c5\u51b5\uff0c\u63d0\u4f9b",(0,o.kt)("inlineCode",{parentName:"p"},"status400ForVariableCoerctionErros: true"),"\u9009\u9879\u7ed9",(0,o.kt)("inlineCode",{parentName:"p"},"ApolloServer"),"\u6784\u9020\u51fd\u6570\u3002\u66f4\u591a\u4fe1\u606f\uff0c\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"https://www.apollographql.com/docs/apollo-server/migration/#known-regressions"},"migration guide"))),(0,o.kt)("p",null,"Apollo Server \u5728\u5904\u7406 GraphQL operation \u9047\u5230\u9519\u8bef\u65f6\uff0c\u5b83\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\u7684\u54cd\u5e94\u4e2d\u5e26\u6709\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"errors"),"\u6570\u7ec4\uff0c\u8fd9\u4e2a\u6570\u7ec4\u5305\u542b\u4e86\u6bcf\u4e00\u4e2a\u51fa\u73b0\u7684\u9519\u8bef\u3002\u6bcf\u4e00\u4e2a\u5728\u6570\u7ec4\u4e2d\u7684\u9519\u8bef\uff0c\u90fd\u6709\u4e00\u4e2a\u63d0\u4f9b\u4e86\u989d\u5916\u6709\u6548\u4fe1\u606f\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"extensions"),"\u5b57\u6bb5\uff0c\u5305\u62ec\u9519\u8bef",(0,o.kt)("inlineCode",{parentName:"p"},"code"),"\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"stacktrace"),"(\u4ec5\u5728\u5f00\u53d1\u6a21\u5f0f\u4e0b)\u3002"),(0,o.kt)("p",null,"\u8fd9\u91cc\u6709\u4e00\u4e2a\u9519\u8bef\u54cd\u5e94\u7684\u4f8b\u5b50\uff0c\u5728\u4e00\u4e2a query \u4e2d\u9519\u8bef\u62fc\u5199",(0,o.kt)("inlineCode",{parentName:"p"},"__typename"),"\u5b57\u6bb5\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errors": [\n    {\n      "message": "Cannot query field \\"__typenam\\" on type \\"Query\\".",\n      "locations": [\n        {\n          "line": 1,\n          "column": 2\n        }\n      ],\n      "extensions": {\n        "code": "GRAPHQL_VALIDATION_FAILED",\n        "stacktrace": [\n          "GraphQLError: Cannot query field \\"__typenam\\" on type \\"Query\\".",\n          "    at Object.Field (/my_project/node_modules/graphql/validation/rules/FieldsOnCorrectTypeRule.js:48:31)",\n          "    ...additional lines..."\n        ]\n      }\n    }\n  ]\n}\n')),(0,o.kt)("p",null,"\u4e3a\u4e86\u5e2e\u52a9\u8c03\u8bd5\uff0cApollo Server \u63d0\u4f9b\u4e86\u4e00\u4e2a\u540d\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"ApolloServerErrorCode"),"\u7684\u679a\u4e3e\uff0c\u4f60\u53ef\u4ee5\u7528\u5b83\u6765\u68c0\u67e5\u4f60\u7684\u9519\u8bef\u662f\u5426\u4e3a ",(0,o.kt)("a",{parentName:"p",href:"https://www.apollographql.com/docs/apollo-server/data/errors#built-in-error-codes"},"Apollo Server \u4ea7\u751f\u7684\u4e0d\u540c\u7c7b\u578b"),"\u4e2d\u7684\u4e00\u4e2a\u3002"),(0,o.kt)("p",null,"\u4f60\u80fd\u591f\u901a\u8fc7\u68c0\u67e5\u9519\u8bef\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"code"),"\u6765\u5224\u65ad\u51fa\u73b0\u7684\u539f\u56e0\uff0c\u4e5f\u53ef\u4ee5\u6dfb\u52a0\u903b\u8f91\u53bb\u54cd\u5e94\u4e0d\u540c\u7c7b\u578b\u7684\u9519\u8bef\uff0c\u4f8b\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import { ApolloServerErrorCode } from "@apollo/server/errors";\n\nif (error.extensions?.code === ApolloServerErrorCode.GRAPHQL_PARSE_FAILED) {\n  // respond to the syntax error\n} else if (error.extensions?.code === "MY_CUSTOM_CODE") {\n  // do something else\n}\n')),(0,o.kt)("p",null,"Apollo Server \u4e30\u5bcc\u7684\u9519\u8bef\u4ee3\u7801\u4f7f\u5f97\u53d1\u8d77\u8bf7\u6c42\u7684\u5ba2\u6237\u7aef\u80fd\u5bf9\u4e0d\u540c\u7c7b\u578b\u7684\u9519\u8bef\u4f5c\u51fa\u4e0d\u540c\u7684\u54cd\u5e94\u3002\u4f60\u4e5f\u53ef\u4ee5",(0,o.kt)("a",{parentName:"p",href:"https://www.apollographql.com/docs/apollo-server/data/errors#custom-errors"},"\u521b\u5efa\u81ea\u5b9a\u4e49\u9519\u8bef\u548c\u4ee3\u7801"),"\u3002"),(0,o.kt)("h2",{id:"\u5185\u7f6e\u9519\u8bef\u7801"},"\u5185\u7f6e\u9519\u8bef\u7801"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u9519\u8bef\u7801"),(0,o.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"GRAPHQL_PARSE_FAILED")),(0,o.kt)("td",{parentName:"tr",align:null},"\u8fd9\u4e2a GraphQL operation \u7684\u5b57\u7b26\u4e32\u4e2d\u5305\u542b\u8bed\u6cd5\u9519\u8bef")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"GRAPHQL_VALIDATION_FAILED")),(0,o.kt)("td",{parentName:"tr",align:null},"\u8fd9\u4e2a GraphQL operation \u76f8\u5bf9\u4e8e\u670d\u52a1\u5668\u7684 schema \u662f\u65e0\u6548\u7684")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"BAD_USER_INPUT")),(0,o.kt)("td",{parentName:"tr",align:null},"\u8fd9\u4e2a GraphQL operation \u67d0\u4e2a\u5b57\u6bb5\u7684\u53c2\u6570\u5305\u542b\u65e0\u6548\u7684\u503c")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"PERSISTED_QUERY_NOT_FOUND")),(0,o.kt)("td",{parentName:"tr",align:null},"\u5ba2\u6237\u7aef\u53d1\u9001\u4e86 query \u5b57\u7b26\u4e32\u7684 hash\uff0c\u901a\u8fc7 automatic persisted queries (APQ)\u53bb\u6267\u884c\uff0c\u4f46\u662f\u8fd9\u4e2a query \u6ca1\u6709\u5728 APQ \u7f13\u5b58\u4e2d")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"PERSISTED_QUERY_NOT_SUPPORTED")),(0,o.kt)("td",{parentName:"tr",align:null},"\u5ba2\u6237\u7aef\u53d1\u9001\u4e86 query \u5b57\u7b26\u4e32\u7684 hash\uff0c\u901a\u8fc7 automatic persisted queries (APQ)\u53bb\u6267\u884c\uff0c\u4f46\u662f\u670d\u52a1\u5668\u7981\u7528\u4e86 APQ\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"OPERATION_RESOLUTION_FAILURE")),(0,o.kt)("td",{parentName:"tr",align:null},"\u8fd9\u4e2a\u8bf7\u6c42\u6210\u529f\u901a\u8fc7\u4e86\u8bed\u6cd5\u5206\u6790\u5e76\u4e14\u76f8\u5bf9\u4e8e\u670d\u52a1\u5668\u7684 schema \u4e5f\u662f\u6709\u6548\u7684\uff0c\u4f46\u662f\u670d\u52a1\u5668\u65e0\u6cd5\u89e3\u6790\u8981\u8fd0\u884c\u54ea\u4e00\u4e2a operation\u3002\u8fd9\u4e2a\u9519\u8bef\u51fa\u73b0\u5728\u4e00\u4e2a\u8bf7\u6c42\u5305\u542b\u591a\u4e2a\u547d\u540d operation \u4f46\u6ca1\u6709\u660e\u786e\u54ea\u4e00\u4e2a operation \u8981\u8fd0\u884c\u7684\u65f6\u5019(\u4e5f\u5c31\u662f",(0,o.kt)("inlineCode",{parentName:"td"},"operationName"),")\u6216\u8005\u8bf7\u6c42\u4e2d\u6ca1\u6709\u5305\u542b\u547d\u540d operation\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"BAD_REQUEST")),(0,o.kt)("td",{parentName:"tr",align:null},"\u4e00\u4e2a\u51fa\u73b0\u5728\u670d\u52a1\u5668\u5c1d\u8bd5\u5bf9\u63a5\u6536\u7684 GraphQL operation \u8fdb\u884c\u8bed\u6cd5\u89e3\u6790\u4e4b\u524d\u7684\u9519\u8bef\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"INTERNAL_SERVER_ERROR")),(0,o.kt)("td",{parentName:"tr",align:null},"\u51fa\u73b0\u4e0d\u786e\u5b9a\u7684\u9519\u8bef\u3002\u5f53 Apollo Server \u5728\u4e00\u4e2a\u54cd\u5e94\u4e2d\u683c\u5f0f\u5316\u9519\u8bef\u4fe1\u606f\u65f6\uff0c\u5982\u679c\u6ca1\u6709\u8bbe\u7f6e\u5176\u4ed6\u9519\u8bef\u7801\uff0c\u5b83\u4f1a\u5c06\u4ee3\u7801\u6269\u5c55\u8bbe\u7f6e\u4e3a\u8fd9\u4e2a\u9519\u8bef\u7801\u3002")))),(0,o.kt)("h2",{id:"custom-error"},"Custom error"),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"graphql"),"\u5305\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLError"),"\u521b\u5efa custom error \u548c code\uff0c\u50cf\u4e0b\u9762\u8fd9\u6837\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import { GraphQLError } from "graphql";\n\nthrow new GraphQLError(message, {\n  extensions: { code: "YOUR_ERROR_CODE", myCustomExtensions },\n});\n')),(0,o.kt)("p",null,"custom error \u53ef\u4ee5\u63d0\u4f9b\u989d\u5916\u7684 context\uff0c\u4f7f\u5ba2\u6237\u7aef\u80fd\u591f\u7406\u89e3\u9519\u8bef\u53d1\u751f\u7684",(0,o.kt)("em",{parentName:"p"},"\u539f\u56e0"),"\u3002\u6211\u4eec\u5efa\u8bae\u660e\u786e\u573a\u666f\u5bf9\u5e94\u7684\u9519\u8bef\u4fe1\u606f\u3002\u4f8b\u5982\uff0c\u5f53\u4e00\u4e2a\u7528\u6237\u6ca1\u6709\u767b\u5f55(",(0,o.kt)("inlineCode",{parentName:"p"},"UNAUTHENTICATED"),")\uff0c\u6216\u8005\u67d0\u4eba\u88ab\u7981\u6b62\u6267\u884c\u64cd\u4f5c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import { GraphQLError } from "graphql";\n\nthrow new GraphQLError("You are not authorized to perform this action.", {\n  extensions: {\n    code: "FORBIDDEN",\n  },\n});\n')),(0,o.kt)("h2",{id:"throwing-error"},"Throwing error"),(0,o.kt)("p",null,"Apollo Server \u5728\u9002\u5f53\u7684\u65f6\u5019\uff0c\u81ea\u52a8\u5730\u629b\u51fa\u9519\u8bef\u3002\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u5f53\u4f20\u5165\u7684 operation \u76f8\u5bf9\u4e8e\u670d\u52a1\u5668\u7684 schema \u65e0\u6548\u65f6\uff0c\u5b83\u629b\u51fa",(0,o.kt)("inlineCode",{parentName:"p"},"GRAPHQL_VALIDATION_FAILED"),"\u9519\u8bef\u3002"),(0,o.kt)("p",null,"\u5728 Apollo Server \u4e0d\u4f1a\u81ea\u52a8\u629b\u51fa\u9519\u8bef\u7684\u60c5\u51b5\u4e0b,\u4f60\u7684 resolver \u4e5f\u53ef\u4ee5\u4e3b\u52a8\u629b\u51fa\u9519\u8bef\u3002"),(0,o.kt)("p",null,"\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u8fd9\u4e2a resolver \u629b\u51fa\u4e00\u4e2a custom error\uff0c\u5982\u679c\u63d0\u4f9b\u7ed9 user \u7684 ID \u7684\u6570\u503c\u5c0f\u4e8e",(0,o.kt)("inlineCode",{parentName:"p"},"1"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import { GraphQLError } from "graphql";\n\nconst typeDefs = `#graphql\n  type Query {\n    userWithID(id: ID!): User\n  }\n\n  type User {\n    id: ID!\n    name: String!\n  }\n`;\n\nconst resolvers = {\n  Query: {\n    userWithID: (_, args) => {\n      if (args.id < 1) {\n        throw new GraphQLError("Invalid argument value", {\n          extensions: {\n            code: "BAD_USER_INPUT",\n          },\n        });\n      }\n\n      // ...fetch correct user...\n    },\n  },\n};\n')),(0,o.kt)("p",null,"\u5982\u679c resolver \u629b\u51fa\u4e00\u4e2a\u4e0d\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLError"),"\u7684\u666e\u901a\u9519\u8bef\uff0c\u8fd9\u4e2a\u9519\u8bef\u4ecd\u7136\u4f1a\u5e26\u7740\u5305\u542b",(0,o.kt)("inlineCode",{parentName:"p"},"stackTrace"),"\u4fe1\u606f\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"extension"),"\u5b57\u6bb5\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"code"),"\u629b\u51fa(\u7279\u522b\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"INTERNAL_SERVER_ERROR"),"),\u4ee5\u53ca\u5176\u4ed6\u76f8\u5173\u7684\u9519\u8bef\u4fe1\u606f\u3002"),(0,o.kt)("h3",{id:"\u5305\u542b-custom-error-\u7ec6\u8282"},"\u5305\u542b custom error \u7ec6\u8282"),(0,o.kt)("p",null,"\u65e0\u8bba\u4f55\u65f6\u629b\u51fa",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLError"),"\uff0c\u90fd\u53ef\u4ee5\u6dfb\u52a0\u4efb\u610f\u5b57\u6bb5\u5230 error \u7684",(0,o.kt)("inlineCode",{parentName:"p"},"extensions"),"\u5bf9\u8c61\u4ee5\u63d0\u4f9b\u989d\u5916\u7684\u4e0a\u4e0b\u6587\u7ed9\u5ba2\u6237\u7aef\u3002\u4f60\u53ef\u4ee5\u5728\u4f20\u9012\u7ed9 error \u6784\u9020\u51fd\u6570\u7684\u5bf9\u8c61\u4e2d\u6307\u5b9a\u8fd9\u4e9b\u5b57\u6bb5\u3002"),(0,o.kt)("p",null,"\u8fd9\u4e2a\u4f8b\u5b50\u4ee5\u524d\u9762\u7684\u793a\u4f8b\u7684\u57fa\u7840\u4e0a\uff0c\u6dfb\u52a0\u4e86\u65e0\u6548 GraphQL \u53c2\u6570\u7684\u540d\u79f0\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import { GraphQLError } from "graphql";\n\nconst typeDefs = `#graphql\n  type Query {\n    userWithID(id: ID!): User\n  }\n\n  type User {\n    id: ID!\n    name: String!\n  }\n`;\n\nconst resolvers = {\n  Query: {\n    userWithID: (_, args) => {\n      if (args.id < 1) {\n        throw new GraphQLError("Invalid argument value", {\n          extensions: {\n            code: "BAD_USER_INPUT",\n            argumentName: "id",\n          },\n        });\n      }\n      // ...fetch correct user...\n    },\n  },\n};\n')),(0,o.kt)("p",null,"\u8fd9\u4e2a\u54cd\u5e94\u7ed3\u679c\u7c7b\u578b\u4e0b\u9762\u8fd9\u6837\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errors": [\n    {\n      "message": "Invalid argument value",\n      "locations": [\n        {\n          "line": 2,\n          "column": 3\n        }\n      ],\n      "path": ["userWithID"],\n      "extensions": {\n        "code": "BAD_USER_INPUT",\n        "argumentName": "id",\n        "stacktrace": [\n          "GraphQLError: Invalid argument value",\n          "    at userWithID (/my-project/index.js:25:13)",\n          "    ...more lines..."\n        ]\n      }\n    }\n  ]\n}\n')),(0,o.kt)("h2",{id:"\u7701\u7565\u6216\u5305\u542bstacktrace"},"\u7701\u7565\u6216\u5305\u542b",(0,o.kt)("inlineCode",{parentName:"h2"},"stackTrace")),(0,o.kt)("p",null,"\u5f53\u5f00\u53d1\u6216\u8c03\u8bd5\u670d\u52a1\u7684\u65f6\u5019\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"stackTrace"),"\u5b57\u6bb5\u5f88\u6709\u5e2e\u52a9\uff0c\u4f46\u662f\u4f60\u6216\u8bb8\u4e0d\u60f3\u5c06\u8fd9\u4e9b\u4fe1\u606f\u66b4\u9732\u7ed9\u5728\u751f\u4ea7\u73af\u5883\u7684\u5ba2\u6237\u7aef\u3002"),(0,o.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5982\u679c",(0,o.kt)("inlineCode",{parentName:"p"},"NODE_ENV"),"\u73af\u5883\u53d8\u91cf\u8bbe\u7f6e\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"production"),"\u6216",(0,o.kt)("inlineCode",{parentName:"p"},"test"),"\uff0cApollo Server \u4f1a\u7701\u7565",(0,o.kt)("inlineCode",{parentName:"p"},"stackTrace"),"\u5b57\u6bb5\u3002"),(0,o.kt)("p",null,"\u901a\u8fc7\u4f20\u9012",(0,o.kt)("inlineCode",{parentName:"p"},"includeStacktraceInErrorResponse"),"\u9009\u9879\u7ed9",(0,o.kt)("inlineCode",{parentName:"p"},"Apollo Server"),"\u7684\u6784\u9020\u51fd\u6570\uff0c\u4f60\u53ef\u4ee5\u8986\u76d6\u9ed8\u8ba4\u884c\u4e3a\u3002\u5982\u679c",(0,o.kt)("inlineCode",{parentName:"p"},"includeStacktraceErrorResponse"),"\u8bbe\u7f6e\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"true"),",",(0,o.kt)("inlineCode",{parentName:"p"},"stackTrace"),"\u6c38\u8fdc\u90fd\u4f1a\u88ab\u5305\u542b\u3002\u5982\u679c\u8bbe\u7f6e\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"stackTrace"),"\u6c38\u8fdc\u88ab\u7701\u7565\u3002"),(0,o.kt)("p",null,"\u6ce8\u610f\uff0c\u5f53",(0,o.kt)("inlineCode",{parentName:"p"},"stackTrace"),"\u88ab\u7701\u7565\u7684\u65f6\u5019\uff0c\u5b83\u5bf9\u4e8e\u4f60\u7684\u5e94\u7528\u540c\u6837\u4e0d\u53ef\u7528\u3002\u8981\u8bb0\u5f55",(0,o.kt)("inlineCode",{parentName:"p"},"stackTrace"),"\u7684\u9519\u8bef\uff0c\u4e14\u4e0d\u5728\u7ed9\u5ba2\u6237\u7aef\u7684\u54cd\u5e94\u4e2d\u5305\u542b\u5b83\u4eec\uff0c\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"#%E5%B1%8F%E8%94%BD%E5%92%8C%E8%AE%B0%E5%BD%95%E9%94%99%E8%AF%AF"},"\u5c4f\u853d\u548c\u8bb0\u5f55\u9519\u8bef"),"\u3002"),(0,o.kt)("h2",{id:"\u5c4f\u853d\u548c\u8bb0\u5f55\u9519\u8bef"},"\u5c4f\u853d\u548c\u8bb0\u5f55\u9519\u8bef"),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u7f16\u8f91 Apollo Server \u9519\u8bef\u8be6\u60c5\uff0c\u5728\u5b83\u4eec\u88ab\u4f20\u9012\u7ed9\u5ba2\u6237\u7aef\u6216\u62a5\u544a\u7ed9 Apollo Studio \u4e4b\u524d\u3002\u8fd9\u4f7f\u5f97\u4f60\u53ef\u4ee5\u79fb\u9664\u654f\u611f\u6216\u65e0\u5173\u7d27\u8981\u7684\u6570\u636e\u3002"),(0,o.kt)("h3",{id:"\u9488\u5bf9\u5ba2\u6237\u7aef\u54cd\u5e94"},"\u9488\u5bf9\u5ba2\u6237\u7aef\u54cd\u5e94"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5728\u524d\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u4f7f\u7528\u9876\u5c42\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"await"),"\u5f02\u6b65\u8d77\u52a8\u6211\u4eec\u7684\u670d\u52a1\u3002\u5982\u679c\u4f60\u60f3\u4e86\u89e3\u5982\u4f55\u914d\u7f6e\uff0c\u67e5\u770b ",(0,o.kt)("a",{parentName:"p",href:"https://www.apollographql.com/docs/apollo-server/getting-started#step-2-install-dependencies"},"Getting Started")," \u4ee5\u4e86\u89e3\u8be6\u7ec6\u4fe1\u606f\u3002")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ApolloServer"),"\u6784\u9020\u51fd\u6570\u63a5\u6536",(0,o.kt)("inlineCode",{parentName:"p"},"formatError"),"hook\uff0c\u5b83\u8fd0\u884c\u5728\u6bcf\u4e00\u4e2a\u9519\u8bef\u88ab\u4f20\u9012\u7ed9\u5ba2\u6237\u7aef\u4e4b\u524d\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e2a\u51fd\u6570\u8bb0\u5f55\u6216\u5c4f\u853d\u6307\u5b9a\u7684\u9519\u8bef\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"formatError"),"hook \u63a5\u6536 2 \u4e2a\u53c2\u6570\uff1a\u7b2c\u4e00\u4e2a\u662f\u88ab\u683c\u5f0f\u5316\u4e3a JSON \u683c\u5f0f\u7684\u9519\u8bef\u5bf9\u8c61(\u5c06\u968f\u7740\u54cd\u5e94\u88ab\u53d1\u9001)\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u539f\u59cb\u9519\u8bef(\u5982\u679c\u7531 resolver \u629b\u51fa\uff0c\u5219\u5305\u88c5\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLError"),")\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"formatError"),"\u51fd\u6570\u4e0d\u4f1a\u4fee\u6539\u4f5c\u4e3a\u4f7f\u7528\u62a5\u544a\u4e00\u90e8\u5206\u88ab\u53d1\u9001\u7ed9 Apollo Studio \u7684\u9519\u8bef\u3002\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"https://www.apollographql.com/docs/apollo-server/data/errors/#for-apollo-studio-reporting"},"For Apollo Studio resporting"),"\u3002")),(0,o.kt)("p",null,"\u65e0\u8bba Apollo Server \u4f55\u65f6\u629b\u51fa",(0,o.kt)("inlineCode",{parentName:"p"},"GRAPHQL_VALIDATION_FAILED"),"\u9519\u8bef\uff0c\u4e0b\u9762\u7684\u4f8b\u5b50\u4f1a\u8fd4\u56de\u4e00\u4e2a\u5bf9\u7528\u6237\u53cb\u597d\u7684\u4fe1\u606f\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import { ApolloServer } from "@apollo/server";\nimport { startStandaloneServer } from "@apollo/server/standalone";\nimport { ApolloServerErrorCode } from "@apollo/server/errors";\n\nconst server = new ApolloServer({\n  typeDefs,\n  resolvers,\n\n  formatError: (formattedError, error) => {\n    // Return a different error message\n    if (\n      formattedError.extensions.code ===\n      ApolloServerErrorCode.GRAPHQL_VALIDATION_FAILED\n    ) {\n      return {\n        ...formattedError,\n        message: "Your query doesn\'t match the schema. Try double-checking it!",\n      };\n    }\n\n    // Otherwise return the formatted error. This error can also\n    // be manipulated in other ways, as long as it\'s returned.\n    return formattedError;\n  },\n});\n\nconst { url } = await startStandaloneServer(server);\nconsole.log(`\ud83d\ude80 Server listening at: ${url}`);\n')),(0,o.kt)("p",null,"\u53e6\u4e00\u4e2a\u4f8b\u5b50\uff0c\u65e0\u8bba\u4f55\u65f6\uff0c\u53ea\u8981\u539f\u59cb\u7684\u9519\u8bef\u4fe1\u606f\u4ee5",(0,o.kt)("inlineCode",{parentName:"p"},"Database Error: "),"\u5f00\u5934\uff0c\u6211\u4eec\u8fd4\u56de\u4e00\u4e2a\u66f4\u666e\u901a\u7684\u9519\u8bef\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"formatError: (formattedError, error) => {\n  if (formattedError.message.startsWith('Database Error: ')) {\n    return { message: 'Internal server error' };\n  }\n\n  // Otherwise return the formatted error.\n  return formattedError;\n},\n")),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u8bbf\u95ee\u539f\u59cb\u7684\u62a5\u9519(\u6ca1\u6709\u683c\u5f0f\u5316\u4e3a JSON \u7684)\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"formateError"),"\u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\u3002"),(0,o.kt)("p",null,"\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u5982\u679c\u4f60\u5728\u5e94\u7528\u4e2d\u4f7f\u7528\u4e86\u4e00\u4e2a database \u5e93\uff0c\u5e76\u4e14\u5f53\u670d\u52a1\u629b\u51fa\u4e00\u4e2a\u7279\u5b9a\u7c7b\u578b\u7684\u6570\u636e\u5e93\u9519\u8bef\u65f6\uff0c\u4f60\u5e0c\u671b\u505a\u4e00\u4e9b\u5904\u7406\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"formatError: (formattedError, error) => {\n    if (error instanceof CustomDBError) {\n      // do something specific\n    }\n  },\n")),(0,o.kt)("p",null,"\u6ce8\u610f\uff0c\u5982\u679c",(0,o.kt)("em",{parentName:"p"},"resolver"),"\u629b\u51fa\u4e00\u4e2a\u9519\u8bef\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLError"),"\u88ab\u5305\u88c5\u5728\u521d\u8bd5\u9519\u8bef\u5916\u5c42\u3002",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLError"),"\u6574\u9f50\u5730\u683c\u5f0f\u5316\u9519\u8bef\u5e76\u4e14\u5305\u542b\u6709\u7528\u7684\u5b57\u6bb5\uff0c\u4f8b\u5982\u9519\u8bef\u51fa\u73b0\u5728\u54ea\u91cc\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"path"),"\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u79fb\u9664\u5916\u5c42\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLError"),"\u4ee5\u8bbf\u95ee\u539f\u59cb\u7684\u9519\u8bef\uff0c\u4f60\u53ef\u4ee5\u4ece",(0,o.kt)("inlineCode",{parentName:"p"},"@apollo/server/errors"),"\u5f15\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"unwrapResolverError"),"\u3002",(0,o.kt)("inlineCode",{parentName:"p"},"unwrapResolverError"),"\u51fd\u6570\u53ef\u4ee5\u4ece resolver \u9519\u8bef\u79fb\u9664",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLError"),"\u5c01\u88c5\uff0c\u5982\u679c\u8fd9\u4e2a\u9519\u8bef\u4e0d\u662f resolver \u629b\u51fa\u7684\uff0c\u5219\u8fd4\u56de\u672a\u4fee\u6539\u7684\u9519\u8bef\u3002"),(0,o.kt)("p",null,"\u6240\u4ee5\uff0c\u6211\u4eec\u53ef\u4ee5\u91cd\u5199\u524d\u9762\u7684\u4ee3\u7801\u7247\u6bb5\u6765\u5904\u7406 resolver \u5185\u90e8\u4e0e\u5916\u4fa7\u629b\u51fa\u9519\u8bef\uff0c\u4f8b\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import { unwrapResolverError } from "@apollo/server/errors";\n\nnew ApolloServer({\n  formatError: (formattedError, error) => {\n    // unwrapResolverError removes the outer GraphQLError wrapping from\n    // errors thrown in resolvers, enabling us to check the instance of\n    // the original error\n    if (unwrapResolverError(error) instanceof CustomDBError) {\n      return { message: "Internal server error" };\n    }\n  },\n});\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u4e3a\u4e86\u4f7f\u7279\u5b9a\u7684 context \u9002\u914d\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"formatError"),"\u63a5\u6536\u7684\u9519\u8bef(\u4f8b\u5982\u672c\u5730\u5316\u548c\u4e2a\u6027\u5316)\uff0c\u8003\u8651\u521b\u5efa\u4e00\u4e2a\u63d2\u4ef6\uff0c\u5b83\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"didEncounterErrors"),"\u58f0\u660e\u5468\u671f\u4e8b\u4ef6\u53bb\u6dfb\u52a0\u989d\u5916\u7684\u5c5e\u6027\u7ed9\u8fd9\u4e2a\u9519\u8bef\u3002\u8fd9\u4e9b\u5c5e\u6027\u53ef\u4ee5\u4ece",(0,o.kt)("inlineCode",{parentName:"p"},"formatError"),"\u8bbf\u95ee\u3002")),(0,o.kt)("h3",{id:"for-apollo-studio-reporting"},"For Apollo Studio reporting"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5728 Apollo Server 4 \u4e2d\uff1a\u9ed8\u8ba4\u914d\u7f6e\u4e0b\uff0c\u9519\u8bef\u7ec6\u8282\u4e0d\u4f1a\u88ab\u5305\u542b\u5728 trace \u4e2d\u3002\u4f5c\u4e3a\u66ff\u4ee3\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"<masked>"),"\u66ff\u6362\u6bcf\u4e00\u4e2a\u9519\u8bef\u4fe1\u606f\uff0c\u5e76\u4e14",(0,o.kt)("inlineCode",{parentName:"p"},"maskedBy"),"\u9519\u8bef\u6269\u5c55\u66ff\u6362\u5176\u4ed6\u6269\u5c55\u3002",(0,o.kt)("inlineCode",{parentName:"p"},"maskedBy"),"\u6269\u5c55\u5305\u542b\u4e86\u6267\u884c\u906e\u7f69\u7684\u63d2\u4ef6\u540d\u5b57(",(0,o.kt)("inlineCode",{parentName:"p"},"ApolloServerPluginUsageReporting"),"\u6216",(0,o.kt)("inlineCode",{parentName:"p"},"ApolloServerPluginInlineTrace"),")")),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528 Apollo Studio \u6765\u5206\u6790\u4f60\u670d\u52a1\u7684\u9519\u8bef\u7387\u3002\u9ed8\u8ba4\u914d\u7f6e\u4e0b\uff0c\u4f5c\u4e3a\u8be6\u7ec6\u8ddf\u8e2a\u53d1\u9001\u7ed9 Studio \u7684 operation \u4e0d\u5305\u542b\u9519\u8bef\u8be6\u7ec6\u4fe1\u606f\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u786e\u5b9e\u60f3\u5c06\u9519\u8bef\u4fe1\u606f\u53d1\u9001\u7ed9 Studio\uff0c\u4f60\u53ef\u4ee5\u53d1\u9001\u6bcf\u4e00\u4e2a\u9519\u8bef\uff0c\u5728\u5b83\u4eec\u88ab\u4f20\u64ad\u524d\uff0c\u4f60\u4e5f\u53ef\u4ee5\u4fee\u6539\u6216\u6821\u5bf9\u9519\u8bef\u4fe1\u606f\u3002"),(0,o.kt)("p",null,"\u4e3a\u4e86\u53d1\u9001\u5168\u90e8\u9519\u8bef\u4fe1\u606f\u5230 Studio\uff0c\u4f60\u53ef\u4ee5\u4f20\u9012",(0,o.kt)("inlineCode",{parentName:"p"},"{ unmodified: true }"),"\u7ed9",(0,o.kt)("inlineCode",{parentName:"p"},"sendErrors"),"\uff0c\u50cf\u4e0b\u9762\u8fd9\u6837\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"new ApolloServer({\n  // etc.\n  plugins: [\n    ApolloServerPluginUsageReporting({\n      // If you pass unmodified: true to the usage reporting\n      // plugin, Apollo Studio receives ALL error details\n      sendErrors: { unmodified: true },\n    }),\n  ],\n});\n")),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u62a5\u544a\u7279\u5b9a\u9519\u8bef\u6216\u5728\u4e00\u4e2a\u9519\u8bef\u88ab\u62a5\u544a\u524d\u4fee\u6539\u5b83\uff0c\u4f60\u53ef\u4ee5\u4f20\u9012\u51fd\u6570\u7ed9",(0,o.kt)("inlineCode",{parentName:"p"},"sendErrors.trarnsform"),"\u914d\u7f6e\uff0c\u50cf\u4e0b\u9762\u8fd9\u6837\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'new ApolloServer({\n  // etc.\n  plugins: [\n    ApolloServerPluginUsageReporting({\n      sendErrors: {\n        transform: (err) => {\n          if (err.extensions.code === "MY_CUSTOM_CODE") {\n            // returning null will skip reporting this error\n            return null;\n          }\n\n          // All other errors are reported.\n          return err;\n        },\n      },\n    }),\n  ],\n});\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u4f60\u63d0\u4f9b\u4e00\u4e2a Apollo API key \u7ed9 Apollo Server\uff0cusage reporting plugin \u4f1a\u4f5c\u4e3a\u9ed8\u8ba4\u914d\u7f6e\u81ea\u52a8\u5b89\u88c5\u3002\u53bb\u5b9a\u5236 usage reporting plugin \u7684\u884c\u4e3a\uff0c\u4f60\u9700\u8981\u7528\u5b9a\u5236\u5316\u914d\u7f6e\u5b89\u88c5\u5b83\uff0c\u50cf\u4e0b\u9762\u7684\u4f8b\u5b50\u4e00\u6837\u3002")))}u.isMDXComponent=!0}}]);