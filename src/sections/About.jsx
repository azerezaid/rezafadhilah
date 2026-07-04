function About() {
  // Data keahlian dikelompokkan agar rapi dan mudah dirawat jika nanti ada tambahan
  const skills = [
    {
      category: "Frontend Ecosytem",
      items: ["React.js", "Vue.js", "JavaScript (ES6+)", "Tailwind CSS"],
      color: "from-cyan-500 to-blue-500",
    },
    {
      category: "Backend Engineering",
      items: ["Laravel (PHP)", "Python", "RESTful API"],
      color: "from-red-500 to-amber-500",
    },
    {
      category: "Database Systems",
      items: ["PostgreSQL", "MariaDB", "MySQL"],
      color: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <section id="about" className="py-24 bg-slate-950 text-white border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* JUDUL UTAMA SECTION */}
        <div className="text-center md:text-left mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Tentang Saya & <span className="text-emerald-400">Keahlian</span>
          </h2>
          <div className="h-1 w-20 bg-emerald-400 mt-3 mx-auto md:mx-0 rounded-full"></div>
        </div>

        {/* KONTEN UTAMA: GRID ANTARA NARASI DAN TECH STACK */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* SISI KIRI: DESKRIPSI DIRI (5 Kolom) */}
          <div className="lg:col-span-5 space-y-4 text-slate-400 leading-relaxed text-lg text-center md:text-left">
            <p>
              I am a Full Stack Developer passionate about solving complex problems through clean, efficient, and maintainable code."
            </p>
            <p>With hands-on experience managing end-to-end application lifecycles, I bridge the gap between robust <span className="text-slate-200 font-medium">backend</span> architectures and highly interactive<span className="text-slate-200 font-medium">frontends.</span>"
            </p>
          </div>

          {/* SISI KANAN: ETALASE TECH STACK (7 Kolom) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="p-6 bg-slate-900 rounded-xl border border-slate-800 shadow-xl hover:border-slate-700 transition-all duration-300"
              >
                {/* Nama Kategori dengan Garis Gradasi Kecil */}
                <h3 className="text-lg font-bold text-slate-200 mb-4 flex flex-col gap-1">
                  {skill.category}
                  <span className={`h-0.5 w-12 bg-gradient-to-r ${skill.color} rounded-full`}></span>
                </h3>

                {/* Daftar Item Skill */}
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1.5 bg-slate-950 border border-slate-800 text-sm font-medium rounded-md text-emerald-400 hover:text-white hover:border-emerald-500/50 transition-colors duration-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;