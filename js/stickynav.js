$(window).on("scroll", function(){
    if($(window).scrollTop()>30)
    {
      $('#navbar').addClass("sticky");
      $('#navbar').addClass("shrink");
      $('#navbar ul li a').addClass("changeclr");
    }
    else{
      $('#navbar').removeClass("sticky");
      $('#navbar').removeClass("shrink");
      $('#navbar ul').css("padding-top", "5px");
      $('#navbar ul li a').removeClass("changeclr");
    }
  })