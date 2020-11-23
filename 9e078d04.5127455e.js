(window.webpackJsonp=window.webpackJsonp||[]).push([[587],{1006:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return m}));var n=a(0),l=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var c=l.a.createContext({}),d=function(e){var t=l.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},s=function(e){var t=d(e.components);return l.a.createElement(c.Provider,{value:t},e.children)},A={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},p=l.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=d(a),p=n,m=s["".concat(i,".").concat(p)]||s[p]||A[p]||r;return a?l.a.createElement(m,b(b({ref:t},c),{},{components:a})):l.a.createElement(m,b({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=p;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:n,i[1]=b;for(var c=2;c<r;c++)i[c]=a[c];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},667:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return d}));var n=a(2),l=a(7),r=(a(0),a(1006)),i={id:"text-style-props",title:"Text Style Props"},b={unversionedId:"text-style-props",id:"text-style-props",isDocsHomePage:!1,title:"Text Style Props",description:"Example",source:"@site/../docs/text-style-props.md",slug:"/text-style-props",permalink:"/docs/next/text-style-props",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/text-style-props.md",version:"current",lastUpdatedAt:1595510096,sidebar:"components",previous:{title:"Shadow Props",permalink:"/docs/next/shadow-props"},next:{title:"View Style Props",permalink:"/docs/next/view-style-props"}},o=[{value:"Example",id:"example",children:[]},{value:"Props",id:"props",children:[{value:"<code>color</code>",id:"color",children:[]},{value:"<code>fontFamily</code>",id:"fontfamily",children:[]},{value:"<code>fontSize</code>",id:"fontsize",children:[]},{value:"<code>fontStyle</code>",id:"fontstyle",children:[]},{value:"<code>fontWeight</code>",id:"fontweight",children:[]},{value:'<code>includeFontPadding</code> <div class="label android">Android</div>',id:"includefontpadding-android",children:[]},{value:"<code>fontVariant</code>",id:"fontvariant",children:[]},{value:"<code>letterSpacing</code>",id:"letterspacing",children:[]},{value:"<code>lineHeight</code>",id:"lineheight",children:[]},{value:"<code>textAlign</code>",id:"textalign",children:[]},{value:'<code>textAlignVertical</code> <div class="label android">Android</div>',id:"textalignvertical-android",children:[]},{value:'<code>textDecorationColor</code> <div class="label ios">iOS</div>',id:"textdecorationcolor-ios",children:[]},{value:"<code>textDecorationLine</code>",id:"textdecorationline",children:[]},{value:'<code>textDecorationStyle</code> <div class="label ios">iOS</div>',id:"textdecorationstyle-ios",children:[]},{value:"<code>textShadowColor</code>",id:"textshadowcolor",children:[]},{value:"<code>textShadowOffset</code>",id:"textshadowoffset",children:[]},{value:"<code>textShadowRadius</code>",id:"textshadowradius",children:[]},{value:"<code>textTransform</code>",id:"texttransform",children:[]},{value:'<code>writingDirection</code> <div class="label ios">iOS</div>',id:"writingdirection-ios",children:[]}]}],c={rightToc:o};function d(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"example"},"Example"),Object(r.b)("div",{className:"snack-player","data-snack-name":"TextStyleProps","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20FlatList%2C%20Platform%2C%20ScrollView%2C%20Slider%2C%20StyleSheet%2C%20Switch%2C%20Text%2C%20TouchableWithoutFeedback%2C%20View%20%7D%20from%20%22react-native%22%3B%0Aimport%20Constants%20from%20%22expo-constants%22%3B%0A%0Aconst%20fontStyles%20%3D%20%5B%22normal%22%2C%20%22italic%22%5D%3B%0Aconst%20fontVariants%20%3D%20%5B%0A%20%20undefined%2C%0A%20%20%22small-caps%22%2C%0A%20%20%22oldstyle-nums%22%2C%0A%20%20%22lining-nums%22%2C%0A%20%20%22tabular-nums%22%2C%0A%20%20%22proportional-nums%22%0A%5D%3B%0Aconst%20fontWeights%20%3D%20%5B%0A%20%20%22normal%22%2C%0A%20%20%22bold%22%2C%0A%20%20%22100%22%2C%0A%20%20%22200%22%2C%0A%20%20%22300%22%2C%0A%20%20%22400%22%2C%0A%20%20%22500%22%2C%0A%20%20%22600%22%2C%0A%20%20%22700%22%2C%0A%20%20%22800%22%2C%0A%20%20%22900%22%0A%5D%3B%0Aconst%20textAlignments%20%3D%20%5B%22auto%22%2C%20%22left%22%2C%20%22right%22%2C%20%22center%22%2C%20%22justify%22%5D%3B%0Aconst%20textDecorationLines%20%3D%20%5B%0A%20%20%22none%22%2C%0A%20%20%22underline%22%2C%0A%20%20%22line-through%22%2C%0A%20%20%22underline%20line-through%22%0A%5D%3B%0Aconst%20textDecorationStyles%20%3D%20%5B%22solid%22%2C%20%22double%22%2C%20%22dotted%22%2C%20%22dashed%22%5D%3B%0Aconst%20textTransformations%20%3D%20%5B%22none%22%2C%20%22uppercase%22%2C%20%22lowercase%22%2C%20%22capitalize%22%5D%3B%0Aconst%20textAlignmentsVertical%20%3D%20%5B%22auto%22%2C%20%22top%22%2C%20%22bottom%22%2C%20%22center%22%5D%3B%0Aconst%20writingDirections%20%3D%20%5B%22auto%22%2C%20%22ltr%22%2C%20%22rtl%22%5D%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5BfontSize%2C%20setFontSize%5D%20%3D%20useState(10)%3B%0A%20%20const%20%5BfontStyleIdx%2C%20setFontStyleIdx%5D%20%3D%20useState(0)%3B%0A%20%20const%20%5BfontWeightIdx%2C%20setFontWeightIdx%5D%20%3D%20useState(0)%3B%0A%20%20const%20%5BlineHeight%2C%20setLineHeight%5D%20%3D%20useState(10)%3B%0A%20%20const%20%5BtextAlignIdx%2C%20setTextAlignIdx%5D%20%3D%20useState(0)%3B%0A%20%20const%20%5BtextDecorationLineIdx%2C%20setTextDecorationLineIdx%5D%20%3D%20useState(0)%3B%0A%20%20const%20%5BincludeFontPadding%2C%20setIncludeFontPadding%5D%20%3D%20useState(false)%3B%0A%20%20const%20%5BtextVerticalAlignIdx%2C%20setTextVerticalAlignIdx%5D%20%3D%20useState(0)%3B%0A%20%20const%20%5BfontVariantIdx%2C%20setFontVariantIdx%5D%20%3D%20useState(0)%3B%0A%20%20const%20%5BletterSpacing%2C%20setLetterSpacing%5D%20%3D%20useState(0)%3B%0A%20%20const%20%5BtextDecorationStyleIdx%2C%20setTextDecorationStyleIdx%5D%20%3D%20useState(0)%3B%0A%20%20const%20%5BtextTransformIdx%2C%20setTextTransformIdx%5D%20%3D%20useState(0)%3B%0A%20%20const%20%5BwritingDirectionIdx%2C%20setWritingDirectionIdx%5D%20%3D%20useState(0)%3B%0A%20%20const%20%5BtextShadowRadius%2C%20setTextShadowRadius%5D%20%3D%20useState(0)%3B%0A%20%20const%20%5BtextShadowOffset%2C%20setTextShadowOffset%5D%20%3D%20useState(%7B%0A%20%20%20%20height%3A%200%2C%0A%20%20%20%20width%3A%200%0A%20%20%7D)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CText%0A%20%20%20%20%20%20%20%20style%3D%7B%5B%0A%20%20%20%20%20%20%20%20%20%20styles.paragraph%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20fontSize%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20fontStyle%3A%20fontStyles%5BfontStyleIdx%5D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20fontWeight%3A%20fontWeights%5BfontWeightIdx%5D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20lineHeight%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20textAlign%3A%20textAlignments%5BtextAlignIdx%5D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20textDecorationLine%3A%20textDecorationLines%5BtextDecorationLineIdx%5D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20textTransform%3A%20textTransformations%5BtextTransformIdx%5D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20textAlignVertical%3A%20textAlignmentsVertical%5BtextVerticalAlignIdx%5D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20fontVariant%3A%20%5BfontVariants%5BfontVariantIdx%5D%5D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20letterSpacing%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20includeFontPadding%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20textDecorationStyle%3A%20textDecorationStyles%5BtextDecorationStyleIdx%5D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20writingDirection%3A%20writingDirections%5BwritingDirectionIdx%5D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20textShadowOffset%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20textShadowRadius%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%5D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20Lorem%20Ipsum%20is%20simply%20dummy%20text%20of%20the%20printing%20and%20typesetting%0A%20%20%20%20%20%20%20%20industry.%20112%20Likes%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3CScrollView%3E%0A%20%20%20%20%20%20%20%20%3CView%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%3ECommon%20platform%20properties%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3CCustomSlider%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3D%22Text%20Shadow%20Offset%20-%20Height%22%0A%20%20%20%20%20%20%20%20%20%20%20%20value%3D%7BtextShadowOffset.height%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20minimumValue%3D%7B-40%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20maximumValue%3D%7B40%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20handleValueChange%3D%7Bval%20%3D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20setTextShadowOffset(prev%20%3D%3E%20(%7B%20...prev%2C%20height%3A%20val%20%7D))%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CCustomSlider%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3D%22Text%20Shadow%20Offset%20-%20Width%22%0A%20%20%20%20%20%20%20%20%20%20%20%20value%3D%7BtextShadowOffset.width%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20minimumValue%3D%7B-40%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20maximumValue%3D%7B40%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20handleValueChange%3D%7Bval%20%3D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20setTextShadowOffset(prev%20%3D%3E%20(%7B%20...prev%2C%20width%3A%20val%20%7D))%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CCustomSlider%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3D%22Font%20Size%22%0A%20%20%20%20%20%20%20%20%20%20%20%20value%3D%7BfontSize%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20maximumValue%3D%7B40%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20handleValueChange%3D%7BsetFontSize%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CCustomPicker%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3D%22Font%20Style%22%0A%20%20%20%20%20%20%20%20%20%20%20%20data%3D%7BfontStyles%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20currentIndex%3D%7BfontStyleIdx%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20onSelected%3D%7BsetFontStyleIdx%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CCustomPicker%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3D%22Font%20Weight%22%0A%20%20%20%20%20%20%20%20%20%20%20%20data%3D%7BfontWeights%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20currentIndex%3D%7BfontWeightIdx%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20onSelected%3D%7BsetFontWeightIdx%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CCustomSlider%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3D%22Line%20Height%22%0A%20%20%20%20%20%20%20%20%20%20%20%20value%3D%7BlineHeight%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20minimumValue%3D%7B10%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20maximumValue%3D%7B50%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20handleValueChange%3D%7BsetLineHeight%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CCustomPicker%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3D%22Text%20Align%22%0A%20%20%20%20%20%20%20%20%20%20%20%20data%3D%7BtextAlignments%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20currentIndex%3D%7BtextAlignIdx%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20onSelected%3D%7BsetTextAlignIdx%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CCustomPicker%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3D%22Text%20Decoration%20Line%22%0A%20%20%20%20%20%20%20%20%20%20%20%20data%3D%7BtextDecorationLines%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20currentIndex%3D%7BtextDecorationLineIdx%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20onSelected%3D%7BsetTextDecorationLineIdx%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CCustomSlider%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3D%22Text%20Shadow%20Radius%22%0A%20%20%20%20%20%20%20%20%20%20%20%20value%3D%7BtextShadowRadius%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20handleValueChange%3D%7BsetTextShadowRadius%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CCustomPicker%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3D%22Font%20Variant%22%0A%20%20%20%20%20%20%20%20%20%20%20%20data%3D%7BfontVariants%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20currentIndex%3D%7BfontVariantIdx%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20onSelected%3D%7BsetFontVariantIdx%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CCustomSlider%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3D%22Letter%20Spacing%22%0A%20%20%20%20%20%20%20%20%20%20%20%20step%3D%7B0.1%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20value%3D%7BletterSpacing%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20handleValueChange%3D%7BsetLetterSpacing%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CCustomPicker%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3D%22Text%20Transform%22%0A%20%20%20%20%20%20%20%20%20%20%20%20data%3D%7BtextTransformations%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20currentIndex%3D%7BtextTransformIdx%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20onSelected%3D%7BsetTextTransformIdx%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%7BPlatform.OS%20%3D%3D%3D%20%22android%22%20%26%26%20(%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.platformContainer%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.platformContainerTitle%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20Android%20only%20properties%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CCustomPicker%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3D%22Text%20Vertical%20Align%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20data%3D%7BtextAlignmentsVertical%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20currentIndex%3D%7BtextVerticalAlignIdx%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20onSelected%3D%7BsetTextVerticalAlignIdx%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CCustomSwitch%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3D%22Include%20Font%20Padding%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20handleValueChange%3D%7BsetIncludeFontPadding%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20value%3D%7BincludeFontPadding%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20)%7D%0A%20%20%20%20%20%20%20%20%7BPlatform.OS%20%3D%3D%3D%20%22ios%22%20%26%26%20(%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.platformContainer%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.platformContainerTitle%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20iOS%20only%20properties%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CCustomPicker%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3D%22Text%20Decoration%20Style%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20data%3D%7BtextDecorationStyles%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20currentIndex%3D%7BtextDecorationStyleIdx%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20onSelected%3D%7BsetTextDecorationStyleIdx%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CCustomPicker%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3D%22Writing%20Direction%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20data%3D%7BwritingDirections%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20currentIndex%3D%7BwritingDirectionIdx%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20onSelected%3D%7BsetWritingDirectionIdx%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20)%7D%0A%20%20%20%20%20%20%3C%2FScrollView%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20CustomSwitch%20%3D%20(%7B%20label%2C%20handleValueChange%2C%20value%20%7D)%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.title%7D%3E%7Blabel%7D%3C%2FText%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7B%7B%20alignItems%3A%20%22flex-start%22%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%3CSwitch%0A%20%20%20%20%20%20%20%20%20%20trackColor%3D%7B%7B%20false%3A%20%22%23767577%22%2C%20true%3A%20%22%23DAA520%22%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20thumbColor%3D%7Bvalue%20%3F%20%22%23DAA520%22%20%3A%20%22%23f4f3f4%22%7D%0A%20%20%20%20%20%20%20%20%20%20onValueChange%3D%7BhandleValueChange%7D%0A%20%20%20%20%20%20%20%20%20%20value%3D%7Bvalue%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3C%2F%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20CustomSlider%20%3D%20(%7B%0A%20%20label%2C%0A%20%20handleValueChange%2C%0A%20%20step%20%3D%201%2C%0A%20%20minimumValue%20%3D%200%2C%0A%20%20maximumValue%20%3D%2010%2C%0A%20%20value%0A%7D)%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%7Blabel%20%26%26%20(%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.title%7D%3E%7B%60%24%7Blabel%7D%20(%24%7Bvalue.toFixed(2)%7D)%60%7D%3C%2FText%3E%0A%20%20%20%20%20%20)%7D%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.wrapperHorizontal%7D%3E%0A%20%20%20%20%20%20%20%20%3CSlider%0A%20%20%20%20%20%20%20%20%20%20thumbTintColor%3D%22%23DAA520%22%0A%20%20%20%20%20%20%20%20%20%20minimumTrackTintColor%3D%22%23DAA520%22%0A%20%20%20%20%20%20%20%20%20%20minimumValue%3D%7BminimumValue%7D%0A%20%20%20%20%20%20%20%20%20%20maximumValue%3D%7BmaximumValue%7D%0A%20%20%20%20%20%20%20%20%20%20step%3D%7Bstep%7D%0A%20%20%20%20%20%20%20%20%20%20onValueChange%3D%7BhandleValueChange%7D%0A%20%20%20%20%20%20%20%20%20%20value%3D%7Bvalue%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3C%2F%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20CustomPicker%20%3D%20(%7B%20label%2C%20data%2C%20currentIndex%2C%20onSelected%20%7D)%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.title%7D%3E%7Blabel%7D%3C%2FText%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.wrapperHorizontal%7D%3E%0A%20%20%20%20%20%20%20%20%3CFlatList%0A%20%20%20%20%20%20%20%20%20%20bounces%0A%20%20%20%20%20%20%20%20%20%20horizontal%0A%20%20%20%20%20%20%20%20%20%20data%3D%7Bdata%7D%0A%20%20%20%20%20%20%20%20%20%20keyExtractor%3D%7B(item%2C%20idx)%20%3D%3E%20String(item)%7D%0A%20%20%20%20%20%20%20%20%20%20renderItem%3D%7B(%7B%20item%2C%20index%20%7D)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20selected%20%3D%20index%20%3D%3D%3D%20currentIndex%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20(%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CTouchableWithoutFeedback%20onPress%3D%7B()%20%3D%3E%20onSelected(index)%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7B%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20styles.itemStyleHorizontal%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20selected%20%26%26%20styles.itemSelectedStyleHorizontal%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20textAlign%3A%20%22center%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20selected%20%3F%20%22black%22%20%3A%20%22grey%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20fontWeight%3A%20selected%20%3F%20%22bold%22%20%3A%20%22normal%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7Bitem%20%2B%20%22%22%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FTouchableWithoutFeedback%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20)%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3C%2F%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20paddingTop%3A%20Constants.statusBarHeight%2C%0A%20%20%20%20backgroundColor%3A%20%22%23ecf0f1%22%2C%0A%20%20%20%20padding%3A%208%0A%20%20%7D%2C%0A%20%20paragraph%3A%20%7B%0A%20%20%20%20color%3A%20%22black%22%2C%0A%20%20%20%20textDecorationColor%3A%20%22yellow%22%2C%0A%20%20%20%20textShadowColor%3A%20%22red%22%2C%0A%20%20%20%20textShadowRadius%3A%201%2C%0A%20%20%20%20margin%3A%2024%0A%20%20%7D%2C%0A%20%20wrapperHorizontal%3A%20%7B%0A%20%20%20%20height%3A%2054%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20color%3A%20%22black%22%2C%0A%20%20%20%20marginBottom%3A%2012%0A%20%20%7D%2C%0A%20%20itemStyleHorizontal%3A%20%7B%0A%20%20%20%20marginRight%3A%2010%2C%0A%20%20%20%20height%3A%2050%2C%0A%20%20%20%20padding%3A%208%2C%0A%20%20%20%20borderWidth%3A%201%2C%0A%20%20%20%20borderColor%3A%20%22grey%22%2C%0A%20%20%20%20borderRadius%3A%2025%2C%0A%20%20%20%20textAlign%3A%20%22center%22%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20itemSelectedStyleHorizontal%3A%20%7B%0A%20%20%20%20borderWidth%3A%202%2C%0A%20%20%20%20borderColor%3A%20%22%23DAA520%22%0A%20%20%7D%2C%0A%20%20platformContainer%3A%20%7B%0A%20%20%20%20marginTop%3A%208%2C%0A%20%20%20%20borderTopWidth%3A%201%0A%20%20%7D%2C%0A%20%20platformContainerTitle%3A%20%7B%0A%20%20%20%20marginTop%3A%208%0A%20%20%7D%2C%0A%20%20title%3A%20%7B%0A%20%20%20%20fontWeight%3A%20%22bold%22%2C%0A%20%20%20%20marginVertical%3A%204%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true"}),Object(r.b)("h1",{id:"reference"},"Reference"),Object(r.b)("h2",{id:"props"},"Props"),Object(r.b)("h3",{id:"color"},Object(r.b)("inlineCode",{parentName:"h3"},"color")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/colors"}),"color"))))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"fontfamily"},Object(r.b)("inlineCode",{parentName:"h3"},"fontFamily")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"fontsize"},Object(r.b)("inlineCode",{parentName:"h3"},"fontSize")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"fontstyle"},Object(r.b)("inlineCode",{parentName:"h3"},"fontStyle")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"enum(",Object(r.b)("inlineCode",{parentName:"td"},"'normal'"),", ",Object(r.b)("inlineCode",{parentName:"td"},"'italic'"),")")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"fontweight"},Object(r.b)("inlineCode",{parentName:"h3"},"fontWeight")),Object(r.b)("p",null,"Specifies font weight. The values ",Object(r.b)("inlineCode",{parentName:"p"},"'normal'")," and ",Object(r.b)("inlineCode",{parentName:"p"},"'bold'")," are supported for most fonts. Not all fonts have a variant for each of the numeric values, in that case the closest one is chosen."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"enum(",Object(r.b)("inlineCode",{parentName:"td"},"'normal'"),", ",Object(r.b)("inlineCode",{parentName:"td"},"'bold'"),", ",Object(r.b)("inlineCode",{parentName:"td"},"'100'"),", ",Object(r.b)("inlineCode",{parentName:"td"},"'200'"),", ",Object(r.b)("inlineCode",{parentName:"td"},"'300'"),", ",Object(r.b)("inlineCode",{parentName:"td"},"'400'"),", ",Object(r.b)("inlineCode",{parentName:"td"},"'500'"),", ",Object(r.b)("inlineCode",{parentName:"td"},"'600'"),", ",Object(r.b)("inlineCode",{parentName:"td"},"'700'"),", ",Object(r.b)("inlineCode",{parentName:"td"},"'800'"),", ",Object(r.b)("inlineCode",{parentName:"td"},"'900'"),")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"'normal'"))))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"includefontpadding-android"},Object(r.b)("inlineCode",{parentName:"h3"},"includeFontPadding")," ",Object(r.b)("div",{class:"label android"},"Android")),Object(r.b)("p",null,"Set to ",Object(r.b)("inlineCode",{parentName:"p"},"false")," to remove extra font padding intended to make space for certain ascenders / descenders. With some fonts, this padding can make text look slightly misaligned when centered vertically. For best results also set ",Object(r.b)("inlineCode",{parentName:"p"},"textAlignVertical")," to ",Object(r.b)("inlineCode",{parentName:"p"},"center"),"."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"true"))))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"fontvariant"},Object(r.b)("inlineCode",{parentName:"h3"},"fontVariant")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"array of enum(",Object(r.b)("inlineCode",{parentName:"td"},"'small-caps'"),", ",Object(r.b)("inlineCode",{parentName:"td"},"'oldstyle-nums'"),", ",Object(r.b)("inlineCode",{parentName:"td"},"'lining-nums'"),", ",Object(r.b)("inlineCode",{parentName:"td"},"'tabular-nums'"),", ",Object(r.b)("inlineCode",{parentName:"td"},"'proportional-nums'"),")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"[]"))))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"letterspacing"},Object(r.b)("inlineCode",{parentName:"h3"},"letterSpacing")),Object(r.b)("p",null,"Increase or decrease the spacing between characters. By default there is no extra letter spacing."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"lineheight"},Object(r.b)("inlineCode",{parentName:"h3"},"lineHeight")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"textalign"},Object(r.b)("inlineCode",{parentName:"h3"},"textAlign")),Object(r.b)("p",null,"Specifies text alignment. On Android, the value 'justify' is only supported on Oreo (8.0) or above (API level >= 26). The value will fallback to ",Object(r.b)("inlineCode",{parentName:"p"},"left")," on lower Android versions."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"enum(",Object(r.b)("inlineCode",{parentName:"td"},"'auto'"),", ",Object(r.b)("inlineCode",{parentName:"td"},"'left'"),", ",Object(r.b)("inlineCode",{parentName:"td"},"'right'"),", ",Object(r.b)("inlineCode",{parentName:"td"},"'center'"),", ",Object(r.b)("inlineCode",{parentName:"td"},"'justify'"),")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"'auto'"))))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"textalignvertical-android"},Object(r.b)("inlineCode",{parentName:"h3"},"textAlignVertical")," ",Object(r.b)("div",{class:"label android"},"Android")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"enum(",Object(r.b)("inlineCode",{parentName:"td"},"'auto'"),", ",Object(r.b)("inlineCode",{parentName:"td"},"'top'"),", ",Object(r.b)("inlineCode",{parentName:"td"},"'bottom'"),", ",Object(r.b)("inlineCode",{parentName:"td"},"'center'"),")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"'auto'"))))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"textdecorationcolor-ios"},Object(r.b)("inlineCode",{parentName:"h3"},"textDecorationColor")," ",Object(r.b)("div",{class:"label ios"},"iOS")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/colors"}),"color"))))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"textdecorationline"},Object(r.b)("inlineCode",{parentName:"h3"},"textDecorationLine")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"enum(",Object(r.b)("inlineCode",{parentName:"td"},"'none'"),", ",Object(r.b)("inlineCode",{parentName:"td"},"'underline'"),", ",Object(r.b)("inlineCode",{parentName:"td"},"'line-through'"),", ",Object(r.b)("inlineCode",{parentName:"td"},"'underline line-through'"),")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"'none'"))))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"textdecorationstyle-ios"},Object(r.b)("inlineCode",{parentName:"h3"},"textDecorationStyle")," ",Object(r.b)("div",{class:"label ios"},"iOS")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"enum(",Object(r.b)("inlineCode",{parentName:"td"},"'solid'"),", ",Object(r.b)("inlineCode",{parentName:"td"},"'double'"),", ",Object(r.b)("inlineCode",{parentName:"td"},"'dotted'"),", ",Object(r.b)("inlineCode",{parentName:"td"},"'dashed'"),")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"'solid'"))))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"textshadowcolor"},Object(r.b)("inlineCode",{parentName:"h3"},"textShadowColor")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/colors"}),"color"))))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"textshadowoffset"},Object(r.b)("inlineCode",{parentName:"h3"},"textShadowOffset")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"object: { width?: number, height?: number }")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"textshadowradius"},Object(r.b)("inlineCode",{parentName:"h3"},"textShadowRadius")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"texttransform"},Object(r.b)("inlineCode",{parentName:"h3"},"textTransform")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"enum(",Object(r.b)("inlineCode",{parentName:"td"},"'none'"),", ",Object(r.b)("inlineCode",{parentName:"td"},"'uppercase'"),", ",Object(r.b)("inlineCode",{parentName:"td"},"'lowercase'"),", ",Object(r.b)("inlineCode",{parentName:"td"},"'capitalize'"),")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"'none'"))))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"writingdirection-ios"},Object(r.b)("inlineCode",{parentName:"h3"},"writingDirection")," ",Object(r.b)("div",{class:"label ios"},"iOS")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"enum(",Object(r.b)("inlineCode",{parentName:"td"},"'auto'"),", ",Object(r.b)("inlineCode",{parentName:"td"},"'ltr'"),", ",Object(r.b)("inlineCode",{parentName:"td"},"'rtl'"),")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"'auto'"))))))}d.isMDXComponent=!0}}]);