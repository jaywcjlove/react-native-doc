(window.webpackJsonp=window.webpackJsonp||[]).push([[192],{1006:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return s}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),d=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=d(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=d(r),u=n,s=b["".concat(o,".").concat(u)]||b[u]||m[u]||i;return r?a.a.createElement(s,c(c({ref:t},p),{},{components:r})):a.a.createElement(s,c({ref:t},p))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var p=2;p<i;p++)o[p]=r[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},280:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return d}));var n=r(2),a=r(7),i=(r(0),r(1006)),o={id:"imageeditor",title:"\ud83d\udea7 ImageEditor"},c={unversionedId:"imageeditor",id:"imageeditor",isDocsHomePage:!1,title:"\ud83d\udea7 ImageEditor",description:"Deprecated. Use @react-native-community/image-editor instead.",source:"@site/../docs/imageeditor.md",slug:"/imageeditor",permalink:"/docs/next/imageeditor",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/imageeditor.md",version:"current",lastUpdatedAt:1603945169},l=[{value:"Methods",id:"methods",children:[{value:"<code>cropImage()</code>",id:"cropimage",children:[]},{value:"cropData",id:"cropdata",children:[]}]}],p={rightToc:l};function d(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Deprecated.")," Use ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/react-native-community/react-native-image-editor"}),"@react-native-community/image-editor")," instead.")),Object(i.b)("hr",null),Object(i.b)("h1",{id:"reference"},"Reference"),Object(i.b)("h2",{id:"methods"},"Methods"),Object(i.b)("h3",{id:"cropimage"},Object(i.b)("inlineCode",{parentName:"h3"},"cropImage()")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static cropImage(uri, cropData, success, failure)\n")),Object(i.b)("p",null,"Crop the image specified by the URI param. If URI points to a remote image, it will be downloaded automatically. If the image cannot be loaded/downloaded, the ",Object(i.b)("inlineCode",{parentName:"p"},"failure")," callback will be called."),Object(i.b)("p",null,"If the cropping process is successful, the resultant cropped image will be stored in the ImageStore, and the URI returned in the ",Object(i.b)("inlineCode",{parentName:"p"},"success")," callback will point to the image in the store. Remember to delete the cropped image from the ImageStore when you are done with it."),Object(i.b)("h3",{id:"cropdata"},"cropData"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"offset")," - The top-left corner of the cropped image, specified in the original image's coordinate space"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"size")," - Size (dimensions) of the cropped image"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"displaySize (optional)")," - Size to which you want to scale the cropped image"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"resizeMode (optional)")," - Resizing mode to use when scaling the image")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"cropData = {\n  offset: { x: number, y: number },\n  size: { width: number, height: number },\n  displaySize: { width: number, height: number },\n  resizeMode: 'contain/cover/stretch'\n};\n")))}d.isMDXComponent=!0}}]);