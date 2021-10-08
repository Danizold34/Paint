import React from "react";
import toolState from "../store/toolState";
import "../style/toolbar.scss"
const SettingBar = () => {
return (
 <div className="setting-bar" >
     <label htmlFor="line-width">Толщина Линии</label>
     <input
      onChange ={e => toolState.setLineWidth(e.target.value)}
      style={{margin:' 0 10px'}}
      id ="line-width"
      type="number"
      defaultValue={1} min={1} max={60} />

<label htmlFor="stroke-color">Цвет обводки</label> 
<input 
    onChange={e => toolState.setStrokeColor(e.target.value)} 
    id="stroke-color" type='color' 
    style={{margin: "0 10px"}} />
 </div>

)
}
export default SettingBar;