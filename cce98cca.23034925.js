(window.webpackJsonp=window.webpackJsonp||[]).push([[741],{1006:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var i=n(0),o=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),b=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(n),d=i,h=p["".concat(r,".").concat(d)]||p[d]||u[d]||a;return n?o.a.createElement(h,c(c({ref:t},l),{},{components:n})):o.a.createElement(h,c({ref:t},l))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var l=2;l<a;l++)r[l]=n[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},816:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var i=n(2),o=n(7),a=(n(0),n(1006)),r={id:"actionsheetios",title:"ActionSheetIOS"},c={unversionedId:"actionsheetios",id:"version-0.63/actionsheetios",isDocsHomePage:!1,title:"ActionSheetIOS",description:"Displays native to iOS Action Sheet component.",source:"@site/versioned_docs/version-0.63/actionsheetios.md",slug:"/actionsheetios",permalink:"/docs/actionsheetios",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.63/actionsheetios.md",version:"0.63",lastUpdatedAt:1603945169,sidebar:"version-0.63/api",previous:{title:"ToastAndroid",permalink:"/docs/toastandroid"},next:{title:"DynamicColorIOS",permalink:"/docs/dynamiccolorios"}},s=[{value:"Example",id:"example",children:[]},{value:"Methods",id:"methods",children:[{value:"<code>showActionSheetWithOptions()</code>",id:"showactionsheetwithoptions",children:[]},{value:"<code>showShareActionSheetWithOptions()</code>",id:"showshareactionsheetwithoptions",children:[]}]}],l={rightToc:s};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Displays native to iOS ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://developer.apple.com/design/human-interface-guidelines/ios/views/action-sheets/"}),"Action Sheet")," component."),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("div",{className:"snack-player","data-snack-name":"ActionSheetIOS","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20ActionSheetIOS%2C%20Button%2C%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5Bresult%2C%20setResult%5D%20%3D%20useState(%22%F0%9F%94%AE%22)%3B%0A%0A%20%20const%20onPress%20%3D%20()%20%3D%3E%0A%20%20%20%20ActionSheetIOS.showActionSheetWithOptions(%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20options%3A%20%5B%22Cancel%22%2C%20%22Generate%20number%22%2C%20%22Reset%22%5D%2C%0A%20%20%20%20%20%20%20%20destructiveButtonIndex%3A%202%2C%0A%20%20%20%20%20%20%20%20cancelButtonIndex%3A%200%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20buttonIndex%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20if%20(buttonIndex%20%3D%3D%3D%200)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%2F%2F%20cancel%20action%0A%20%20%20%20%20%20%20%20%7D%20else%20if%20(buttonIndex%20%3D%3D%3D%201)%20%7B%0A%20%20%20%20%20%20%20%20%20%20setResult(Math.floor(Math.random()%20*%20100)%20%2B%201)%3B%0A%20%20%20%20%20%20%20%20%7D%20else%20if%20(buttonIndex%20%3D%3D%3D%202)%20%7B%0A%20%20%20%20%20%20%20%20%20%20setResult(%22%F0%9F%94%AE%22)%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.result%7D%3E%7Bresult%7D%3C%2FText%3E%0A%20%20%20%20%20%20%3CButton%20onPress%3D%7BonPress%7D%20title%3D%22Show%20Action%20Sheet%22%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20result%3A%20%7B%0A%20%20%20%20fontSize%3A%2064%2C%0A%20%20%20%20textAlign%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-platform":"web","data-snack-supported-platforms":"ios","data-snack-theme":"light","data-snack-preview":"true"}),Object(a.b)("h1",{id:"reference"},"Reference"),Object(a.b)("h2",{id:"methods"},"Methods"),Object(a.b)("h3",{id:"showactionsheetwithoptions"},Object(a.b)("inlineCode",{parentName:"h3"},"showActionSheetWithOptions()")),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-jsx"}),"static showActionSheetWithOptions(options, callback)\n")),Object(a.b)("p",null,"Display an iOS action sheet. The ",Object(a.b)("inlineCode",{parentName:"p"},"options")," object must contain one or more of:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"options")," (array of strings) - a list of button titles (required)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"cancelButtonIndex")," (int) - index of cancel button in ",Object(a.b)("inlineCode",{parentName:"li"},"options")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"destructiveButtonIndex")," (int) - index of destructive button in ",Object(a.b)("inlineCode",{parentName:"li"},"options")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"title")," (string) - a title to show above the action sheet"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"message")," (string) - a message to show below the title"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"anchor")," (number) - the node to which the action sheet should be anchored (used for iPad)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"tintColor")," (string) - the ",Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"colors"}),"color")," used for non-destructive button titles")),Object(a.b)("p",null,"The 'callback' function takes one parameter, the zero-based index of the selected item."),Object(a.b)("p",null,"Minimal example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-jsx"}),"ActionSheetIOS.showActionSheetWithOptions(\n  {\n    options: ['Cancel', 'Remove'],\n    destructiveButtonIndex: 1,\n    cancelButtonIndex: 0\n  },\n  (buttonIndex) => {\n    if (buttonIndex === 1) {\n      /* destructive action */\n    }\n  }\n);\n")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"showshareactionsheetwithoptions"},Object(a.b)("inlineCode",{parentName:"h3"},"showShareActionSheetWithOptions()")),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-jsx"}),"static showShareActionSheetWithOptions(options, failureCallback, successCallback)\n")),Object(a.b)("p",null,"Display the iOS share sheet. The ",Object(a.b)("inlineCode",{parentName:"p"},"options")," object should contain one or both of ",Object(a.b)("inlineCode",{parentName:"p"},"message")," and ",Object(a.b)("inlineCode",{parentName:"p"},"url")," and can additionally have a ",Object(a.b)("inlineCode",{parentName:"p"},"subject")," or ",Object(a.b)("inlineCode",{parentName:"p"},"excludedActivityTypes"),":"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"url")," (string) - a URL to share"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"message")," (string) - a message to share"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"subject")," (string) - a subject for the message"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"excludedActivityTypes")," (array) - the activities to exclude from the ActionSheet")),Object(a.b)("p",null,"NOTE: if ",Object(a.b)("inlineCode",{parentName:"p"},"url")," points to a local file, or is a base64-encoded uri, the file it points to will be loaded and shared directly. In this way, you can share images, videos, PDF files, etc."),Object(a.b)("p",null,"The 'failureCallback' function takes one parameter, an error object. The only property defined on this object is an optional ",Object(a.b)("inlineCode",{parentName:"p"},"stack")," property of type ",Object(a.b)("inlineCode",{parentName:"p"},"string"),"."),Object(a.b)("p",null,"The 'successCallback' function takes two parameters:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"a boolean value signifying success or failure"),Object(a.b)("li",{parentName:"ul"},"a string that, in the case of success, indicates the method of sharing")))}b.isMDXComponent=!0}}]);