"use strict";(self.webpackChunktesteroid=self.webpackChunktesteroid||[]).push([[9653],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var o=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,o,a=function(e,r){if(null==e)return{};var t,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),c=function(e){var r=o.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=c(e.components);return o.createElement(l.Provider,{value:r},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},d=o.forwardRef((function(e,r){var t=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(t),d=a,f=h["".concat(l,".").concat(d)]||h[d]||p[d]||n;return t?o.createElement(f,i(i({ref:r},u),{},{components:t})):o.createElement(f,i({ref:r},u))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var n=t.length,i=new Array(n);i[0]=d;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[h]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<n;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7606:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var o=t(7462),a=(t(7294),t(3905));const n={sidebar_position:1},i="Hardware: CPU",s={unversionedId:"What to look for in a host/hardware-cpu",id:"What to look for in a host/hardware-cpu",title:"Hardware: CPU",description:"We use PassMark Software's services to roughly compare CPUs. You can use their comparison tool here for yourself. You can also view a list of our updated hardware here.",source:"@site/docs/What to look for in a host/hardware-cpu.md",sourceDirName:"What to look for in a host",slug:"/What to look for in a host/hardware-cpu",permalink:"/What to look for in a host/hardware-cpu",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/What to look for in a host/hardware-cpu.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Split Tab",permalink:"/Understanding the Panel/splitter"},next:{title:"Hardware: RAM",permalink:"/What to look for in a host/hardware-ram"}},l={},c=[{value:"Cores &amp; Threads",id:"cores--threads",level:3},{value:"Cache",id:"cache",level:3},{value:"Single Core",id:"single-core",level:3},{value:"Multi Core",id:"multi-core",level:3}],u={toc:c},h="wrapper";function p(e){let{components:r,...t}=e;return(0,a.kt)(h,(0,o.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"hardware-cpu"},"Hardware: CPU"),(0,a.kt)("p",null,"We use PassMark Software's services to roughly compare CPUs. You can use their comparison tool ",(0,a.kt)("a",{parentName:"p",href:"https://cpubenchmark.net/compare"},"here")," for yourself. You can also view a list of our updated hardware ",(0,a.kt)("a",{parentName:"p",href:"https://asteroidhost.com/company/hardware"},"here"),"."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"cores--threads"},"Cores & Threads"),(0,a.kt)("p",null,"The amount of cores or threads that a CPU has lets you know whether a host is overselling their servers or not. If a node has 128GB of RAM but only 8 threads, you're in for a rough time as a lot of people will be sharing the same thread. The more overall threads a CPU has, the less people use the same thread."),(0,a.kt)("h3",{id:"cache"},"Cache"),(0,a.kt)("p",null,"On a CPU, the cache is basically like onboard RAM. Since it is literal milimeters from the other components it is extremely fast memory. Minecraft really only cares about L3 cache. This would be anything that stores data whether it be inventories, chests, worlds, etc."),(0,a.kt)("p",null,"This kind of thing gets loaded into RAM later, but for on the fly math like world generation, having a lot of L3 cache is extremely important for noticeable performance gains over a different CPU."),(0,a.kt)("h3",{id:"single-core"},"Single Core"),(0,a.kt)("p",null,"Currently, ",(0,a.kt)("em",{parentName:"p"},"(without ",(0,a.kt)("a",{parentName:"em",href:"https://papermc.io/software/folia"},"Folia"),")"),", Minecraft LOVES Single Core performance since most of the Server runs on one thread. Therefore, the Single Core score is extremely important. It is a relative number showing the real-world differences in single threaded performance."),(0,a.kt)("p",null,"For a newbie's perspective, good way to look at it is like 10,000 multicore score is about 1,000 single core in performance tradeoffs."),(0,a.kt)("h3",{id:"multi-core"},"Multi Core"),(0,a.kt)("p",null,"Multi Core performance is how good all the cores are combined. This isn't too important for Minecraft Servers, but it can expose some generational improvements between chips. This is the number you would usually use to determine speed variations between chips if you were looking to buy for a desktop computer or workstation."))}p.isMDXComponent=!0}}]);