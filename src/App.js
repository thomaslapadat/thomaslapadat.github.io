import './App.css';

import Header from './Views/Header/Header';
import About from './Views/About/About';
import Experience from './Views/Experience/Experience';
import Projects from './Views/Projects/Projects';
import Footer from './Views/Footer/Footer';

/* Top-level of the application */
function App() {
  return (
    <div className='App'>
      <Header />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
