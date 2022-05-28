$(document).ready(function() {
    var count = -1;
    function addActiveClass() {
    var boxes = $('.skill');
    var boxLength = boxes.length - 1;
    count < boxLength ? count++ : count=0;
    boxes.removeClass('active').eq(count).addClass('active');
  }
      setInterval(addActiveClass, 2500);
  
    function checkWidthChange() {
       var coWidth = $(".skill.active").width();
       console.log(coWidth);
       $('#box-wrap').css('width',coWidth+40);
     }
  setInterval(checkWidthChange, 2500);

  

});

