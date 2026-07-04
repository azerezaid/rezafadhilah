import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero"; 
import About from "./sections/About"; 
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

function App() {
  const [isUpworkClient, setIsUpworkClient] = useState(false);

  useEffect(() => {
    // Membaca ?platform=upwork dari URL browser
    const queryParams = new URLSearchParams(window.location.search);
    const platform = queryParams.get('platform');

    if (platform === 'upwork') {
      setIsUpworkClient(true);
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col scroll-smooth">
      {/* Header */}
      <Navbar />

      {/* Konten Utama */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Projects />
        
        {/* Mengirimkan status Upwork ke komponen Contact */}
        <Contact isUpworkClient={isUpworkClient} />
      </main>

      {/* Footer (Juga butuh status Upwork untuk menyembunyikan LinkedIn/Email) */}
      <Footer isUpworkClient={isUpworkClient} />
    </div>
  );
}

export default App;
