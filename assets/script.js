document.addEventListener("DOMContentLoaded",function(){
  var yearElement=document.querySelector("[data-year]");
  if(yearElement){
    yearElement.textContent=String(new Date().getFullYear());
  }

  var reducedMotion=window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  document.querySelectorAll('a[href^="#"]').forEach(function(link){
    link.addEventListener("click",function(event){
      var targetId=link.getAttribute("href");
      if(!targetId || targetId==="#") return;

      var target=document.querySelector(targetId);
      if(target){
        event.preventDefault();
        target.scrollIntoView({
          behavior:reducedMotion?"auto":"smooth",
          block:"start"
        });
        if(target.hasAttribute("tabindex")){
          target.focus({preventScroll:true});
        }
      }
    });
  });
});
