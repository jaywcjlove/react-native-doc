(window.webpackJsonp=window.webpackJsonp||[]).push([[761],{1006:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return j}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),p=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,b=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=p(n),O=r,j=u["".concat(b,".").concat(O)]||u[O]||d[O]||c;return n?a.a.createElement(j,o(o({ref:t},i),{},{components:n})):a.a.createElement(j,o({ref:t},i))}));function j(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,b=new Array(c);b[0]=O;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,b[1]=o;for(var i=2;i<c;i++)b[i]=n[i];return a.a.createElement.apply(null,b)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},833:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(7),c=(n(0),n(1006)),b={id:"pickerios",title:"\ud83d\udea7 PickerIOS"},o={unversionedId:"pickerios",id:"version-0.63/pickerios",isDocsHomePage:!1,title:"\ud83d\udea7 PickerIOS",description:"Deprecated. Use @react-native-community/picker instead.",source:"@site/versioned_docs/version-0.63/pickerios.md",slug:"/pickerios",permalink:"/docs/pickerios",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.63/pickerios.md",version:"0.63",lastUpdatedAt:1603945169},l=[{value:"Props",id:"props",children:[{value:"<code>itemStyle</code>",id:"itemstyle",children:[]},{value:"<code>onValueChange</code>",id:"onvaluechange",children:[]},{value:"<code>onChange</code>",id:"onchange",children:[]},{value:"<code>selectedValue</code>",id:"selectedvalue",children:[]}]}],i={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"Deprecated.")," Use ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/react-native-community/react-native-picker"}),"@react-native-community/picker")," instead.")),Object(c.b)("hr",null),Object(c.b)("h1",{id:"reference"},"Reference"),Object(c.b)("h2",{id:"props"},"Props"),Object(c.b)("p",null,"Inherits ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/view#props"}),"View Props"),"."),Object(c.b)("h3",{id:"itemstyle"},Object(c.b)("inlineCode",{parentName:"h3"},"itemStyle")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Required"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/text-style-props"}),"text styles")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"No")))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"onvaluechange"},Object(c.b)("inlineCode",{parentName:"h3"},"onValueChange")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Required"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"function"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"No")))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"onchange"},Object(c.b)("inlineCode",{parentName:"h3"},"onChange")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Required"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"function"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"No")))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"selectedvalue"},Object(c.b)("inlineCode",{parentName:"h3"},"selectedValue")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Required"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"number or string"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"No")))))}p.isMDXComponent=!0}}]);