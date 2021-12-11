"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[8310],{3905:function(e,n,r){r.d(n,{Zo:function(){return s},kt:function(){return d}});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),u=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},s=function(e){var n=u(e.components);return t.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=u(r),d=a,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||o;return r?t.createElement(m,i(i({ref:n},s),{},{components:r})):t.createElement(m,i({ref:n},s))}));function d(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2060:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return f}});var t=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={sidebar_position:600},c="Where are tools installed?",u={unversionedId:"reference/install-location",id:"reference/install-location",isDocsHomePage:!1,title:"Where are tools installed?",description:"* Symbolic links are created in $HOME/.aqua/bin, so add this to the environment variable PATH",source:"@site/docs/reference/install-location.md",sourceDirName:"reference",slug:"/reference/install-location",permalink:"/docs/reference/install-location",editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/reference/install-location.md",tags:[],version:"current",sidebarPosition:600,frontMatter:{sidebar_position:600},sidebar:"tutorialSidebar",previous:{title:"Clean unused packages",permalink:"/docs/reference/clean"},next:{title:"How does Lazy Install work?",permalink:"/docs/reference/lazy-install"}},s=[],p={toc:s};function f(e){var n=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"where-are-tools-installed"},"Where are tools installed?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Symbolic links are created in ",(0,o.kt)("inlineCode",{parentName:"li"},"$HOME/.aqua/bin"),", so add this to the environment variable ",(0,o.kt)("inlineCode",{parentName:"li"},"PATH")),(0,o.kt)("li",{parentName:"ul"},"Tools are installed in ",(0,o.kt)("inlineCode",{parentName:"li"},"$HOME/.aqua/pkgs"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"(your working directory)/\n  aqua.yaml\n~/.aqua/ # $AQUA_ROOT_DIR (default ~/.aqua)\n  bin/\n    aqua-proxy (symbolic link to aqua-proxy)\n    <tool> (symbolic link to aqua-proxy)\n  global/\n    aqua.yaml # global configuration\n  pkgs/\n    github_release/\n      github.com/\n        aquaproj/\n          aqua-proxy/\n            v0.1.0/\n              aqua-proxy_darwin_amd64.tar.gz\n                aqua-proxy\n  registries/\n    github_content/\n      github.com/\n        aquaproj/\n          aqua-registry/\n            v0.1.1-0/\n              registry.yaml\n")))}f.isMDXComponent=!0}}]);