import "./About.css";
import React from "react";
import {Link} from "react-router-dom";

class About extends React.Component {

  openEnvelope = function() {
    document.querySelector(".envelope-opening").classList.toggle("open-envelope");
    document.querySelector(".envelope-message").classList.toggle("push-message");
    document.querySelector(".envelope-shadow").classList.toggle("envelope-glow");
    document.querySelector(".envelope-message-area").classList.toggle("envelope-msg-area-show");
  };

  showMessage = function() {
    document.querySelector(".display-message").classList.add("view-message");
    document.querySelector(".quote").style.fontSize = "20px";
    document.querySelector(".author").style.fontSize = "16px";
  };

  closeMessage = function() {
    document.querySelector(".display-message").classList.remove("view-message");
    document.querySelector(".quote").style.fontSize = "0";
    document.querySelector(".author").style.fontSize = "0";
  };
  
  render() {
    return (
<div class= "body" data-aos="zoom-in">
<div class="envelope-area" onClick={this.openEnvelope}></div>
    <div class="envelope-back"></div>
    <div class="envelope-message">
      <p class="small-quote">About Me.</p>
    </div>
    <div class="envelope-message-area" onClick={this.showMessage}></div>
    <div class="envelope-opening"></div>
    <div class="envelope-front"></div>
    <div class="envelope-shadow"></div>
    <div class="display-message">
      <Link class="close-message" to="" onClick={this.closeMessage}><i class="fa fa-times-circle" aria-hidden="true"></i></Link>
      <div class="quote-information">
        <h1 class="quote"> I'm a software engineer pursuing Integrated Masters of Technology at the Indian Institute of Information Technology, Gwalior. I love solving problems and creating an impact in the community. Sometimes I also write blogs. Currently I am exploring blockchain and working on my Data Structures skills. I also compete on online coding platforms and participate in Hackathons.</h1>
        <p class="author">&mdash;&nbsp;Shreshth Goyal</p>
      </div>
    </div>
</div>

    )}
}

export default About;