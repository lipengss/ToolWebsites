import{aW as y,aX as p,aY as u,d as f,aZ as c,v as r,x as t,aH as l,y as h,aI as o,E as s,a_ as d,C as n,z as i,a2 as v,a$ as m}from"./BVOoKVd1.js";const S=y({header:{type:String,default:""},footer:{type:String,default:""},bodyStyle:{type:p([String,Object,Array]),default:""},bodyClass:String,shadow:{type:String,values:["always","hover","never"],default:"always"}}),C=f({name:"ElCard"}),b=f({...C,props:S,setup(g){const a=c("card");return(e,w)=>(t(),r("div",{class:o([s(a).b(),s(a).is(`${e.shadow}-shadow`)])},[e.$slots.header||e.header?(t(),r("div",{key:0,class:o(s(a).e("header"))},[d(e.$slots,"header",{},()=>[n(i(e.header),1)])],2)):l("v-if",!0),h("div",{class:o([s(a).e("body"),e.bodyClass]),style:v(e.bodyStyle)},[d(e.$slots,"default")],6),e.$slots.footer||e.footer?(t(),r("div",{key:1,class:o(s(a).e("footer"))},[d(e.$slots,"footer",{},()=>[n(i(e.footer),1)])],2)):l("v-if",!0)],2))}});var $=u(b,[["__file","card.vue"]]);const k=m($);export{k as E};
