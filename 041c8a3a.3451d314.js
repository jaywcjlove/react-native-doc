(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{1006:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),p=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=p(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(t),b=a,m=d["".concat(i,".").concat(b)]||d[b]||u[b]||o;return t?r.a.createElement(m,s(s({ref:n},l),{},{components:t})):r.a.createElement(m,s({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=b;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},120:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return p}));var a=t(2),r=t(7),o=(t(0),t(1006)),i={id:"headless-js-android",title:"Headless JS"},s={unversionedId:"headless-js-android",id:"headless-js-android",isDocsHomePage:!1,title:"Headless JS",description:"Headless JS is a way to run tasks in JavaScript while your app is in the background. It can be used, for example, to sync fresh data, handle push notifications, or play music.",source:"@site/../docs/headless-js-android.md",slug:"/headless-js-android",permalink:"/docs/next/headless-js-android",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/headless-js-android.md",version:"current",lastUpdatedAt:1588856691,sidebar:"docs",previous:{title:"Native UI Components",permalink:"/docs/next/native-components-android"},next:{title:"Publishing to Google Play Store",permalink:"/docs/next/signed-apk-android"}},c=[{value:"The JS API",id:"the-js-api",children:[]},{value:"The Java API",id:"the-java-api",children:[]},{value:"Retries",id:"retries",children:[]},{value:"Caveats",id:"caveats",children:[]},{value:"Example Usage",id:"example-usage",children:[]}],l={rightToc:c};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Headless JS is a way to run tasks in JavaScript while your app is in the background. It can be used, for example, to sync fresh data, handle push notifications, or play music."),Object(o.b)("h2",{id:"the-js-api"},"The JS API"),Object(o.b)("p",null,"A task is a async function that you register on ",Object(o.b)("inlineCode",{parentName:"p"},"AppRegistry"),", similar to registering React applications:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import { AppRegistry } from 'react-native';\nAppRegistry.registerHeadlessTask('SomeTaskName', () =>\n  require('SomeTaskName')\n);\n")),Object(o.b)("p",null,"Then, in ",Object(o.b)("inlineCode",{parentName:"p"},"SomeTaskName.js"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"module.exports = async (taskData) => {\n  // do stuff\n};\n")),Object(o.b)("p",null,'You can do anything in your task such as network requests, timers and so on, as long as it doesn\'t touch UI. Once your task completes (i.e. the promise is resolved), React Native will go into "paused" mode (unless there are other tasks running, or there is a foreground app).'),Object(o.b)("h2",{id:"the-java-api"},"The Java API"),Object(o.b)("p",null,"Yes, this does still require some native code, but it's pretty thin. You need to extend ",Object(o.b)("inlineCode",{parentName:"p"},"HeadlessJsTaskService")," and override ",Object(o.b)("inlineCode",{parentName:"p"},"getTaskConfig"),", e.g.:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'package com.your_application_name;\nimport android.content.Intent;\nimport android.os.Bundle;\nimport com.facebook.react.HeadlessJsTaskService;\nimport com.facebook.react.bridge.Arguments;\nimport com.facebook.react.jstasks.HeadlessJsTaskConfig;\nimport javax.annotation.Nullable;\n\npublic class MyTaskService extends HeadlessJsTaskService {\n\n  @Override\n  protected @Nullable HeadlessJsTaskConfig getTaskConfig(Intent intent) {\n    Bundle extras = intent.getExtras();\n    if (extras != null) {\n      return new HeadlessJsTaskConfig(\n          "SomeTaskName",\n          Arguments.fromBundle(extras),\n          5000, // timeout for the task\n          false // optional: defines whether or not  the task is allowed in foreground. Default is false\n        );\n    }\n    return null;\n  }\n}\n')),Object(o.b)("p",null,"Then add the service to your ",Object(o.b)("inlineCode",{parentName:"p"},"AndroidManifest.xml")," file:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'<service android:name="com.example.MyTaskService" />\n')),Object(o.b)("p",null,"Now, whenever you ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.android.com/reference/android/content/Context.html#startService(android.content.Intent)"}),"start your service"),", e.g. as a periodic task or in response to some system event / broadcast, JS will spin up, run your task, then spin down."),Object(o.b)("p",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'Intent service = new Intent(getApplicationContext(), MyTaskService.class);\nBundle bundle = new Bundle();\n\nbundle.putString("foo", "bar");\nservice.putExtras(bundle);\n\ngetApplicationContext().startService(service);\n')),Object(o.b)("h2",{id:"retries"},"Retries"),Object(o.b)("p",null,"By default, the headless JS task will not perform any retries. In order to do so, you need to create a ",Object(o.b)("inlineCode",{parentName:"p"},"HeadlessJsRetryPolicy")," and throw a specific ",Object(o.b)("inlineCode",{parentName:"p"},"Error"),"."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"LinearCountingRetryPolicy")," is an implementation of ",Object(o.b)("inlineCode",{parentName:"p"},"HeadlessJsRetryPolicy")," that allows you to specify a maximum number of retries with a fixed delay between each attempt. If that does not suit your needs then you can implement your own ",Object(o.b)("inlineCode",{parentName:"p"},"HeadlessJsRetryPolicy"),". These policies can be passed as an extra argument to the ",Object(o.b)("inlineCode",{parentName:"p"},"HeadlessJsTaskConfig")," constructor, e.g."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"HeadlessJsRetryPolicy retryPolicy = new LinearCountingRetryPolicy(\n  3, // Max number of retry attempts\n  1000 // Delay between each retry attempt\n);\n\nreturn new HeadlessJsTaskConfig(\n  'SomeTaskName',\n  Arguments.fromBundle(extras),\n  5000,\n  false,\n  retryPolicy\n);\n")),Object(o.b)("p",null,"A retry attempt will only be made when a specific ",Object(o.b)("inlineCode",{parentName:"p"},"Error")," is thrown. Inside a headless JS task, you can import the error and throw it when a retry attempt is required."),Object(o.b)("p",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import {HeadlessJsTaskError} from 'HeadlessJsTask';\n\nmodule.exports = async (taskData) => {\n  const condition = ...;\n  if (!condition) {\n    throw new HeadlessJsTaskError();\n  }\n};\n")),Object(o.b)("p",null,"If you wish all errors to cause a retry attempt, you will need to catch them and throw the above error."),Object(o.b)("h2",{id:"caveats"},"Caveats"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The function passed to ",Object(o.b)("inlineCode",{parentName:"li"},"setTimeout")," does not always behave as expected. Instead the function is called only when the application is launched again. If you only need to wait, use the retry functionality."),Object(o.b)("li",{parentName:"ul"},"By default, your app will crash if you try to run a task while the app is in the foreground. This is to prevent developers from shooting themselves in the foot by doing a lot of work in a task and slowing the UI. You can pass a fourth ",Object(o.b)("inlineCode",{parentName:"li"},"boolean")," argument to control this behaviour."),Object(o.b)("li",{parentName:"ul"},"If you start your service from a ",Object(o.b)("inlineCode",{parentName:"li"},"BroadcastReceiver"),", make sure to call ",Object(o.b)("inlineCode",{parentName:"li"},"HeadlessJsTaskService.acquireWakeLockNow()")," before returning from ",Object(o.b)("inlineCode",{parentName:"li"},"onReceive()"),".")),Object(o.b)("h2",{id:"example-usage"},"Example Usage"),Object(o.b)("p",null,"Service can be started from Java API. First you need to decide when the service should be started and implement your solution accordingly. Here is an example that reacts to network connection change."),Object(o.b)("p",null,"Following lines shows part of Android manifest file for registering broadcast receiver."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<receiver android:name=".NetworkChangeReceiver" >\n  <intent-filter>\n    <action android:name="android.net.conn.CONNECTIVITY_CHANGE" />\n  </intent-filter>\n</receiver>\n')),Object(o.b)("p",null,"Broadcast receiver then handles intent that was broadcasted in onReceive function. This is a great place to check whether your app is on foreground or not. If app is not on foreground we can prepare our intent to be started, with no information or additional information bundled using ",Object(o.b)("inlineCode",{parentName:"p"},"putExtra")," (keep in mind bundle can handle only parcelable values). In the end service is started and wakelock is acquired."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'public class NetworkChangeReceiver extends BroadcastReceiver {\n\n    @Override\n    public void onReceive(final Context context, final Intent intent) {\n        /**\n          This part will be called everytime network connection is changed\n          e.g. Connected -> Not Connected\n        **/\n        if (!isAppOnForeground((context))) {\n            /**\n              We will start our service and send extra info about\n              network connections\n            **/\n            boolean hasInternet = isNetworkAvailable(context);\n            Intent serviceIntent = new Intent(context, MyTaskService.class);\n            serviceIntent.putExtra("hasInternet", hasInternet);\n            context.startService(serviceIntent);\n            HeadlessJsTaskService.acquireWakeLockNow(context);\n        }\n    }\n\n    private boolean isAppOnForeground(Context context) {\n        /**\n          We need to check if app is in foreground otherwise the app will crash.\n         http://stackoverflow.com/questions/8489993/check-android-application-is-in-foreground-or-not\n        **/\n        ActivityManager activityManager = (ActivityManager) context.getSystemService(Context.ACTIVITY_SERVICE);\n        List<ActivityManager.RunningAppProcessInfo> appProcesses =\n        activityManager.getRunningAppProcesses();\n        if (appProcesses == null) {\n            return false;\n        }\n        final String packageName = context.getPackageName();\n        for (ActivityManager.RunningAppProcessInfo appProcess : appProcesses) {\n            if (appProcess.importance ==\n            ActivityManager.RunningAppProcessInfo.IMPORTANCE_FOREGROUND &&\n             appProcess.processName.equals(packageName)) {\n                return true;\n            }\n        }\n        return false;\n    }\n\n    public static boolean isNetworkAvailable(Context context) {\n        ConnectivityManager cm = (ConnectivityManager)\n        context.getSystemService(Context.CONNECTIVITY_SERVICE);\n        NetworkInfo netInfo = cm.getActiveNetworkInfo();\n        return (netInfo != null && netInfo.isConnected());\n    }\n\n\n}\n')))}p.isMDXComponent=!0}}]);