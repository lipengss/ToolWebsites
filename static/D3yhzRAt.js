import{d as H,K,M as b,L as $,r as v,j as i,aG as j,aH as J,aI as f,aE as O,aJ as G,o as P,g as U,v as x,x as g,y as s,A as a,aK as q,aL as Q,aM as X,B as p,F as y,D as u,T as Y,U as Z,aN as ee,W as ne,aO as te,aP as S,a4 as W,_ as ae}from"./BFnyi31a.js";import"./CS50hp8T.js";/* empty css        *//* empty css        */import"./BMW1aOAu.js";/* empty css        */const se={class:"item"},le={class:"item"},oe=H({__name:"index",setup(ue){K(n=>({"6e6cc93d":u(A),"1c1777c5":u(I),c942ae3a:u(N),"2e636839":u(T)}));const B=b(),{setting:l,showDrawer:L}=$(b()),{initGlobalSetting:M,changeWallpaper:C,setGlobalSetting:k}=B;let E=null;const m=v(),_=v(),r=v({name:"",path:"",type:"",meta:{rank:0,icon:"",layout:""}});i(()=>[{label:"全部",value:"all"},...j]);const A=i(()=>l.value.app.screenWidth+l.value.app.unit),I=i(()=>l.value.app.size+"px"),N=i(()=>{const{async:n,gap:e,columnGap:t}=l.value.app;return(n?e:t)+"px"}),T=i(()=>{const{async:n,gap:e,rowGap:t}=l.value.app;return(n?e:t)+"px"}),D=i(()=>J.map(n=>(n.children=f(n.type),n)));i(()=>!1);function h(n){m.value=!0,_.value.contextmenu(n)}function R(){const{name:n}=r.value;if(!l.value.excludeWeb.map(t=>t.name).includes(n)){const t=S.findIndex(o=>o.name===n);t!==-1&&S.splice(t,1),l.value.excludeWeb.push(r.value)}k()}function V(){const{name:n}=r.value;if(!l.value.collectionWeb.map(t=>t.name).includes(n))l.value.excludeWeb.push(r.value),W.success("已收藏了");else{W.warning("已收藏了");return}k()}return O(()=>activeTag.value,n=>{const e=l.value.menuBar.appSlideIndex,t=f(appTypeLisrt[e].type);D.value[e].children=n==="all"?t:t.filter(o=>o.meta.tag&&o.meta.tag.includes(n))}),G.on("contextmenuApp",({event:n,name:e})=>{if(m.value=!e,!m.value){const t=f().find(o=>o.name===e);t&&(r.value=t)}_.value.contextmenu(n)}),G.on("onMenuChange",n=>{E.destroyed}),P(()=>{M()}),(n,e)=>{const t=q,o=U("NuxtChild"),z=X,d=Z,c=Y,F=te;return g(),x(y,null,[s("div",{class:"container",onContextmenu:Q(h,["prevent"])},[a(t),a(o)],32),a(z),a(F,{ref_key:"contextmenuRef",ref:_},{default:p(()=>[m.value?(g(),x(y,{key:0},[s("div",{class:"item",onClick:e[0]||(e[0]=(...w)=>u(C)&&u(C)(...w))},[a(c,null,{default:p(()=>[a(d,{name:"menu-picture"})]),_:1}),e[2]||(e[2]=s("span",null,"换壁纸",-1))]),s("div",{class:"item",onClick:e[1]||(e[1]=w=>L.value=!0)},[a(c,null,{default:p(()=>[a(d,{name:"setting"})]),_:1}),e[3]||(e[3]=s("span",null,"设置",-1))])],64)):(g(),x(y,{key:1},[s("div",se,[a(c,null,{default:p(()=>[a(u(ee))]),_:1}),e[4]||(e[4]=s("span",null,"编辑",-1))]),s("div",le,[a(c,null,{default:p(()=>[a(d,{name:"batchEdit"})]),_:1}),e[5]||(e[5]=s("span",null,"批量编辑",-1))]),s("div",{class:"item",onClick:R},[a(c,null,{default:p(()=>[a(u(ne))]),_:1}),e[6]||(e[6]=s("span",null,"删除",-1))]),s("div",{class:"item",onClick:V},[a(c,null,{default:p(()=>[a(d,{name:"like"})]),_:1}),e[7]||(e[7]=s("span",null,"收藏",-1))])],64))]),_:1},512)],64)}}}),_e=ae(oe,[["__scopeId","data-v-25adc45e"]]);export{_e as default};
