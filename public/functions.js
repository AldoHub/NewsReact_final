$(function(){
  
    $("#nav-icon").on("click", function(e){
        e.stopPropagation();
        $(this).toggleClass("open");
        $("nav ul li").slideToggle();

    });

  
 
});

  