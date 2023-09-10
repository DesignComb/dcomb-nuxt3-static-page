import{l as p,B as _,C as B,D as m,q as P,E as x,i as b,G as C,H as w,I as j}from"./entry.ff20296f.js";const A=()=>null;function M(...a){const n=typeof a[a.length-1]=="string"?a.pop():void 0;typeof a[0]!="string"&&a.unshift(n);let[e,o,r={}]=a;if(typeof e!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof o!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");r.server=r.server??!0,r.default=r.default??A,r.lazy=r.lazy??!1,r.immediate=r.immediate??!0;const t=x(),c=()=>t.isHydrating?t.payload.data[e]:t.static.data[e],f=()=>c()!==void 0;t._asyncData[e]||(t._asyncData[e]={data:p(c()??r.default()),pending:p(!f()),error:_(t.payload._errors,e),status:p("idle")});const s={...t._asyncData[e]};s.refresh=s.execute=(u={})=>{if(t._asyncDataPromises[e]){if(u.dedupe===!1)return t._asyncDataPromises[e];t._asyncDataPromises[e].cancelled=!0}if((u._initial||t.isHydrating&&u._initial!==!1)&&f())return c();s.pending.value=!0,s.status.value="pending";const d=new Promise((i,l)=>{try{i(o(t))}catch(v){l(v)}}).then(i=>{if(d.cancelled)return t._asyncDataPromises[e];let l=i;r.transform&&(l=r.transform(i)),r.pick&&(l=H(l,r.pick)),s.data.value=l,s.error.value=null,s.status.value="success"}).catch(i=>{if(d.cancelled)return t._asyncDataPromises[e];s.error.value=i,s.data.value=b(r.default()),s.status.value="error"}).finally(()=>{d.cancelled||(s.pending.value=!1,t.payload.data[e]=s.data.value,s.error.value&&(t.payload._errors[e]=C(s.error.value)),delete t._asyncDataPromises[e])});return t._asyncDataPromises[e]=d,t._asyncDataPromises[e]};const h=()=>s.refresh({_initial:!0}),D=r.server!==!1&&t.payload.serverRendered;{const u=w();if(u&&!u._nuxtOnBeforeMountCbs){u._nuxtOnBeforeMountCbs=[];const i=u._nuxtOnBeforeMountCbs;u&&(B(()=>{i.forEach(l=>{l()}),i.splice(0,i.length)}),m(()=>i.splice(0,i.length)))}D&&t.isHydrating&&f()?(s.pending.value=!1,s.status.value=s.error.value?"error":"success"):u&&(t.payload.serverRendered&&t.isHydrating||r.lazy)&&r.immediate?u._nuxtOnBeforeMountCbs.push(h):r.immediate&&h(),r.watch&&P(r.watch,()=>s.refresh());const d=t.hook("app:data:refresh",i=>{if(!i||i.includes(e))return s.refresh()});u&&m(d)}const y=Promise.resolve(t._asyncDataPromises[e]).then(()=>s);return Object.assign(y,s),y}function H(a,n){const e={};for(const o of n)e[o]=a[o];return e}const N=a=>{var e,o;const n=(o=(e=a==null?void 0:a.properties)==null?void 0:e.Cover)==null?void 0:o.files.map(r=>r.external.url);return n?n[0]:void 0},O=a=>{var n,e;return((e=(n=a==null?void 0:a.properties)==null?void 0:n.Name)==null?void 0:e.title.map(o=>o.plain_text).join(""))||""},g=a=>{var n,e;return(e=(n=a==null?void 0:a.properties)==null?void 0:n.Tags)==null?void 0:e.multi_select.map(o=>o.id)},T=j("main",{state:()=>({notionDB:null,notionPage:null}),actions:{async fetchNotionDB(){const a=await $fetch("https://api.notion.com/v1/databases/5ad9018ec1a9408cbc7781197832c880/query",{method:"POST",credentials:"include",headers:{Accept:"application/json",Authorization:"Bearer secret_8Ujk50jsgGBNH8x1D8pi3DKB1ppeIRHAs9XNdMCoyog"},body:{sorts:[{property:"Sort",direction:"ascending"}]}});return a&&(this.notionDB=a),a},async fetchNotionPage(a){const n=await $fetch(`https://api.notion.com/v1/pages/${a}`,{method:"GET",credentials:"include",headers:{Accept:"application/json",Authorization:"Bearer secret_8Ujk50jsgGBNH8x1D8pi3DKB1ppeIRHAs9XNdMCoyog"}});return n&&(this.notionPage=n),n}},getters:{getDBItemArr(){var a;if(this.notionDB)return(a=this.notionDB)==null?void 0:a.results},getSimilarItems(){var a,n;if(this.notionDB&&this.notionPage){const e=g(this.notionPage);return((n=(a=this.notionDB)==null?void 0:a.results)==null?void 0:n.map(t=>{const c=g(t),f=(c==null?void 0:c.filter(s=>e==null?void 0:e.includes(s)).length)||0;return{item:t,score:f}})).sort((t,c)=>c.score-t.score).filter(t=>{var c;return t.item.id!==((c=this.notionPage)==null?void 0:c.id)}).map(t=>t.item).slice(0,3)}return[]}}});export{M as a,O as b,N as g,T as u};
