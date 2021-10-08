import React from 'react';
import SettingBar from './components/SettingBar';
import Toolbar from './components/Toolbar';
import Canvas from './components/Canvas';
import './style/app.scss';

function App() 
{
  return(
    <div className="app">
      <Toolbar />
      <SettingBar />
      <Canvas />
    </div>
  )

}


export default App;
