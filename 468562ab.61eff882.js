(window.webpackJsonp=window.webpackJsonp||[]).push([[277],{1006:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),b=l(n),p=a,h=b["".concat(i,".").concat(p)]||b[p]||u[p]||r;return n?o.a.createElement(h,c(c({ref:t},s),{},{components:n})):o.a.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},362:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return l}));var a=n(2),o=n(7),r=(n(0),n(1006)),i={id:"listviewdatasource",title:"ListViewDataSource"},c={unversionedId:"listviewdatasource",id:"version-0.61/listviewdatasource",isDocsHomePage:!1,title:"ListViewDataSource",description:"Provides efficient data processing and access to the ListView component. A ListViewDataSource is created with functions for extracting data from the input blob, and comparing elements (with default implementations for convenience). The input blob can be as flat as an array of strings, or an object with rows nested inside section objects.",source:"@site/versioned_docs/version-0.61/listviewdatasource.md",slug:"/listviewdatasource",permalink:"/docs/0.61/listviewdatasource",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.61/listviewdatasource.md",version:"0.61",lastUpdatedAt:1603945169},d=[{value:"Methods",id:"methods",children:[]},{value:"Methods",id:"methods-1",children:[{value:"<code>constructor()</code>",id:"constructor",children:[]},{value:"<code>cloneWithRows()</code>",id:"clonewithrows",children:[]},{value:"<code>cloneWithRowsAndSections()</code>",id:"clonewithrowsandsections",children:[]},{value:"<code>getRowCount()</code>",id:"getrowcount",children:[]},{value:"<code>getRowAndSectionCount()</code>",id:"getrowandsectioncount",children:[]},{value:"<code>rowShouldUpdate()</code>",id:"rowshouldupdate",children:[]},{value:"<code>getRowData()</code>",id:"getrowdata",children:[]},{value:"<code>getRowIDForFlatIndex()</code>",id:"getrowidforflatindex",children:[]},{value:"<code>getSectionIDForFlatIndex()</code>",id:"getsectionidforflatindex",children:[]},{value:"<code>getSectionLengths()</code>",id:"getsectionlengths",children:[]},{value:"<code>sectionHeaderShouldUpdate()</code>",id:"sectionheadershouldupdate",children:[]},{value:"<code>getSectionHeaderData()</code>",id:"getsectionheaderdata",children:[]}]}],s={rightToc:d};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Provides efficient data processing and access to the ",Object(r.b)("inlineCode",{parentName:"p"},"ListView")," component. A ",Object(r.b)("inlineCode",{parentName:"p"},"ListViewDataSource")," is created with functions for extracting data from the input blob, and comparing elements (with default implementations for convenience). The input blob can be as flat as an array of strings, or an object with rows nested inside section objects."),Object(r.b)("p",null,"To update the data in the datasource, use ",Object(r.b)("inlineCode",{parentName:"p"},"cloneWithRows")," (or ",Object(r.b)("inlineCode",{parentName:"p"},"cloneWithRowsAndSections")," if you care about sections). The data in the data source is immutable, so you can't modify it directly. The clone methods take in the new data and compute a diff for each row so ListView knows whether to re-render it or not."),Object(r.b)("p",null,"In this example, a component receives data in chunks, handled by ",Object(r.b)("inlineCode",{parentName:"p"},"_onDataArrived"),", which concats the new data onto the old data and updates the data source. We use ",Object(r.b)("inlineCode",{parentName:"p"},"concat")," to create a new array - mutating ",Object(r.b)("inlineCode",{parentName:"p"},"this._data"),", e.g. with ",Object(r.b)("inlineCode",{parentName:"p"},"this._data.push(newRowData)"),", would be an error. ",Object(r.b)("inlineCode",{parentName:"p"},"_rowHasChanged")," understands the shape of the row data and knows how to efficiently compare it."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"getInitialState: function() {\n  var ds = new ListView.DataSource({rowHasChanged: this._rowHasChanged});\n  return {ds};\n},\n_onDataArrived(newData) {\n  this._data = this._data.concat(newData);\n  this.setState({\n    ds: this.state.ds.cloneWithRows(this._data)\n  });\n}\n")),Object(r.b)("h3",{id:"methods"},"Methods"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/0.61/listviewdatasource#constructor"}),Object(r.b)("inlineCode",{parentName:"a"},"constructor"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/0.61/listviewdatasource#clonewithrows"}),Object(r.b)("inlineCode",{parentName:"a"},"cloneWithRows"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/0.61/listviewdatasource#clonewithrowsandsections"}),Object(r.b)("inlineCode",{parentName:"a"},"cloneWithRowsAndSections"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/0.61/listviewdatasource#getrowcount"}),Object(r.b)("inlineCode",{parentName:"a"},"getRowCount"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/0.61/listviewdatasource#getrowandsectioncount"}),Object(r.b)("inlineCode",{parentName:"a"},"getRowAndSectionCount"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/0.61/listviewdatasource#rowshouldupdate"}),Object(r.b)("inlineCode",{parentName:"a"},"rowShouldUpdate"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/0.61/listviewdatasource#getrowdata"}),Object(r.b)("inlineCode",{parentName:"a"},"getRowData"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/0.61/listviewdatasource#getrowidforflatindex"}),Object(r.b)("inlineCode",{parentName:"a"},"getRowIDForFlatIndex"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/0.61/listviewdatasource#getsectionidforflatindex"}),Object(r.b)("inlineCode",{parentName:"a"},"getSectionIDForFlatIndex"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/0.61/listviewdatasource#getsectionlengths"}),Object(r.b)("inlineCode",{parentName:"a"},"getSectionLengths"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/0.61/listviewdatasource#sectionheadershouldupdate"}),Object(r.b)("inlineCode",{parentName:"a"},"sectionHeaderShouldUpdate"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/0.61/listviewdatasource#getsectionheaderdata"}),Object(r.b)("inlineCode",{parentName:"a"},"getSectionHeaderData")))),Object(r.b)("hr",null),Object(r.b)("h1",{id:"reference"},"Reference"),Object(r.b)("h2",{id:"methods-1"},"Methods"),Object(r.b)("h3",{id:"constructor"},Object(r.b)("inlineCode",{parentName:"h3"},"constructor()")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"constructor(params);\n")),Object(r.b)("p",null,"You can provide custom extraction and ",Object(r.b)("inlineCode",{parentName:"p"},"hasChanged")," functions for section headers and rows. If absent, data will be extracted with the ",Object(r.b)("inlineCode",{parentName:"p"},"defaultGetRowData")," and ",Object(r.b)("inlineCode",{parentName:"p"},"defaultGetSectionHeaderData")," functions."),Object(r.b)("p",null,"The default extractor expects data of one of the following forms:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{})," { sectionID_1: { rowID_1: <rowData1>, ... }, ... }\n")),Object(r.b)("p",null,"or"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{})," { sectionID_1: [ <rowData1>, <rowData2>, ... ], ... }\n")),Object(r.b)("p",null,"or"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{})," [ [ <rowData1>, <rowData2>, ... ], ... ]\n")),Object(r.b)("p",null,"The constructor takes in a params argument that can contain any of the following:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"getRowData(dataBlob, sectionID, rowID);"),Object(r.b)("li",{parentName:"ul"},"getSectionHeaderData(dataBlob, sectionID);"),Object(r.b)("li",{parentName:"ul"},"rowHasChanged(prevRowData, nextRowData);"),Object(r.b)("li",{parentName:"ul"},"sectionHeaderHasChanged(prevSectionData, nextSectionData);")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"clonewithrows"},Object(r.b)("inlineCode",{parentName:"h3"},"cloneWithRows()")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"cloneWithRows(dataBlob, rowIdentities);\n")),Object(r.b)("p",null,"Clones this ",Object(r.b)("inlineCode",{parentName:"p"},"ListViewDataSource")," with the specified ",Object(r.b)("inlineCode",{parentName:"p"},"dataBlob")," and ",Object(r.b)("inlineCode",{parentName:"p"},"rowIdentities"),". The ",Object(r.b)("inlineCode",{parentName:"p"},"dataBlob")," an arbitrary blob of data. At construction an extractor to get the interesting information was defined (or the default was used)."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"rowIdentities")," is a 2D array of identifiers for rows. ie. [","['a1', 'a2']",", ","['b1', 'b2', 'b3']",", ...]. If not provided, it's assumed that the keys of the section data are the row identities."),Object(r.b)("p",null,"Note: This function does NOT clone the data in this data source. It only passes the functions defined at construction to a new data source with the data specified. If you wish to maintain the existing data you must handle merging of old and new data separately and then pass that into this function as the ",Object(r.b)("inlineCode",{parentName:"p"},"dataBlob"),"."),Object(r.b)("hr",null),Object(r.b)("h3",{id:"clonewithrowsandsections"},Object(r.b)("inlineCode",{parentName:"h3"},"cloneWithRowsAndSections()")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"cloneWithRowsAndSections(\n  dataBlob,\n  sectionIdentities,\n  rowIdentities\n);\n")),Object(r.b)("p",null,"This performs the same function as the ",Object(r.b)("inlineCode",{parentName:"p"},"cloneWithRows")," function but here you also specify what your ",Object(r.b)("inlineCode",{parentName:"p"},"sectionIdentities")," are. If you don't care about sections you should safely be able to use ",Object(r.b)("inlineCode",{parentName:"p"},"cloneWithRows"),"."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"sectionIdentities")," is an array of identifiers for sections. ie. ","['s1', 's2', ...]",". The identifiers should correspond to the keys or array indexes of the data you wish to include. If not provided, it's assumed that the keys of dataBlob are the section identities."),Object(r.b)("p",null,"Note: this returns a new object!"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"const dataSource = ds.cloneWithRowsAndSections({\n  addresses: ['row 1', 'row 2'],\n  phone_numbers: ['data 1', 'data 2'],\n}, ['phone_numbers']);\n")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"getrowcount"},Object(r.b)("inlineCode",{parentName:"h3"},"getRowCount()")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"getRowCount();\n")),Object(r.b)("p",null,"Returns the total number of rows in the data source."),Object(r.b)("p",null,"If you are specifying the rowIdentities or sectionIdentities, then ",Object(r.b)("inlineCode",{parentName:"p"},"getRowCount")," will return the number of rows in the filtered data source."),Object(r.b)("hr",null),Object(r.b)("h3",{id:"getrowandsectioncount"},Object(r.b)("inlineCode",{parentName:"h3"},"getRowAndSectionCount()")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"getRowAndSectionCount();\n")),Object(r.b)("p",null,"Returns the total number of rows in the data source (see ",Object(r.b)("inlineCode",{parentName:"p"},"getRowCount")," for how this is calculated) plus the number of sections in the data."),Object(r.b)("p",null,"If you are specifying the rowIdentities or sectionIdentities, then ",Object(r.b)("inlineCode",{parentName:"p"},"getRowAndSectionCount")," will return the number of rows & sections in the filtered data source."),Object(r.b)("hr",null),Object(r.b)("h3",{id:"rowshouldupdate"},Object(r.b)("inlineCode",{parentName:"h3"},"rowShouldUpdate()")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"rowShouldUpdate(sectionIndex, rowIndex);\n")),Object(r.b)("p",null,"Returns if the row is dirtied and needs to be rerendered"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"getrowdata"},Object(r.b)("inlineCode",{parentName:"h3"},"getRowData()")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"getRowData(sectionIndex, rowIndex);\n")),Object(r.b)("p",null,"Gets the data required to render the row."),Object(r.b)("hr",null),Object(r.b)("h3",{id:"getrowidforflatindex"},Object(r.b)("inlineCode",{parentName:"h3"},"getRowIDForFlatIndex()")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"getRowIDForFlatIndex(index);\n")),Object(r.b)("p",null,"Gets the rowID at index provided if the dataSource arrays were flattened, or null of out of range indexes."),Object(r.b)("hr",null),Object(r.b)("h3",{id:"getsectionidforflatindex"},Object(r.b)("inlineCode",{parentName:"h3"},"getSectionIDForFlatIndex()")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"getSectionIDForFlatIndex(index);\n")),Object(r.b)("p",null,"Gets the sectionID at index provided if the dataSource arrays were flattened, or null for out of range indexes."),Object(r.b)("hr",null),Object(r.b)("h3",{id:"getsectionlengths"},Object(r.b)("inlineCode",{parentName:"h3"},"getSectionLengths()")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"getSectionLengths();\n")),Object(r.b)("p",null,"Returns an array containing the number of rows in each section"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"sectionheadershouldupdate"},Object(r.b)("inlineCode",{parentName:"h3"},"sectionHeaderShouldUpdate()")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"sectionHeaderShouldUpdate(sectionIndex);\n")),Object(r.b)("p",null,"Returns if the section header is dirtied and needs to be rerendered"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"getsectionheaderdata"},Object(r.b)("inlineCode",{parentName:"h3"},"getSectionHeaderData()")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"getSectionHeaderData(sectionIndex);\n")),Object(r.b)("p",null,"Gets the data required to render the section header"))}l.isMDXComponent=!0}}]);