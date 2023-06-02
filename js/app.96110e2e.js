(function(){"use strict";var e={3911:function(e,t,o){var n=o(9963),l=o(6252);const a={class:"app container"};function s(e,t,o,n,s,r){const i=(0,l.up)("navbar"),d=(0,l.up)("router-view");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(i),(0,l._)("div",a,[(0,l.Wm)(d)])],64)}const r={class:"navbar navbar-expand-lg navbar-dark bg-dark"},i={class:"container"},d={class:"navbar-nav ms-auto mb-2 mb-lg-0"},c={class:"nav-item"},m={class:"nav-item"},p={class:"nav-item"};function u(e,t,o,n,a,s){const u=(0,l.up)("RouterLink"),y=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l._)("nav",r,[(0,l._)("div",i,[(0,l.Wm)(u,{class:"navbar-brand",to:"/"},{default:(0,l.w5)((()=>[(0,l.Uk)("Navbar")])),_:1}),(0,l._)("ul",d,[(0,l._)("li",c,[(0,l.Wm)(y,{class:"nav-link active",to:"/"},{default:(0,l.w5)((()=>[(0,l.Uk)("Home")])),_:1})]),(0,l._)("li",m,[(0,l.Wm)(u,{class:"nav-link",to:"/employees"},{default:(0,l.w5)((()=>[(0,l.Uk)("Employees")])),_:1})]),(0,l._)("li",p,[(0,l.Wm)(u,{class:"nav-link",to:"/about"},{default:(0,l.w5)((()=>[(0,l.Uk)("About")])),_:1})])])])])])}var y={},v=o(3744);const b=(0,v.Z)(y,[["render",u]]);var h=b,f={components:{Navbar:h}};const w=(0,v.Z)(f,[["render",s]]);var g=w,_=o(2201);const x=(0,l._)("h2",{class:"text-center text-secondary"},"Main Page",-1),k={class:"text-center"};function D(e,t,o,n,a,s){const r=(0,l.up)("RouterLink");return(0,l.wg)(),(0,l.iD)("div",null,[x,(0,l._)("p",k,[(0,l.Uk)(" If you want to check "),(0,l.Wm)(r,{to:"/employees",class:"text-center text-danger"},{default:(0,l.w5)((()=>[(0,l.Uk)(" Employees Page ")])),_:1}),(0,l.Uk)(" just click the link ")])])}var E={};const W=(0,v.Z)(E,[["render",D]]);var V=W;const C={class:"d-flex flex-column my-4"},U=(0,l._)("h2",{class:"text-center"},"Employees Page",-1),S={class:"input-group my-5"},O=(0,l._)("button",{class:"btn btn-outline-secondary",type:"button",id:"button-addon2"}," Search ",-1),A={class:"d-flex justify-content-between align-items-center"};function M(e,t,o,a,s,r){const i=(0,l.up)("sort-employees"),d=(0,l.up)("employees-form"),c=(0,l.up)("modal-window"),m=(0,l.up)("employees-list");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l._)("div",C,[U,(0,l._)("div",S,[(0,l.wy)((0,l._)("input",{type:"text",class:"form-control",placeholder:"Employee's Lastname...","onUpdate:modelValue":t[0]||(t[0]=e=>s.searchQuery=e)},null,512),[[n.nr,s.searchQuery]]),O]),(0,l._)("div",A,[(0,l.Wm)(i,{modelValue:s.selectedSort,"onUpdate:modelValue":t[1]||(t[1]=e=>s.selectedSort=e),options:s.sortOptions},null,8,["modelValue","options"]),(0,l._)("button",{class:"btn btn-primary",onClick:t[2]||(t[2]=(...e)=>r.openModalWindow&&r.openModalWindow(...e))}," Add employee ")])]),(0,l.Wm)(c,{show:s.modalWindowVisible,"onUpdate:show":t[3]||(t[3]=e=>s.modalWindowVisible=e)},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{onCreate:r.saveEmployee,employees:s.employees},null,8,["onCreate","employees"])])),_:1},8,["show"]),(0,l.Wm)(m,{employees:r.sortedAndSearchedEmployees,onRemove:r.removeEmployee},null,8,["employees","onRemove"])])}o(7658);const j={class:"container w-100"},L={class:"card"},z=(0,l._)("h4",{class:"card-header"},"Add new employee",-1),Z={class:"mb-3"},I=(0,l._)("label",null,"Firstname",-1),$=["value"],P={class:"mb-3"},B=(0,l._)("label",null,"Lastname",-1),F={class:"mb-3"},T=(0,l._)("label",null,"Experience",-1),R={class:"mb-3"},H=(0,l._)("label",null,"Age",-1),Q={class:"mb-3"},q=(0,l._)("label",null,"Address",-1);function N(e,t,o,a,s,r){return(0,l.wg)(),(0,l.iD)("div",j,[(0,l._)("div",L,[z,(0,l._)("form",{class:"card-body",onSubmit:t[6]||(t[6]=(0,n.iM)((()=>{}),["prevent"]))},[(0,l._)("div",Z,[I,(0,l._)("input",{type:"text",class:"form-control",value:s.employee.firstname,onInput:t[0]||(t[0]=e=>s.employee.firstname=e.target.value)},null,40,$)]),(0,l._)("div",P,[B,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control","onUpdate:modelValue":t[1]||(t[1]=e=>s.employee.lastname=e)},null,512),[[n.nr,s.employee.lastname]])]),(0,l._)("div",F,[T,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control","onUpdate:modelValue":t[2]||(t[2]=e=>s.employee.experience=e)},null,512),[[n.nr,s.employee.experience,void 0,{number:!0}]])]),(0,l._)("div",R,[H,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control","onUpdate:modelValue":t[3]||(t[3]=e=>s.employee.age=e)},null,512),[[n.nr,s.employee.age,void 0,{number:!0}]])]),(0,l._)("div",Q,[q,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control","onUpdate:modelValue":t[4]||(t[4]=e=>s.employee.address=e)},null,512),[[n.nr,s.employee.address]])]),(0,l._)("button",{type:"submit",class:"btn btn-primary",onClick:t[5]||(t[5]=(...e)=>r.saveEmployee&&r.saveEmployee(...e))}," Save ")],32)])])}var Y={data(){return{employee:{id:"",firstname:"",lastname:"",experience:"",age:"",address:""}}},props:{employees:{type:Object,required:!0}},methods:{saveEmployee(){this.employees.length>0?this.employee.id=this.employees[this.employees.length-1].id+1:this.employee.id=1,this.$emit("create",this.employee),this.employee={firstname:"",lastname:"",experience:"",age:"",address:""}}}};const K=(0,v.Z)(Y,[["render",N]]);var G=K,J=o(3577);const X=e=>((0,l.dD)("data-v-c489e1fa"),e=e(),(0,l.Cn)(),e),ee={class:"bg-primary-subtle p-3 m-2"},te=X((()=>(0,l._)("h2",{class:"text-center m-2"},"Employees list",-1))),oe={key:0,class:"table bg-light-subtle mb-0 mt-4"},ne=X((()=>(0,l._)("thead",null,[(0,l._)("tr",{class:"text-center"},[(0,l._)("th",{scope:"col"},"N"),(0,l._)("th",{scope:"col"},"Firstname"),(0,l._)("th",{scope:"col"},"Lastname"),(0,l._)("th",{scope:"col"},"Experience"),(0,l._)("th",{scope:"col"},"Age"),(0,l._)("th",{scope:"col"},"Address"),(0,l._)("th",{scope:"col"},"Actions")])],-1))),le={scope:"row"},ae=["onUpdate:modelValue"],se={key:1},re=["onUpdate:modelValue"],ie={key:1},de=["onUpdate:modelValue"],ce={key:1},me=["onUpdate:modelValue"],pe={key:1},ue=["onUpdate:modelValue"],ye={key:1},ve={key:0,class:"d-flex justify-content-center gap-2"},be=["onClick"],he=["onClick"],fe={key:1,class:"d-flex justify-content-center gap-2"},we=["onClick"],ge=["onClick"],_e=["onClick"],xe={key:1,class:"text-center text-danger bg-body-tertiary p-4 mt-4"};function ke(e,t,o,a,s,r){return(0,l.wg)(),(0,l.iD)("div",ee,[te,o.employees.length>0?((0,l.wg)(),(0,l.iD)("table",oe,[ne,(0,l._)("tbody",null,[(0,l.Wm)(n.W3,{name:"employee-list"},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(o.employees,(t=>((0,l.wg)(),(0,l.iD)("tr",{key:t.id,class:"text-center"},[(0,l._)("th",le,(0,J.zw)(t.id),1),(0,l._)("td",null,[t.editmode?(0,l.wy)(((0,l.wg)(),(0,l.iD)("input",{key:0,class:"text-center form-control","onUpdate:modelValue":e=>t.firstname=e},null,8,ae)),[[n.nr,t.firstname]]):((0,l.wg)(),(0,l.iD)("div",se,(0,J.zw)(t.firstname),1))]),(0,l._)("td",null,[t.editmode?(0,l.wy)(((0,l.wg)(),(0,l.iD)("input",{key:0,class:"text-center form-control","onUpdate:modelValue":e=>t.lastname=e},null,8,re)),[[n.nr,t.lastname]]):((0,l.wg)(),(0,l.iD)("div",ie,(0,J.zw)(t.lastname),1))]),(0,l._)("td",null,[t.editmode?(0,l.wy)(((0,l.wg)(),(0,l.iD)("input",{key:0,class:"text-center form-control","onUpdate:modelValue":e=>t.experience=e},null,8,de)),[[n.nr,t.experience]]):((0,l.wg)(),(0,l.iD)("div",ce,(0,J.zw)(t.experience),1))]),(0,l._)("td",null,[t.editmode?(0,l.wy)(((0,l.wg)(),(0,l.iD)("input",{key:0,class:"text-center form-control","onUpdate:modelValue":e=>t.age=e},null,8,me)),[[n.nr,t.age]]):((0,l.wg)(),(0,l.iD)("div",pe,(0,J.zw)(t.age),1))]),(0,l._)("td",null,[t.editmode?(0,l.wy)(((0,l.wg)(),(0,l.iD)("input",{key:0,class:"text-center form-control","onUpdate:modelValue":e=>t.address=e},null,8,ue)),[[n.nr,t.address]]):((0,l.wg)(),(0,l.iD)("div",ye,(0,J.zw)(t.address),1))]),(0,l._)("td",null,[t.editmode?((0,l.wg)(),(0,l.iD)("div",ve,[(0,l._)("button",{class:"btn border border-2 border-success border-opacity-50 text-success text-opacity-75",onClick:e=>r.save(t)}," Save ",8,be),(0,l._)("button",{class:"btn border border-2 border-danger-subtle border-opacity-25 text-danger text-opacity-50",onClick:e=>r.cancel(t)}," Cancel ",8,he)])):((0,l.wg)(),(0,l.iD)("div",fe,[(0,l._)("button",{class:"btn border border-2 border-info border-opacity-50 bg-info-subtle text-info",onClick:e=>r.edit(t)}," Edit ",8,we),(0,l._)("button",{class:"btn border border-2 border-danger border-opacity-25 bg-danger-subtle text-danger text-opacity-50",onClick:o=>e.$emit("remove",t)}," Delete ",8,ge),(0,l._)("button",{onClick:o=>e.$router.push(`/employees/${t.id}`),class:"btn"}," Open ",8,_e)]))])])))),128))])),_:1})])])):((0,l.wg)(),(0,l.iD)("div",xe," Table is empty "))])}var De={props:{employees:{type:Array,required:!0}},emits:["remove"],data(){return{modalWindowEditVisible:!1,editmode:!1}},methods:{edit:function(e){e.editmode=!e.editmode},cancel:function(e){e.firstname=this.employees[e.id-1].firstname,e.editmode=!e.editmode},save:function(e){e.firstname=this.employees[e.id-1].firstname,e.editmode=!e.editmode},openModalWindowEdit(){console.log(this.employee),this.modalWindowEditVisible=!0},updateEmployee(e){console.log(e),this.employees.push(e),this.modalWindowEditVisible=!1}}};const Ee=(0,v.Z)(De,[["render",ke],["__scopeId","data-v-c489e1fa"]]);var We=Ee;function Ve(e,t,o,a,s,r){return!0===o.show?((0,l.wg)(),(0,l.iD)("div",{key:0,class:"modal-window",onClick:t[1]||(t[1]=(0,n.iM)(((...e)=>r.hideModalWindow&&r.hideModalWindow(...e)),["stop"]))},[(0,l._)("div",{class:"modal-window__content",onClick:t[0]||(t[0]=(0,n.iM)((()=>{}),["stop"]))},[(0,l.WI)(e.$slots,"default",{},void 0,!0)])])):(0,l.kq)("",!0)}var Ce={name:"modal-window",props:{show:{type:Boolean,default:!1}},methods:{hideModalWindow(){this.$emit("update:show",!1)}}};const Ue=(0,v.Z)(Ce,[["render",Ve],["__scopeId","data-v-5b4cc70a"]]);var Se=Ue;const Oe=(0,l._)("option",{disabled:"",selected:"",value:""},"Sort employees",-1),Ae=["value"];function Me(e,t,o,n,a,s){return(0,l.wg)(),(0,l.iD)("select",(0,l.dG)({class:"form-select-sm border border-primary"},o.value,{onChange:t[0]||(t[0]=(...e)=>s.changeOption&&s.changeOption(...e))}),[Oe,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(o.options,(e=>((0,l.wg)(),(0,l.iD)("option",{key:e.value,value:e.value},(0,J.zw)(e.name),9,Ae)))),128))],16)}var je={name:"sort-employees",props:{value:{type:String},options:{type:Array,default:()=>[]}},methods:{changeOption(e){this.$emit("update:modelValue",e.target.value)}}};const Le=(0,v.Z)(je,[["render",Me]]);var ze=Le,Ze={components:{EmployeesForm:G,EmployeesList:We,ModalWindow:Se,SortEmployees:ze},data(){return{employees:[{id:1,firstname:"Frodo",lastname:"Beggins",experience:1,age:20,address:"Shire"},{id:2,firstname:"Anton",lastname:"Ivanov",experience:4,age:19.5,address:"Russia, Moscow"},{id:3,firstname:"Mary",lastname:"Thompson",experience:12.3,age:38,address:"15 Shipman Str., Toronto, Canada"},{id:4,firstname:"Olga",lastname:"Bulgakova",experience:6.2,age:30,address:"Serbia, Belgrade, Preshevska 42"}],modalWindowVisible:!1,selectedSort:"",searchQuery:"",sortOptions:[{value:"id",name:"by ID"},{value:"firstname",name:"by Firstname"},{value:"lastname",name:"by Lastname"},{value:"experience",name:"by Experience"},{value:"age",name:"by Age"},{value:"address",name:"by Address"}]}},methods:{openModalWindow(){this.modalWindowVisible=!0},saveEmployee(e){this.employees.push(e),this.modalWindowVisible=!1},removeEmployee(e){confirm("Are you sure, you want to delete this employee❓")&&(this.employees=this.employees.filter((t=>t.id!==e.id)))}},computed:{sortedEmployees(){return[...this.employees].sort(((e,t)=>"number"===typeof e[this.selectedSort]&&"number"===typeof t[this.selectedSort]?e[this.selectedSort]-t[this.selectedSort]:e[this.selectedSort]?.localeCompare(t[this.selectedSort])))},sortedAndSearchedEmployees(){return this.sortedEmployees.filter((e=>e.lastname.toLocaleLowerCase().includes(this.searchQuery.toLocaleLowerCase())))}}};const Ie=(0,v.Z)(Ze,[["render",M]]);var $e=Ie;const Pe=e=>((0,l.dD)("data-v-3ebf9db7"),e=e(),(0,l.Cn)(),e),Be={class:"d-flex flex-column align-items-center text-secondary"},Fe=Pe((()=>(0,l._)("h2",null,"My 1st Vue.js App",-1))),Te=Pe((()=>(0,l._)("p",{class:"text-center text-secondary"},"hope U like it",-1))),Re=Pe((()=>(0,l._)("p",null,[(0,l._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",class:"bi bi-telegram",viewBox:"0 0 16 16"},[(0,l._)("path",{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"})]),(0,l._)("a",{class:"ms-2",href:"https://t.me/bio_ol23"},"Olga Bulgakova")],-1))),He=[Fe,Te,Re];function Qe(e,t,o,n,a,s){return(0,l.wg)(),(0,l.iD)("div",Be,He)}var qe={};const Ne=(0,v.Z)(qe,[["render",Qe],["__scopeId","data-v-3ebf9db7"]]);var Ye=Ne;const Ke={class:"text-center text-secondary"};function Ge(e,t,o,n,a,s){return(0,l.wg)(),(0,l.iD)("div",null,[(0,l._)("h2",Ke," This is Employee page with ID ="+(0,J.zw)(e.$route.params.id),1)])}var Je={};const Xe=(0,v.Z)(Je,[["render",Ge]]);var et=Xe;const tt=[{path:"/",component:V},{path:"/employees",component:$e},{path:"/about",component:Ye},{path:"/employees/:id",component:et}],ot=(0,_.p7)({routes:tt,history:(0,_.PO)("/Vue3-Employee/")});var nt=ot;(0,n.ri)(g).use(nt).mount("#app")}},t={};function o(n){var l=t[n];if(void 0!==l)return l.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,o),a.exports}o.m=e,function(){var e=[];o.O=function(t,n,l,a){if(!n){var s=1/0;for(c=0;c<e.length;c++){n=e[c][0],l=e[c][1],a=e[c][2];for(var r=!0,i=0;i<n.length;i++)(!1&a||s>=a)&&Object.keys(o.O).every((function(e){return o.O[e](n[i])}))?n.splice(i--,1):(r=!1,a<s&&(s=a));if(r){e.splice(c--,1);var d=l();void 0!==d&&(t=d)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[n,l,a]}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var l,a,s=n[0],r=n[1],i=n[2],d=0;if(s.some((function(t){return 0!==e[t]}))){for(l in r)o.o(r,l)&&(o.m[l]=r[l]);if(i)var c=i(o)}for(t&&t(n);d<s.length;d++)a=s[d],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(c)},n=self["webpackChunkemp"]=self["webpackChunkemp"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(3911)}));n=o.O(n)})();
//# sourceMappingURL=app.96110e2e.js.map