import{d as F,K as H,M as w,L as K,r as f,j as i,aG as $,aH as j,aI as _,aE as J,aJ as G,o as O,g as U,v as x,x as g,y as s,A as a,aK as q,aL as P,B as p,F as b,D as u,T as Q,U as X,aM as Y,W as Z,aN as ee,aO as S,a4 as W,_ as ne}from"./DWUcAaq9.js";import"./D7Xj1g4W.js";/* empty css        *//* empty css        */import"./rD015CsX.js";/* empty css        */const te={class:"item"},ae={class:"item"},se=F({__name:"index",setup(le){H(n=>({fdb3cab8:u(A),"60f0d6a8":u(I),"333b280a":u(N),"3ccedb1c":u(T)}));const L=w(),{setting:l,showDrawer:B}=K(w()),{initGlobalSetting:E,changeWallpaper:y,setGlobalSetting:C}=L;let M=null;const m=f(),v=f(),r=f({name:"",path:"",type:"",meta:{rank:0,icon:"",layout:""}});i(()=>[{label:"全部",value:"all"},...$]);const A=i(()=>l.value.app.screenWidth+l.value.app.unit),I=i(()=>l.value.app.size+"px"),N=i(()=>{const{async:n,gap:e,columnGap:t}=l.value.app;return(n?e:t)+"px"}),T=i(()=>{const{async:n,gap:e,rowGap:t}=l.value.app;return(n?e:t)+"px"}),D=i(()=>j.map(n=>(n.children=_(n.type),n)));i(()=>!1);function h(n){m.value=!0,v.value.contextmenu(n)}function R(){const{name:n}=r.value;if(!l.value.excludeWeb.map(t=>t.name).includes(n)){const t=S.findIndex(o=>o.name===n);t!==-1&&S.splice(t,1),l.value.excludeWeb.push(r.value)}C()}function V(){const{name:n}=r.value;if(!l.value.collectionWeb.map(t=>t.name).includes(n))l.value.excludeWeb.push(r.value),W.success("已收藏了");else{W.warning("已收藏了");return}C()}return J(()=>activeTag.value,n=>{const e=l.value.menuBar.appSlideIndex,t=_(appTypeLisrt[e].type);D.value[e].children=n==="all"?t:t.filter(o=>o.meta.tag&&o.meta.tag.includes(n))}),G.on("contextmenuApp",({event:n,name:e})=>{if(m.value=!e,!m.value){const t=_().find(o=>o.name===e);t&&(r.value=t)}v.value.contextmenu(n)}),G.on("onMenuChange",n=>{M.destroyed}),O(()=>{E()}),(n,e)=>{const t=q,o=U("NuxtChild"),d=X,c=Q,z=ee;return g(),x(b,null,[s("div",{class:"container",onContextmenu:P(h,["prevent"])},[a(t),a(o)],32),a(z,{ref_key:"contextmenuRef",ref:v},{default:p(()=>[m.value?(g(),x(b,{key:0},[s("div",{class:"item",onClick:e[0]||(e[0]=(...k)=>u(y)&&u(y)(...k))},[a(c,null,{default:p(()=>[a(d,{name:"menu-picture"})]),_:1}),e[2]||(e[2]=s("span",null,"换壁纸",-1))]),s("div",{class:"item",onClick:e[1]||(e[1]=k=>B.value=!0)},[a(c,null,{default:p(()=>[a(d,{name:"setting"})]),_:1}),e[3]||(e[3]=s("span",null,"设置",-1))])],64)):(g(),x(b,{key:1},[s("div",te,[a(c,null,{default:p(()=>[a(u(Y))]),_:1}),e[4]||(e[4]=s("span",null,"编辑",-1))]),s("div",ae,[a(c,null,{default:p(()=>[a(d,{name:"batchEdit"})]),_:1}),e[5]||(e[5]=s("span",null,"批量编辑",-1))]),s("div",{class:"item",onClick:R},[a(c,null,{default:p(()=>[a(u(Z))]),_:1}),e[6]||(e[6]=s("span",null,"删除",-1))]),s("div",{class:"item",onClick:V},[a(c,null,{default:p(()=>[a(d,{name:"like"})]),_:1}),e[7]||(e[7]=s("span",null,"收藏",-1))])],64))]),_:1},512)],64)}}}),me=ne(se,[["__scopeId","data-v-e55410e7"]]);export{me as default};
