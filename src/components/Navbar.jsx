import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Nama */}
          <div className="flex-shrink-0">
            <a href="#" className="text-xl font-bold tracking-wider text-emerald-400 font-mono">
              RF
            </a>
          </div>

          {/* Menu Desktop (Akan sembunyi di HP) */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8 text-sm font-medium">
              <a href="#" className="hover:text-emerald-400 transition-colors">Home</a>
              <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
              <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
            </div>
          </div>

          {/* Tombol Menu Mobile / HP */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile Dropdown (Muncul saat tombol diklik di HP) */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-base font-medium flex flex-col">
            <a href="#" onClick={() => setIsOpen(false)} className="hover:bg-slate-800 hover:text-emerald-400 px-3 py-2 rounded-md">Home</a>
            <a href="#about" onClick={() => setIsOpen(false)} className="hover:bg-slate-800 hover:text-emerald-400 px-3 py-2 rounded-md">About</a>
            <a href="#projects" onClick={() => setIsOpen(false)} className="hover:bg-slate-800 hover:text-emerald-400 px-3 py-2 rounded-md">Projects</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="hover:bg-slate-800 hover:text-emerald-400 px-3 py-2 rounded-md">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;