function e(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("div");n.textContent=e,n.classList.add("message"),t&&n.classList.add("error-message"),document.body.appendChild(n)}var t=document.querySelector(".logo");t.style.cursor="pointer";var n=new Promise(function(e){t.addEventListener("click",function(t){e("Promise was resolved!")})}),o=new Promise(function(e,t){setTimeout(function(){t(Error("Promise was rejected!"))},3e3)});n.then(function(t){e(t)}),o.catch(function(t){e(t.message,!0)});
//# sourceMappingURL=index.b2015ea3.js.map
