import{_ as v}from"./sectionExpandTitle.vue.a8f73257.js";import{u as w,a as T,g as C,b as I,_ as k}from"./index.6fd55fbb.js";import{f as y,g as B,o as t,c as s,b as p,w as o,d as n,a as u,F as g,r as f,h as a,t as x,n as D}from"./entry.52255c9a.js";const N={class:"w-full min-h-screen max-w-[1440px] mx-auto pt-8"},j={class:"relative grid xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 md:gap-12 justify-center flex-items-stretch p-12 md:p-20 pt-0 md:pt-0"},A=["href"],V=["src"],L=y({__name:"Projects",async setup($){let l,c;const i=w();return[l,c]=B(()=>T("notionDB",()=>i.fetchNotionDB())),await l,c(),(r,F)=>{const h=v,b=k;return t(),s("div",N,[p(h,null,{enTitle:o(()=>[n(" Projects ")]),title:o(()=>[n(" 作品 ")]),_:1}),u("div",j,[(t(!0),s(g,null,f(a(i).getDBItemArr,e=>(t(),s("a",{href:`/works/${e.id}`,key:e.id},[p(b,null,{cover:o(()=>[u("img",{src:("getItemCover"in r?r.getItemCover:a(C))(e),alt:"cover"},null,8,V)]),title:o(()=>[n(x(("getItemTitleText"in r?r.getItemTitleText:a(I))(e)),1)]),tags:o(()=>{var _,d;return[(t(!0),s(g,null,f((d=(_=e==null?void 0:e.properties)==null?void 0:_.Tags)==null?void 0:d.multi_select,(m,P)=>(t(),s("div",{class:D([`notion-bg-${m.color}`,"inline-flex pt-0.5 pb-1 px-3 mr-1.5 mb-1.5 text-[0.75rem] shadow-md text-black rounded-full border-solid border-[#666] border-2"])},x(m.name),3))),256))]}),_:2},1024)],8,A))),128))])])}}});export{L as default};
