!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=1)}([function(e,t,n){"use strict";var i,r={},a=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}();function s(e,t){for(var n=[],i={},r=0;r<e.length;r++){var a=e[r],o=t.base?a[0]+t.base:a[0],s={css:a[1],media:a[2],sourceMap:a[3]};i[o]?i[o].parts.push(s):n.push(i[o]={id:o,parts:[s]})}return n}function d(e,t){for(var n=0;n<e.length;n++){var i=e[n],a=r[i.id],o=0;if(a){for(a.refs++;o<a.parts.length;o++)a.parts[o](i.parts[o]);for(;o<i.parts.length;o++)a.parts.push(h(i.parts[o],t))}else{for(var s=[];o<i.parts.length;o++)s.push(h(i.parts[o],t));r[i.id]={id:i.id,refs:1,parts:s}}}}function c(e){var t=document.createElement("style");if(void 0===e.attributes.nonce){var i=n.nc;i&&(e.attributes.nonce=i)}if(Object.keys(e.attributes).forEach((function(n){t.setAttribute(n,e.attributes[n])})),"function"==typeof e.insert)e.insert(t);else{var r=o(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}return t}var l,u=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function m(e,t,n,i){var r=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=u(t,r);else{var a=document.createTextNode(r),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(a,o[t]):e.appendChild(a)}}function f(e,t,n){var i=n.css,r=n.media,a=n.sourceMap;if(r&&e.setAttribute("media",r),a&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var p=null,v=0;function h(e,t){var n,i,r;if(t.singleton){var a=v++;n=p||(p=c(t)),i=m.bind(null,n,a,!1),r=m.bind(null,n,a,!0)}else n=c(t),i=f.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).attributes="object"==typeof t.attributes?t.attributes:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a());var n=s(e,t);return d(n,t),function(e){for(var i=[],a=0;a<n.length;a++){var o=n[a],c=r[o.id];c&&(c.refs--,i.push(c))}e&&d(s(e,t),t);for(var l=0;l<i.length;l++){var u=i[l];if(0===u.refs){for(var m=0;m<u.parts.length;m++)u.parts[m]();delete r[u.id]}}}}},function(e,t,n){"use strict";n.r(t);n(2),n(3),n(5)},function(e,t){var n=function(e){document.getElementById(e).style.display="none"},i=function(e){document.getElementById(e).style.display="flex"};window.createTask=function(){i("newtask")},window.cancelTask=function(e){n(e);for(var t=document.getElementsByClassName("taskitem"),i=0,r=t.length;i<r;i++)t[i].getAttribute("action")&&t[i].removeAttribute("action")};var r=function e(t,n){return-1!==t.className.indexOf(n)?t:e(t=t.parentNode,n)};window.deleteTask=function(e){r(e,"taskitem").remove(),o()},window.done=function(e){var t=r(e,"taskitem");t.setAttribute("status","done");var n=document.createElement("input");n.setAttribute("type","checkbox"),n.setAttribute("done","done"),n.setAttribute("onclick","switchOff(this)"),n.classList.add("absolute"),n.checked=!0,t.append(n),o()},window.createTodo=function(){var e=document.getElementById("title").value,t=document.getElementById("description").value,i=document.getElementById("setimportance").value,r=document.getElementById("tasks"),a=document.createElement("div");a.classList.add("taskitem"),a.setAttribute("status","open");var s=document.createElement("div");s.classList.add("tasktitle"),s.innerText=e;var d=document.createElement("div");d.classList.add("description"),d.innerText=t;var c=document.createElement("div");c.classList.add("taskfooter");var l=document.createElement("div");l.classList.add("priority"),l.setAttribute("priority",i),l.innerText=i,c.append(l);var u=document.createElement("div");u.innerHTML="<div class='status'>...<div class='actionlist'><ul><li id='done' onclick='done(this)'>done</li><li id='edit' onclick='editTodo(this)'>edit</li><li id='delete' onclick='deleteTask(this)'>delete</li></ul></div></div>",u.setAttribute("onclick","void(0)"),c.append(u),a.append(s),a.append(d),a.append(c),r.append(a),document.getElementById("title").value="",document.getElementById("description").value="",document.getElementById("setimportance").value="high",n("newtask"),o()},window.editTodo=function(e){i("edittask");var t=r(e,"taskitem");t.setAttribute("action","editing"),document.getElementById("edittitle").value=t.children[0].innerText,document.getElementById("editdescription").value=t.children[1].innerText;document.getElementById("editsetimportance");for(var n,a=t.children[2].children[0].innerText,s=document.getElementById("editsetimportance"),d=s.options,c=0;n=d[c];c++)if(n.value==a){s.selectedIndex=c;break}o()},window.saveTodo=function(e){for(var t=document.getElementById("edittitle"),i=document.getElementById("editdescription"),r=document.getElementById("editsetimportance"),a=document.getElementsByClassName("taskitem"),s=0,d=a.length;s<d;s++)a[s].getAttribute("action")&&(a[s].removeAttribute("action"),a[s].children[0].innerText=t.value,a[s].children[1].innerText=i.value,a[s].children[2].children[0].setAttribute("priority",r.value),a[s].children[2].children[0].innerText=r.value);document.getElementById("edittitle").value="",document.getElementById("editdescription").value="",document.getElementById("editsetimportance").value="",n("edittask"),o()},window.switchOff=function(e){r(e,"taskitem").setAttribute("status","open"),e.remove(),o()};var a,o=function(){var e=document.getElementById("tasks");localStorage.setItem("tasks",e.innerHTML),e.innerHTML=localStorage.getItem("tasks"),s()},s=function(){var e=document.querySelectorAll('[done="done"]');if(0!==e.length)for(var t=0,n=e.length;t<n;t++)e[t].checked=!0};window.searchTask=function(e){for(var t=document.getElementById("find").value,n=document.getElementById("status").value,i=document.getElementById("importance").value,r=document.getElementById("tasks").children,a=0,s=r.length;a<s;a++)-1!==r[a].children[0].innerText.toLocaleLowerCase().indexOf(t.toLowerCase())?r[a].setAttribute("matchinheader","true"):r[a].setAttribute("matchinheader","false"),"all"===n?r[a].setAttribute("matchstatus","true"):"open"==n?"open"==r[a].getAttribute("status")?r[a].setAttribute("matchstatus","true"):r[a].setAttribute("matchstatus","false"):"done"==n&&("done"==r[a].getAttribute("status")?r[a].setAttribute("matchstatus","true"):r[a].setAttribute("matchstatus","false")),"all"===i?r[a].setAttribute("matchimportance","true"):i===r[a].children[2].children[0].getAttribute("priority")?r[a].setAttribute("matchimportance","true"):r[a].setAttribute("matchimportance","false"),"true"==r[a].getAttribute("matchinheader")&&"true"==r[a].getAttribute("matchstatus")&&"true"==r[a].getAttribute("matchimportance")?(r[a].classList.add("show"),r[a].classList.remove("hide")):(r[a].classList.add("hide"),r[a].classList.remove("show"));o()},document.addEventListener("DOMContentLoaded",(a=localStorage.getItem("tasks"),document.getElementById("tasks").innerHTML=a,void s())),document.addEventListener("DOMContentLoaded",function(){for(var e=document.getElementById("tasks").children,t=0,n=e.length;t<n;t++)e[t].classList.remove("hide"),e[t].classList.add("show")}())},function(e,t,n){var i=n(4);"string"==typeof i&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1};n(0)(i,r);i.locals&&(e.exports=i.locals)},function(e,t,n){},function(e,t,n){var i=n(6);"string"==typeof i&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1};n(0)(i,r);i.locals&&(e.exports=i.locals)},function(e,t,n){}]);