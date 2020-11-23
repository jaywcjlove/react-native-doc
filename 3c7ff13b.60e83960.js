(window.webpackJsonp=window.webpackJsonp||[]).push([[241],{1006:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),s=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=s(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,u=d["".concat(i,".").concat(m)]||d[m]||b[m]||r;return n?o.a.createElement(u,p(p({ref:t},c),{},{components:n})):o.a.createElement(u,p({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<r;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},328:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(2),o=n(7),r=(n(0),n(1006)),i={id:"native-components-android",title:"Native UI Components"},p={unversionedId:"native-components-android",id:"native-components-android",isDocsHomePage:!1,title:"Native UI Components",description:"There are tons of native UI widgets out there ready to be used in the latest apps - some of them are part of the platform, others are available as third-party libraries, and still more might be in use in your very own portfolio. React Native has several of the most critical platform components already wrapped, like ScrollView and TextInput, but not all of them, and certainly not ones you might have written yourself for a previous app. Fortunately, we can wrap up these existing components for seamless integration with your React Native application.",source:"@site/../docs/native-components-android.md",slug:"/native-components-android",permalink:"/docs/next/native-components-android",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/native-components-android.md",version:"current",lastUpdatedAt:1595680912,sidebar:"docs",previous:{title:"Native Modules",permalink:"/docs/next/native-modules-android"},next:{title:"Headless JS",permalink:"/docs/next/headless-js-android"}},l=[{value:"ImageView example",id:"imageview-example",children:[]},{value:"1. Create the <code>ViewManager</code> subclass",id:"1-create-the-viewmanager-subclass",children:[]},{value:"2. Implement method <code>createViewInstance</code>",id:"2-implement-method-createviewinstance",children:[]},{value:"3. Expose view property setters using <code>@ReactProp</code> (or <code>@ReactPropGroup</code>) annotation",id:"3-expose-view-property-setters-using-reactprop-or-reactpropgroup-annotation",children:[]},{value:"4. Register the <code>ViewManager</code>",id:"4-register-the-viewmanager",children:[]},{value:"5. Implement the JavaScript module",id:"5-implement-the-javascript-module",children:[]}],c={rightToc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"There are tons of native UI widgets out there ready to be used in the latest apps - some of them are part of the platform, others are available as third-party libraries, and still more might be in use in your very own portfolio. React Native has several of the most critical platform components already wrapped, like ",Object(r.b)("inlineCode",{parentName:"p"},"ScrollView")," and ",Object(r.b)("inlineCode",{parentName:"p"},"TextInput"),", but not all of them, and certainly not ones you might have written yourself for a previous app. Fortunately, we can wrap up these existing components for seamless integration with your React Native application."),Object(r.b)("p",null,"Like the native module guide, this too is a more advanced guide that assumes you are somewhat familiar with Android SDK programming. This guide will show you how to build a native UI component, walking you through the implementation of a subset of the existing ",Object(r.b)("inlineCode",{parentName:"p"},"ImageView")," component available in the core React Native library."),Object(r.b)("h2",{id:"imageview-example"},"ImageView example"),Object(r.b)("p",null,"For this example we are going to walk through the implementation requirements to allow the use of ImageViews in JavaScript."),Object(r.b)("p",null,"Native views are created and manipulated by extending ",Object(r.b)("inlineCode",{parentName:"p"},"ViewManager")," or more commonly ",Object(r.b)("inlineCode",{parentName:"p"},"SimpleViewManager")," . A ",Object(r.b)("inlineCode",{parentName:"p"},"SimpleViewManager")," is convenient in this case because it applies common properties such as background color, opacity, and Flexbox layout."),Object(r.b)("p",null,"These subclasses are essentially singletons - only one instance of each is created by the bridge. They send native views to the ",Object(r.b)("inlineCode",{parentName:"p"},"NativeViewHierarchyManager"),", which delegates back to them to set and update the properties of the views as necessary. The ",Object(r.b)("inlineCode",{parentName:"p"},"ViewManagers")," are also typically the delegates for the views, sending events back to JavaScript via the bridge."),Object(r.b)("p",null,"To send a view:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Create the ViewManager subclass."),Object(r.b)("li",{parentName:"ol"},"Implement the ",Object(r.b)("inlineCode",{parentName:"li"},"createViewInstance")," method"),Object(r.b)("li",{parentName:"ol"},"Expose view property setters using ",Object(r.b)("inlineCode",{parentName:"li"},"@ReactProp")," (or ",Object(r.b)("inlineCode",{parentName:"li"},"@ReactPropGroup"),") annotation"),Object(r.b)("li",{parentName:"ol"},"Register the manager in ",Object(r.b)("inlineCode",{parentName:"li"},"createViewManagers")," of the applications package."),Object(r.b)("li",{parentName:"ol"},"Implement the JavaScript module")),Object(r.b)("h2",{id:"1-create-the-viewmanager-subclass"},"1. Create the ",Object(r.b)("inlineCode",{parentName:"h2"},"ViewManager")," subclass"),Object(r.b)("p",null,"In this example we create view manager class ",Object(r.b)("inlineCode",{parentName:"p"},"ReactImageManager")," that extends ",Object(r.b)("inlineCode",{parentName:"p"},"SimpleViewManager")," of type ",Object(r.b)("inlineCode",{parentName:"p"},"ReactImageView"),". ",Object(r.b)("inlineCode",{parentName:"p"},"ReactImageView")," is the type of object managed by the manager, this will be the custom native view. Name returned by ",Object(r.b)("inlineCode",{parentName:"p"},"getName")," is used to reference the native view type from JavaScript."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'...\n\npublic class ReactImageManager extends SimpleViewManager<ReactImageView> {\n\n  public static final String REACT_CLASS = "RCTImageView";\n  ReactApplicationContext mCallerContext;\n\n  public ReactImageManager(ReactApplicationContext reactContext) {\n    mCallerContext = reactContext;\n  }\n\n  @Override\n  public String getName() {\n    return REACT_CLASS;\n  }\n')),Object(r.b)("h2",{id:"2-implement-method-createviewinstance"},"2. Implement method ",Object(r.b)("inlineCode",{parentName:"h2"},"createViewInstance")),Object(r.b)("p",null,"Views are created in the ",Object(r.b)("inlineCode",{parentName:"p"},"createViewInstance")," method, the view should initialize itself in its default state, any properties will be set via a follow up call to ",Object(r.b)("inlineCode",{parentName:"p"},"updateView.")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"  @Override\n  public ReactImageView createViewInstance(ThemedReactContext context) {\n    return new ReactImageView(context, Fresco.newDraweeControllerBuilder(), null, mCallerContext);\n  }\n")),Object(r.b)("h2",{id:"3-expose-view-property-setters-using-reactprop-or-reactpropgroup-annotation"},"3. Expose view property setters using ",Object(r.b)("inlineCode",{parentName:"h2"},"@ReactProp")," (or ",Object(r.b)("inlineCode",{parentName:"h2"},"@ReactPropGroup"),") annotation"),Object(r.b)("p",null,"Properties that are to be reflected in JavaScript needs to be exposed as setter method annotated with ",Object(r.b)("inlineCode",{parentName:"p"},"@ReactProp")," (or ",Object(r.b)("inlineCode",{parentName:"p"},"@ReactPropGroup"),"). Setter method should take view to be updated (of the current view type) as a first argument and property value as a second argument. Setter should be declared as a ",Object(r.b)("inlineCode",{parentName:"p"},"void")," method and should be ",Object(r.b)("inlineCode",{parentName:"p"},"public"),". Property type sent to JS is determined automatically based on the type of value argument of the setter. The following type of values are currently supported: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),", ",Object(r.b)("inlineCode",{parentName:"p"},"int"),", ",Object(r.b)("inlineCode",{parentName:"p"},"float"),", ",Object(r.b)("inlineCode",{parentName:"p"},"double"),", ",Object(r.b)("inlineCode",{parentName:"p"},"String"),", ",Object(r.b)("inlineCode",{parentName:"p"},"Boolean"),", ",Object(r.b)("inlineCode",{parentName:"p"},"Integer"),", ",Object(r.b)("inlineCode",{parentName:"p"},"ReadableArray"),", ",Object(r.b)("inlineCode",{parentName:"p"},"ReadableMap"),"."),Object(r.b)("p",null,"Annotation ",Object(r.b)("inlineCode",{parentName:"p"},"@ReactProp")," has one obligatory argument ",Object(r.b)("inlineCode",{parentName:"p"},"name")," of type ",Object(r.b)("inlineCode",{parentName:"p"},"String"),". Name assigned to the ",Object(r.b)("inlineCode",{parentName:"p"},"@ReactProp")," annotation linked to the setter method is used to reference the property on JS side."),Object(r.b)("p",null,"Except from ",Object(r.b)("inlineCode",{parentName:"p"},"name"),", ",Object(r.b)("inlineCode",{parentName:"p"},"@ReactProp")," annotation may take following optional arguments: ",Object(r.b)("inlineCode",{parentName:"p"},"defaultBoolean"),", ",Object(r.b)("inlineCode",{parentName:"p"},"defaultInt"),", ",Object(r.b)("inlineCode",{parentName:"p"},"defaultFloat"),". Those arguments should be of the corresponding type (accordingly ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),", ",Object(r.b)("inlineCode",{parentName:"p"},"int"),", ",Object(r.b)("inlineCode",{parentName:"p"},"float"),') and the value provided will be passed to the setter method in case when the property that the setter is referencing has been removed from the component. Note that "default" values are only provided for primitive types, in case when setter is of some complex type, ',Object(r.b)("inlineCode",{parentName:"p"},"null")," will be provided as a default value in case when corresponding property gets removed."),Object(r.b)("p",null,"Setter declaration requirements for methods annotated with ",Object(r.b)("inlineCode",{parentName:"p"},"@ReactPropGroup")," are different than for ",Object(r.b)("inlineCode",{parentName:"p"},"@ReactProp"),", please refer to the ",Object(r.b)("inlineCode",{parentName:"p"},"@ReactPropGroup")," annotation class docs for more information about it. ",Object(r.b)("strong",{parentName:"p"},"IMPORTANT!"),' in ReactJS updating the property value will result in setter method call. Note that one of the ways we can update component is by removing properties that have been set before. In that case setter method will be called as well to notify view manager that property has changed. In that case "default" value will be provided (for primitive types "default" can value can be specified using ',Object(r.b)("inlineCode",{parentName:"p"},"defaultBoolean"),", ",Object(r.b)("inlineCode",{parentName:"p"},"defaultFloat"),", etc. arguments of ",Object(r.b)("inlineCode",{parentName:"p"},"@ReactProp")," annotation, for complex types setter will be called with value set to ",Object(r.b)("inlineCode",{parentName:"p"},"null"),")."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'  @ReactProp(name = "src")\n  public void setSrc(ReactImageView view, @Nullable ReadableArray sources) {\n    view.setSource(sources);\n  }\n\n  @ReactProp(name = "borderRadius", defaultFloat = 0f)\n  public void setBorderRadius(ReactImageView view, float borderRadius) {\n    view.setBorderRadius(borderRadius);\n  }\n\n  @ReactProp(name = ViewProps.RESIZE_MODE)\n  public void setResizeMode(ReactImageView view, @Nullable String resizeMode) {\n    view.setScaleType(ImageResizeMode.toScaleType(resizeMode));\n  }\n')),Object(r.b)("h2",{id:"4-register-the-viewmanager"},"4. Register the ",Object(r.b)("inlineCode",{parentName:"h2"},"ViewManager")),Object(r.b)("p",null,"The final Java step is to register the ViewManager to the application, this happens in a similar way to ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/native-modules-android"}),"Native Modules"),", via the applications package member function ",Object(r.b)("inlineCode",{parentName:"p"},"createViewManagers.")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"  @Override\n  public List<ViewManager> createViewManagers(\n                            ReactApplicationContext reactContext) {\n    return Arrays.<ViewManager>asList(\n      new ReactImageManager(reactContext)\n    );\n  }\n")),Object(r.b)("h2",{id:"5-implement-the-javascript-module"},"5. Implement the JavaScript module"),Object(r.b)("p",null,"The very final step is to create the JavaScript module that defines the interface layer between Java and JavaScript for the users of your new view. It is recommended for you to document the component interface in this module (e.g. using Flow, TypeScript, or plain old comments)."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"// ImageView.js\n\nimport { requireNativeComponent } from 'react-native';\n\n/**\n * Composes `View`.\n *\n * - src: string\n * - borderRadius: number\n * - resizeMode: 'cover' | 'contain' | 'stretch'\n */\nmodule.exports = requireNativeComponent('RCTImageView');\n")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"requireNativeComponent")," function takes the name of the native view. Note that if your component needs to do anything more sophisticated (e.g. custom event handling), you should wrap the native component in another React component. This is illustrated in the ",Object(r.b)("inlineCode",{parentName:"p"},"MyCustomView")," example below."),Object(r.b)("h1",{id:"events"},"Events"),Object(r.b)("p",null,"So now we know how to expose native view components that we can control freely from JS, but how do we deal with events from the user, like pinch-zooms or panning? When a native event occurs the native code should issue an event to the JavaScript representation of the View, and the two views are linked with the value returned from the ",Object(r.b)("inlineCode",{parentName:"p"},"getId()")," method."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'class MyCustomView extends View {\n   ...\n   public void onReceiveNativeEvent() {\n      WritableMap event = Arguments.createMap();\n      event.putString("message", "MyMessage");\n      ReactContext reactContext = (ReactContext)getContext();\n      reactContext.getJSModule(RCTEventEmitter.class).receiveEvent(\n          getId(),\n          "topChange",\n          event);\n    }\n}\n')),Object(r.b)("p",null,"To map the ",Object(r.b)("inlineCode",{parentName:"p"},"topChange")," event name to the ",Object(r.b)("inlineCode",{parentName:"p"},"onChange")," callback prop in JavaScript, register it by overriding the ",Object(r.b)("inlineCode",{parentName:"p"},"getExportedCustomBubblingEventTypeConstants")," method in your ",Object(r.b)("inlineCode",{parentName:"p"},"ViewManager"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'public class ReactImageManager extends SimpleViewManager<MyCustomView> {\n    ...\n    public Map getExportedCustomBubblingEventTypeConstants() {\n        return MapBuilder.builder()\n            .put(\n                "topChange",\n                MapBuilder.of(\n                    "phasedRegistrationNames",\n                    MapBuilder.of("bubbled", "onChange")))\n                    .build();\n    }\n}\n')),Object(r.b)("p",null,"This callback is invoked with the raw event, which we typically process in the wrapper component to make a simpler API:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"// MyCustomView.js\n\nclass MyCustomView extends React.Component {\n  constructor(props) {\n    super(props);\n    this._onChange = this._onChange.bind(this);\n  }\n  _onChange(event: Event) {\n    if (!this.props.onChangeMessage) {\n      return;\n    }\n    this.props.onChangeMessage(event.nativeEvent.message);\n  }\n  render() {\n    return <RCTMyCustomView {...this.props} onChange={this._onChange} />;\n  }\n}\nMyCustomView.propTypes = {\n  /**\n   * Callback that is called continuously when the user is dragging the map.\n   */\n  onChangeMessage: PropTypes.func,\n  ...\n};\n\nvar RCTMyCustomView = requireNativeComponent(`RCTMyCustomView`);\n")))}s.isMDXComponent=!0}}]);