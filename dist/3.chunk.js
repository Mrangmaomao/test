webpackJsonp([3],{164:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(168),i=n(173),r=!1;var c=function(e){r||n(172)},u=n(43)(a.a,i.a,!1,c,"data-v-436ef8ce",null);u.options.__file="src\\views\\index.vue",t.default=u.exports},168:function(e,t,n){"use strict";n(2);var a=n(44),i=n.n(a);t.a={data:function(){return{message:"hello,world6",visible:!1,nav:[{name:"首页",url:"/indexc"},{name:"验证码",url:"/getCode"},{name:"富文本",url:"/getRich"}],menu:{activeIndex:"1"},leftMenu:[{}]}},created:function(){this.navs=i.a.allRouter},methods:{adds:function(){i.a.$emit("go","indexc")},checkoutUrl:function(e){i.a.$emit("go",e.url)}}}},172:function(e,t){},173:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-container",[n("el-aside",{attrs:{width:"180px"}},[n("el-menu",{attrs:{"default-openeds":["1","3"]}},[n("ul",{staticClass:"menu"},e._l(e.nav,function(t){return n("li",{key:t.name,on:{click:function(n){e.checkoutUrl(t)}}},[n("a",{attrs:{href:"javascript:"}},[e._v(e._s(t.name))])])}))])],1),e._v(" "),n("el-container",[n("el-main",[n("router-view")],1)],1)],1)],1)};a._withStripped=!0;var i={render:a,staticRenderFns:[]};t.a=i}});