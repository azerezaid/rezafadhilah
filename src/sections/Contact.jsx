import { useState } from "react";

function Contact() {
  // State sederhana untuk menangani input form jika nanti ingin kamu hubungkan ke backend
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Untuk saat ini log dulu datanya, nanti bisa dihubungkan ke Formspree / EmailJS
    console.log("Pesan dikirim:", formData);
    alert("Terima kasih! Pesan kamu berhasil disimulasikan terkirim.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 text-white border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* JUDUL SECTION */}
        <div className="text-center md:text-left mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Let's <span className="text-emerald-400">Collaborate </span>
          </h2>
          <p className="text-slate-400 mt-2 text-lg">
            Have a project idea, a job opportunity, or just want to say hello? Feel free to reach out anytime.
          </p>
          <div className="h-1 w-20 bg-emerald-400 mt-3 mx-auto md:mx-0 rounded-full"></div>
        </div>

        {/* KONTEN UTAMA: DUA KOLOM */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* KOLOM KIRI: INFO HUBUNGI (5 Kolom) */}
          <div className="lg:col-span-5 space-y-6 text-center md:text-left">
            <h3 className="text-2xl font-bold text-slate-200">Get In Touch</h3>
            <p className="text-slate-400 leading-relaxed">
              I am always open to discussing web technology, full-stack architecture, or new collaboration opportunities.
            </p>
            
            <div className="space-y-4 pt-4 text-sm font-mono text-emerald-400">
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg hover:border-emerald-500/30 transition-colors">
                <span className="text-slate-400 block text-xs uppercase mb-1">Email</span>
                rezafadhilah.reza@gmail.com
              </div>
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg hover:border-emerald-500/30 transition-colors">
                <span className="text-slate-400 block text-xs uppercase mb-1">Location</span>
                Indonesia (Available Worldwide via Remote)
              </div>
            </div>
          </div>

          {/* KOLOM KANAN: FORMULIR KONTAK (7 Kolom) */}
          <div className="lg:col-span-7 w-full">
            <form onSubmit={handleSubmit} className="p-8 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Your Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 focus:outline-none focus:border-emerald-400 font-sans transition-colors"
                  
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                <input 
                  type="Email Address" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 focus:outline-none focus:border-emerald-400 font-sans transition-colors"
                  
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Pesan</label>
                <textarea 
                  rows="4" 
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 focus:outline-none focus:border-emerald-400 font-sans transition-colors resize-none"
                  placeholder=" Share your project details or drop a message here..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full py-3 bg-emerald-500 text-slate-950 font-bold rounded-lg hover:bg-emerald-400 transition-all duration-200 cursor-pointer shadow-lg shadow-emerald-500/10"
              >
                Kirim Pesan
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;