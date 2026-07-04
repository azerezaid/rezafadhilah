import React from 'react';

function Footer({ isUpworkClient }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-gray-400 py-8 border-t border-slate-900 w-full mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">

        <div className="text-sm font-sans tracking-wide">
          &copy; {currentYear} <span className="text-emerald-400 font-medium">Reza Fadhilah</span>. All rights reserved.
        </div>

        <div className="flex space-x-6 text-sm font-medium">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noreferrer" 
            className="hover:text-emerald-400 transition-colors duration-200"
          >
            GitHub
          </a>

          {!isUpworkClient && (
            <>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-emerald-400 transition-colors duration-200"
              >
                LinkedIn
              </a>
              <a 
                href="mailto:reza@fadhilah.dev" 
                className="hover:text-emerald-400 transition-colors duration-200"
              >
                Email
              </a>
            </>
          )}
        </div>

      </div>
    </footer>
  );
}

export default Footer;
