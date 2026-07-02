import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero"; 
import About from "./sections/About"; 
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col scroll-smooth">
      {/* Header */}
      <Navbar />

      {/* Konten Utama */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Projects />
        <Contact />
        {/* Nanti section About, Projects, dll akan ditaruh di bawahnya */}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;