(()=>{"use strict";var r={498:(r,n,e)=>{e.d(n,{Z:()=>d});var t=e(81),o=e.n(t),i=e(645),a=e.n(i)()(o());a.push([r.id,".s-about-portf {\r\n  width: 100%;\r\n  height: 100%;\r\n  grid-row-start: 3;\r\n  grid-row-end: 4;\r\n}\r\n.s-about-portf__header {\r\n  width: 100%;\r\n  height: 40px;\r\n  background-color: #000;\r\n  border-top: 1px solid #fff;\r\n  border-right: 1px solid #fff;\r\n  border-left: 1px solid #fff;\r\n  border-top-left-radius: 6px;\r\n  border-top-right-radius: 6px;\r\n}\r\n.s-about-portf__text-box {\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: #d9d9d9;\r\n  border-bottom: 1px solid #fff;\r\n  border-right: 1px solid #fff;\r\n  border-left: 1px solid #fff;\r\n  border-bottom-left-radius: 6px;\r\n  border-bottom-right-radius: 6px;\r\n  padding: 25px;\r\n  text-align: justify;\r\n  overflow-y: auto;\r\n}\r\n",""]);const d=a},741:(r,n,e)=>{e.d(n,{Z:()=>d});var t=e(81),o=e.n(t),i=e(645),a=e.n(i)()(o());a.push([r.id,".header__button__menu {\r\n  display: none;\r\n  transform: scale(0.8);\r\n  cursor: pointer;\r\n  z-index: 1;\r\n  position: fixed;\r\n}\r\n.header__button__menu div {\r\n  width: 60px;\r\n  height: 8px;\r\n  background-color: grey;\r\n  margin: 10px;\r\n  border-radius: 2px;\r\n  transition: transform ease-in-out 0.1s;\r\n}\r\n\r\n/* modificações JavaScript animação button */\r\n.js-header__button__menu--active {\r\n  top: 10px;\r\n}\r\n.js-header__button__menu--active > div {\r\n  position: relative;\r\n  margin: 0px 10px;\r\n}\r\n.js-header__button__menu--active > :nth-child(1) {\r\n  transform: rotate(-45deg);\r\n  top: 8px;\r\n}\r\n.js-header__button__menu--active > :nth-child(2) {\r\n  transform: rotate(45deg);\r\n}\r\n.js-header__button__menu--active > :nth-child(3) {\r\n  transform: rotate(-45deg);\r\n  top: -8px;\r\n}\r\n\r\n@media (max-width: 860px) {\r\n  .header__button__menu {\r\n    display: block;\r\n    position: relative;\r\n    right: 25px;\r\n    height: 60px;\r\n    width: 60px;\r\n  }\r\n}\r\n",""]);const d=a},25:(r,n,e)=>{e.d(n,{Z:()=>d});var t=e(81),o=e.n(t),i=e(645),a=e.n(i)()(o());a.push([r.id,".s-footer {\r\n  background-color: black;\r\n  height: 400px;\r\n  border-top: 1px solid #fff;\r\n  display: grid;\r\n  place-items: center;\r\n  transition: height ease-in-out 0.5s;\r\n}\r\n\r\n.s-footer__text-box > p {\r\n  color: #d9d9d9;\r\n  line-height: 1.4rem;\r\n}\r\n\r\n@media (max-width: 860px) {\r\n  .s-footer {\r\n    height: 280px;\r\n  }\r\n  .s-footer__text-box > p {\r\n    font-size: 0.9rem;\r\n  }\r\n}\r\n\r\n/* E fim! S2*/\r\n",""]);const d=a},850:(r,n,e)=>{e.d(n,{Z:()=>d});var t=e(81),o=e.n(t),i=e(645),a=e.n(i)()(o());a.push([r.id,".s-header {\r\n  position: fixed;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  height: 250px;\r\n  background-color: #000;\r\n  border-bottom-width: 1px;\r\n  border-bottom-color: #fff;\r\n  border-bottom-style: solid;\r\n  transition: height ease-in-out 0.5s;\r\n}\r\n.js-header--scroll-active {\r\n  height: 120px;\r\n}\r\n\r\n.s-header__container {\r\n  width: 80vw;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-direction: row;\r\n  transition: width ease-in-out 0.6s;\r\n}\r\n/* Perfil */\r\n.header__perfil {\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  transition: transform ease-in-out 0.5s;\r\n}\r\n.js-header--scroll-active .header__perfil {\r\n  transform: scale(0.8);\r\n}\r\n.header__perfil__photo {\r\n  width: 200px;\r\n  height: 200px;\r\n  border-radius: 50%;\r\n  border: solid 2px #fff;\r\n  transition: width ease-in-out 0.5s, height ease-in-out 0.5s;\r\n}\r\n.js-header__perfil__photo--scroll-active {\r\n  width: 130px;\r\n  height: 130px;\r\n}\r\n.header__perfil__Label {\r\n  width: 350px;\r\n  height: 100px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-evenly;\r\n  align-items: flex-start;\r\n  padding-left: 2vw;\r\n  transition: width ease-in-out 0.2s, height ease-in-out 0.3s,\r\n    font-size ease-in-out 0.6s;\r\n}\r\n.header__perfil__Label h1,\r\n.header__perfil__Label h3 {\r\n  color: #fff;\r\n}\r\n\r\n/* LINKs Sociais */\r\n.header__links {\r\n  align-self: center;\r\n  height: 80%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-evenly;\r\n  align-items: flex-end;\r\n}\r\n.header__links__social {\r\n  width: 340px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  transition: width ease-in-out 0.6s;\r\n}\r\n.header__link__social__icon {\r\n  width: 60px;\r\n  height: 60px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: #323232;\r\n  border-radius: 50%;\r\n}\r\n.header__link__social__icon > img {\r\n  width: 30px;\r\n  height: auto;\r\n}\r\n.header__link__social__icon:hover {\r\n  background-color: #000000;\r\n  box-shadow: inset 0 0 10px #fff9, 0 0 10px #fff9;\r\n  cursor: pointer;\r\n}\r\n\r\n/* LINKs Internos */\r\n.header__links__in {\r\n  width: 440px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  transition: width ease-in-out 0.6s;\r\n}\r\n.header__link__in {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n}\r\n.header__link__in a {\r\n  text-decoration: none;\r\n  font-weight: bold;\r\n  color: #fff;\r\n  padding-top: 4px;\r\n  padding-left: 10px;\r\n}\r\n.header__link__in--hover:hover {\r\n  color: #5d5d5d;\r\n}\r\n\r\n@media (max-width: 1300px) {\r\n  .s-header__container {\r\n    width: 98%;\r\n  }\r\n}\r\n@media (max-width: 1060px) {\r\n  .header__perfil__Label {\r\n    width: 240px;\r\n  }\r\n  .header__links__in {\r\n    width: 380px;\r\n  }\r\n}\r\n@media (max-width: 860px) {\r\n  .s-header {\r\n    height: 100px;\r\n  }\r\n  .js-header--scroll-active {\r\n    height: 80px;\r\n    z-index: 2;\r\n  }\r\n\r\n  .header__perfil__photo {\r\n    width: 80px;\r\n    height: 80px;\r\n  }\r\n  .header__perfil__Label {\r\n    width: 160px;\r\n  }\r\n  .header__perfil__Label h1 {\r\n    font-size: 1rem;\r\n  }\r\n  .header__perfil__Label h3 {\r\n    font-size: 0.8rem;\r\n  }\r\n  .header__links__social,\r\n  .header__links__in {\r\n    display: none;\r\n  }\r\n}\r\n",""]);const d=a},556:(r,n,e)=>{e.d(n,{Z:()=>d});var t=e(81),o=e.n(t),i=e(645),a=e.n(i)()(o());a.push([r.id,".s-main {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  background-color: #323232;\r\n  width: 100%;\r\n  height: auto;\r\n  padding-top: 250px;\r\n}\r\n.s-main-container {\r\n  width: 80vw;\r\n  padding-bottom: 300px;\r\n  display: grid;\r\n  grid-template-rows: 200px 200px 280px 280px 280px;\r\n  grid-template-columns: 1fr 1fr;\r\n  column-gap: 16px;\r\n  row-gap: 120px;\r\n  transition: width ease-in-out 0.6s;\r\n}\r\n\r\n@media (max-width: 1300px) {\r\n  .s-main-container {\r\n    width: 98%;\r\n  }\r\n}\r\n\r\n@media (max-width: 1023px) {\r\n  .s-main-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n}\r\n\r\n@media (max-width: 860px) {\r\n  .s-main {\r\n    padding-top: 100px;\r\n  }\r\n}\r\n",""]);const d=a},85:(r,n,e)=>{e.d(n,{Z:()=>d});var t=e(81),o=e.n(t),i=e(645),a=e.n(i)()(o());a.push([r.id,".s-my-history {\r\n  width: 100%;\r\n  height: 100%;\r\n  grid-row-start: 1;\r\n  grid-row-end: 4;\r\n}\r\n\r\n.s-my-history__text-box {\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: #d9d9d9;\r\n  border-bottom: 1px solid #fff;\r\n  border-right: 1px solid #fff;\r\n  border-left: 1px solid #fff;\r\n  border-bottom-left-radius: 6px;\r\n  border-bottom-right-radius: 6px;\r\n  padding: 25px;\r\n  text-align: justify;\r\n  overflow-y: auto;\r\n}\r\n.s-my-history__header {\r\n  width: 100%;\r\n  height: 40px;\r\n  background-color: #000;\r\n  border-top: 1px solid #fff;\r\n  border-right: 1px solid #fff;\r\n  border-left: 1px solid #fff;\r\n  border-top-left-radius: 6px;\r\n  border-top-right-radius: 6px;\r\n}\r\n\r\n/* @media (max-width: 1023px) {\r\n  .s-my-history {\r\n    width: 100%;\r\n  }\r\n} */\r\n",""]);const d=a},875:(r,n,e)=>{e.d(n,{Z:()=>d});var t=e(81),o=e.n(t),i=e(645),a=e.n(i)()(o());a.push([r.id,".header__over__menu {\r\n  width: 0%;\r\n  height: 0%;\r\n  background-color: #000;\r\n  position: fixed;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  top: 50%;\r\n  left: 50%;\r\n  justify-self: center;\r\n  transition: height ease-in-out 0.2s, width ease-in-out 0.2s,\r\n    top ease-in-out 0.2s, left ease-in-out 0.2s;\r\n  z-index: 1;\r\n}\r\n.header__over__menu__container {\r\n  width: 80vw;\r\n  height: 70vh;\r\n  background-color: #000;\r\n  border-radius: 8px;\r\n  box-shadow: inset 0 0 10px #fff9, 0 0 10px #fff8;\r\n  display: none;\r\n  flex-direction: column;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n}\r\n.header__over__menu__container a {\r\n  font-size: 24px;\r\n  font-weight: bold;\r\n  color: #fff;\r\n  text-decoration: none;\r\n}\r\n.header__over__menu__container a:hover {\r\n  color: #5d5d5d;\r\n}\r\n\r\n@media (max-width: 860px) {\r\n  .js-header__over__menu--Show {\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0%;\r\n    left: 0%;\r\n  }\r\n  .js-header__over__menu--Show > div {\r\n    display: flex;\r\n  }\r\n}\r\n",""]);const d=a},894:(r,n,e)=>{e.d(n,{Z:()=>d});var t=e(81),o=e.n(t),i=e(645),a=e.n(i)()(o());a.push([r.id,".s-projects {\r\n  width: 100%;\r\n  height: 100%;\r\n  grid-row-start: 4;\r\n  grid-row-end: 6;\r\n  grid-column-start: 1;\r\n  grid-column-end: 3;\r\n}\r\n.s-projects__header {\r\n  width: 100%;\r\n  height: 40px;\r\n  background-color: #000;\r\n  border-top: 1px solid #fff;\r\n  border-right: 1px solid #fff;\r\n  border-left: 1px solid #fff;\r\n  border-top-left-radius: 6px;\r\n  border-top-right-radius: 6px;\r\n}\r\n.s-projects__content-box {\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: #d9d9d9;\r\n  border-bottom: 1px solid #fff;\r\n  border-right: 1px solid #fff;\r\n  border-left: 1px solid #fff;\r\n  border-radius: 0 0 6px 6px;\r\n  padding: 25px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  flex-wrap: wrap;\r\n  gap: 0.6%;\r\n}\r\n\r\n.u-project__about {\r\n  width: 360px;\r\n  height: 250px;\r\n  cursor: pointer;\r\n  margin-bottom: 50px;\r\n}\r\n.u-project__label {\r\n  color: #000;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.u-project__about > :nth-child(2) {\r\n  width: 100%;\r\n  height: 16px;\r\n  background-color: #000;\r\n  border-top: 1px solid #000;\r\n  border-right: 1px solid #000;\r\n  border-left: 1px solid #000;\r\n  border-radius: 6px 6px 0 0;\r\n  box-shadow: 0 0 20px #0009;\r\n}\r\n.u-project__about > :nth-child(3) {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  background-color: #d9d9d9;\r\n  border-bottom: 1px solid #000;\r\n  border-right: 1px solid #000;\r\n  border-left: 1px solid #000;\r\n  border-radius: 0 0 6px 6px;\r\n  box-shadow: 0 0 10px #0009;\r\n  padding: 16px;\r\n  /* column-gap: 20px; */\r\n}\r\n.u-project__about > :nth-child(3) > img {\r\n  width: 80%;\r\n  height: auto;\r\n}\r\n.u-project__about > :nth-child(3) > p {\r\n  color: #fff;\r\n  font-size: 0.8rem;\r\n}\r\n\r\n/* configurações ceparadas para cada pagina. */\r\n.s-project__about1 > :nth-child(3) {\r\n  background-color: #000;\r\n}\r\n\r\n.s-project__about2 > :nth-child(3) {\r\n  background-color: #323232;\r\n}\r\n.s-project__about2 > :nth-child(3) > img {\r\n  height: 90%;\r\n  width: auto;\r\n}\r\n.s-project__about3 > :nth-child(3) {\r\n  background-color: #000;\r\n}\r\n.s-project__about3 > :nth-child(3) > img {\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n",""]);const d=a},226:(r,n,e)=>{e.d(n,{Z:()=>d});var t=e(81),o=e.n(t),i=e(645),a=e.n(i)()(o());a.push([r.id,"@import url(https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&display=swap);"]),a.push([r.id,"* {\r\n  margin: 0px;\r\n  padding: 0px;\r\n  box-sizing: border-box;\r\n  font-family: Merriweather;\r\n}\r\n.u-label-box {\r\n  color: #fff;\r\n  margin: 40px 0px 20px 0px;\r\n}\r\n\r\n@media (max-width: 1023px) {\r\n  .u-label-box {\r\n    font-size: 0.9rem;\r\n  }\r\n}\r\n",""]);const d=a},391:(r,n,e)=>{e.d(n,{Z:()=>d});var t=e(81),o=e.n(t),i=e(645),a=e.n(i)()(o());a.push([r.id,".s-about-me {\r\n  width: 100%;\r\n  height: 100%;\r\n  grid-row-start: 1;\r\n  grid-row-end: 3;\r\n  transition: width ease-in-out 0.2s;\r\n}\r\n\r\n/* Header Tabs */\r\n.s-about-me__tabs {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: stretch;\r\n  align-items: center;\r\n  gap: 4px;\r\n}\r\n.s-about-me__tabs > div {\r\n  width: 100%;\r\n  height: 40px;\r\n  background-color: #d9d9d9;\r\n  display: grid;\r\n  place-items: center;\r\n  border-top-left-radius: 6px;\r\n  border-top-right-radius: 6px;\r\n  border: solid 1px #fff;\r\n}\r\n.s-about-me__tabs p {\r\n  font-weight: bold;\r\n  font-size: 0.9rem;\r\n}\r\n\r\n.s-about-me__tabs > div:hover > p {\r\n  color: #fff;\r\n}\r\n.s-about-me__tabs > div:hover {\r\n  background-color: #000;\r\n  cursor: pointer;\r\n}\r\n\r\n/* Text Box */\r\n\r\n.s-about-me__text-box {\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: #d9d9d9;\r\n  border-bottom-left-radius: 6px;\r\n  border-bottom-right-radius: 6px;\r\n  border-bottom: 1px solid #fff;\r\n  border-left: 1px solid #fff;\r\n  border-right: 1px solid #fff;\r\n  padding: 30px;\r\n}\r\n.s-about-me__text-box > li > ol > li:hover {\r\n  font-weight: bold;\r\n  text-shadow: 0 0 #000;\r\n}\r\n\r\n.s-about-me__text-box > li {\r\n  list-style: none;\r\n}\r\n.s-about-me__text-box > li > ol {\r\n  margin-left: 120px;\r\n}\r\n\r\n@media (max-width: 1023px) {\r\n  .s-about-me__tabs p {\r\n    font-weight: bold;\r\n    font-size: 0.7rem;\r\n    width: max-content;\r\n  }\r\n  .s-about-me__text-box > li {\r\n    font-size: 0.8rem;\r\n  }\r\n}\r\n",""]);const d=a},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e="",t=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),t&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=r(n),t&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(r,e,t,o,i){"string"==typeof r&&(r=[[null,r,void 0]]);var a={};if(t)for(var d=0;d<this.length;d++){var s=this[d][0];null!=s&&(a[s]=!0)}for(var l=0;l<r.length;l++){var c=[].concat(r[l]);t&&a[c[0]]||(void 0!==i&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=i),e&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=e):c[2]=e),o&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=o):c[4]="".concat(o)),n.push(c))}},n}},81:r=>{r.exports=function(r){return r[1]}},379:r=>{var n=[];function e(r){for(var e=-1,t=0;t<n.length;t++)if(n[t].identifier===r){e=t;break}return e}function t(r,t){for(var i={},a=[],d=0;d<r.length;d++){var s=r[d],l=t.base?s[0]+t.base:s[0],c=i[l]||0,p="".concat(l," ").concat(c);i[l]=c+1;var h=e(p),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==h)n[h].references++,n[h].updater(u);else{var f=o(u,t);t.byIndex=d,n.splice(d,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function o(r,n){var e=n.domAPI(n);return e.update(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap&&n.supports===r.supports&&n.layer===r.layer)return;e.update(r=n)}else e.remove()}}r.exports=function(r,o){var i=t(r=r||[],o=o||{});return function(r){r=r||[];for(var a=0;a<i.length;a++){var d=e(i[a]);n[d].references--}for(var s=t(r,o),l=0;l<i.length;l++){var c=e(i[l]);0===n[c].references&&(n[c].updater(),n.splice(c,1))}i=s}}},569:r=>{var n={};r.exports=function(r,e){var t=function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}n[r]=e}return n[r]}(r);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:r=>{r.exports=function(r){var n=document.createElement("style");return r.setAttributes(n,r.attributes),r.insert(n,r.options),n}},565:(r,n,e)=>{r.exports=function(r){var n=e.nc;n&&r.setAttribute("nonce",n)}},795:r=>{r.exports=function(r){var n=r.insertStyleElement(r);return{update:function(e){!function(r,n,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(t,r,n.options)}(n,r,e)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)}}}},589:r=>{r.exports=function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}}},n={};function e(t){var o=n[t];if(void 0!==o)return o.exports;var i=n[t]={id:t,exports:{}};return r[t](i,i.exports,e),i.exports}e.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return e.d(n,{a:n}),n},e.d=(r,n)=>{for(var t in n)e.o(n,t)&&!e.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:n[t]})},e.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),e.nc=void 0,(()=>{var r=e(379),n=e.n(r),t=e(795),o=e.n(t),i=e(569),a=e.n(i),d=e(565),s=e.n(d),l=e(216),c=e.n(l),p=e(589),h=e.n(p),u=e(226),f={};f.styleTagTransform=h(),f.setAttributes=s(),f.insert=a().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=c(),n()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals;var _=e(556),m={};m.styleTagTransform=h(),m.setAttributes=s(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=c(),n()(_.Z,m),_.Z&&_.Z.locals&&_.Z.locals;var x=e(850),b={};b.styleTagTransform=h(),b.setAttributes=s(),b.insert=a().bind(null,"head"),b.domAPI=o(),b.insertStyleElement=c(),n()(x.Z,b),x.Z&&x.Z.locals&&x.Z.locals;var g=e(741),v={};v.styleTagTransform=h(),v.setAttributes=s(),v.insert=a().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=c(),n()(g.Z,v),g.Z&&g.Z.locals&&g.Z.locals;var w=e(875),y={};y.styleTagTransform=h(),y.setAttributes=s(),y.insert=a().bind(null,"head"),y.domAPI=o(),y.insertStyleElement=c(),n()(w.Z,y),w.Z&&w.Z.locals&&w.Z.locals;var j=e(391),k={};k.styleTagTransform=h(),k.setAttributes=s(),k.insert=a().bind(null,"head"),k.domAPI=o(),k.insertStyleElement=c(),n()(j.Z,k),j.Z&&j.Z.locals&&j.Z.locals;var Z=e(85),S={};S.styleTagTransform=h(),S.setAttributes=s(),S.insert=a().bind(null,"head"),S.domAPI=o(),S.insertStyleElement=c(),n()(Z.Z,S),Z.Z&&Z.Z.locals&&Z.Z.locals;var A=e(894),E={};E.styleTagTransform=h(),E.setAttributes=s(),E.insert=a().bind(null,"head"),E.domAPI=o(),E.insertStyleElement=c(),n()(A.Z,E),A.Z&&A.Z.locals&&A.Z.locals;var T=e(498),L={};L.styleTagTransform=h(),L.setAttributes=s(),L.insert=a().bind(null,"head"),L.domAPI=o(),L.insertStyleElement=c(),n()(T.Z,L),T.Z&&T.Z.locals&&T.Z.locals;var C=e(25),I={};I.styleTagTransform=h(),I.setAttributes=s(),I.insert=a().bind(null,"head"),I.domAPI=o(),I.insertStyleElement=c(),n()(C.Z,I),C.Z&&C.Z.locals&&C.Z.locals,document.querySelectorAll(".js-project__about").forEach(((r,n)=>{r.addEventListener("click",(function(){window.open(`${r.getAttribute("data-link")}`,"_blank")}))}));var M=document.querySelector(".js-header__button__menu"),P=document.querySelector(".js-header__over__menu"),N=Array.from(document.querySelectorAll(".js-header-link2")),z=!1;function D(r=["1 Tecnologías:","2 Skills:"],n){var e=document.querySelector(".js-about-me__text-box");Array.from(e.children).forEach((r=>{r.parentNode.removeChild(r)})),r.forEach(((r,t)=>{var o=document.createElement("h3"),i=document.createElement("ol"),a=document.createElement("li");o.innerText=r,a.appendChild(o),a.appendChild(i),n[t].forEach(((r,n)=>{var e=document.createElement("li"),t=document.createElement("p");t.innerText=r,e.appendChild(t),i.appendChild(e)})),e.appendChild(a)}))}N.forEach(((r,n)=>{switch(n){case 0:r.onclick=()=>window.open("https://github.com/DaviDumer/","_blank");break;case 1:r.onclick=()=>window.open("https://www.instagram.com/davi_dumer/","_blank");break;case 2:r.onclick=()=>window.open("https://www.linkedin.com/in/davi-dumer-99806a1a3/","_blank");break;case 3:r.onclick=()=>window.open("mailto:dumer56870deivs@gmail.com");break;case 4:r.onclick=()=>window.open("./curriculo/cv-davi.pdf","_blank")}})),M.onclick=function(r){z?(P.classList.remove("js-header__over__menu--Show"),M.classList.remove("js-header__button__menu--active"),z=!1):(P.classList.add("js-header__over__menu--Show"),M.classList.add("js-header__button__menu--active"),z=!0)},P.onclick=function(r){"A"===r.target.tagName&&(P.classList.remove("js-header__over__menu--Show"),M.classList.remove("js-header__button__menu--active"),z=!1)},document.querySelectorAll(".js-about-me__tab").forEach((r=>{r.addEventListener("click",(function({target:r}){switch("DIV"===r.tagName?r.firstElementChild.textContent:r.textContent){case"Front-end":D(void 0,[["HTML5","CSS3","Ajax","jQuery","Node js","React js","Figma","Bootstrap","Webpack"],["Design de interface de usuário.","UX Design.","Metodologia BEM (Block, Element, Modifier) para CSS.","Namespace CSS.","Uso Profissional de Figma para wireframe e prototipagem"]]);break;case"Back-end":D(void 0,[["Node js.","Express js.","Docker.","MySQL.","Adonis js."],["Construir API com Express js.","Básico de banco de dados MySQL.","Básico de banco de dados MongoDB.","Básico deploy de APIs na AWS e Heroku.","Básico de construção de APIs com Adonis js."]]);break;case"Mobile / Desktop":D(void 0,[["Node js.","React-Native js.","Android Studio.","Electron js."],["Desenvolvimento de aplicações Desktop com Electron js","Desenvolvimento de aplicações Mobile com React-Native js"]]);break;case"Outros":D(["1 Linguagens de programação:","2 Linguagens humanas:","3 Versionamento de Código:","4 ServiceNow:"],[["JavaScript (ECMAScript 6+).","TypeScript (“Estudando”).","Python 3.","Java (“Estudando”)."],["Básico Inglês."],["Git e GitHub."],["Administração de instância ServiceNow (“Estudando”)."]])}}))}));var B=document.querySelector("#root"),q=document.querySelector(".js-header--scroll"),H=document.querySelector(".js-header__perfil__photo--scroll");B.onscroll=()=>{window.scrollY>0&&!q.classList.contains("js-header--scroll-active")?(q.classList.add("js-header--scroll-active"),H.classList.add("js-header__perfil__photo--scroll-active")):window.scrollY||(q.classList.remove("js-header--scroll-active"),H.classList.remove("js-header__perfil__photo--scroll-active"))}})()})();