(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{1006:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return p}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},A={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),b=a,p=d["".concat(l,".").concat(b)]||d[b]||A[b]||o;return n?r.a.createElement(p,s(s({ref:t},c),{},{components:n})):r.a.createElement(p,s({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=b;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},1007:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},1008:function(e,t,n){"use strict";var a=n(0),r=n(1009);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1009:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},1010:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(1008),l=n(1007),s=n(55),i=n.n(s),c=37,u=39;t.a=function(e){var t=e.block,n=e.children,s=e.defaultValue,d=e.values,A=e.groupId,b=e.className,p=Object(o.a)(),f=p.tabGroupChoices,m=p.setTabGroupChoices,v=Object(a.useState)(s),y=v[0],O=v[1],h=Object(a.useState)(!1),C=h[0],g=h[1];if(null!=A){var D=f[A];null!=D&&D!==y&&d.some((function(e){return e.value===D}))&&O(D)}var w=function(e){O(e),null!=A&&m(A,e)},B=[],j=function(e){e.metaKey||e.altKey||e.ctrlKey||g(!0)},x=function(){g(!1)};return Object(a.useEffect)((function(){return window.addEventListener("keydown",j),window.addEventListener("mousedown",x),function(){window.removeEventListener("keydown",j),window.removeEventListener("mousedown",x)}}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":t},b)},d.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===t,className:Object(l.a)("tabs__item",i.a.tabItem,{"tabs__item--active":y===t}),style:C?{}:{outline:"none"},key:t,ref:function(e){return B.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case c:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(B,e.target,e),j(e)},onFocus:function(){return w(t)},onClick:function(){w(t),g(!1)},onPointerDown:function(){return g(!1)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===y}))[0]))}},1011:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}},1012:function(e,t,n){"use strict";var a=n(6),r=!!a.a.canUseDOM&&navigator.platform.startsWith("Mac"),o=!!a.a.canUseDOM&&navigator.platform.startsWith("Win"),l=r?"ios":"android",s=r?"macos":o?"windows":"linux";t.a={defaultGuide:"quickstart",defaultOs:s,defaultPackageManager:"npm",defaultPlatform:l,defaultSyntax:"functional",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo CLI Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}]}},247:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(7),o=(n(0),n(1006)),l=n(1010),s=n(1011),i=n(1012),c={id:"alert",title:"Alert"},u={unversionedId:"alert",id:"version-0.62/alert",isDocsHomePage:!1,title:"Alert",description:"Launches an alert dialog with the specified title and message.",source:"@site/versioned_docs/version-0.62/alert.md",slug:"/alert",permalink:"/docs/0.62/alert",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.62/alert.md",version:"0.62",lastUpdatedAt:1603945169,sidebar:"version-0.62/api",previous:{title:"AccessibilityInfo",permalink:"/docs/0.62/accessibilityinfo"},next:{title:"Animated",permalink:"/docs/0.62/animated"}},d=[{value:"Example",id:"example",children:[]},{value:"iOS",id:"ios",children:[]},{value:"Android",id:"android",children:[]},{value:"Methods",id:"methods",children:[{value:"<code>alert()</code>",id:"alert",children:[]}]}],A={rightToc:d};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},A,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Launches an alert dialog with the specified title and message."),Object(o.b)("p",null,"Optionally provide a list of buttons. Tapping any button will fire the respective onPress callback and dismiss the alert. By default, the only button will be an 'OK' button."),Object(o.b)("p",null,"This is an API that works both on Android and iOS and can show static alerts. To show an alert that prompts the user to enter some information, see ",Object(o.b)("inlineCode",{parentName:"p"},"AlertIOS"),"; entering text in an alert is common on iOS only."),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)(l.a,{groupId:"syntax",defaultValue:i.a.defaultSyntax,values:i.a.syntax,mdxType:"Tabs"},Object(o.b)(s.a,{value:"functional",mdxType:"TabItem"},Object(o.b)("div",{className:"snack-player","data-snack-name":"Alert Function Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20View%2C%20StyleSheet%2C%20Button%2C%20Alert%20%7D%20from%20%22react-native%22%3B%0A%0Aexport%20default%20function%20App()%20%7B%0A%20%20const%20createTwoButtonAlert%20%3D%20()%20%3D%3E%0A%20%20%20%20Alert.alert(%0A%20%20%20%20%20%20%22Alert%20Title%22%2C%0A%20%20%20%20%20%20%22My%20Alert%20Msg%22%2C%0A%20%20%20%20%20%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20text%3A%20%22Cancel%22%2C%0A%20%20%20%20%20%20%20%20%20%20onPress%3A%20()%20%3D%3E%20console.log(%22Cancel%20Pressed%22)%2C%0A%20%20%20%20%20%20%20%20%20%20style%3A%20%22cancel%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%20text%3A%20%22OK%22%2C%20onPress%3A%20()%20%3D%3E%20console.log(%22OK%20Pressed%22)%20%7D%0A%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%7B%20cancelable%3A%20false%20%7D%0A%20%20%20%20)%3B%0A%0A%20%20const%20createThreeButtonAlert%20%3D%20()%20%3D%3E%0A%20%20%20%20Alert.alert(%0A%20%20%20%20%20%20%22Alert%20Title%22%2C%0A%20%20%20%20%20%20%22My%20Alert%20Msg%22%2C%0A%20%20%20%20%20%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20text%3A%20%22Ask%20me%20later%22%2C%0A%20%20%20%20%20%20%20%20%20%20onPress%3A%20()%20%3D%3E%20console.log(%22Ask%20me%20later%20pressed%22)%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20text%3A%20%22Cancel%22%2C%0A%20%20%20%20%20%20%20%20%20%20onPress%3A%20()%20%3D%3E%20console.log(%22Cancel%20Pressed%22)%2C%0A%20%20%20%20%20%20%20%20%20%20style%3A%20%22cancel%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%20text%3A%20%22OK%22%2C%20onPress%3A%20()%20%3D%3E%20console.log(%22OK%20Pressed%22)%20%7D%0A%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%7B%20cancelable%3A%20false%20%7D%0A%20%20%20%20)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CButton%20title%3D%7B%222-Button%20Alert%22%7D%20onPress%3D%7BcreateTwoButtonAlert%7D%20%2F%3E%0A%0A%20%20%20%20%20%20%3CButton%20title%3D%7B%223-Button%20Alert%22%7D%20onPress%3D%7BcreateThreeButtonAlert%7D%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22space-around%22%2C%0A%20%20%20%20alignItems%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true"})),Object(o.b)(s.a,{value:"classical",mdxType:"TabItem"},Object(o.b)("div",{className:"snack-player","data-snack-name":"Alert Class Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20View%2C%20StyleSheet%2C%20Button%2C%20Alert%20%7D%20from%20%22react-native%22%3B%0A%0Aexport%20default%20class%20App%20extends%20Component%20%7B%0A%20%20createTwoButtonAlert%20%3D%20()%20%3D%3E%0A%20%20%20%20Alert.alert(%0A%20%20%20%20%20%20%22Alert%20Title%22%2C%0A%20%20%20%20%20%20%22My%20Alert%20Msg%22%2C%0A%20%20%20%20%20%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20text%3A%20%22Cancel%22%2C%0A%20%20%20%20%20%20%20%20%20%20onPress%3A%20()%20%3D%3E%20console.log(%22Cancel%20Pressed%22)%2C%0A%20%20%20%20%20%20%20%20%20%20style%3A%20%22cancel%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%20text%3A%20%22OK%22%2C%20onPress%3A%20()%20%3D%3E%20console.log(%22OK%20Pressed%22)%20%7D%0A%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%7B%20cancelable%3A%20false%20%7D%0A%20%20%20%20)%3B%0A%0A%20%20createThreeButtonAlert%20%3D%20()%20%3D%3E%0A%20%20%20%20Alert.alert(%0A%20%20%20%20%20%20%22Alert%20Title%22%2C%0A%20%20%20%20%20%20%22My%20Alert%20Msg%22%2C%0A%20%20%20%20%20%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20text%3A%20%22Ask%20me%20later%22%2C%0A%20%20%20%20%20%20%20%20%20%20onPress%3A%20()%20%3D%3E%20console.log(%22Ask%20me%20later%20pressed%22)%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20text%3A%20%22Cancel%22%2C%0A%20%20%20%20%20%20%20%20%20%20onPress%3A%20()%20%3D%3E%20console.log(%22Cancel%20Pressed%22)%2C%0A%20%20%20%20%20%20%20%20%20%20style%3A%20%22cancel%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%20text%3A%20%22OK%22%2C%20onPress%3A%20()%20%3D%3E%20console.log(%22OK%20Pressed%22)%20%7D%0A%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%7B%20cancelable%3A%20false%20%7D%0A%20%20%20%20)%3B%0A%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CButton%20title%3D%7B%222-Button%20Alert%22%7D%20onPress%3D%7Bthis.createTwoButtonAlert%7D%20%2F%3E%0A%0A%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20title%3D%7B%223-Button%20Alert%22%7D%0A%20%20%20%20%20%20%20%20%20%20onPress%3D%7Bthis.createThreeButtonAlert%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22space-around%22%2C%0A%20%20%20%20alignItems%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true"}))),Object(o.b)("h2",{id:"ios"},"iOS"),Object(o.b)("p",null,"On iOS you can specify any number of buttons. Each button can optionally specify a style, which is one of 'default', 'cancel', or 'destructive'."),Object(o.b)("h2",{id:"android"},"Android"),Object(o.b)("p",null,"On Android at most three buttons can be specified. Android has a concept of a neutral, negative and a positive button:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"If you specify one button, it will be the 'positive' one (such as 'OK')"),Object(o.b)("li",{parentName:"ul"},"Two buttons mean 'negative', 'positive' (such as 'Cancel', 'OK')"),Object(o.b)("li",{parentName:"ul"},"Three buttons mean 'neutral', 'negative', 'positive' (such as 'Later', 'Cancel', 'OK')")),Object(o.b)("p",null,"By default alerts on Android can be dismissed by tapping outside of the alert box. This event can be handled by providing an optional ",Object(o.b)("inlineCode",{parentName:"p"},"options")," parameter, with an ",Object(o.b)("inlineCode",{parentName:"p"},"onDismiss")," callback property ",Object(o.b)("inlineCode",{parentName:"p"},"{ onDismiss: () => {} }"),"."),Object(o.b)("p",null,"Alternatively, the dismissing behavior can be disabled altogether by providing an optional options parameter with the cancelable property set to false i.e. ",Object(o.b)("inlineCode",{parentName:"p"},"{ cancelable: false }"),"."),Object(o.b)("p",null,"Example usage:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"// Works on both Android and iOS\nAlert.alert(\n  'Alert Title',\n  'My Alert Msg',\n  [\n    {\n      text: 'Ask me later',\n      onPress: () => console.log('Ask me later pressed')\n    },\n    {\n      text: 'Cancel',\n      onPress: () => console.log('Cancel Pressed'),\n      style: 'cancel'\n    },\n    { text: 'OK', onPress: () => console.log('OK Pressed') }\n  ],\n  { cancelable: false }\n);\n")),Object(o.b)("hr",null),Object(o.b)("h1",{id:"reference"},"Reference"),Object(o.b)("h2",{id:"methods"},"Methods"),Object(o.b)("h3",{id:"alert"},Object(o.b)("inlineCode",{parentName:"h3"},"alert()")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static alert(title, message?, buttons?, options?)\n")))}b.isMDXComponent=!0}}]);