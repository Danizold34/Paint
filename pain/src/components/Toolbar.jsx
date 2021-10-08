import React from "react";
import canvasState from "../store/canvasState";
import toolState from "../store/toolState";
import "../style/toolbar.scss"
import Brush from "../tools/Brush";
import Circle from "../tools/Circle";
import Line from "../tools/Line";
import Rect from "../tools/Rect";
import Redo from "../tools/Redo";
const Toolbar = () => {

const changeColor = e =>{
    toolState.setStrokeColor(e.target.value)
    toolState.setFillColor(e.target.value)
}

    return(
        <div className="toolbar">
            <button className="toolbar_btn brush" onClick={ ()=> toolState.setTool(new Brush(canvasState.canvas))} />
            <button className="toolbar_btn rect" onClick={ ()=> toolState.setTool(new Rect(canvasState.canvas))} /> 
            <button className="toolbar_btn circle" onClick={ ()=> toolState.setTool(new Circle(canvasState.canvas))} /> 
            <button className="toolbar_btn eraser"  onClick={ ()=> toolState.setTool(new Redo(canvasState.canvas))} /> 
            <button className="toolbar_btn line"  onClick={ ()=> toolState.setTool(new Line(canvasState.canvas))}  /> 
            <input  onChange ={e => changeColor(e)} style={{marginLeft:10}} type="color" />
            <button className="toolbar_btn undo"   onClick={ ()=>  canvasState.undo()} /> 
            <button className="toolbar_btn redo" onClick={ ()=>  canvasState.redo()}   /> 
          

        </div>
    )
}
export default Toolbar