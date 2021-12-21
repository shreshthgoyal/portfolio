import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import WebTerminal from './Terminal';
import Portfolio from './Portfolio';
import Home from './Home';
import Blog from './Blog';
import Project from './Project';
import Profile from './Profile';
import Skills from './Skills';
import About from './About';
import './App.css';

function App() {
  return (
  <Router>
    <div className="App">
    <Routes>
    <Route exact path='/' element={<Home />}></Route>
      <Route exact path='/terminal' element={<WebTerminal />}></Route>
      <Route exact path='/portfolio' element={<Portfolio />}></Route>
      <Route exact path='/blog' element={<Blog />}></Route>
      <Route exact path='/project' element={<Project />}></Route>
      <Route exact path='/profile' element={<Profile />}></Route>
      <Route exact path='/skills' element={<Skills />}></Route>
      <Route exact path='/about' element={<About />}></Route>
</Routes>
</div>
  </Router>
  );
  }

export default App;
