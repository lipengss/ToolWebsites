import{aX as c,aY as p,b2 as u,d as i,b4 as v,j as f,v as s,x as o,bk as m,b7 as a,G as r,b6 as b,a0 as y,bz as S}from"./BQGwFWGX.js";const _=c({direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},contentPosition:{type:String,values:["left","center","right"],default:"center"},borderStyle:{type:p(String),default:"solid"}}),h=i({name:"ElDivider"}),z=i({...h,props:_,setup(n){const l=n,e=v("divider"),d=f(()=>e.cssVar({"border-style":l.borderStyle}));return(t,g)=>(o(),s("div",{class:a([r(e).b(),r(e).m(t.direction)]),style:y(r(d)),role:"separator"},[t.$slots.default&&t.direction!=="vertical"?(o(),s("div",{key:0,class:a([r(e).e("text"),r(e).is(t.contentPosition)])},[b(t.$slots,"default")],2)):m("v-if",!0)],6))}});var P=u(z,[["__file","divider.vue"]]);const E=S(P);export{E};
