<script>
{% include vendor/hammer.min.js %}

var hammertime = new Hammer(document.getElementsByClassName("slides-content")[0]);
hammertime.on('swipeleft', function(ev) {
	plusDivs(1); 
});
hammertime.on('swiperight', function(ev) {
	plusDivs(-1); 
});

</script>
