 // Original design - [Martin Mroč] https://dribbble.com/shots/7995712-BMW-Responsive-page/attachments/526403?mode=media
// Speedcoding video - https://www.youtube.com/watch?v=tA9VRJbbIhI

var btn = document.querySelector(".js-btn");
var btn2 = document.querySelector(".inner_header > button");
btn.addEventListener("click", function() {
  this.classList.toggle('active');
  document.body.classList.toggle('show');
});
btn2.addEventListener("click", function() {
  btn.classList.remove('active');
  document.body.classList.remove('show');
});