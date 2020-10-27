$("div a:first").on("click", function(e){
  e.preventDefault(); 
  $("img").first().hide(1000)
    $(this).next(disparaitre); 
  }) 
})