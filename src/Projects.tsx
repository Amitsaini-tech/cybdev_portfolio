import { useNavigate } from 'react-router-dom';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import datamindDashboard from './assets/datamind_dashboard.png';

export default function Projects() {
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: 'DataMind AI — Analytics Platform',
      description: 'DataMind AI is a next-generation analytics platform that transforms complex datasets into actionable business insights. Using advanced AI-powered visualization and predictive modeling, it empowers businesses to make data-driven decisions with speed and confidence',
      tech: ['React', 'Vite', 'Redux Toolkit', 'Recharts', 'PapaParse + SheetJS', 'Tailwind CSS', 'Firebase'],
      image: datamindDashboard,

      github: 'https://github.com/Amitsaini-tech/Analytics.git',
      demo: '#',
    },
    {
      id: 2,
      title: 'PureHerbHaven',
      description: 'An online store specializing in pure, organic herbs and botanical products.',
      tech: ['React', 'JavaScript', 'Node.js', 'MongoDB'],
      image: 'https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/Amitsaini-tech/PureHerbHaven',
      demo: 'https://pureherbheaven.netlify.app',
    },

    {
      id: 3,
      title: 'E-commerce Delivery',
      description: 'Full-stack e-delivery solution with order tracking and inventory management.',
      tech: ['React', 'JavaScript', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/Amitsaini-tech/Ecommerce-delivery',
      demo: 'https://elivery.netlify.app',
    },
    {
      id: 4,
      title: 'POS Inventory System',
      description: 'A robust point-of-sale and inventory management desktop application with real-time reporting.',
      tech: ['Java', 'Swing', 'SQL', 'JFreeChart', 'JCalendar'],
      image: 'https://images.pexels.com/photos/3756345/pexels-photo-3756345.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: 'https://mega.nz/file/w28Q0Dra#XUOu7kUesROYx8Yxgm1o9r1Xm0GZUVuv9oFyh_99fOc',
    },
    {
      id: 5,
      title: 'Industrial Quotation System',
      description: 'A comprehensive desktop application for generating professional industrial quotations securely.',
      tech: ['Java', 'Swing', 'SQL', 'FlatLaf', 'Jakarta Mail', 'Hibernate', 'BCrypt', 'lombok'],
      image: 'https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: '#',
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            {/* <span className="text-cyan-400 font-mono text-sm mb-4 block">$ cd projects/</span> */}
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
