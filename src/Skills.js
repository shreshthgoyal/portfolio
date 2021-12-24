import "./Skills.css";

const Skills = () => {
    return (
        <div className="section" data-aos="flip-left">
  <h2 className="heading">Skills</h2>
        <div className="wall">
          <div className="v-boxes">
            <div className="box">
              <span className="tooltip">SCSS</span>
              <div className="box-face">
                <div className="box-text"><i className="fab ico fa-sass"></i></div>
              </div>
              <div className="box-back">
              </div>
            </div>
            <div className="box">
              <span className="tooltip">JavaScript</span>
              <div className="box-face">
                <div className="box-text"><i className="fab ico fa-js-square"></i></div>
              </div>
              <div className="box-back">
              </div>        
            </div>
            <div className="box">
              <span className="tooltip">React</span>
              <div className="box-face">
                <div className="box-text"><i className="fab ico fa-react"></i></div>
              </div>
              <div className="box-back">
              </div>
            </div>
            <div className="box">
              <span className="tooltip">Solidity</span>
              <div className="box-face">
                <div className="box-text"><i className="fab ico fa-ethereum"></i></div>
              </div>
              <div className="box-back">
              </div>
            </div>
          </div>
          <div className="v-boxes second">
            <div className="box">
              <span className="tooltip">C++</span>
              <div className="box-face">
                <div className="box-text">
                  <img src="https://i.ibb.co/bFFhpCw/div-class-environmentdiv.png" className="cpp" alt="" />
                </div>
              </div>
              <div className="box-back">
              </div>
            </div>
            <div className="box">
              <span className="tooltip">Python</span>
              <div className="box-face">
                <div className="box-text"><i className="fab ico fa-python"></i></div>
              </div>
              <div className="box-back">
              </div>
            </div>
            <div className="box">
              <span className="tooltip">NodeJs</span>
              <div className="box-face">
                <div className="box-text"><i className="fab ico fa-node"></i></div>
              </div>
              <div className="box-back">
              </div>
            </div>
          </div>
          <div className="v-boxes third">
            <div className="box">
              <span className="tooltip">ExpressJS</span>
              <div className="box-face">
                <div className="box-text"><i className="fab ico fa-node-js"></i></div>
              </div>
              <div className="box-back">
              </div>
            </div>
            <div className="box">
              <span className="tooltip">Linux</span>
              <div className="box-face">
                <div className="box-text"><i className="fab ico fa-linux"></i></div>
              </div>
              <div className="box-back">
              </div>
            </div>
            <div className="box">
              <span className="tooltip">Git</span>
              <div className="box-face">
                <div className="box-text"><i className="fab ico fa-git-alt"></i></div>
              </div>
              <div className="box-back">
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Skills;