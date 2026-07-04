function Projects() {
  // Ini adalah Mock Data (Data kerangka). 
  // Nanti jika gambarnya sudah ada, kamu tinggal ganti string kosong "" menjadi import gambar.
  const myProjects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Membangun aplikasi toko online dengan performa tinggi. Backend mengelola inventaris dan transaksi, sementara frontend menangani pengalaman belanja yang interaktif.",
      tech: ["Laravel", "React.js", "PostgreSQL"],
      image: "", // <--- Tempat gambar nanti
      liveLink: "#",
      githubLink: "#",
    },
    {
      id: 2,
      title: "Enterprise Dashboard Application",
      description: "Aplikasi panel kendali internal untuk manajemen data perusahaan, visualisasi grafik real-time, dan manajemen hak akses pengguna (RBAC).",
      tech: ["Vue.js", "Laravel", "MariaDB"],
      image: "", // <--- Tempat gambar nanti
      liveLink: "#",
      githubLink: "#",
    },
    {
      id: 3,
      title: "Data Scraping & Analysis Bot",
      description: "Sistem otomatisasi untuk mengambil data dari berbagai platform web, membersihkan data tersebut, dan menyediakannya dalam bentuk RESTful API.",
      tech: ["Python", "Flask", "PostgreSQL"],
      image: "", // <--- Tempat gambar nanti
      liveLink: "#",
      githubLink: "#",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-slate-900 text-white border-t border-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* JUDUL SECTION */}
        <div className="text-center md:text-left mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Featured <span className="text-emerald-400">Projects</span>
          </h2>
          <p className="text-slate-400 mt-2 text-lg">
            Here are some of the real-world applications I have designed and developed.
          </p>
          <div className="h-1 w-20 bg-emerald-400 mt-3 mx-auto md:mx-0 rounded-full"></div>
        </div>

        {/* GRID CARD PROYEK */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {myProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-slate-950 rounded-xl overflow-hidden border border-slate-800 flex flex-col hover:translate-y-[-4px] hover:border-slate-700 transition-all duration-300 shadow-xl"
            >
              {/* FRAME GAMBAR SEMENTARA (PLACEHOLDER) */}
              <div className="w-full h-48 bg-slate-800 flex items-center justify-center text-slate-500 font-mono text-sm border-b border-slate-800">
                <span>[ Gambar Proyek Belum Dipasang ]</span>
              </div>

              {/* KONTEN PENJELASAN PROYEK */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Judul */}
                <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-emerald-400">
                  {project.title}
                </h3>
                
                {/* Deskripsi */}
                <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Tech Tags / Badge */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((t, idx) => (
                    <span 
                      key={idx} 
                      className="px-2.5 py-0.5 bg-slate-900 border border-slate-800 rounded text-xs font-medium text-emerald-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* TOMBOL AKSI (Live Demo & Source Code) */}
                <div className="flex items-center justify-between gap-4 pt-4 border-t border-slate-900 mt-auto">
                  <a 
                    href={project.githubLink}
                    className="text-sm font-semibold text-slate-300 hover:text-emerald-400 flex items-center gap-1 transition-colors"
                  >
                    Source Code &rarr;
                  </a>
                  <a 
                    href={project.liveLink}
                    className="px-3 py-1.5 bg-emerald-500/10 hover:bg-emerald-500 text-emerald-400 hover:text-slate-950 font-medium text-xs rounded transition-all"
                  >
                    Live Demo
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;