class Rect {
    constructor(w, h){
        this.w = w;
        this.h = h;
    }

    draw(){
        console.log(`Rect(w=${this.w}, h=${this.h}를 그렸습니다.)`);
    }
}

const r01 = new Rect(10 ,20);
r01.draw();

/* ================================================================== */

const Circle = function(x, y, r){
    this.x = x;
    this.y = y;
    this.r = r;
}

Circle.prototype.draw = function(){ 
    console.log(`Circle (x=${this.x}, y=${this.y}, r=${this.r} 를 그렸습니다.)`);
}

const c1 = new Circle(10,20,30);
c1.draw();

/*
    extends
*/
class Shape {
    constructor(bg, ln){
        this.bg =bg;
        this.ln = ln;
    }

    draw(){
        console.log('도형을 그릴 수 없습니다.');
    }

    area(){
        console.log('넓이를 구할 수 없습니다.');
    }
}

class Triangle extends Shape{
    constructor(bg, ln, w, h){
        super(bg, ln);
        this.w = w;
        this.h=  h;
    }
    
    draw(){
        console.log(`Triangle(bg=${this.bg}, ln=${this.ln}, w= ${this.w}, h= ${this.h})`);
    }
}
const t01 = new Triangle('red', 'yellow', 10, 5)
t01.draw()