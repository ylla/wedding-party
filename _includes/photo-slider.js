<script>
{% include vendor/hammer.min.js %}

document.addEventListener("DOMContentLoaded", function(event) {
  var sections = document.getElementsByClassName("section");
  for (var i = 0; i < sections.length; i++) {
    var hammertime = new Hammer(sections[i]);
    hammertime.on('swipeleft', function(ev) {
      plusDivs(ev.target, 1); 
    });
    hammertime.on('swiperight', function(ev) {
      plusDivs(ev.target, -1); 
    });
  }
});

function getCurrentSlideInSection(section) {
  return section.slideIndex || 1;
}

function getSectionFromChild(element) {
  var section = element;
  while (section !== undefined && !section.classList.contains('section')) {
    section = section.parentNode;
  }
  return section;
}

function plusDivs(element, n) {
  var section = getSectionFromChild(element);
  var currentSlide = getCurrentSlideInSection(section);
  showDivs(section, currentSlide + n);
}

function currentDiv(element, n) {
  var section = getSectionFromChild(element);
  showDivs(section, n);
}

function showDivs(section, n) {
  var i;
  var x = section.getElementsByClassName("slide");
  var dots = section.getElementsByClassName("dot");
  if (n > x.length) {n = 1}
  if (n < 1) {n = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].className = x[i].className.replace(" active", "");
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" active", "");
  }
  var slideControl = section.getElementsByClassName("slide-control")[0];
  slideControl.classList.remove("dark");
  if (x[n-1].classList.contains("dark")) {
    slideControl.classList.add("dark");
  }
  x[n-1].className += " active";
  dots[n-1].className += " active";
  section.slideIndex = n;
}

</script>
