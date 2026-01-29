import { DarkModeProvider } from './context/DarkModeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <DarkModeProvider>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <Timeline />
        <About />
        <Projects />
        <Contact />
      </div>
    </DarkModeProvider>
  );
}

export default App;
