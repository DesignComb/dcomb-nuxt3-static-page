import{_ as w}from"./sectionExpandTitle.vue.a3cdd0b2.js";import{_ as T}from"./workCard.656c7e76.js";import{h as b,i as B,j as C,o as s,c as r,b as p,w as t,d as n,a as u,F as g,r as x,k as a,l as I,m as y,n as D,t as f,q as j,s as N,e as A}from"./entry.66c167c7.js";const V={class:"w-full min-h-screen max-w-[1440px] mx-auto pt-8"},$={class:"relative grid xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 md:gap-12 justify-center flex-items-stretch p-12 md:p-20 pt-0 md:pt-0"},F=["src"],M=b({__name:"Projects",async setup(P){let l,c;const i=B();return[l,c]=C(()=>I("notionDB",()=>i.fetchNotionDB())),await l,c(),(o,S)=>{const h=w,k=T,v=A;return s(),r("div",V,[p(h,null,{enTitle:t(()=>[n(" Projects ")]),title:t(()=>[n(" 作品 ")]),_:1}),u("div",$,[(s(!0),r(g,null,x(a(i).getDBItemArr,e=>(s(),y(v,{href:`/works/${e.id}`,key:e.id},{default:t(()=>[p(k,null,{cover:t(()=>[u("img",{src:("getItemCover"in o?o.getItemCover:a(D))(e),alt:"cover"},null,8,F)]),title:t(()=>[n(f(("getItemTitleText"in o?o.getItemTitleText:a(j))(e)),1)]),tags:t(()=>{var _,m;return[(s(!0),r(g,null,x((m=(_=e==null?void 0:e.properties)==null?void 0:_.Tags)==null?void 0:m.multi_select,(d,q)=>(s(),r("div",{class:N([`notion-bg-${d.color}`,"inline-flex pt-0.5 pb-1 px-3 mr-1.5 mb-1.5 text-[0.75rem] shadow-md text-black rounded-full border-solid border-[#666] border-2"])},f(d.name),3))),256))]}),_:2},1024)]),_:2},1032,["href"]))),128))])])}}});export{M as default};