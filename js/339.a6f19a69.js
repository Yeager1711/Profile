"use strict";(self["webpackChunkpage"]=self["webpackChunkpage"]||[]).push([[339],{4339:function(t,s,e){e.r(s),e.d(s,{default:function(){return v}});var a=function(){var t=this,s=t._self._c;return s("comp-products")},r=[],c=function(){var t=this,s=t._self._c;return s("section",{staticClass:"products-link"},[s("form",{attrs:{action:""}},[s("div",{staticClass:"box-search"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.searchQuery,expression:"searchQuery"}],attrs:{type:"text",placeholder:"Tìm kiếm danh mục ..."},domProps:{value:t.searchQuery},on:{input:function(s){s.target.composing||(t.searchQuery=s.target.value)}}}),s("i",{staticClass:"fa-solid fa-magnifying-glass"})])]),s("div",{staticClass:"total-products"},[s("h3",[t._v(" Số lượng danh mục hiện có: ("+t._s(t.resultQuery.length)+")")])]),s("div",{staticClass:"box-container"},t._l(t.resultQuery,(function(e,a){return s("div",{key:`item-${a}`,class:e.cls},[s("div",{staticClass:"image-products"},[s("div",{staticClass:"image-img"},[s("img",{attrs:{src:e.img_products,alt:""}})]),s("div",{staticClass:"ic-image"},[s("img",{staticClass:"ic-1",attrs:{src:e?.ic_1,alt:""}}),s("img",{staticClass:"ic-2",attrs:{src:e?.ic_2,alt:""}}),s("img",{staticClass:"ic-3",attrs:{src:e?.ic_3,alt:""}}),s("img",{staticClass:"ic-3",attrs:{src:e?.ic_4,alt:""}})])]),s("div",{staticClass:"content-products"},[s("h3",[t._v("Web: "+t._s(e.name))]),s("a",{attrs:{href:e.href}},[t._v("xem liên kết")])])])})),0)])},i=[],l=e(3822),u={name:"comp-products",data(){return{searchQuery:""}},computed:{...(0,l.Se)(["products"]),resultQuery(){return this.searchQuery?this.products.filter((t=>this.searchQuery.toLowerCase().split("").every((s=>t.name.toLowerCase().includes(s))))):this.products}},methods:{...(0,l.nv)(["getProducts"])},mounted(){return this.getProducts()}},n=u,o=e(1001),d=(0,o.Z)(n,c,i,!1,null,null,null),m=d.exports,p={components:{CompProducts:m}},h=p,g=(0,o.Z)(h,a,r,!1,null,null,null),v=g.exports}}]);
//# sourceMappingURL=339.a6f19a69.js.map