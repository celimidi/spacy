var ship = new Ship(600,350)
//ship.draw()
var battleStation = new BattleStation(600,350)
battleStation.draw()

var mothership = new Mothership(100,100)
mothership.draw()
const OPTS = {
    fill:           'none',
    radius:         7.5,
    strokeWidth:    { 15 : 0 },
    scale:          { 0: 1 },
    angle:          { 'rand(-35, -70)': 0 },
    duration:       500,
    left: 0,        top: 0,
    easing: 'cubic.out'
  };
  
  const circle1 = new mojs.Shape({
    ...OPTS,
    stroke:         'white',
  });
  
  const circle2 = new mojs.Shape({
    ...OPTS,
    radius:         { 0 : 4.5 },
    strokeWidth:    { 9: 0 },
    stroke:         'white',
    delay:          'rand(75, 150)'
  });
  
  document.addEventListener( 'click', function (e) {
    
     circle1
      .tune({ x: e.pageX, y: e.pageY  })
      .replay();
    
    circle2
      .tune({ x: e.pageX, y: e.pageY  })
      .replay();
    
  });