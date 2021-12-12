"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[783],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1506:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:50},s="Common Pros and Cons",u={unversionedId:"comparison/common",id:"comparison/common",title:"Common Pros and Cons",description:"Pros",source:"@site/docs/comparison/common.md",sourceDirName:"comparison",slug:"/comparison/common",permalink:"/docs/comparison/common",editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/comparison/common.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{sidebar_position:50},sidebar:"tutorialSidebar",previous:{title:"Uninstall aqua",permalink:"/docs/reference/uninstall"},next:{title:"Manual download and install tools",permalink:"/docs/comparison/manual"}},p=[{value:"Pros",id:"pros",children:[],level:2},{value:"Cons",id:"cons",children:[],level:2}],c={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"common-pros-and-cons"},"Common Pros and Cons"),(0,a.kt)("h2",{id:"pros"},"Pros"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"aqua supports changing tool versions per project"),(0,a.kt)("li",{parentName:"ul"},"aqua forces to pin tool version, which solves the problem due to the different of version"),(0,a.kt)("li",{parentName:"ul"},"It is easy to use aqua",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/reference/declarative-imperative"},"aqua manages tools declaratively"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"aqua's command is always ",(0,a.kt)("inlineCode",{parentName:"li"},"aqua i [-l]"),". You don't have to specify tool names. It's user friendly"))))),(0,a.kt)("li",{parentName:"ul"},"aqua provides Renovate Preset Config"),(0,a.kt)("li",{parentName:"ul"},"aqua provides GitHub Actions and CircleCI Orb"),(0,a.kt)("li",{parentName:"ul"},"aqua supports Lazy Install"),(0,a.kt)("li",{parentName:"ul"},"aqua supports installing tools from the private repositories")),(0,a.kt)("h2",{id:"cons"},"Cons"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"aqua doesn't support Windows")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"aqua's install process is very simple."),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Download tool"),(0,a.kt)("li",{parentName:"ol"},"Unarchive tool in ~/.aqua")),(0,a.kt)("p",{parentName:"li"},"aqua doesn't support running commands after unarchiving.\nSo aqua doesn't support installing tools which some commands are required.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"aqua doesn't support installing dependent tools automatically"))))}m.isMDXComponent=!0}}]);