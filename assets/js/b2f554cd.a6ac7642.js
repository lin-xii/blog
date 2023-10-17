"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[477],{10:n=>{n.exports=JSON.parse('{"blogPosts":[{"id":"/2023/apollo-server/graphql-schema-basics","metadata":{"permalink":"/blog/2023/apollo-server/graphql-schema-basics","source":"@site/blog/2023/apollo-server/graphql-schema-basics.md","title":"GraphQL schema \u57fa\u672c\u6982\u5ff5","description":"\u4e00\u4e9b\u5bf9 schema \u7684\u7406\u89e3\u3002","date":"2023-10-13T00:00:00.000Z","formattedDate":"2023\u5e7410\u670813\u65e5","tags":[{"label":"Apollo Server","permalink":"/blog/tags/apollo-server"},{"label":"GraphQL","permalink":"/blog/tags/graph-ql"},{"label":"Basics","permalink":"/blog/tags/basics"}],"readingTime":1.215,"hasTruncateMarker":true,"authors":[{"name":"\u6797\u5341\u4e8cXII","title":"\u5200\u8015\u706b\u79cd\u7684\u7a0b\u5e8f\u733f","url":"https://github.com/lin-xii","imageURL":"https://github.com/lin-xii.png","key":"lin-xii"}],"frontMatter":{"title":"GraphQL schema \u57fa\u672c\u6982\u5ff5","date":"2023-10-13T00:00:00.000Z","authors":"lin-xii","tags":["Apollo Server","GraphQL","Basics"]},"nextItem":{"title":"GraphQL schema \u547d\u540d\u4e60\u60ef","permalink":"/blog/2023/apollo-server/naming-conventions"}},"content":"\u4e00\u4e9b\u5bf9 schema \u7684\u7406\u89e3\u3002\\n\\n\x3c!-- truncate --\x3e\\n\\n## TL;DR\\n\\nSchema \u662f\u4e00\u79cd\u63cf\u8ff0\u6570\u636e\u7ed3\u6784\u7684\u65b9\u5f0f\uff0c\u4e0e\u6570\u636e\u5b9e\u9645\u5b58\u50a8\u7684\u65b9\u5f0f\u3001\u7ed3\u6784\u548c\u5b9e\u73b0\u6280\u672f\u65e0\u5173\u3002\\n\\n- GraphQL uses a **schema** to describe the shape of data.\\n- The schema defines a hierarchy of **types** with **field** that are populated from data stores.\\n- The schema specifies exactly which **queries** and **mutations** are available for clients to excute.\\n\\n## \u7ffb\u8bd1\\n\\nGraphQL server \u4f7f\u7528 **schema** \u6765\u63cf\u8ff0\u6570\u636e\u7ed3\u6784\u3002Schema \u5212\u5206\u4e86 **type** \u548c **field** \u7684\u5c42\u6b21\u7ed3\u6784\uff0c\u8fd9\u4e9b field \u901a\u5e38\u662f\u5b58\u50a8\u5728\u540e\u7aef\u6570\u636e\u5e93\u4e2d\u7684\u3002Schema \u8fd8\u5b9a\u4e49\u4e86\u5ba2\u6237\u7aef\u53ef\u4ee5\u6267\u884c\u7684 **queries** \u548c **mutations**\u3002\\n\\n\u8fd9\u7bc7\u6587\u7ae0\u4ecb\u7ecd\u4e86 schema \u7684\u57fa\u672c\u6982\u5ff5\uff0c\u4ee5\u53ca\u5982\u4f55\u521b\u5efa\u4e00\u4e2a GraphQL server\u3002\\n\\n## Original docs\\n\\nYour GraphQL server uses a **schema** to describe the shape of your available data. This schema defines a hierarchy of **types** with **fields** that are populated from your back-end data stores. The schema also specifies exactly which **queries** and **mutations** are available for clients to execute.\\n\\nThis article describes the fundamental building blocks of a schema and how to create one for your GraphQL server.\\n\\n## \u53c2\u8003\u8d44\u6599\\n\\n1. [Apollo Server Docs](https://www.apollographql.com/docs/apollo-server/schema/schema)"},{"id":"/2023/apollo-server/naming-conventions","metadata":{"permalink":"/blog/2023/apollo-server/naming-conventions","source":"@site/blog/2023/apollo-server/naming-conventions.md","title":"GraphQL schema \u547d\u540d\u4e60\u60ef","description":"\u770b\u4e86\u904d\u5b98\u65b9\u6587\u6863\uff0c\u603b\u7ed3\u4e86\u4e9b\u5e38\u7528\u7684\u547d\u540d\u4e60\u60ef\u3002","date":"2023-10-13T00:00:00.000Z","formattedDate":"2023\u5e7410\u670813\u65e5","tags":[{"label":"Apollo Server","permalink":"/blog/tags/apollo-server"},{"label":"GraphQL","permalink":"/blog/tags/graph-ql"},{"label":"Naming","permalink":"/blog/tags/naming"}],"readingTime":0.93,"hasTruncateMarker":true,"authors":[{"name":"\u6797\u5341\u4e8cXII","title":"\u5200\u8015\u706b\u79cd\u7684\u7a0b\u5e8f\u733f","url":"https://github.com/lin-xii","imageURL":"https://github.com/lin-xii.png","key":"lin-xii"}],"frontMatter":{"title":"GraphQL schema \u547d\u540d\u4e60\u60ef","date":"2023-10-13T00:00:00.000Z","authors":"lin-xii","tags":["Apollo Server","GraphQL","Naming"]},"prevItem":{"title":"GraphQL schema \u57fa\u672c\u6982\u5ff5","permalink":"/blog/2023/apollo-server/graphql-schema-basics"},"nextItem":{"title":"\u5c0f\u7834\u7ad9\u7b2c\u4e00\u7bc7blog","permalink":"/blog/2023/first-blog"}},"content":"\u770b\u4e86\u904d\u5b98\u65b9\u6587\u6863\uff0c\u603b\u7ed3\u4e86\u4e9b\u5e38\u7528\u7684\u547d\u540d\u4e60\u60ef\u3002\\n\\n\x3c!-- truncate --\x3e\\n\\n## TL;DR\\n\\nGraphQL \u89c4\u8303\u5e76\u6ca1\u6709\u5f3a\u5236\u8981\u6c42\u547d\u540d\u89c4\u8303\uff0c\u4f46\u5efa\u8bae\u9075\u5faa\u4ee5\u4e0b\u89c4\u5219\uff1a\\n\\n- **Field names**: `camelCase`\\n- **Enum values**: `ALL_CAPS`\\n- **Type names**: `PascalCase`\\n- **Enum names**: `PascalCase`\\n\\n## Original docs\\n\\nThe GraphQL specification is flexible and doesn\'t impose specific naming guidelines. However, it\'s helpful to establish a set of conventions to ensure consistency across your organization. We recommend the following:\\n\\n- **Field names** should use `camelCase`. Many GraphQL clients are written in JavaScript, Java, Kotlin, or Swift, all of which recommend camelCase for variable names.\\n- **Type names** should use `PascalCase`. This matches how classes are defined in the languages mentioned above.\\n- **Enum names** should use `PascalCase`.\\n- **Enum values** should use `ALL_CAPS`, because they are similar to constants.\\n\\nThese conventions help ensure that most clients don\'t need to define extra logic to transform the results returned by your server.\\n\\n## \u53c2\u8003\u8d44\u6599\\n\\n1. [Apollo Server Docs](https://www.apollographql.com/docs/apollo-server/schema/schema#naming-conventions)\\n2. [GraphQL Spec](https://github.com/graphql/graphql-spec)"},{"id":"/2023/first-blog","metadata":{"permalink":"/blog/2023/first-blog","source":"@site/blog/2023/first-blog.md","title":"\u5c0f\u7834\u7ad9\u7b2c\u4e00\u7bc7blog","description":"\u5f00\u59cb\u5199 blog \u4e86","date":"2023-10-11T00:00:00.000Z","formattedDate":"2023\u5e7410\u670811\u65e5","tags":[{"label":"\u5f00\u7bc7","permalink":"/blog/tags/\u5f00\u7bc7"}],"readingTime":0.58,"hasTruncateMarker":true,"authors":[{"name":"\u6797\u5341\u4e8cXII","title":"\u5200\u8015\u706b\u79cd\u7684\u7a0b\u5e8f\u733f","url":"https://github.com/lin-xii","imageURL":"https://github.com/lin-xii.png","key":"lin-xii"}],"frontMatter":{"title":"\u5c0f\u7834\u7ad9\u7b2c\u4e00\u7bc7blog","date":"2023-10-11T00:00:00.000Z","authors":"lin-xii","tags":["\u5f00\u7bc7"]},"prevItem":{"title":"GraphQL schema \u547d\u540d\u4e60\u60ef","permalink":"/blog/2023/apollo-server/naming-conventions"},"nextItem":{"title":"\u524d\u7aef\u89c6\u89d2\u7684\u53ef\u89c2\u6d4b\u6027(\u4e00)","permalink":"/blog/2023/observability-frontend-1"}},"content":"## \u5f00\u59cb\u5199 blog \u4e86\\n\\n\u9759\u6781\u601d\u52a8\uff0c\u51c6\u5907\u6361\u8d77\u6765\u539f\u6765\u7684 blog \u8ba1\u5212\u4e86\u3002\\n\\n\x3c!-- truncate --\x3e\\n\\n## \u4e3a\u4ec0\u4e48\u5199 blog\\n\\n\u5927\u91cf\u7684\u7eb8\u8d28\u7b14\u8bb0\uff0c\u67e5\u9605\u6210\u672c\u9010\u5e74\u5347\u9ad8\u3002\u8003\u8651\u5c06\u7eb8\u8d28\u7b14\u8bb0\u8f6c\u79fb\u5230\u4e92\u8054\u7f51\u4e0a\uff0c\u65b9\u4fbf\u67e5\u9605\u3002\\n\\n## \u9009\u62e9 blog\\n\\n\u4e3a\u4ec0\u4e48\u4e0d\u7528\u73b0\u6210\u7684\uff0c\u4f8b\u5982\uff1a\\n\\n- \u5370\u8c61\u7b14\u8bb0\\n- \u8bed\u96c0\\n- \u6398\u91d1\\n- infoQ\\n- CSDN\\n- \u535a\u5ba2\u56ed\\n- \u77e5\u4e4e\\n\\n\u5e73\u53f0\u662f\u52a9\u529b\uff0c\u4e5f\u662f\u7981\u9522\u3002\u5e0c\u671b\u6211\u7684\u6587\u5b57\uff0c\u80fd\u8ba9\u66f4\u591a\u7684\u4eba\u770b\u5230\u3002"},{"id":"/2023/observability-frontend-1","metadata":{"permalink":"/blog/2023/observability-frontend-1","source":"@site/blog/2023/observability-frontend-1.md","title":"\u524d\u7aef\u89c6\u89d2\u7684\u53ef\u89c2\u6d4b\u6027(\u4e00)","description":"TL;DR","date":"2023-07-26T00:00:00.000Z","formattedDate":"2023\u5e747\u670826\u65e5","tags":[{"label":"\u524d\u7aef","permalink":"/blog/tags/\u524d\u7aef"},{"label":"\u53ef\u89c2\u6d4b\u6027","permalink":"/blog/tags/\u53ef\u89c2\u6d4b\u6027"},{"label":"\u4e00\u70b9\u60f3\u6cd5","permalink":"/blog/tags/\u4e00\u70b9\u60f3\u6cd5"}],"readingTime":5.805,"hasTruncateMarker":true,"authors":[{"name":"\u6797\u5341\u4e8cXII","title":"\u5200\u8015\u706b\u79cd\u7684\u7a0b\u5e8f\u733f","url":"https://github.com/lin-xii","imageURL":"https://github.com/lin-xii.png","key":"lin-xii"}],"frontMatter":{"title":"\u524d\u7aef\u89c6\u89d2\u7684\u53ef\u89c2\u6d4b\u6027(\u4e00)","authors":"lin-xii","date":"2023-07-26T00:00:00.000Z","tags":["\u524d\u7aef","\u53ef\u89c2\u6d4b\u6027","\u4e00\u70b9\u60f3\u6cd5"]},"prevItem":{"title":"\u5c0f\u7834\u7ad9\u7b2c\u4e00\u7bc7blog","permalink":"/blog/2023/first-blog"},"nextItem":{"title":"IPS\u4ea7\u54c1\u7ecf\u7406","permalink":"/blog/2018/ips-product-designer"}},"content":"## TL;DR\\n\\nGartner \u5c06**\u5e94\u7528\u53ef\u89c2\u6d4b\u6027**\u5217\u4e3a**2023 \u5e74\u91cd\u8981\u6218\u7565\u8d8b\u52bf**\u4e4b\u4e00\u3002\\n\\n\u4f5c\u4e3a\u5f00\u53d1\u8005, \u5373\u4fbf\u6ca1\u6709\u4e13\u7cbe\u6b64\u9053\u3002\u4f46\u4e86\u89e3\u4e00\u4e0b\uff0c\u8fd8\u662f\u6709\u5fc5\u8981\u7684\u3002\\n\\n\x3c!-- truncate --\x3e\\n\\n## \u524d\u8a00\\n\\n\u6700\u8fd1\uff0c\u6211\u6240\u5728\u7684\u4ea7\u54c1\u7ec4\uff0c\u5c06\u5b8c\u5584\u76d1\u63a7\u7cfb\u7edf\uff0c\u653e\u5165\u4e86\u7248\u672c\u89c4\u5212\u4e2d\u3002\\n\\n\u8d81\u6b64\u826f\u673a\uff0c\u4e86\u89e3\u4e86\u4e00\u6ce2**\u53ef\u89c2\u6d4b\u6027**\u76f8\u5173\u7684\u80cc\u666f\u548c\u6280\u672f\u3002\\n\\n\u540c\u65f6\uff0c\u5bf9\u539f\u6709\u7684\u76d1\u63a7\u65b9\u5f0f\uff0c\u8fdb\u884c\u4e86\u4e00\u5b9a\u7684\u6539\u9020\u3002\\n\\n## \u53ef\u89c2\u6d4b\u6027\\n\\n> [\u63a7\u5236\u7406\u8bba](https://zh.wikipedia.org/wiki/\u63a7\u5236\u7406\u8ad6)\u4e2d\u7684**\u53ef\u89c2\u5bdf\u6027**\uff08observability\uff09\u662f\u6307[\u7cfb\u7edf](https://zh.wikipedia.org/wiki/\u7cfb\u7d71)\u53ef\u4ee5\u7531\u5176\u5916\u90e8\u8f93\u51fa\u63a8\u65ad\u5176\u5176\u5185\u90e8[\u72b6\u6001](https://zh.wikipedia.org/wiki/\u72c0\u614b\u7a7a\u9593)\u7684\u7a0b\u5ea6\u3002\u7cfb\u7edf\u7684\u53ef\u89c2\u5bdf\u6027\u548c[\u53ef\u63a7\u5236\u6027](https://zh.wikipedia.org/wiki/\u53ef\u63a7\u5236\u6027)\u662f\u6570\u5b66\u4e0a[\u5bf9\u5076](<https://zh.wikipedia.org/wiki/\u5bf9\u5076_(\u6570\u5b66)>)\u7684\u6982\u5ff5\u3002\u53ef\u89c2\u5bdf\u6027\u6700\u65e9\u662f\u5308\u7259\u5229\u88d4\u5de5\u7a0b\u5e08[\u9c81\u9053\u592b\xb7\u5361\u5c14\u66fc](https://zh.wikipedia.org/wiki/\u9c81\u9053\u592b\xb7\u5361\u5c14\u66fc)\u9488\u5bf9\u7ebf\u6027\u52a8\u6001\u7cfb\u7edf\u63d0\u51fa\u7684\u6982\u5ff5[[1\\\\]](https://zh.wikipedia.org/zh-hans/\u53ef\u89c0\u6e2c\u6027#cite_note-1)[[2\\\\]](https://zh.wikipedia.org/zh-hans/\u53ef\u89c0\u6e2c\u6027#cite_note-2)\u3002\u82e5\u4ee5[\u4fe1\u53f7\u6d41\u56fe](https://zh.wikipedia.org/wiki/\u4fe1\u53f7\u6d41\u56fe)\u6765\u770b\uff0c\u82e5\u6240\u6709\u7684\u5185\u90e8\u72b6\u6001\u90fd\u53ef\u4ee5\u8f93\u51fa\u5230\u8f93\u51fa\u4fe1\u53f7\uff0c\u6b64\u7cfb\u7edf\u5373\u6709\u53ef\u89c2\u5bdf\u6027\u3002\\n\\n### \u4ec0\u4e48\u662f\u53ef\u89c2\u6d4b\u6027\uff1f\\n\\n> \u53ef\u89c2\u6d4b\u6027\u662f\u6307\u80fd\u591f\u901a\u8fc7\u68c0\u67e5\u7cfb\u7edf\u6216\u5e94\u7528\u7684\u8f93\u51fa\u3001\u65e5\u5fd7\u548c\u6027\u80fd\u6307\u6807\u6765\u76d1\u63a7\u3001\u6d4b\u91cf\u548c\u7406\u89e3\u7cfb\u7edf\u6216\u5e94\u7528\u7684\u72b6\u6001\u3002\\n\\n\u8bb2\u4eba\u8bdd\uff0c\u6211\u7406\u89e3\u5c31\u662f\u5c06\u4f20\u7edf\u76d1\u63a7\u7cfb\u7edf\u7684\u65e5\u5fd7\uff0c\u8fdb\u884c\u4e86\u6807\u51c6\u5316\u3001\u4f53\u7cfb\u5316\u3002\u540c\u65f6\uff0c\u5c06\u539f\u6765\u201c\u5b64\u5c9b\u5f0f\u201d\u7684\u65e5\u5fd7\u8fdb\u884c\u4e86\u201c\u5173\u8054\u201d\u3002\u5c06\u6240\u6709\u65e5\u5fd7\u7ec4\u5408\u6210\u6574\u4f53\uff0c\u4ee5\u6b64\u6765\u5206\u6790\u7cfb\u7edf\u72b6\u6001\u3002\\n\\n### \u4e3a\u4ec0\u4e48\u4f1a\u51fa\u73b0\uff1f\u6216\u8005\u8bf4\uff0c\u4e3a\u4ec0\u4e48\u73b0\u5728\u706b\u4e86\uff1f\\n\\n\u76d1\u63a7\u7cfb\u7edf\u5e76\u4e0d\u662f\u4ec0\u4e48\u7a00\u7f55\u4e8b\u52a1\uff0c\u4f46\u4e3a\u4ec0\u4e48\u4e4b\u524d\u6ca1\u6709\u4ec0\u4e48\u70ed\u5ea6\u5462\uff1f\\n\\n\u6211\u8ba4\u4e3a\uff0c\u662f\u6392\u67e5\u95ee\u9898\u7684\u95e8\u69db\uff0c\u53d8\u9ad8\u4e86\u3002\u53d8\u9ad8\u7684\u539f\u56e0\uff0c\u4e3b\u8981\u6709 2 \u65b9\u9762\uff1a\\n\\n1. \u7cfb\u7edf\u590d\u6742\u5ea6\\n2. \u6570\u636e\u91cf\\n\\n#### \u7cfb\u7edf\u590d\u6742\u5ea6\\n\\n\u9996\u5148\uff0c\u662f\u7cfb\u7edf\u7684\u590d\u6742\u5ea6\u5728\u4e0d\u65ad\u4e0a\u5347\u3002\u5355\u673a\u8f6f\u4ef6\u3001\u96c6\u7fa4\u90e8\u7f72\u3001\u4e91\u670d\u52a1\u3001\u865a\u62df\u5316\u3002\\n\\n\u8f6f\u4ef6\u90e8\u7f72\u65b9\u5f0f\u7684\u6bcf\u4e00\u6b21\u5347\u7ea7\uff0c\u90fd\u5728\u63d0\u5347\u8f6f\u4ef6\u7cfb\u7edf\u7684\u6574\u4f53\u80fd\u529b\u3002\\n\\n\u4e0e\u6b64\u540c\u65f6\uff0c\u4e00\u65e6\u51fa\u73b0\u95ee\u9898\uff0c\u6392\u67e5&\u89e3\u51b3\u95ee\u9898\u7684\u96be\u5ea6\uff0c\u4e5f\u5728\u4e0d\u65ad\u4e0a\u5347\u3002\u5982\u679c\u8eab\u8fb9\u6709\u8fd0\u7ef4\u540c\u5b66\uff0c\u53ef\u4ee5\u542c\u4ed6\u4eec\u8bb2\u4e00\u8bb2\uff0c\u72ec\u5c5e\u4e8e\u4ed6\u4eec\u7684\u3001\u6df1\u591c\u91cc\u7684\u6545\u4e8b \ud83e\udd23\\n\\n#### \u6570\u636e\u91cf\\n\\n\u4ece\u8ba1\u7b97\u673a\u8bde\u751f\uff0c\u6211\u4eec\u5df2\u7ecf\u7ecf\u5386\u4e86\u5355\u673a\u8f6f\u4ef6\u3001\u5c40\u57df\u7f51\u3001\u4e92\u8054\u7f51\uff0c\u4e14\u8eab\u5904**\u79fb\u52a8\u4e92\u8054\u7f51**\u3002\\n\\n\u5728\u7f51\u7edc\u9ad8\u5ea6\u666e\u53ca\u7684\u4eca\u5929\uff0c\u8f6f\u4ef6\u548c\u670d\u52a1\uff0c\u5305\u88f9\u7740\u6bcf\u4e00\u4e2a**\u7f51\u6c11**\u3002\u7f51\u7edc\u89e6\u624b\u7684\u5ef6\u4f38\uff0c\u5728\u63d0\u4f9b\u4e86\u9ad8\u5ea6\u4fbf\u5229\u7684\u540c\u65f6\uff0c\u4e5f\u7ed9\u6570\u636e\u91cf\u5e26\u6765\u4e86\u4e95\u55b7\u5f0f\u7684\u589e\u957f\u3002\u8fd9\u7ed9\u95ee\u9898\u6392\u67e5\uff0c\u589e\u52a0\u4e86\u4e0d\u5c0f\u7684\u96be\u5ea6\u3002\\n\\n\u5f53\u4e0b\uff0c\u6211\u4eec\u8eab\u5904**\u79fb\u52a8\u4e92\u8054\u7f51**\u7684\u4e0a\u534a\u573a\uff0c\u5f53\u6444\u50cf\u5934\u3001\u5bb6\u7528\u7535\u5668\u3001\u8f66\u8f7d\u7cfb\u7edf\u548c\u65b0\u57fa\u5efa\u4e2d\u65e0\u5904\u4e0d\u5728\u7684\u4f20\u611f\u5668\u5165\u7f51\u540e\uff0c\u5728\u79fb\u52a8\u4e92\u8054\u7f51\u7684\u4e0b\u534a\u573a\uff08IoT\uff09\uff0c\u6570\u636e\u91cf\u7684\u66b4\u589e\uff0c\u662f\u53ef\u4ee5\u9884\u89c1\u7684\u3002\\n\\n\u6240\u4ee5\uff0c\u4f20\u7edf\u76d1\u63a7\u7cfb\u7edf\u76f8\u5bf9\u7247\u9762\u3001\u5c40\u90e8\u7684\u76d1\u63a7\u6307\u6807\uff0c\u65e0\u6cd5\u6ee1\u8db3\u590d\u6742\u73af\u5883\u4e0b\u7684\u7cfb\u7edf\u72b6\u6001\u76d1\u63a7\u3001\u95ee\u9898\u6392\u67e5\u548c\u7cfb\u7edf\u8c03\u4f18\u3002\\n\\n### \u600e\u4e48\u7528\uff1f\\n\\nOpentelemetry\u3001Prometheus\u3001Grafana\u3001Jaeger \u7b49\u7b49\u3002\u73b0\u5728\u5df2\u7ecf\u6709\u5f88\u591a\u6210\u719f\u7684\u5f00\u6e90\u5de5\u5177\u53ef\u4f9b\u96c6\u6210\u3001\u6216\u4e8c\u6b21\u5b9a\u5236\u5f00\u53d1\u3002\u4e5f\u6709\u4e0d\u5c11\u6536\u8d39\u7684\u5e73\u53f0\uff0c\u65b9\u4fbf\u4f7f\u7528\u3002\\n\\n\u901a\u8fc7\u8fd9\u4e9b\u53ef\u89c2\u6d4b\u6027\u5de5\u5177\uff0c\u53ef\u4ee5\\n\\n1. \u66f4\u52a0\u5168\u9762\u7684\u76d1\u63a7\u7cfb\u7edf\u6307\u6807\\n2. \u66f4\u6e05\u6670\u7684\u5206\u6790\u8c03\u7528\u94fe\u6761\\n3. \u66f4\u51c6\u786e\u3001\u66f4\u6709\u628a\u63e1\u7684\u7684\u4f18\u5316\u7cfb\u7edf\u74f6\u9888\u70b9\\n\\n\u8fd9\u4e9b\u4e0d\u662f\u7a7a\u53e3\u767d\u8bdd\uff0c\u6211\u4eec\u4ea7\u54c1\u5728\u521d\u6b65\u96c6\u6210 Jaeger \u540e\uff0c\u5df2\u7ecf\u53d1\u73b0\u4e86\u51e0\u5904\u6709\u4ef7\u503c\u7684\u9690\u85cf\u95ee\u9898\u3002\u8fd9\u5728\u539f\u6765\uff0c\u53ea\u80fd\u901a\u8fc7\u5927\u89c4\u6a21\u7684\u538b\u529b\u6d4b\u8bd5\uff08\u5982\u679c\u6709\uff09\u3001\u5ba2\u6237\u73b0\u573a\u53cd\u9988\u6765\u53d1\u73b0\u3001\u4fee\u590d\u3002\\n\\n\u540e\u8fb9\u6709\u673a\u4f1a\uff08\u5982\u679c\u4e0d\u9e3d\uff09\uff0c\u4f1a\u5206\u4eab\u4e00\u4e9b\u8131\u654f\u7684\u76f8\u5173\u5b9e\u8df5\u3002\\n\\n## \u4e00\u70b9\u60f3\u6cd5\\n\\n\u8fd9\u5468\uff0c\u96c6\u6210\u8fdb\u7cfb\u7edf\u7684 Jaeger \u57fa\u672c\u53ef\u7528\u4e86\u3002\u901a\u8fc7\u548c\u540e\u7aef\u5e08\u5085\u7684\u4ea4\u6d41\uff0c\u53d1\u73b0\u4e86\u51e0\u5904\u9690\u85cf\u7684\u95ee\u9898\uff0c\u633a\u5f00\u5fc3\u7684\u3002\\n\\n\u867d\u7136\u6709\u4e9b\u9a6c\u540e\u70ae\u4e86\uff0c\u4f46\u5728\u6bd5\u4e1a\u4e0d\u4e45\u7684\u65f6\u5019\uff0c\u5c31\u6709\u5bf9\u5b8c\u5584\u7684\u76d1\u63a7\u4f53\u7cfb\u7684\u671f\u5f85\u4e86\u3002\u53ef\u60dc\uff0c\u5f53\u65f6\u867d\u7136\u6709\u8003\u8651\u8fc7\u76d1\u63a7\u7cfb\u7edf\u7684\u96cf\u5f62\uff0c\u4f46\u53ea\u505c\u7559\u5728\u60f3\u8c61\u4e2d\u4e86\u3002\u73b0\u5b9e\u91cc\u7684\u65f6\u95f4\uff0c\u90fd\u53bb\u6253\u6e38\u620f\u4e86\u3002\u3002\u3002\\n\\n\u603b\u4e4b\uff0c**Observability**\u76f8\u5173\u7684\u6280\u672f, **\u4e0d\u662f**\u98a0\u8986\u4f20\u7edf\u76d1\u63a7\u7cfb\u7edf\u7684**\u94f6\u5f39**\u3002\\n\\n\u5728\u6211\u770b\u6765\uff0c\u66f4\u50cf\u662f**\u5e94\u8fd0\u800c\u751f**\u3002\u662f\u5bf9\u4f20\u7edf\u76d1\u63a7\u4f53\u7cfb\u7684\u5b8c\u5584\u3001\u8865\u5145\u548c\u5347\u7ea7\u3002\\n\\n## \u53c2\u8003\u8d44\u6599\\n\\n1. [wiki](https://zh.wikipedia.org/zh-hans/\u53ef\u89c0\u6e2c\u6027)\\n1. [RedHat](https://www.redhat.com/zh/topics/devops/what-is-observability)"},{"id":"/2018/ips-product-designer","metadata":{"permalink":"/blog/2018/ips-product-designer","source":"@site/blog/2018/ips-product-designer.md","title":"IPS\u4ea7\u54c1\u7ecf\u7406","description":"\u5410\u69fd","date":"2018-11-25T00:00:00.000Z","formattedDate":"2018\u5e7411\u670825\u65e5","tags":[{"label":"\u4ea7\u54c1\u7ecf\u7406","permalink":"/blog/tags/\u4ea7\u54c1\u7ecf\u7406"},{"label":"\u5410\u69fd","permalink":"/blog/tags/\u5410\u69fd"},{"label":"\u5947\u8469\u4e8b","permalink":"/blog/tags/\u5947\u8469\u4e8b"}],"readingTime":11.595,"hasTruncateMarker":true,"authors":[{"name":"\u6797\u5341\u4e8cXII","title":"\u5200\u8015\u706b\u79cd\u7684\u7a0b\u5e8f\u733f","url":"https://github.com/lin-xii","imageURL":"https://github.com/lin-xii.png","key":"lin-xii"}],"frontMatter":{"title":"IPS\u4ea7\u54c1\u7ecf\u7406","authors":"lin-xii","date":"2018-11-25T00:00:00.000Z","tags":["\u4ea7\u54c1\u7ecf\u7406","\u5410\u69fd","\u5947\u8469\u4e8b"]},"prevItem":{"title":"\u524d\u7aef\u89c6\u89d2\u7684\u53ef\u89c2\u6d4b\u6027(\u4e00)","permalink":"/blog/2023/observability-frontend-1"}},"content":"## \u5410\u69fd\\r\\n\\r\\n2017 \u5e74 8 \u6708, \u6211\u88ab\u8f6c\u5c97\u4e86. \u8f6c\u5c97\u540e, \u6211\u9047\u89c1\u4e86\u5f88\u591a\u4e0d\u66fe\u60f3\u8fc7\u7684\u5947\u8469\u4eba \u5947\u8469\u4e8b.\\r\\n\\r\\n\u672c\u6587\u4ec5\u4ece\u6211\u4e2a\u4eba\u89d2\u5ea6, \u63cf\u8ff0\u6211\u770b\u5230\u7684, \u4e00\u4f4d\u65b0\u4eba\u4ea7\u54c1\u7ecf\u7406, \u5982\u4f55\u4ece\u76f8\u8bc6, \u5230\u76f8\u77e5, \u7136\u540e\u8d70\u5230\u4e86\u5f00\u53d1\u7684\u5bf9\u7acb\u9762.\\r\\n\\r\\n\u672c\u6587\u5145\u6ee1\u4e86\u4e2a\u4eba\u60c5\u611f, \u5b8c\u5168\u4f5c\u4e3a\u5410\u69fd\u7528, \u6216\u8bb8\u5e76\u4e0d\u5ba2\u89c2, \u4f46\u4fdd\u8bc1\u6240\u8ff0\u4e3a\u771f\u6750\u5b9e\u6599.\\r\\n\\r\\n\u6279\u8bc4\u4e0d\u81ea\u7531, \u5219\u8d5e\u7f8e\u65e0\u610f\u4e49.\\r\\n\\r\\n\x3c!-- truncate --\x3e\\r\\n\\r\\n### \u521d\u6765\\r\\n\\r\\n\u5927\u6982\u662f 8 9 \u6708\u4efd\u67d0\u5929\u5427, \u8fd9\u4f4d\u5e76\u4e0d\u840c\u7684\u65b0\u4ea7\u54c1\u7ecf\u7406\u6765\u4e86, \u88ab\u53e6\u4e00\u4f4d\u4ea7\u54c1\u7ecf\u7406\u5e26\u7740, \u548c\u7ec4\u91cc\u6240\u6709\u7684\u5f00\u53d1&\u6d4b\u8bd5\u540c\u5b66, \u6328\u4e2a\u78b0\u4e86\u4e2a\u9762, \u6df7\u4e86\u4e2a\u8138\u719f.\\r\\n\\r\\n> \u7531\u4e8e\u6211\u5728\u65b0\u7ec4\u91cc, \u4e00\u76f4\u5904\u4e8e\u6e38\u79bb\u6001, \u53ea\u52a0\u4e86\u4e00\u4e2a\u7fa4, \u5b9e\u5728\u770b\u4e0d\u5230\u8fd9\u4f4d\u4ea7\u54c1\u7ecf\u7406\u6765\u7684\u65f6\u95f4, \u53ea\u80fd\u51ed\u5370\u8c61\u4e86.\\r\\n\\r\\n\u8bf4\u5b9e\u8bdd, \u7b2c\u4e00\u611f\u89c9\u4e0d\u662f\u5f88\u597d, \u6362\u53e5\u8bdd\u8bf4, \u6beb\u65e0\u7406\u7531, \u6211\u5e76\u4e0d\u559c\u6b22\u8fd9\u4f4d\u4ea7\u54c1\u7ecf\u7406. \u4e0d\u8fc7\u867d\u7136\u4e0d\u600e\u4e48\u5f85\u89c1\u4eba\u5bb6, \u6211\u8fd8\u662f\u5e0c\u671b\u5979\u6bb5\u4f4d\u9ad8\u4e00\u4e9b\u7684, \u8d77\u7801\u8ba9\u6211\u8fd9\u79cd\u60f3\u8eba\u8d62\u7684, \u80fd\u8eba\u7684\u8212\u670d\u4e9b \ud83d\ude1c\\r\\n\\r\\n> \u6211\u8fd9\u4e2a\u4eba\u53ef\u80fd\u6bd4\u8f83\u4e8c, \u6216\u8005\u662f\u8ff7? \u6211\u5f88\u770b\u91cd\u548c\u964c\u751f\u4eba\u7b2c\u4e00\u6b21\u89c1\u9762\u7684\u611f\u89c9. \u8fd9\u4e2a\u611f\u89c9, \u4ece\u5b66\u751f\u65f6\u4ee3\u5230\u73b0\u5728, \u6574\u4f53\u504f\u51c6, \u8d77\u7801\u6bd4\u6211\u738b\u8005\u8363\u8000\u7684\u80dc\u7387\u9ad8\u591a\u4e86. \u90a3\u4e2a, \u6234\u53e3\u7f69, \u4ee5\u53ca\u751f\u75c5\u7684\u4e0d\u7b97.\\r\\n\\r\\n### \u5e73\u9759\\r\\n\\r\\n10 \u6708\u4efd\u524d\u540e, \u7531\u4e8e\u6b63\u5728\u8fdb\u884c\u7684\u9879\u76ee\u9700\u6c42\u5df2\u5b9a, \u4e5f\u6709\u53ef\u80fd\u662f\u6211\u6ca1\u6709\u8fdb\u5165\u5230\u654c\u519b\u6838\u5fc3, \u4e86\u89e3\u4e0d\u5230\u9ad8\u5c42\u4fe1\u606f, \u65b0\u6765\u7684\u4ea7\u54c1\u7ecf\u7406\u8c8c\u4f3c\u6ca1\u6709\u4ec0\u4e48\u65bd\u5c55\u62f3\u811a\u7684\u673a\u4f1a.\\r\\n\\r\\n\u6574\u4f53\u4e0a, \u8fd9\u6bb5\u65f6\u95f4\u6211\u4eec\u5c31\u50cf\u4e24\u6761\u5e73\u884c\u7ebf. \u5982\u679c\u4e0d\u662f\u5076\u5c14\u6765\u8fd9\u8fb9\u627e\u4eba, \u6211\u90fd\u5fd8\u4e86\u6709\u8fd9\u4e48\u53f7\u4ea7\u54c1\u7ecf\u7406\u4e86...\\r\\n\\r\\n### \u6210\u957f\\r\\n\\r\\n10 \u6708\u672b, \u63a5\u5230\u4e86\u4e00\u4e2a\u7ba1\u7406\u5e73\u53f0\u7684\u5b9a\u5236, \u7528\u6765\u53c2\u52a0\u5165\u56f4\u6d4b\u8bd5. \u9700\u8981\u65b0\u5f00\u53d1\u4e00\u4e9b\u529f\u80fd. \u9700\u6c42\u8ba8\u8bba\u4f1a\u4e0a, \u662f\u6211\u7b2c\u4e00\u6b21\u548c\u8fd9\u4f4d\u63a5\u89e6.\\r\\n\\r\\n\u4e00\u5171\u51e0\u6b21\u4f1a\u8bae, \u8fd9\u4f4d\u8bdd\u4e0d\u591a, \u5f88\u5e73\u9759. \u53ea\u662f\u5076\u5c14\u7684\u51e0\u53e5, \u6211\u4eec\u80fd\u505a\u5c31\u505a\u5427, \u529f\u80fd\u8d8a\u591a\u8d8a\u597d, \u663e\u5f97\u7565\u5fae\u6709\u4e9b\u523a\u8033.\\r\\n\\r\\n\u6211\u89c9\u5f97\u8fd9\u4f4d\u4ea7\u54c1\u7ecf\u7406, \u5df2\u7ecf\u719f\u6089\u4e86\u4e00\u4e9b\u4ea7\u54c1\u7279\u6027, \u4f46\u5979\u53ef\u80fd\u8fd8\u6ca1\u6709\u5403\u900f, \u5979\u8fd8\u6709\u8fdb\u6b65\u7684\u7a7a\u95f4.\\r\\n\\r\\n### \u66b4\u96e8\u524d\u5915\\r\\n\\r\\n\u65e0\u804a\u7684\u65f6\u95f4\u603b\u662f\u8fc7\u5f97\u5f88\u5feb, \u4e00\u6643\u5c31\u5e74\u5e95.\\r\\n\\r\\n\u8f6c\u5c97\u51e0\u4e2a\u6708, \u6b63\u513f\u516b\u7ecf\u7684\u4ee3\u7801\u57fa\u672c\u6ca1\u5199, \u5149\u719f\u6089\u73b0\u6709\u7684\u5751, \u548c\u524d\u9762\u63d0\u5230\u7684, \u6211\u81ea\u5df1\u57cb\u7684\u90a3\u4e2a\u5165\u56f4\u6d4b\u8bd5\u7684\u5751\u4e86.\\r\\n\\r\\n\u8fd9\u6bb5\u65f6\u95f4, \u80fd\u62ff\u51fa\u6765\u5ff5\u53e8\u5ff5\u53e8\u7684\u4e8b, \u4e5f\u5c31\u662f\u505a\u4e86 2 \u4e2a RG \u72ec\u89d2\u517d, 2 \u4e2a PG \u72ec\u89d2\u517d, \u8fd8\u6709\u4e00\u4e9b\u5176\u4ed6\u7684\u6a21\u578b.\\r\\n\\r\\n> emmm, \u505a\u9f99\u6843\u5b50\u72ec\u89d2\u517d\u7684\u65f6\u5019, \u56e0\u4e3a\u67d0\u540c\u5b66\u7684\u4e00\u53e5\u8bdd, \u5bfc\u81f4\u5fc3\u795e\u604d\u60da, \u5de6\u624b\u8840\u796d\u4e86.\\r\\n\\r\\n### \u53cc\u9f99\u51fa\u6d77\\r\\n\\r\\n\u65b0\u5e74\u65b0\u6c14\u8c61, \u5728\u65b0\u7684\u4e00\u5e74\u91cc, \u5927\u5bb6\u4e5f\u90fd\u5f00\u59cb\u5404\u663e\u795e\u901a.\\r\\n\\r\\n\u6bcf\u5e74\u5e74\u521d, \u5927\u5bb6\u90fd\u5f00\u59cb\u4e3a\u4eca\u5e74\u4ea7\u54c1\u53d1\u5c55\u7684\u65b9\u5411\u505a\u89c4\u5212, \u6211\u4eec\u4e5f\u4e0d\u4f8b\u5916. \u53ef\u80fd\u6211\u5728\u8f6c\u5c97\u524d, \u548c\u603b\u76d1\u8c08\u8bdd\u7684\u8fc7\u7a0b\u4e2d, \u8bf4\u4e86\u4e9b\u6709\u70b9\u7528\u5904\u7684\u60f3\u6cd5, \u6211\u8fd9\u540d\u642c\u7816\u9009\u624b, \u4e5f\u53c2\u4e0e\u4e86\u4e00\u6b21\u89c4\u5212\u4f1a.\\r\\n\\r\\n\u4f1a\u8bae\u4e0a\\"\u9886\u5bfc\u4eec\\"\u8ba8\u8bba\u4e86\u5f88\u591a, \u673a\u5668\u5b66\u4e60 \u5927\u6570\u636e \u865a\u62df\u5316 \u4e91\u7b49\u9ad8\u5927\u4e0a\u7684\u540d\u8bcd\u6620\u5165\u773c\u5e18, \u8ba9\u6211\u4ea7\u751f\u4e86\u4eca\u5e74\u8981\u5fd9\u6b7b\u7684\u611f\u89c9, \u8fd9\u4e48\u591a\u65b0\u6280\u672f, \u80af\u5b9a\u6bd4\u53bb\u5e74\u8840\u796d\u9ad8\u8fbe\u5f3a\u591a\u4e86.\\r\\n\\r\\n\u4e3a\u4e86\u9002\u5e94\u5e02\u573a\u9700\u8981, \u4eca\u5e74\u7684\u91cd\u70b9\u6709\u4e24\u4e2a. \u8865\u8db3\u7ba1\u7406\u5e73\u53f0\u7684\u5206\u6790\u80fd\u529b\u548c\u5f3a\u5316\u76d2\u5b50\u7684\u68c0\u6d4b\u80fd\u529b, \u5e76\u5b8c\u6210\u4e8c\u8005\u7684\u8054\u52a8. \u5728\u4e94\u6708\u4efd\u53d1\u5e03, \u63a8\u5411\u5e02\u573a, \u4ee5\u4fbf\u8fce\u5408\u4e09\u56db\u5b63\u5ea6\u51b2\u91cf\u7684\u76ee\u6807.\\r\\n\\r\\n\u65b9\u5411\u5b9a\u4e0b\u540e, \u5c31\u8981\u8003\u8651\u5982\u4f55\u66f4\u597d \u66f4\u9ad8\u6548 \u66f4\u5e73\u7a33\u7684\u843d\u5b9e\u5728\u4ea7\u54c1\u4e0a, \u9ad8\u4fdd\u771f\u539f\u578b \u9700\u6c42\u6587\u6863\u5fc5\u4e0d\u53ef\u5c11. \u6211\u4eec\u8fd9\u4f4d\u5df2\u7ecf\u4e0d\u7b97\u65b0\u4eba\u7684\u4ea7\u54c1\u7ecf\u7406, \u63a5\u4e0b\u4e86\u9ad8\u4fdd\u771f\u539f\u578b\u8fd9\u4efd\u91cd\u62c5. \u5176\u4e2d, \u9700\u6c42\u6587\u6863\u7684\u68b3\u7406, \u7531\u4e00\u4f4d SE \u8d1f\u8d23, \u6700\u540e\u4ed6\u4eec\u4e00\u8d77\u68b3\u7406, \u76f8\u8f85\u76f8\u6210, \u4e3a\u6211\u4eec\u4ea7\u54c1\u7684\u53d1\u5c55, \u6dfb\u7816\u52a0\u74e6.\\r\\n\\r\\n> \u5982\u679c\u6211\u975e\u5e38\u95f2, \u6709\u53ef\u80fd\u4f1a\u518d\u4ecb\u7ecd\u4e0b\u8fd9\u4f4d\u5389\u5bb3\u7684 SE\ud83d\ude1c\\r\\n\\r\\n### \u521d\u9732\u950b\u8292\\r\\n\\r\\n\u71d5\u5b50\u5f52\u6765, \u6625\u6696\u82b1\u5f00, \u8f6c\u773c\u6765\u5230\u4e86\u4e07\u7269\u590d\u82cf\u7684\u5b63\u8282.\\r\\n\\r\\n\u6211\u53ea\u642c\u7ba1\u7406\u5e73\u53f0\u7684\u7816, \u524d\u9762\u63d0\u5230\u7684\u5e74\u5ea6\u4efb\u52a1, \u9700\u8981\u4ea7\u54c1\u7ecf\u7406\u7684\u539f\u578b\u548c SE \u7684\u9700\u6c42\u6587\u6863\u6709\u4e2a\u5927\u81f4\u7684\u8109\u7edc\u540e, \u6211\u624d\u80fd\u5f00\u59cb\u642c\u7816.\\r\\n\\r\\n\u7136\u9e45, 17 \u5e74\u5e95\u63d0\u51fa\u4e86 18 \u5e74\u6838\u5fc3\u9879\u76ee\u7684\u65b9\u6848. \u51e0\u4e2a\u6708\u8fc7\u53bb, \u5c0f\u82b1\u9a6c\u4e0a\u5c31\u5f00\u4e86, \u6211\u4eec\u7684\u4ea7\u54c1\u7ecf\u7406\u8fd8\u5728\u8f9b\u82e6\u7684\u68b3\u7406\u9700\u6c42, \u8bbe\u8ba1\u539f\u578b. \u6211\u5728\u4e00\u4e2a\u5076\u7136\u7684\u60c5\u51b5\u4e0b, \u89c1\u5230\u4e86\u4e00\u6b21\u8c8c\u4f3c\u8981\u7ed9\u6211\u7528\u7684, \u7528 Axure \u505a\u7684\u539f\u578b. emmm, \u600e\u4e48\u5f62\u5bb9\u5462, \u4e00\u8a00\u96be\u5c3d\u5427, \u7701\u7565 500 \u5b57.\\r\\n\\r\\n![](../image/\u9ad8\u4fdd\u771f.png)\\r\\n\\r\\n\u4ea7\u54c1\u7ecf\u7406\u8fd9\u4e48\u8f9b\u82e6, SE \u80af\u5b9a\u4e5f\u4e0d\u80fd\u95f2\u7740, \u6bd5\u7adf\u4ed6\u4fe9\u5f97\u4e92\u5e2e\u4e92\u52a9, \u76f8\u8f85\u76f8\u6210\u5462. SE \u7279\u5730\u4ece\u6210\u90fd\u8dd1\u5230\u5317\u4eac\u51fa\u5dee\u534a\u4e2a\u6708, \u636e\u8bf4\u662f\u8d76\u8fc7\u6765\\"\u5e2e\u6211\\"\u68b3\u7406\u9700\u6c42. \u7ed3\u679c\u662f\u663e\u7136\u7684, \u6211\u4e0d\u77e5\u9053 SE \u662f\u5982\u4f55\u68b3\u7406\u9700\u6c42\u7684, \u4e5f\u4e0d\u6e05\u695a\u4ed6\u6709\u6ca1\u6709\u5706\u6ee1\u5b8c\u6210\u4efb\u52a1, \u66f4\u6ca1\u770b\u89c1\u68b3\u7406\u597d\u7684\u9700\u6c42\u5305\u6587\u6863. \u4f46\u662f, \u6211\u786e\u786e\u5b9e\u5b9e\u542c\u4ed6\u5728\u5de5\u4f4d\u54fc\u4e86\u4e24\u5468\u7684\u6b4c, \u4e0d\u8981\u94b1\u7684\u90a3\u79cd.\\r\\n\\r\\n### GTMD\\r\\n\\r\\n\u4e07\u4e8b\u4ff1\u5907, \u4e1c\u98ce\u5df2\u6765, \u90a3\u5c31\u642c\u8d77\u7816\u6765? GTMD, \u6211\u8fd8\u662f\u592a\u5e74\u8f7b\u4e86.\\r\\n\\r\\n\u8bf4\u5b9e\u8bdd, \u5df2\u7ecf\u8bb0\u4e0d\u6e05\u662f 18 \u5e74\u51e0\u6708\u4efd, \u53cd\u6b63\u5230\u4e86\u7a7f\u77ed\u8896\u7684\u5b63\u8282. \u4ea7\u54c1\u7ecf\u7406\u6254\u7ed9\u6211\u4eec\u4e2a Axure \u753b\u7684\\"\u9ad8\u4fdd\u771f\\"\u539f\u578b, SE \u638f\u51fa\u4efd\u9700\u6c42\u5305\u6587\u6863.\\r\\n\\r\\n\u7531\u4e8e Axure \u8fd9\u8f6f\u4ef6\u592a\u9ad8\u7aef, \u6211\u7b49\u50bb\u642c\u7816\u7684\u5982\u4f55\u4f1a\u7528\u8fd9\u4e48\u91d1\u8d35\u7684\u4e1c\u897f. \u518d\u8bf4\u4e86, \u5c31\u7b97\u4f1a\u7528, \u4e5f\u6ca1\u90a3\u4e48\u9ad8\u7684\u62bd\u8c61\u827a\u672f\u89e3\u6790\u529b\u5440, \u6211\u8fd8\u662f\u770b\u9700\u6c42\u5305\u6587\u6863\u5427. \u90a3\u76f4\u767d\u7684\u63cf\u8ff0, \u5e73\u94fa\u76f4\u53d9\u7684\u6587\u6863\u8109\u7edc, \u6ee1\u5c4f\u5e55, \u53ea\u6709\u4e3b\u8bed\u4e0d\u540c\u7684\u53e5\u5f0f, \u591a TMD \u6d45\u663e\u6613\u61c2. \u679c\u7136\u6280\u672f\u51fa\u8eab\u7684 SE \u66f4\u61c2\u4eba\u5fc3, \u77e5\u9053\u6211\u7b49\u7406\u89e3\u80fd\u529b\u4e0d\u884c, \u53c8\u6ca1\u5565\u62bd\u8c61\u6d3e\u7684\u827a\u672f\u7ec6\u80de, \u7ed9\u4e86\u4e2a\u8fd9\u4e48\u63a5\u5730\u6c14\u7684 Excel\ud83d\ude43\\r\\n\\r\\n![](../image/\u9700\u6c42.png)\\r\\n\\r\\n\u82b1\u4e86\u51e0\u5468, \u628a\u4e4b\u524d\u90a3\u4e9b\u63a5\u5730\u4e0b\u6c14\u7684\u4ee3\u7801\u91cd\u5199\u4e00\u90e8\u5206. \u53c8\u63a5\u7740\u5730\u6c14\u5f00\u53d1\u4e86\u4fe9\u6708. \u4ea7\u54c1\u7ecf\u7406\u5728\u8bc4\u5ba1\u4f1a\u4e0a\u8ba4\u4e3a\u6211\u6309\u7167\u9700\u6c42\u5305\u6587\u6863\u642c\u7684\u7816, \u4e0d\u7b26\u5408\u65e5\u65e5\u66f4\u65b0\u7684\\"\u9ad8\u4fdd\u771f\\"\u539f\u578b\u8bbe\u8ba1, \u9700\u8981\u91cd\u505a. \u6211\u4e00\u4e2a\u642c\u7816\u7684\u80fd\u600e\u4e48\u529e, \u80af\u5b9a\u5f97\u627e\u725b\u4eba SE \u6765\u5e2e\u5fd9\u554a.\\r\\n\\r\\n\u8ba9\u6211\u6ca1\u60f3\u5230\u7684\u662f, \u725b\u4eba\u4e5f\u6709\u725b\u4eba\u7684\u70e6\u607c. \u5f53\u5357\u5317\u4e24\u5927\u5bb6\u9f50\u805a\u4e00\u5802, \u5171\u8bae\u9700\u6c42\u65f6, \u4f1a\u4ea7\u751f\u4f55\u79cd\u7684\u5316\u5b66\u53cd\u5e94?\\r\\n\\r\\n\u5f53\u7136\u662f\u5404\u6709\u5404\u7684\u5c0a\u4e25, \u636e\u7406\u529b\u4e89. \u6ca1\u6709\u4ec0\u4e48\u662f\u4e00\u6b21\u4f1a\u8bae\u89e3\u51b3\u4e0d\u4e86\u7684, \u5982\u679c\u6709, \u90a3\u5c31\u591a\u6765\u51e0\u6b21. \u76f4\u5230\u6401\u7f6e\u4e89\u8bae, GTMD.\\r\\n\\r\\n> GTMD, \u4ee3\u6307\\"\u5171\u540c\u9762\u5bf9\\". \u51fa\u81ea\u738b\u8005\u8363\u8000, \u56db\u51a0\u738b\u6218\u961f QGHappy, \u4e2d\u5355\u9009\u624b\u4f2a\u88c5.\\r\\n\\r\\n### \u5ffd\u5ffd\u60a0\u60a0\\r\\n\\r\\n\u592a\u6781\u751f\u4e24\u4eea, \u4e24\u4eea\u751f\u56db\u8c61, \u56db\u8c61\u751f\u516b\u5366~\\r\\n\\r\\n\u4ea7\u54c1\u7ecf\u7406\u8ba4\u4e3a\u9700\u6c42\u5305\u6587\u6863\u4e0d\u5408\u7406, \u8981\u6c42\u820d\u5f03\u9700\u6c42\u5305\u6587\u6863, \u6309\u7167\u65e5\u65e5\u66f4\u65b0\u7684\\"\u9ad8\u4fdd\u771f\\"\u539f\u578b\u6765\u505a. \u4f5c\u4e3a\u4e00\u4e2a\u5728\u5176\u4ed6\u56e2\u961f\u642c\u8fc7\u7816\u7684\u9009\u624b, \u5bf9\u8fd9\u79cd\u8981\u6c42, \u6211\u80af\u5b9a\u662f\u62d2\u7edd\u7684.\\r\\n\\r\\n\u7136\u9e45, \u5bf9\u4e8e\u6211\u7684\u4e0d\u914d\u5408, \u4ea7\u54c1\u7ecf\u7406\u975e\u5e38\u4e0d\u6ee1, \u95ee\u6211: \u4e3a\u4ec0\u4e48\u522b\u4eba\u5bb6\u90fd\u80fd\u628a\u7816\u780c\u6210\u53cc\u5b50\u5854, \u800c\u6211\u4eec\u53ea\u80fd\u5b88\u7740\u5c0f\u949f\u697c? \u6211\u65e0\u8a00\u4ee5\u5bf9, \u53ea\u80fd\u7528\u4e0a\u65e0\u5e08\u81ea\u901a\u7684\u592a\u6781\u516b\u5366\u4e4b\u672f\u6765\u5e94\u5bf9. emmm, \u5c31\u662f\u548c\u7a00\u6ce5. \u7ecf\u8fc7\u51e0\u4e2a\u5c0f\u65f6\u7684\u52aa\u529b, \u5199\u4e86\u4fe9\u6708\u7684\u4ee3\u7801, \u57fa\u672c\u53ef\u4ee5\u534a\u91cd\u6784\u4e86. \u81f3\u4e8e\u53d1\u5e03\u65e5\u671f, \u62b1\u6b49, \u6211\u53f8 deadline \u4e0d\u5c31\u662f\u62ff\u6765\u5ef6\u7684\u4e48?\\r\\n\\r\\n### \u785d\u70df\u518d\u8d77\\r\\n\\r\\n\u6625\u590f\u79cb\u51ac, \u4e00\u5e74\u56db\u5b63. \u8f6c\u773c\u5c31\u5feb\u80fd\u5403\u51ac\u81f3\u7684\u997a\u5b50\u4e86.\\r\\n\\r\\n\u53bb\u5e74\u8ba1\u5212\u4eca\u5e74 5 \u6708, \u53d1\u5e03\u6211\u4eec\u7684\\"\u5355\u5b50\u5854\\". \u7531\u4e8e\u5f00\u53d1\u80fd\u529b\u4e0d\u8db3, \u65e0\u6cd5\u9002\u5e94\u65e5\u65b0\u6708\u5f02\u7684\u65b0\u9700\u6c42. \u6211\u4eec\u7684\u4ea7\u54c1, \u5df2\u7ecf\u7ef4\u6301\u4e86\u51e0\u4e2a\u6708\u7684\\"\u9a6c\u4e0a\u53d1\u5e03\\"\u9636\u6bb5.\\r\\n\\r\\n\u4e0a\u5468\u4e94\u4f8b\u4f1a, \u6240\u6709\u4e0d\u7ba1\u76f8\u5173\u4e0d\u76f8\u5173\u7684\u4eba\u5458, \u805a\u96c6\u4e00\u5802, \u770b\u7740\u7ba1\u7406\u5e73\u53f0\u90a3 37 \u4e2a later \u72b6\u6001\u7684\u516b\u963f\u54e5, \u4e3a\u4ed6\u4eec\u9009\u62e9\u5f52\u9014.\\r\\n\\r\\n\u6211\u90a3\u7684\u529f\u80fd, \u518d\u6b21\u51fa\u73b0\u4e86\u4e89\u8bae. \u4ece\u6309\u7167\u9700\u6c42\u5305\u6587\u6863\u4e0d\u884c, \u6539\u6210\u8ddf\u968f\u65e5\u65e5\u66f4\u65b0\\"\u9ad8\u4fdd\u771f\\"\u5f00\u53d1. \u7ed3\u679c\u8fd9\u6b21\u4f1a\u8bae\u4e0a, \\"\u9ad8\u4fdd\u771f\\"\u8c8c\u4f3c\u4e5f\u4e0d\u5408\u5fc3\u610f\u4e86, \u9700\u8981\u91cd\u65b0\u8ba8\u8bba\u9700\u6c42. \u6d89\u53ca\u5230\u9700\u6c42\u7684\u8ba8\u8bba, \u90a3\u80af\u5b9a\u4ea7\u54c1\u7ecf\u7406\u548c SE \u4e24\u4f4d\u5927\u4f6c\u5546\u8bae, \u800c\u5546\u8bae\u7684\u7ed3\u679c, \u5728\u5468\u4e00\u4e0a\u5348\u8349\u8349\u51fa\u573a, \u770b\u4e0d\u5230\u4e00\u4e1d\u5fc3\u8840. \u4e0d\u8981\u95ee\u6211\u548c\u524d\u9762\u90a3\u4e2a\u56fe\u6709\u4ec0\u4e48\u533a\u522b, \u6211\u4e5f\u4e0d\u77e5\u9053.\\r\\n\\r\\n![](../image/\u5546\u8bae\u7ed3\u679c.png)\\r\\n\\r\\n\u6211\u51fa\u79bb\u7684\u6124\u6012, \u5728\u5fae\u4fe1\u7fa4\u91cc\u5bf9\u4ea7\u54c1\u7ecf\u7406\u53d1\u51fa\u4e86\u8d28\u95ee. \u679c\u7136, \u4f9d\u65e7\u662f\u6401\u7f6e\u4e89\u8bae, SP \u7248\u672c\u518d\u8bf4.\\r\\n\\r\\n---\\r\\n\\r\\n\u61d2\u5f97\u591a\u8bf4\u4ec0\u4e48\u4e86, \u8fd8\u662f\u5199\u5199\u6587\u6863\u5410\u5410\u69fd, \u591a\u5199\u4ee3\u7801\u591a\u770b\u4e66, \u65e9\u7761\u65e9\u8d77\u8eab\u4f53\u597d. \u53e6\u795d\u5927\u5bb6\u65e9\u65e5\u4e0a\u738b\u8005."}]}')}}]);