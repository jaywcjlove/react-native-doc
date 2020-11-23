(window.webpackJsonp=window.webpackJsonp||[]).push([[586],{1006:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,d=u["".concat(i,".").concat(m)]||u[m]||b[m]||o;return n?r.a.createElement(d,c(c({ref:t},s),{},{components:n})):r.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},666:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(7),o=(n(0),n(1006)),i={id:"symbolication",title:"Symbolicating a stack trace"},c={unversionedId:"symbolication",id:"version-0.61/symbolication",isDocsHomePage:!1,title:"Symbolicating a stack trace",description:"If a React Native app throws an unhandled exception in a release build, the output may be obfuscated and hard to read:",source:"@site/versioned_docs/version-0.61/symbolication.md",slug:"/symbolication",permalink:"/docs/0.61/symbolication",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.61/symbolication.md",version:"0.61",lastUpdatedAt:1603945169},l=[{value:"Notes on Sourcemaps",id:"notes-on-sourcemaps",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"If a React Native app throws an unhandled exception in a release build, the output may be obfuscated and hard to read:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"07-15 10:58:25.820 18979 18998 E AndroidRuntime: FATAL EXCEPTION: mqt_native_modules\n07-15 10:58:25.820 18979 18998 E AndroidRuntime: Process: com.awesomeproject, PID: 18979 07-15 10:58:25.820 18979 18998 E AndroidRuntime: com.facebook.react.common.JavascriptException: Failed, js engine: hermes, stack:\n07-15 10:58:25.820 18979 18998 E AndroidRuntime: p@1:132161\n07-15 10:58:25.820 18979 18998 E AndroidRuntime: p@1:132084\n07-15 10:58:25.820 18979 18998 E AndroidRuntime: f@1:131854\n07-15 10:58:25.820 18979 18998 E AndroidRuntime: anonymous@1:131119\n")),Object(o.b)("p",null,"The sections like ",Object(o.b)("inlineCode",{parentName:"p"},"p@1:132161")," are minified function names and bytecode offsets. To debug the problem, you would instead want to translate it into file, line and function name: ",Object(o.b)("inlineCode",{parentName:"p"},"AwesomeProject/App.js:54:initializeMap"),". This is known as ",Object(o.b)("strong",{parentName:"p"},"symbolication.")," You can symbolicate minified function names and bytecode like the above by passing ",Object(o.b)("inlineCode",{parentName:"p"},"metro-symbolicate")," a generated source map and the stack trace."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"The ",Object(o.b)("inlineCode",{parentName:"p"},"metro-symbolicate")," package is installed by default in the React Native template project from ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/environment-setup"}),"setting up your development environment"),".")),Object(o.b)("p",null,"From a file containing the stacktrace:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"npx metro-symbolicate android/app/build/generated/sourcemaps/react/release/index.android.bundle.map < stacktrace.txt\n")),Object(o.b)("p",null,"From ",Object(o.b)("inlineCode",{parentName:"p"},"adb logcat"),"directly:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"adb logcat -d | npx metro-symbolicate android/app/build/generated/sourcemaps/react/release/index.android.bundle.map\n")),Object(o.b)("p",null,"This will turn each minified function name and offset like ",Object(o.b)("inlineCode",{parentName:"p"},"p@1:132161")," into the actual file- and function name ",Object(o.b)("inlineCode",{parentName:"p"},"AwesomeProject/App.js:54:initializeMap"),"."),Object(o.b)("h2",{id:"notes-on-sourcemaps"},"Notes on Sourcemaps"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Multiple source maps may be generated by the build process. Make sure to used the one in the location shown in the examples."),Object(o.b)("li",{parentName:"ul"},"Make sure that the source map you use corresponds to the exact commit of the crashing app. Small changes in source code can cause large differences in offsets."),Object(o.b)("li",{parentName:"ul"},"If ",Object(o.b)("inlineCode",{parentName:"li"},"metro-symbolicate")," exits immediately with success, make sure the input comes from a pipe or redirection and not from a terminal.")))}p.isMDXComponent=!0}}]);