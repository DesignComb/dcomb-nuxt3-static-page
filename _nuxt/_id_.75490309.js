import{_ as oe,o,c as l,a as t,l as ne,g as le,h as de,C as ce,q as _e,s as J,i as ue,D as be,A as h,E as x,z as X,t as _,v as e,b as Y,w as u,d as Q,F as v,m as f,G as r,x as Z,H as pe,I as me,J as ee,K as te,B as se,y as he,p as xe,f as ve,e as fe}from"./entry.cde3473d.js";import{_ as ge}from"./workCard.cf21f8c0.js";const ke={},we={class:"h-8 border-solid border-black border-1 border-b-0 flex justify-between items-center"},Ie={class:"flex items-center"},Te=t("div",{class:"w-16 mx-4 flex justify-around"},[t("div",{class:"w-3 h-3 rounded-full bg-red-500"}),t("div",{class:"w-3 h-3 rounded-full bg-yellow-500"}),t("div",{class:"w-3 h-3 rounded-full bg-green-500"})],-1),ye={class:"font-Orbitron"},Se=le('<div class="flex h-full w-28 justify-between items-center"><div class="h-full flex items-center"><div class="i-bx-minus text-xl"></div></div><div class="h-full flex items-center"><div class="i-bx-square text-xl"></div></div><div class="h-full flex items-center bg-red-500"><div class="i-bx-x text-2xl text-white"></div></div></div>',1);function $e(d,i){return o(),l("div",we,[t("div",Ie,[Te,t("div",ye,[ne(d.$slots,"default")])]),Se])}const Ce=oe(ke,[["render",$e]]),n=d=>(xe("data-v-a77920ed"),d=d(),ve(),d),Le={class:"col-span-3 md:text-[3.5rem] text-black"},Ne={class:"col-span-3 md:col-span-2 md:pr-12"},De={class:"relative h-[calc(100%-2rem)] min-h-100"},Me={class:"text-left bg-white border-solid border-black border-1 absolute top-0 left-0 right-0 bottom-0 overflow-y-auto break-words"},Ee=["src"],Be={class:"col-span-3 md:col-span-1 md:pr-8 md:mt-0 mt-12 text-left text-sm tracking-wide leading-relaxed space-y-12"},He={key:0},Oe=n(()=>t("h4",{class:"text-black mb-4"},"INTRODUCTION",-1)),je=["innerHTML"],Pe={key:1},Ae=["href"],Re=le('<span class="btn-3d-flip-box relative block w-full h-full transition duration-500 ease-in-out" data-v-a77920ed><span class="w-full p-2.5 block text-base box-border backface-hidden border-solid border-black text-black border-1" data-v-a77920ed> DEMO<i class="inline-block i-bx-chevrons-right vertical-sub scale-110" data-v-a77920ed></i></span><span class="btn-3d-flip-back text-base absolute box-border w-full p-2.5 top-0 left-[100%] border-solid border-black bg-black text-white border-1 backface-hidden whitespace-nowrap" data-v-a77920ed> EXPLORE NOW<i class="inline-block i-bx-link-external vertical-sub ml-2" data-v-a77920ed></i></span></span>',1),Ve=[Re],Ue={class:"text-xs mt-2"},Fe={key:2},Ge=n(()=>t("h6",{class:"text-black mb-4"},"CLIENT",-1)),We=["innerHTML"],qe={key:3},ze=n(()=>t("h6",{class:"text-black mb-4"},"CONTRIBUTIONS",-1)),Ke=["innerHTML"],Je={key:4},Xe=n(()=>t("h6",{class:"text-black mb-2"},"SKILLS",-1)),Ye={key:5},Qe=n(()=>t("h6",{class:"text-black"},"DATE",-1)),Ze=["href"],et=n(()=>t("div",{class:"inline-block i-bxl-github vertical-sub text-3xl hover:text-black"},null,-1)),tt=[et],st={class:"col-span-3 mt-12"},ot=n(()=>t("h5",{class:"text-black mb-4"},"Others",-1)),lt={class:"relative grid xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12 justify-center flex-items-stretch"},at=["src"],it=de({__name:"[id]",async setup(d){let i,b;const g=ce(),p=_e();[i,b]=J(()=>Z("notionDB",()=>p.fetchNotionDB())),await i,b();const{data:s,error:rt}=([i,b]=J(()=>Z(g.params.id,()=>p.fetchNotionPage(g.params.id),"$xnSjWbAcFx")),i=await i,b(),i);return ue(()=>{setTimeout(()=>{p.notionPage||window.location.reload()},100)}),be({title:`${h(s.value)} | 蜂巢設計 Design Comb`,ogTitle:`${h(s.value)} | 蜂巢設計 Design Comb`,description:`${x(s.value)}`,ogDescription:`${x(s.value)}`,ogImage:`${X(s.value)}`}),(c,nt)=>{var k,w,I,T,y,S,$,C,L,N,D,M,E,B,H,O,j,P,A,R,V,U,F,G,W,q;const ae=Ce,ie=ge,re=fe;return o(),l("div",{class:"w-full max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:p-12 p-6 text-left",key:e(g).params.id},[t("h1",Le,_(("getItemTitleText"in c?c.getItemTitleText:e(h))(e(s))),1),t("div",Ne,[Y(ae,null,{default:u(()=>[Q("MY WEBSITE")]),_:1}),t("div",De,[t("div",Me,[t("div",null,[(o(!0),l(v,null,f(e(pe)(e(s)),a=>(o(),l("img",{class:"w-full",src:a,alt:"cover"},null,8,Ee))),256))])])])]),t("div",Be,[e(x)(e(s))?(o(),l("div",He,[Oe,t("div",{innerHTML:e(x)(e(s))},null,8,je)])):r("",!0),(I=(w=(k=e(s))==null?void 0:k.properties)==null?void 0:w.Link)!=null&&I.url?(o(),l("div",Pe,[t("a",{href:(S=(y=(T=e(s))==null?void 0:T.properties)==null?void 0:y.Link)==null?void 0:S.url,target:"_blank",class:"btn-3d-flip relative block perspective-[2000rem] pr-12"},Ve,8,Ae),t("div",Ue,_(e(me)(e(s))),1)])):r("",!0),e(ee)(e(s))?(o(),l("div",Fe,[Ge,t("div",{innerHTML:e(ee)(e(s))},null,8,We)])):r("",!0),e(te)(e(s))?(o(),l("div",qe,[ze,t("div",{innerHTML:e(te)(e(s))},null,8,Ke)])):r("",!0),(L=(C=($=e(s))==null?void 0:$.properties)==null?void 0:C.Skill)!=null&&L.multi_select?(o(),l("div",Je,[Xe,(o(!0),l(v,null,f((M=(D=(N=e(s))==null?void 0:N.properties)==null?void 0:D.Skill)==null?void 0:M.multi_select,(a,m)=>(o(),l("span",{key:m,class:se([`notion-bg-${a.color}`,"inline-flex pt-0.5 pb-1 px-3 mr-1.5 mb-1.5 text-[0.75rem] shadow-md text-black rounded-full border-solid border-[#666] border-2"])},_(a.name),3))),128))])):r("",!0),(O=(H=(B=(E=e(s))==null?void 0:E.properties)==null?void 0:B.Update)==null?void 0:H.date)!=null&&O.start?(o(),l("div",Ye,[Qe,t("span",null,_((R=(A=(P=(j=e(s))==null?void 0:j.properties)==null?void 0:P.Update)==null?void 0:A.date)==null?void 0:R.start),1)])):r("",!0),(F=(U=(V=e(s))==null?void 0:V.properties)==null?void 0:U.GitHub)!=null&&F.url?(o(),l("a",{key:6,href:(q=(W=(G=e(s))==null?void 0:G.properties)==null?void 0:W.GitHub)==null?void 0:q.url,target:"_blank",class:"block cursor-pointer"},tt,8,Ze)):r("",!0)]),t("div",st,[ot,t("div",lt,[(o(!0),l(v,null,f(e(p).getSimilarItems,a=>(o(),he(re,{to:`/Projects/${a.id}`,key:a.id,external:""},{default:u(()=>[Y(ie,null,{cover:u(()=>[t("img",{src:("getItemCover"in c?c.getItemCover:e(X))(a),alt:"cover"},null,8,at)]),title:u(()=>[Q(_(("getItemTitleText"in c?c.getItemTitleText:e(h))(a)),1)]),tags:u(()=>{var m,z;return[(o(!0),l(v,null,f((z=(m=a==null?void 0:a.properties)==null?void 0:m.Skill)==null?void 0:z.multi_select,(K,dt)=>(o(),l("div",{class:se([`notion-bg-${K.color}`,"inline-flex pt-0.5 pb-1 px-3 mr-1.5 mb-1.5 text-[0.75rem] shadow-md text-black rounded-full border-solid border-[#666] border-2"])},_(K.name),3))),256))]}),_:2},1024)]),_:2},1032,["to"]))),128))])])])}}});const ut=oe(it,[["__scopeId","data-v-a77920ed"]]);export{ut as default};
