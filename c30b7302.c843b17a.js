(window.webpackJsonp=window.webpackJsonp||[]).push([[701],{1006:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),b=a,m=d["".concat(i,".").concat(b)]||d[b]||p[b]||r;return n?o.a.createElement(m,c(c({ref:t},l),{},{components:n})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},1007:function(e,t,n){"use strict";function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}},1008:function(e,t,n){"use strict";var a=n(0),o=n(1009);t.a=function(){var e=Object(a.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1009:function(e,t,n){"use strict";var a=n(0),o=Object(a.createContext)(void 0);t.a=o},1010:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(1008),i=n(1007),c=n(55),s=n.n(c),l=37,u=39;t.a=function(e){var t=e.block,n=e.children,c=e.defaultValue,d=e.values,p=e.groupId,b=e.className,m=Object(r.a)(),f=m.tabGroupChoices,v=m.setTabGroupChoices,h=Object(a.useState)(c),y=h[0],w=h[1],g=Object(a.useState)(!1),O=g[0],j=g[1];if(null!=p){var k=f[p];null!=k&&k!==y&&d.some((function(e){return e.value===k}))&&w(k)}var A=function(e){w(e),null!=p&&v(p,e)},x=[],C=function(e){e.metaKey||e.altKey||e.ctrlKey||j(!0)},T=function(){j(!1)};return Object(a.useEffect)((function(){return window.addEventListener("keydown",C),window.addEventListener("mousedown",T),function(){window.removeEventListener("keydown",C),window.removeEventListener("mousedown",T)}}),[]),o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t},b)},d.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===t,className:Object(i.a)("tabs__item",s.a.tabItem,{"tabs__item--active":y===t}),style:O?{}:{outline:"none"},key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e),C(e)},onFocus:function(){return A(t)},onClick:function(){A(t),j(!1)},onPointerDown:function(){return j(!1)}},n)}))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===y}))[0]))}},1011:function(e,t,n){"use strict";var a=n(0),o=n.n(a);t.a=function(e){return o.a.createElement("div",null,e.children)}},1012:function(e,t,n){"use strict";var a=n(6),o=!!a.a.canUseDOM&&navigator.platform.startsWith("Mac"),r=!!a.a.canUseDOM&&navigator.platform.startsWith("Win"),i=o?"ios":"android",c=o?"macos":r?"windows":"linux";t.a={defaultGuide:"quickstart",defaultOs:c,defaultPackageManager:"npm",defaultPlatform:i,defaultSyntax:"functional",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo CLI Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}]}},778:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return b}));var a=n(2),o=n(7),r=(n(0),n(1006)),i=n(1010),c=n(1011),s=n(1012),l={id:"getting-started",title:"Introduction",description:"This helpful guide lays out the prerequisites for learning React Native, using these docs, and setting up your environment."},u={unversionedId:"getting-started",id:"version-0.62/getting-started",isDocsHomePage:!1,title:"Introduction",description:"This helpful guide lays out the prerequisites for learning React Native, using these docs, and setting up your environment.",source:"@site/versioned_docs/version-0.62/introduction.md",slug:"/getting-started",permalink:"/docs/0.62/getting-started",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.62/introduction.md",version:"0.62",lastUpdatedAt:1603945169,sidebar:"version-0.62/docs",next:{title:"Core Components and Native Components",permalink:"/docs/0.62/intro-react-native-components"}},d=[{value:"How to use these docs",id:"how-to-use-these-docs",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Interactive examples",id:"interactive-examples",children:[]},{value:"Function Components and Class Components",id:"function-components-and-class-components",children:[]},{value:"Developer Notes",id:"developer-notes",children:[]},{value:"Formatting",id:"formatting",children:[]}],p={rightToc:d};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{class:"content-banner"},Object(r.b)("p",null,"Welcome to the very start of your React Native journey! If you're looking for environment setup instructions, they've moved to ",Object(r.b)("a",{href:"environment-setup"},"their own section"),". Continue reading for an introduction to the documentation, Native Components, React, and more!"),Object(r.b)("img",{class:"content-banner-img",src:"/docs/assets/p_android-ios-devices.svg",alt:" "})),Object(r.b)("p",null,"Many different kinds of people use React Native: from advanced iOS developers to React beginners, to people getting started programming for the first time in their career. These docs were written for all learners, no matter their experience level or background."),Object(r.b)("h2",{id:"how-to-use-these-docs"},"How to use these docs"),Object(r.b)("p",null,"You can start here and read through these docs linearly like a book; or you can read the specific sections you need. Already familiar with React? You can skip ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"intro-react"}),"that section"),"\u2014or read it for a light refresher."),Object(r.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(r.b)("p",null,"To work with React Native, you will need to have an understanding of JavaScript fundamentals. If you\u2019re new to JavaScript or need a refresher, you can ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript"}),"dive in")," or ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript"}),"brush up")," at Mozilla Developer Network."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"While we do our best to assume no prior knowledge of React, Android, or iOS development, these are valuable topics of study for the aspiring React Native developer. Where sensible, we have linked to resources and articles that go more in depth.")),Object(r.b)("h2",{id:"interactive-examples"},"Interactive examples"),Object(r.b)("p",null,"This introduction lets you get started immediately in your browser with interactive examples like this one:"),Object(r.b)("div",{className:"snack-player","data-snack-name":"Hello World","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Text%2C%20View%20%7D%20from%20'react-native'%3B%0A%0Aexport%20default%20function%20YourApp()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7B%7B%20flex%3A%201%2C%20justifyContent%3A%20%22center%22%2C%20alignItems%3A%20%22center%22%20%7D%7D%3E%0A%20%20%20%20%20%20%3CText%3E%0A%20%20%20%20%20%20%20%20Try%20editing%20me!%20%F0%9F%8E%89%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true"}),Object(r.b)("p",null,'The above is a Snack Player. It\u2019s a handy tool created by Expo to embed and run React Native projects and share how they render in platforms like Android and iOS. The code is live and editable, so you can play directly with it in your browser. Go ahead and try changing the "Try editing me!" text above to "Hello, world!"'),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Optionally, if you want to setup a local development environment, ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"environment-setup"}),"you can follow our guide to setting up your environment on your local machine")," and paste the code examples into your ",Object(r.b)("inlineCode",{parentName:"p"},"App.js")," file there. (If you are a web developer, you may already have a local environment set up for mobile browser testing!)")),Object(r.b)("h2",{id:"function-components-and-class-components"},"Function Components and Class Components"),Object(r.b)("p",null,"With React, you can make components using either classes or functions. Originally, class components were the only components that could have state. But since the introduction of React's Hooks API, you can add state and more to function components."),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/blog/2019/03/12/releasing-react-native-059"}),"Hooks were introduced in React Native 0.58."),", and because Hooks are the future-facing way to write your React components, we wrote this introduction using function component examples. Where useful, we also cover class components under a toggle like so:"),Object(r.b)(i.a,{groupId:"syntax",defaultValue:s.a.defaultSyntax,values:s.a.syntax,mdxType:"Tabs"},Object(r.b)(c.a,{value:"functional",mdxType:"TabItem"},Object(r.b)("div",{className:"snack-player","data-snack-name":"Hello World Function Component","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Text%2C%20View%20%7D%20from%20'react-native'%3B%0A%0Aexport%20default%20function%20HelloWorldApp()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20flex%3A%201%2C%0A%20%20%20%20%20%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%20%20%20%20%20%20alignItems%3A%20'center'%0A%20%20%20%20%20%20%7D%7D%3E%0A%20%20%20%20%20%20%3CText%3EHello%2C%20world!%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true"})),Object(r.b)(c.a,{value:"classical",mdxType:"TabItem"},Object(r.b)("div",{className:"snack-player","data-snack-name":"Hello World Class Component","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20'react'%3B%0Aimport%20%7B%20Text%2C%20View%20%7D%20from%20'react-native'%3B%0A%0Aexport%20default%20class%20HelloWorldApp%20extends%20Component%20%7B%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20flex%3A%201%2C%0A%20%20%20%20%20%20%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20%20%20%20%20%20%20alignItems%3A%20%22center%22%0A%20%20%20%20%20%20%20%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%3EHello%2C%20world!%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true"}))),Object(r.b)("p",null,"You can find more examples of class components in ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/versions"}),"previous versions of this documentation"),"."),Object(r.b)("h2",{id:"developer-notes"},"Developer Notes"),Object(r.b)("p",null,"People from many different development backgrounds are learning React Native. You may have experience with a range of technologies, from web to Android to iOS and more. We try to write for developers from all backgrounds. Sometimes we provide explanations specific to one platform or another like so:"),Object(r.b)(i.a,{groupId:"guide",defaultValue:"web",values:s.a.getDevNotesTabs(["android","ios","web"]),mdxType:"Tabs"},Object(r.b)(c.a,{value:"web",mdxType:"TabItem"},Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Web developers may be familiar with this concept."))),Object(r.b)(c.a,{value:"android",mdxType:"TabItem"},Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Android developers may be familiar with this concept."))),Object(r.b)(c.a,{value:"ios",mdxType:"TabItem"},Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"iOS developers may be familiar with this concept.")))),Object(r.b)("h2",{id:"formatting"},"Formatting"),Object(r.b)("p",null,"Menu paths are written in bold and use carets to navigate submenus. Example: ",Object(r.b)("strong",{parentName:"p"},"Android Studio > Preferences")),Object(r.b)("hr",null),Object(r.b)("p",null,"Now that you know how this guide works, it's time to get to know the foundation of React Native: ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/0.62/intro-react-native-components"}),"Native Components"),"."))}b.isMDXComponent=!0}}]);