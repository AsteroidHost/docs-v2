"use strict";(self.webpackChunktesteroid=self.webpackChunktesteroid||[]).push([[3555],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,m=d["".concat(p,".").concat(f)]||d[f]||c[f]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},61:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:3},o="\u26a0\ufe0f Updating Minecraft",l={unversionedId:"updating",id:"updating",title:"\u26a0\ufe0f Updating Minecraft",description:"This guide will show you how to easily and quickly update your Minecraft version!",source:"@site/docs/updating.md",sourceDirName:".",slug:"/updating",permalink:"/updating",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/updating.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\ud83c\udf0e Migrating Hosts",permalink:"/server-import"},next:{title:"\ud83e\udd14 Choosing a Plan",permalink:"/server-select"}},p={},s=[{value:"Step 1 - Navigation",id:"step-1---navigation",level:2},{value:"Step 2 - Selecting a Version",id:"step-2---selecting-a-version",level:2},{value:"Step 3 - Starting the Update",id:"step-3---starting-the-update",level:2},{value:"Alternative Method",id:"alternative-method",level:2}],u={toc:s},d="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\ufe0f-updating-minecraft"},"\u26a0\ufe0f Updating Minecraft"),(0,a.kt)("p",null,"This guide will show you how to easily and quickly update your Minecraft version!"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"step-1---navigation"},"Step 1 - Navigation"),(0,a.kt)("p",null,"Head over to our panel at ",(0,a.kt)("a",{parentName:"p",href:"https://panel.asteroidhost.com"},"panel.asteroidhost.com"),', then click on your server you would like to change, and navigate to the "Startup" tab.'),(0,a.kt)("h2",{id:"step-2---selecting-a-version"},"Step 2 - Selecting a Version"),(0,a.kt)("p",null,"Change ",(0,a.kt)("inlineCode",{parentName:"p"},"MINECRAFT VERSION")," to either ",(0,a.kt)("inlineCode",{parentName:"p"},"latest")," or a version of Minecraft, ex: ",(0,a.kt)("inlineCode",{parentName:"p"},"1.19.4"),"."),(0,a.kt)("p",null,"Change ",(0,a.kt)("inlineCode",{parentName:"p"},"BUILD VERSION")," to either ",(0,a.kt)("inlineCode",{parentName:"p"},"latest")," or a version of your Server Software, ex: ",(0,a.kt)("inlineCode",{parentName:"p"},"485"),".\n",(0,a.kt)("em",{parentName:"p"},"(Invalid versions will default to latest)")),(0,a.kt)("p",null,"Then, set your ",(0,a.kt)("inlineCode",{parentName:"p"},"SERVER JAR FILE")," to what you want your new JAR to be called. If one of the same name already exists, it will need to be Deleted from the ",(0,a.kt)("a",{parentName:"p",href:"/Understanding%20the%20Panel/files#file-actions"},"Files Tab"),"."),(0,a.kt)("h2",{id:"step-3---starting-the-update"},"Step 3 - Starting the Update"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Make sure your Server is turned off before continuing.")," We also ",(0,a.kt)("strong",{parentName:"p"},"highly")," recommend ",(0,a.kt)("a",{parentName:"p",href:"/Understanding%20the%20Panel/backups#creating-a-backup"},"creating a backup")," before proceeding.")),(0,a.kt)("p",null,'Once you\'re ready, head to the "Settings" tab on the Panel. Scroll down and click ',(0,a.kt)("inlineCode",{parentName:"p"},"REINSTALL SERVER"),"."),(0,a.kt)("p",null,"This will re-run the installation script which will download the JAR specified in Step 2.\n",(0,a.kt)("em",{parentName:"p"},"(This should NOT delete ANY extra files, but in the event it does you should create a backup beforehand.)")),(0,a.kt)("h2",{id:"alternative-method"},"Alternative Method"),(0,a.kt)("p",null,'If using the automatic installer doesn\'t fit you, you can always download the JAR file yourself and upload it to your server. However, make sure the name of the JAR is the same as specified in the "Startup" tab.'),(0,a.kt)("p",null,"Download links:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Vanilla: ",(0,a.kt)("a",{parentName:"li",href:"https://www.minecraft.net/en-us/download/server"},"https://www.minecraft.net/en-us/download/server")),(0,a.kt)("li",{parentName:"ul"},"Bukkit: ",(0,a.kt)("a",{parentName:"li",href:"https://getbukkit.org/download/craftbukkit"},"https://getbukkit.org/download/craftbukkit")),(0,a.kt)("li",{parentName:"ul"},"Spigot: ",(0,a.kt)("a",{parentName:"li",href:"https://getbukkit.org/download/spigot"},"https://getbukkit.org/download/spigot")),(0,a.kt)("li",{parentName:"ul"},"Paper: ",(0,a.kt)("a",{parentName:"li",href:"https://papermc.io/downloads/paper"},"https://papermc.io/downloads/paper")),(0,a.kt)("li",{parentName:"ul"},"Purpur: ",(0,a.kt)("a",{parentName:"li",href:"https://purpurmc.org/downloads"},"https://purpurmc.org/downloads")),(0,a.kt)("li",{parentName:"ul"},"Forge: ",(0,a.kt)("a",{parentName:"li",href:"https://files.minecraftforge.net/net/minecraftforge/forge/"},"https://files.minecraftforge.net/net/minecraftforge/forge/")),(0,a.kt)("li",{parentName:"ul"},"Fabric: ",(0,a.kt)("a",{parentName:"li",href:"https://fabricmc.net/use/server/"},"https://fabricmc.net/use/server/")),(0,a.kt)("li",{parentName:"ul"},"Bungeecord: ",(0,a.kt)("a",{parentName:"li",href:"https://ci.md-5.net/job/BungeeCord/"},"https://ci.md-5.net/job/BungeeCord/"))))}c.isMDXComponent=!0}}]);