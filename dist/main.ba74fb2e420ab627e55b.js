!function(){"use strict";var e={8300:function(){var e=window.matchMedia("(min-width: 1024px)").matches,t=window.matchMedia("(max-width: 1024px)").matches,n=document.getElementById("main-page"),a=document.getElementById("name-input"),i=document.getElementById("phone-input"),l=document.getElementById("name-modal"),s=document.getElementById("phone-modal");if(i&&(i.oninput=function(){i.value=i.value.replace(/[^0-9]/g,""),i.value.length>i.maxLength&&(i.value=i.value.slice(0,i.maxLength))}),a&&(a.oninput=function(){a.value=a.value.replace(/[^а-яА-ЯёЁa-zA-Z]/g,"")}),s&&(s.oninput=function(){s.value=s.value.replace(/[^0-9]/g,""),s.value.length>s.maxLength&&(s.value=s.value.slice(0,s.maxLength))}),l&&(l.oninput=function(){l.value=l.value.replace(/[^а-яА-ЯёЁa-zA-Z]/g,"")}),n&&e){var c=document.getElementById("header"),o=document.getElementById("header-logo"),d=document.getElementById("header-phone"),r=document.getElementById("navigation-list");c&&(c.classList.remove("sticky"),r.classList.remove("w-3/4"),r.classList.add("w-full"),window.addEventListener("scroll",(function(){var e=window.scrollY/(document.body.offsetHeight-window.innerHeight);Math.round(100*e)>41?(c.classList.add("fixed","bg-blue-500"),o.classList.remove("first-hidden"),d.classList.remove("first-hidden"),r.classList.add("w-3/4"),r.classList.remove("w-full")):(c.classList.contains("fixed","bg-blue-500")&&(c.classList.remove("fixed","bg-blue-500"),o.classList.add("first-hidden"),d.classList.add("first-hidden")),r.classList.contains("w-3/4")&&(r.classList.remove("w-3/4"),r.classList.add("w-full")))})))}var u=Array.from(document.querySelectorAll(".collapse-btn"));u.forEach((function(e){e.addEventListener("click",(function(){e.nextElementSibling.classList.toggle("sr-only")}))}));var m=Array.from(document.querySelectorAll(".open-btn")),f=document.getElementById("modal"),v=document.getElementById("modal-backdrop"),g=(document.getElementById("act-btn"),document.getElementById("close-btn")),h=function(){f.classList.remove("fade"),v.classList.remove("fade"),v.classList.add("invert")},p=function(){f.classList.add("fade"),v.classList.add("fade"),v.classList.remove("invert")};if(m&&f&&v&&(m.forEach((function(e){return e.addEventListener("click",h)})),g.addEventListener("click",p),v.addEventListener("click",p)),t){var L=document.getElementById("menu-close"),y=document.getElementById("mobile-menu"),E=document.getElementById("burger");L.addEventListener("click",(function(){y.classList.add("hidden")})),E.addEventListener("click",(function(){y.classList.remove("hidden")}))}}},t={};function n(a){if(t[a])return t[a].exports;var i=t[a]={exports:{}};return e[a](i,i.exports,n),i.exports}n.m=e,n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={179:0},t=[[1202,261],[8300,261]],a=function(){};function i(){for(var a,i=0;i<t.length;i++){for(var l=t[i],s=!0,c=1;c<l.length;c++){var o=l[c];0!==e[o]&&(s=!1)}s&&(t.splice(i--,1),a=n(n.s=l[0]))}return 0===t.length&&(n.x(),n.x=function(){}),a}n.x=function(){n.x=function(){},s=s.slice();for(var e=0;e<s.length;e++)l(s[e]);return(a=i)()};var l=function(i){for(var l,s,o=i[0],d=i[1],r=i[2],u=i[3],m=0,f=[];m<o.length;m++)s=o[m],n.o(e,s)&&e[s]&&f.push(e[s][0]),e[s]=0;for(l in d)n.o(d,l)&&(n.m[l]=d[l]);for(r&&r(n),c(i);f.length;)f.shift()();return u&&t.push.apply(t,u),a()},s=self.webpackChunk=self.webpackChunk||[],c=s.push.bind(s);s.push=l}(),n.x()}();