import { makeAutoObservable } from "mobx";

class ToolState{
    tool = null
    constructor(){
        makeAutoObservable(this) //  данная функция для отслеживания данных класса , реакт при изменении делалет ререндеринг
    }

    setTool(tool){
        this.tool = tool;  //экшен функция (потому что изменяет состояние )
    }

    setFillColor(color){
        this.tool.fillColor = color;  //экшен функция (потому что изменяет состояние )
    }

    setStrokeColor(color){
        this.tool.strokeColor = color;  //экшен функция (потому что изменяет состояние )
    }

    setLineWidth(width){
        this.tool.lineWidth = width;  //экшен функция (потому что изменяет состояние )
    }
}

export default new ToolState()