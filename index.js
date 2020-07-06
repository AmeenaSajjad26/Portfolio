 // Have focus outline only for keyboard users 

 const handleFirstTab = (e) => {
  if(e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing')

    window.removeEventListener('keydown', handleFirstTab)
    window.addEventListener('mousedown', handleMouseDownOnce)
  }

}

const handleMouseDownOnce = () => {
  document.body.classList.remove('user-is-tabbing')

  window.removeEventListener('mousedown', handleMouseDownOnce)
  window.addEventListener('keydown', handleFirstTab)
}

window.addEventListener('keydown', handleFirstTab)

const backToTopButton = document.querySelector(".back-to-top");
let isBackToTopRendered = false;

let alterStyles = (isBackToTopRendered) => {
  backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
  backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
  backToTopButton.style.transform = isBackToTopRendered
    ? "scale(1)"
    : "scale(0)";
};


window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    isBackToTopRendered = true;
    alterStyles(isBackToTopRendered);
  } else {
    isBackToTopRendered = false;
    alterStyles(isBackToTopRendered);
  }
});

  // Cool Bckground

var w = c.width = window.innerWidth,
    h = c.height = window.innerHeight,
    ctx = c.getContext( '2d' ),
    
    minDist = 10,
    maxDist = 30,
    initialWidth = 10,
    maxLines = 100,
    initialLines = 4,
    speed = 5,
    
    lines = [],
    frame = 0,
    timeSinceLast = 0,
    
    dirs = [
   // straight x, y velocity
      [ 0, 1 ],
      [ 1, 0 ],
      [ 0, -1 ],
    	[ -1, 0 ],
   // diagonals, 0.7 = sin(PI/4) = cos(PI/4)
      [ .7, .7 ],
      [ .7, -.7 ],
      [ -.7, .7 ],
      [ -.7, -.7]
    ],
    starter = { // starting parent line, just a pseudo line
      
      x: w / 2,
      y: h / 2,
      vx: 0,
      vy: 0,
      width: initialWidth
    };

function init() {
  
  lines.length = 0;
  
  for( var i = 0; i < initialLines; ++i )
    lines.push( new Line( starter ) );
  
  ctx.fillStyle = '#222';
  ctx.fillRect( 0, 0, w, h );
  
  // if you want a cookie ;)
  // ctx.lineCap = 'round';
}
function getColor( x ) {
  
  return 'hsl( hue, 80%, 50% )'.replace(
  	'hue', x / w * 360 + frame
  );
}
function anim() {
  
  window.requestAnimationFrame( anim );
  
  ++frame;
  
  ctx.shadowBlur = 0;
  ctx.fillStyle = 'rgba(0,0,0,.02)';
  ctx.fillRect( 0, 0, w, h );
  ctx.shadowBlur = .5;
  
  for( var i = 0; i < lines.length; ++i ) 
    
    if( lines[ i ].step() ) { // if true it's dead
      
      lines.splice( i, 1 );
      --i;
      
    }
  
  // spawn new
  
  ++timeSinceLast
  
  if( lines.length < maxLines && timeSinceLast > 10 && Math.random() < .5 ) {
    
    timeSinceLast = 0;
    
    lines.push( new Line( starter ) );
    
    // cover the middle;
    ctx.fillStyle = ctx.shadowColor = getColor( starter.x );
    ctx.beginPath();
    ctx.arc( starter.x, starter.y, initialWidth, 0, Math.PI * 2 );
    ctx.fill();
  }
}

function Line( parent ) {
  
  this.x = parent.x | 0;
  this.y = parent.y | 0;
  this.width = parent.width / 1.25;
  
  do {
    
    var dir = dirs[ ( Math.random() * dirs.length ) |0 ];
    this.vx = dir[ 0 ];
    this.vy = dir[ 1 ];
    
  } while ( 
    ( this.vx === -parent.vx && this.vy === -parent.vy ) || ( this.vx === parent.vx && this.vy === parent.vy) );
  
  this.vx *= speed;
  this.vy *= speed;
  
  this.dist = ( Math.random() * ( maxDist - minDist ) + minDist );
  
}
Line.prototype.step = function() {
  
  var dead = false;
  
  var prevX = this.x,
      prevY = this.y;
  
  this.x += this.vx;
  this.y += this.vy;
  
  --this.dist;
  
  // kill if out of screen
  if( this.x < 0 || this.x > w || this.y < 0 || this.y > h )
    dead = true;
  
  // make children :D
  if( this.dist <= 0 && this.width > 1 ) {
    
    // keep yo self, sometimes
    this.dist = Math.random() * ( maxDist - minDist ) + minDist;
    
    // add 2 children
    if( lines.length < maxLines ) lines.push( new Line( this ) );
    if( lines.length < maxLines && Math.random() < .5 ) lines.push( new Line( this ) );
    
    // kill the poor thing
    if( Math.random() < .2 ) dead = true;
  }
  
  ctx.strokeStyle = ctx.shadowColor = getColor( this.x );
  ctx.beginPath();
  ctx.lineWidth = this.width;
  ctx.moveTo( this.x, this.y );
  ctx.lineTo( prevX, prevY );
  ctx.stroke();
  
  if( dead ) return true
}

init();
anim();

window.addEventListener( 'resize', function() {
  
  w = c.width = window.innerWidth;
  h = c.height = window.innerHeight;
  starter.x = w / 2;
  starter.y = h / 2;
  
  init();
} )


  // Tabs for work experience

  function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }


	/*

  new WOW().init();


  	//AUTHOR LINK 
     $('.about-me-img').hover(function(){
            $('.authorWindowWrapper').stop().fadeIn('fast').find('p').addClass('trans');
        }, function(){
            $('.authorWindowWrapper').stop().fadeOut('fast').find('p').removeClass('trans');
        });

        */

/*
//try
        var viewportWidth, divWidth, tb;
	$(function() {
		
		viewport = $('#container').innerWidth();
		tb = $('#thumbs');
		divWidth = tb.outerWidth();
    
		$('#container').mousemove(function(e)
		{
      tb.css({left: ((viewport - divWidth)*((e.pageX / viewport).toFixed(3))).toFixed(1) +"px" });
 		});
    
    $('.history-block').on('click', function(){
      $('.history-block').css('width', '300px');
      $('.history-block').find('.title').css('width', '260px');
       $('.history-block .timeline').hide(300);
        $(this).css('width', '600px');
        $(this).find('.title').css('width', '500px');
       $(this).find('.timeline').show(800);
      $('#container').mousemove(function(e)
        {
          tb.css({left: ((viewport - divWidth-300)*((e.pageX / viewport).toFixed(3))).toFixed(1) + 300 + "px" });
          });
    });
    
    $('.timeline ul li').on('click', function(){
        $(this).parent().blink();
    });
}); */