(window.webpackJsonp=window.webpackJsonp||[]).push([[311],{1006:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,m=d["".concat(c,".").concat(u)]||d[u]||s[u]||o;return n?r.a.createElement(m,i(i({ref:t},b),{},{components:n})):r.a.createElement(m,i({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var b=2;b<o;b++)c[b]=n[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},395:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(7),o=(n(0),n(1006)),c={id:"clipboard",title:"\ud83d\udea7 Clipboard"},i={unversionedId:"clipboard",id:"version-0.62/clipboard",isDocsHomePage:!1,title:"\ud83d\udea7 Clipboard",description:"Deprecated. Use @react-native-community/clipboard instead.",source:"@site/versioned_docs/version-0.62/clipboard.md",slug:"/clipboard",permalink:"/docs/0.62/clipboard",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.62/clipboard.md",version:"0.62",lastUpdatedAt:1603973073},l=[{value:"Example",id:"example",children:[]},{value:"Methods",id:"methods",children:[{value:"<code>getString()</code>",id:"getstring",children:[]},{value:"<code>setString()</code>",id:"setstring",children:[]}]}],b={rightToc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Deprecated.")," Use ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/react-native-clipboard/clipboard"}),"@react-native-community/clipboard")," instead.")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Clipboard")," gives you an interface for setting and getting content from Clipboard on both Android and iOS"),Object(o.b)("hr",null),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Clipboard API Example","data-snack-description":"Example usage","data-snack-code":"%0Aimport%20React%2C%20%7B%20useState%20%7D%20from%20'react'%0Aimport%20%7B%20SafeAreaView%2C%20View%2C%20Text%2C%20TouchableOpacity%2C%20Clipboard%2C%20StyleSheet%20%7D%20from%20'react-native'%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5BcopiedText%2C%20setCopiedText%5D%20%3D%20useState('')%0A%0A%20%20const%20copyToClipboard%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20Clipboard.setString('hello%20world')%0A%20%20%7D%0A%0A%20%20const%20fetchCopiedText%20%3D%20async%20()%20%3D%3E%20%7B%0A%20%20%20%20const%20text%20%3D%20await%20Clipboard.getString()%0A%20%20%20%20setCopiedText(text)%0A%20%20%7D%0A%0A%20%20return%20(%0A%20%20%20%20%3CSafeAreaView%20style%3D%7B%7B%20flex%3A%201%20%7D%7D%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CTouchableOpacity%20onPress%3D%7B()%20%3D%3E%20copyToClipboard()%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%3EClick%20here%20to%20copy%20to%20Clipboard%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FTouchableOpacity%3E%0A%20%20%20%20%20%20%20%20%3CTouchableOpacity%20onPress%3D%7B()%20%3D%3E%20fetchCopiedText()%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%3EView%20copied%20text%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FTouchableOpacity%3E%0A%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.copiedText%7D%3E%7BcopiedText%7D%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%0A%20%20%20%20%3C%2FSafeAreaView%3E%0A%20%20)%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%20%20alignItems%3A%20'center'%0A%20%20%7D%2C%0A%20%20copiedText%3A%20%7B%0A%20%20%20%20marginTop%3A%2010%2C%0A%20%20%20%20color%3A%20'red'%0A%20%20%7D%0A%7D)%0A%0Aexport%20default%20App","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true"}),Object(o.b)("h1",{id:"reference"},"Reference"),Object(o.b)("h2",{id:"methods"},"Methods"),Object(o.b)("h3",{id:"getstring"},Object(o.b)("inlineCode",{parentName:"h3"},"getString()")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static getString()\n")),Object(o.b)("p",null,"Get content of string type, this method returns a ",Object(o.b)("inlineCode",{parentName:"p"},"Promise"),", so you can use following code to get clipboard content"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"async _getContent() {\n  var content = await Clipboard.getString();\n}\n")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"setstring"},Object(o.b)("inlineCode",{parentName:"h3"},"setString()")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static setString(content)\n")),Object(o.b)("p",null,"Set content of string type. You can use following code to set clipboard content"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"_setContent() {\n  Clipboard.setString('hello world');\n}\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Parameters:")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"content"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The content to be stored in the clipboard")))),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Notice")),Object(o.b)("p",null,"Be careful when you're trying to copy to clipboard any data except ",Object(o.b)("inlineCode",{parentName:"p"},"string")," and ",Object(o.b)("inlineCode",{parentName:"p"},"number"),", some data need additional stringification. For example, if you will try to copy array - Android will raise an exception, but iOS will not."))}p.isMDXComponent=!0}}]);