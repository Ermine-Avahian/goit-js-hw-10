import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as h,i as y}from"./assets/vendor-77e16229.js";const a=document.querySelector("button[data-start]"),s=document.querySelector("#datetime-picker"),S=document.querySelector("[data-days]"),p=document.querySelector("[data-hours]"),b=document.querySelector("[data-minutes]"),C=document.querySelector("[data-seconds]");let c=null,u=null;const T={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const n=e[0];n<new Date?(y.error({title:"Error",message:"Please choose a date in the future"}),a.disabled=!0):(c=n,a.disabled=!1)}};h(s,T);a.addEventListener("click",()=>{c&&q(c)});function q(e){a.disabled=!0,s.disabled=!0,u=setInterval(()=>{const o=e-new Date;if(o<=0)clearInterval(u),d(0,0,0,0),s.disabled=!1;else{const t=D(o);d(t.days,t.hours,t.minutes,t.seconds)}},1e3)}function d(e,n,o,t){S.textContent=r(e),p.textContent=r(n),b.textContent=r(o),C.textContent=r(t)}function D(e){const i=Math.floor(e/864e5),l=Math.floor(e%864e5/36e5),m=Math.floor(e%864e5%36e5/6e4),f=Math.floor(e%864e5%36e5%6e4/1e3);return{days:i,hours:l,minutes:m,seconds:f}}function r(e){return String(e).padStart(2,"0")}
//# sourceMappingURL=commonHelpers.js.map
