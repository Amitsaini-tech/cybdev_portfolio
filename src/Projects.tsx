import { useNavigate } from 'react-router-dom';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

export default function Projects() {
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: 'AI-Powered Analytics Platform',
      description: 'A comprehensive analytics dashboard with real-time data visualization and machine learning insights.',
      tech: ['React', 'TypeScript', 'Python', 'TensorFlow', 'PostgreSQL'],
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: '#',
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.',
      tech: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: '#',
    },
    {
      id: 3,
      title: 'Social Media Management Tool',
      description: 'Unified platform for managing multiple social media accounts with scheduling and analytics.',
      tech: ['Vue.js', 'GraphQL', 'Redis', 'Docker', 'Microservices'],
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: '#',
    },
    {
      id: 4,
      title: '3D Product Configurator',
      description: 'Interactive 3D product visualization tool allowing real-time customization and rendering.',
      tech: ['Three.js', 'React', 'WebGL', 'Blender', 'Node.js'],
      image: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: '#',
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <span className="text-cyan-400 font-mono text-sm mb-4 block">$ cd projects/</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed max-w-3xl">
              A selection of recent work showcasing my expertise in building
              production-ready applications with modern technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => navigate(`/project/${project.id}`)}
                className="glass-card rounded-xl border border-white/10 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded text-xs font-mono text-cyan-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        onClick={(e) => e.stopPropagation()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 glass-card rounded-lg border border-white/10 hover:border-cyan-500/50 transition-all duration-300 text-sm"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                      <a
                        href={project.demo}
                        onClick={(e) => e.stopPropagation()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 rounded-lg hover:border-cyan-500 transition-all duration-300 text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium group-hover:translate-x-2 transition-transform">
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </div>
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
