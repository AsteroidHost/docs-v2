"use strict";(self.webpackChunktesteroid=self.webpackChunktesteroid||[]).push([[2273],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,k=d["".concat(s,".").concat(h)]||d[h]||c[h]||l;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2865:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:5},i="Schedules Tab",o={unversionedId:"Understanding the Panel/schedules",id:"Understanding the Panel/schedules",title:"Schedules Tab",description:"The fourth tab on the top navigation bar. These use cron as the scheduling service. Make sure to check your server's timezone here.",source:"@site/docs/Understanding the Panel/schedules.md",sourceDirName:"Understanding the Panel",slug:"/Understanding the Panel/schedules",permalink:"/Understanding the Panel/schedules",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Understanding the Panel/schedules.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Databases Tab",permalink:"/Understanding the Panel/databases"},next:{title:"Users Tab",permalink:"/Understanding the Panel/users"}},s={},u=[{value:"Creating a Schedule",id:"creating-a-schedule",level:2},{value:"Step 1",id:"step-1",level:3},{value:"Step 2",id:"step-2",level:3},{value:"Step 3",id:"step-3",level:3},{value:"Step 4 - Values",id:"step-4---values",level:3},{value:"Step 5 - Options",id:"step-5---options",level:3},{value:"Step 6 - Create",id:"step-6---create",level:3},{value:"Step 7 - Tasks",id:"step-7---tasks",level:3},{value:"Step 8 - Testing",id:"step-8---testing",level:3},{value:"Modifying a Schedule",id:"modifying-a-schedule",level:2},{value:"Deleting a Schedule",id:"deleting-a-schedule",level:2}],p={toc:u},d="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"schedules-tab"},"Schedules Tab"),(0,r.kt)("p",null,"The fourth tab on the top navigation bar. These use cron as the scheduling service. Make sure to check your server's timezone ",(0,r.kt)("a",{parentName:"p",href:"https://asteroidhost.com/company/hardware"},"here"),"."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"creating-a-schedule"},"Creating a Schedule"),(0,r.kt)("h3",{id:"step-1"},"Step 1"),(0,r.kt)("p",null,"Head over to our panel at ",(0,r.kt)("a",{parentName:"p",href:"https://panel.asteroidhost.com"},"panel.asteroidhost.com"),"."),(0,r.kt)("h3",{id:"step-2"},"Step 2"),(0,r.kt)("p",null,'Next click on your server you would like to change, and navigate to the "Schedules" tab.'),(0,r.kt)("h3",{id:"step-3"},"Step 3"),(0,r.kt)("p",null,'Click on the "CREATE SCHEDULE" button.'),(0,r.kt)("h3",{id:"step-4---values"},"Step 4 - Values"),(0,r.kt)("p",null,"This may look daunting if you have never used cronjobs before. If this is the case, we highly recommend using a site like ",(0,r.kt)("a",{parentName:"p",href:"https://crontab.guru/"},"Crontab Guru")," to generate you a value."),(0,r.kt)("p",null,"Let's start by giving our schedule a name. Then, we want to schedule a daily server restart for every Wednesday at 4:30AM. Keep in mind that the time is based on where the server is located. You can view our locations ",(0,r.kt)("a",{parentName:"p",href:"https://asteroidhost.com/company/hardware"},"here"),"."),(0,r.kt)("p",null,"Thus, we will set our values to ",(0,r.kt)("inlineCode",{parentName:"p"},"30 4 * * 3"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"30")," standing for 30 minutes into the hour."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"4")," standing for hour 4 in the day. Cron uses 24-hour time, so if you want it to fire at 6pm, you would need to use ",(0,r.kt)("inlineCode",{parentName:"li"},"18")," instead of ",(0,r.kt)("inlineCode",{parentName:"li"},"6"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"*")," means it can be any value. Therefore the current day of the month is irrelevant."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"*")," means it can be any value. Therefore the current month is irrelevant."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"3")," is for the day of the week. 0 is for Sunday, and 6 is for Saturday. This makes 3 stand for Wednesday. Perfect.")),(0,r.kt)("h3",{id:"step-5---options"},"Step 5 - Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"SHOW CHEATSHEET")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Below the values is the option for a cheatsheet. This can be used to get familiarized with the concept of cron."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"ONLY WHEN SERVER IS ONLINE")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If enabled, this schedule will only run if the server is currently online, else it will fail."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"SCHEDULE ENABLED")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If enabled, schedule will run automatically. It's usually best to leave this enabled, but the option is there if you don't want it to be running yet.")))),(0,r.kt)("h3",{id:"step-6---create"},"Step 6 - Create"),(0,r.kt)("p",null,'Make sure all is good, then click the "CREATE SCHEDULE" button.'),(0,r.kt)("h3",{id:"step-7---tasks"},"Step 7 - Tasks"),(0,r.kt)("p",null,'Next we need to add a task. Click on your newly created schedule. Click on "NEW TASK".'),(0,r.kt)("p",null,"Here there will be 3 options."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Send Command"),(0,r.kt)("li",{parentName:"ul"},"Send Power Action"),(0,r.kt)("li",{parentName:"ul"},"Create Backup")),(0,r.kt)("p",null,"We will first be choosing ",(0,r.kt)("inlineCode",{parentName:"p"},"Send Command"),". We will use this to notify players of an incoming restart."),(0,r.kt)("p",null,"For our ",(0,r.kt)("strong",{parentName:"p"},"Payload"),", we will be inputting ",(0,r.kt)("inlineCode",{parentName:"p"},"say Server will be restarting in 30 seconds!"),' into the box, and clicking "CREATE TASK".'),(0,r.kt)("p",null,"Now, we will create another task. This time we will be using the ",(0,r.kt)("inlineCode",{parentName:"p"},"Send Power Action")," function. We will set the ",(0,r.kt)("strong",{parentName:"p"},"Time Offset")," to 30 seconds."),(0,r.kt)("p",null,"For our ",(0,r.kt)("strong",{parentName:"p"},"Payload")," we will be selecting ",(0,r.kt)("inlineCode",{parentName:"p"},"Restart the server")," from the list. ",(0,r.kt)("em",{parentName:"p"},"(Keep in mind Terminating the server is different from a billing termination, and works the same as the kill button. It will not delete your server from your account.)")),(0,r.kt)("p",null,"Now add the task."),(0,r.kt)("h3",{id:"step-8---testing"},"Step 8 - Testing"),(0,r.kt)("p",null,"If possible, it's good to make sure to test. You can either do this by scheduling a few minutes from now or just test your tasks by clicking the ",(0,r.kt)("inlineCode",{parentName:"p"},"Run Now")," button on the schedule."),(0,r.kt)("h2",{id:"modifying-a-schedule"},"Modifying a Schedule"),(0,r.kt)("p",null,'You can modify your schedule\'s cron time and date requirements by clicking on the "Schedules" tab, and clicking on your Schedule.'),(0,r.kt)("p",null,'Next, click "EDIT" at the top. The original schedule creation box will pop up. Make sure to save your changes.'),(0,r.kt)("p",null,"If you want to change your tasks, you can by clicking on each one's ",(0,r.kt)("icon",{icon:"fa-solid fa-pencil",size:"lg"})," Edit button."),(0,r.kt)("h2",{id:"deleting-a-schedule"},"Deleting a Schedule"),(0,r.kt)("p",null,'If you want to delete your entire schedule, start by navigating to the "Schedules" tab, and clicking on your Schedule.'),(0,r.kt)("p",null,'At the bottom, click "Delete". Confirm your changes.'),(0,r.kt)("p",null,"If you want to delete a task, you can by clicking on each one's ",(0,r.kt)("icon",{icon:"fa-solid fa-trash-can",size:"lg"})," Delete button."),(0,r.kt)("hr",null),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Last Updated: May 13, 2023"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/ZTGMcfsskN"},(0,r.kt)("icon",{icon:"fa-brands fa-discord",size:"lg"})," Discord Support"))))}c.isMDXComponent=!0}}]);