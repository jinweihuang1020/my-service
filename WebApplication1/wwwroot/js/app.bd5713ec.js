(function(e){function t(t){for(var a,r,s=t[0],l=t[1],c=t[2],d=0,m=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&m.push(i[r][0]),i[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(m.length)m.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,s=1;s<n.length;s++){var l=n[s];0!==i[l]&&(a=!1)}a&&(o.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},i={app:0},o=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},1428:function(e,t,n){"use strict";n("f256")},2491:function(e,t,n){},"28fa":function(e,t,n){e.exports=n.p+"img/ginwei.e2f03a08.png"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("v-app",{attrs:{id:"inspire"}},[n("v-container",{staticClass:"scroll-y"},[n("v-btn",{directives:[{name:"scroll",rawName:"v-scroll",value:e.onScroll,expression:"onScroll"},{name:"show",rawName:"v-show",value:"/Email"!=e.$router.currentRoute.path,expression:"$router.currentRoute.path != '/Email'"}],attrs:{fab:"",dark:"",fixed:"",bottom:"",left:"",color:"danger"},on:{click:e.sendEmail}},[n("v-icon",[e._v("mdi-email")])],1),n("v-btn",{directives:[{name:"scroll",rawName:"v-scroll",value:e.onScroll,expression:"onScroll"},{name:"show",rawName:"v-show",value:e.fab,expression:"fab"}],attrs:{fab:"",dark:"",fixed:"",bottom:"",right:"",color:"primary"},on:{click:e.toTop}},[n("v-icon",[e._v("mdi-chevron-up")])],1),n("v-main",[n("router-view")],1)],1)],1)],1)},o=[],r={name:"App",data:function(){return{fab:!1,sendmail:!1}},methods:{onScroll:function(e){if("undefined"!==typeof window){var t=window.pageYOffset||e.target.scrollTop||0;this.fab=t>20}},toTop:function(){this.$vuetify.goTo(0)},sendEmail:function(){"/Email"!=this.$router.currentRoute.path&&(console.log("someone wanna send mail to me !"),this.$router.push("/Email"),this.sendmail=!0)}},mounted:function(){console.log(this.$RWD.GetDeviceType())}},s=r,l=(n("034f"),n("2877")),c=n("6544"),u=n.n(c),d=n("7496"),m=n("8336"),v=n("a523"),p=n("132d"),f=n("f6c4"),h=n("269a"),g=n.n(h),_=n("f977"),w=Object(l["a"])(s,i,o,!1,null,null,null),b=w.exports;u()(w,{VApp:d["a"],VBtn:m["a"],VContainer:v["a"],VIcon:p["a"],VMain:f["a"]}),g()(w,{Scroll:_["a"]});var k=n("9483");Object(k["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var y=n("8c4f"),x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("v-main",[n("Banner"),n("WorkExp"),n("Education"),n("Collection"),n("Skills")],1)],1)},C=[],V=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"90%",outlined:"",elevation:"20"}},[a("v-list-item",{attrs:{"three-line":""}},[a("v-list-item-avatar",{staticStyle:{"margin-top":"12px"},attrs:{size:"100",color:"primary"}},[a("img",{attrs:{src:n("28fa"),alt:"jin"}})]),a("v-list-item-content",[a("v-list-item-title",{staticClass:"headline mb-1"},[a("b",[e._v("JIN-WEI HUANG")])]),a("h4",[e._v("現職 : 均豪精密工業")]),a("v-list-item-subtitle",[e._v("職稱 : 高級工程師")]),a("div",{attrs:{id:"location"}},[e._v(" 工作經驗 : 4年5個月 "),a("v-icon",{attrs:{small:""}},[e._v("mdi-map-marker")]),e._v(" Taichung, Taiwan ")],1),a("div",{staticClass:"lookingfor"},[a("v-icon",{attrs:{small:""}},[e._v("mdi-shopping-search")]),e._v(" Search for Front-end、Back-end and Full-stack ")],1)],1)],1),a("v-card-actions",[a("el-divider"),a("v-btn",{attrs:{icon:"",rounded:"",small:""},on:{click:function(t){return e.openInNewTab(e.facebookPageUrl)}}},[a("svg-icon",{attrs:{type:"mdi",path:e.fbIconPath}})],1),a("v-btn",{attrs:{icon:"",rounded:"",small:""},on:{click:function(t){return e.openInNewTab(e.linkindinPageUrl)}}},[a("svg-icon",{attrs:{type:"mdi",path:e.linkedinIconPath}})],1),a("el-divider")],1)],1)},I=[],P=n("1fee"),S=n("94ed"),D={name:"HelloWorld",components:{SvgIcon:P["a"]},data:function(){return{fbIconPath:S["b"],linkedinIconPath:S["c"],mdiLocationEnterIconPath:S["d"],facebookPageUrl:"https://www.facebook.com/jingweih1/",linkindinPageUrl:"https://www.linkedin.com/in/jinweihuang-878494a0/"}},methods:{openInNewTab:function(e){var t=window.open(e,"_blank");t.focus()}}},E=D,L=(n("fbee"),n("b0af")),T=n("99d9"),j=n("da13"),W=n("8270"),M=n("5d23"),N=Object(l["a"])(E,V,I,!1,null,"31cee3f2",null),$=N.exports;u()(N,{VBtn:m["a"],VCard:L["a"],VCardActions:T["a"],VIcon:p["a"],VListItem:j["a"],VListItemAvatar:W["a"],VListItemContent:M["a"],VListItemSubtitle:M["b"],VListItemTitle:M["c"]});var O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"mx-auto",attrs:{"max-width":"90%",elevation:"0"}},[n("div",{attrs:{id:"skills"}},[n("h3",[n("v-icon",[e._v("mdi-school-outline ")]),e._v(" 技能 ")],1),n("v-divider",{attrs:{light:"",dark:""}}),n("el-tag",{attrs:{effect:"dark"}},[e._v(" HTML ")]),n("el-tag",{attrs:{effect:"dark"}},[e._v(" CSS ")]),n("el-tag",{attrs:{effect:"dark"}},[e._v(" JAVASCRIPT ")]),n("el-tag",{attrs:{effect:"dark"}},[e._v(" .Net Framework ")]),n("el-tag",{attrs:{effect:"dark"}},[e._v(" C# ")]),n("el-tag",{attrs:{effect:"dark"}},[e._v(" Vue.js ")]),n("el-tag",{attrs:{effect:"dark"}},[e._v(" ASP .NET MVC ")]),n("el-tag",{attrs:{effect:"dark"}},[e._v(" git ")])],1),n("div",{attrs:{id:"langs"}},[n("h3",[n("v-icon",[e._v("mdi-language-xaml ")]),e._v("語言 ")],1),n("v-divider",{attrs:{dark:""}}),n("el-tag",{attrs:{effect:"dark",type:"danger"}},[e._v(" Chinese ")]),n("el-tag",{attrs:{effect:"dark",type:"danger"}},[e._v(" English ")])],1)])},A=[],R={data:function(){return{}}},U=R,H=(n("eca6"),n("ce7e")),G=Object(l["a"])(U,O,A,!1,null,"12ae1c85",null),F=G.exports;u()(G,{VCard:L["a"],VDivider:H["a"],VIcon:p["a"]});var X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"mx-auto",attrs:{id:"main-card","max-width":"90%",outlined:"",elevation:"0"}},[n("div",{attrs:{id:"education"}},[n("h3",[n("v-icon",[e._v("mdi-school-outline")]),e._v(" 學歷 ")],1),n("v-divider",{attrs:{light:""}}),n("p"),n("v-icon",[e._v("mdi-school")]),e._v(" 中興大學機械工程學系 "),n("br",{attrs:{hidden:"desktop"===e.$RWD.GetDeviceType()}}),e._v(" | 2010-2014 "),n("p"),n("v-icon",[e._v("mdi-school")]),e._v(" 中興大學機械工程研究所 "),n("br",{attrs:{hidden:"desktop"===e.$RWD.GetDeviceType()}}),e._v(" | 2014-2016 ")],1)])},B=[],z={data:function(){return{}}},J=z,K=(n("8431"),Object(l["a"])(J,X,B,!1,null,"2e34e550",null)),Z=K.exports;u()(K,{VCard:L["a"],VDivider:H["a"],VIcon:p["a"]});var Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"mx-auto",attrs:{id:"main-card","max-width":"90%",outlined:"",elevation:"0"}},[n("div",{attrs:{id:"education"}},[n("h3",[n("v-icon",[e._v("mdi-history")]),e._v(" 工作經歷 ")],1),n("v-divider",{attrs:{light:""}}),n("v-timeline",{attrs:{"align-top":"",dense:""}},[n("v-timeline-item",{attrs:{color:"blue lighten-3",small:""}},[n("v-row",{staticClass:"pt-1"},[n("v-col",{attrs:{cols:e.timeline_firt_col_span}},[n("strong",[e._v("2015/8~2015/9")])]),n("v-col",[n("div",{staticClass:"caption"},[n("h3",[e._v("台灣工業研究院")]),n("p",[e._v("工具機關鍵組件尺寸量測與CAD繪製")])])])],1)],1),n("v-timeline-item",{attrs:{color:"blue lighten-3",small:""}},[n("v-row",{staticClass:"pt-1"},[n("v-col",{attrs:{cols:e.timeline_firt_col_span}},[n("strong",[e._v("2016/11~2020/12")])]),n("v-col",[n("div",{staticClass:"caption"},[n("h3",[e._v("均豪精密工業股份有限公司")]),n("p")])])],1)],1),n("v-timeline-item",{attrs:{color:"red lighten-1",small:""}},[n("v-row",{staticClass:"pt-1"},[n("v-col",{attrs:{cols:e.timeline_firt_col_span}},[n("b",{staticStyle:{"font-size":"15px"}},[e._v("2021/01~NOW")])]),n("v-col",[n("div",{staticClass:"caption"},[n("h2",[e._v("個人接案 ")]),n("p",[n("a",{attrs:{href:"https://www.tasker.com.tw/workroom/KJ7eyQ?"}},[e._v("My Tasker")])])])])],1)],1)],1)],1)])},q=[],Q={data:function(){return{}},computed:{timeline_firt_col_span:function(){var e=this.$RWD.GetDeviceType();console.log(e);var t=document.documentElement;return t.style.setProperty("--caption_margin_lef","".concat("desktop"==e?"-45":"-17","px")),"desktop"==e?"3":"6"}}},ee=Q,te=(n("1428"),n("62ad")),ne=n("0fd9"),ae=n("8414"),ie=n("1e06"),oe=Object(l["a"])(ee,Y,q,!1,null,"56b1724b",null),re=oe.exports;u()(oe,{VCard:L["a"],VCol:te["a"],VDivider:H["a"],VIcon:p["a"],VRow:ne["a"],VTimeline:ae["a"],VTimelineItem:ie["a"]});var se=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"mx-auto",attrs:{id:"main-card","max-width":"90%",height:null==e.openedPanel?"25%":"50%",outlined:"",elevation:"0"}},[n("div",{attrs:{id:"education"}},[n("h3",[n("v-icon",[e._v("mdi-image-multiple")]),e._v(" 作品集 ")],1),n("v-divider",{attrs:{light:""}}),n("div",{directives:[{name:"show",rawName:"v-show",value:"desktop"==e.$RWD.GetDeviceType(),expression:"$RWD.GetDeviceType()=='desktop'"}],staticClass:"classify"},[n("v-list",{attrs:{dense:"",rounded:""}},[n("v-subheader",[e._v("分類")]),n("v-list-item-group",{attrs:{color:"primary"},model:{value:e.selectedItem,callback:function(t){e.selectedItem=t},expression:"selectedItem"}},e._l(e.classify,(function(t,a){return n("v-list-item",{key:a},[n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:e._s(t.text)}})],1)],1)})),1)],1)],1),n("el-tabs",{directives:[{name:"show",rawName:"v-show",value:"desktop"!=e.$RWD.GetDeviceType(),expression:"$RWD.GetDeviceType()!='desktop'"}],model:{value:e.selectedItem,callback:function(t){e.selectedItem=t},expression:"selectedItem"}},[n("el-tab-pane",{attrs:{label:"WinForm APP",name:"0"}}),n("el-tab-pane",{attrs:{label:"網頁設計",name:"1"}})],1),n("div",{staticClass:"content"},[n("v-expansion-panels",{attrs:{inset:"",focusable:""},model:{value:e.openedPanel,callback:function(t){e.openedPanel=t},expression:"openedPanel"}},e._l(e.showCollection,(function(t){return n("v-expansion-panel",{key:t.id},[n("v-expansion-panel-header",{on:{click:function(n){return e.HeadClick(t.imgUrl)}}},[n("strong",[e._v(e._s(t.title))])]),n("v-expansion-panel-content",[n("v-btn",{attrs:{"x-small":""},on:{click:e.imagZoom}},[e._v("放大檢視")]),n("v-img",{attrs:{"max-height":"100","max-width":"100%",src:t.imgUrl,"lazy-src":" https://picsum.photos/id/11/100/60"},scopedSlots:e._u([{key:"placeholder",fn:function(){return[n("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[n("v-progress-circular",{attrs:{indeterminate:"",color:"blue lighten-2"}})],1)]},proxy:!0}],null,!0)}),n("el-divider"),n("v-icon",[e._v("mdi-alpha-t-circle-outline")]),e._v(" "),n("strong",[e._v("使用技術")]),n("p",e._l(t.lang,(function(t){return n("v-chip",{key:t,staticClass:"ma-2",attrs:{"x-small":"",color:"red","text-color":"white"}},[e._v(" "+e._s(t)+" ")])})),1),n("el-divider"),n("v-icon",[e._v("mdi-text-box-outline")]),e._v(" "),n("b",[e._v("說明")]),n("p",{domProps:{textContent:e._s(t.content)}}),n("v-icon",[e._v("mdi-text-box-outline")]),e._v(" "),n("b",[e._v("作品連結")]),"link"==t.workLink.type?n("li",[n("a",{attrs:{href:t.workLink}},[e._v(e._s(t.workLink.url))])]):e._e(),"route"==t.workLink.type?n("li",[n("v-btn",{attrs:{samll:""},on:{click:function(n){return e.go_to_work_page(t.workLink.route)}}},[e._v(" 檢視作品 ")])],1):e._e(),n("v-icon",[e._v("mdi-text-box-outline")]),e._v(" "),n("b",[e._v("相關連結")]),e._l(t.links,(function(t){return n("a",{key:t,attrs:{href:t}},[n("li",[e._v(e._s(t)+" ")])])}))],2)],1)})),1)],1),n("el-dialog",{attrs:{title:"作品檢視",visible:e.dialogVisible,width:"100%","before-close":e.ZoomClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[n("v-img",{attrs:{"max-height":"100%","max-width":"100%",src:e.selectedImgUrl,"lazy-src":"https://picsum.photos/id/11/100/60"},scopedSlots:e._u([{key:"placeholder",fn:function(){return[n("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[n("v-progress-circular",{attrs:{indeterminate:"",color:"blue lighten-2"}})],1)]},proxy:!0}])})],1)],1)])},le=[],ce={data:function(){return{openedPanel:"null",dialogVisible:!1,selectedImgUrl:"",selectedItem:0,tabActive:"",open:!1,classify:[{id:0,text:"WinForm APP",icon:"mdi-clock"},{id:1,text:"網頁設計",icon:"mdi-account"}],Collections:{WinformAPP:[{title:"自助取票系統",content:"使用Winform開發自助取票系統，於政府舉辦的展覽中供使用者使用。",imgUrl:"img/collection/order_system.png",lang:[".Net Framework","C#"],workLink:{type:"route",route:"",url:""}},{title:"地政資訊整合服務",content:"串接'地政整合資訊服務共享協作平台'，可使房仲業者快速、簡易地進行資料查詢；查詢過的資料儲存於資料庫，可節省查詢成本。",imgUrl:"img/collection/landService.png",lang:[".Net Framework","C#"],links:["https://cop.land.moi.gov.tw/caseshow/casedata.aspx"],workLink:{type:"route",route:"",url:""}},{title:"振動數據分析工具",content:"處理振動感測器量測訊號，進行時頻分析。",imgUrl:"",lang:[".Net Framework","C#"],workLink:{type:"route",route:"",url:""}}],Website:[{title:"個人履歷",content:"使用 Vue.js 前端框架建構個人履歷。",imgUrl:"img/collection/personalResume.png",lang:["Vue.js","HTML","CSS"],workLink:{type:"link",url:"https://ginwei-resume-app.herokuapp.com/#/"},links:["https://github.com/ss610349/resume-front-end.git"]},{title:"SpaceX 發射倒數計時器",content:"使用SpaceX提供的API，針對最近要準備發射的火箭之發射時間，製作倒數計時器。",imgUrl:"img/collection/spaceX_api_call_1.png",lang:["Vue.js","HTML","CSS"],workLink:{type:"route",route:"/SpaceXAPI",url:"https://ginwei-resume-app.herokuapp.com/SpaceXAPI"},links:["https://docs.spacexdata.com/","https://github.com/r-spacex/SpaceX-API"]},{title:"預防診斷系統網站",content:"將原為Winform版本之系統改寫圍網頁板，使用Vue.js前端框架，並應用Websock、WebAPI等通訊方式與後端溝通。",imgUrl:"img/collection/idms_home.png",lang:["Vue.js","HTML","CSS"],workLink:{type:"route",route:"",url:""}}]},showCollection:[]}},computed:{timeline_firt_col_span:function(){var e=this.$RWD.GetDeviceType();console.log(e);var t=document.documentElement;return t.style.setProperty("--caption_margin_lef","".concat("desktop"==e?"-45":"-17","px")),"desktop"==e?"3":"6"}},watch:{selectedItem:{handler:function(e,t){console.log(e,t),void 0!=e&&(this.openedPanel=null,this.showCollection=0==e?this.Collections.WinformAPP:this.Collections.Website)}}},methods:{go_to_work_page:function(e){this.$router.push(e)},HeadClick:function(e){this.selectedImgUrl=e},Classify_item_click:function(){console.log(this.ClassifySelect)},imagZoom:function(){""!=this.selectedImgUrl&&(this.dialogVisible=!0)},ZoomClose:function(){this.dialogVisible=!1}},mounted:function(){this.showCollection=this.Collections.WinformAPP;var e=this.$RWD.GetDeviceType(),t=document.documentElement;t.style.setProperty("--contentWidth","".concat("desktop"==e?"80":"100","%")),t.style.setProperty("--contentPaddingLeft","".concat("desktop"==e?"20":"0","px"))}},ue=ce,de=(n("cbf1"),n("cc20")),me=n("cd55"),ve=n("49e2"),pe=n("c865"),fe=n("0393"),he=n("adda"),ge=n("8860"),_e=n("1baa"),we=n("490a"),be=n("e0c7"),ke=Object(l["a"])(ue,se,le,!1,null,"345e897e",null),ye=ke.exports;u()(ke,{VBtn:m["a"],VCard:L["a"],VChip:de["a"],VDivider:H["a"],VExpansionPanel:me["a"],VExpansionPanelContent:ve["a"],VExpansionPanelHeader:pe["a"],VExpansionPanels:fe["a"],VIcon:p["a"],VImg:he["a"],VList:ge["a"],VListItem:j["a"],VListItemContent:M["a"],VListItemGroup:_e["a"],VListItemTitle:M["c"],VProgressCircular:we["a"],VRow:ne["a"],VSubheader:be["a"]});var xe={name:"Home",components:{Banner:$,Skills:F,Education:Z,WorkExp:re,Collection:ye}},Ce=xe,Ve=(n("a7c1"),Object(l["a"])(Ce,x,C,!1,null,"768b7356",null)),Ie=Ve.exports;u()(Ve,{VMain:f["a"]});var Pe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"email"}},[n("div",{staticClass:"back"},[n("v-btn",{attrs:{color:"primary"},on:{click:e.back}},[e._v("Back")])],1),n("div",{staticClass:"content"},[n("div",{attrs:{id:"des"}},[n("v-icon",{attrs:{"x-large":""}},[e._v("mdi-email")]),e._v(" Write something to me! "),n("p",[e._v("請留下您的聯絡方式，方便日後聯絡您.")])],1),n("el-divider"),n("form",{staticClass:"contact-form",on:{submit:function(t){return t.preventDefault(),e.sendEmail(t)}}},[n("label",[e._v("Your Name")]),n("el-input",{attrs:{name:"user_name"},model:{value:e.form.user_name,callback:function(t){e.$set(e.form,"user_name",t)},expression:"form.user_name"}}),n("label",[e._v("Your Email")]),n("el-input",{attrs:{name:"user_mail"},model:{value:e.form.user_mail,callback:function(t){e.$set(e.form,"user_mail",t)},expression:"form.user_mail"}}),n("label",[e._v("Message")]),n("el-input",{attrs:{type:"textarea",rows:12,name:"message"},model:{value:e.form.message,callback:function(t){e.$set(e.form,"message",t)},expression:"form.message"}}),n("v-btn",{attrs:{type:"submit",block:""}},[e._v(" SEND")])],1)],1)])},Se=[],De=n("1da1"),Ee=(n("96cf"),n("0f91")),Le=n.n(Ee),Te={data:function(){return{form:{user_name:"",user_mail:"",message:""}}},methods:{back:function(){this.$router.push("/")},sendEmail:function(e){var t=this;Le.a.sendForm("service_tze5ryz","template_gwue97n",e.target,"user_wfZbsMsxrvrqscRDp0opz").then((function(e){console.log("SUCCESS!",e.status,e.text),t.showOK()}),(function(e){console.log("FAILED...",e)})),console.log("OK")},showOK:function(){var e=this;return Object(De["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$swal({text:"MAIL寄送成功!",confirmButtonText:"OK"}).then((function(t){console.log(t),e.$router.push("/")}));case 1:case"end":return t.stop()}}),t)})))()}}},je=Te,We=(n("a3ef"),Object(l["a"])(je,Pe,Se,!1,null,null,null)),Me=We.exports;u()(We,{VBtn:m["a"],VIcon:p["a"]});var Ne=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"SpaceX_API"},[n("SpaceX_Next_launch")],1)},$e=[],Oe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-main",[n("div",{staticClass:"banner"},[n("a",{attrs:{href:" https://www.spacex.com/"}},[e._v(" https://www.spacex.com/")])]),n("v-carousel",{attrs:{cycle:"",height:"500","hide-delimiter-background":"","show-arrows-on-hover":""}},e._l(e.CommingLaunchMission,(function(t,a){return n("v-carousel-item",{key:a},[n("v-sheet",{attrs:{color:"black",height:"100%"}},[n("div",{staticClass:"content"},[n("div",{staticClass:"starlink"},[e._v(" "+e._s(t.name.includes("Starlink")?"星鏈計畫":"")+" "),n("p",[e._v(e._s(t.name))])]),n("div",{staticClass:"imageShow"},[n("v-img",{attrs:{"max-height":"90%","max-width":"80%",src:t.links.patch.small},scopedSlots:e._u([{key:"placeholder",fn:function(){return[n("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[n("v-progress-circular",{attrs:{indeterminate:"",color:"blue lighten-2"}})],1)]},proxy:!0}],null,!0)})],1),n("div",{staticClass:"Describe"},[n("div",{attrs:{id:"launchTime"}},[e._v(" LAUNCH TIME "),n("span",[e._v(" "+e._s(t.date_utc.substring(0,19)))])]),n("div",{attrs:{id:"details"}},[e._v(" "+e._s(t.details))])])]),e._v(" "+e._s(t.name)+" ")])],1)})),1),n("div",{ref:"n_launch",staticClass:"NextLaunch"},[n("v-divider",{attrs:{dark:""}}),n("h1",[e._v(" Next Launch...")]),n("div",{attrs:{id:"Countup"}},[n("v-icon",{attrs:{"x-large":""}},[e._v("mdi-timer-outline")]),e._v(" "+e._s(e.countupTime)+" ")],1),n("v-img",{attrs:{"max-height":"90%","max-width":"80%",src:e.NearestMission.links.patch.large},scopedSlots:e._u([{key:"placeholder",fn:function(){return[n("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[n("v-progress-circular",{attrs:{indeterminate:"",color:"blue lighten-2"}})],1)]},proxy:!0}])}),n("div",{staticClass:"Describe2"},[n("div",{attrs:{id:"launchTime2"}},[e._v(" LAUNCH TIME "),n("span",[e._v(" "+e._s(e.NearestMission.date_utc.substring(0,19)))])]),n("div",{attrs:{id:"launchTime2"}},[e._v(" Mission Name "),n("span",[e._v(" "+e._s(e.NearestMission.name))])]),n("div",{attrs:{id:"details2"}},[e._v(" "+e._s(e.NearestMission.details))]),n("v-divider",{attrs:{dark:""}})],1),n("div",{staticClass:"youtubeplay"},[e._v(" youtube 發射直播 "+e._s(e.NearestMission.name)+" "),n("myyoutube",{attrs:{videoId:e.youtube_id,Name:"123"}})],1)],1),n("footer",[e._v(" Powered by Vue.js ")])],1)],1)},Ae=[],Re=(n("159b"),n("bc3a")),Ue={GetData:function(){var e=Object(De["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t=null,n={method:"get",url:"https://api.spacexdata.com/v4/launches/upcoming",headers:{}},e.next=5,Re(n).then((function(e){t=e.data})).catch((function(e){console.log(e)}));case 5:return e.abrupt("return",t);case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",null);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));function t(){return e.apply(this,arguments)}return t}()},He=Ue,Ge=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"myyoutube"},[n("span",[e._v(" "+e._s(e.Name)+" "),n("br")]),n("youtube",{attrs:{"video-id":e.videoId,"player-vars":e.playerVars,width:440},on:{playing:e.playing}})],1)},Fe=[],Xe={data:function(){return{playerVars:{autoplay:0}}},props:{videoId:String,Name:String},methods:{playing:function(){console.log("o/ we are watching!!!")}}},Be=Xe,ze=Object(l["a"])(Be,Ge,Fe,!1,null,null,null),Je=ze.exports,Ke={components:{myyoutube:Je},data:function(){return{youtube_id:"x3bDhtuC5yk",colors:["indigo","warning"],CommingLaunchMission:[],countupTime:"",playerVars:{autoplay:0}}},methods:{getData:function(e){var t=this;return Object(De["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,t.CommingLaunchMission=[],n.next=4,He.GetData();case 4:if(a=n.sent,null!=a){n.next=7;break}return n.abrupt("return");case 7:a.forEach((function(n){if(t.CommingLaunchMission.length!=e){var a=Date.parse(n.date_utc).valueOf();a>Date.now()&&t.CommingLaunchMission.push(n)}})),n.next=13;break;case 10:n.prev=10,n.t0=n["catch"](0),console.logO("getdata error"+n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})))()},countup:function(){if(0!=this.CommingLaunchMission.length){var e=Date.parse(this.CommingLaunchMission[0].date_utc).valueOf(),t=e-Date.now(),n=t/1e3,a=Math.floor(n/3600),i=Math.floor(n%3600/60),o=n%3600%60;a=a<10?"0"+a:a,i=i<10?"0"+i:i,o=o<10?"0"+o:o;var r=a+":"+i+":"+o;return this.countupTime=r.substring(0,14),1}}},watch:{CommingLaunchMission:{handler:function(e,t){var n=this;e!==t&&setInterval((function(){return n.countup()}),200)}}},computed:{NearestMission:function(){if(0!=this.CommingLaunchMission.length)return console.log(this.CommingLaunchMission[0]),this.CommingLaunchMission[0]}},mounted:function(){this.getData(3);var e=this.$RWD.GetDeviceType(),t=document.documentElement;t.style.setProperty("--img_margin_left","".concat("desktop"==e?this.$RWD.windowWidth/2-180:"20","px"))}},Ze=Ke,Ye=(n("5ad0"),n("5e66")),qe=n("3e35"),Qe=n("8dd9"),et=Object(l["a"])(Ze,Oe,Ae,!1,null,"0840a2f8",null),tt=et.exports;u()(et,{VCarousel:Ye["a"],VCarouselItem:qe["a"],VDivider:H["a"],VIcon:p["a"],VImg:he["a"],VMain:f["a"],VProgressCircular:we["a"],VRow:ne["a"],VSheet:Qe["a"]});var nt={components:{SpaceX_Next_launch:tt}},at=nt,it=Object(l["a"])(at,Ne,$e,!1,null,null,null),ot=it.exports;a["default"].use(y["a"]);var rt=[{path:"/",name:"Home",component:Ie},{path:"/SpaceXAPI",name:"SpaceXAPI",component:ot},{path:"/Email",name:"Email",component:Me}],st=new y["a"]({mode:"history",base:"/",routes:rt}),lt=st,ct=n("2f62");a["default"].use(ct["a"]);var ut=new ct["a"].Store({state:{},mutations:{},actions:{},modules:{}}),dt=n("5c96"),mt=n.n(dt),vt=(n("0fae"),n("f309"));a["default"].use(vt["a"]);var pt=new vt["a"]({}),ft=n("5886"),ht=(n("4413"),n("99af"),{windowWidth:0,windowHeight:0,GetDeviceType:function(){return this.windowHeight=window.innerHeight,this.windowWidth=window.innerWidth,console.log("".concat(this.windowHeight,",").concat(this.windowWidth)),this.windowWidth>800?"desktop":this.windowWidth<800&&this.windowWidth>400?"pad":"mobile"}}),gt=ht,_t=n("e0ec"),wt=n.n(_t);a["default"].use(ft["a"]),a["default"].config.productionTip=!1,a["default"].use(mt.a),a["default"].use(P["a"]),a["default"].use(S["a"]),a["default"].prototype.$RWD=gt,a["default"].use(wt.a),new a["default"]({router:lt,store:ut,vuetify:pt,render:function(e){return e(b)}}).$mount("#app")},"59a1":function(e,t,n){},"5ad0":function(e,t,n){"use strict";n("2491")},"6ebf":function(e,t,n){},7292:function(e,t,n){},8431:function(e,t,n){"use strict";n("6ebf")},"85ec":function(e,t,n){},a3ef:function(e,t,n){"use strict";n("e90d")},a7c1:function(e,t,n){"use strict";n("59a1")},c6a3:function(e,t,n){},cbf1:function(e,t,n){"use strict";n("7292")},e90d:function(e,t,n){},eca6:function(e,t,n){"use strict";n("c6a3")},ed60:function(e,t,n){},f256:function(e,t,n){},fbee:function(e,t,n){"use strict";n("ed60")}});
//# sourceMappingURL=app.bd5713ec.js.map