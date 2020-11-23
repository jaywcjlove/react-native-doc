(window.webpackJsonp=window.webpackJsonp||[]).push([[440],{1006:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),b=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=b(n),d=r,m=p["".concat(o,".").concat(d)]||p[d]||u[d]||i;return n?a.a.createElement(m,s(s({ref:t},c),{},{components:n})):a.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1063:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/HermesApp-ae778d80caa321ba00b558b025dc9805.jpg"},1064:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/HermesDebugChromeConfig-31cb28d5b642a616aa547edd3095253b.png"},1065:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/HermesDebugChromeMetroAddress-d21dc83b9eee0545a154301e1ce0be8b.png"},1066:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/HermesDebugChromeInspect-8aa08afba4c7ce76a85d47d31200dd55.png"},1067:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/HermesDebugChromePause-5bac724c8b705ba3e7dc9676dedd6c4f.png"},523:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(7),i=(n(0),n(1006)),o={id:"hermes",title:"Using Hermes"},s={unversionedId:"hermes",id:"version-0.61/hermes",isDocsHomePage:!1,title:"Using Hermes",description:"Hermes is an open-source JavaScript engine optimized for running React Native apps on Android. For many apps, enabling Hermes will result in improved start-up time, decreased memory usage, and smaller app size. At this time Hermes is an opt-in React Native feature, and this guide explains how to enable it.",source:"@site/versioned_docs/version-0.61/hermes.md",slug:"/hermes",permalink:"/docs/0.61/hermes",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.61/hermes.md",version:"0.61",lastUpdatedAt:1603945169,sidebar:"version-0.61/docs",previous:{title:"Removing Default Permissions",permalink:"/docs/0.61/removing-default-permissions"}},l=[{value:"Confirming Hermes is in use",id:"confirming-hermes-is-in-use",children:[]},{value:"Debugging Hermes using Google Chrome&#39;s DevTools",id:"debugging-hermes-using-google-chromes-devtools",children:[]}],c={rightToc:l};function b(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("a",{href:"https://hermesengine.dev"},Object(i.b)("img",{width:"300",height:"300",style:{float:"right",margin:"-30px 4px 0"},src:"/docs/assets/HermesLogo.svg"})),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://hermesengine.dev"}),"Hermes")," is an open-source JavaScript engine optimized for running React Native apps on Android. For many apps, enabling Hermes will result in improved start-up time, decreased memory usage, and smaller app size. At this time Hermes is an ",Object(i.b)("strong",{parentName:"p"},"opt-in")," React Native feature, and this guide explains how to enable it."),Object(i.b)("p",null,"First, ensure you're using at least version 0.60.4 of React Native."),Object(i.b)("p",null,"If you have an existing app based on an earlier version of React Native, you will have to upgrade it first. See ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/upgrading"}),"Upgrading to new React Native Versions")," for how to do this. Make especially sure that all changes to ",Object(i.b)("inlineCode",{parentName:"p"},"android/app/build.gradle")," have been applied, as detailed by the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://react-native-community.github.io/upgrade-helper/?from=0.59.0"}),"React Native upgrade helper"),". After upgrading the app, make sure everything works before trying to switch to Hermes."),Object(i.b)("blockquote",null,Object(i.b)("h2",Object(r.a)({parentName:"blockquote"},{id:"note-for-windows-users"}),"Note for Windows users."),Object(i.b)("p",{parentName:"blockquote"},"Hermes requires ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.microsoft.com/en-us/download/details.aspx?id=48145"}),"Microsoft Visual C++ 2015 Redistributable"))),Object(i.b)("p",null,"Edit your ",Object(i.b)("inlineCode",{parentName:"p"},"android/app/build.gradle")," file and make the change illustrated below:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-diff"}),'  project.ext.react = [\n      entryFile: "index.js",\n-     enableHermes: false  // clean and rebuild if changing\n+     enableHermes: true  // clean and rebuild if changing\n  ]\n')),Object(i.b)("p",null,"Also, if you're using ProGuard, you will need to add this rule in ",Object(i.b)("inlineCode",{parentName:"p"},"proguard-rules.pro")," :"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"-keep class com.facebook.hermes.unicode.** { *; }\n")),Object(i.b)("p",null,"Next, if you've already built your app at least once, clean the build:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shellell"}),"$ cd android && ./gradlew clean\n")),Object(i.b)("p",null,"That's it! You should now be able to develop and deploy your app as normal:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shellell"}),"$ react-native run-android\n")),Object(i.b)("h2",{id:"confirming-hermes-is-in-use"},"Confirming Hermes is in use"),Object(i.b)("p",null,"If you've recently created a new app from scratch you should see if Hermes is enabled in the welcome view:"),Object(i.b)("p",null,Object(i.b)("img",{alt:"Where to find JS engine status in AwesomeProject",src:n(1063).default})),Object(i.b)("p",null,"A ",Object(i.b)("inlineCode",{parentName:"p"},"HermesInternal")," global variable will be available in JavaScript that can be used to verify that Hermes is in use:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"const isHermes = () => global.HermesInternal != null;\n")),Object(i.b)("p",null,"To see the benefits of Hermes, try making a release build/deployment of your app to compare. For example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shellell"}),"$ react-native run-android --variant release\n")),Object(i.b)("p",null,"This will compile JavaScript to bytecode during build time which will improve your app's startup speed on device."),Object(i.b)("h2",{id:"debugging-hermes-using-google-chromes-devtools"},"Debugging Hermes using Google Chrome's DevTools"),Object(i.b)("p",null,"Hermes supports the Chrome debugger by implementing the Chrome inspector protocol. This means Chrome's tools can be used to directly debug JavaScript running on Hermes, on an emulator or device."),Object(i.b)("p",null,"Chrome connects to Hermes running on device via Metro, so you'll need to know where Metro is listening. Typically this will be on ",Object(i.b)("inlineCode",{parentName:"p"},"localhost:8081"),", but this is ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://facebook.github.io/metro/docs/en/configuration"}),"configurable"),". When running ",Object(i.b)("inlineCode",{parentName:"p"},"yarn start")," the address is written to stdout on startup."),Object(i.b)("p",null,"Once you know where the Metro server is listening, you can connect with Chrome using the following steps:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Navigate to ",Object(i.b)("inlineCode",{parentName:"p"},"chrome://inspect")," in a Chrome browser instance.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Use the ",Object(i.b)("inlineCode",{parentName:"p"},"Configure...")," button to add the Metro server address (typically ",Object(i.b)("inlineCode",{parentName:"p"},"localhost:8081")," as described above)."))),Object(i.b)("p",null,Object(i.b)("img",{alt:"Configure button in Chrome DevTools devices page",src:n(1064).default})),Object(i.b)("p",null,Object(i.b)("img",{alt:"Dialog for adding Chrome DevTools network targets",src:n(1065).default})),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},'You should now see a "Hermes React Native" target with an "inspect" link which can be used to bring up debugger. If you don\'t see the "inspect" link, make sure the Metro server is running. ',Object(i.b)("img",{alt:"Target inspect link",src:n(1066).default}))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"You can now use the Chrome debug tools. For example, to breakpoint the next time some JavaScript is run, click on the pause button and trigger an action in your app which would cause JavaScript to execute. ",Object(i.b)("img",{alt:"Pause button in debug tools",src:n(1067).default})))))}b.isMDXComponent=!0}}]);