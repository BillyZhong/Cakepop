var btn = $('.btn-floating');
var background = $('.extfooter');


var width = 0;
var height = 0;
var r = 0;
var color;
setSize();

function setSize() {
  width = $('.extfooter').width();
	height = $('.extfooter').height();
  r = Math.sqrt(width * width + height * height);
}
$('.extfooter').resize(setSize);

btn.click(function(e) {
  if(e.currentTarget.className == "btn-floating btn-large"){
    color = 'rgba(0,0,0,0)';
  }
  else{
    color = $(this).css('background-color');
  }
  var circle = $("<div unselectable='on' id='circle'></div>");
  background.append(circle);
  circle.css({
    position: 'absolute',
    'background-color': color,
    width: 0,
    height: 0,
    "border-radius": "50%",
    left: e.pageX,
    top: e.pageY - circle.parent().offset().top,//window.screen.height - e.pageY + $(window).scrollTop(),
    'margin-left': 0,
    'margin-top': 0,
    'webkit-user-select': 'none',
    '-moz-user-select': 'none',
    '-ms-user-select': 'none'
  });
  circle.animate({
    width: (r * 2),
    height: (r * 2),
   	'margin-left': -r,
    'margin-top': -r
  }, {
    duration: 700,
    easing: "easeInOutCubic",
    queue: false,
    complete: function() {
     circle.parent().css({
        'background-color': color,
      });
     circle.detach();
    }
  });
});