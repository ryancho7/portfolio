import './App.css';
import Navbar from './components/navbar';
import Homepage from './components/homepage';
import Skills from './components/skills';
import Contact from './components/contact';
import Footer from './components/footer';
import Portfolio from './components/portfolio';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
