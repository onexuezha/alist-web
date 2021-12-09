var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,o=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,s=(e,s)=>{for(var n in s||(s={}))a.call(s,n)&&o(e,n,s[n]);if(t)for(var n of t(s))r.call(s,n)&&o(e,n,s[n]);return e};import{_ as n}from"./index.7cac8517.js";import{G as l,a as c,M as i,i as m,O as p,F as h,b as d,B as u,c as g}from"./index.270c0f8a.js";import{D as f}from"./index.esm.e75593c4.js";import{E as b,h as E,U as z,D as y,u as v,j as x,r as _,R as w,t as S,k as j,W as O,G as C,X as A,F as M,y as k,o as P,n as W,T as $,C as I,S as R,b as T,L as D,v as L}from"./vendor.ef86dff2.js";import{u as V}from"./useTitle.391ac300.js";function B(e){return l({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19.002 3h-14c-1.103 0-2 .897-2 2v4h2V5h14v14h-14v-4h-2v4c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.898-2-2-2z"}},{tag:"path",attr:{d:"m11 16 5-4-5-4v3.001H3v2h8z"}}]})(e)}const X=c.create({baseURL:"/api/admin/",headers:{"Content-Type":"application/json;charset=utf-8"},withCredentials:!1});X.interceptors.request.use((e=>e),(e=>(console.log("Error: "+e.message),Promise.reject(e)))),X.interceptors.response.use((e=>e),(e=>(console.log(e),e.response&&null!=e.response.data.meta?e.response.data:Promise.reject(e)))),X.defaults.headers.common.Authorization=localStorage.getItem("admin-token")||"";const H=e=>{const t=i.hashStr(`https://github.com/Xhofe/alist-${e}`);X.defaults.headers.common.Authorization=t,m.defaults.headers.common.Authorization=t,localStorage.setItem("admin-token",t)};var F=X;const G=_.exports.lazy((()=>n((()=>import("./login.b2254b69.js")),["assets/login.b2254b69.js","assets/vendor.ef86dff2.js","assets/index.7cac8517.js","assets/index.270c0f8a.js","assets/index.07fbe05a.css","assets/index.esm.e75593c4.js","assets/useTitle.391ac300.js"]))),U=[{name:"Settings",to:"settings",icon:u,component:_.exports.lazy((()=>n((()=>import("./settings.cc0d82d5.js")),["assets/settings.cc0d82d5.js","assets/vendor.ef86dff2.js","assets/form-item.2c484faf.js","assets/index.270c0f8a.js","assets/index.07fbe05a.css","assets/index.7cac8517.js","assets/index.esm.e75593c4.js","assets/useTitle.391ac300.js"])))},{name:"Accounts",to:"accounts",icon:g,component:_.exports.lazy((()=>n((()=>import("./accounts.32c615a3.js")),["assets/accounts.32c615a3.js","assets/vendor.ef86dff2.js","assets/form-item.2c484faf.js","assets/index.270c0f8a.js","assets/index.07fbe05a.css","assets/index.7cac8517.js","assets/index.esm.e75593c4.js","assets/useTitle.391ac300.js"])))},{name:"Meta",to:"meta",icon:function(e){return l({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M5.385 6.136c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-1.438 2.63c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461zm5.465-2.63c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.499-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm-1.088 5.592c.794 0 1.438-.654 1.438-1.461s-.644-1.461-1.438-1.461-1.438.654-1.438 1.461.643 1.461 1.438 1.461zm5.464-5.592c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111S11.4 7.247 12 7.247s1.088-.498 1.088-1.111zm.35-4.675c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461S11.206 0 12 0s1.438.654 1.438 1.461zm-.35 0C13.088.848 12.6.35 12 .35s-1.088.498-1.088 1.111S11.4 2.572 12 2.572s1.088-.498 1.088-1.111zm.35 8.806c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.499 1.088-1.111zm4.376-4.131c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm2.939 1.461c.794 0 1.438-.654 1.438-1.461s-.644-1.461-1.438-1.461-1.438.654-1.438 1.461.644 1.461 1.438 1.461zm-4.027 1.209c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.643-1.461-1.438-1.461zm4.027 0c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461zM3.947 12.857a1.45 1.45 0 0 0-1.438 1.461c0 .807.644 1.461 1.438 1.461s1.438-.654 1.438-1.461a1.45 1.45 0 0 0-1.438-1.461zm5.465 1.5c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.655 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zM12 12.896c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461zm5.464 1.461c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.655 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm2.939-1.461c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461zM3.947 16.948c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461zm5.465 1.5c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm4.376 0c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm.35 4.091c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111S11.4 23.65 12 23.65s1.088-.498 1.088-1.111zm4.376-4.091c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm2.939-1.461c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461z"}}]})(e)},component:_.exports.lazy((()=>n((()=>import("./metas.1faffd1e.js")),["assets/metas.1faffd1e.js","assets/vendor.ef86dff2.js","assets/form-item.2c484faf.js","assets/index.270c0f8a.js","assets/index.07fbe05a.css","assets/index.7cac8517.js","assets/index.esm.e75593c4.js","assets/useTitle.391ac300.js"])))}];var Y=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=b(),{t:o}=E(),n=z(),l=y(),c=v(),i=x();V(o("Alist Manage")),_.exports.useEffect((()=>{F.get("login").then((e=>{const t=e.data;let a=n.url;a.endsWith("/")||(a+="/"),401===t.code?l.push(`${a}login`):n.url===c.pathname&&l.push(`${a}settings`)}))}),[c.pathname]);const m=e=>{const o=e,{icon:l,children:c}=o,i=((e,o)=>{var s={};for(var n in e)a.call(e,n)&&o.indexOf(n)<0&&(s[n]=e[n]);if(null!=e&&t)for(var n of t(e))o.indexOf(n)<0&&r.call(e,n)&&(s[n]=e[n]);return s})(o,["icon","children"]);return w.createElement(D,{to:`${n.url}/${e.to}`},w.createElement(M,s({align:"center",px:"4",pl:"8",py:"3",cursor:"pointer",color:j("inherit","gray.400"),_hover:{bg:j("gray.100","gray.900"),color:j("gray.900","gray.200")},role:"group",fontWeight:"semibold",transition:".15s ease"},i),l&&w.createElement(W,{mr:"2",boxSize:"4",_groupHover:{color:j("gray.600","gray.300")},as:l}),c))},u=e=>w.createElement(S,s({as:"nav",pos:"fixed",top:"0",left:"0",zIndex:"sticky",h:"full",pb:"10",overflowX:"hidden",overflowY:"auto",bg:j("white","gray.800"),borderColor:j("inherit","gray.700"),borderRightWidth:"1px",w:"48",shadow:"md"},e),w.createElement(D,{to:"/@manage"},w.createElement(M,{px:"4",py:"5",align:"center"},w.createElement(L,{fontSize:"2xl",ml:"2",color:j("brand.500","white"),fontWeight:"semibold"},"Alist ",o("Manage")))),w.createElement(M,{direction:"column",as:"nav",fontSize:"sm",color:"gray.600","aria-label":"Main Navigation"},U.map((e=>w.createElement(m,{to:e.to,icon:e.icon,key:e.name},o(e.name))))));return w.createElement(S,{as:"section",bg:j("gray.50","gray.700"),minH:"100vh"},w.createElement(p,null),w.createElement(u,{display:{base:"none",md:"unset"}}),w.createElement(O,{isOpen:e.isOpen,onClose:e.onClose,placement:"left"},w.createElement(C,null),w.createElement(A,null,w.createElement(u,{w:"full",borderRight:"none"}))),w.createElement(S,{ml:{base:0,md:48},transition:".3s ease"},w.createElement(M,{as:"header",align:"center",justify:"space-between",w:"full",px:"4",bg:j("white","gray.800"),borderBottomWidth:"1px",borderColor:j("inherit","gray.700"),h:"14",shadow:"md"},w.createElement(k,{"aria-label":"Menu",display:{base:"inline-flex",md:"none"},onClick:e.onOpen,icon:w.createElement(h,null),size:"sm"}),w.createElement(S,{w:"96",display:{base:"none",md:"flex"}}),w.createElement(M,{align:"center"},w.createElement(P,{href:"https://github.com/Xhofe/alist",isExternal:!0},w.createElement(W,{boxSize:6,color:"gray.500",as:f,cursor:"pointer"})),w.createElement($,{shouldWrapChildren:!0,hasArrow:!0,placement:"bottom",label:o("clear buffer")},w.createElement(k,{colorScheme:"whiteAlpha","aria-label":o("clear buffer"),icon:w.createElement(W,{boxSize:6,color:"gray.500",as:d}),onClick:()=>{F.get("clear_cache").then((e=>{const t=e.data;200===t.code?i({title:o(t.message),status:"success",duration:3e3,isClosable:!0}):i({title:o(t.message),status:"error",duration:3e3,isClosable:!0})}))}})),w.createElement($,{shouldWrapChildren:!0,hasArrow:!0,placement:"bottom",label:o("logout")},w.createElement(k,{onClick:()=>{H(""),l.push(`${n.url}/login`)},colorScheme:"blank","aria-label":o("logout"),icon:w.createElement(W,{boxSize:6,color:"gray.500",as:B})})))),w.createElement(S,{as:"main",p:"2"},w.createElement(S,{borderWidth:"1px",borderStyle:"dashed",rounded:"md",h:"calc( 100vh - 80px)",overflowY:"auto",p:"2"},w.createElement(_.exports.Suspense,{fallback:w.createElement(I,{h:"full"},w.createElement(R,null))},U.map((e=>w.createElement(T,{path:`${n.url}/${e.to}`,key:e.name},w.createElement(e.component,null)))),w.createElement(T,{path:`${n.url}/login`},w.createElement(G,null)))))))}});export{F as a,H as c,Y as i};
