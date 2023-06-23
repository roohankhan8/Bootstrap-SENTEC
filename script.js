$(function () {
  $("#nav").load("navigation.html");
  $("#footer").load("footer.html");
  $("#bootstrap").load("bootstrap.html");
});

// let services = $('#services')
// let contact = $('#contact')
// let pricing = $('#pricing')

function removeClass() {
  document.getElementById('services').classList.remove("active");
  document.getElementById('pricing').classList.remove("active");
  document.getElementById('contact').classList.remove("active");
}

function active(ele) {
  removeClass()
  document.getElementById(ele).classList.add("active");
}

$(document).ready(function() {
  $("#services").click(function() {
    $(this).addClass("active");
  });
});
