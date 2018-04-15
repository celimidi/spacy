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
      fill:         'white',
      isShowStart:  true,
      x:            this.x,
      y:            this.y  
    });
    
    var rect2 = new mojs.Shape({
      shape:        'rect',
      radius:       10,
      radiusX:      10, // explicit radiusX
      left:         '50%',
      fill:         'white',
      isShowStart:  true,
      x:            this.x,
      y:            this.y,
      angle:        45
    });

    var circle1 = new mojs.Shape({
      shape:        'circle',
      radius:       2.5,
      radiusX:      1, // explicit radiusX
      left:         '50%',
      fill:         'white',
      isShowStart:  true,
      x:            this.x-7,
      y:            this.y-16,
      angle:        70
    });

    var circle2 = new mojs.Shape({
      shape:        'circle',
      radius:       2.5,
      radiusX:      1, // explicit radiusX
      left:         '50%',
      fill:         'white',
      isShowStart:  true,
      x:            this.x+7,
      y:            this.y-16,
      angle:        115
    });

    var circle3 = new mojs.Shape({
      shape:        'circle',
      radius:       2.5,
      radiusX:      1, // explicit radiusX
      left:         '50%',
      fill:         'white',
      isShowStart:  true,
      x:            this.x+16,
      y:            this.y-7,
      angle:        160
    });
    
    var circle3 = new mojs.Shape({
      shape:        'circle',
      radius:       2.5,
      radiusX:      1, // explicit radiusX
      left:         '50%',
      fill:         'white',
      isShowStart:  true,
      x:            this.x+16,
      y:            this.y+7,
      angle:        205
    });

    var circle3 = new mojs.Shape({
      shape:        'circle',
      radius:       2.5,
      radiusX:      1, // explicit radiusX
      left:         '50%',
      fill:         'white',
      isShowStart:  true,
      x:            this.x+7,
      y:            this.y+16,
      angle:        250
    });

    var circle3 = new mojs.Shape({
      shape:        'circle',
      radius:       2.5,
      radiusX:      1, // explicit radiusX
      left:         '50%',
      fill:         'white',
      isShowStart:  true,
      x:            this.x-7,
      y:            this.y+16,
      angle:        295
    });

    var circle3 = new mojs.Shape({
      shape:        'circle',
      radius:       2.5,
      radiusX:      1, // explicit radiusX
      left:         '50%',
      fill:         'white',
      isShowStart:  true,
      x:            this.x-16,
      y:            this.y+7,
      angle:        340
    });

    var circle3 = new mojs.Shape({
      shape:        'circle',
      radius:       2.5,
      radiusX:      1, // explicit radiusX
      left:         '50%',
      fill:         'white',
      isShowStart:  true,
      x:            this.x-16,
      y:            this.y-7,
      angle:        25  
    });
    
  }


}