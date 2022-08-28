(()=>{"use strict";var n={741:(n,r,e)=>{e.d(r,{Z:()=>s});var t=e(81),o=e.n(t),i=e(645),a=e.n(i)()(o());a.push([n.id,".header__button__menu {\r\n  display: none;\r\n}\r\n.header__button__menu div {\r\n  width: 60px;\r\n  height: 8px;\r\n  background-color: grey;\r\n  margin: 10px;\r\n  border-radius: 2px;\r\n  transition: transform ease-in-out 0.1s;\r\n}\r\n\r\n/* modificações JavaScript animação button */\r\n.header__button__menu--hover {\r\n  padding-top: 20px;\r\n}\r\n.header__button__menu--hover div {\r\n  position: relative;\r\n  margin: 0px 10px;\r\n}\r\n.header__button__menu--hover :nth-child(1) {\r\n  transform: rotate(90deg);\r\n  top: 8px;\r\n}\r\n.header__button__menu--hover :nth-child(2) {\r\n  transform: rotate(180deg);\r\n}\r\n.header__button__menu--hover :nth-child(3) {\r\n  transform: rotate(-90deg);\r\n  top: -8px;\r\n}\r\n\r\n/* modificações JavaScript box over */\r\n\r\n@media (max-width: 860px) {\r\n  div.header__button__menu {\r\n    display: block;\r\n    position: relative;\r\n    right: 25px;\r\n    height: 60px;\r\n    width: 60px;\r\n  }\r\n}\r\n",""]);const s=a},850:(n,r,e)=>{e.d(r,{Z:()=>s});var t=e(81),o=e.n(t),i=e(645),a=e.n(i)()(o());a.push([n.id,"/* Perfil */\r\n.header__perfil {\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n}\r\n.header__perfil__photo {\r\n  width: 200px;\r\n  height: 200px;\r\n  border-radius: 50%;\r\n  border: solid 2px #fff;\r\n  transition: width ease-in-out 0.5s, height ease-in-out 0.5s;\r\n}\r\n.header__perfil__Label {\r\n  width: 350px;\r\n  height: 100px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-evenly;\r\n  align-items: flex-start;\r\n  padding-left: 2vw;\r\n  transition: width ease-in-out 0.2s, height ease-in-out 0.3s;\r\n}\r\n.header__perfil__Label h1,\r\n.header__perfil__Label h3 {\r\n  color: #fff;\r\n}\r\n\r\n.header__links {\r\n  align-self: center;\r\n  height: 80%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-evenly;\r\n  align-items: flex-end;\r\n}\r\n/* LINKs Sociais */\r\n.header__links__social {\r\n  width: 440px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  transition: width ease-in-out 0.6s;\r\n}\r\n.header__link__social__icon {\r\n  width: 80px;\r\n  height: 80px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: #323232;\r\n  border-radius: 50%;\r\n}\r\n.header__link__social__icon:hover {\r\n  background-color: #000000;\r\n  box-shadow: inset 0px 0px 20px #fff, 0px 0px 10px #fff;\r\n}\r\n\r\n/* LINKs Internos */\r\n.header__links__in {\r\n  width: 440px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  transition: width ease-in-out 0.6s;\r\n}\r\n.header__link__in {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n}\r\n.header__link__in a {\r\n  text-decoration: none;\r\n  font-weight: bold;\r\n  color: #fff;\r\n  padding-top: 4px;\r\n  padding-left: 10px;\r\n}\r\n.header__link__in--hover:hover {\r\n  color: #5d5d5d;\r\n}\r\n\r\n@media (max-width: 1060px) {\r\n  .header__links__social {\r\n    width: 380px;\r\n  }\r\n  .header__perfil__Label {\r\n    width: 240px;\r\n  }\r\n  .header__links__in {\r\n    width: 380px;\r\n  }\r\n}\r\n@media (max-width: 860px) {\r\n  .header__perfil__photo {\r\n    width: 80px;\r\n    height: 80px;\r\n  }\r\n  .header__perfil__Label {\r\n    width: 160px;\r\n  }\r\n  .header__perfil__Label h1 {\r\n    font-size: 1rem;\r\n  }\r\n  .header__perfil__Label h3 {\r\n    font-size: 0.8rem;\r\n  }\r\n  .header__links__social,\r\n  .header__links__in {\r\n    display: none;\r\n  }\r\n}\r\n",""]);const s=a},556:(n,r,e)=>{e.d(r,{Z:()=>s});var t=e(81),o=e.n(t),i=e(645),a=e.n(i)()(o());a.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&display=swap);"]),a.push([n.id,"* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: Merriweather;\r\n}\r\n#root {\r\n  width: auto;\r\n}\r\n.s-main,\r\n.s-header {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n}\r\n.u-containerCenter {\r\n  width: 80vw;\r\n  /* background-color: #fff9; */\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  transition: width ease-in-out 0.6s;\r\n}\r\n.s-header {\r\n  height: 250px;\r\n  background-color: #000;\r\n  border-bottom-width: 1px;\r\n  border-bottom-color: #fff;\r\n  border-bottom-style: solid;\r\n  transition: height ease-in-out 0.5s;\r\n}\r\n.s-main {\r\n  height: 100vh;\r\n  background-color: #323232;\r\n  border-bottom: 1px #000;\r\n}\r\n\r\n@media (max-width: 1300px) {\r\n  .u-containerCenter {\r\n    width: 98%;\r\n  }\r\n}\r\n\r\n@media (max-width: 860px) {\r\n  .s-header {\r\n    height: 100px;\r\n  }\r\n}\r\n",""]);const s=a},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(a[d]=!0)}for(var l=0;l<n.length;l++){var c=[].concat(n[l]);t&&a[c[0]]||(void 0!==i&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=i),e&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=e):c[2]=e),o&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=o):c[4]="".concat(o)),r.push(c))}},r}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var i={},a=[],s=0;s<n.length;s++){var d=n[s],l=t.base?d[0]+t.base:d[0],c=i[l]||0,u="".concat(l," ").concat(c);i[l]=c+1;var h=e(u),p={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==h)r[h].references++,r[h].updater(p);else{var _=o(p,t);t.byIndex=s,r.splice(s,0,{identifier:u,updater:_,references:1})}a.push(u)}return a}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=e(i[a]);r[s].references--}for(var d=t(n,o),l=0;l<i.length;l++){var c=e(i[l]);0===r[c].references&&(r[c].updater(),r.splice(c,1))}i=d}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},r={};function e(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={id:t,exports:{}};return n[t](i,i.exports,e),i.exports}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),e.nc=void 0,(()=>{var n=e(379),r=e.n(n),t=e(795),o=e.n(t),i=e(569),a=e.n(i),s=e(565),d=e.n(s),l=e(216),c=e.n(l),u=e(589),h=e.n(u),p=e(556),_={};_.styleTagTransform=h(),_.setAttributes=d(),_.insert=a().bind(null,"head"),_.domAPI=o(),_.insertStyleElement=c(),r()(p.Z,_),p.Z&&p.Z.locals&&p.Z.locals;var f=e(850),m={};m.styleTagTransform=h(),m.setAttributes=d(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=c(),r()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;var x=e(741),v={};v.styleTagTransform=h(),v.setAttributes=d(),v.insert=a().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=c(),r()(x.Z,v),x.Z&&x.Z.locals&&x.Z.locals;var b=document.querySelector(".js-header__button__menu"),g=(document.querySelector(".js-header__links__in"),document.querySelector(".js-header__links__social"),!1);function y(n){"mouseover"!==n.type||g?"mouseout"!==n.type||g||b.classList.remove("header__button__menu--hover"):(n.target.classList.contains("js-header__button__menu")||n.target.parentElement.classList.contains("js-header__button__menu"))&&b.classList.add("header__button__menu--hover")}b.onmouseover=y,b.onmouseout=y,b.onclick=function(n){g?(b.classList.remove("header__button__menu--hover"),g=!1):(b.classList.add("header__button__menu--hover"),g=!0)}})()})();