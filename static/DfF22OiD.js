import{bd as fe,a_ as Ie,a$ as W,bb as Le,b1 as Ce,d as ne,cJ as be,cK as Te,cL as xe,b0 as ze,b2 as _e,cM as Re,r as y,cN as Ae,aI as Pe,j as f,aD as ve,bq as Se,o as Ee,H as me,x as g,B as v,A as c,bH as Me,y as w,a2 as we,aG as d,E as a,cO as Be,aF as k,v as z,b3 as T,bv as Ve,S as $,cA as De,F as te,bQ as Ye,bR as Fe,C as Xe,z as Ne,cP as He,cE as je,M as Ke,cQ as qe,cR as We,D as Ze,bC as Ge,bO as Qe,cS as Je,cT as V,cu as Ue,by as B,ba as Oe,bl as ea,cU as aa,bj as sa,cV as q,aX as ta,aE as ye,b8 as he,b9 as ke,cW as na,cg as oa,cX as la,cY as ra,cZ as ia}from"./DsRtLNvC.js";import{t as de}from"./C4PflfmF.js";const ca=Ie({urlList:{type:W(Array),default:()=>Le([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:Boolean,teleported:Boolean,closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7},showProgress:{type:Boolean,default:!1},crossorigin:{type:W(String)}}),ua={close:()=>!0,switch:m=>fe(m),rotate:m=>fe(m)},da=ne({name:"ElImageViewer"}),fa=ne({...da,props:ca,emits:ua,setup(m,{expose:oe,emit:I}){var b;const l=m,x={CONTAIN:{name:"contain",icon:be(xe)},ORIGINAL:{name:"original",icon:be(Te)}},{t:_}=ze(),n=_e("image-viewer"),{nextZIndex:Z}=Re(),D=y(),R=y([]),E=Ae(),p=y(!0),u=y(l.initialIndex),S=Pe(x.CONTAIN),t=y({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),le=y((b=l.zIndex)!=null?b:Z()),Y=f(()=>{const{urlList:s}=l;return s.length<=1}),A=f(()=>u.value===0),G=f(()=>u.value===l.urlList.length-1),re=f(()=>l.urlList[u.value]),F=f(()=>[n.e("btn"),n.e("prev"),n.is("disabled",!l.infinite&&A.value)]),ie=f(()=>[n.e("btn"),n.e("next"),n.is("disabled",!l.infinite&&G.value)]),Q=f(()=>{const{scale:s,deg:i,offsetX:o,offsetY:h,enableTransition:L}=t.value;let C=o/s,O=h/s;const K=i*Math.PI/180,pe=Math.cos(K),ge=Math.sin(K);C=C*pe+O*ge,O=O*pe-o/s*ge;const ue={transform:`scale(${s}) rotate(${i}deg) translate(${C}px, ${O}px)`,transition:L?"transform .3s":""};return S.value.name===x.CONTAIN.name&&(ue.maxWidth=ue.maxHeight="100%"),ue}),X=f(()=>`${u.value+1} / ${l.urlList.length}`);function P(){J(),I("close")}function ce(){const s=de(o=>{switch(o.code){case B.esc:l.closeOnPressEscape&&P();break;case B.space:M();break;case B.left:j();break;case B.up:r("zoomIn");break;case B.right:e();break;case B.down:r("zoomOut");break}}),i=de(o=>{const h=o.deltaY||o.deltaX;r(h<0?"zoomIn":"zoomOut",{zoomRate:l.zoomRate,enableTransition:!1})});E.run(()=>{V(document,"keydown",s),V(document,"wheel",i)})}function J(){E.stop()}function U(){p.value=!1}function ee(s){p.value=!1,s.target.alt=_("el.image.error")}function ae(s){if(p.value||s.button!==0||!D.value)return;t.value.enableTransition=!1;const{offsetX:i,offsetY:o}=t.value,h=s.pageX,L=s.pageY,C=de(K=>{t.value={...t.value,offsetX:i+K.pageX-h,offsetY:o+K.pageY-L}}),O=V(document,"mousemove",C);V(document,"mouseup",()=>{O()}),s.preventDefault()}function se(){t.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function M(){if(p.value)return;const s=Ue(x),i=Object.values(x),o=S.value.name,L=(i.findIndex(C=>C.name===o)+1)%s.length;S.value=x[s[L]],se()}function H(s){const i=l.urlList.length;u.value=(s+i)%i}function j(){A.value&&!l.infinite||H(u.value-1)}function e(){G.value&&!l.infinite||H(u.value+1)}function r(s,i={}){if(p.value)return;const{minScale:o,maxScale:h}=l,{zoomRate:L,rotateDeg:C,enableTransition:O}={zoomRate:l.zoomRate,rotateDeg:90,enableTransition:!0,...i};switch(s){case"zoomOut":t.value.scale>o&&(t.value.scale=Number.parseFloat((t.value.scale/L).toFixed(3)));break;case"zoomIn":t.value.scale<h&&(t.value.scale=Number.parseFloat((t.value.scale*L).toFixed(3)));break;case"clockwise":t.value.deg+=C,I("rotate",t.value.deg);break;case"anticlockwise":t.value.deg-=C,I("rotate",t.value.deg);break}t.value.enableTransition=O}function N(s){var i;((i=s.detail)==null?void 0:i.focusReason)==="pointer"&&s.preventDefault()}function $e(){l.closeOnPressEscape&&P()}return ve(re,()=>{Se(()=>{const s=R.value[0];s!=null&&s.complete||(p.value=!0)})}),ve(u,s=>{se(),I("switch",s)}),Ee(()=>{ce()}),oe({setActiveItem:H}),(s,i)=>(g(),me(a(Je),{to:"body",disabled:!s.teleported},{default:v(()=>[c(Me,{name:"viewer-fade",appear:""},{default:v(()=>[w("div",{ref_key:"wrapper",ref:D,tabindex:-1,class:d(a(n).e("wrapper")),style:we({zIndex:le.value})},[c(a(Be),{loop:"",trapped:"","focus-trap-el":D.value,"focus-start-el":"container",onFocusoutPrevented:N,onReleaseRequested:$e},{default:v(()=>[w("div",{class:d(a(n).e("mask")),onClick:Ve(o=>s.hideOnClickModal&&P(),["self"])},null,10,["onClick"]),k(" CLOSE "),w("span",{class:d([a(n).e("btn"),a(n).e("close")]),onClick:P},[c(a($),null,{default:v(()=>[c(a(De))]),_:1})],2),k(" ARROW "),a(Y)?k("v-if",!0):(g(),z(te,{key:0},[w("span",{class:d(a(F)),onClick:j},[c(a($),null,{default:v(()=>[c(a(Ye))]),_:1})],2),w("span",{class:d(a(ie)),onClick:e},[c(a($),null,{default:v(()=>[c(a(Fe))]),_:1})],2)],64)),s.showProgress?(g(),z("div",{key:1,class:d([a(n).e("btn"),a(n).e("progress")])},[T(s.$slots,"progress",{activeIndex:u.value,total:s.urlList.length},()=>[Xe(Ne(a(X)),1)])],2)):k("v-if",!0),k(" ACTIONS "),w("div",{class:d([a(n).e("btn"),a(n).e("actions")])},[w("div",{class:d(a(n).e("actions__inner"))},[T(s.$slots,"toolbar",{actions:r,prev:j,next:e,reset:M,activeIndex:u.value},()=>[c(a($),{onClick:o=>r("zoomOut")},{default:v(()=>[c(a(He))]),_:1},8,["onClick"]),c(a($),{onClick:o=>r("zoomIn")},{default:v(()=>[c(a(je))]),_:1},8,["onClick"]),w("i",{class:d(a(n).e("actions__divider"))},null,2),c(a($),{onClick:M},{default:v(()=>[(g(),me(Ke(a(S).icon)))]),_:1}),w("i",{class:d(a(n).e("actions__divider"))},null,2),c(a($),{onClick:o=>r("anticlockwise")},{default:v(()=>[c(a(qe))]),_:1},8,["onClick"]),c(a($),{onClick:o=>r("clockwise")},{default:v(()=>[c(a(We))]),_:1},8,["onClick"])])],2)],2),k(" CANVAS "),w("div",{class:d(a(n).e("canvas"))},[(g(!0),z(te,null,Ze(s.urlList,(o,h)=>Ge((g(),z("img",{ref_for:!0,ref:L=>R.value[h]=L,key:o,src:o,style:we(a(Q)),class:d(a(n).e("img")),crossorigin:s.crossorigin,onLoad:U,onError:ee,onMousedown:ae},null,46,["src","crossorigin"])),[[Qe,h===u.value]])),128))],2),T(s.$slots,"default")]),_:3},8,["focus-trap-el"])],6)]),_:3})]),_:3},8,["disabled"]))}});var va=Ce(fa,[["__file","image-viewer.vue"]]);const ma=Oe(va),pa=Ie({hideOnClickModal:Boolean,src:{type:String,default:""},fit:{type:String,values:["","contain","cover","fill","none","scale-down"],default:""},loading:{type:String,values:["eager","lazy"]},lazy:Boolean,scrollContainer:{type:W([String,Object])},previewSrcList:{type:W(Array),default:()=>Le([])},previewTeleported:Boolean,zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7},showProgress:{type:Boolean,default:!1},crossorigin:{type:W(String)}}),ga={load:m=>m instanceof Event,error:m=>m instanceof Event,switch:m=>fe(m),close:()=>!0,show:()=>!0},ba=ne({name:"ElImage",inheritAttrs:!1}),wa=ne({...ba,props:pa,emits:ga,setup(m,{expose:oe,emit:I}){const b=m;let l="";const{t:x}=ze(),_=_e("image"),n=ea(),Z=f(()=>aa(Object.entries(n).filter(([e])=>/^(data-|on[A-Z])/i.test(e)||["id","style"].includes(e)))),D=sa({excludeListeners:!0,excludeKeys:f(()=>Object.keys(Z.value))}),R=y(),E=y(!1),p=y(!0),u=y(!1),S=y(),t=y(),le=q&&"loading"in HTMLImageElement.prototype;let Y,A;const G=f(()=>[_.e("inner"),F.value&&_.e("preview"),p.value&&_.is("loading")]),re=f(()=>{const{fit:e}=b;return q&&e?{objectFit:e}:{}}),F=f(()=>{const{previewSrcList:e}=b;return ta(e)&&e.length>0}),ie=f(()=>{const{previewSrcList:e,initialIndex:r}=b;let N=r;return r>e.length-1&&(N=0),N}),Q=f(()=>b.loading==="eager"?!1:!le&&b.loading==="lazy"||b.lazy),X=()=>{q&&(p.value=!0,E.value=!1,R.value=b.src)};function P(e){p.value=!1,E.value=!1,I("load",e)}function ce(e){p.value=!1,E.value=!0,I("error",e)}function J(){ia(S.value,t.value)&&(X(),ae())}const U=ra(J,200,!0);async function ee(){var e;if(!q)return;await Se();const{scrollContainer:r}=b;na(r)?t.value=r:oa(r)&&r!==""?t.value=(e=document.querySelector(r))!=null?e:void 0:S.value&&(t.value=la(S.value)),t.value&&(Y=V(t,"scroll",U),setTimeout(()=>J(),100))}function ae(){!q||!t.value||!U||(Y==null||Y(),t.value=void 0)}function se(e){if(e.ctrlKey){if(e.deltaY<0)return e.preventDefault(),!1;if(e.deltaY>0)return e.preventDefault(),!1}}function M(){F.value&&(A=V("wheel",se,{passive:!1}),l=document.body.style.overflow,document.body.style.overflow="hidden",u.value=!0,I("show"))}function H(){A==null||A(),document.body.style.overflow=l,u.value=!1,I("close")}function j(e){I("switch",e)}return ve(()=>b.src,()=>{Q.value?(p.value=!0,E.value=!1,ae(),ee()):X()}),Ee(()=>{Q.value?ee():X()}),oe({showPreview:M}),(e,r)=>(g(),z("div",ye({ref_key:"container",ref:S},a(Z),{class:[a(_).b(),e.$attrs.class]}),[E.value?T(e.$slots,"error",{key:0},()=>[w("div",{class:d(a(_).e("error"))},Ne(a(x)("el.image.error")),3)]):(g(),z(te,{key:1},[R.value!==void 0?(g(),z("img",ye({key:0},a(D),{src:R.value,loading:e.loading,style:a(re),class:a(G),crossorigin:e.crossorigin,onClick:M,onLoad:P,onError:ce}),null,16,["src","loading","crossorigin"])):k("v-if",!0),p.value?(g(),z("div",{key:1,class:d(a(_).e("wrapper"))},[T(e.$slots,"placeholder",{},()=>[w("div",{class:d(a(_).e("placeholder"))},null,2)])],2)):k("v-if",!0)],64)),a(F)?(g(),z(te,{key:2},[u.value?(g(),me(a(ma),{key:0,"z-index":e.zIndex,"initial-index":a(ie),infinite:e.infinite,"zoom-rate":e.zoomRate,"min-scale":e.minScale,"max-scale":e.maxScale,"show-progress":e.showProgress,"url-list":e.previewSrcList,crossorigin:e.crossorigin,"hide-on-click-modal":e.hideOnClickModal,teleported:e.previewTeleported,"close-on-press-escape":e.closeOnPressEscape,onClose:H,onSwitch:j},{progress:v(N=>[T(e.$slots,"progress",he(ke(N)))]),toolbar:v(N=>[T(e.$slots,"toolbar",he(ke(N)))]),default:v(()=>[e.$slots.viewer?(g(),z("div",{key:0},[T(e.$slots,"viewer")])):k("v-if",!0)]),_:3},8,["z-index","initial-index","infinite","zoom-rate","min-scale","max-scale","show-progress","url-list","crossorigin","hide-on-click-modal","teleported","close-on-press-escape"])):k("v-if",!0)],64)):k("v-if",!0)],16))}});var ya=Ce(wa,[["__file","image.vue"]]);const Ia=Oe(ya);export{Ia as E};
