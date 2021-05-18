var explain_on = false;
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

var vh = $(window).outerHeight();

$(window).resize(function(){
	vh = $(window).outerHeight();
});

function NavColor(current_pos){
	if(current_pos >= section_notes_pos){
		$(".nav_bar").addClass("show");
	}else{
		$(".nav_bar").removeClass("show");
	}
	if(current_pos >= section_simple_pos){
		$(".nav_bar a .icon").attr("src","assets/Banner_icon_white.png");
		$(".nav_bar").addClass("white");
		if(current_pos >= section_realWage_2_pos){
			$(".nav_bar a .icon").attr("src","assets/Banner_icon.png");
			$(".nav_bar").removeClass("white");
			if(current_pos >= section_reason_pos){
				$(".nav_bar a .icon").attr("src","assets/Banner_icon_white.png");
				$(".nav_bar").addClass("white");
				if(current_pos >= section_youngPpl_pos){
					$(".nav_bar a .icon").attr("src","assets/Banner_icon.png");
					$(".nav_bar").removeClass("white");
					if(current_pos >= section_conclusion_pos){
						$(".nav_bar a .icon").attr("src","assets/Banner_icon_white.png");
						$(".nav_bar").addClass("white");		
					}
				}
			}
		}
	}else{
		$(".nav_bar a .icon").attr("src","assets/Banner_icon.png");
		$(".nav_bar").removeClass("white");	
	}
}

function CatHand(current_pos){
	var section_lowWage_question_h = $("#section_lowWage_question").outerHeight();
	var section_realWage_1_h = $("#section_realWage_1").outerHeight();
	if(current_pos >= section_lowWage_question_pos &&current_pos<= section_lowWage_question_pos + section_realWage_1_h +section_lowWage_question_h){
		$("#cat_waveHand").addClass("show");
	}else{
		$("#cat_waveHand").removeClass("show");
	}
}
function Explain(){
	explain_on = true;
	$("section#cat_explain .explain .close").on("click", function () {
		explain_on = false;
		if (explain_on) {
			$("#cat_explain").css("z-index", 3);
			$("#cat_explain").css("opacity", 1);
		} else {
			$("#cat_explain").css("z-index", -1);
			$("#cat_explain").css("opacity", 0);
		}
	});

	if (explain_on) {
		$("#cat_explain").css("z-index", 3);
		$("#cat_explain").css("opacity", 1);
	} else {
		$("#cat_explain").css("z-index", -1);
		$("#cat_explain").css("opacity", 0);
	}
}

function ControlVideo(current_pos, vh){
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
};
function ConflictFixed(current_pos, vh){
	if(current_pos>=section_conflict_pos){
		$("#section_conflict .container-fluid").addClass("fixed");
		if (current_pos + vh >= section_simple_pos) {
			$("#section_conflict .container-fluid").removeClass("fixed");
			$("#section_conflict .container-fluid").addClass("absolute");
		} else {
			$("#section_conflict .container-fluid").addClass("fixed");
			$("#section_conflict .container-fluid").removeClass("absolute");
		}
	}else{
		$("#section_conflict .container-fluid").removeClass("fixed");
	}
};
function ConflictMove(current_pos){
	if(current_pos + window_h_half >= section_conflict_pos){
		$("#section_conflict .container-fluid").addClass("move");
		if(current_pos + window_h_half*2 >= section_simple_pos){
			$("#section_conflict .container-fluid").removeClass("move");
		}
	}else{
		$("#section_conflict .container-fluid").removeClass("move");
	}
}
function ConflictShowWord(current_pos, vh){
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
}

function SimpleFixed(current_pos, vh){
	if(current_pos>=section_simple_pos){
		$("#section_simple .container-fluid .photo").addClass("fixed");
		if (current_pos + vh >= section_lowWage_question_pos) {
			$("#section_simple .container-fluid .photo").removeClass("fixed");
			$("#section_simple .container-fluid .photo").addClass("absolute");
		} else {
			$("#section_simple .container-fluid .photo").addClass("fixed");
			$("#section_simple .container-fluid .photo").removeClass("absolute");
		}
	}else{
		$("#section_simple .container-fluid .photo").removeClass("fixed");
	}
}
function SimpleFadeIn(current_pos, vh){
	if(current_pos + vh/2 >= section_simple_pos){
		$("#section_simple .container-fluid .photo img.photo0").addClass("show");
		if(current_pos + vh/2 >= section_simple_pos + vh){
			$("#section_simple .container-fluid .photo img.photo0").removeClass("show");
			$("#section_simple .container-fluid .photo img.photo1").addClass("show");
		}else{
			$("#section_simple .container-fluid .photo img.photo1").removeClass("show");			
		}
	}else{
		$("#section_simple .container-fluid .photo img.photo0").removeClass("show");
	}
}

function RealWage1Fixed(current_pos, vh){
	if(current_pos>=section_realWage_1_pos){
		$("#section_realWage_1 .container-fluid").addClass("fixed");
		if (current_pos + vh >= section_realWage_2_pos) {
			$("#section_realWage_1 .container-fluid .figure").removeClass("fixed");
			$("#section_realWage_1 .container-fluid .figure").addClass("absolute");
		} else {
			$("#section_realWage_1 .container-fluid .figure").addClass("fixed");
			$("#section_realWage_1 .container-fluid .figure").removeClass("absolute");
		}
	}else{
		$("#section_realWage_1 .container-fluid .figure").removeClass("fixed");
	}

}
function RealWage2Fixed(current_pos, vh){
	if(current_pos>=section_realWage_2_pos){
		$("#section_realWage_2 .container-fluid").addClass("fixed");
		if (current_pos + vh >= section_reason_pos) {
			$("#section_realWage_2 .container-fluid").removeClass("fixed");
			$("#section_realWage_2 .container-fluid").addClass("absolute");
		} else {
			$("#section_realWage_2 .container-fluid").addClass("fixed");
			$("#section_realWage_2 .container-fluid").removeClass("absolute");
		}
	}else{
		$("#section_realWage_2 .container-fluid").removeClass("fixed");
	}

}

function YoungPplFixed(current_pos, vh){
	if(current_pos>=section_youngPpl_pos){
		$("#section_youngPpl .container-fluid").addClass("fixed");
		if (current_pos + vh >= section_conclusion_pos) {
			$("#section_youngPpl .container-fluid").removeClass("fixed");
			$("#section_youngPpl .container-fluid").addClass("absolute");
		} else {
			$("#section_youngPpl .container-fluid").addClass("fixed");
			$("#section_youngPpl .container-fluid").removeClass("absolute");
		}
	}else{
		$("#section_youngPpl .container-fluid").removeClass("fixed");
	}
};
function YoungPplMove(current_pos, vh){
	var vw = $(window).outerWidth();
	var section_youngPpl_h = $("#section_youngPpl").outerHeight();
	var move = (current_pos - section_youngPpl_pos)/(section_youngPpl_h-vh);
	// console.log(move);
	if (move >= 0 && move<=1){
		$("#section_youngPpl .container-fluid .people").css("left", -2*vw*move);
	};
};

function Send(){
	$(".mail .mailCover").css("transform", "translate(0%,0%) rotate(27deg) scale(0.3)");
	$(".mail").animate(
	{
		left: "-20vw",
		top: "20vh"
		// width: "10vw",
		// height: "15vh"
	},
	1000
	);
	$(".mail .mailBody").css("opacity", "0")
	$(".mail .mailBody").css("transform", "scale(0.1)");

	$(".mail").delay(500).animate(
	{
		left: "0vw"
	},
	1000
	);
	$(".mail").delay(500).animate(
	{
		top: "-100vh"
	},
	500
	);
	$(".great").delay(3000).animate(
	{
		opacity: "1"
	},
	800
	);
	$(".mail").delay(100).animate(
		{
			opacity: "0"
		},
		500
	);
	$('#section_contact').css("background-image","none");
	$(".nav_bar a .icon").attr("src","assets/Banner_icon.png");
	$(".nav_bar").removeClass("white");
}

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

// var vm = new Vue({
// 	el: "#app",
// 	data: {
// 		sections: sections
// 	}
// });

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

//CatExplain
$("#cat_waveHand").on("click", Explain);

// control video
$(".banner_video").on("timeupdate", function(){
	if(this.currentTime >= 5) {
		this.pause();
	}
});


$(window).scroll(function () {

	var current_pos = $(window).scrollTop();

	//Nav
	NavColor(current_pos);

	//Explain
	CatHand(current_pos);

	//Video
	ControlVideo(current_pos, vh);

	//sectionConflict --> Fixed or not & move & wordShow
	ConflictFixed(current_pos, vh);
	ConflictMove(current_pos);
	ConflictShowWord(current_pos, vh);

	//sectionSimple
	SimpleFixed(current_pos, vh);
	SimpleFadeIn(current_pos, vh);

	//sectionRealWage_1
	RealWage1Fixed(current_pos, vh);

	//sectionRealWage_2
	RealWage2Fixed(current_pos, vh);

	//sectionYoungPpl
	YoungPplFixed(current_pos, vh);
	YoungPplMove(current_pos, vh);
});

//LetterSend
$(".mail .mailBody .send").on("click", Send);