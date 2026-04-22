import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, CheckCircle, Target, Zap, Users } from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: 'AI-Powered Analytics Platform',
    description: 'A comprehensive analytics dashboard with real-time data visualization and machine learning insights.',
    fullDescription: 'This project is a full-featured analytics platform that leverages machine learning to provide actionable insights. Built with a modern tech stack, it processes large datasets in real-time and presents them through intuitive visualizations. The platform includes predictive analytics, anomaly detection, and automated reporting features.',
    tech: ['React', 'TypeScript', 'Python', 'TensorFlow', 'PostgreSQL'],
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1200',
    github: '#',
    demo: '#',
    goals: [
      'Build a scalable real-time data processing pipeline',
      'Implement machine learning models for predictive analytics',
      'Create intuitive data visualizations for non-technical users',
      'Ensure high performance with large datasets',
    ],
    features: [
      'Real-time data processing and visualization',
      'Machine learning-powered predictive analytics',
      'Anomaly detection and alerting system',
      'Automated report generation',
      'Custom dashboard builder',
      'Multi-tenant architecture',
    ],
    duration: '6 months',
    team: '4 developers',
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.',
    fullDescription: 'A complete e-commerce solution designed for scalability and user experience. Features include a responsive storefront, secure payment processing, inventory management, and a comprehensive admin dashboard. Built with modern technologies to handle high traffic and provide seamless shopping experiences.',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200',
    github: '#',
    demo: '#',
    goals: [
      'Create a seamless shopping experience',
      'Implement secure payment processing',
      'Build an efficient inventory management system',
      'Develop a comprehensive admin dashboard',
    ],
    features: [
      'Responsive storefront with product filtering',
      'Secure Stripe payment integration',
      'Real-time inventory tracking',
      'Order management system',
      'Customer analytics dashboard',
      'Multi-currency support',
    ],
    duration: '8 months',
    team: '5 developers',
  },
  {
    id: 3,
    title: 'Social Media Management Tool',
    description: 'Unified platform for managing multiple social media accounts with scheduling and analytics.',
    fullDescription: 'A powerful social media management platform that allows businesses to manage multiple social media accounts from a single dashboard. Features include post scheduling, content calendar, analytics tracking, team collaboration, and automated posting across various platforms.',
    tech: ['Vue.js', 'GraphQL', 'Redis', 'Docker', 'Microservices'],
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1200',
    github: '#',
    demo: '#',
    goals: [
      'Build a unified platform for multiple social networks',
      'Implement intelligent post scheduling',
      'Create comprehensive analytics and reporting',
      'Enable team collaboration features',
    ],
    features: [
      'Multi-platform social media integration',
      'AI-powered content suggestions',
      'Advanced scheduling with timezone support',
      'Team collaboration and approval workflows',
      'Comprehensive analytics dashboard',
      'Content calendar with drag-and-drop',
    ],
    duration: '7 months',
    team: '3 developers',
  },
  {
    id: 4,
    title: '3D Product Configurator',
    description: 'Interactive 3D product visualization tool allowing real-time customization and rendering.',
    fullDescription: 'An immersive 3D product configurator that allows customers to customize products in real-time. Built with Three.js and WebGL, it provides photorealistic rendering, material customization, and interactive product exploration. Perfect for e-commerce stores looking to enhance customer engagement.',
    tech: ['Three.js', 'React', 'WebGL', 'Blender', 'Node.js'],
    image: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1200',
    github: '#',
    demo: '#',
    goals: [
      'Create an immersive product visualization experience',
      'Enable real-time product customization',
      'Achieve photorealistic rendering quality',
      'Optimize for performance across devices',
    ],
    features: [
      'Real-time 3D product rendering',
      'Material and color customization',
      'Interactive product exploration',
      'AR preview capability',
      'Save and share configurations',
      'Mobile-responsive design',
    ],
    duration: '5 months',
    team: '2 developers',
  },
];

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-cyan-500 rounded-lg hover:bg-cyan-600 transition-colors"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6 py-12">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </button>

        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <div className="glass-card rounded-2xl border border-white/10 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
                {project.title}
              </h1>

              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                {project.fullDescription}
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-sm font-mono text-cyan-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mb-12">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
                >
                  <ExternalLink className="w-5 h-5" />
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 glass-card rounded-lg font-semibold border border-cyan-500/30 hover:border-cyan-500 transition-all duration-300 hover:scale-105"
                >
                  <Github className="w-5 h-5" />
                  View Code
                </a>
              </div>

              <div className="glass-card p-6 rounded-xl border border-white/10 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-6 h-6 text-cyan-400" />
                  <h2 className="text-2xl font-semibold">Project Goals</h2>
                </div>
                <ul className="space-y-3">
                  {project.goals.map((goal, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass-card p-6 rounded-xl border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-6 h-6 text-cyan-400" />
                  <h2 className="text-2xl font-semibold">Key Features</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                  {project.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-cyan-500/5 rounded-lg border border-cyan-500/20"
                    >
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="glass-card p-6 rounded-xl border border-white/10 sticky top-24">
                <h3 className="text-xl font-semibold mb-6">Project Info</h3>

                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-lg border border-cyan-500/30">
                    <div className="p-3 bg-cyan-500/20 rounded-lg">
                      <Zap className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Duration</p>
                      <p className="text-white font-semibold">{project.duration}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-lg border border-cyan-500/30">
                    <div className="p-3 bg-cyan-500/20 rounded-lg">
                      <Users className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Team Size</p>
                      <p className="text-white font-semibold">{project.team}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <h4 className="text-sm text-gray-400 mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded text-xs font-mono text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
