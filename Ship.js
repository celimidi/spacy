class Ship {
 
    constructor(x, y){
      this.x = x
      this.y = y
    }  
  
    burst(){
        const burst = new mojs.Burst({
            radius:   { 25 : 75 },
            count:    10,
            
            duration: 2000,
            onComplete () {
            console.log( 'completed' );
            },
            children: {
            // property map - maps over children with mod function
            shape: [ 'circle', 'polygon' ],
            // property map - maps over children with mod function
            fill:  [ '#333', 'magenta', 'purple' ],
            angle: { 0: 180 },
            // rand string - generates random value for every child rand( min, max )
            degreeShift: 'rand(-360, 360)',
            // stagger string( start, step ) for every child
            delay: 'stagger(0, 25)',
            }
        });
        burst.play()
            }
  }