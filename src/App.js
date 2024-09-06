import './App.css';
import Nav from './Navbar/Nav';
import Intro from './Intro/Intro';
import Footer from './Footer/Footer';
import Projects from './Project/Projects';
import Connect from './Connect/Connect';

function App() {
  return (
    <div className="App">
      <Nav />
      <Intro />
      <Projects />
      <Connect />
      <Footer />
    </div>
  );
}

export default App;
