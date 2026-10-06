document.addEventListener("DOMContentLoaded",function(){
  var yearElement=document.querySelector("[data-year]");
  if(yearElement){
    yearElement.textContent=String(new Date().getFullYear());
  }

  document.querySelectorAll('a[href^="#"]').forEach(function(link){
    link.addEventListener("click",function(event){
      var targetId=link.getAttribute("href");
      if(!targetId || targetId==="#") return;

      var target=document.querySelector(targetId);
      if(target){
        event.preventDefault();
        target.scrollIntoView({
          behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",
          block:"start"
        });
      }
    });
  });
});
