(window.webpackJsonp=window.webpackJsonp||[]).push([[639],{1006:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,f=u["".concat(o,".").concat(d)]||u[d]||b[d]||i;return n?a.a.createElement(f,s(s({ref:t},l),{},{components:n})):a.a.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},718:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(7),i=(n(0),n(1006)),o={title:"idx: The Existential Function",author:"Timothy Yung",authorTitle:"Engineering Manager at Facebook",authorURL:"https://github.com/yungsters",authorImageURL:"https://pbs.twimg.com/profile_images/1592444107/image.jpg",authorTwitter:"yungsters",tags:["engineering"]},s={permalink:"/blog/2017/03/13/idx-the-existential-function",source:"@site/blog/2017-03-13-idx-the-existential-function.md",description:"At Facebook, we often need to access deeply nested values in data structures fetched with GraphQL. On the way to accessing these deeply nested values, it is common for one or more intermediate fields to be nullable. These intermediate fields may be null for a variety of reasons, from failed privacy checks to the mere fact that null happens to be the most flexible way to represent non-fatal errors.",date:"2017-03-13T00:00:00.000Z",tags:[{label:"engineering",permalink:"/blog/tags/engineering"}],title:"idx: The Existential Function",readingTime:1.89,truncated:!1,prevItem:{title:"Better List Views in React Native",permalink:"/blog/2017/03/13/better-list-views"},nextItem:{title:"Introducing Create React Native App",permalink:"/blog/2017/03/13/introducing-create-react-native-app"}},c=[],l={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"At Facebook, we often need to access deeply nested values in data structures fetched with GraphQL. On the way to accessing these deeply nested values, it is common for one or more intermediate fields to be nullable. These intermediate fields may be null for a variety of reasons, from failed privacy checks to the mere fact that null happens to be the most flexible way to represent non-fatal errors."),Object(i.b)("p",null,"Unfortunately, accessing these deeply nested values is currently tedious and verbose."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"props.user &&\n  props.user.friends &&\n  props.user.friends[0] &&\n  props.user.friends[0].friends;\n")),Object(i.b)("p",null,"There is ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/claudepache/es-optional-chaining"}),"an ECMAScript proposal to introduce the existential operator")," which will make this much more convenient. But until a time when that proposal is finalized, we want a solution that improves our quality of life, maintains existing language semantics, and encourages type safety with Flow."),Object(i.b)("p",null,"We came up with an existential ",Object(i.b)("em",{parentName:"p"},"function")," we call ",Object(i.b)("inlineCode",{parentName:"p"},"idx"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"idx(props, (_) => _.user.friends[0].friends);\n")),Object(i.b)("p",null,"The invocation in this code snippet behaves similarly to the boolean expression in the code snippet above, except with significantly less repetition. The ",Object(i.b)("inlineCode",{parentName:"p"},"idx")," function takes exactly two arguments:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Any value, typically an object or array into which you want to access a nested value."),Object(i.b)("li",{parentName:"ul"},"A function that receives the first argument and accesses a nested value on it.")),Object(i.b)("p",null,"In theory, the ",Object(i.b)("inlineCode",{parentName:"p"},"idx")," function will try-catch errors that are the result of accessing properties on null or undefined. If such an error is caught, it will return either null or undefined. (And you can see how this might be implemented in ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebookincubator/idx/blob/master/packages/idx/src/idx.js"}),"idx.js"),".)"),Object(i.b)("p",null,"In practice, try-catching every nested property access is slow, and differentiating between specific kinds of TypeErrors is fragile. To deal with these shortcomings, we created a Babel plugin that transforms the above ",Object(i.b)("inlineCode",{parentName:"p"},"idx")," invocation into the following expression:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"props.user == null\n  ? props.user\n  : props.user.friends == null\n  ? props.user.friends\n  : props.user.friends[0] == null\n  ? props.user.friends[0]\n  : props.user.friends[0].friends;\n")),Object(i.b)("p",null,"Finally, we added a custom Flow type declaration for ",Object(i.b)("inlineCode",{parentName:"p"},"idx")," that allows the traversal in the second argument to be properly type-checked while permitting nested access on nullable properties."),Object(i.b)("p",null,"The function, Babel plugin, and Flow declaration are now ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebookincubator/idx"}),"available on GitHub"),". They are used by installing the ",Object(i.b)("strong",{parentName:"p"},"idx")," and ",Object(i.b)("strong",{parentName:"p"},"babel-plugin-idx")," npm packages, and adding \u201cidx\u201d to the list of plugins in your ",Object(i.b)("inlineCode",{parentName:"p"},".babelrc")," file."))}p.isMDXComponent=!0}}]);