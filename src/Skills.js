import "./Skills.css";

const Skills = () => {
    return (
        <section class="section">
        <div class="wall">
          <div class="v-boxes">
            <div class="box">
              <span class="tooltip">SCSS</span>
              <div class="box-face">
                <div class="box-text"><i class="fab fa-sass"></i></div>
              </div>
              <div class="box-back">
              </div>
            </div>
            <div class="box">
              <span class="tooltip">JavaScript</span>
              <div class="box-face">
                <div class="box-text"><i class="fab fa-js-square"></i></div>
              </div>
              <div class="box-back">
              </div>        
            </div>
            <div class="box">
              <span class="tooltip">React</span>
              <div class="box-face">
                <div class="box-text"><i class="fab fa-react"></i></div>
              </div>
              <div class="box-back">
              </div>
            </div>
            <div class="box">
              <span class="tooltip">Solidity</span>
              <div class="box-face">
                <div class="box-text"><i class="fab fa-ethereum"></i></div>
              </div>
              <div class="box-back">
              </div>
            </div>
          </div>
          <div class="v-boxes second">
            <div class="box">
              <span class="tooltip">C++</span>
              <div class="box-face">
                <div class="box-text">
                  <img src="https://isocpp.org/assets/images/cpp_logo.png" class="cpp" alt="" />
                </div>
              </div>
              <div class="box-back">
              </div>
            </div>
            <div class="box">
              <span class="tooltip">Python</span>
              <div class="box-face">
                <div class="box-text"><i class="fab fa-python"></i></div>
              </div>
              <div class="box-back">
              </div>
            </div>
            <div class="box">
              <span class="tooltip">NodeJs</span>
              <div class="box-face">
                <div class="box-text"><i class="fab fa-node"></i></div>
              </div>
              <div class="box-back">
              </div>
            </div>
          </div>
          <div class="v-boxes third">
            <div class="box">
              <span class="tooltip">ExpressJS</span>
              <div class="box-face">
                <div class="box-text"><i class="fab fa-node-js"></i></div>
              </div>
              <div class="box-back">
              </div>
            </div>
            <div class="box">
              <span class="tooltip">Linux</span>
              <div class="box-face">
                <div class="box-text"><i class="fab fa-linux"></i></div>
              </div>
              <div class="box-back">
              </div>
            </div>
            <div class="box">
              <span class="tooltip">Git</span>
              <div class="box-face">
                <div class="box-text"><i class="fab fa-git-alt"></i></div>
              </div>
              <div class="box-back">
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Skills;