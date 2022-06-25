 

$(document).ready(function(){ 

  $('.accordion .btn-link').on('click', function(e) { 
    if (!$(this).hasClass('collapsed')) { 
      e.stopPropagation(); 
    } 
  });
  
  $(".showpass-single input[type='checkbox']").on("click", function(){
    if($(this).is(":checked")){
        $("input.password-single").attr("type", "text");
        document.getElementById("shwpas_sng").classList.toggle("fa-eye-slash");
        }
        else if($(this).is(":not(:checked)")){
        $("input.password-single").attr("type", "password");
        document.getElementById("shwpas_sng").classList.toggle("fa-eye-slash");
        }
  }); 


    $(".dropdown-menu li a").click(function(){
      $("#options").text($(this).html());
    });

    $(".menu-openmobile").click(function(){
      $(".navbar-leafy").toggleClass("openmenu");
        $(this).toggleClass("closebtnmenu");
    }); 
    $(".toggle-password").click(function() {
      $(this).toggleClass("fa-eye fa-eye-slash");
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
          input.attr("type", "text");
        } else {
          input.attr("type", "password");
        }
    });

}) 
$(document).ready(function(){
        // Add minus icon for collapse element which is open by default
        $(".collapse.show").each(function(){
          $(this).prev(".card-header").find(".fa").addClass("fa-caret-up").removeClass("fa-caret-down");
        });
        
        // Toggle plus minus icon on show hide of collapse element
        $(".collapse").on('show.bs.collapse', function(){
          $(this).prev(".card-header").find(".fa").removeClass("fa-caret-down").addClass("fa-caret-up");
        }).on('hide.bs.collapse', function(){
          $(this).prev(".card-header").find(".fa").removeClass("fa-caret-up").addClass("fa-caret-down");
        });
    });