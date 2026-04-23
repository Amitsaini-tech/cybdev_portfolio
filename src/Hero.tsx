import { Download, Mail } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ParticleBackground />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/30 to-[#0a0a0a] z-5"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 inline-block">
            <div className="glass-card px-6 py-2 rounded-full border border-cyan-500/30">
              <span className="text-cyan-400 font-mono text-sm">Available for opportunities</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Full-Stack Developer & MCA Candidate
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto font-light">
            Seeking a challenging role in a rapidly growing organization with a contemporary business setting
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <a
              href="/resume.pdf"
              download
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2 group"
            >
              <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              Download Resume
            </a>
            <a
              href="mailto:sainiamit3464@gmail.com"
              className="px-8 py-4 glass-card rounded-lg font-semibold border border-cyan-500/30 hover:border-cyan-500 transition-all duration-300 hover:scale-105 flex items-center gap-2 group"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Contact Me
            </a>
          </div>

          <div className="glass-card p-8 rounded-2xl border border-white/10 inline-block">
            <p className="text-gray-300 font-mono text-sm">
              <span className="text-cyan-400">Email:</span> sainiamit3464@gmail.com
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-500/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
