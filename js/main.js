$(function(){


  $('.header-right a').hover(function(){
    $(this).css('opacity',0.7);
  },function(){
    $(this).css('opacity',1.0);
  });

  $('.footer-right a').hover(function(){
    $(this).css('opacity',0.7);
  },function(){
    $(this).css('opacity',1.0);
  });
  
  const target = document.getElementById("menu");
  target.addEventListener('click', () => {
    const target = document.getElementById("menu");
    target.classList.toggle('open');
    const nav = document.getElementById("nav");
    nav.classList.toggle('in');
  });
});