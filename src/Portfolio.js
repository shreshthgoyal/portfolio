import Blog from "./Blog";
import Project from "./Project";
import Profile from "./Profile";
import Skills from "./Skills";
import About from "./About";
import "./Portfolio.css"
import React from 'react';


class Portfolio extends React.Component {

	constructor(props) {
        super(props)
        this.myRef = React.createRef()  
    }
	handleClick = () => {
		var trigger = document.querySelector('.btn--trigger');
                  trigger.classList.add('btn--hidden');
				  document.querySelector('.name').classList.add('ani');
				  document.querySelector('.segmenter').classList.add('zoom');
				  document.querySelector('.scroll').classList.add('down');
				  document.querySelector('.scroll').classList.add('ani');
			};
	scroll = () => {
		document.body.style.overflowY = 'scroll';
		document.querySelector('.body').scrollIntoView();
	}

	

	render() {
return (
    <div className="portfolio">
        	<div className="segmenter" ></div>
			<h3 className="trigger-headline  name" id="name"> 
            Shreshth
            </h3>
			<div className="bottom-nav">
				<button className="btn btn--trigger" onClick={this.handleClick}>Let's Begin</button>
				<div className="scroll-down scroll" onClick={this.scroll}></div>
			</div>
	  <About />
	  <Skills />
	  <Project />
	  <Blog />
	  <Profile />
    </div>
)
}}

export default Portfolio;

