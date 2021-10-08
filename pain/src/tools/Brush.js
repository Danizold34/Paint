import Tool from "./Tools";

export default class Brush extends Tool{
        constructor(canvas){
            super(canvas)  // call constructor parent`s class
            this.listen();
        }

        listen(){

            this.canvas.onmousemove = this.mouseMoveHandler.bind(this)
            this.canvas.onmousedown = this.mouseDownHandler.bind(this)
            this.canvas.onmouseup = this.mouseUpHandler.bind(this)

        }

        mouseUpHandler(e){
            this.mouseDown = false;
        }
        mouseDownHandler(e){
            this.mouseDown = true;
            this.ctx.beginPath(); // begin draw
            this.ctx.moveTo(e.pageX - e.target.offsetLeft , e.pageY - e.target.offsetTop ); // cursor moving
        }
        mouseMoveHandler(e){
            if(this.mouseDown){
                this.draw(e.pageX - e.target.offsetLeft , e.pageY - e.target.offsetTop); // cursor coordinate 
            }
        }
        draw(x,y){
            this.ctx.lineTo(x,y)
            this.ctx.stroke()
            console.log('work!!!')


        }

}