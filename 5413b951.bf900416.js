(window.webpackJsonp=window.webpackJsonp||[]).push([[322],{1006:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),b=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=b(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),p=b(n),m=a,u=p["".concat(c,".").concat(m)]||p[m]||s[m]||r;return n?i.a.createElement(u,o(o({ref:t},l),{},{components:n})):i.a.createElement(u,o({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<r;l++)c[l]=n[l];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},407:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return b}));var a=n(2),i=n(7),r=(n(0),n(1006)),c={id:"datepickerandroid",title:"\ud83d\udea7 DatePickerAndroid"},o={unversionedId:"datepickerandroid",id:"version-0.61/datepickerandroid",isDocsHomePage:!1,title:"\ud83d\udea7 DatePickerAndroid",description:"Deprecated. Use @react-native-community/datetimepicker instead.",source:"@site/versioned_docs/version-0.61/datepickerandroid.md",slug:"/datepickerandroid",permalink:"/docs/0.61/datepickerandroid",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.61/datepickerandroid.md",version:"0.61",lastUpdatedAt:1603945169,sidebar:"version-0.61/api",previous:{title:"\ud83d\udea7 Clipboard",permalink:"/docs/0.61/clipboard"},next:{title:"Dimensions",permalink:"/docs/0.61/dimensions"}},d=[{value:"Example",id:"example",children:[]},{value:"Methods",id:"methods",children:[{value:"<code>open()</code>",id:"open",children:[]},{value:"<code>dateSetAction()</code>",id:"datesetaction",children:[]},{value:"<code>dismissedAction()</code>",id:"dismissedaction",children:[]}]}],l={rightToc:d};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Deprecated.")," Use ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/react-native-community/react-native-datetimepicker"}),"@react-native-community/datetimepicker")," instead.")),Object(r.b)("p",null,"Opens the standard Android date picker dialog."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("inlineCode",{parentName:"p"},"DatePickerAndroid")," has been merged with ",Object(r.b)("inlineCode",{parentName:"p"},"DatePickerIOS")," and ",Object(r.b)("inlineCode",{parentName:"p"},"TimePickerAndroid")," into a single component called ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/react-native-community/react-native-datetimepicker#react-native-datetimepicker"}),"DateTimePicker")," and will be removed in a future release.")),Object(r.b)("h3",{id:"example"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"try {\n  const {\n    action,\n    year,\n    month,\n    day\n  } = await DatePickerAndroid.open({\n    // Use `new Date()` for current date.\n    // May 25 2020. Month 0 is January.\n    date: new Date(2020, 4, 25)\n  });\n  if (action !== DatePickerAndroid.dismissedAction) {\n    // Selected year, month (0-11), day\n  }\n} catch ({ code, message }) {\n  console.warn('Cannot open date picker', message);\n}\n")),Object(r.b)("hr",null),Object(r.b)("h1",{id:"reference"},"Reference"),Object(r.b)("h2",{id:"methods"},"Methods"),Object(r.b)("h3",{id:"open"},Object(r.b)("inlineCode",{parentName:"h3"},"open()")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static open(options)\n")),Object(r.b)("p",null,"Opens the standard Android date picker dialog."),Object(r.b)("p",null,"The available keys for the ",Object(r.b)("inlineCode",{parentName:"p"},"options")," object are:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"date")," (",Object(r.b)("inlineCode",{parentName:"li"},"Date")," object or timestamp in milliseconds) - date to show by default"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"minDate")," (",Object(r.b)("inlineCode",{parentName:"li"},"Date")," or timestamp in milliseconds) - minimum date that can be selected"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"maxDate")," (",Object(r.b)("inlineCode",{parentName:"li"},"Date")," object or timestamp in milliseconds) - maximum date that can be selected"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"mode")," (",Object(r.b)("inlineCode",{parentName:"li"},"enum('calendar', 'spinner', 'default')"),") - To set the date-picker mode to calendar/spinner/default",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"'calendar': Show a date picker in calendar mode."),Object(r.b)("li",{parentName:"ul"},"'spinner': Show a date picker in spinner mode."),Object(r.b)("li",{parentName:"ul"},"'default': Show a default native date picker(spinner/calendar) based on android versions.")))),Object(r.b)("p",null,"Returns a Promise which will be invoked an object containing ",Object(r.b)("inlineCode",{parentName:"p"},"action"),", ",Object(r.b)("inlineCode",{parentName:"p"},"year"),", ",Object(r.b)("inlineCode",{parentName:"p"},"month")," (0-11), ",Object(r.b)("inlineCode",{parentName:"p"},"day")," if the user picked a date. If the user dismissed the dialog, the Promise will still be resolved with action being ",Object(r.b)("inlineCode",{parentName:"p"},"DatePickerAndroid.dismissedAction")," and all the other keys being undefined. ",Object(r.b)("strong",{parentName:"p"},"Always")," check whether the ",Object(r.b)("inlineCode",{parentName:"p"},"action")," is equal to ",Object(r.b)("inlineCode",{parentName:"p"},"DatePickerAndroid.dateSetAction")," before reading the values."),Object(r.b)("p",null,"Note the native date picker dialog has some UI glitches on Android 4 and lower when using the ",Object(r.b)("inlineCode",{parentName:"p"},"minDate")," and ",Object(r.b)("inlineCode",{parentName:"p"},"maxDate")," options."),Object(r.b)("hr",null),Object(r.b)("h3",{id:"datesetaction"},Object(r.b)("inlineCode",{parentName:"h3"},"dateSetAction()")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static dateSetAction()\n")),Object(r.b)("p",null,"A date has been selected."),Object(r.b)("hr",null),Object(r.b)("h3",{id:"dismissedaction"},Object(r.b)("inlineCode",{parentName:"h3"},"dismissedAction()")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static dismissedAction()\n")),Object(r.b)("p",null,"The dialog has been dismissed."))}b.isMDXComponent=!0}}]);