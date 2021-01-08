//control menu
$(document).on("click", ".menu", function () {
	$(".menu").addClass("menu_clicked");
	$(".menu").removeClass("menu");
});
$(document).on("click", ".menu_clicked", function () {
	$(".menu_clicked").addClass("menu");
	$(".menu_clicked").removeClass("menu_clicked");
});

// Store section infos
var sections = [
	"section_notes",
	"section_conflict",
	"section3",
	"section4",
	"section5",
	"section6",
	"section7",
	"section8",
	"section9",
	"section10"
];

var vm = new Vue({
	el: "#app",
	data: {
		sections: sections
	}
});

// smooth section jump
$(document).on("click", "a", function (e) {
	e.preventDefault();
	var target = $(this).attr("href");
	$("html, body").animate(
		{
			scrollTop: $(target).offset().top
		},
		500
	);
});

//Control nav_column move
$(window).scroll(function () {
	var current_pos = $(window).scrollTop();
	var window_h_half = $(window).height() / 2;
	var header_pos = $("#header").offset().top;
	if (current_pos >= header_pos + $("#header").outerHeight() - window_h_half) {
		$(".nav_column").css("transform", "translate(0%,-50%)");
	} else {
		$(".nav_column").css("transform", "translate(-280%,-50%)");
	}
});

//Control nav_column color
$(window).scroll(function () {
	var current_pos = $(window).scrollTop();
	var window_h_half = $(window).height() / 2;
	var section_notes_pos = $("#section_notes").offset().top;
	var section_conflict_pos = $("#section_conflict").offset().top;
	var sec3_pos = $("#section3").offset().top;
	var sec4_pos = $("#section4").offset().top;
	var sec5_pos = $("#section5").offset().top;
	var sec6_pos = $("#section6").offset().top;
	var sec7_pos = $("#section7").offset().top;
	var sec8_pos = $("#section8").offset().top;
	var sec9_pos = $("#section9").offset().top;
	var sec10_pos = $("#section10").offset().top;
	if (
		current_pos >= section_notes_pos &&
		current_pos <= section_notes_pos + $("#section_notes").outerHeight()
	) {
		$(".nav_bar .nav_column .content.section_notes").css(
			"background-color",
			"#9ECCFB"
		);
	} else {
		$(".nav_bar .nav_column .content.section_notes").css("background-color", "#666");
	}
	if (
		current_pos >= section_notes_pos - window_h_half &&
		current_pos <= section_notes_pos + $("#section_notes").outerHeight() - window_h_half
	) {
		$(".nav_bar .nav_column .content.section_notes").css(
			"background-color",
			"#9ECCFB"
		);
	} else {
		$(".nav_bar .nav_column .content.section_notes").css("background-color", "#666");
	}
	if (
		current_pos >= section_conflict_pos - window_h_half &&
		current_pos <= section_conflict_pos + $("#section_conflict").outerHeight() - window_h_half
	) {
		$(".nav_bar .nav_column .content.section_conflict").css(
			"background-color",
			"#9ECCFB"
		);
	} else {
		$(".nav_bar .nav_column .content.section_conflict").css("background-color", "#666");
	}
	if (
		current_pos >= sec3_pos - window_h_half &&
		current_pos <= sec3_pos + $("#section3").outerHeight() - window_h_half
	) {
		$(".nav_bar .nav_column .content.section3").css(
			"background-color",
			"#9ECCFB"
		);
	} else {
		$(".nav_bar .nav_column .content.section3").css("background-color", "#666");
	}
	if (
		current_pos >= sec4_pos - window_h_half &&
		current_pos <= sec4_pos + $("#section4").outerHeight() - window_h_half
	) {
		$(".nav_bar .nav_column .content.section4").css(
			"background-color",
			"#9ECCFB"
		);
	} else {
		$(".nav_bar .nav_column .content.section4").css("background-color", "#666");
	}
	if (
		current_pos >= sec5_pos - window_h_half &&
		current_pos <= sec5_pos + $("#section5").outerHeight() - window_h_half
	) {
		$(".nav_bar .nav_column .content.section5").css(
			"background-color",
			"#9ECCFB"
		);
	} else {
		$(".nav_bar .nav_column .content.section5").css("background-color", "#666");
	}
	if (
		current_pos >= sec6_pos - window_h_half &&
		current_pos <= sec6_pos + $("#section6").outerHeight() - window_h_half
	) {
		$(".nav_bar .nav_column .content.section6").css(
			"background-color",
			"#9ECCFB"
		);
	} else {
		$(".nav_bar .nav_column .content.section6").css("background-color", "#666");
	}
	if (
		current_pos >= sec7_pos - window_h_half &&
		current_pos <= sec7_pos + $("#section7").outerHeight() - window_h_half
	) {
		$(".nav_bar .nav_column .content.section7").css(
			"background-color",
			"#9ECCFB"
		);
	} else {
		$(".nav_bar .nav_column .content.section7").css("background-color", "#666");
	}
	if (
		current_pos >= sec8_pos - window_h_half &&
		current_pos <= sec8_pos + $("#section8").outerHeight() - window_h_half
	) {
		$(".nav_bar .nav_column .content.section8").css(
			"background-color",
			"#9ECCFB"
		);
	} else {
		$(".nav_bar .nav_column .content.section8").css("background-color", "#666");
	}
	if (
		current_pos >= sec9_pos - window_h_half &&
		current_pos <= sec9_pos + $("#section9").outerHeight() - window_h_half
	) {
		$(".nav_bar .nav_column .content.section9").css(
			"background-color",
			"#9ECCFB"
		);
	} else {
		$(".nav_bar .nav_column .content.section9").css("background-color", "#666");
	}
	if (
		current_pos >= sec10_pos - window_h_half &&
		current_pos <= sec10_pos + $("#section10").outerHeight() - window_h_half
	) {
		$(".nav_bar .nav_column .content.section10").css(
			"background-color",
			"#9ECCFB"
		);
	} else {
		$(".nav_bar .nav_column .content.section10").css("background-color", "#666");
	}
});

// video fixed/abs & explore
$(window).scroll(function () {
	var current_pos = $(window).scrollTop();
	var section_notes_pos = $("#section_notes").offset().top;
	var vh = $(window).outerHeight();

	if (current_pos > 0) {
		$(".explore").css("opacity", 0);
		$(".explore").css("transform", "translate(-50%,-30%)");
	} else {
		$(".explore").css("opacity", 1);
		$(".explore").css("transform", "translate(-50%,-50%)");
	}
	if (current_pos + vh >= section_notes_pos) {
		$("#header .container-fluid").removeClass("fixed");
		$("#header .container-fluid").addClass("absolute");
	} else {
		$("#header .container-fluid").addClass("fixed");
		$("#header .container-fluid").removeClass("absolute");
	}
});

// control video
$(".banner_video").on("timeupdate", function(){
    if(this.currentTime >= 5) {
        this.pause();
	   	$(".1_note").css("opacity","1");
    }
});

// control note 
$(window).scroll(function () {
	var current_pos = $(window).scrollTop();
	var section_notes_pos = $("#section_notes").offset().top;
	var vh = $(window).outerHeight();
	if(current_pos >0){
	   	$(".1_note").css("opacity","1");
	}else{
	   	$(".1_note").css("opacity","0");

	}
	if (current_pos + vh >= section_notes_pos) {
		$(".note").css("transform", "translate(-10vw,60vh) rotate(15deg) scale(2.5)");
		$(".note").css("z-index","0");
	} else {
		$(".note").css("transform", "translate(0,0) rotate(0deg) scale(1.5)");
		$(".note").css("z-index","0");
	}
	if(current_pos >= section_notes_pos){
		$(".1_band").css("opacity","1");
	}else{		
		$(".1_band").css("opacity","0");
	}
});

//section_conflict
// container fixed/absolute
$(window).scroll(function () {
	var current_pos = $(window).scrollTop();
	var section_conflict_pos = $("#section_conflict").offset().top;
	var section3_pos = $("#section3").offset().top;
	var vh = $(window).outerHeight();
	if(current_pos>=section_conflict_pos){
		$("#section_conflict .container-fluid").addClass("fixed");
		if (current_pos + vh >= section3_pos) {
			$("#section_conflict .container-fluid").removeClass("fixed");
			$("#section_conflict .container-fluid").addClass("absolute");
		} else {
			$("#section_conflict .container-fluid").addClass("fixed");
			$("#section_conflict .container-fluid").removeClass("absolute");
		}}else{
			$("#section_conflict .container-fluid").removeClass("fixed");
		}
});

//people move
$(window).mousemove(function (e) {
	var pagex = e.pageX;
	var pagey = e.pageY;
	var vw = $(window).outerWidth();
	if (pagex < vw / 2) {
		$(".old").css("transform", "translate(" + -(pagex - vw / 2) / 10 + "px, -50%)");
		$(".conversation .line1").css("transform", "translate(-" + -(pagex - vw / 2) / 20 + "px, 0)");
		$(".conversation .line3").css("transform", "translate(-" + -(pagex - vw / 2) / 16 + "px, 0)");
		$(".conversation .line5").css("transform", "translate(-" + -(pagex - vw / 2) / 13 + "px, 0)");

	} else {
		$(".young").css("transform", "translate(-" + (pagex - vw / 2) / 10 + "px, -50%)");
		$(".conversation .line2").css("transform", "translate(" + (pagex - vw / 2) / 20 + "px, 0)");
		$(".conversation .line4").css("transform", "translate(" + (pagex - vw / 2) / 15 + "px, 0)");
		$(".conversation .line6").css("transform", "translate(" + (pagex - vw / 2) / 12 + "px, 0)");

	}
});

//words show
$(window).scroll(function () {
	var current_pos = $(window).scrollTop();
	var vh = $(window).outerHeight();
	var section_pos = $("#section_conflict").offset().top;
	var section_height = $("#section_conflict").outerHeight();
	var scroll_persent = ((current_pos - section_pos + vh) / section_height) * 100;
	if (scroll_persent >= 10) {
		$(".conversation .line1").css("opacity", 1);
	} else {
		$(".conversation .line1").css("opacity", 0);
	}
	if (scroll_persent >= 30) {
		$(".conversation .line2").css("opacity", 1);
	} else {
		$(".conversation .line2").css("opacity", 0);
	}
	if (scroll_persent >= 40) {
		$(".conversation .line3").css("opacity", 1);
	} else {
		$(".conversation .line3").css("opacity", 0);
	}
	if (scroll_persent >= 60) {
		$(".conversation .line4").css("opacity", 1);
	} else {
		$(".conversation .line4").css("opacity", 0);
	}
	if (scroll_persent >= 75) {
		$(".conversation .line5").css("opacity", 1);
	} else {
		$(".conversation .line5").css("opacity", 0);
	}
	if (scroll_persent >= 90) {
		$(".conversation .line6").css("opacity", 1);
	} else {
		$(".conversation .line6").css("opacity", 0);
	}

//scroller
$(document).ready(function () {
	var s = skrollr.init();
});
});