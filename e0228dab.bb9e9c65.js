(window.webpackJsonp=window.webpackJsonp||[]).push([[812],{1006:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return p}));var a=t(0),i=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),d=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=d(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(t),m=a,p=u["".concat(r,".").concat(m)]||u[m]||b[m]||o;return t?i.a.createElement(p,s(s({ref:n},l),{},{components:t})):i.a.createElement(p,s({ref:n},l))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var l=2;l<o;l++)r[l]=t[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1007:function(e,n,t){"use strict";function a(e){var n,t,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(i&&(i+=" "),i+=t);else for(n in e)e[n]&&(i&&(i+=" "),i+=n);return i}n.a=function(){for(var e,n,t=0,i="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(i&&(i+=" "),i+=n);return i}},1008:function(e,n,t){"use strict";var a=t(0),i=t(1009);n.a=function(){var e=Object(a.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1009:function(e,n,t){"use strict";var a=t(0),i=Object(a.createContext)(void 0);n.a=i},1010:function(e,n,t){"use strict";var a=t(0),i=t.n(a),o=t(1008),r=t(1007),s=t(55),c=t.n(s),l=37,d=39;n.a=function(e){var n=e.block,t=e.children,s=e.defaultValue,u=e.values,b=e.groupId,m=e.className,p=Object(o.a)(),h=p.tabGroupChoices,f=p.setTabGroupChoices,v=Object(a.useState)(s),w=v[0],g=v[1],O=Object(a.useState)(!1),j=O[0],A=O[1];if(null!=b){var y=h[b];null!=y&&y!==w&&u.some((function(e){return e.value===y}))&&g(y)}var D=function(e){g(e),null!=b&&f(b,e)},C=[],B=function(e){e.metaKey||e.altKey||e.ctrlKey||A(!0)},x=function(){A(!1)};return Object(a.useEffect)((function(){return window.addEventListener("keydown",B),window.addEventListener("mousedown",x),function(){window.removeEventListener("keydown",B),window.removeEventListener("mousedown",x)}}),[]),i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":n},m)},u.map((function(e){var n=e.value,t=e.label;return i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":w===n,className:Object(r.a)("tabs__item",c.a.tabItem,{"tabs__item--active":w===n}),style:j?{}:{outline:"none"},key:n,ref:function(e){return C.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case d:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case l:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(C,e.target,e),B(e)},onFocus:function(){return D(n)},onClick:function(){D(n),A(!1)},onPointerDown:function(){return A(!1)}},t)}))),i.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(t).filter((function(e){return e.props.value===w}))[0]))}},1011:function(e,n,t){"use strict";var a=t(0),i=t.n(a);n.a=function(e){return i.a.createElement("div",null,e.children)}},1012:function(e,n,t){"use strict";var a=t(6),i=!!a.a.canUseDOM&&navigator.platform.startsWith("Mac"),o=!!a.a.canUseDOM&&navigator.platform.startsWith("Win"),r=i?"ios":"android",s=i?"macos":o?"windows":"linux";n.a={defaultGuide:"quickstart",defaultOs:s,defaultPackageManager:"npm",defaultPlatform:r,defaultSyntax:"functional",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo CLI Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}]}},880:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return d})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return m}));var a=t(2),i=t(7),o=(t(0),t(1006)),r=t(1010),s=t(1011),c=t(1012),l={id:"dimensions",title:"Dimensions"},d={unversionedId:"dimensions",id:"version-0.60/dimensions",isDocsHomePage:!1,title:"Dimensions",description:"`jsx",source:"@site/versioned_docs/version-0.60/dimensions.md",slug:"/dimensions",permalink:"/docs/0.60/dimensions",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.60/dimensions.md",version:"0.60",lastUpdatedAt:1603945169,sidebar:"version-0.60/api",previous:{title:"DatePickerAndroid",permalink:"/docs/0.60/datepickerandroid"},next:{title:"Easing",permalink:"/docs/0.60/easing"}},u=[{value:"Example",id:"example",children:[]},{value:"Methods",id:"methods",children:[{value:"<code>addEventListener()</code>",id:"addeventlistener",children:[]},{value:"<code>get()</code>",id:"get",children:[]},{value:"<code>removeEventListener()</code>",id:"removeeventlistener",children:[]},{value:"<code>set()</code>",id:"set",children:[]}]}],b={rightToc:u};function m(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import { Dimensions } from 'react-native';\n")),Object(o.b)("p",null,"You can get the application window's width and height using below code:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"const windowWidth = Dimensions.get('window').width;\nconst windowHeight = Dimensions.get('window').height;\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Although dimensions are available immediately, they may change (e.g due to device rotation, foldable devices etc) so any rendering logic or styles that depend on these constants should try to call this function on every render, rather than caching the value (for example, using inline styles rather than setting a value in a ",Object(o.b)("inlineCode",{parentName:"p"},"StyleSheet"),").")),Object(o.b)("p",null,"If you are targeting foldable devices or devices which can change the screen size or app window size, you can use the event listener available in the Dimensions module as shown in the below example."),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)(r.a,{groupId:"syntax",defaultValue:c.a.defaultSyntax,values:c.a.syntax,mdxType:"Tabs"},Object(o.b)(s.a,{value:"functional",mdxType:"TabItem"},Object(o.b)("div",{className:"snack-player","data-snack-name":"Dimensions","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%2C%20useEffect%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20View%2C%20StyleSheet%2C%20Text%2C%20Dimensions%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20window%20%3D%20Dimensions.get(%22window%22)%3B%0Aconst%20screen%20%3D%20Dimensions.get(%22screen%22)%3B%0A%0Aexport%20default%20function%20App()%20%7B%0A%20%20const%20%5Bdimensions%2C%20setDimensions%5D%20%3D%20useState(%7B%20window%2C%20screen%20%7D)%3B%0A%0A%20%20const%20onChange%20%3D%20(%7B%20window%2C%20screen%20%7D)%20%3D%3E%20%7B%0A%20%20%20%20setDimensions(%7B%20window%2C%20screen%20%7D)%3B%0A%20%20%7D%3B%0A%0A%20%20useEffect(()%20%3D%3E%20%7B%0A%20%20%20%20Dimensions.addEventListener(%22change%22%2C%20onChange)%3B%0A%20%20%20%20return%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20Dimensions.removeEventListener(%22change%22%2C%20onChange)%3B%0A%20%20%20%20%7D%3B%0A%20%20%7D)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CText%3E%7B%60Window%20Dimensions%3A%20height%20-%20%24%7Bdimensions.window.height%7D%2C%20width%20-%20%24%7Bdimensions.window.width%7D%60%7D%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%3E%7B%60Screen%20Dimensions%3A%20height%20-%20%24%7Bdimensions.screen.height%7D%2C%20width%20-%20%24%7Bdimensions.screen.width%7D%60%7D%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20alignItems%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true"})),Object(o.b)(s.a,{value:"classical",mdxType:"TabItem"},Object(o.b)("div",{className:"snack-player","data-snack-name":"Dimensions","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20View%2C%20StyleSheet%2C%20Text%2C%20Dimensions%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20window%20%3D%20Dimensions.get(%22window%22)%3B%0Aconst%20screen%20%3D%20Dimensions.get(%22screen%22)%3B%0A%0Aexport%20default%20class%20App%20extends%20Component%20%7B%0A%20%20state%20%3D%20%7B%0A%20%20%20%20dimensions%3A%20%7B%0A%20%20%20%20%20%20window%2C%0A%20%20%20%20%20%20screen%0A%20%20%20%20%7D%0A%20%20%7D%3B%0A%0A%20%20onChange%20%3D%20(%7B%20window%2C%20screen%20%7D)%20%3D%3E%20%7B%0A%20%20%20%20this.setState(%7B%20dimensions%3A%20%7B%20window%2C%20screen%20%7D%20%7D)%3B%0A%20%20%7D%3B%0A%0A%20%20componentDidMount()%20%7B%0A%20%20%20%20Dimensions.addEventListener(%22change%22%2C%20this.onChange)%3B%0A%20%20%7D%0A%0A%20%20componentWillUnmount()%20%7B%0A%20%20%20%20Dimensions.removeEventListener(%22change%22%2C%20this.onChange)%3B%0A%20%20%7D%0A%0A%20%20render()%20%7B%0A%20%20%20%20const%20%7B%20dimensions%20%7D%20%3D%20this.state%3B%0A%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%3E%7B%60Window%20Dimensions%3A%20height%20-%20%24%7Bdimensions.window.height%7D%2C%20width%20-%20%24%7Bdimensions.window.width%7D%60%7D%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CText%3E%7B%60Screen%20Dimensions%3A%20height%20-%20%24%7Bdimensions.screen.height%7D%2C%20width%20-%20%24%7Bdimensions.screen.width%7D%60%7D%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20alignItems%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true"}))),Object(o.b)("h1",{id:"reference"},"Reference"),Object(o.b)("h2",{id:"methods"},"Methods"),Object(o.b)("h3",{id:"addeventlistener"},Object(o.b)("inlineCode",{parentName:"h3"},"addEventListener()")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static addEventListener(type, handler)\n")),Object(o.b)("p",null,"Add an event handler. Supported events:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"change"),": Fires when a property within the ",Object(o.b)("inlineCode",{parentName:"li"},"Dimensions")," object changes. The argument to the event handler is an object with ",Object(o.b)("inlineCode",{parentName:"li"},"window")," and ",Object(o.b)("inlineCode",{parentName:"li"},"screen")," properties whose values are the same as the return values of ",Object(o.b)("inlineCode",{parentName:"li"},"Dimensions.get('window')")," and ",Object(o.b)("inlineCode",{parentName:"li"},"Dimensions.get('screen')"),", respectively.")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"get"},Object(o.b)("inlineCode",{parentName:"h3"},"get()")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static get(dim)\n")),Object(o.b)("p",null,"Initial dimensions are set before ",Object(o.b)("inlineCode",{parentName:"p"},"runApplication")," is called so they should be available before any other require's are run, but may be updated later."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note: Although dimensions are available immediately, they may change (e.g due to device rotation) so any rendering logic or styles that depend on these constants should try to call this function on every render, rather than caching the value (for example, using inline styles rather than setting a value in a ",Object(o.b)("inlineCode",{parentName:"p"},"StyleSheet"),").")),Object(o.b)("p",null,"Example: ",Object(o.b)("inlineCode",{parentName:"p"},"var {height, width} = Dimensions.get('window');")),Object(o.b)("p",null,"@param {string} dim Name of dimension as defined when calling ",Object(o.b)("inlineCode",{parentName:"p"},"set"),". @returns {Object?} Value for the dimension."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"For Android the ",Object(o.b)("inlineCode",{parentName:"p"},"window")," dimension will exclude the size used by the ",Object(o.b)("inlineCode",{parentName:"p"},"status bar")," (if not translucent) and ",Object(o.b)("inlineCode",{parentName:"p"},"bottom navigation bar"))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"removeeventlistener"},Object(o.b)("inlineCode",{parentName:"h3"},"removeEventListener()")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static removeEventListener(type, handler)\n")),Object(o.b)("p",null,"Remove an event handler."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"set"},Object(o.b)("inlineCode",{parentName:"h3"},"set()")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static set(dims)\n")),Object(o.b)("p",null,"This should only be called from native code by sending the didUpdateDimensions event."),Object(o.b)("p",null,"@param {object} dims string-keyed object of dimensions to set"))}m.isMDXComponent=!0}}]);