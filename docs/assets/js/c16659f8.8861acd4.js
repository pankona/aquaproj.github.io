"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[568],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9441:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return l},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={sidebar_position:700},u="Nix OS",s={unversionedId:"comparison/nixos",id:"comparison/nixos",title:"Nix OS",description:"Note that we aren't familiar with Nix OS.",source:"@site/docs/comparison/nixos.md",sourceDirName:"comparison",slug:"/comparison/nixos",permalink:"/docs/comparison/nixos",editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/comparison/nixos.md",tags:[],version:"current",sidebarPosition:700,frontMatter:{sidebar_position:700},sidebar:"tutorialSidebar",previous:{title:"alexellis/arkade",permalink:"/docs/comparison/arkade"},next:{title:"Usecase",permalink:"/docs/usecase"}},l=[],p={toc:l};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"nix-os"},"Nix OS"),(0,o.kt)("p",null,"\u26a0\ufe0f Note that we aren't familiar with Nix OS."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://nixos.org/"},"https://nixos.org/")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Nix is a tool that takes a unique approach to package management and system configuration.")),(0,o.kt)("p",null,"Nix OS is a package manager. On the other hand, aqua isn't a package manager.\naqua doesn't manage dependencies."),(0,o.kt)("p",null,"Nix OS builds reproducible, declarative and reliable systems."),(0,o.kt)("p",null,"aqua is simple and easy to use.\nThis is important to introduce aqua in a team and project."),(0,o.kt)("p",null,"Furthermore, you can update tools easily with Renovate. aqua is CI friendly. You can add a tool to the Standard Registry easily."),(0,o.kt)("p",null,"On the other hand, Nix OS is too complicated to introduce it to team and project.\nCompared with aqua, the learning cost is high.\nIf your team is small and every member has high technical skill, this may not be a problem."),(0,o.kt)("p",null,"The scope and goal of aqua are different from Nix OS."))}m.isMDXComponent=!0}}]);