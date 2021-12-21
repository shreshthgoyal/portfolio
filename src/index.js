import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MouseParticles from "react-mouse-particles";
import { Dots } from 'react-preloaders2';
import AnimatedCursor from "react-animated-cursor"

ReactDOM.render(
  <React.Fragment>
    <App />
    <Dots animation="slide-down" />
    <MouseParticles
          g={1}
          color="random"
          cull="MuiSvgIcon-root,MuiButton-root"
          level={6}
        />
      <AnimatedCursor
      innerSize={8}
      outerSize={8}
      color='193, 11, 111'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      />
  </React.Fragment>,
  document.getElementById('root')
);

console.clear();
console.log(`                                                   
______███████████████████████
______█████████████████████████                  
______███████████████████████__██                     
____▒░██████████████████████____██
___▒░░████████████████████▒▒____██
__▒▒░░███████████████████▒░▒___██
__▒░░░▒█████████████████▒░░▒__██
_▒▒░░░░▒███████████████▒░░▒_██                            %cHeyy! If you found this you are curious enough to know me.%c
▒░▒░░░░░▒█████████████▒░░░▒█                              %cLet's meet for a coffee.%c
▒▒░▒▒░░░▒▒███████████▒░░▒▒                                %cElse contact me or buy me coffee ツ .%c
▒▒░░▒▒░░░▒███████████▒▒░░
▒░▒▒░░▒▒░░░░▒▒░░░░░░░░▒▒
▒▒░░▒░░▒▒░░░░▒░░░░░░░▒▒
▒▒▒░░▒░░▒▒░░░░░░░░░░▒▒
_▒░▒░░░▒▒░░░░░░░░░░▒▒
__▒░▒░░░▒░░░░░░░░░░▒▒
___▒░▒▒░░░░░░░░░░░░▒▒
____▒░▒▒░░░░░░░░░░░▒▒
______▒▒░░░░░░░░░░░▒▒
_______▒▒░░░░░░░░░░▒▒
________▒▒░░░░░░░░░▒▒
_________▒▒░░░░░░░░▒▒
_________▒▒░░░░░░░░▒▒
_________▒▒░░░░░░░░▒▒

`,"color:blue; font-size:11px ; font-weight:bold","color:white","color:blue; font-size:11px;font-weight:bold","color:white","color:blue; font-size:11px;font-weight:bold","color:white")
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
