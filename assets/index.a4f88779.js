var y=Object.defineProperty,b=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var v=(a,e,o)=>e in a?y(a,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[e]=o,p=(a,e)=>{for(var o in e||(e={}))E.call(e,o)&&v(a,o,e[o]);if(D)for(var o of D(e))T.call(e,o)&&v(a,o,e[o]);return a},U=(a,e)=>b(a,F(e));import{d as C,M as L,r as A,l as R,j as h,R as N,Q as S,O as k,J as B,a as d,e as I,f as P,h as s,i as l,o as $,L as w}from"./lib.f6218f97.js";import{_ as O,A as j}from"./index.079d027f.js";const z=C({name:"application",components:{},setup(){const a=L(),e=[];for(let t=0;t<10;t++)e.push({id:`ID ${t}`,status:"ACTIVE",column:`London, Park Lane no. ${t}`});const o=A(),g=A(null),n=R({formData:[{id:"",status:"",column:""}],loading:!1,dialogLoading:!1,addUserDialog:!1,currentPage:1,pagination:{pageSize:10},total:0,tableData:e,columnData:[{title:"RECORD ID",key:"id",render(t){return h(N,{style:{color:"#18a058"},to:{name:"ApplicationDetail",params:{id:t.id}}},{default:()=>t.id})}},{title:"STATUS",key:"status",render(t){return h(S,{type:"primary",secondary:!0,round:!0},{default:()=>t.status})}},{title:"COLUMN",key:"column"}]});async function c(){}k([()=>n.currentPage,()=>n.pageSize],([t,u])=>{c()},{immediate:!0});function i(){n.formData.forEach(t=>{t.value=""}),n.addUserDialog=!0}function r(){const t=o.value;console.log(t),t.submitForm().then(async u=>{n.dialogLoading=!0;const _=await j.addAdminUser({data:p({},u)});_&&_.success&&(n.addUserDialog=!1,n.currentPage===1?c():n.currentPage=1),n.dialogLoading=!1})}function m(){const t=o.value;n.dialogLoading=!1,t.resetForm()}const f=()=>{a.push({path:"/transaction/create"})};return U(p({},B(n)),{dialogForm:o,addUser:i,submitAdd:r,closeDialog:m,formRef:g,create:f})},methods:{operator(){this.$confirm("\u539F\u9879\u76EE\u6CA1\u6709\u63D0\u4F9B\u8BE5\u529F\u80FD\uFF0C\u6709\u65F6\u95F4\u518D\u52A0\uFF01\u9700\u8981\u5220\u9664\u7684\u627E\u540E\u53F0","\u6E29\u99A8\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",center:!0}).then(()=>{})}}}),M={class:"transactionPage"},V={class:"pageHeader"},x=w("SEARCH");function H(a,e,o,g,n,c){const i=d("n-input"),r=d("n-form-item"),m=d("n-button"),f=d("n-form"),t=d("n-data-table");return $(),I("div",M,[P("div",V,[s(f,{class:"formWrap",inline:"","label-width":80,model:a.formData,size:"medium",ref:"formRef"},{default:l(()=>[s(r,{label:"RECORD ID"},{default:l(()=>[s(i,{value:a.formData.id,"onUpdate:value":e[0]||(e[0]=u=>a.formData.id=u),placeholder:"INPUT ID"},null,8,["value"])]),_:1}),s(r,{label:"STATUS"},{default:l(()=>[s(i,{placeholder:"INPUT STATUS",value:a.formData.status,"onUpdate:value":e[1]||(e[1]=u=>a.formData.status=u)},null,8,["value"])]),_:1}),s(r,{label:"COLUMN"},{default:l(()=>[s(i,{placeholder:"INPUT COLUMN",value:a.formData.column,"onUpdate:value":e[2]||(e[2]=u=>a.formData.column=u)},null,8,["value"])]),_:1}),s(r,null,{default:l(()=>[s(m,{type:"primary",ghost:""},{default:l(()=>[x]),_:1})]),_:1})]),_:1},8,["model"])]),s(t,{ref:"table",columns:a.columnData,data:a.tableData,pagination:a.pagination,"row-key":u=>u.id},null,8,["columns","data","pagination","row-key"])])}var q=O(z,[["render",H],["__scopeId","data-v-4a61cf29"]]);export{q as default};
