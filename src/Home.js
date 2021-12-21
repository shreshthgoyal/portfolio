import './App.css';
import { Link } from 'react-router-dom';

const Home =() => {

    return (
  <div class="landscape">
  <div class="mountain"></div>
  <div class="mountain mountain-2"></div>
  <div class="mountain mountain-3"></div>
  <div class="sun-container sun-container-1">
  </div>
  <div class="sun-container">
    <div class="sun"></div>
  </div>
  <div class="cloud"></div>
  <div class="cloud cloud-1"></div>
  <div class="sun-container sun-container-reflection">
    <div class="sun"></div>
  </div>
  <div class="light"></div>
  <div class="light light-1"></div>
  <div class="light light-2"></div>
  <div class="light light-3"></div>
  <div class="light light-4"></div>
  <div class="light light-5"></div>
  <div class="light light-6"></div>
  <div class="light light-7"></div>
  <div class="water"></div>
  <div class="splash"></div>
  <div class="splash delay-1"></div>
  <div class="splash delay-2"></div>
  <div class="splash splash-4 delay-2"></div>
  <div class="splash splash-4 delay-3"></div>
  <div class="splash splash-4 delay-4"></div>
  <div class="splash splash-stone delay-3"></div>
  <div class="splash splash-stone splash-4"></div>
  <div class="splash splash-stone splash-5"></div>
  <div class="lotus lotus-1"></div>
  <div class="lotus lotus-2"></div>
  <div class="lotus lotus-3"></div>
  <div class="front">
    <div class="stone"></div>
    <div class="grass"></div>
    <div class="grass grass-1"></div>
    <div class="grass grass-2"></div>
    <div class="reed"></div>
    <div class="reed reed-1"></div>
  </div>
  <section class="text">
  <div class="hero-container">
    <h2 class="hero glitch layers" data-text="Hi"><span class="head">Hey! <br /> I'm Shreshth Goyal</span></h2>
  </div>
<Link to="/portfolio" class="cta two">
  <span class="link">Check my portfolio!</span>
</Link>
  <Link to="/terminal" class="cta term">
  <span class="link">Terminal user?</span>
</Link>
</section>
</div>

    //     <div className="App">
    //        <div class="blur"></div>
    // <div class="main" id="main">
    //     <h1 class="title">PARTICLES</h1>
    // </div>
    // <div class="particles" id="particles"></div>

    /* <header className="App-header ">
      <div class="text">
        <h4>Hi</h4>
      <Link to="/portfolio">  
        <button className="know-button">
        <AiOutlineLayout />   
        &nbsp;Get to know me.
        </button>
        </Link>
        <Link to="/terminal">  
        <button className="ter-button">
        <CgTerminal />   
        &nbsp;Open Portfolio in Terminal
        </button>
        </Link>
      </div>
      </header> */
        // </div>
    )
}

export default Home;