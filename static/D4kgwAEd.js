import{E as R}from"./C1vk3Uu8.js";import{E as B}from"./BVVDCOd4.js";import{d as T,O as N,P as U,g as A,v as I,x as d,A as o,B as a,E as l,ch as S,H as m,y as p,bv as q,T as L,cp as D,C as n,V as F,bt as P,R as G,ck as H,z as O,cl as W,S as $,W as j,$ as J,cq as K,cr as M,_ as Q}from"./D3PuhZ02.js";import{E as X}from"./BRj-_sqy.js";import{E as Y}from"./eWvHIczC.js";import{u as Z}from"./DJudXn0_.js";/* empty css        */const h={class:"container"},ee={class:"flex-between pt10 pb10"},te={class:"flex-end pt10 pb10"},oe=T({__name:"pictureToBase64",setup(ae){const e=N({file:{name:"",size:0,list:[]},textarea:"",radio:"base64"}),{onCopy:y}=Z(U(e,"textarea"));function E(c){const{name:t,size:u}=c.file;e.file.name=t,e.file.size=u;const r=new FileReader;return r.readAsDataURL(c.file),r.onload=i=>{i.target!==null&&(e.textarea=i.target.result,e.file.list=[e.textarea])},Promise.resolve(!0)}function b(){e.textarea="",e.file.name="",e.file.size=0,e.file.list=[]}return(c,t)=>{const u=R,r=B,i=q,C=L,V=X,_=G,g=H,f=F,x=$,v=K,w=J,k=Y,z=A("TwoColumnLayout");return d(),I("div",h,[o(z,null,{default:a(()=>[o(u,{type:"warning",title:l(S),closable:!1,class:"mb10"},null,8,["title"]),o(k,{header:"图片 转 base64"},{default:a(()=>[e.textarea?(d(),m(i,{key:0,effect:"dark",content:"点击放大",placement:"bottom"},{default:a(()=>[o(r,{class:"preview-image",src:e.textarea,fit:"cover","preview-src-list":[e.textarea]},null,8,["src","preview-src-list"])]),_:1})):(d(),m(V,{key:1,"show-file-list":!1,drag:"","http-request":E},{default:a(()=>[o(C,{class:"el-icon--upload"},{default:a(()=>[o(l(D))]),_:1}),t[3]||(t[3]=p("div",{class:"el-upload__text"},[n("拖住到这里 或 "),p("em",null,"点击上传照片")],-1))]),_:1})),p("div",ee,[o(f,null,{default:a(()=>[o(_,{modelValue:e.file.name,"onUpdate:modelValue":t[0]||(t[0]=s=>e.file.name=s),readonly:"",placeholder:"文件名"},null,8,["modelValue"]),e.file.size?(d(),m(g,{key:0,type:"primary",round:""},{default:a(()=>[n(O(l(W)(e.file.size)),1)]),_:1})):P("",!0)]),_:1}),o(f,null,{default:a(()=>[o(x,{icon:l(j),type:"danger",onClick:b},{default:a(()=>t[4]||(t[4]=[n("清空所有")])),_:1},8,["icon"])]),_:1})]),o(_,{modelValue:e.textarea,"onUpdate:modelValue":t[1]||(t[1]=s=>e.textarea=s),rows:10,autosize:{minRows:10,maxRows:10},resize:"none",placeholder:"转换后的base64字符串",type:"textarea"},null,8,["modelValue"]),p("div",te,[o(w,{modelValue:e.radio,"onUpdate:modelValue":t[2]||(t[2]=s=>e.radio=s),class:"mr10"},{default:a(()=>[o(v,{label:"base64"},{default:a(()=>t[5]||(t[5]=[n("base64")])),_:1})]),_:1},8,["modelValue"]),o(x,{type:"primary",icon:l(M),onClick:l(y)},{default:a(()=>t[6]||(t[6]=[n("复制字符串")])),_:1},8,["icon","onClick"])])]),_:1})]),_:1})])}}}),ce=Q(oe,[["__scopeId","data-v-e7a12d6c"]]);export{ce as default};
