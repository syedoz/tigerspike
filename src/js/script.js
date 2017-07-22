$( document ).ready(function() {
  var owl = $('.owl-carousel');
  owl.owlCarousel({
      loop:true,
      margin:0,
      nav: true,
      navText: ["<img src='build/images/arrow-left-nav.svg'>","<img src='build/images/arrow-right-nav.svg'>"],
      dots:false,
      items:1,
      onInitialized : function(event){
        $('.owl-item.active video').get(0).play();
      }
  })
  owl.on('translate.owl.carousel',function(e){
    $('.owl-item video').each(function(){
      $(this).get(0).pause();
    });
  });
  owl.on('translated.owl.carousel',function(e){
    $('.owl-item.active video').get(0).play();
  })

  // Image Flipping function
  function change() {
        randomElements = jQuery("div.flip-container").get().sort(function(){
            return Math.round(Math.random())-0.5
        }).slice(0,1)
        
        $(randomElements).toggleClass('active');
        //console.log("Change");
  }

    setInterval(function () {
        change();
    }, 1000);

    //image grid setSize
    function SetGrid(){
        var winWidth = $(window).width();
        
        if(winWidth > 1660){
          var width_diff = winWidth / 8 + "px"
          $('.flipper-list').css({"width": width_diff})
        };
        if(winWidth < 1660){
          var width_diff = winWidth / 7 + "px"
          $('.flipper-list').css({"width": width_diff})
        };
        if(winWidth < 1260){
          var width_diff = winWidth / 6 + "px"
          $('.flipper-list').css({"width": width_diff})
        };
        if(winWidth < 1100){
          var width_diff = winWidth / 5 + "px"
          $('.flipper-list').css({"width": width_diff})
        };
        if(winWidth < 900){
          var width_diff = winWidth / 4 + "px"
          $('.flipper-list').css({"width": width_diff})
        };
        if(winWidth < 730){
          var width_diff = winWidth / 3 + "px"
          $('.flipper-list').css({"width": width_diff})
        };
        if(winWidth < 550){
          var width_diff = winWidth / 2 + "px"
          $('.flipper-list').css({"width": width_diff})
        };
    }
    SetGrid()
    $(window).on('resize', function(){
        console.log("resized")
        SetGrid();
    });

    // function setFlipH(){
    //   var winHight = $(window).height();

    //   $('.flippers .flipper-list').each(function(){
    //     if($(this).hasClass('type1')){

    //     }
    //   })

    // }
});