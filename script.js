//scroller
$(document).ready(function() {
	var s = skrollr.init();
});

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
"section_simple",
"section_lowwage_question"
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
	var section_simple_pos = $("#section_simple").offset().top;
	var section_lowwage_question_pos = $("#section_lowwage_question").offset().top;
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
	current_pos >= section_simple_pos - window_h_half &&
	current_pos <= section_simple_pos + $("#section_simple").outerHeight() - window_h_half
	) {
	$(".nav_bar .nav_column .content.section_simple").css(
		"background-color",
		"#9ECCFB"
		);
} else {
	$(".nav_bar .nav_column .content.section_simple").css("background-color", "#666");
}
if (
	current_pos >= section_lowwage_question_pos - window_h_half &&
	current_pos <= section_lowwage_question_pos + $("#section_lowwage_question").outerHeight() - window_h_half
	) {
	$(".nav_bar .nav_column .content.section_lowwage_question").css(
		"background-color",
		"#9ECCFB"
		);
} else {
	$(".nav_bar .nav_column .content.section_lowwage_question").css("background-color", "#666");
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
	var section_simple_pos = $("#section_simple").offset().top;
	var vh = $(window).outerHeight();
	if(current_pos>=section_conflict_pos){
		$("#section_conflict .container-fluid").addClass("fixed");
		if (current_pos + vh >= section_simple_pos) {
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
});


//section_others
$(window).scroll(function(){
	var current_pos = $(window).scrollTop();
	var section_simple_pos = $("#section_simple").offset().top;
	var vh = $(window).outerHeight();
	var section_lowwage_question_pos = $("#section_lowwage_question").offset().top;

	if(current_pos >= section_simple_pos){
		$("#section_simple .container-fluid .photo").addClass("fixed_photo");
		if(current_pos + vh >= section_lowwage_question_pos){
			$("#section_simple .container-fluid .photo").removeClass("fixed_photo_");
			$("#section_simple .container-fluid .photo").addClass("abs_photo");
		}else{
			$("#section_simple .container-fluid .photo").addClass("fixed_photo");
			$("#section_simple .container-fluid .photo").removeClass("abs_photo");
		}
	} else {
		$("#section_simple .container-fluid .photo").removeClass("fixed_photo");
	}

	var section_realwage_1_pos = $("#section_realwage_1").offset().top;
	var section_realwage_2_pos = $("#section_realwage_2").offset().top;
if(current_pos >= section_realwage_1_pos){
		$("#section_realwage_1 .container-fluid .sticky").addClass("fixed_sticky");
		if(current_pos + vh >= section_realwage_2_pos){
			$("#section_realwage_1 .container-fluid .sticky").removeClass("fixed_sticky");
			$("#section_realwage_1 .container-fluid .sticky").addClass("abs_sticky");
		}else{
			$("#section_realwage_1 .container-fluid .sticky").addClass("fixed_sticky");
			$("#section_realwage_1 .container-fluid .sticky").removeClass("abs_sticky");
		}
	} else {
		$("#section_realwage_1 .container-fluid .sticky").removeClass("fixed_sticky");
	}

	if (current_pos >= section_realwage_2_pos){
		$("#section_realwage_2 .container-fluid").addClass("fixed");
	}else{
		$("#section_realwage_2 .container-fluid").removeClass("fixed");		
	}
});

$(".mail .mailbody .btn-primary").on("click", function () {
	$(".mail .mailcover").css("transform", "translate(-50%,-50%) rotate(0)");
	$(".mail .mailcover").css("width", "80%");
	$(".mail").animate(
		{
			left: "20vw",
			top: "80vh",
			width: "10vw",
			height: "15vh"
		},
		1000
	);
	$(".mail .mailbody").animate(
		{
			opacity: "0"
		},
		1000
	);
	$(".mail").delay(500).animate(
		{
			left: "50vw"
		},
		1000
	);
	$(".mail").delay(500).animate(
		{
			top: "-10vh"
		},
		500
	);
	$(".great").delay(2500).animate(
		{
			opacity: "1"
		},
		800
	);
	$("#section_contact").css(
		"background-image",
		"url(https://i.imgur.com/3tGX3oz.png)"
	);
});


