function login(){
    $.ajax({ 
    
    url:"/login-request.php",
    data: "Name=" + $("#sing_in_name").val() + "&email=" +$("#sing_in_email").val(),
    type: "POST", // prakame so post 
    success: function(data){
      $(".respones").html(data);
       location.replace("index.php")
    },
    error: function(){
      $(".response").html("An error has acoured");
      console.log("PROblem");
    }
   
});

var jhon =  document.getElementById("#usernamevalue").value();
jhon = document.getElementById("#sing_in_name").value();


 alert(jhon);
};

function subscribe(){
     
  $.ajax({ 

          url:"/subscription.php",
          data: "text=" + $("#formGroupExampleInput2").val() + "&email=" +$("#exampleInputEmail1").val(),
          type: "POST", // prakame so post //
          success: function(data){
            $(".contact-respons").html(data);
          },
          error: function(){
            $(".contact-respons").html("An error has acoured");
          }
          
      });
};



$(document).ready(function(){


var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
                  100:{
                    slidesPerView: 1,
                    spaceBetween: 20
 
                  },
                  // when window width is >= 320px
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 20
                  },
                  // when window width is >= 480px
                  480: {
                    slidesPerView:1,
                    spaceBetween: 30
                  },
                  // when window width is >= 640px
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 40
                  },
                  940: {
                    slidesPerView: 3,
                    spaceBetween: 40
                  }
                },
      });
      var swiper3 = new Swiper(".swiper-three", {
        slidesPerView: "auto",
        spaceBetween: 20,
        loop: true,
        rewind:true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        
        breakpoints: {
                  // when window width is >= 320px
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 20
                  },
                  // when window width is >= 480px
                  480: {
                    slidesPerView: 2,
                    spaceBetween: 30
                  },
                  // when window width is >= 640px
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 40
                  },
                  890:{
                    slidesPerView: 5,
                    spaceBetween: 40
                  }
                },
      });
      var swiper2 = new Swiper(".swiper-two", {
        slidesPerView: "auto",
        spaceBetween: 20,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
                  // when window width is >= 320px
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 20
                  },
                  // when window width is >= 480px
                  480: {
                    slidesPerView: 2,
                    spaceBetween: 30
                  },
                  // when window width is >= 640px
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 40
                  },
                  890:{
                    slidesPerView: 6,
                    spaceBetween: 40
                  }
                },
      });

     $(".hidden-search-btn").click(function(){
        $(".hidden-search-pop-up").toggle(500);
        $(".header").css({"position":"inherit"});
     });
     $(".exit-search").click(function(){
        $(".hidden-search-pop-up").hide();
     });
     $(".location-btn").click(function(){
         $(".toggle-loc-list").slideToggle(200);
     }); 

/*location dropdown mobile */
     $(".location-btn-mobile").click(function(){
        $(".toggle-loc-list-mobile").slideToggle(200);
    });

     
    $(".user-account").click(function(){
        $(".toggle-user-list").toggle();
    });


    $(".user-account-mobile").click(function(){
        $(".toggle-user-list-mobile").toggle();
    });

    $(".pages-list-wrapper").click(function(){
        if($(".togle-blog-list").is(":visible")){
            $(".togle-blog-list").hide();
        }
        $(".pages-list").slideToggle(200);
    });
/* Pages List */
    $(".blog-list").click(function(){
        if($(".pages-list").is(":visible")){
            $(".pages-list").hide();
        }

        $(".togle-blog-list").slideToggle(200);
    });


    
    $(".select-category-btn").click(function(){
        $(".header").css({"position":"inherit"});
        $(".category-pop-up").show();
    });
    $(".exit").click(function(){
        $(".category-pop-up").hide();
        
    $(".header").css({"position":"fixed"});
    });
    
    $(".select-category-btn-mobile").click(function(){
        $(".header").css({"position":"inherit"});
        $(".category-pop-up").show();
    });
    $(".exit").click(function(){
        $(".category-pop-up").hide();
        
    $(".header").css({"position":"fixed"});
    });
    $(".hidden-links-btn").click(function(){
        $(".pop-up-list").animate({
            width: "toggle"
       });
  });

    $(".list-pages-hidden").click(function(){
        if($(".togle-blog-list-mobile").is(":visible")){
            $(".togle-blog-list-mobile").hide();
        }
        $(".hidden-list-mobile").slideToggle(200);
    });

    $(".blog-list-mobile").click(function(){
        if($(".hidden-list-mobile").is(":visible")){
            $(".hidden-list-mobile").hide();
        }
        $(".togle-blog-list-mobile").slideToggle(200);
    });
    
   $(".fillter-btn").click(function(){
       $(".header").css({"position":"inherit"});
     $(".hide-fillter-pop-up").show();
    // $(".filter-category").animate({width:'toggle'},350);
   });
   $("#exit-filter").click(function(){
    $(".hide-fillter-pop-up").hide();
   });

   



//    $("#counter .lower").click(function(event){
//     var sum = $(".quantity").val();
//      sum-- ;
     
//     $(".quantity").val(sum);
//     });
//  $(".add-quan").click(function(event){
//     var sum = $(".quantity").val();
//      sum ++ ;
//      console.log("ADD");
//  $(".quantity").val(sum);

 

// });
 //CART-POP-UP
 $(".cart-btn").click(function(){
     $(".hide-cart-pop-up").toggle();
     $(".header").css({"position":"inherit"});
  });
 $("#exit-cart-pop-up").click(function(){
    $(".hide-cart-pop-up").hide();
    $(".header").css({"position":"fixed"});
  });

});
