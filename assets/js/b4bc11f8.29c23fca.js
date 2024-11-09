"use strict";(self.webpackChunkmoderleygroupdocs=self.webpackChunkmoderleygroupdocs||[]).push([[856],{4263:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"jsm/retailpos-mainbanks/installation","title":"Installation","description":"This page is for documentation on an outdated product, some information may be basic or missing.","source":"@site/docs/jsm/retailpos-mainbanks/installation.mdx","sourceDirName":"jsm/retailpos-mainbanks","slug":"/jsm/retailpos-mainbanks/installation","permalink":"/docs/jsm/retailpos-mainbanks/installation","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"jsmSidebar","previous":{"title":"RetailPOS Mainbanks","permalink":"/docs/category/retailpos-mainbanks"},"next":{"title":"Terms of Use","permalink":"/docs/category/terms-of-use"}}');var i=t(4848),a=t(8453);const s={sidebar_position:1},r="Installation",l={},d=[{value:"RetailPOS Mainbanks FAQ",id:"retailpos-mainbanks-faq",level:3},{value:"How do I add more tools?",id:"add-tools",level:3},{value:"Some of my POS tills are linked together, how do I fix?",id:"linked-together",level:3},{value:"I can&#39;t click login, it won&#39;t do anything.",id:"cannot-click-login",level:3}];function c(e){const n={admonition:"admonition",code:"code",h1:"h1",h3:"h3",header:"header",p:"p",strong:"strong",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"installation",children:"Installation"})}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"This page is for documentation on an outdated product, some information may be basic or missing."})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["This product is ",(0,i.jsx)(n.strong,{children:"off-sale"}),". We're currently working on a brand new version to provide you with the excellent features we take pride in."]})}),"\n",(0,i.jsx)(n.h3,{id:"retailpos-mainbanks-faq",children:"RetailPOS Mainbanks FAQ"}),"\n",(0,i.jsx)(n.h3,{id:"add-tools",children:"How do I add more tools?"}),"\n",(0,i.jsxs)(n.p,{children:["To add a tool, you need to go onto the ",(0,i.jsx)(n.code,{children:"MasterConfig"})," & generate an EAN number, this can be a randomised number. Make it a billion characters, or whatever you want; it doesn't matter as long as it is unique. Once you have created the unique number, make sure you've filled in the details with the new tool using the ",(0,i.jsx)(n.code,{children:"MasterConfig"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Create a ",(0,i.jsx)(n.code,{children:"StringValue"})," in the tool's handle, name the ",(0,i.jsx)(n.code,{children:"StringValue"})," EAN, and place your unique number into its value."]}),"\n",(0,i.jsx)(n.h3,{id:"linked-together",children:"Some of my POS tills are linked together, how do I fix?"}),"\n",(0,i.jsx)(n.p,{children:"One common mistake is that people forget to change the unique till number. You need to do this by clicking on an individual POS, then click onto the JSM | POS Terminal model, then the Screen block, then Settings. You can also change if you want the till to be on, off, or boot upon server start."}),"\n",(0,i.jsx)(n.p,{children:"If you don't do this, scanning an item might link to another till, or logging in, etc."}),"\n",(0,i.jsx)(n.h3,{id:"cannot-click-login",children:"I can't click login, it won't do anything."}),"\n",(0,i.jsx)(n.p,{children:"Same as above, there's only a player whitelist integrated, so you'll have to disable the whitelist as a whole if it's for a group. Do not ungroup."}),"\n",(0,i.jsx)("iframe",{width:"705.61",height:"397.5",src:"https://www.youtube.com/embed/njmw1dZgn1g",title:"JSM Retail POS | Tutorial",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var o=t(6540);const i={},a=o.createContext(i);function s(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);