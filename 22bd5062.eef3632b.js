(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{1006:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),u=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),p=u(a),O=n,h=p["".concat(c,".").concat(O)]||p[O]||d[O]||b;return a?r.a.createElement(h,l(l({ref:t},i),{},{components:a})):r.a.createElement(h,l({ref:t},i))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=O;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var i=2;i<b;i++)c[i]=a[i];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},229:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return u}));var n=a(2),r=a(7),b=(a(0),a(1006)),c={id:"switch",title:"Switch"},l={unversionedId:"switch",id:"version-0.61/switch",isDocsHomePage:!1,title:"Switch",description:"Renders a boolean input.",source:"@site/versioned_docs/version-0.61/switch.md",slug:"/switch",permalink:"/docs/0.61/switch",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.61/switch.md",version:"0.61",lastUpdatedAt:1603945169,sidebar:"version-0.61/components",previous:{title:"StatusBar",permalink:"/docs/0.61/statusbar"},next:{title:"TabBarIOS",permalink:"/docs/0.61/tabbarios"}},o=[{value:"Props",id:"props",children:[{value:"<code>disabled</code>",id:"disabled",children:[]},{value:"<code>ios_backgroundColor</code>",id:"ios_backgroundcolor",children:[]},{value:"<code>onChange</code>",id:"onchange",children:[]},{value:"<code>onValueChange</code>",id:"onvaluechange",children:[]},{value:"<code>thumbColor</code>",id:"thumbcolor",children:[]},{value:"<code>trackColor</code>",id:"trackcolor",children:[]},{value:"<code>value</code>",id:"value",children:[]}]}],i={rightToc:o};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"Renders a boolean input."),Object(b.b)("p",null,"This is a controlled component that requires an ",Object(b.b)("inlineCode",{parentName:"p"},"onValueChange")," callback that updates the ",Object(b.b)("inlineCode",{parentName:"p"},"value")," prop in order for the component to reflect user actions. If the ",Object(b.b)("inlineCode",{parentName:"p"},"value")," prop is not updated, the component will continue to render the supplied ",Object(b.b)("inlineCode",{parentName:"p"},"value")," prop instead of the expected result of any user actions."),Object(b.b)("hr",null),Object(b.b)("h1",{id:"reference"},"Reference"),Object(b.b)("h2",{id:"props"},"Props"),Object(b.b)("p",null,"Inherits ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/0.61/view#props"}),"View Props"),"."),Object(b.b)("h3",{id:"disabled"},Object(b.b)("inlineCode",{parentName:"h3"},"disabled")),Object(b.b)("p",null,"If true the user won't be able to toggle the switch. Default value is false."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"ios_backgroundcolor"},Object(b.b)("inlineCode",{parentName:"h3"},"ios_backgroundColor")),Object(b.b)("p",null,"On iOS, custom color for the background. This background color can be seen either when the switch value is false or when the switch is disabled (and the switch is translucent)."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/0.61/colors"}),"color")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"onchange"},Object(b.b)("inlineCode",{parentName:"h3"},"onChange")),Object(b.b)("p",null,"Invoked when the user tries to change the value of the switch. Receives the change event as an argument. If you want to only receive the new value, use ",Object(b.b)("inlineCode",{parentName:"p"},"onValueChange")," instead."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"onvaluechange"},Object(b.b)("inlineCode",{parentName:"h3"},"onValueChange")),Object(b.b)("p",null,"Invoked when the user tries to change the value of the switch. Receives the new value as an argument. If you want to instead receive an event, use ",Object(b.b)("inlineCode",{parentName:"p"},"onChange"),"."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"thumbcolor"},Object(b.b)("inlineCode",{parentName:"h3"},"thumbColor")),Object(b.b)("p",null,"Color of the foreground switch grip. If this is set on iOS, the switch grip will lose its drop shadow."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/0.61/colors"}),"color")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"trackcolor"},Object(b.b)("inlineCode",{parentName:"h3"},"trackColor")),Object(b.b)("p",null,"Custom colors for the switch track."),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"iOS"),": When the switch value is false, the track shrinks into the border. If you want to change the color of the background exposed by the shrunken track, use ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/0.61/switch#ios_backgroundColor"}),Object(b.b)("inlineCode",{parentName:"a"},"ios_backgroundColor")),"."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"object: {false: ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/0.61/colors"}),"color"),", true: ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/0.61/colors"}),"color"),"}"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"value"},Object(b.b)("inlineCode",{parentName:"h3"},"value")),Object(b.b)("p",null,"The value of the switch. If true the switch will be turned on. Default value is false."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))))}u.isMDXComponent=!0}}]);