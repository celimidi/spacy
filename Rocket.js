class Rocket {
 
    constructor(start, end){
      this.start = start
      this.end = end
    }  
  
    draw(){
        const LINE1_DURATION = 400;

const rocket = new mojs.Shape({
  shape:      'rect',
  fill:       'white',
  radius:     2,
  radiusX:    5,
  x:          { [this.start.x]: this.end.x },
  y:          { [this.start.y]: this.end.y },
  duration:   7*LINE1_DURATION,
  easing:     'cubic.out',
  angle:       this.getAngle()
});

const trailOpts = {
  parent:     rocket.el,
  fill:       'none',
  stroke:     'white',
  shape:      'line',
  radiusY:    0,
  radiusX:    10,
  strokeDasharray:  '100%',
  strokeDashoffset: {'100%': '0%'},
  angle:        this.getAngle()-130,
  duration:     LINE1_DURATION/2,
  strokeWidth:  { 6: 2 },
  isShowStart:  true,
  easing:       'cubic.out',
  opacity:      .75,
  y:           -4,
  left:        -22,
  
}

const trail2Opts = {
  ...trailOpts,
  radiusX:  4,
  left:    -15,
  y:        3
}

const trail1 = new mojs.Shape(trailOpts)
  .then({
    duration: LINE1_DURATION/5,
  });

const trail2 = new mojs.Shape(trail2Opts)
.then({
  duration: LINE1_DURATION/6,
});

const timeline = new mojs.Timeline({ delay: 500 });

timeline
  .add(
    rocket,
    trail1, trail2
  );

timeline.play()
    }

    getAngle(){
       var angle = Math.atan((this.end.y-this.start.y)/(this.end.x-this.start.y))
       return ((angle/(2*Math.PI))*360.0 )-90
    }

  }