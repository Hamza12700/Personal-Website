var p,h,H,E,V=-1,l=function(n){addEventListener("pageshow",function(e){e.persisted&&(V=e.timeStamp,n(e))},!0)},b=function(){return window.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]},T=function(){var n=b();return n&&n.activationStart||0},f=function(n,e){var t=b(),r="navigate";return V>=0?r="back-forward-cache":t&&(document.prerendering||T()>0?r="prerender":document.wasDiscarded?r="restore":t.type&&(r=t.type.replace(/_/g,"-"))),{name:n,value:e===void 0?-1:e,rating:"good",delta:0,entries:[],id:"v3-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:r}},y=function(n,e,t){try{if(PerformanceObserver.supportedEntryTypes.includes(n)){var r=new PerformanceObserver(function(i){Promise.resolve().then(function(){e(i.getEntries())})});return r.observe(Object.assign({type:n,buffered:!0},t||{})),r}}catch{}},d=function(n,e,t,r){var i,o;return function(c){e.value>=0&&(c||r)&&((o=e.value-(i||0))||i===void 0)&&(i=e.value,e.delta=o,e.rating=function(u,a){return u>a[1]?"poor":u>a[0]?"needs-improvement":"good"}(e.value,t),n(e))}},C=function(n){requestAnimationFrame(function(){return requestAnimationFrame(function(){return n()})})},A=function(n){var e=function(t){t.type!=="pagehide"&&document.visibilityState!=="hidden"||n(t)};addEventListener("visibilitychange",e,!0),addEventListener("pagehide",e,!0)},I=function(n){var e=!1;return function(t){e||(n(t),e=!0)}},v=-1,P=function(){return document.visibilityState!=="hidden"||document.prerendering?1/0:0},S=function(n){document.visibilityState==="hidden"&&v>-1&&(v=n.type==="visibilitychange"?n.timeStamp:0,X())},R=function(){addEventListener("visibilitychange",S,!0),addEventListener("prerenderingchange",S,!0)},X=function(){removeEventListener("visibilitychange",S,!0),removeEventListener("prerenderingchange",S,!0)},D=function(){return v<0&&(v=P(),R(),l(function(){setTimeout(function(){v=P(),R()},0)})),{get firstHiddenTime(){return v}}},L=function(n){document.prerendering?addEventListener("prerenderingchange",function(){return n()},!0):n()},_=[1800,3e3],N=function(n,e){e=e||{},L(function(){var t,r=D(),i=f("FCP"),o=y("paint",function(c){c.forEach(function(u){u.name==="first-contentful-paint"&&(o.disconnect(),u.startTime<r.firstHiddenTime&&(i.value=Math.max(u.startTime-T(),0),i.entries.push(u),t(!0)))})});o&&(t=d(n,i,_,e.reportAllChanges),l(function(c){i=f("FCP"),t=d(n,i,_,e.reportAllChanges),C(function(){i.value=performance.now()-c.timeStamp,t(!0)})}))})},F=[.1,.25],j=function(n,e){e=e||{},N(I(function(){var t,r=f("CLS",0),i=0,o=[],c=function(a){a.forEach(function(s){if(!s.hadRecentInput){var q=o[0],W=o[o.length-1];i&&s.startTime-W.startTime<1e3&&s.startTime-q.startTime<5e3?(i+=s.value,o.push(s)):(i=s.value,o=[s])}}),i>r.value&&(r.value=i,r.entries=o,t())},u=y("layout-shift",c);u&&(t=d(n,r,F,e.reportAllChanges),A(function(){c(u.takeRecords()),t(!0)}),l(function(){i=0,r=f("CLS",0),t=d(n,r,F,e.reportAllChanges),C(function(){return t()})}),setTimeout(t,0))}))},g={passive:!0,capture:!0},G=new Date,k=function(n,e){p||(p=e,h=n,H=new Date,Y(removeEventListener),U())},U=function(){if(h>=0&&h<H-G){var n={entryType:"first-input",name:p.type,target:p.target,cancelable:p.cancelable,startTime:p.timeStamp,processingStart:p.timeStamp+h};E.forEach(function(e){e(n)}),E=[]}},K=function(n){if(n.cancelable){var e=(n.timeStamp>1e12?new Date:performance.now())-n.timeStamp;n.type=="pointerdown"?function(t,r){var i=function(){k(t,r),c()},o=function(){c()},c=function(){removeEventListener("pointerup",i,g),removeEventListener("pointercancel",o,g)};addEventListener("pointerup",i,g),addEventListener("pointercancel",o,g)}(e,n):k(e,n)}},Y=function(n){["mousedown","keydown","touchstart","pointerdown"].forEach(function(e){return n(e,K,g)})},B=[100,300],Z=function(n,e){e=e||{},L(function(){var t,r=D(),i=f("FID"),o=function(a){a.startTime<r.firstHiddenTime&&(i.value=a.processingStart-a.startTime,i.entries.push(a),t(!0))},c=function(a){a.forEach(o)},u=y("first-input",c);t=d(n,i,B,e.reportAllChanges),u&&A(I(function(){c(u.takeRecords()),u.disconnect()})),u&&l(function(){var a;i=f("FID"),t=d(n,i,B,e.reportAllChanges),E=[],h=-1,p=null,Y(addEventListener),a=o,E.push(a),U()})})},M=[2500,4e3],w={},z=function(n,e){e=e||{},L(function(){var t,r=D(),i=f("LCP"),o=function(a){var s=a[a.length-1];s&&s.startTime<r.firstHiddenTime&&(i.value=Math.max(s.startTime-T(),0),i.entries=[s],t())},c=y("largest-contentful-paint",o);if(c){t=d(n,i,M,e.reportAllChanges);var u=I(function(){w[i.id]||(o(c.takeRecords()),c.disconnect(),w[i.id]=!0,t(!0))});["keydown","click"].forEach(function(a){addEventListener(a,function(){return setTimeout(u,0)},!0)}),A(u),l(function(a){i=f("LCP"),t=d(n,i,M,e.reportAllChanges),C(function(){i.value=performance.now()-a.timeStamp,w[i.id]=!0,t(!0)})})}})},O=[800,1800],J=function n(e){document.prerendering?L(function(){return n(e)}):document.readyState!=="complete"?addEventListener("load",function(){return n(e)},!0):setTimeout(e,0)},Q=function(n,e){e=e||{};var t=f("TTFB"),r=d(n,t,O,e.reportAllChanges);J(function(){var i=b();if(i){var o=i.responseStart;if(o<=0||o>performance.now())return;t.value=Math.max(o-T(),0),t.entries=[i],r(!0),l(function(){t=f("TTFB",0),(r=d(n,t,O,e.reportAllChanges))(!0)})}})};const x="https://vitals.vercel-analytics.com/v1/vitals",$=()=>"connection"in navigator&&navigator.connection&&"effectiveType"in navigator.connection?navigator.connection.effectiveType:"",m=(n,e)=>{const t={dsn:e.analyticsId,id:n.id,page:e.path,href:location.href,event_name:n.name,value:n.value.toString(),speed:$()},r=new Blob([new URLSearchParams(t).toString()],{type:"application/x-www-form-urlencoded"});navigator.sendBeacon?navigator.sendBeacon(x,r):fetch(x,{body:r,method:"POST",credentials:"omit",keepalive:!0})};function ee(){const n={BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1,SITE:void 0,ASSETS_PREFIX:void 0}.PUBLIC_VERCEL_ANALYTICS_ID;if(!n){console.error("[Speed Insights] VERCEL_ANALYTICS_ID not found");return}const e={path:window.location.pathname,analyticsId:n};try{Z(t=>m(t,e)),Q(t=>m(t,e)),z(t=>m(t,e)),j(t=>m(t,e)),N(t=>m(t,e))}catch(t){console.error("[Speed Insights]",t)}}ee();