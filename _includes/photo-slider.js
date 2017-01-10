<script>
{% include vendor/hammer.min.js %}

var hammertime = new Hammer(document.getElementsByClassName("slides-content")[0]);
hammertime.on('swipeleft', function(ev) {
	plusDivs(1); 
});
hammertime.on('swiperight', function(ev) {
	plusDivs(-1); 
});



var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("wedding-slides");
  var dots = document.getElementsByClassName("peas");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" peas-white", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " peas-white";
}
</script>
