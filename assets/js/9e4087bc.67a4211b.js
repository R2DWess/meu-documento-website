"use strict";(self.webpackChunkmeu_documento_website=self.webpackChunkmeu_documento_website||[]).push([[7028],{3760:(e,t,s)=>{s.r(t),s.d(t,{default:()=>o});s(1504);var r=s(867),a=s(4357),i=s(5756),c=s(9012),n=s(6448),l=s(7624);function d(e){let{year:t,posts:s}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.c,{as:"h3",id:t,children:t}),(0,l.jsx)("ul",{children:s.map((e=>(0,l.jsx)("li",{children:(0,l.jsxs)(r.c,{to:e.metadata.permalink,children:[e.metadata.formattedDate," - ",e.metadata.title]})},e.metadata.date)))})]})}function h(e){let{years:t}=e;return(0,l.jsx)("section",{className:"margin-vert--lg",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"row",children:t.map(((e,t)=>(0,l.jsx)("div",{className:"col col--4 margin-vert--lg",children:(0,l.jsx)(d,{...e})},t)))})})})}function o(e){let{archive:t}=e;const s=(0,a.G)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),r=(0,a.G)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),d=function(e){const t=e.reduce(((e,t)=>{const s=t.metadata.date.split("-")[0],r=e.get(s)??[];return e.set(s,[t,...r])}),new Map);return Array.from(t,(e=>{let[t,s]=e;return{year:t,posts:s}}))}(t.blogPosts);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.U7,{title:s,description:r}),(0,l.jsxs)(c.c,{children:[(0,l.jsx)("header",{className:"hero hero--primary",children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsx)(n.c,{as:"h1",className:"hero__title",children:s}),(0,l.jsx)("p",{className:"hero__subtitle",children:r})]})}),(0,l.jsx)("main",{children:d.length>0&&(0,l.jsx)(h,{years:d})})]})]})}}}]);