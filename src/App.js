import './App.css';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Review from './components/Review';
import Rewards from './components/Rewards';
import Skills from './components/Skills';

function App() {
  return (
    <div className="container-fluid App">
      <img className="home-background-pic" src="./images/Design.png" alt="img" />
      <img className="home-background-pic2" src="./images/Design bullet.png" alt="img" />
      <Header />
      <Home />
      <Rewards />
      <Skills />
      <Portfolio />
      <Review />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
