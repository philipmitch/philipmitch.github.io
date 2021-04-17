function start(){

    $("#menu a:first").click();
  
  }
  $(window).on("load", start);
  
  function loadpage(e){
  
      e.preventDefault();
      $("#menu a.active").removeClass("active");
      $(this).addClass("active");
  
      var href = $(this).attr("href");
      $("#content").load(href);
      
      ScrollReveal().reveal('.reveal1');
      ScrollReveal().reveal('.reveal2', { delay: 500 });
      ScrollReveal().reveal('.reveal3', { delay: 1000 });

  }
  
  $(document).on("click", "#menu a", loadpage);

  
