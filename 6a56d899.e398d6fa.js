(window.webpackJsonp=window.webpackJsonp||[]).push([[403],{1006:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),d=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=d(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(n),p=a,f=u["".concat(i,".").concat(p)]||u[p]||b[p]||o;return n?r.a.createElement(f,c(c({ref:t},s),{},{components:n})):r.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1007:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},1008:function(e,t,n){"use strict";var a=n(0),r=n(1009);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1009:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},1010:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(1008),i=n(1007),c=n(55),l=n.n(c),s=37,d=39;t.a=function(e){var t=e.block,n=e.children,c=e.defaultValue,u=e.values,b=e.groupId,p=e.className,f=Object(o.a)(),m=f.tabGroupChoices,v=f.setTabGroupChoices,A=Object(a.useState)(c),h=A[0],y=A[1],g=Object(a.useState)(!1),O=g[0],j=g[1];if(null!=b){var C=m[b];null!=C&&C!==h&&u.some((function(e){return e.value===C}))&&y(C)}var E=function(e){y(e),null!=b&&v(b,e)},w=[],D=function(e){e.metaKey||e.altKey||e.ctrlKey||j(!0)},k=function(){j(!1)};return Object(a.useEffect)((function(){return window.addEventListener("keydown",D),window.addEventListener("mousedown",k),function(){window.removeEventListener("keydown",D),window.removeEventListener("mousedown",k)}}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t},p)},u.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===t,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":h===t}),style:O?{}:{outline:"none"},key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case d:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e),D(e)},onFocus:function(){return E(t)},onClick:function(){E(t),j(!1)},onPointerDown:function(){return j(!1)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===h}))[0]))}},1011:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}},1012:function(e,t,n){"use strict";var a=n(6),r=!!a.a.canUseDOM&&navigator.platform.startsWith("Mac"),o=!!a.a.canUseDOM&&navigator.platform.startsWith("Win"),i=r?"ios":"android",c=r?"macos":o?"windows":"linux";t.a={defaultGuide:"quickstart",defaultOs:c,defaultPackageManager:"npm",defaultPlatform:i,defaultSyntax:"functional",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo CLI Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}]}},487:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return d})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(7),o=(n(0),n(1006)),i=n(1010),c=n(1011),l=n(1012),s={id:"systrace",title:"Systrace"},d={unversionedId:"systrace",id:"version-0.63/systrace",isDocsHomePage:!1,title:"Systrace",description:"Systrace is a standard Android marker-based profiling tool (and is installed when you install the Android platform-tools package). Profiled code blocks are surrounded by start/end markers which are then visualized in a colorful chart format. Both the Android SDK and React Native framework provide standard markers that you can visualize.",source:"@site/versioned_docs/version-0.63/systrace.md",slug:"/systrace",permalink:"/docs/systrace",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.63/systrace.md",version:"0.63",lastUpdatedAt:1603945169,sidebar:"version-0.63/api",previous:{title:"StyleSheet",permalink:"/docs/stylesheet"},next:{title:"Transforms",permalink:"/docs/transforms"}},u=[{value:"Example",id:"example",children:[]},{value:"Methods",id:"methods",children:[{value:"<code>installReactHook()</code>",id:"installreacthook",children:[]},{value:"<code>setEnabled()</code>",id:"setenabled",children:[]},{value:"<code>isEnabled()</code>",id:"isenabled",children:[]},{value:"<code>beginEvent()</code>",id:"beginevent",children:[]},{value:"<code>endEvent()</code>",id:"endevent",children:[]},{value:"<code>beginAsyncEvent()</code>",id:"beginasyncevent",children:[]},{value:"<code>endAsyncEvent()</code>",id:"endasyncevent",children:[]},{value:"<code>counterEvent()</code>",id:"counterevent",children:[]}]}],b={rightToc:u};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Systrace")," is a standard Android marker-based profiling tool (and is installed when you install the Android platform-tools package). Profiled code blocks are surrounded by start/end markers which are then visualized in a colorful chart format. Both the Android SDK and React Native framework provide standard markers that you can visualize."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Systrace")," allows you to mark JavaScript (JS) events with a tag and an integer value. Capture the non-Timed JS events in EasyProfiler."),Object(o.b)(i.a,{groupId:"syntax",defaultValue:l.a.defaultSyntax,values:l.a.syntax,mdxType:"Tabs"},Object(o.b)(c.a,{value:"functional",mdxType:"TabItem"},Object(o.b)("div",{className:"snack-player","data-snack-name":"Systrace Function Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20Button%2C%20Text%2C%20View%2C%20StyleSheet%2C%20Systrace%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%20%7B%0A%0A%20%20const%20enableProfiling%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20Systrace.setEnabled(true)%3B%20%2F%2F%20Call%20setEnabled%20to%20turn%20on%20the%20profiling.%0A%20%20%20%20Systrace.beginEvent('event_label')%0A%20%20%20%20Systrace.counterEvent('event_label'%2C%2010)%3B%0A%20%20%7D%0A%0A%20%20const%20stopProfiling%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20Systrace.endEvent()%0A%20%20%7D%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7B%5Bstyles.header%2C%20styles.paragraph%5D%7D%3EReact%20Native%20Systrace%20API%3C%2FText%3E%0A%20%20%20%20%20%20%3CButton%20title%3D%22Capture%20the%20non-Timed%20JS%20events%20in%20EasyProfiler%22%20onPress%3D%7B()%3D%3E%20enableProfiling()%7D%2F%3E%0A%20%20%20%20%20%20%3CButton%20title%3D%22Stop%20capturing%22%20onPress%3D%7B()%3D%3E%20stopProfiling()%7D%20color%3D%22%23FF0000%22%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20backgroundColor%3A%20'%23fff'%2C%0A%20%20%20%20alignItems%3A%20'center'%2C%0A%20%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%20%20paddingTop%3A%2044%2C%0A%20%20%20%20padding%3A%208%0A%20%20%7D%2C%0A%20%20%20header%3A%20%7B%0A%20%20%20%20fontSize%3A%2018%2C%0A%20%20%20%20fontWeight%3A%20%22bold%22%2C%0A%20%20%20%20textAlign%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20paragraph%3A%20%7B%0A%20%20%20%20margin%3A%2024%2C%0A%20%20%20%20textAlign%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true"})),Object(o.b)(c.a,{value:"classical",mdxType:"TabItem"},Object(o.b)("div",{className:"snack-player","data-snack-name":"Systrace Class Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20Button%2C%20Text%2C%20View%2C%20StyleSheet%2C%20Systrace%20%7D%20from%20%22react-native%22%3B%0A%0Aclass%20App%20extends%20Component%20%7B%0A%0A%20%20enableProfiling%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20Systrace.setEnabled(true)%3B%20%2F%2F%20Call%20setEnabled%20to%20turn%20on%20the%20profiling.%0A%20%20%20%20Systrace.beginEvent('event_label')%0A%20%20%20%20Systrace.counterEvent('event_label'%2C%2010)%3B%0A%20%20%7D%0A%0A%20%20stopProfiling%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20Systrace.endEvent()%0A%20%20%7D%0A%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7B%5Bstyles.header%2C%20styles.paragraph%5D%7D%3EReact%20Native%20Systrace%20API%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CButton%20title%3D%22Capture%20the%20non-Timed%20JS%20events%20in%20EasyProfiler%22%20onPress%3D%7B()%3D%3E%20this.enableProfiling()%7D%2F%3E%0A%20%20%20%20%20%20%20%20%3CButton%20title%3D%22Stop%20capturing%22%20onPress%3D%7B()%3D%3E%20this.stopProfiling()%7D%20color%3D%22%23FF0000%22%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20backgroundColor%3A%20'%23fff'%2C%0A%20%20%20%20alignItems%3A%20'center'%2C%0A%20%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%20%20paddingTop%3A%2044%2C%0A%20%20%20%20padding%3A%208%0A%20%20%7D%2C%0A%20%20%20header%3A%20%7B%0A%20%20%20%20fontSize%3A%2018%2C%0A%20%20%20%20fontWeight%3A%20%22bold%22%2C%0A%20%20%20%20textAlign%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20paragraph%3A%20%7B%0A%20%20%20%20margin%3A%2024%2C%0A%20%20%20%20textAlign%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true"}))),Object(o.b)("hr",null),Object(o.b)("h1",{id:"reference"},"Reference"),Object(o.b)("h2",{id:"methods"},"Methods"),Object(o.b)("h3",{id:"installreacthook"},Object(o.b)("inlineCode",{parentName:"h3"},"installReactHook()")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static installReactHook(useFiber)\n")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"setenabled"},Object(o.b)("inlineCode",{parentName:"h3"},"setEnabled()")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static setEnabled(enabled)\n")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"isenabled"},Object(o.b)("inlineCode",{parentName:"h3"},"isEnabled()")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static isEnabled()\n")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"beginevent"},Object(o.b)("inlineCode",{parentName:"h3"},"beginEvent()")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static beginEvent(profileName?, args?)\n")),Object(o.b)("p",null,"beginEvent/endEvent for starting and then ending a profile within the same call stack frame."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"endevent"},Object(o.b)("inlineCode",{parentName:"h3"},"endEvent()")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static endEvent()\n")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"beginasyncevent"},Object(o.b)("inlineCode",{parentName:"h3"},"beginAsyncEvent()")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static beginAsyncEvent(profileName?)\n")),Object(o.b)("p",null,"beginAsyncEvent/endAsyncEvent for starting and then ending a profile where the end can either occur on another thread or out of the current stack frame, eg await the returned cookie variable should be used as input into the endAsyncEvent call to end the profile."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"endasyncevent"},Object(o.b)("inlineCode",{parentName:"h3"},"endAsyncEvent()")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static endAsyncEvent(profileName?, cookie?)\n")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"counterevent"},Object(o.b)("inlineCode",{parentName:"h3"},"counterEvent()")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static counterEvent(profileName?, value?)\n")),Object(o.b)("p",null,"Register the value to the profileName on the systrace timeline."))}p.isMDXComponent=!0}}]);