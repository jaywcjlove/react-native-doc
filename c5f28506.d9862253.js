(window.webpackJsonp=window.webpackJsonp||[]).push([[715],{1006:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),o=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(a),b=n,m=u["".concat(r,".").concat(b)]||u[b]||d[b]||i;return a?o.a.createElement(m,c(c({ref:t},l),{},{components:a})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,r[1]=c;for(var l=2;l<i;l++)r[l]=a[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},791:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(2),o=a(7),i=(a(0),a(1006)),r={id:"direct-manipulation",title:"Direct Manipulation"},c={unversionedId:"direct-manipulation",id:"direct-manipulation",isDocsHomePage:!1,title:"Direct Manipulation",description:"It is sometimes necessary to make changes directly to a component without using state/props to trigger a re-render of the entire subtree. When using React in the browser for example, you sometimes need to directly modify a DOM node, and the same is true for views in mobile apps. setNativeProps is the React Native equivalent to setting properties directly on a DOM node.",source:"@site/../docs/direct-manipulation.md",slug:"/direct-manipulation",permalink:"/docs/next/direct-manipulation",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/direct-manipulation.md",version:"current",lastUpdatedAt:1599462386,sidebar:"docs",previous:{title:"Native Modules Setup",permalink:"/docs/next/native-modules-setup"},next:{title:"Native Modules",permalink:"/docs/next/native-modules-android"}},s=[{value:"setNativeProps with TouchableOpacity",id:"setnativeprops-with-touchableopacity",children:[]},{value:"Composite components and setNativeProps",id:"composite-components-and-setnativeprops",children:[]},{value:"setNativeProps to clear TextInput value",id:"setnativeprops-to-clear-textinput-value",children:[]},{value:"Avoiding conflicts with the render function",id:"avoiding-conflicts-with-the-render-function",children:[]},{value:"setNativeProps &amp; shouldComponentUpdate",id:"setnativeprops--shouldcomponentupdate",children:[]},{value:"Other native methods",id:"other-native-methods",children:[{value:"measure(callback)",id:"measurecallback",children:[]},{value:"measureInWindow(callback)",id:"measureinwindowcallback",children:[]},{value:"measureLayout(relativeToNativeComponentRef, onSuccess, onFail)",id:"measurelayoutrelativetonativecomponentref-onsuccess-onfail",children:[]},{value:"focus()",id:"focus",children:[]},{value:"blur()",id:"blur",children:[]}]}],l={rightToc:s};function p(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"It is sometimes necessary to make changes directly to a component without using state/props to trigger a re-render of the entire subtree. When using React in the browser for example, you sometimes need to directly modify a DOM node, and the same is true for views in mobile apps. ",Object(i.b)("inlineCode",{parentName:"p"},"setNativeProps")," is the React Native equivalent to setting properties directly on a DOM node."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Use setNativeProps when frequent re-rendering creates a performance bottleneck"),Object(i.b)("p",{parentName:"blockquote"},"Direct manipulation will not be a tool that you reach for frequently; you will typically only be using it for creating continuous animations to avoid the overhead of rendering the component hierarchy and reconciling many views. ",Object(i.b)("inlineCode",{parentName:"p"},"setNativeProps")," is imperative and stores state in the native layer (DOM, UIView, etc.) and not within your React components, which makes your code more difficult to reason about. Before you use it, try to solve your problem with ",Object(i.b)("inlineCode",{parentName:"p"},"setState")," and ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactjs.org/docs/optimizing-performance.html#shouldcomponentupdate-in-action"}),"shouldComponentUpdate"),".")),Object(i.b)("h2",{id:"setnativeprops-with-touchableopacity"},"setNativeProps with TouchableOpacity"),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebook/react-native/blob/master/Libraries/Components/Touchable/TouchableOpacity.js"}),"TouchableOpacity")," uses ",Object(i.b)("inlineCode",{parentName:"p"},"setNativeProps")," internally to update the opacity of its child component:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"const viewRef = useRef();\nconst setOpacityTo = useCallback((value) => {\n  // Redacted: animation related code\n  viewRef.current.setNativeProps({\n    opacity: value\n  });\n}, []);\n")),Object(i.b)("p",null,"This allows us to write the following code and know that the child will have its opacity updated in response to taps, without the child having any knowledge of that fact or requiring any changes to its implementation:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"<TouchableOpacity onPress={handlePress}>\n  <View>\n    <Text>Press me!</Text>\n  </View>\n</TouchableOpacity>\n")),Object(i.b)("p",null,"Let's imagine that ",Object(i.b)("inlineCode",{parentName:"p"},"setNativeProps")," was not available. One way that we might implement it with that constraint is to store the opacity value in the state, then update that value whenever ",Object(i.b)("inlineCode",{parentName:"p"},"onPress")," is fired:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"const [buttonOpacity, setButtonOpacity] = useState(1);\nreturn (\n  <TouchableOpacity\n    onPressIn={() => setButtonOpacity(0.5)}\n    onPressOut={() => setButtonOpacity(1)}>\n    <View style={{ opacity: buttonOpacity }}>\n      <Text>Press me!</Text>\n    </View>\n  </TouchableOpacity>\n);\n")),Object(i.b)("p",null,"This is computationally intensive compared to the original example - React needs to re-render the component hierarchy each time the opacity changes, even though other properties of the view and its children haven't changed. Usually this overhead isn't a concern but when performing continuous animations and responding to gestures, judiciously optimizing your components can improve your animations' fidelity."),Object(i.b)("p",null,"If you look at the implementation of ",Object(i.b)("inlineCode",{parentName:"p"},"setNativeProps")," in ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebook/react-native/blob/master/Libraries/Renderer/implementations/ReactNativeRenderer-prod.js"}),"NativeMethodsMixin")," you will notice that it is a wrapper around ",Object(i.b)("inlineCode",{parentName:"p"},"RCTUIManager.updateView")," - this is the exact same function call that results from re-rendering - see ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebook/react-native/blob/fb2ec1ea47c53c2e7b873acb1cb46192ac74274e/Libraries/Renderer/oss/ReactNativeRenderer-prod.js#L5793-L5813"}),"receiveComponent in ReactNativeBaseComponent"),"."),Object(i.b)("h2",{id:"composite-components-and-setnativeprops"},"Composite components and setNativeProps"),Object(i.b)("p",null,"Composite components are not backed by a native view, so you cannot call ",Object(i.b)("inlineCode",{parentName:"p"},"setNativeProps")," on them. Consider this example:"),Object(i.b)("div",{className:"snack-player","data-snack-name":"setNativeProps with Composite Components","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20Text%2C%20TouchableOpacity%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20MyButton%20%3D%20(props)%20%3D%3E%20(%0A%20%20%3CView%20style%3D%7B%7B%20marginTop%3A%2050%20%7D%7D%3E%0A%20%20%20%20%3CText%3E%7Bprops.label%7D%3C%2FText%3E%0A%20%20%3C%2FView%3E%0A)%3B%0A%0Aexport%20default%20App%20%3D%20()%20%3D%3E%20(%0A%20%20%3CTouchableOpacity%3E%0A%20%20%20%20%3CMyButton%20label%3D%22Press%20me!%22%20%2F%3E%0A%20%20%3C%2FTouchableOpacity%3E%0A)%3B","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true"}),Object(i.b)("p",null,"If you run this you will immediately see this error: ",Object(i.b)("inlineCode",{parentName:"p"},"Touchable child must either be native or forward setNativeProps to a native component"),". This occurs because ",Object(i.b)("inlineCode",{parentName:"p"},"MyButton")," isn't directly backed by a native view whose opacity should be set. You can think about it like this: if you define a component with ",Object(i.b)("inlineCode",{parentName:"p"},"createReactClass")," you would not expect to be able to set a style prop on it and have that work - you would need to pass the style prop down to a child, unless you are wrapping a native component. Similarly, we are going to forward ",Object(i.b)("inlineCode",{parentName:"p"},"setNativeProps")," to a native-backed child component."),Object(i.b)("h4",{id:"forward-setnativeprops-to-a-child"},"Forward setNativeProps to a child"),Object(i.b)("p",null,"Since the ",Object(i.b)("inlineCode",{parentName:"p"},"setNativeProps")," method exists on any ref to a ",Object(i.b)("inlineCode",{parentName:"p"},"View")," component, it is enough to forward a ref on your custom component to one of the ",Object(i.b)("inlineCode",{parentName:"p"},"<View />")," components that it renders. This means that a call to ",Object(i.b)("inlineCode",{parentName:"p"},"setNativeProps")," on the custom component will have the same effect as if you called ",Object(i.b)("inlineCode",{parentName:"p"},"setNativeProps")," on the wrapped ",Object(i.b)("inlineCode",{parentName:"p"},"View")," component itself."),Object(i.b)("div",{className:"snack-player","data-snack-name":"Forwarding setNativeProps","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20Text%2C%20TouchableOpacity%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20MyButton%20%3D%20React.forwardRef((props%2C%20ref)%20%3D%3E%20(%0A%20%20%3CView%20%7B...props%7D%20ref%3D%7Bref%7D%20style%3D%7B%7B%20marginTop%3A%2050%20%7D%7D%3E%0A%20%20%20%20%3CText%3E%7Bprops.label%7D%3C%2FText%3E%0A%20%20%3C%2FView%3E%0A))%3B%0A%0Aexport%20default%20App%20%3D%20()%20%3D%3E%20(%0A%20%20%3CTouchableOpacity%3E%0A%20%20%20%20%3CMyButton%20label%3D%22Press%20me!%22%20%2F%3E%0A%20%20%3C%2FTouchableOpacity%3E%0A)%3B","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true"}),Object(i.b)("p",null,"You can now use ",Object(i.b)("inlineCode",{parentName:"p"},"MyButton")," inside of ",Object(i.b)("inlineCode",{parentName:"p"},"TouchableOpacity"),"!"),Object(i.b)("p",null,"You may have noticed that we passed all of the props down to the child view using ",Object(i.b)("inlineCode",{parentName:"p"},"{...props}"),". The reason for this is that ",Object(i.b)("inlineCode",{parentName:"p"},"TouchableOpacity")," is actually a composite component, and so in addition to depending on ",Object(i.b)("inlineCode",{parentName:"p"},"setNativeProps")," on its child, it also requires that the child perform touch handling. To do this, it passes on ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/view#onmoveshouldsetresponder"}),"various props")," that call back to the ",Object(i.b)("inlineCode",{parentName:"p"},"TouchableOpacity")," component. ",Object(i.b)("inlineCode",{parentName:"p"},"TouchableHighlight"),", in contrast, is backed by a native view and only requires that we implement ",Object(i.b)("inlineCode",{parentName:"p"},"setNativeProps"),"."),Object(i.b)("h2",{id:"setnativeprops-to-clear-textinput-value"},"setNativeProps to clear TextInput value"),Object(i.b)("p",null,"Another very common use case of ",Object(i.b)("inlineCode",{parentName:"p"},"setNativeProps")," is to clear the value of a TextInput. The ",Object(i.b)("inlineCode",{parentName:"p"},"controlled")," prop of TextInput can sometimes drop characters when the ",Object(i.b)("inlineCode",{parentName:"p"},"bufferDelay")," is low and the user types very quickly. Some developers prefer to skip this prop entirely and instead use ",Object(i.b)("inlineCode",{parentName:"p"},"setNativeProps")," to directly manipulate the TextInput value when necessary. For example, the following code demonstrates clearing the input when you tap a button:"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Clear text","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20useCallback%2C%20useRef%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20StyleSheet%2C%20TextInput%2C%20Text%2C%20TouchableOpacity%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20inputRef%20%3D%20useRef()%3B%0A%20%20const%20clearText%20%3D%20useCallback(()%20%3D%3E%20%7B%0A%20%20%20%20inputRef.current.setNativeProps(%7B%20text%3A%20%22%22%20%7D)%3B%0A%20%20%7D%2C%20%5B%5D)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CTextInput%20ref%3D%7BinputRef%7D%20style%3D%7Bstyles.input%7D%20%2F%3E%0A%20%20%20%20%20%20%3CTouchableOpacity%20onPress%3D%7BclearText%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%3EClear%20text%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FTouchableOpacity%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%7D%2C%0A%20%20input%3A%20%7B%0A%20%20%20%20height%3A%2050%2C%0A%20%20%20%20width%3A%20200%2C%0A%20%20%20%20marginHorizontal%3A%2020%2C%0A%20%20%20%20borderWidth%3A%201%2C%0A%20%20%20%20borderColor%3A%20%22%23ccc%22%2C%0A%20%20%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true"}),Object(i.b)("h2",{id:"avoiding-conflicts-with-the-render-function"},"Avoiding conflicts with the render function"),Object(i.b)("p",null,"If you update a property that is also managed by the render function, you might end up with some unpredictable and confusing bugs because anytime the component re-renders and that property changes, whatever value was previously set from ",Object(i.b)("inlineCode",{parentName:"p"},"setNativeProps")," will be completely ignored and overridden."),Object(i.b)("h2",{id:"setnativeprops--shouldcomponentupdate"},"setNativeProps & shouldComponentUpdate"),Object(i.b)("p",null,"By ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactjs.org/docs/optimizing-performance.html#avoid-reconciliation"}),"intelligently applying ",Object(i.b)("inlineCode",{parentName:"a"},"shouldComponentUpdate"))," you can avoid the unnecessary overhead involved in reconciling unchanged component subtrees, to the point where it may be performant enough to use ",Object(i.b)("inlineCode",{parentName:"p"},"setState")," instead of ",Object(i.b)("inlineCode",{parentName:"p"},"setNativeProps"),"."),Object(i.b)("h2",{id:"other-native-methods"},"Other native methods"),Object(i.b)("p",null,"The methods described here are available on most of the default components provided by React Native. Note, however, that they are ",Object(i.b)("em",{parentName:"p"},"not")," available on composite components that aren't directly backed by a native view. This will generally include most components that you define in your own app."),Object(i.b)("h3",{id:"measurecallback"},"measure(callback)"),Object(i.b)("p",null,"Determines the location on screen, width, and height in the viewport of the given view and returns the values via an async callback. If successful, the callback will be called with the following arguments:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"x"),Object(i.b)("li",{parentName:"ul"},"y"),Object(i.b)("li",{parentName:"ul"},"width"),Object(i.b)("li",{parentName:"ul"},"height"),Object(i.b)("li",{parentName:"ul"},"pageX"),Object(i.b)("li",{parentName:"ul"},"pageY")),Object(i.b)("p",null,"Note that these measurements are not available until after the rendering has been completed in native. If you need the measurements as soon as possible and you don't need ",Object(i.b)("inlineCode",{parentName:"p"},"pageX")," and ",Object(i.b)("inlineCode",{parentName:"p"},"pageY"),", consider using the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/view#onlayout"}),Object(i.b)("inlineCode",{parentName:"a"},"onLayout"))," property instead."),Object(i.b)("p",null,"Also the width and height returned by ",Object(i.b)("inlineCode",{parentName:"p"},"measure()")," are the width and height of the component in the viewport. If you need the actual size of the component, consider using the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/view#onlayout"}),Object(i.b)("inlineCode",{parentName:"a"},"onLayout"))," property instead."),Object(i.b)("h3",{id:"measureinwindowcallback"},"measureInWindow(callback)"),Object(i.b)("p",null,"Determines the location of the given view in the window and returns the values via an async callback. If the React root view is embedded in another native view, this will give you the absolute coordinates. If successful, the callback will be called with the following arguments:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"x"),Object(i.b)("li",{parentName:"ul"},"y"),Object(i.b)("li",{parentName:"ul"},"width"),Object(i.b)("li",{parentName:"ul"},"height")),Object(i.b)("h3",{id:"measurelayoutrelativetonativecomponentref-onsuccess-onfail"},"measureLayout(relativeToNativeComponentRef, onSuccess, onFail)"),Object(i.b)("p",null,"Like ",Object(i.b)("inlineCode",{parentName:"p"},"measure()"),", but measures the view relative to an ancestor, specified with ",Object(i.b)("inlineCode",{parentName:"p"},"relativeToNativeComponentRef")," reference. This means that the returned coordinates are relative to the origin ",Object(i.b)("inlineCode",{parentName:"p"},"x"),", ",Object(i.b)("inlineCode",{parentName:"p"},"y")," of the ancestor view."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Note: This method can also be called with a ",Object(i.b)("inlineCode",{parentName:"p"},"relativeToNativeNode")," handler (instead of reference), but this variant is deprecated.")),Object(i.b)("div",{className:"snack-player","data-snack-name":"measureLayout example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useEffect%2C%20useRef%2C%20useState%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20Text%2C%20View%2C%20StyleSheet%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20textContainerRef%20%3D%20useRef(null)%3B%0A%20%20const%20textRef%20%3D%20useRef(null)%3B%0A%20%20const%20%5Bmeasure%2C%20setMeasure%5D%20%3D%20useState(null)%3B%0A%0A%20%20useEffect(()%20%3D%3E%20%7B%0A%20%20%20%20if%20(textRef.current%20%26%26%20textContainerRef.current)%20%7B%0A%20%20%20%20%20%20textRef.current.measureLayout(%0A%20%20%20%20%20%20%20%20textContainerRef.current%2C%0A%20%20%20%20%20%20%20%20(left%2C%20top%2C%20width%2C%20height)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20setMeasure(%7B%20left%2C%20top%2C%20width%2C%20height%20%7D)%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20)%3B%0A%20%20%20%20%7D%0A%20%20%7D%2C%20%5Bmeasure%5D)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20ref%3D%7BtextContainerRef%7D%0A%20%20%20%20%20%20%20%20style%3D%7Bstyles.textContainer%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CText%20ref%3D%7BtextRef%7D%3E%0A%20%20%20%20%20%20%20%20%20%20Where%20am%20I%3F%20(relative%20to%20the%20text%20container)%0A%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.measure%7D%3E%0A%20%20%20%20%20%20%20%20%7BJSON.stringify(measure)%7D%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%7D%2C%0A%20%20textContainer%3A%20%7B%0A%20%20%20%20backgroundColor%3A%20%22%2361dafb%22%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20padding%3A%2012%2C%0A%20%20%7D%2C%0A%20%20measure%3A%20%7B%0A%20%20%20%20textAlign%3A%20%22center%22%2C%0A%20%20%20%20padding%3A%2012%2C%0A%20%20%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true"}),Object(i.b)("h3",{id:"focus"},"focus()"),Object(i.b)("p",null,"Requests focus for the given input or view. The exact behavior triggered will depend on the platform and type of view."),Object(i.b)("h3",{id:"blur"},"blur()"),Object(i.b)("p",null,"Removes focus from an input or view. This is the opposite of ",Object(i.b)("inlineCode",{parentName:"p"},"focus()"),"."))}p.isMDXComponent=!0}}]);