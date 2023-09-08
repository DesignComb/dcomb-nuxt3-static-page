import{r as h,C as w,D as x,E as y,n as B,G as k,s as P,H as C,I as j,_ as A,o as H,c as N,a as u,z as _,J as T}from"./entry.05a577d7.js";const M=()=>null;function F(...e){const a=typeof e[e.length-1]=="string"?e.pop():void 0;typeof e[0]!="string"&&e.unshift(a);let[t,o,n={}]=e;if(typeof t!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof o!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");n.server=n.server??!0,n.default=n.default??M,n.lazy=n.lazy??!1,n.immediate=n.immediate??!0;const s=k(),c=()=>s.isHydrating?s.payload.data[t]:s.static.data[t],p=()=>c()!==void 0;s._asyncData[t]||(s._asyncData[t]={data:h(c()??n.default()),pending:h(!p()),error:w(s.payload._errors,t),status:h("idle")});const r={...s._asyncData[t]};r.refresh=r.execute=(l={})=>{if(s._asyncDataPromises[t]){if(l.dedupe===!1)return s._asyncDataPromises[t];s._asyncDataPromises[t].cancelled=!0}if((l._initial||s.isHydrating&&l._initial!==!1)&&p())return c();r.pending.value=!0,r.status.value="pending";const f=new Promise((i,d)=>{try{i(o(s))}catch(D){d(D)}}).then(i=>{if(f.cancelled)return s._asyncDataPromises[t];let d=i;n.transform&&(d=n.transform(i)),n.pick&&(d=O(d,n.pick)),r.data.value=d,r.error.value=null,r.status.value="success"}).catch(i=>{if(f.cancelled)return s._asyncDataPromises[t];r.error.value=i,r.data.value=P(n.default()),r.status.value="error"}).finally(()=>{f.cancelled||(r.pending.value=!1,s.payload.data[t]=r.data.value,r.error.value&&(s.payload._errors[t]=C(r.error.value)),delete s._asyncDataPromises[t])});return s._asyncDataPromises[t]=f,s._asyncDataPromises[t]};const g=()=>r.refresh({_initial:!0}),b=n.server!==!1&&s.payload.serverRendered;{const l=j();if(l&&!l._nuxtOnBeforeMountCbs){l._nuxtOnBeforeMountCbs=[];const i=l._nuxtOnBeforeMountCbs;l&&(x(()=>{i.forEach(d=>{d()}),i.splice(0,i.length)}),y(()=>i.splice(0,i.length)))}b&&s.isHydrating&&p()?(r.pending.value=!1,r.status.value=r.error.value?"error":"success"):l&&(s.payload.serverRendered&&s.isHydrating||n.lazy)&&n.immediate?l._nuxtOnBeforeMountCbs.push(g):n.immediate&&g(),n.watch&&B(n.watch,()=>r.refresh());const f=s.hook("app:data:refresh",i=>{if(!i||i.includes(t))return r.refresh()});l&&y(f)}const m=Promise.resolve(s._asyncDataPromises[t]).then(()=>r);return Object.assign(m,r),m}function O(e,a){const t={};for(const o of a)t[o]=e[o];return t}const E={},S={class:"relative w-full h-full moving-container"},z=u("div",{class:"absolute w-full h-full scale-105"},[u("svg",{width:"100%",height:"100%",xmlns:"http://www.w3.org/2000/svg"},[u("rect",{class:"moving-dashed-border",width:"100%",height:"100%",fill:"none",stroke:"#fcba03","stroke-width":"25","stroke-dasharray":"15% 185%","stroke-dashoffset":"5%","stroke-linecap":"square"})])],-1),$=u("div",{class:"absolute w-full max-w-128 h-full bg-black moving-bg"},null,-1),R={class:"max-w-128 relative min-h-[16rem] h-full w-full text-left bg-white border-2 border-black border-solid shadow-md"},G={id:"image-container",class:"relative w-full pb-[56.25%] overflow-hidden border-0 border-solid border-b-1"},K={class:"p-4"},U={class:"mb-2 line-clamp-2 font-bold text-black text-base tracking-wide"};function q(e,a){return H(),N("div",S,[z,$,u("div",R,[u("div",G,[_(e.$slots,"cover")]),u("div",K,[u("div",U,[_(e.$slots,"title")]),_(e.$slots,"tags")])])])}const J=A(E,[["render",q]]),V=e=>{var t,o;const a=(o=(t=e==null?void 0:e.properties)==null?void 0:t.Cover)==null?void 0:o.files.map(n=>n.external.url);return a?a[0]:void 0},L=e=>{var a,t;return(t=(a=e==null?void 0:e.properties)==null?void 0:a.ProjectImage)==null?void 0:t.files.map(o=>o.external.url)},Q=e=>{var a,t;return((t=(a=e==null?void 0:e.properties)==null?void 0:a.Name)==null?void 0:t.title.map(o=>o.plain_text).join(""))||""},W=e=>{var a,t;return((t=(a=e==null?void 0:e.properties)==null?void 0:a.Text)==null?void 0:t.text.map(o=>o.plain_text.replace(/\n/g,"<br>")).join(""))||""},v=e=>{var a,t;return(t=(a=e==null?void 0:e.properties)==null?void 0:a.Tags)==null?void 0:t.multi_select.map(o=>o.id)},Y=T("main",{state:()=>({notionDB:null,notionPage:null}),actions:{async fetchNotionDB(){const e=await $fetch("https://api.notion.com/v1/databases/5ad9018ec1a9408cbc7781197832c880/query",{method:"POST",credentials:"include",headers:{Accept:"application/json",Authorization:"Bearer secret_8Ujk50jsgGBNH8x1D8pi3DKB1ppeIRHAs9XNdMCoyog"},body:{sorts:[{property:"Sort",direction:"ascending"}]}});return e&&(this.notionDB=e),e},async fetchNotionPage(e){const a=await $fetch(`https://api.notion.com/v1/pages/${e}`,{method:"GET",credentials:"include",headers:{Accept:"application/json",Authorization:"Bearer secret_8Ujk50jsgGBNH8x1D8pi3DKB1ppeIRHAs9XNdMCoyog"}});return a&&(this.notionPage=a),a}},getters:{getDBItemArr(){var e;if(this.notionDB)return(e=this.notionDB)==null?void 0:e.results},getSimilarItems(){var e,a;if(this.notionDB&&this.notionPage){const t=v(this.notionPage);return((a=(e=this.notionDB)==null?void 0:e.results)==null?void 0:a.map(s=>{const c=v(s),p=(c==null?void 0:c.filter(r=>t==null?void 0:t.includes(r)).length)||0;return{item:s,score:p}})).sort((s,c)=>c.score-s.score).filter(s=>{var c;return s.item.id!==((c=this.notionPage)==null?void 0:c.id)}).map(s=>s.item).slice(0,3)}return[]}}});export{J as _,F as a,Q as b,L as c,W as d,V as g,Y as u};