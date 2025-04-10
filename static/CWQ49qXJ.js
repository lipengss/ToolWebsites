import{_ as ue,t as me}from"./CuFw6Jq8.js";import{o as ee,cg as de,e as pe,ch as W,bE as fe,aY as oe,d as Y,ci as ve,cj as be,bJ as ge,b6 as J,ck as ye,j as U,v as x,x as y,y as C,aH as H,a_ as $,aI as L,E as e,z as X,A as l,B as s,H as S,M as _e,cl as Ie,S as Ce,a2 as K,cm as Fe,cn as he,bj as ke,bi as Ee,aZ as we,r as j,co as Ve,bn as $e,by as Te,bk as Le,cp as Se,cq as Ae,bZ as Re,aG as Ue,bT as De,bx as Me,c3 as Be,a$ as Ne,K as te,L as le,N as se,aF as Pe,cr as ae,C as R,R as ne,bW as ze,cs as xe,X as Ye,Y as qe,Q as Oe,ct as Z,T as Xe,cu as je,aR as He,F as G,D as Q,cv as Ke,aT as We,U as Je,a0 as Ze,cw as Ge,Z as Qe,$ as eo,cx as oo,cy as to,cz as lo,aQ as so,O as ao,cA as V,bP as O,bb as no,a3 as ro,_ as io}from"./BVOoKVd1.js";import{u as co}from"./D1MPlWUr.js";/* empty css        */const re=Symbol("dialogInjectionKey"),uo=(p,f,o,I)=>{let m={offsetX:0,offsetY:0};const v=b=>{const h=b.clientX,k=b.clientY,{offsetX:g,offsetY:c}=m,t=p.value.getBoundingClientRect(),_=t.left,i=t.top,d=t.width,T=t.height,E=document.documentElement.clientWidth,D=document.documentElement.clientHeight,M=-_+g,q=-i+c,B=E-_-d+g,w=D-i-T+c,N=n=>{let A=g+n.clientX-h,z=c+n.clientY-k;I!=null&&I.value||(A=Math.min(Math.max(A,M),B),z=Math.min(Math.max(z,q),w)),m={offsetX:A,offsetY:z},p.value&&(p.value.style.transform=`translate(${W(A)}, ${W(z)})`)},P=()=>{document.removeEventListener("mousemove",N),document.removeEventListener("mouseup",P)};document.addEventListener("mousemove",N),document.addEventListener("mouseup",P)},F=()=>{f.value&&p.value&&f.value.addEventListener("mousedown",v)},u=()=>{f.value&&p.value&&f.value.removeEventListener("mousedown",v)},r=()=>{m={offsetX:0,offsetY:0},p.value&&(p.value.style.transform="none")};return ee(()=>{de(()=>{o.value?F():u()})}),pe(()=>{u()}),{resetPosition:r}},mo=(...p)=>f=>{p.forEach(o=>{fe(o)?o(f):o.value=f})},po=Y({name:"ElDialogContent"}),fo=Y({...po,props:be,emits:ve,setup(p,{expose:f}){const o=p,{t:I}=ge(),{Close:m}=Ie,{dialogRef:v,headerRef:F,bodyId:u,ns:r,style:b}=J(re),{focusTrapRef:h}=J(ye),k=U(()=>[r.b(),r.is("fullscreen",o.fullscreen),r.is("draggable",o.draggable),r.is("align-center",o.alignCenter),{[r.m("center")]:o.center}]),g=mo(h,v),c=U(()=>o.draggable),t=U(()=>o.overflow),{resetPosition:_}=uo(v,F,c,t);return f({resetPosition:_}),(i,d)=>(y(),x("div",{ref:e(g),class:L(e(k)),style:K(e(b)),tabindex:"-1"},[C("header",{ref_key:"headerRef",ref:F,class:L([e(r).e("header"),i.headerClass,{"show-close":i.showClose}])},[$(i.$slots,"header",{},()=>[C("span",{role:"heading","aria-level":i.ariaLevel,class:L(e(r).e("title"))},X(i.title),11,["aria-level"])]),i.showClose?(y(),x("button",{key:0,"aria-label":e(I)("el.dialog.close"),class:L(e(r).e("headerbtn")),type:"button",onClick:T=>i.$emit("close")},[l(e(Ce),{class:L(e(r).e("close"))},{default:s(()=>[(y(),S(_e(i.closeIcon||e(m))))]),_:1},8,["class"])],10,["aria-label","onClick"])):H("v-if",!0)],2),C("div",{id:e(u),class:L([e(r).e("body"),i.bodyClass])},[$(i.$slots,"default")],10,["id"]),i.$slots.footer?(y(),x("footer",{key:0,class:L([e(r).e("footer"),i.footerClass])},[$(i.$slots,"footer")],2)):H("v-if",!0)],6))}});var vo=oe(fo,[["__file","dialog-content.vue"]]);const bo=Y({name:"ElDialog",inheritAttrs:!1}),go=Y({...bo,props:he,emits:Fe,setup(p,{expose:f}){const o=p,I=ke();Ee({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},U(()=>!!I.title));const m=we("dialog"),v=j(),F=j(),u=j(),{visible:r,titleId:b,bodyId:h,style:k,overlayDialogStyle:g,rendered:c,zIndex:t,afterEnter:_,afterLeave:i,beforeLeave:d,handleClose:T,onModalClick:E,onOpenAutoFocus:D,onCloseAutoFocus:M,onCloseRequested:q,onFocusoutPrevented:B}=Ve(o,v);$e(re,{dialogRef:v,headerRef:F,bodyId:h,ns:m,rendered:c,style:k});const w=Ae(E),N=U(()=>o.draggable&&!o.fullscreen);return f({visible:r,dialogContentRef:u,resetPosition:()=>{var n;(n=u.value)==null||n.resetPosition()}}),(n,A)=>(y(),S(e(Be),{to:n.appendTo,disabled:n.appendTo!=="body"?!1:!n.appendToBody},{default:s(()=>[l(Te,{name:"dialog-fade",onAfterEnter:e(_),onAfterLeave:e(i),onBeforeLeave:e(d),persisted:""},{default:s(()=>[Le(l(e(Se),{"custom-mask-event":"",mask:n.modal,"overlay-class":n.modalClass,"z-index":e(t)},{default:s(()=>[C("div",{role:"dialog","aria-modal":"true","aria-label":n.title||void 0,"aria-labelledby":n.title?void 0:e(b),"aria-describedby":e(h),class:L(`${e(m).namespace.value}-overlay-dialog`),style:K(e(g)),onClick:e(w).onClick,onMousedown:e(w).onMousedown,onMouseup:e(w).onMouseup},[l(e(Re),{loop:"",trapped:e(r),"focus-start-el":"container",onFocusAfterTrapped:e(D),onFocusAfterReleased:e(M),onFocusoutPrevented:e(B),onReleaseRequested:e(q)},{default:s(()=>[e(c)?(y(),S(vo,Ue({key:0,ref_key:"dialogContentRef",ref:u},n.$attrs,{center:n.center,"align-center":n.alignCenter,"close-icon":n.closeIcon,draggable:e(N),overflow:n.overflow,fullscreen:n.fullscreen,"header-class":n.headerClass,"body-class":n.bodyClass,"footer-class":n.footerClass,"show-close":n.showClose,title:n.title,"aria-level":n.headerAriaLevel,onClose:e(T)}),De({header:s(()=>[n.$slots.title?$(n.$slots,"title",{key:1}):$(n.$slots,"header",{key:0,close:e(T),titleId:e(b),titleClass:e(m).e("title")})]),default:s(()=>[$(n.$slots,"default")]),_:2},[n.$slots.footer?{name:"footer",fn:s(()=>[$(n.$slots,"footer")])}:void 0]),1040,["center","align-center","close-icon","draggable","overflow","fullscreen","header-class","body-class","footer-class","show-close","title","aria-level","onClose"])):H("v-if",!0)]),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,["aria-label","aria-labelledby","aria-describedby","onClick","onMousedown","onMouseup"])]),_:3},8,["mask","overlay-class","z-index"]),[[Me,e(r)]])]),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])]),_:3},8,["to","disabled"]))}});var yo=oe(go,[["__file","dialog.vue"]]);const _o=Ne(yo),Io={class:"flex-end"},Co={key:1,class:"footer"},Fo=Y({__name:"index",props:{visible:{type:Boolean},confirmText:{default:"确定"},confirmType:{default:"primary"},cancelText:{default:"取消"},cancelType:{default:"default"},showConfirm:{type:Boolean,default:!1}},emits:["update:visible"],setup(p,{emit:f}){const{setting:o}=te(le()),I=p,m=se({visible:!1,fullscreen:!1});U(()=>o.value.bg.picture);const v=f,F=()=>{v("update:visible",!1)};return Pe(()=>I.visible,u=>{m.visible=u},{immediate:!0}),(u,r)=>{const b=ne,h=ae,k=_o;return y(),S(k,{class:"custom-dialog",modelValue:m.visible,"onUpdate:modelValue":r[3]||(r[3]=g=>m.visible=g),"show-close":!1,width:"900px","append-to-body":"","lock-scroll":!1,fullscreen:m.fullscreen,draggable:"",onClose:F},{header:s(()=>[C("div",Io,[l(b,{icon:e(ze),circle:"",size:"small",onClick:r[0]||(r[0]=g=>m.fullscreen=!m.fullscreen)},null,8,["icon"]),l(b,{icon:e(xe),circle:"",size:"small",onClick:r[1]||(r[1]=g=>v("update:visible",!1))},null,8,["icon"])])]),footer:s(()=>[u.$slots.footer?$(u.$slots,"footer",{key:0}):(y(),x("div",Co,[l(b,{type:u.cancelType,onClick:r[2]||(r[2]=g=>v("update:visible",!1))},{default:s(()=>[R(X(u.cancelText),1)]),_:1},8,["type"]),u.showConfirm?(y(),S(b,{key:0,type:u.confirmType,class:"confirm-btn"},{default:s(()=>[R(X(u.confirmText),1)]),_:1},8,["type"])):H("",!0)]))]),default:s(()=>[l(h,{"wrap-class":"el-dialog__body","view-style":{maxHeight:"calc(100vh - 40vh)"}},{default:s(()=>[$(u.$slots,"default")]),_:3})]),_:3},8,["modelValue","fullscreen"])}}}),ho={class:"split-pane"},ko={class:"option-item"},Eo={class:"block"},wo={class:"option-item"},Vo=Y({__name:"index",setup(p,{expose:f}){const o=se({visible:!1,activeTab:"customIcons",customIconForm:{name:"",path:"",classify:[],companyName:"",meta:{rank:0,type:"icon",value:"app-",tag:[],size:60,color:"#fff",bgColor:"#fff",layout:"1x1",description:""}}}),{setting:I}=te(le());U(()=>I.value.app.width+"px");const m=j();async function v(){o.customIconForm.meta.type="img";const{path:c}=o.customIconForm;o.customIconForm.meta.value=`${c}favicon.ico`}function F(c){switch(c){case"icon":o.customIconForm.meta.value="app-";break;case"text":o.customIconForm.meta.value="A";break;default:o.customIconForm.meta.value="https://";break}}function u(c){m.value.validate(t=>{t?c&&c():ro.error("请检查表单信息是否填写完整")})}function r(){const{onCopy:c}=co(ao(JSON.stringify(o.customIconForm,void 0,2)));u(()=>{c()})}function b(){const t=V.findIndex(_=>_.name===o.customIconForm.name)-1;t!==-1?o.customIconForm=O(V[t]):o.customIconForm=O(V[V.length-1])}function h(){const t=V.findIndex(_=>_.name===o.customIconForm.name)+1;t!==V.length?o.customIconForm=O(V[t]):o.customIconForm=O(V[V.length-1])}function k(){o.visible=!0}function g(c){k();const t=O(c);no(()=>{console.log("cloneApp",t),o.customIconForm=t,typeof t.classify=="string"&&(o.customIconForm.classify=[t.classify])})}return ee(()=>{o.customIconForm.classify=[I.value.menuBar.routePath.slice(1)]}),f({open:k,edit:g}),(c,t)=>{const _=ue,i=Oe,d=qe,T=Xe,E=ne,D=We,M=He,q=Ze,B=Je,w=eo,N=Qe,P=oo,n=lo,A=Ye,z=ae,ie=Fo,ce=so;return y(),S(ce,null,{default:s(()=>[l(ie,{visible:e(o).visible,"onUpdate:visible":t[12]||(t[12]=a=>e(o).visible=a),title:"添加应用",width:"1200px"},{footer:s(()=>[l(E,{type:"info",onClick:r},{default:s(()=>t[15]||(t[15]=[R("复制JSON")])),_:1}),l(E,{type:"primary"},{default:s(()=>t[16]||(t[16]=[R("保存并继续")])),_:1}),l(E,{type:"default",onClick:b},{default:s(()=>t[17]||(t[17]=[R("上一个")])),_:1}),l(E,{type:"default",onClick:h},{default:s(()=>t[18]||(t[18]=[R("下一个")])),_:1})]),default:s(()=>[C("div",ho,[l(_,{app:e(o).customIconForm,class:"p-card"},null,8,["app"]),l(z,null,{default:s(()=>[l(A,{ref_key:"formRef",ref:m,model:e(o).customIconForm},{default:s(()=>[l(d,{prop:"name",rules:{required:!0,message:"请输入应用名称"}},{default:s(()=>[l(i,{modelValue:e(o).customIconForm.name,"onUpdate:modelValue":t[0]||(t[0]=a=>e(o).customIconForm.name=a),placeholder:"应用名称","prefix-icon":e(Z)},null,8,["modelValue","prefix-icon"])]),_:1}),l(d,{prop:"companyName",rules:{required:!0,message:"请输入所属机构"}},{default:s(()=>[l(i,{modelValue:e(o).customIconForm.companyName,"onUpdate:modelValue":t[1]||(t[1]=a=>e(o).customIconForm.companyName=a),placeholder:"所属机构"},{prefix:s(()=>[l(T,{name:"company"})]),_:1},8,["modelValue"])]),_:1}),l(d,{prop:"path",rules:{required:!0,message:"请输入访问地址"}},{default:s(()=>[l(i,{modelValue:e(o).customIconForm.path,"onUpdate:modelValue":t[2]||(t[2]=a=>e(o).customIconForm.path=a),placeholder:"https://","prefix-icon":e(je)},{append:s(()=>[l(E,{onClick:v},{default:s(()=>t[13]||(t[13]=[R("获取图标")])),_:1})]),_:1},8,["modelValue","prefix-icon"])]),_:1}),l(d,{prop:"classify",rules:{required:!0,message:"请选择应用分类"}},{default:s(()=>[l(M,{modelValue:e(o).customIconForm.classify,"onUpdate:modelValue":t[3]||(t[3]=a=>e(o).customIconForm.classify=a),multiple:"",placeholder:"请选择应用分类",style:{width:"100%"}},{default:s(()=>[(y(!0),x(G,null,Q(e(Ke),a=>(y(),S(D,{key:a.meta.classify,label:a.name,value:a.meta.classify},{default:s(()=>[C("div",ko,[l(T,{name:a.meta.icon},null,8,["name"]),C("div",Eo,X(a.name),1)])]),_:2},1032,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(d,{prop:"meta.tag",rules:{required:!0,message:"必选选择一个标签"}},{default:s(()=>[l(M,{modelValue:e(o).customIconForm.meta.tag,"onUpdate:modelValue":t[4]||(t[4]=a=>e(o).customIconForm.meta.tag=a),multiple:"",placeholder:"选择一个标签",style:{width:"100%"}},{default:s(()=>[(y(!0),x(G,null,Q(e(me),a=>(y(),S(D,{key:a.value,label:a.label,value:a.value},{default:s(()=>[C("div",wo,[C("div",{class:"block",style:K(`--bgColor:${a.color}`)},X(a.label),5)])]),_:2},1032,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(d,{prop:"meta.rank"},{default:s(()=>[l(B,null,{default:s(()=>[l(q,{modelValue:e(o).customIconForm.meta.rank,"onUpdate:modelValue":t[5]||(t[5]=a=>e(o).customIconForm.meta.rank=a)},null,8,["modelValue"]),t[14]||(t[14]=C("img",{src:Ge,width:"22",height:"22",alt:""},null,-1))]),_:1})]),_:1}),l(d,null,{default:s(()=>[l(B,null,{default:s(()=>[l(N,{modelValue:e(o).customIconForm.meta.type,"onUpdate:modelValue":t[6]||(t[6]=a=>e(o).customIconForm.meta.type=a),onChange:F},{default:s(()=>[l(w,{label:"图标",value:"icon"}),l(w,{label:"文字",value:"text"}),l(w,{label:"图片",value:"img"})]),_:1},8,["modelValue"]),l(d,{prop:"meta.value"},{default:s(()=>[l(i,{modelValue:e(o).customIconForm.meta.value,"onUpdate:modelValue":t[7]||(t[7]=a=>e(o).customIconForm.meta.value=a),placeholder:"图标值","prefix-icon":e(Z)},null,8,["modelValue","prefix-icon"])]),_:1}),l(d,null,{default:s(()=>[l(P,{color:e(o).customIconForm.meta.color,"onUpdate:color":t[8]||(t[8]=a=>e(o).customIconForm.meta.color=a)},null,8,["color"])]),_:1})]),_:1})]),_:1}),l(d,{prop:"meta.bgColor"},{default:s(()=>[l(P,{colorList:e(to),color:e(o).customIconForm.meta.bgColor,"onUpdate:color":t[9]||(t[9]=a=>e(o).customIconForm.meta.bgColor=a)},null,8,["colorList","color"])]),_:1}),l(d,{prop:"meta.size"},{default:s(()=>[l(n,{modelValue:e(o).customIconForm.meta.size,"onUpdate:modelValue":t[10]||(t[10]=a=>e(o).customIconForm.meta.size=a),min:40,max:100},null,8,["modelValue"])]),_:1}),l(d,{prop:"meta.description",rules:{required:!0,message:"请输入描述信息"}},{default:s(()=>[l(i,{modelValue:e(o).customIconForm.meta.description,"onUpdate:modelValue":t[11]||(t[11]=a=>e(o).customIconForm.meta.description=a),type:"textarea",placeholder:"应用介绍..."},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1})])]),_:1},8,["visible"])]),_:1})}}}),Ao=io(Vo,[["__scopeId","data-v-b8608a29"]]);export{Ao as default};
