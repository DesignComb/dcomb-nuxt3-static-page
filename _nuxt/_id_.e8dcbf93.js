import{_ as ie,o,c as l,a as t,m as ce,g as ae,i as _e,D as ue,s as be,v as Y,j as pe,E as me,B as h,G as x,A as Q,t as _,x as e,b as k,w as u,d as Z,F as v,q as f,H as r,y as ee,z as te,I as he,J as xe,K as se,L as oe,C as le,p as ve,f as fe,h as ge,e as ke}from"./entry.df79182b.js";import{_ as we}from"./workCard.b994e371.js";const Ie={},Te={class:"h-8 border-solid border-black border-1 border-b-0 flex justify-between items-center"},ye={class:"flex items-center"},Se=t("div",{class:"w-16 mx-4 flex justify-around"},[t("div",{class:"w-3 h-3 rounded-full bg-red-500"}),t("div",{class:"w-3 h-3 rounded-full bg-yellow-500"}),t("div",{class:"w-3 h-3 rounded-full bg-green-500"})],-1),$e={class:"font-Orbitron"},Ce=ae('<div class="flex h-full w-28 justify-between items-center"><div class="h-full flex items-center"><div class="i-bx-minus text-xl"></div></div><div class="h-full flex items-center"><div class="i-bx-square text-xl"></div></div><div class="h-full flex items-center bg-red-500"><div class="i-bx-x text-2xl text-white"></div></div></div>',1);function Le(d,a){return o(),l("div",Te,[t("div",ye,[Se,t("div",$e,[ce(d.$slots,"default")])]),Ce])}const Ne=ie(Ie,[["render",Le]]),n=d=>(ve("data-v-702f7e8d"),d=d(),fe(),d),De={class:"col-span-3 md:text-[3.5rem] text-black"},Me={class:"col-span-3 md:col-span-2 md:pr-12"},Ee={class:"relative h-[calc(100%-2rem)] min-h-100"},Be={class:"text-left bg-white border-solid border-black border-1 absolute top-0 left-0 right-0 bottom-0 overflow-y-auto break-words"},He={class:"col-span-3 md:col-span-1 md:pr-8 md:mt-0 mt-12 text-left text-sm tracking-wide leading-relaxed space-y-12"},Oe={key:0},je=n(()=>t("h4",{class:"text-black mb-4"},"INTRODUCTION",-1)),Pe=["innerHTML"],Ae={key:1},Re=["href"],Ve=ae('<span class="btn-3d-flip-box relative block w-full h-full transition duration-500 ease-in-out" data-v-702f7e8d><span class="w-full p-2.5 block text-base box-border backface-hidden border-solid border-black text-black border-1" data-v-702f7e8d> DEMO<i class="inline-block i-bx-chevrons-right vertical-sub scale-110" data-v-702f7e8d></i></span><span class="btn-3d-flip-back text-base absolute box-border w-full p-2.5 top-0 left-[100%] border-solid border-black bg-black text-white border-1 backface-hidden whitespace-nowrap" data-v-702f7e8d> EXPLORE NOW<i class="inline-block i-bx-link-external vertical-sub ml-2" data-v-702f7e8d></i></span></span>',1),Ue=[Ve],Fe={class:"text-xs mt-2"},Ge={key:2},We=n(()=>t("h6",{class:"text-black mb-4"},"CLIENT",-1)),qe=["innerHTML"],ze={key:3},Ke=n(()=>t("h6",{class:"text-black mb-4"},"CONTRIBUTIONS",-1)),Je=["innerHTML"],Xe={key:4},Ye=n(()=>t("h6",{class:"text-black mb-2"},"SKILLS",-1)),Qe={key:5},Ze=n(()=>t("h6",{class:"text-black"},"DATE",-1)),et=["href"],tt=n(()=>t("div",{class:"inline-block i-bxl-github vertical-sub text-3xl hover:text-black"},null,-1)),st=[tt],ot={class:"col-span-3 mt-12"},lt=n(()=>t("h5",{class:"text-black mb-4"},"Others",-1)),it={class:"relative grid xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12 justify-center flex-items-stretch"},at=_e({__name:"[id]",async setup(d){let a,b;const g=ue(),p=be();[a,b]=Y(()=>ee("notionDB",()=>p.fetchNotionDB())),await a,b();const{data:s,error:rt}=([a,b]=Y(()=>ee(g.params.id,()=>p.fetchNotionPage(g.params.id),"$xnSjWbAcFx")),a=await a,b(),a);return pe(()=>{setTimeout(()=>{p.notionPage||window.location.reload()},100)}),me({title:`${h(s.value)} | 蜂巢設計 Design Comb`,ogTitle:`${h(s.value)} | 蜂巢設計 Design Comb`,description:`${x(s.value)}`,ogDescription:`${x(s.value)}`,ogImage:`${Q(s.value)}`}),(c,nt)=>{var I,T,y,S,$,C,L,N,D,M,E,B,H,O,j,P,A,R,V,U,F,G,W,q,z,K;const re=Ne,w=ge,ne=we,de=ke;return o(),l("div",{class:"w-full max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:p-12 p-6 text-left",key:e(g).params.id},[t("h1",De,_(("getItemTitleText"in c?c.getItemTitleText:e(h))(e(s))),1),t("div",Me,[k(re,null,{default:u(()=>[Z("MY WEBSITE")]),_:1}),t("div",Ee,[t("div",Be,[t("div",null,[(o(!0),l(v,null,f(e(he)(e(s)),i=>(o(),te(w,{class:"w-full",src:i,alt:"cover"},null,8,["src"]))),256))])])])]),t("div",He,[e(x)(e(s))?(o(),l("div",Oe,[je,t("div",{innerHTML:e(x)(e(s))},null,8,Pe)])):r("",!0),(y=(T=(I=e(s))==null?void 0:I.properties)==null?void 0:T.Link)!=null&&y.url?(o(),l("div",Ae,[t("a",{href:(C=($=(S=e(s))==null?void 0:S.properties)==null?void 0:$.Link)==null?void 0:C.url,target:"_blank",class:"btn-3d-flip relative block perspective-[2000rem] pr-12"},Ue,8,Re),t("div",Fe,_(e(xe)(e(s))),1)])):r("",!0),e(se)(e(s))?(o(),l("div",Ge,[We,t("div",{innerHTML:e(se)(e(s))},null,8,qe)])):r("",!0),e(oe)(e(s))?(o(),l("div",ze,[Ke,t("div",{innerHTML:e(oe)(e(s))},null,8,Je)])):r("",!0),(D=(N=(L=e(s))==null?void 0:L.properties)==null?void 0:N.Skill)!=null&&D.multi_select?(o(),l("div",Xe,[Ye,(o(!0),l(v,null,f((B=(E=(M=e(s))==null?void 0:M.properties)==null?void 0:E.Skill)==null?void 0:B.multi_select,(i,m)=>(o(),l("span",{key:m,class:le([`notion-bg-${i.color}`,"inline-flex pt-0.5 pb-1 px-3 mr-1.5 mb-1.5 text-[0.75rem] shadow-md text-black rounded-full border-solid border-[#666] border-2"])},_(i.name),3))),128))])):r("",!0),(P=(j=(O=(H=e(s))==null?void 0:H.properties)==null?void 0:O.Update)==null?void 0:j.date)!=null&&P.start?(o(),l("div",Qe,[Ze,t("span",null,_((U=(V=(R=(A=e(s))==null?void 0:A.properties)==null?void 0:R.Update)==null?void 0:V.date)==null?void 0:U.start),1)])):r("",!0),(W=(G=(F=e(s))==null?void 0:F.properties)==null?void 0:G.GitHub)!=null&&W.url?(o(),l("a",{key:6,href:(K=(z=(q=e(s))==null?void 0:q.properties)==null?void 0:z.GitHub)==null?void 0:K.url,target:"_blank",class:"block cursor-pointer"},st,8,et)):r("",!0)]),t("div",ot,[lt,t("div",it,[(o(!0),l(v,null,f(e(p).getSimilarItems,i=>(o(),te(de,{to:`/Projects/${i.id}`,key:i.id,external:""},{default:u(()=>[k(ne,null,{cover:u(()=>[k(w,{src:("getItemCover"in c?c.getItemCover:e(Q))(i),alt:"cover"},null,8,["src"])]),title:u(()=>[Z(_(("getItemTitleText"in c?c.getItemTitleText:e(h))(i)),1)]),tags:u(()=>{var m,J;return[(o(!0),l(v,null,f((J=(m=i==null?void 0:i.properties)==null?void 0:m.Skill)==null?void 0:J.multi_select,(X,dt)=>(o(),l("div",{class:le([`notion-bg-${X.color}`,"inline-flex pt-0.5 pb-1 px-3 mr-1.5 mb-1.5 text-[0.75rem] shadow-md text-black rounded-full border-solid border-[#666] border-2"])},_(X.name),3))),256))]}),_:2},1024)]),_:2},1032,["to"]))),128))])])])}}});const ut=ie(at,[["__scopeId","data-v-702f7e8d"]]);export{ut as default};