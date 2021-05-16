"use strict";

var current_pos = $(window).scrollTop();
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
var section_contact_pos = $("#section_contact").offset().top; //control menu

$(document).on("click", ".menu", function () {
  $(".menu").addClass("menu_clicked");
});
$(document).on("click", ".menu_clicked", function () {
  $(".menu_clicked").removeClass("menu_clicked");
}); // Store section infos

var sections = ["section_notes", "section_conflict", "section_simple", "section_lowWage_question", "section_realWage_1", "section_realWage_2", "section_reason", "section_todo", "section_road", "section_youngPpl", "section_conclusion", "section_contact"];
var vm = new Vue({
  el: "#app",
  data: {
    sections: sections
  }
}); // smooth section jump

$(document).on("click", "a", function (e) {
  e.preventDefault();
  var target = $(this).attr("href");
  $("html, body").animate({
    scrollTop: $(target).offset().top
  }, 500);
}); // video fixed/abs & explore

$(window).scroll(function () {
  var current_pos = $(window).scrollTop();
  var section_notes_pos = $("#section_notes").offset().top;
  var vh = $(window).outerHeight();

  if (current_pos > 0) {
    $(".explore").addClass("scrolled");
  } else {
    $(".explore").removeClass("scrolled");
  }

  if (current_pos + vh >= section_notes_pos) {
    $("#header .container-fluid").addClass("absolute");
  } else {
    $("#header .container-fluid").removeClass("absolute");
  }
}); // control video

$(".banner_video").on("timeupdate", function () {
  if (this.currentTime >= 5) {
    this.pause();
  }
});