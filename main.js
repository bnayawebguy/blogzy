import "./src/scss/style.scss"

import $ from "jquery"

import "sticky-sidebar"

if ($(window).width() > 550) {
  var sidebar = new StickySidebar(".sidebar", {
    topSpacing: 20,
    bottomSpacing: 20,
  })
}

$(".toggle").on("click", function () {
  $(this).prev("ul").slideToggle()
  $(this).toggleClass("active")
})
