(window.webpackJsonp=window.webpackJsonp||[]).push([[851],{1006:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(n),d=r,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||o;return n?a.a.createElement(m,l(l({ref:t},s),{},{components:n})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},919:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(7),o=(n(0),n(1006)),i={id:"panresponder",title:"PanResponder"},l={unversionedId:"panresponder",id:"version-0.61/panresponder",isDocsHomePage:!1,title:"PanResponder",description:"PanResponder reconciles several touches into a single gesture. It makes single-touch gestures resilient to extra touches, and can be used to recognize basic multi-touch gestures.",source:"@site/versioned_docs/version-0.61/panresponder.md",slug:"/panresponder",permalink:"/docs/0.61/panresponder",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.61/panresponder.md",version:"0.61",lastUpdatedAt:1604577351,sidebar:"version-0.61/api",previous:{title:"Linking",permalink:"/docs/0.61/linking"},next:{title:"PermissionsAndroid",permalink:"/docs/0.61/permissionsandroid"}},c=[{value:"Basic Usage",id:"basic-usage",children:[]},{value:"Working Example",id:"working-example",children:[]},{value:"Methods",id:"methods",children:[{value:"<code>create()</code>",id:"create",children:[]}]}],s={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"PanResponder")," reconciles several touches into a single gesture. It makes single-touch gestures resilient to extra touches, and can be used to recognize basic multi-touch gestures."),Object(o.b)("p",null,"By default, ",Object(o.b)("inlineCode",{parentName:"p"},"PanResponder")," holds an ",Object(o.b)("inlineCode",{parentName:"p"},"InteractionManager")," handle to block long-running JS events from interrupting active gestures."),Object(o.b)("p",null,"It provides a predictable wrapper of the responder handlers provided by the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/0.61/gesture-responder-system"}),"gesture responder system"),". For each handler, it provides a new ",Object(o.b)("inlineCode",{parentName:"p"},"gestureState")," object alongside the native event object:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"onPanResponderMove: (event, gestureState) => {}\n")),Object(o.b)("p",null,"A native event is a synthetic touch event with the following form:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"nativeEvent"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"changedTouches")," - Array of all touch events that have changed since the last event"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"identifier")," - The ID of the touch"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"locationX")," - The X position of the touch, relative to the element"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"locationY")," - The Y position of the touch, relative to the element"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"pageX")," - The X position of the touch, relative to the root element"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"pageY")," - The Y position of the touch, relative to the root element"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"target")," - The node id of the element receiving the touch event"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"timestamp")," - A time identifier for the touch, useful for velocity calculation"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"touches")," - Array of all current touches on the screen")))),Object(o.b)("p",null,"A ",Object(o.b)("inlineCode",{parentName:"p"},"gestureState")," object has the following:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"stateID")," - ID of the gestureState- persisted as long as there at least one touch on screen"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"moveX")," - the latest screen coordinates of the recently-moved touch"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"moveY")," - the latest screen coordinates of the recently-moved touch"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"x0")," - the screen coordinates of the responder grant"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"y0")," - the screen coordinates of the responder grant"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"dx")," - accumulated distance of the gesture since the touch started"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"dy")," - accumulated distance of the gesture since the touch started"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"vx")," - current velocity of the gesture"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"vy")," - current velocity of the gesture"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"numberActiveTouches")," - Number of touches currently on screen")),Object(o.b)("h3",{id:"basic-usage"},"Basic Usage"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"class ExampleComponent extends Component {\n  constructor(props) {\n    super(props);\n    this._panResponder = PanResponder.create({\n      // Ask to be the responder:\n      onStartShouldSetPanResponder: (evt, gestureState) => true,\n      onStartShouldSetPanResponderCapture: (evt, gestureState) =>\n        true,\n      onMoveShouldSetPanResponder: (evt, gestureState) => true,\n      onMoveShouldSetPanResponderCapture: (evt, gestureState) =>\n        true,\n\n      onPanResponderGrant: (evt, gestureState) => {\n        // The gesture has started. Show visual feedback so the user knows\n        // what is happening!\n        // gestureState.d{x,y} will be set to zero now\n      },\n      onPanResponderMove: (evt, gestureState) => {\n        // The most recent move distance is gestureState.move{X,Y}\n        // The accumulated gesture distance since becoming responder is\n        // gestureState.d{x,y}\n      },\n      onPanResponderTerminationRequest: (evt, gestureState) =>\n        true,\n      onPanResponderRelease: (evt, gestureState) => {\n        // The user has released all touches while this view is the\n        // responder. This typically means a gesture has succeeded\n      },\n      onPanResponderTerminate: (evt, gestureState) => {\n        // Another component has become the responder, so this gesture\n        // should be cancelled\n      },\n      onShouldBlockNativeResponder: (evt, gestureState) => {\n        // Returns whether this component should block native components from becoming the JS\n        // responder. Returns true by default. Is currently only supported on android.\n        return true;\n      }\n    });\n  }\n\n  render() {\n    return <View {...this._panResponder.panHandlers} />;\n  }\n}\n")),Object(o.b)("h3",{id:"working-example"},"Working Example"),Object(o.b)("p",null,"To see it in action, try the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/react-native/blob/master/packages/rn-tester/js/examples/PanResponder/PanResponderExample.js"}),"PanResponder example in RNTester")),Object(o.b)("hr",null),Object(o.b)("h1",{id:"reference"},"Reference"),Object(o.b)("h2",{id:"methods"},"Methods"),Object(o.b)("h3",{id:"create"},Object(o.b)("inlineCode",{parentName:"h3"},"create()")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"static create(config)\n")),Object(o.b)("p",null,"@param {object} config Enhanced versions of all of the responder callbacks that provide not only the typical ",Object(o.b)("inlineCode",{parentName:"p"},"ResponderSyntheticEvent"),", but also the ",Object(o.b)("inlineCode",{parentName:"p"},"PanResponder")," gesture state, by replacing the word ",Object(o.b)("inlineCode",{parentName:"p"},"Responder")," with ",Object(o.b)("inlineCode",{parentName:"p"},"PanResponder")," in each of the typical ",Object(o.b)("inlineCode",{parentName:"p"},"onResponder*")," callbacks. For example, the ",Object(o.b)("inlineCode",{parentName:"p"},"config")," object would look like:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"onMoveShouldSetPanResponder: (e, gestureState) => {...}")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"onMoveShouldSetPanResponderCapture: (e, gestureState) => {...}")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"onStartShouldSetPanResponder: (e, gestureState) => {...}")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"onStartShouldSetPanResponderCapture: (e, gestureState) => {...}")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"onPanResponderReject: (e, gestureState) => {...}")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"onPanResponderGrant: (e, gestureState) => {...}")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"onPanResponderStart: (e, gestureState) => {...}")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"onPanResponderEnd: (e, gestureState) => {...}")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"onPanResponderRelease: (e, gestureState) => {...}")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"onPanResponderMove: (e, gestureState) => {...}")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"onPanResponderTerminate: (e, gestureState) => {...}")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"onPanResponderTerminationRequest: (e, gestureState) => {...}")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"onShouldBlockNativeResponder: (e, gestureState) => {...}"))),Object(o.b)("p",null,"In general, for events that have capture equivalents, we update the gestureState once in the capture phase and can use it in the bubble phase as well."),Object(o.b)("p",null,"Be careful with ",Object(o.b)("inlineCode",{parentName:"p"},"onStartShould*")," callbacks. They only reflect updated ",Object(o.b)("inlineCode",{parentName:"p"},"gestureState")," for start/end events that bubble/capture to the Node. Once the node is the responder, you can rely on every start/end event being processed by the gesture and ",Object(o.b)("inlineCode",{parentName:"p"},"gestureState")," being updated accordingly. (numberActiveTouches) may not be totally accurate unless you are the responder."))}p.isMDXComponent=!0}}]);