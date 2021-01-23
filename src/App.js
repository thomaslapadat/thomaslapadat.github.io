import './App.css';

import Header from './Views/Header/Header';
import About from './Views/About/About';
import Experience from './Views/Experience/Experience';

/* Top-level of the application */
function App() {
  return (
    <div className='App'>
      <Header />
      <About />
      <Experience />
    </div>
  );
}

export default App;
