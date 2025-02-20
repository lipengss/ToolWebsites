import{o as J,d6 as Q,e as Z,d7 as _,bL as x,b2 as q,d as M,d8 as ee,d9 as oe,b9 as se,bb as j,da as te,j as T,v as P,x as C,y as F,bk as S,b6 as v,b7 as h,G as e,z as U,A as E,B as d,D as R,K as le,db as ae,Q as ne,a0 as W,dc as re,dd as ie,bD as de,de as ce,b4 as ue,r as K,df as fe,bx as me,br as ve,dg as pe,dh as be,cH as ge,ax as ye,c7 as he,bG as Ce,cL as Ee,bo as we,bz as ke,H as Te,I as $e,J as Le,L as De,aw as Fe,P as Me,C as O,cE as Ae,di as Ie}from"./BQGwFWGX.js";/* empty css        */const G=Symbol("dialogInjectionKey"),Be=(r,i,l,p)=>{let n={offsetX:0,offsetY:0};const u=c=>{const b=c.clientX,f=c.clientY,{offsetX:w,offsetY:g}=n,y=r.value.getBoundingClientRect(),k=y.left,a=y.top,A=y.width,$=y.height,z=document.documentElement.clientWidth,Y=document.documentElement.clientHeight,V=-k+w,X=-a+g,N=z-k-A+w,L=Y-a-$+g,I=o=>{let D=w+o.clientX-b,B=g+o.clientY-f;p!=null&&p.value||(D=Math.min(Math.max(D,V),N),B=Math.min(Math.max(B,X),L)),n={offsetX:D,offsetY:B},r.value&&(r.value.style.transform=`translate(${_(D)}, ${_(B)})`)},H=()=>{document.removeEventListener("mousemove",I),document.removeEventListener("mouseup",H)};document.addEventListener("mousemove",I),document.addEventListener("mouseup",H)},m=()=>{i.value&&r.value&&i.value.addEventListener("mousedown",u)},t=()=>{i.value&&r.value&&i.value.removeEventListener("mousedown",u)},s=()=>{n={offsetX:0,offsetY:0},r.value&&(r.value.style.transform="none")};return J(()=>{Q(()=>{l.value?m():t()})}),Z(()=>{t()}),{resetPosition:s}},Pe=(...r)=>i=>{r.forEach(l=>{x(l)?l(i):l.value=i})},Se=M({name:"ElDialogContent"}),Re=M({...Se,props:oe,emits:ee,setup(r,{expose:i}){const l=r,{t:p}=se(),{Close:n}=ae,{dialogRef:u,headerRef:m,bodyId:t,ns:s,style:c}=j(G),{focusTrapRef:b}=j(te),f=T(()=>[s.b(),s.is("fullscreen",l.fullscreen),s.is("draggable",l.draggable),s.is("align-center",l.alignCenter),{[s.m("center")]:l.center}]),w=Pe(b,u),g=T(()=>l.draggable),y=T(()=>l.overflow),{resetPosition:k}=Be(u,m,g,y);return i({resetPosition:k}),(a,A)=>(C(),P("div",{ref:e(w),class:h(e(f)),style:W(e(c)),tabindex:"-1"},[F("header",{ref_key:"headerRef",ref:m,class:h([e(s).e("header"),a.headerClass,{"show-close":a.showClose}])},[v(a.$slots,"header",{},()=>[F("span",{role:"heading","aria-level":a.ariaLevel,class:h(e(s).e("title"))},U(a.title),11,["aria-level"])]),a.showClose?(C(),P("button",{key:0,"aria-label":e(p)("el.dialog.close"),class:h(e(s).e("headerbtn")),type:"button",onClick:$=>a.$emit("close")},[E(e(ne),{class:h(e(s).e("close"))},{default:d(()=>[(C(),R(le(a.closeIcon||e(n))))]),_:1},8,["class"])],10,["aria-label","onClick"])):S("v-if",!0)],2),F("div",{id:e(t),class:h([e(s).e("body"),a.bodyClass])},[v(a.$slots,"default")],10,["id"]),a.$slots.footer?(C(),P("footer",{key:0,class:h([e(s).e("footer"),a.footerClass])},[v(a.$slots,"footer")],2)):S("v-if",!0)],6))}});var ze=q(Re,[["__file","dialog-content.vue"]]);const Ye=M({name:"ElDialog",inheritAttrs:!1}),Ve=M({...Ye,props:ie,emits:re,setup(r,{expose:i}){const l=r,p=de();ce({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},T(()=>!!p.title));const n=ue("dialog"),u=K(),m=K(),t=K(),{visible:s,titleId:c,bodyId:b,style:f,overlayDialogStyle:w,rendered:g,zIndex:y,afterEnter:k,afterLeave:a,beforeLeave:A,handleClose:$,onModalClick:z,onOpenAutoFocus:Y,onCloseAutoFocus:V,onCloseRequested:X,onFocusoutPrevented:N}=fe(l,u);we(G,{dialogRef:u,headerRef:m,bodyId:b,ns:n,rendered:g,style:f});const L=be(z),I=T(()=>l.draggable&&!l.fullscreen);return i({visible:s,dialogContentRef:t,resetPosition:()=>{var o;(o=t.value)==null||o.resetPosition()}}),(o,D)=>(C(),R(e(Ee),{to:o.appendTo,disabled:o.appendTo!=="body"?!1:!o.appendToBody},{default:d(()=>[E(me,{name:"dialog-fade",onAfterEnter:e(k),onAfterLeave:e(a),onBeforeLeave:e(A),persisted:""},{default:d(()=>[ve(E(e(pe),{"custom-mask-event":"",mask:o.modal,"overlay-class":o.modalClass,"z-index":e(y)},{default:d(()=>[F("div",{role:"dialog","aria-modal":"true","aria-label":o.title||void 0,"aria-labelledby":o.title?void 0:e(c),"aria-describedby":e(b),class:h(`${e(n).namespace.value}-overlay-dialog`),style:W(e(w)),onClick:e(L).onClick,onMousedown:e(L).onMousedown,onMouseup:e(L).onMouseup},[E(e(ge),{loop:"",trapped:e(s),"focus-start-el":"container",onFocusAfterTrapped:e(Y),onFocusAfterReleased:e(V),onFocusoutPrevented:e(N),onReleaseRequested:e(X)},{default:d(()=>[e(g)?(C(),R(ze,ye({key:0,ref_key:"dialogContentRef",ref:t},o.$attrs,{center:o.center,"align-center":o.alignCenter,"close-icon":o.closeIcon,draggable:e(I),overflow:o.overflow,fullscreen:o.fullscreen,"header-class":o.headerClass,"body-class":o.bodyClass,"footer-class":o.footerClass,"show-close":o.showClose,title:o.title,"aria-level":o.headerAriaLevel,onClose:e($)}),he({header:d(()=>[o.$slots.title?v(o.$slots,"title",{key:1}):v(o.$slots,"header",{key:0,close:e($),titleId:e(c),titleClass:e(n).e("title")})]),default:d(()=>[v(o.$slots,"default")]),_:2},[o.$slots.footer?{name:"footer",fn:d(()=>[v(o.$slots,"footer")])}:void 0]),1040,["center","align-center","close-icon","draggable","overflow","fullscreen","header-class","body-class","footer-class","show-close","title","aria-level","onClose"])):S("v-if",!0)]),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,["aria-label","aria-labelledby","aria-describedby","onClick","onMousedown","onMouseup"])]),_:3},8,["mask","overlay-class","z-index"]),[[Ce,e(s)]])]),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])]),_:3},8,["to","disabled"]))}});var Xe=q(Ve,[["__file","dialog.vue"]]);const Ne=ke(Xe),He={class:"flex-end"},Ke={key:1,class:"footer"},je=M({__name:"index",props:{visible:{type:Boolean},confirmText:{default:"确定"},confirmType:{default:"primary"},cancelText:{default:"取消"},cancelType:{default:"default"},slotFooter:{type:Boolean,default:!1}},emits:["update:visible","onClose"],setup(r,{emit:i}){Te(t=>({"30a6bd5a":e(u).values}));const{setting:l}=$e(Le()),p=r,n=De({visible:!1,fullscreen:!1}),u=T(()=>l.value.bg.picture),m=i;return Fe(()=>p.visible,t=>{n.visible=t},{immediate:!0}),(t,s)=>{const c=Me,b=Ne;return C(),R(b,{modelValue:n.visible,"onUpdate:modelValue":s[2]||(s[2]=f=>n.visible=f),"show-close":!1,width:"900px","append-to-body":"","lock-scroll":!1,fullscreen:n.fullscreen,draggable:"",onClose:s[3]||(s[3]=f=>m("onClose"))},{header:d(()=>[F("div",He,[E(c,{icon:e(Ae),circle:"",size:"small",onClick:s[0]||(s[0]=f=>n.fullscreen=!n.fullscreen)},null,8,["icon"]),E(c,{icon:e(Ie),circle:"",size:"small",onClick:s[1]||(s[1]=f=>m("update:visible",!1))},null,8,["icon"])])]),footer:d(()=>[t.slotFooter?v(t.$slots,"footer",{key:0}):t.slotFooter?(C(),P("div",Ke,[E(c,{type:t.cancelType},{default:d(()=>[O(U(t.cancelText),1)]),_:1},8,["type"]),E(c,{type:t.confirmType,class:"confirm-btn"},{default:d(()=>[O(U(t.confirmText),1)]),_:1},8,["type"])])):S("",!0)]),default:d(()=>[v(t.$slots,"default")]),_:3},8,["modelValue","fullscreen"])}}});export{je as _};
