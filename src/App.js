import logo from './logo.png';
import './App.css';
import Nav from './Navbar/Nav';
import Intro from './Intro/Intro';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Intro />
      <p id='test'>Something more is coming...</p>
      <Footer />
    </div>
  );
}

export default App;
