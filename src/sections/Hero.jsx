// Pastikan foto bernama 'reza.jpg' sudah berada di folder src/assets/
import fotoReza from "../assets/reza.jpg";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-900 pt-20 md:pt-16 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        
        {/* SISI KIRI: TEKS PERKENALAN FULL STACK */}
        <div className="flex-1 text-center md:text-left flex flex-col gap-4">
          <p className="text-emerald-400 font-mono tracking-widest uppercase text-sm">
            Halo, World! Nama saya
          </p>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-100">
            Reza Fadhilah
          </h1>
          <h2 className="text-xl sm:text-2xl font-medium text-slate-400 max-w-xl leading-relaxed">
            Saya seorang <span className="text-emerald-400 font-semibold">Full Stack Developer</span> As a Full Stack Developer, I ensure your web system runs smoothly behind the scenes and is fully scalable, making it easy to integrate new features or menus anytime.
          </h2>

          {/* TOMBOL CALL TO ACTION (CTA) */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
            <a 
              href="#projects" 
              className="px-6 py-3 bg-emerald-500 text-slate-950 font-semibold rounded-lg hover:bg-emerald-400 transition-all duration-200 shadow-lg shadow-emerald-500/20"
            >
              Lihat Proyek Saya
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 bg-slate-800 border border-slate-700 text-slate-200 font-semibold rounded-lg hover:bg-slate-700 transition-all duration-200"
            >
              Hubungi Saya
            </a>
          </div>
        </div>

        {/* SISI KANAN: FOTO PROFIL DENGAN EFEK BERSINAR */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative group">
            {/* Efek gradasi bercahaya hijau-biru khas full stack modern */}
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full blur opacity-60 group-hover:opacity-90 transition duration-300"></div>
            <img 
              src={fotoReza} 
              alt="Foto Reza Fadhilah" 
              className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full object-cover border-4 border-slate-900 shadow-2xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;