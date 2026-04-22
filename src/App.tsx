import Navigation from './Navigation';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  return (
    <div className="relative">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-br from-[#0a0a0a] via-[#0d1117] to-[#0a0a0a]"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[120px]"></div>
        </div>
      </div>

      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />

      <footer className="py-8 text-center text-gray-400 border-t border-white/10">
        <div className="container mx-auto px-6">
          <p className="font-mono text-sm">
            © {new Date().getFullYear()} Amit Saini. Crafted with passion and code.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
