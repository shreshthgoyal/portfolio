import './App.css';
import { Link } from 'react-router-dom';

const Home =() => {

    return (
  <div className="landscape">
  <div className="mountain"></div>
  <div className="mountain mountain-2"></div>
  <div className="mountain mountain-3"></div>
  <div className="sun-container sun-container-1">
  </div>
  <div className="sun-container">
    <div className="sun"></div>
  </div>
  <div className="cloud"></div>
  <div className="cloud cloud-1"></div>
  <div className="sun-container sun-container-reflection">
    <div className="sun"></div>
  </div>
  <div className="light"></div>
  <div className="light light-1"></div>
  <div className="light light-2"></div>
  <div className="light light-3"></div>
  <div className="light light-4"></div>
  <div className="light light-5"></div>
  <div className="light light-6"></div>
  <div className="light light-7"></div>
  <div className="water"></div>
  <div className="splash"></div>
  <div className="splash delay-1"></div>
  <div className="splash delay-2"></div>
  <div className="splash splash-4 delay-2"></div>
  <div className="splash splash-4 delay-3"></div>
  <div className="splash splash-4 delay-4"></div>
  <div className="splash splash-stone delay-3"></div>
  <div className="splash splash-stone splash-4"></div>
  <div className="splash splash-stone splash-5"></div>
  <div className="lotus lotus-1"></div>
  <div className="lotus lotus-2"></div>
  <div className="lotus lotus-3"></div>
  <div className="front">
    <div className="stone"></div>
    <div className="grass"></div>
    <div className="grass grass-1"></div>
    <div className="grass grass-2"></div>
    <div className="reed"></div>
    <div className="reed reed-1"></div>
  </div>
  <section className="text">
  <div className="hero-container">
    <h2 className="hero glitch layers" data-text="Hi"><span className="head">Hey! <br /> I'm Shreshth Goyal</span></h2>
  </div>
<Link to="/portfolio" className="cta two">
  <span className="link">Check my portfolio!</span>
</Link>
  <Link to="/terminal" className="cta term">
  <span className="link">Terminal user?</span>
</Link>
</section>
</div>

    //     <div className="App">
    //        <div className="blur"></div>
    // <div className="main" id="main">
    //     <h1 className="title">PARTICLES</h1>
    // </div>
    // <div className="particles" id="particles"></div>

    /* <header className="App-header ">
      <div className="text">
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