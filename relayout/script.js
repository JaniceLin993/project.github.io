// var current_pos = $(window).scrollTop();
var window_h_half = $(window).height() / 2;
var section_notes_pos = $("#section_notes").offset().top;
var section_conflict_pos = $("#section_conflict").offset().top;
var section_simple_pos = $("#section_simple").offset().top;
var section_lowWage_question_pos = $("#section_lowWage_question").offset().top;
var section_realWage_1_pos = $("#section_realWage_1").offset().top;
var section_realWage_2_pos = $("#section_realWage_2").offset().top;
var section_reason_pos = $("#section_reason").offset().top;
var section_todo_pos = $("#section_todo").offset().top;
var section_road_pos = $("#section_road").offset().top;
var section_youngPpl_pos = $("#section_youngPpl").offset().top;
var section_conclusion_pos = $("#section_conclusion").offset().top;
var section_contact_pos = $("#section_contact").offset().top;


//control menu
$(document).on("click", ".menu", function () {
	$(".menu").addClass("menu_clicked");
});
$(document).on("click", ".menu_clicked", function () {
	$(".menu_clicked").removeClass("menu_clicked");
});

// Store section infos
var sections = [
"section_notes",
"section_conflict",
"section_simple",
"section_lowWage_question",
"section_realWage_1",
"section_realWage_2",
"section_reason",
"section_todo",
"section_road",
"section_youngPpl",
"section_conclusion",
"section_contact",

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

// video fixed/abs & explore
$(window).scroll(function () {
	var current_pos = $(window).scrollTop();
	var vh = $(window).outerHeight();

	if (current_pos > 0) {
		$(".explore").addClass("scrolled");
		$("#header .container-fluid .note").addClass('show');
		setTimeout(function(){
			$("#header .container-fluid .note").addClass('moved');
		},600);
	} else {
		$(".explore").removeClass("scrolled");
		$("#header .container-fluid .note").removeClass('show');
		setTimeout(function(){
		$("#header .container-fluid .note").removeClass('moved');},800);
	}
	if(current_pos + vh/3 >= section_notes_pos){
		$("#header .container-fluid .note .band_1").addClass("show");
	}else{
		$("#header .container-fluid .note .band_1").removeClass("show");
	}
	
});

// control video
$(".banner_video").on("timeupdate", function(){
	if(this.currentTime >= 5) {
		this.pause();
	}
});


//Section_Conflict

//move
$(window).scroll(function(){
	var current_pos = $(window).scrollTop();
	if(current_pos + window_h_half >= section_conflict_pos){
		$("#section_conflict .container-fluid").addClass("move");
		if(current_pos + window_h_half >= section_simple_pos){
			$("#section_conflict .container-fluid").removeClass("move");
		}
	}else{
		$("#section_conflict .container-fluid").removeClass("move");
	}
});
//wordShow
$(window).scroll(function () {
	var current_pos = $(window).scrollTop();
	var vh = $(window).outerHeight();
	var section_height = $("#section_conflict").outerHeight();
	var scroll_percent = ((current_pos - section_conflict_pos + vh) / section_height) * 100;
	if (scroll_percent >= 10) {
		$(".conversation .line1").css("opacity", 1);
	} else {
		$(".conversation .line1").css("opacity", 0);
	}
	if (scroll_percent >= 30) {
		$(".conversation .line2").css("opacity", 1);
	} else {
		$(".conversation .line2").css("opacity", 0);
	}
	if (scroll_percent >= 40) {
		$(".conversation .line3").css("opacity", 1);
	} else {
		$(".conversation .line3").css("opacity", 0);
	}
	if (scroll_percent >= 60) {
		$(".conversation .line4").css("opacity", 1);
	} else {
		$(".conversation .line4").css("opacity", 0);
	}
	if (scroll_percent >= 75) {
		$(".conversation .line5").css("opacity", 1);
	} else {
		$(".conversation .line5").css("opacity", 0);
	}
	if (scroll_percent >= 90) {
		$(".conversation .line6").css("opacity", 1);
	} else {
		$(".conversation .line6").css("opacity", 0);
	}
});