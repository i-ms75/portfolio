import { PhilosophyProvider } from './context/PhilosophyContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <PhilosophyProvider>
      <div className="min-h-screen bg-charcoal-950">
        <Navbar />
        <main>
          <Hero />
          <About />
          <TechStack />
          <Projects />
        </main>
        <Footer />
      </div>
    </PhilosophyProvider>
  );
}

export default App;
