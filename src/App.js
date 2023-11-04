import './App.css';
import { useSelector } from 'react-redux';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Modal from './components/Modal';
import Portfolio from './components/Portfolio';
import Review from './components/Review';
import Rewards from './components/Rewards';
import Skills from './components/Skills';

function App() {
  const { isOpen } = useSelector((store) => store.modal);
  const { projects } = useSelector((store) => store.slide);
  const {
    id, title, description, image,
  } = useSelector((store) => store.slide);
  return (
    <div className="container-fluid App">
      <img className="home-background-pic" src="./images/Design.png" alt="img" />
      <img className="home-background-pic2" src="./images/Design bullet.png" alt="img" />
      {isOpen && (
        <Modal
          isOpen={isOpen}
          id={id}
          title={title}
          description={description}
          image={image}
        />
      )}

      <Header />
      <Home />
      <Rewards />
      <Skills />
      <Portfolio projects={projects} />
      <Review />
      {/* <Contact /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
