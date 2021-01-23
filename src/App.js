import './App.css';

import Header from './Views/Header/Header';
import About from './Views/About/About';
import Experience from './Views/Experience/Experience';
import Projects from './Views/Projects/Projects';

/* Top-level of the application */
function App() {
  return (
    <div className='App'>
      <Header />
      <About />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
