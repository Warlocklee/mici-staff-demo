var A=Object.defineProperty,b=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var v=(e,a,o)=>a in e?A(e,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[a]=o,p=(e,a)=>{for(var o in a||(a={}))C.call(a,o)&&v(e,o,a[o]);if(D)for(var o of D(a))E.call(a,o)&&v(e,o,a[o]);return e},U=(e,a)=>b(e,F(a));import{d as T,M as L,r as h,l as R,j as y,R as N,Q as S,O as k,J as B,a as d,e as I,f as P,h as u,i as l,o as $,L as w}from"./lib.f6218f97.js";import{_ as O,A as j}from"./index.079d027f.js";const z=T({name:"commission",components:{},setup(){const e=L(),a=[];for(let t=0;t<10;t++)a.push({id:`ID ${t}`,status:"ACTIVE",column:`London, Park Lane no. ${t}`});const o=h(),g=h(null),n=R({formData:[{id:"",status:"",column:""}],loading:!1,dialogLoading:!1,addUserDialog:!1,currentPage:1,pagination:{pageSize:10},total:0,tableData:a,columnData:[{title:"RECORD ID",key:"id",render(t){return y(N,{style:{color:"#18a058"},to:{name:"CommissionDetail",params:{id:t.id}}},{default:()=>t.id})}},{title:"STATUS",key:"status",render(t){return y(S,{type:"primary",secondary:!0,round:!0},{default:()=>t.status})}},{title:"COLUMN",key:"column"}]});async function m(){}k([()=>n.currentPage,()=>n.pageSize],([t,s])=>{m()},{immediate:!0});function i(){n.formData.forEach(t=>{t.value=""}),n.addUserDialog=!0}function r(){const t=o.value;console.log(t),t.submitForm().then(async s=>{n.dialogLoading=!0;const _=await j.addAdminUser({data:p({},s)});_&&_.success&&(n.addUserDialog=!1,n.currentPage===1?m():n.currentPage=1),n.dialogLoading=!1})}function c(){const t=o.value;n.dialogLoading=!1,t.resetForm()}const f=()=>{e.push({path:"/transaction/create"})};return U(p({},B(n)),{dialogForm:o,addUser:i,submitAdd:r,closeDialog:c,formRef:g,create:f})},methods:{operator(){this.$confirm("\u539F\u9879\u76EE\u6CA1\u6709\u63D0\u4F9B\u8BE5\u529F\u80FD\uFF0C\u6709\u65F6\u95F4\u518D\u52A0\uFF01\u9700\u8981\u5220\u9664\u7684\u627E\u540E\u53F0","\u6E29\u99A8\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",center:!0}).then(()=>{})}}}),M={class:"transactionPage"},V={class:"pageHeader"},x=w("SEARCH");function H(e,a,o,g,n,m){const i=d("n-input"),r=d("n-form-item"),c=d("n-button"),f=d("n-form"),t=d("n-data-table");return $(),I("div",M,[P("div",V,[u(f,{class:"formWrap",inline:"","label-width":80,model:e.formData,size:"medium",ref:"formRef"},{default:l(()=>[u(r,{label:"RECORD ID"},{default:l(()=>[u(i,{value:e.formData.id,"onUpdate:value":a[0]||(a[0]=s=>e.formData.id=s),placeholder:"INPUT ID"},null,8,["value"])]),_:1}),u(r,{label:"STATUS"},{default:l(()=>[u(i,{placeholder:"INPUT STATUS",value:e.formData.status,"onUpdate:value":a[1]||(a[1]=s=>e.formData.status=s)},null,8,["value"])]),_:1}),u(r,{label:"COLUMN"},{default:l(()=>[u(i,{placeholder:"INPUT COLUMN",value:e.formData.column,"onUpdate:value":a[2]||(a[2]=s=>e.formData.column=s)},null,8,["value"])]),_:1}),u(r,null,{default:l(()=>[u(c,{type:"primary",ghost:""},{default:l(()=>[x]),_:1})]),_:1})]),_:1},8,["model"])]),u(t,{ref:"table",columns:e.columnData,data:e.tableData,pagination:e.pagination,"row-key":s=>s.id},null,8,["columns","data","pagination","row-key"])])}var q=O(z,[["render",H],["__scopeId","data-v-53053870"]]);export{q as default};
