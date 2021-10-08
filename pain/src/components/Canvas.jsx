import { observer } from "mobx-react-lite";
import React ,{ useEffect , useRef } from "react";
import canvasState from "../store/canvasState";
import toolState from "../store/toolState";
import "../style/canvas.scss"
import Brush from "../tools/Brush";


const Canvas= observer( () => { 

    const canvasRef = useRef();


    useEffect(() => {
        canvasState.setCanvas(canvasRef.current)
        toolState.setTool(new Brush(canvasRef.current))
    }, []);

    const mouseDownhandler= ()=> {
        canvasState.pushToUndo(canvasRef.current.toDataURL())
    } 

    return(
    <div className="canvas">
        <canvas onMouseDown={()=>mouseDownhandler() } ref={canvasRef} width={600} height={400} /> 
    </div>
        )
   }
);

// для отслеживания изменений состояния и вызова ререндеринга
export default Canvas
