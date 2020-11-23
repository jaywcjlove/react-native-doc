(window.webpackJsonp=window.webpackJsonp||[]).push([[334],{1006:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),b=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(n),m=a,u=p["".concat(i,".").concat(m)]||p[m]||d[m]||r;return n?o.a.createElement(u,c(c({ref:t},s),{},{components:n})):o.a.createElement(u,c({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},417:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(2),o=n(7),r=(n(0),n(1006)),i={id:"intro-react-native-components",title:"Core Components and Native Components",description:"React Native lets you compose app interfaces using Native Components. Conveniently, it comes with a set of these components for you to get started with right now\u2014the Core Components!"},c={unversionedId:"intro-react-native-components",id:"version-0.60/intro-react-native-components",isDocsHomePage:!1,title:"Core Components and Native Components",description:"React Native lets you compose app interfaces using Native Components. Conveniently, it comes with a set of these components for you to get started with right now\u2014the Core Components!",source:"@site/versioned_docs/version-0.60/intro-react-native-components.md",slug:"/intro-react-native-components",permalink:"/docs/0.60/intro-react-native-components",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.60/intro-react-native-components.md",version:"0.60",lastUpdatedAt:1603945169},l=[{value:"Views and mobile development",id:"views-and-mobile-development",children:[]},{value:"Native Components",id:"native-components",children:[]},{value:"Core Components",id:"core-components",children:[]}],s={rightToc:l};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"React Native is an open source framework for building Android and iOS applications using ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactjs.org/"}),"React")," and the app platform\u2019s native capabilities. With React Native, you use JavaScript to access your platform\u2019s APIs as well as to describe the appearance and behavior of your UI using React components: bundles of reusable, nestable code. You can learn more about React in the next section. But first, let\u2019s cover how components work in React Native."),Object(r.b)("h2",{id:"views-and-mobile-development"},"Views and mobile development"),Object(r.b)("p",null,"In Android and iOS development, a ",Object(r.b)("strong",{parentName:"p"},"view")," is the basic building block of UI: a small rectangular element on the screen which can be used to display text, images, or respond to user input. Even the smallest visual elements of an app, like a line of text or a button, are kinds of views. Some kinds of views can contain other views. It\u2019s views all the way down!"),Object(r.b)("figure",null,Object(r.b)("img",{src:"/docs/assets/diagram_ios-android-views.svg",width:"1000",alt:"Diagram of Android and iOS app showing them both built on top of atomic elements called views."}),Object(r.b)("figcaption",null,"Just a sampling of the many views used in Android and iOS apps.")),Object(r.b)("h2",{id:"native-components"},"Native Components"),Object(r.b)("p",null,"In Android development, you write views in Kotlin or Java; in iOS development, you use Swift or Objective-C. With React Native, you can invoke these views with JavaScript using React components. At runtime, React Native creates the corresponding Android and iOS views for those components. Because React Native components are backed by the same views as Android and iOS, React Native apps look, feel, and perform like any other apps. We call these platform-backed components ",Object(r.b)("strong",{parentName:"p"},"Native Components.")),Object(r.b)("p",null,"React Native lets you to build your own Native Components for ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/0.60/native-components-android"}),"Android")," and ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/0.60/native-components-ios"}),"iOS")," to suit your app\u2019s unique needs. We also have a thriving ecosystem of these ",Object(r.b)("strong",{parentName:"p"},"community-contributed components.")," Check out ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.native.directory/"}),"Native Directory")," to find what the community has been creating."),Object(r.b)("p",null,"React Native also includes a set of essential, ready-to-use Native Components you can use to start building your app today. These are React Native's ",Object(r.b)("strong",{parentName:"p"},"Core Components"),"."),Object(r.b)("h2",{id:"core-components"},"Core Components"),Object(r.b)("p",null,"React Native has many Core Components for everything from form controls to activity indicators. You can find them all ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"components-and-apis"}),"documented in the API section"),". You will mostly work with the following Core Components:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"React Native UI Component"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Android View"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"iOS View"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Web Analog"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"<View>")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"<ViewGroup>")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"<UIView>")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"A non-scrollling ",Object(r.b)("inlineCode",{parentName:"td"},"<div>")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"A container that supports layout with flexbox, style, some touch handling, and accessibility controls")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"<Text>")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"<TextView>")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"<UITextView>")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"<p>")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Displays, styles, and nests strings of text and even handles touch events")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"<Image>")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"<ImageView>")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"<UIImageView>")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"<img>")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Displays different types of images")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"<ScrollView>")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"<ScrollView>")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"<UIScrollView>")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"<div>")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"A generic scrolling container that can contain multiple components and views")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"<TextInput>")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"<EditText>")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"<UITextField>")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},'<input type="text">')),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Allows the user to enter text")))),Object(r.b)("p",null,"In the next section, you will start combining these Core Components to learn about how React works. Have a play with them here now!"),Object(r.b)("div",{className:"snack-player","data-snack-name":"Hello World","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20View%2C%20Text%2C%20Image%2C%20ScrollView%2C%20TextInput%20%7D%20from%20'react-native'%3B%0A%0Aexport%20default%20function%20App()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CScrollView%3E%0A%20%20%20%20%20%20%3CText%3ESome%20text%3C%2FText%3E%0A%20%20%20%20%20%20%3CView%3E%0A%20%20%20%20%20%20%20%20%3CText%3ESome%20more%20text%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CImage%0A%20%20%20%20%20%20%20%20%20%20source%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20uri%3A%20'https%3A%2F%2Freactnative.dev%2Fdocs%2Fassets%2Fp_cat2.png'%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%20width%3A%20200%2C%20height%3A%20200%20%7D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CTextInput%0A%20%20%20%20%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20height%3A%2040%2C%0A%20%20%20%20%20%20%20%20%20%20borderColor%3A%20'gray'%2C%0A%20%20%20%20%20%20%20%20%20%20borderWidth%3A%201%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20defaultValue%3D%22You%20can%20type%20in%20me%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FScrollView%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true"}),Object(r.b)("hr",null),Object(r.b)("p",null,"Because React Native uses the same API structure as React components, you\u2019ll need to understand React component APIs to get started. The ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"intro-react"}),"next section")," makes for a quick introduction or refresher on the topic. However, if you\u2019re already familiar with React, feel free to ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"handling-text-input"}),"skip ahead"),"."),Object(r.b)("img",{src:"/docs/assets/diagram_react-native-components.svg",width:"1000",alt:"A diagram showing React Native's Core Components are a subset of React Components that ship with React Native."}))}b.isMDXComponent=!0}}]);