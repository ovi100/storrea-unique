$(document).ready(function(){
	$(".search-input").focus(function (){
        $(".search-suggestions").fadeIn("slow");
        $(".search-box").find(".input-group").css("border-color","#000");
    });

    $(".search-input").blur(function (){
        $(".search-suggestions").fadeOut("slow");
        $(".search-box").find(".input-group").css("border-color","#ddd");
    });

  	var menuHeight = $(".menu1").height();
    $(".sidenav").css("top",menuHeight+'px');
    $(".sidenav-overlay").css("top",menuHeight+'px');

    $("#sidebar-toggle").click(function(event){
    	event.preventDefault();
    	$("#sidenav").toggleClass("show-sidenav");
    });
    $("#sidenav-overlay").click(function(event){
    	event.preventDefault();
    	$("#sidenav").removeClass("show-sidenav");
    });

    $('.cat-list .collapse').on('shown.bs.collapse', function(){
        $(this).parent().find(".icofont-plus").removeClass("icofont-plus").addClass("icofont-minus");
    }).on('hidden.bs.collapse', function(){
        $(this).parent().find(".icofont-minus").removeClass("icofont-minus").addClass("icofont-plus");
    });

});
