$(document).ready(function() {
	var $grid = $('.grid').imagesLoaded( function() {
	  $grid.isotope({
	    itemSelector: '.grid-item'
	  });
	});
});

$(function() {
  $('#campaign_media').on('change', function(event) {
    var files = event.target.files;
    var image = files[0]
    var reader = new FileReader();
    reader.onload = function(file) {
      var img = new Image();
      console.log(file);
      img.src = file.target.result;
      $('#media_preview').html(img);
    }
    reader.readAsDataURL(image);
    console.log(files);
  });
});
