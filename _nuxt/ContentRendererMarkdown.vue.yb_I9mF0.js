import{_ as p}from"./MDCRenderer.l0mXiSZJ.js";import{d as l,bd as m,G as o,b as i,a9 as b,aA as v}from"./entry.PSnwHfzM.js";const _=l({__name:"ContentRendererMarkdown",props:{value:{type:Object,required:!0},excerpt:{type:Boolean,default:!1},tag:{type:String,default:"div"},components:{type:Object,default:()=>({})},data:{type:Object,default:()=>({})}},setup(a){const e=a,c=m().isEnabled(),r=o(()=>{let t=e.value.body||e.value;return e.excerpt&&e.value.excerpt&&(t=e.value.excerpt),t}),d=o(()=>{const{body:t,excerpt:u,...n}=e.value;return{...n,...e.data}}),s=o(()=>({...e.components,...d.value._components||{}}));return(t,u)=>{const n=p;return i(),b(n,{body:r.value,data:d.value,tag:a.tag,components:s.value,"data-content-id":v(c)?a.value._id:void 0},null,8,["body","data","tag","components","data-content-id"])}}});export{_};
