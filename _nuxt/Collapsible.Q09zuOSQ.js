import{d as m,y as d,G as b,ag as f,b as g,a9 as _,w as t,g as n,aA as a,b4 as v,n as o,e as y,t as r,b5 as x,b6 as h,a4 as C}from"./entry.j-2EdQzp.js";import{r as k}from"./slot.-ArZkA-N.js";import"./node.kQagOfUD.js";const A=m({__name:"Collapsible",props:{name:{type:String,default:"properties"}},setup(i){const c=d(),l=b(()=>({button:{base:"flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200",icon:{name:c.ui.icons.chevron,base:"w-4 h-4 transform transition-transform duration-200",active:"",inactive:"-rotate-90"}},panel:"mt-4 ml-2 py-2.5 pl-4 border-l border-gray-200 dark:border-gray-800 [&>div]:!mt-0"})),{ui:e}=f("prose.collapsible",void 0,l,void 0,!0);return(p,w)=>{const u=C;return g(),_(a(h),null,{default:t(({open:s})=>[n(a(v),{class:o(a(e).button.base)},{default:t(()=>[n(u,{name:a(e).button.icon.name,class:o([a(e).button.icon.base,s?a(e).button.icon.active:a(e).button.icon.inactive])},null,8,["name","class"]),y("span",null,r(s?"Hide":"Show")+" "+r(i.name),1)]),_:2},1032,["class"]),n(a(x),{class:o(a(e).panel)},{default:t(()=>[k(p.$slots,"default",{unwrap:"p"})]),_:3},8,["class"])]),_:3})}}});export{A as default};