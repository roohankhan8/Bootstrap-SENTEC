$(function () {
  $("#nav").load("navigation.html");
  $("#footer").load("footer.html");
});

function removeClass() {
  document.getElementById('services').classList.remove("active");
  document.getElementById('pricing').classList.remove("active");
  document.getElementById('contact').classList.remove("active");
}
function active(ele) {
  removeClass()
  document.getElementById(ele).classList.add("active");
}

// $(document).ready(function() {

//   $("#myElement").click(function() {
//     $(this).toggleClass("myClass");
//   });
// });
