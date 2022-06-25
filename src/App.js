import './App.css';

import Header from './Views/Header/Header';
import About from './Views/About/About';
import Experience from './Views/Experience/Experience';
import Projects from './Views/Projects/Projects';
import Footer from './Views/Footer/Footer';
import Contact from './Views/Contact/Contact';

/* Top-level of the application */
function App() {
  return (
    <div className='App'>
      <Header />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
