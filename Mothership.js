class Mothership {
 
  constructor(x, y){
    this.x = x
    this.y = y
  }  

  draw(){
    var rect1 = new mojs.Shape({
      shape:        'rect',
      radius:       10,
      radiusX:      10, // explicit radiusX
      left:         '50%',
      //fill:         'white',
      isShowStart:  true,
      x:            this.x,
      y:            this.y  
    });
    
    var rect2 = new mojs.Shape({
      shape:        'rect',
      radius:       10,
      radiusX:      10, // explicit radiusX
      left:         '50%',
      //fill:         'white',
      isShowStart:  true,
      x:            this.x,
      y:            this.y,
      angle:        45
    });

    var bigCircle = new mojs.Shape({
      shape:        'circle',
      radius:       12,
      radiusX:      12, // explicit radiusX
      left:         '50%',
      fill:         'white',
      isShowStart:  true,
      x:            this.x,
      y:            this.y,
    });

    var circle1 = new mojs.Shape({
      shape:        'circle',
      radius:       2.5,
      radiusX:      2.5, // explicit radiusX
      left:         '50%',
      fill:         'white',
      isShowStart:  true,
      x:            this.x-20,
      y:            this.y-20,
    });
    
  }


}