import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
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
  document.getElementById('root'),
console.log = console.warn = console.error = () => {}
);

console.clear();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
