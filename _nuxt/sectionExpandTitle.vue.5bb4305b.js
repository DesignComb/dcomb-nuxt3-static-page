import{i as f,r as s,M as _,N as m,o as k,c as x,a as e,m as l,O as u,P as i,d as c}from"./entry.097d8a9e.js";const b={class:"relative scale-[0.75] mb--8 pt-12 sm:scale-[1] pointer-events-none"},p=e("span",{class:"font-black text-[3rem] text-[#666]"},"|",-1),h=[p],w=e("span",{class:"font-black text-[3rem] text-[#666]"},"|",-1),g=[w],v={class:"font-black italic tracking-wide text-stroke-1 text-stroke-black font-Roboto text-[4rem] text-comb:25 z-10"},y={class:"font-black text-[4rem] text-[#666] translate-y-[-135%] z-20"},X=f({__name:"sectionExpandTitle",setup(z){const a=s(null),o=s(!1);_(a,([{isIntersecting:t}],d)=>{o.value=t});const n=s(),r=s();return m(async()=>{await u(o).toBe(!0),i(n,{transform:"translateX(-200%) skewX(-45deg)"},{duration:800,fill:"forwards"}),i(r,{transform:"translateX(100%) skewX(-45deg)"},{duration:800,fill:"forwards"})}),(t,d)=>(k(),x("div",b,[e("div",{ref_key:"el",ref:n,class:"absolute translate-x-[-95%] skew-x-[-45deg] left-1/2 w-48 py-10 mt--8 bg-white flex justify-end z-30"},h,512),e("div",{ref_key:"el2",ref:r,class:"absolute left-1/2 w-48 skew-x-[-45deg] py-10 mt--8 bg-white flex justify-start z-30"},g,512),e("h1",v,[l(t.$slots,"enTitle",{},()=>[c("Headline")])]),e("h1",y,[l(t.$slots,"title",{},()=>[c("標題")])]),e("div",{ref_key:"target",ref:a},null,512)]))}});export{X as _};