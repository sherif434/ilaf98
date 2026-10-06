
document.addEventListener("DOMContentLoaded",()=>{const y=document.querySelector("[data-year]");if(y)y.textContent=new Date().getFullYear();document.querySelectorAll("a[href^='#']").forEach(a=>a.addEventListener("click",e=>{const el=document.querySelector(a.getAttribute("href"));if(el){e.preventDefault();el.scrollIntoView({behavior:"smooth"})}}));});
