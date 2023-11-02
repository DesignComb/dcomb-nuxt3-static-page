import{_ as se,o,c as l,a as t,l as re,g as oe,h as ne,C as ce,q as de,s as K,i as _e,D as ue,A as h,E as x,z as X,t as c,v as e,b as Y,w as u,d as Q,F as v,m as f,G as d,x as Z,H as be,I as pe,J as ee,B as te,y as me,p as he,f as xe,e as ve}from"./entry.526f720f.js";import{_ as fe}from"./workCard.f18c06ca.js";const ge={},ke={class:"h-8 border-solid border-black border-1 border-b-0 flex justify-between items-center"},we={class:"flex items-center"},Ie=t("div",{class:"w-16 mx-4 flex justify-around"},[t("div",{class:"w-3 h-3 rounded-full bg-red-500"}),t("div",{class:"w-3 h-3 rounded-full bg-yellow-500"}),t("div",{class:"w-3 h-3 rounded-full bg-green-500"})],-1),Te={class:"font-Orbitron"},ye=oe('<div class="flex h-full w-28 justify-between items-center"><div class="h-full flex items-center"><div class="i-bx-minus text-xl"></div></div><div class="h-full flex items-center"><div class="i-bx-square text-xl"></div></div><div class="h-full flex items-center bg-red-500"><div class="i-bx-x text-2xl text-white"></div></div></div>',1);function Se(r,a){return o(),l("div",ke,[t("div",we,[Ie,t("div",Te,[re(r.$slots,"default")])]),ye])}const $e=se(ge,[["render",Se]]),_=r=>(he("data-v-b90e247c"),r=r(),xe(),r),Ce={class:"col-span-3 md:text-[3.5rem] text-black"},Ne={class:"col-span-3 md:col-span-2 md:pr-12"},De={class:"relative h-[calc(100%-2rem)] min-h-100"},Le={class:"text-left bg-white border-solid border-black border-1 absolute top-0 left-0 right-0 bottom-0 overflow-y-auto break-words"},Be=["src"],Ee={class:"col-span-3 md:col-span-1 md:pr-8 md:mt-0 mt-12 text-left text-sm tracking-wide leading-relaxed space-y-12"},Me={key:0},Oe=_(()=>t("h4",{class:"text-black mb-4"},"INTRODUCTION",-1)),je=["innerHTML"],He={key:1},Pe=["href"],Ae=oe('<span class="btn-3d-flip-box relative block w-full h-full transition duration-500 ease-in-out" data-v-b90e247c><span class="w-full p-2.5 block text-base box-border backface-hidden border-solid border-black text-black border-1" data-v-b90e247c> DEMO<i class="inline-block i-bx-chevrons-right vertical-sub scale-110" data-v-b90e247c></i></span><span class="btn-3d-flip-back text-base absolute box-border w-full p-2.5 top-0 left-[100%] border-solid border-black bg-black text-white border-1 backface-hidden whitespace-nowrap" data-v-b90e247c> EXPLORE NOW<i class="inline-block i-bx-link-external vertical-sub ml-2" data-v-b90e247c></i></span></span>',1),Re=[Ae],Ve={class:"text-xs mt-2"},Ue={key:2},Fe=_(()=>t("h6",{class:"text-black mb-4"},"CONTRIBUTIONS",-1)),Ge=["innerHTML"],We={key:3},qe=_(()=>t("h6",{class:"text-black mb-2"},"SKILLS",-1)),ze={key:4},Je=_(()=>t("h6",{class:"text-black"},"DATE",-1)),Ke=["href"],Xe=_(()=>t("div",{class:"inline-block i-bxl-github vertical-sub text-3xl hover:text-black"},null,-1)),Ye=[Xe],Qe={class:"col-span-3 mt-12"},Ze=_(()=>t("h5",{class:"text-black mb-4"},"Others",-1)),et={class:"relative grid xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12 justify-center flex-items-stretch"},tt=["src"],st=ne({__name:"[id]",async setup(r){let a,b;const g=ce(),p=de();[a,b]=K(()=>Z("notionDB",()=>p.fetchNotionDB())),await a,b();const{data:s,error:ot}=([a,b]=K(()=>Z(g.params.id,()=>p.fetchNotionPage(g.params.id),"$xnSjWbAcFx")),a=await a,b(),a);return _e(()=>{setTimeout(()=>{p.notionPage||window.location.reload()},100)}),ue({title:`${h(s.value)} | 蜂巢設計 Design Comb`,ogTitle:`${h(s.value)} | 蜂巢設計 Design Comb`,description:`${x(s.value)}`,ogDescription:`${x(s.value)}`,ogImage:`${X(s.value)}`}),(n,lt)=>{var k,w,I,T,y,S,$,C,N,D,L,B,E,M,O,j,H,P,A,R,V,U,F,G,W,q;const le=$e,ie=fe,ae=ve;return o(),l("div",{class:"w-full max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:p-12 p-6 text-left",key:e(g).params.id},[t("h1",Ce,c(("getItemTitleText"in n?n.getItemTitleText:e(h))(e(s))),1),t("div",Ne,[Y(le,null,{default:u(()=>[Q("MY WEBSITE")]),_:1}),t("div",De,[t("div",Le,[t("div",null,[(o(!0),l(v,null,f(e(be)(e(s)),i=>(o(),l("img",{class:"w-full",src:i,alt:"cover"},null,8,Be))),256))])])])]),t("div",Ee,[e(x)(e(s))?(o(),l("div",Me,[Oe,t("div",{innerHTML:e(x)(e(s))},null,8,je)])):d("",!0),(I=(w=(k=e(s))==null?void 0:k.properties)==null?void 0:w.Link)!=null&&I.url?(o(),l("div",He,[t("a",{href:(S=(y=(T=e(s))==null?void 0:T.properties)==null?void 0:y.Link)==null?void 0:S.url,target:"_blank",class:"btn-3d-flip relative block perspective-[2000rem] pr-12"},Re,8,Pe),t("div",Ve,c(e(pe)(e(s))),1)])):d("",!0),e(ee)(e(s))?(o(),l("div",Ue,[Fe,t("div",{innerHTML:e(ee)(e(s))},null,8,Ge)])):d("",!0),(N=(C=($=e(s))==null?void 0:$.properties)==null?void 0:C.Skill)!=null&&N.multi_select?(o(),l("div",We,[qe,(o(!0),l(v,null,f((B=(L=(D=e(s))==null?void 0:D.properties)==null?void 0:L.Skill)==null?void 0:B.multi_select,(i,m)=>(o(),l("span",{key:m,class:te([`notion-bg-${i.color}`,"inline-flex pt-0.5 pb-1 px-3 mr-1.5 mb-1.5 text-[0.75rem] shadow-md text-black rounded-full border-solid border-[#666] border-2"])},c(i.name),3))),128))])):d("",!0),(j=(O=(M=(E=e(s))==null?void 0:E.properties)==null?void 0:M.Update)==null?void 0:O.date)!=null&&j.start?(o(),l("div",ze,[Je,t("span",null,c((R=(A=(P=(H=e(s))==null?void 0:H.properties)==null?void 0:P.Update)==null?void 0:A.date)==null?void 0:R.start),1)])):d("",!0),(F=(U=(V=e(s))==null?void 0:V.properties)==null?void 0:U.GitHub)!=null&&F.url?(o(),l("a",{key:5,href:(q=(W=(G=e(s))==null?void 0:G.properties)==null?void 0:W.GitHub)==null?void 0:q.url,target:"_blank",class:"block cursor-pointer"},Ye,8,Ke)):d("",!0)]),t("div",Qe,[Ze,t("div",et,[(o(!0),l(v,null,f(e(p).getSimilarItems,i=>(o(),me(ae,{to:`/Projects/${i.id}`,key:i.id,external:""},{default:u(()=>[Y(ie,null,{cover:u(()=>[t("img",{src:("getItemCover"in n?n.getItemCover:e(X))(i),alt:"cover"},null,8,tt)]),title:u(()=>[Q(c(("getItemTitleText"in n?n.getItemTitleText:e(h))(i)),1)]),tags:u(()=>{var m,z;return[(o(!0),l(v,null,f((z=(m=i==null?void 0:i.properties)==null?void 0:m.Skill)==null?void 0:z.multi_select,(J,it)=>(o(),l("div",{class:te([`notion-bg-${J.color}`,"inline-flex pt-0.5 pb-1 px-3 mr-1.5 mb-1.5 text-[0.75rem] shadow-md text-black rounded-full border-solid border-[#666] border-2"])},c(J.name),3))),256))]}),_:2},1024)]),_:2},1032,["to"]))),128))])])])}}});const nt=se(st,[["__scopeId","data-v-b90e247c"]]);export{nt as default};
