import{_ as H,o,c as l,a as e,D as F,v as U,g as G,G as W,h as z,i as B,s as K,t as c,j as t,b as O,w as d,d as j,F as m,r as x,k as M,n as P,H as X,I as Y,q as A,l as Z,m as J,p as Q,f as ee,e as te}from"./entry.d6e08c97.js";import{_ as se}from"./workCard.1139099c.js";const oe={},le={class:"h-8 border-solid border-black border-1 border-b-0 flex justify-between items-center"},ae={class:"flex items-center"},re=e("div",{class:"w-16 mx-4 flex justify-around"},[e("div",{class:"w-3 h-3 rounded-full bg-red-500"}),e("div",{class:"w-3 h-3 rounded-full bg-yellow-500"}),e("div",{class:"w-3 h-3 rounded-full bg-green-500"})],-1),ne={class:"font-Orbitron"},ie=U('<div class="flex h-full w-28 justify-between items-center"><div class="h-full flex items-center"><div class="i-bx-minus text-xl"></div></div><div class="h-full flex items-center"><div class="i-bx-square text-xl"></div></div><div class="h-full flex items-center bg-red-500"><div class="i-bx-x text-2xl text-white"></div></div></div>',1);function ce(n,a){return o(),l("div",le,[e("div",ae,[re,e("div",ne,[F(n.$slots,"default")])]),ie])}const de=H(oe,[["render",ce]]),_=n=>(Q("data-v-4e15a88f"),n=n(),ee(),n),_e={class:"col-span-3 md:text-[3.5rem] text-black"},ue={class:"col-span-3 md:col-span-2 md:pr-12"},be={class:"text-left bg-white border-solid border-black border-1 h-[40rem] overflow-y-auto break-words"},pe=["src"],me={class:"col-span-3 md:col-span-1 md:pr-8 md:mt-0 mt-12 text-left text-sm tracking-wide leading-relaxed space-y-12"},xe=_(()=>e("h4",{class:"text-black mb-4"},"INTRODUCTION",-1)),fe=["innerHTML"],he=["href"],ve=U('<span class="btn-3d-flip-box relative block w-full h-full transition duration-500 ease-in-out" data-v-4e15a88f><span class="w-full p-2.5 block text-base box-border backface-hidden border-solid border-black text-black border-1" data-v-4e15a88f> DEMO<div class="inline-block i-bx-chevrons-right vertical-sub scale-110" data-v-4e15a88f></div></span><span class="btn-3d-flip-back text-base absolute box-border w-full p-2.5 top-0 left-[100%] border-solid border-black bg-black text-white border-1 backface-hidden whitespace-nowrap" data-v-4e15a88f> EXPLORE NOW<div class="inline-block i-bx-link-external vertical-sub ml-2" data-v-4e15a88f></div></span></span>',1),ge=[ve],ke=_(()=>e("h6",{class:"text-black mb-2"},"SKILLS",-1)),we=_(()=>e("h6",{class:"text-black"},"DATE",-1)),Ie=["href"],Te=_(()=>e("div",{class:"inline-block i-bxl-github vertical-sub text-3xl hover:text-black"},null,-1)),ye=[Te],Se={class:"col-span-3 mt-12"},$e=_(()=>e("h5",{class:"text-black mb-4"},"Others",-1)),Ne={class:"relative grid xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12 justify-center flex-items-stretch"},Ce=["src"],De=G({__name:"[id]",async setup(n){let a,u;const f=W(),b=z();[a,u]=B(()=>M("notionDB",()=>b.fetchNotionDB())),await a,u();const{data:r,error:Ee}=([a,u]=B(()=>M(f.params.id,()=>b.fetchNotionPage(f.params.id),"$tUZUA845Lw")),a=await a,u(),a);return K(()=>{setTimeout(()=>{b.notionPage||(console.log("阿阿阿"),window.location.reload())},100)}),(i,Le)=>{var h,v,g,k,w,I,T,y,S,$,N,C,D;const V=de,R=se,q=te;return o(),l("div",{class:"w-full max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:p-12 p-6 text-left",key:t(f).params.id},[e("h1",_e,c(("getItemTitleText"in i?i.getItemTitleText:t(P))(t(r))),1),e("div",ue,[O(V,null,{default:d(()=>[j("MY WEBSITE")]),_:1}),e("div",be,[e("div",null,[(o(!0),l(m,null,x(t(X)(t(r)),s=>(o(),l("img",{class:"w-full",src:s,alt:"cover"},null,8,pe))),256))])])]),e("div",me,[e("div",null,[xe,e("div",{innerHTML:t(Y)(t(r))},null,8,fe)]),e("a",{href:(g=(v=(h=t(r))==null?void 0:h.properties)==null?void 0:v.Link)==null?void 0:g.url,target:"_blank",class:"btn-3d-flip relative block perspective-[2000rem] pr-12"},ge,8,he),e("div",null,[ke,(o(!0),l(m,null,x((I=(w=(k=t(r))==null?void 0:k.properties)==null?void 0:w.Skill)==null?void 0:I.multi_select,(s,p)=>(o(),l("span",{key:p,class:A([`notion-bg-${s.color}`,"py-1 px-2.5 mr-1 rounded-md text-xs"])},c(s.name),3))),128))]),e("div",null,[we,e("span",null,c(($=(S=(y=(T=t(r))==null?void 0:T.properties)==null?void 0:y.Update)==null?void 0:S.date)==null?void 0:$.start),1)]),e("a",{href:(D=(C=(N=t(r))==null?void 0:N.properties)==null?void 0:C.GitHub)==null?void 0:D.url,target:"_blank",class:"block cursor-pointer"},ye,8,Ie)]),e("div",Se,[$e,e("div",Ne,[(o(!0),l(m,null,x(t(b).getSimilarItems,s=>(o(),Z(q,{to:`/works/${s.id}`,key:s.id,"no-rel":""},{default:d(()=>[O(R,null,{cover:d(()=>[e("img",{src:("getItemCover"in i?i.getItemCover:t(J))(s),alt:"cover"},null,8,Ce)]),title:d(()=>[j(c(("getItemTitleText"in i?i.getItemTitleText:t(P))(s)),1)]),tags:d(()=>{var p,E;return[(o(!0),l(m,null,x((E=(p=s==null?void 0:s.properties)==null?void 0:p.Tags)==null?void 0:E.multi_select,(L,Be)=>(o(),l("div",{class:A([`notion-bg-${L.color}`,"inline-flex pt-0.5 pb-1 px-3 mr-1.5 mb-1.5 text-[0.75rem] shadow-md text-black rounded-full border-solid border-[#666] border-2"])},c(L.name),3))),256))]}),_:2},1024)]),_:2},1032,["to"]))),128))])])])}}});const Me=H(De,[["__scopeId","data-v-4e15a88f"]]);export{Me as default};