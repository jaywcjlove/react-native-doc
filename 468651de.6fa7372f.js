(window.webpackJsonp=window.webpackJsonp||[]).push([[278],{1006:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(a),p=n,m=d["".concat(o,".").concat(p)]||d[p]||b[p]||i;return a?r.a.createElement(m,l(l({ref:t},s),{},{components:a})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},1007:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},1008:function(e,t,a){"use strict";var n=a(0),r=a(1009);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1009:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},1010:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(1008),o=a(1007),l=a(55),c=a.n(l),s=37,u=39;t.a=function(e){var t=e.block,a=e.children,l=e.defaultValue,d=e.values,b=e.groupId,p=e.className,m=Object(i.a)(),f=m.tabGroupChoices,h=m.setTabGroupChoices,O=Object(n.useState)(l),v=O[0],j=O[1],A=Object(n.useState)(!1),y=A[0],w=A[1];if(null!=b){var g=f[b];null!=g&&g!==v&&d.some((function(e){return e.value===g}))&&j(g)}var D=function(e){j(e),null!=b&&h(b,e)},C=[],x=function(e){e.metaKey||e.altKey||e.ctrlKey||w(!0)},B=function(){w(!1)};return Object(n.useEffect)((function(){return window.addEventListener("keydown",x),window.addEventListener("mousedown",B),function(){window.removeEventListener("keydown",x),window.removeEventListener("mousedown",B)}}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t},p)},d.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===t,className:Object(o.a)("tabs__item",c.a.tabItem,{"tabs__item--active":v===t}),style:y?{}:{outline:"none"},key:t,ref:function(e){return C.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case u:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(C,e.target,e),x(e)},onFocus:function(){return D(t)},onClick:function(){D(t),w(!1)},onPointerDown:function(){return w(!1)}},a)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter((function(e){return e.props.value===v}))[0]))}},1011:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("div",null,e.children)}},1012:function(e,t,a){"use strict";var n=a(6),r=!!n.a.canUseDOM&&navigator.platform.startsWith("Mac"),i=!!n.a.canUseDOM&&navigator.platform.startsWith("Win"),o=r?"ios":"android",l=r?"macos":i?"windows":"linux";t.a={defaultGuide:"quickstart",defaultOs:l,defaultPackageManager:"npm",defaultPlatform:o,defaultSyntax:"functional",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo CLI Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}]}},363:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return u})),a.d(t,"rightToc",(function(){return d})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(7),i=(a(0),a(1006)),o=a(1010),l=a(1011),c=a(1012),s={id:"share",title:"Share"},u={unversionedId:"share",id:"share",isDocsHomePage:!1,title:"Share",description:"Example",source:"@site/../docs/share.md",slug:"/share",permalink:"/docs/next/share",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/share.md",version:"current",lastUpdatedAt:1603945169,sidebar:"api",previous:{title:"PlatformColor",permalink:"/docs/next/platformcolor"},next:{title:"StyleSheet",permalink:"/docs/next/stylesheet"}},d=[{value:"Example",id:"example",children:[]},{value:"Methods",id:"methods",children:[{value:"<code>share()</code>",id:"share",children:[]},{value:"Content",id:"content",children:[]},{value:"Options",id:"options",children:[]},{value:"<code>sharedAction</code>",id:"sharedaction",children:[]},{value:"<code>dismissedAction</code>",id:"dismissedaction",children:[]}]}],b={rightToc:d};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)(o.a,{groupId:"syntax",defaultValue:c.a.defaultSyntax,values:c.a.syntax,mdxType:"Tabs"},Object(i.b)(l.a,{value:"functional",mdxType:"TabItem"},Object(i.b)("div",{className:"snack-player","data-snack-name":"Function Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Share%2C%20View%2C%20Button%20%7D%20from%20'react-native'%3B%0A%0Aconst%20ShareExample%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20onShare%20%3D%20async%20()%20%3D%3E%20%7B%0A%20%20%20%20try%20%7B%0A%20%20%20%20%20%20const%20result%20%3D%20await%20Share.share(%7B%0A%20%20%20%20%20%20%20%20message%3A%0A%20%20%20%20%20%20%20%20%20%20'React%20Native%20%7C%20A%20framework%20for%20building%20native%20apps%20using%20React'%2C%0A%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20if%20(result.action%20%3D%3D%3D%20Share.sharedAction)%20%7B%0A%20%20%20%20%20%20%20%20if%20(result.activityType)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%2F%2F%20shared%20with%20activity%20type%20of%20result.activityType%0A%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%2F%2F%20shared%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%20else%20if%20(result.action%20%3D%3D%3D%20Share.dismissedAction)%20%7B%0A%20%20%20%20%20%20%20%20%2F%2F%20dismissed%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%20catch%20(error)%20%7B%0A%20%20%20%20%20%20alert(error.message)%3B%0A%20%20%20%20%7D%0A%20%20%7D%3B%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7B%7B%20marginTop%3A%2050%20%7D%7D%3E%0A%20%20%20%20%20%20%3CButton%20onPress%3D%7BonShare%7D%20title%3D%22Share%22%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aexport%20default%20ShareExample%3B","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true"})),Object(i.b)(l.a,{value:"classical",mdxType:"TabItem"},Object(i.b)("div",{className:"snack-player","data-snack-name":"Class Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20'react'%3B%0Aimport%20%7B%20Share%2C%20View%2C%20Button%20%7D%20from%20'react-native'%3B%0A%0Aclass%20ShareExample%20extends%20Component%20%7B%0A%20%20onShare%20%3D%20async%20()%20%3D%3E%20%7B%0A%20%20%20%20try%20%7B%0A%20%20%20%20%20%20const%20result%20%3D%20await%20Share.share(%7B%0A%20%20%20%20%20%20%20%20message%3A%0A%20%20%20%20%20%20%20%20%20%20'React%20Native%20%7C%20A%20framework%20for%20building%20native%20apps%20using%20React'%2C%0A%20%20%20%20%20%20%7D)%3B%0A%0A%20%20%20%20%20%20if%20(result.action%20%3D%3D%3D%20Share.sharedAction)%20%7B%0A%20%20%20%20%20%20%20%20if%20(result.activityType)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%2F%2F%20shared%20with%20activity%20type%20of%20result.activityType%0A%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%2F%2F%20shared%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%20else%20if%20(result.action%20%3D%3D%3D%20Share.dismissedAction)%20%7B%0A%20%20%20%20%20%20%20%20%2F%2F%20dismissed%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%20catch%20(error)%20%7B%0A%20%20%20%20%20%20alert(error.message)%3B%0A%20%20%20%20%7D%0A%20%20%7D%3B%0A%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7B%7B%20marginTop%3A%2050%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%3CButton%20onPress%3D%7Bthis.onShare%7D%20title%3D%22Share%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0Aexport%20default%20ShareExample%3B","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true"}))),Object(i.b)("h1",{id:"reference"},"Reference"),Object(i.b)("h2",{id:"methods"},"Methods"),Object(i.b)("h3",{id:"share"},Object(i.b)("inlineCode",{parentName:"h3"},"share()")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static share(content, options)\n")),Object(i.b)("p",null,"Open a dialog to share text content."),Object(i.b)("p",null,"In iOS, returns a Promise which will be invoked with an object containing ",Object(i.b)("inlineCode",{parentName:"p"},"action")," and ",Object(i.b)("inlineCode",{parentName:"p"},"activityType"),". If the user dismissed the dialog, the Promise will still be resolved with action being ",Object(i.b)("inlineCode",{parentName:"p"},"Share.dismissedAction")," and all the other keys being undefined. Note that some share options will not appear or work on the iOS simulator."),Object(i.b)("p",null,"In Android, returns a Promise which will always be resolved with action being ",Object(i.b)("inlineCode",{parentName:"p"},"Share.sharedAction"),"."),Object(i.b)("h3",{id:"content"},"Content"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"message")," - a message to share")),Object(i.b)("h4",{id:"ios"},"iOS"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"url")," - a URL to share")),Object(i.b)("p",null,"At least one of URL and message is required."),Object(i.b)("h4",{id:"android"},"Android"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"title")," - title of the message")),Object(i.b)("h3",{id:"options"},"Options"),Object(i.b)("h4",{id:"ios-1"},"iOS"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"subject")," - a subject to share via email"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"excludedActivityTypes")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"tintColor"))),Object(i.b)("h4",{id:"android-1"},"Android"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"dialogTitle"))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"sharedaction"},Object(i.b)("inlineCode",{parentName:"h3"},"sharedAction")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static sharedAction\n")),Object(i.b)("p",null,"The content was successfully shared."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"dismissedaction"},Object(i.b)("inlineCode",{parentName:"h3"},"dismissedAction")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static dismissedAction\n")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"iOS Only"),". The dialog has been dismissed."))}p.isMDXComponent=!0}}]);