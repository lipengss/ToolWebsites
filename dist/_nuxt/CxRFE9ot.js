import{a$ as T,ck as D,cl as g,b2 as I,d as S,bM as N,b3 as A,r as V,j as b,D as l,x as a,B as p,bC as $,y as v,b5 as o,G as e,b4 as n,R as k,K as M,v as c,b6 as C,C as h,z as d,F as P,A as z,cm as F,bP as _,bI as j,bd as G}from"./C1yz2pMr.js";const K=["light","dark"],O=T({title:{type:String,default:""},description:{type:String,default:""},type:{type:String,values:D(g),default:"info"},closable:{type:Boolean,default:!0},closeText:{type:String,default:""},showIcon:Boolean,center:Boolean,effect:{type:String,values:K,default:"light"}}),R={close:i=>i instanceof MouseEvent},q=S({name:"ElAlert"}),H=S({...q,props:O,emits:R,setup(i,{emit:B}){const f=i,{Close:E}=F,w=N(),t=A("alert"),u=V(!0),m=b(()=>g[f.type]),r=b(()=>!!(f.description||w.default)),y=s=>{u.value=!1,B("close",s)};return(s,L)=>(a(),l(j,{name:e(t).b("fade"),persisted:""},{default:p(()=>[$(v("div",{class:o([e(t).b(),e(t).m(s.type),e(t).is("center",s.center),e(t).is(s.effect)]),role:"alert"},[s.showIcon&&e(m)?(a(),l(e(k),{key:0,class:o([e(t).e("icon"),{[e(t).is("big")]:e(r)}])},{default:p(()=>[(a(),l(M(e(m))))]),_:1},8,["class"])):n("v-if",!0),v("div",{class:o(e(t).e("content"))},[s.title||s.$slots.title?(a(),c("span",{key:0,class:o([e(t).e("title"),{"with-description":e(r)}])},[C(s.$slots,"title",{},()=>[h(d(s.title),1)])],2)):n("v-if",!0),e(r)?(a(),c("p",{key:1,class:o(e(t).e("description"))},[C(s.$slots,"default",{},()=>[h(d(s.description),1)])],2)):n("v-if",!0),s.closable?(a(),c(P,{key:2},[s.closeText?(a(),c("div",{key:0,class:o([e(t).e("close-btn"),e(t).is("customed")]),onClick:y},d(s.closeText),3)):(a(),l(e(k),{key:1,class:o(e(t).e("close-btn")),onClick:y},{default:p(()=>[z(e(E))]),_:1},8,["class"]))],64)):n("v-if",!0)],2)],2),[[_,u.value]])]),_:3},8,["name"]))}});var J=I(H,[["__file","alert.vue"]]);const U=G(J);export{U as E};
