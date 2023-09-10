import{_ as H,o,c as l,a as e,D as G,v as V,g as U,G as W,h as z,i as B,s as K,t as d,j as t,b as L,w as c,d as O,F as p,r as f,k as j,n as M,H as X,I as Y,q as P,l as J,m as Q,p as Z,f as ee,e as te}from"./entry.3c8fb53e.js";import{_ as se}from"./workCard.da930123.js";const oe={},le={class:"h-8 border-solid border-black border-1 border-b-0 flex justify-between items-center"},ae={class:"flex items-center"},ne=e("div",{class:"w-16 mx-4 flex justify-around"},[e("div",{class:"w-3 h-3 rounded-full bg-red-500"}),e("div",{class:"w-3 h-3 rounded-full bg-yellow-500"}),e("div",{class:"w-3 h-3 rounded-full bg-green-500"})],-1),re={class:"font-Orbitron"},ie=V('<div class="flex h-full w-28 justify-between items-center"><div class="h-full flex items-center"><div class="i-bx-minus text-xl"></div></div><div class="h-full flex items-center"><div class="i-bx-square text-xl"></div></div><div class="h-full flex items-center bg-red-500"><div class="i-bx-x text-2xl text-white"></div></div></div>',1);function de(r,n){return o(),l("div",le,[e("div",ae,[ne,e("div",re,[G(r.$slots,"default")])]),ie])}const ce=H(oe,[["render",de]]),_=r=>(Z("data-v-af2fb99d"),r=r(),ee(),r),_e={class:"w-full max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:p-12 p-6 text-left"},be={class:"col-span-3 md:text-[3.5rem] text-black"},ue={class:"col-span-3 md:col-span-2 md:pr-12"},pe={class:"text-left bg-white border-solid border-black border-1 h-[40rem] overflow-y-auto break-words"},fe=["src"],me={class:"col-span-3 md:col-span-1 md:pr-8 md:mt-0 mt-12 text-left text-sm tracking-wide leading-relaxed space-y-12"},xe=_(()=>e("h4",{class:"text-black mb-4"},"INTRODUCTION",-1)),he=["innerHTML"],ve=["href"],ge=V('<span class="btn-3d-flip-box relative block w-full h-full transition duration-500 ease-in-out" data-v-af2fb99d><span class="w-full p-2.5 block text-base box-border backface-hidden border-solid border-black text-black border-1" data-v-af2fb99d> DEMO<div class="inline-block i-bx-chevrons-right vertical-sub scale-110" data-v-af2fb99d></div></span><span class="btn-3d-flip-back text-base absolute box-border w-full p-2.5 top-0 left-[100%] border-solid border-black bg-black text-white border-1 backface-hidden whitespace-nowrap" data-v-af2fb99d> EXPLORE NOW<div class="inline-block i-bx-link-external vertical-sub ml-2" data-v-af2fb99d></div></span></span>',1),ke=[ge],we=_(()=>e("h6",{class:"text-black mb-2"},"SKILLS",-1)),Ie=_(()=>e("h6",{class:"text-black"},"DATE",-1)),Te=["href"],ye=_(()=>e("div",{class:"inline-block i-bxl-github vertical-sub text-3xl hover:text-black"},null,-1)),Se=[ye],$e={class:"col-span-3 mt-12"},Ne=_(()=>e("h5",{class:"text-black mb-4"},"Others",-1)),Ce={class:"relative grid xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12 justify-center flex-items-stretch"},De=["src"],Ee=U({__name:"[id]",async setup(r){let n,b;const A=W(),m=z();[n,b]=B(()=>j("notionDB",()=>m.fetchNotionDB())),await n,b();const{data:a,error:Be}=([n,b]=B(()=>j("notionPage",()=>m.fetchNotionPage(A.params.id))),n=await n,b(),n);return K(()=>{setTimeout(()=>{a.value||(console.log("阿阿阿"),window.location.reload())},100)}),(i,Le)=>{var x,h,v,g,k,w,I,T,y,S,$,N,C;const R=ce,q=se,F=te;return o(),l("div",_e,[e("h1",be,d(("getItemTitleText"in i?i.getItemTitleText:t(M))(t(a))),1),e("div",ue,[L(R,null,{default:c(()=>[O("MY WEBSITE")]),_:1}),e("div",pe,[e("div",null,[(o(!0),l(p,null,f(t(X)(t(a)),s=>(o(),l("img",{class:"w-full",src:s,alt:"cover"},null,8,fe))),256))])])]),e("div",me,[e("div",null,[xe,e("div",{innerHTML:t(Y)(t(a))},null,8,he)]),e("a",{href:(v=(h=(x=t(a))==null?void 0:x.properties)==null?void 0:h.Link)==null?void 0:v.url,target:"_blank",class:"btn-3d-flip relative block perspective-[2000rem] pr-12"},ke,8,ve),e("div",null,[we,(o(!0),l(p,null,f((w=(k=(g=t(a))==null?void 0:g.properties)==null?void 0:k.Skill)==null?void 0:w.multi_select,(s,u)=>(o(),l("span",{key:u,class:P([`notion-bg-${s.color}`,"py-1 px-2.5 mr-1 rounded-md text-xs"])},d(s.name),3))),128))]),e("div",null,[Ie,e("span",null,d((S=(y=(T=(I=t(a))==null?void 0:I.properties)==null?void 0:T.Update)==null?void 0:y.date)==null?void 0:S.start),1)]),e("a",{href:(C=(N=($=t(a))==null?void 0:$.properties)==null?void 0:N.GitHub)==null?void 0:C.url,target:"_blank",class:"block cursor-pointer"},Se,8,Te)]),e("div",$e,[Ne,e("div",Ce,[(o(!0),l(p,null,f(t(m).getSimilarItems,s=>(o(),J(F,{to:`/works/${s.id}`},{default:c(()=>[L(q,null,{cover:c(()=>[e("img",{src:("getItemCover"in i?i.getItemCover:t(Q))(s),alt:"cover"},null,8,De)]),title:c(()=>[O(d(("getItemTitleText"in i?i.getItemTitleText:t(M))(s)),1)]),tags:c(()=>{var u,D;return[(o(!0),l(p,null,f((D=(u=s==null?void 0:s.properties)==null?void 0:u.Tags)==null?void 0:D.multi_select,(E,Oe)=>(o(),l("div",{class:P([`notion-bg-${E.color}`,"inline-flex pt-0.5 pb-1 px-3 mr-1.5 mb-1.5 text-[0.75rem] shadow-md text-black rounded-full border-solid border-[#666] border-2"])},d(E.name),3))),256))]}),_:2},1024)]),_:2},1032,["to"]))),256))])])])}}});const Pe=H(Ee,[["__scopeId","data-v-af2fb99d"]]);export{Pe as default};
