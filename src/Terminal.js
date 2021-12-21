import Terminal from 'terminal-in-react';
import React from "react";
import './Terminal.css';
import {projects} from "./data/project";
import {art} from "./data/art";

const list = ['bio.txt', 'skills.txt', 'projects.txt']; 
const bio =  ["Hello, I am Shreshth Goyal, I'm a software engineer pursuing Integrated Masters of Technology at the Indian Institute of Information Technology, Gwalior. I love solving problems and creating an impact in the community. I'm an Assiduous Developer, Cloud Enthusiast and a Melophile. Sometimes I also write blogs. I am also a regular gamer, add me on Steam, Riot and Epic. Also, I am a Space Shuttle member at Under 25's Space at IIIT Gwalior. Currently I am exploring blockchain and working on my Data Structures skills. I also compete on online coding platforms and participate in Hackathons."];
const skills = ['Sass', 'JavaScript', 'Jquery', 'ReactJS', 'ExpressJS', 'NodeJS', 'C++', 'C', 'Python', 'Scss', 'Git', 'MongoDB', 'Solidity', 'Truffle', 'Linux'];

const WebTerminal =() => {
    return (
      <div className="terminal">
             <Terminal
          color='white'
          outputColor='black'
          prompt='white'  
          backgroundColor= '#222222D9'
          promptSymbol='[~]$'
          barColor='black'
          style={{ fontWeight: "bold", fontSize: "1em", align: "center" }}
          commands={{
            popup: (r) => {const ele = r.slice(1); alert(ele)},
            ls : () => list.map(i=>`${i}`),
            back : () =>  window.history.back(),
            art : (e,print) => print(art),  
            cat : (r,print) => {
              const ele = r.slice(1);
              if(ele[0]=== "bio.txt")
              {
                print(bio.map(i=>`${i}`))
              }
              else if(ele[0]=== "skills.txt")
              {
                print(skills.map(i=>`${i}, `))
              }
              else if(ele[0]=== "projects.txt")
              {
                projects.map(i=> print(`${i.name} : ${i.desc}`) )
              }
              else
              {
                print('No such file exists')
              }
            }
          }}
          descriptions={{
            'back': 'Go back to previous page',
            popup: 'Popups string passed',
            echo : 'Outputs string passed',
            'ls' : 'Lists all files',
            'help' : 'Displays this help menu',
            'clear' : 'Clears the terminal',
            'up arrow/ down arrow' : 'Navigate to previous commans',
            'cat' : 'Reads specified file',
            'art' : 'Displays my recent art piece'
          }}
          msg='Type "help" to get started.'
          closedTitle='Oh! You closed the terminal.'
        />
        </div>
      
    )
}

export default WebTerminal;