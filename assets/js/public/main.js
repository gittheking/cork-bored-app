$(document).ready(function(){
      $('input').val('');
})

$('.grid').masonry({
  // options
  itemSelector: '.grid-item',
  columnWidth: 200
});