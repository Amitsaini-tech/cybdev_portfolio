import { Code2, Zap, Palette, Database } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code following best practices.',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing for speed and efficiency to deliver lightning-fast experiences.',
    },
    {
      icon: Palette,
      title: 'Design Focus',
      description: 'Bridging the gap between design and development with pixel-perfect implementations.',
    },
    {
      icon: Database,
      title: 'Full Stack',
      description: 'Expertise across the entire stack from databases to user interfaces.',
    },
  ];

  return (
    <section id="about" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <span className="text-cyan-400 font-mono text-sm mb-4 block">$ cat about.txt</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-linear-to-r from-white to-cyan-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed max-w-3xl">
              I'm a passionate developer who loves turning complex problems into simple,
              beautiful, and intuitive solutions. With a strong foundation in both front-end
              and back-end technologies, I bring ideas to life through code.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-xl border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-linear-to-br from-cyan-500/20 to-blue-600/20 rounded-lg border border-cyan-500/30 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
