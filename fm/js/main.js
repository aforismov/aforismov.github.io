var s, p, width, height;

setParams();
s = Snap(width, height);
draw();

window.addEventListener('resize', function(){
	setParams();
	resize();
});

function setParams() {
	if(window.innerWidth > window.innerHeight) {
		p = window.innerHeight/10;
		width = window.innerWidth + p;
		height = window.innerHeight;
	} else {
		p = window.innerWidth/10;
		width = window.innerWidth;
		height = window.innerHeight + p;
	}
}

function resize() {
	s.animate({width, height}, 0);
	draw();
}

function draw() {
	s.clear();
	for (var i = 0; i < height/p; i++) {
		for (var k = 0; k < width/p; k++) {
			rand = Math.floor(Math.random() * (6 - 1) + 1);
			var str = '';
			if(rand == 1) {
				str = 'rgba(0, 0, 125, .4)'
			} else if(rand == 2) {
				str = 'rgba(0, 0, 75, .5)'
			} else if(rand == 3) {
				str = 'rgba(0, 0, 55, .7)'
			} else if(rand == 4) {
				str = 'rgba(0, 0, 25, .9)'
			} else if(rand == 5) {
				str = 'rgba(0, 0, 0, 1)'
			}
			rect = s.rect(k*p, i*p, p, p).attr({
				fill: str != '' ? str : '#000',
				stroke: "rgba(0, 0, 20, 1)",
				strokeWidth: 2
			});
		}
	}
}
