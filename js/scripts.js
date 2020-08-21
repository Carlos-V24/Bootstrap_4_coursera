$("document").ready(()=>{
  $("#mycarousel").carousel({ interval: 2000 });
  $("#carouselButton-toggle").click(()=>{
    if($("#carouselButton-toggle").children("span").hasClass("fa-pause")) {
      $("#mycarousel").carousel("pause");
      $("#carouselButton-toggle").removeClass("btn-danger")
      $("#carouselButton-toggle").addClass("btn-warning")
      $("#carouselButton-toggle").children("span").removeClass("fa-pause")
      $("#carouselButton-toggle").children("span").addClass("fa-play")
    }else{
      $("#mycarousel").carousel("pause");
      $("#mycarousel").carousel("cycle");
      $("#carouselButton-toggle").removeClass("btn-warning")
      $("#carouselButton-toggle").addClass("btn-danger")
      $("#carouselButton-toggle").children("span").removeClass("fa-play")
      $("#carouselButton-toggle").children("span").addClass("fa-pause")
    }
  });
  //Login Modal
  $("#loginModal-button").click(()=>{
    $('#loginModal').modal('show');
  })
  $(".closeLoginModal").click(()=>{
    $('#loginModal').modal('hide');
  })
  //Reserve modal
  $("#reserveModal-button").click(()=>{
    $('#reserveModal').modal('show');
    console.log("Wue hubo")
  })
  $(".closeReserveModal").click(()=>{
    $('#reserveModal').modal('hide');
  })
});
