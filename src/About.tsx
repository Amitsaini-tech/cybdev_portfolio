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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
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
                  <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg border border-cyan-500/30 group-hover:scale-110 transition-transform duration-300">
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
export const projectsData = [
  {
    id: 1,
    title: 'PureHerbHaven',
    description: 'An online store specializing in pure, organic herbs and botanical products.',
    fullDescription: 'PureHerbHaven is a specialized e-commerce platform dedicated to offering high-quality, organic herbs and botanical products. The platform provides a seamless shopping experience with detailed product information, a secure checkout process, and user-friendly navigation to help customers find the natural remedies they need.',
    tech: ['React', 'JavaScript', 'Node.js', 'Express', 'MongoDB'],
    image: 'https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=1200',
    github: 'https://github.com/Amitsaini-tech/PureHerbHaven',
    demo: '#',
    goals: [
      'Create an intuitive shopping experience for natural products',
      'Implement a robust product categorization system',
      'Ensure a secure and seamless checkout process',
      'Provide detailed information about herbal benefits',
    ],
    features: [
      'Responsive storefront with advanced filtering',
      'Shopping cart and wishlist functionality',
      'Secure user authentication',
      'Admin dashboard for product management',
      'Order tracking system',
      'Detailed product reviews and ratings',
    ],
    duration: '3 months',
    team: '1 developer',
  },
  {
    id: 2,
    title: 'Restaurant App',
    description: 'A comprehensive food ordering and table reservation application for restaurants.',
    fullDescription: 'A dynamic restaurant application designed to streamline the food ordering and table reservation process. It features a digital menu with appetizing visuals, real-time order tracking, and an easy-to-use table booking system. Built to enhance the dining experience both online and in-house.',
    tech: ['React', 'JavaScript', 'Tailwind CSS', 'Firebase'],
    image: 'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=1200',
    github: 'https://github.com/Amitsaini-tech/restourantapp',
    demo: '#',
    goals: [
      'Digitalize the restaurant menu with high-quality visuals',
      'Enable seamless online food ordering',
      'Implement a straightforward table reservation system',
      'Provide an admin interface for order management',
    ],
    features: [
      'Interactive digital menu',
      'Real-time order placement and tracking',
      'Table reservation with date and time selection',
      'User accounts and order history',
      'Admin dashboard for staff',
      'Responsive design for mobile and desktop',
    ],
    duration: '4 months',
    team: '1 developer',
  },
  {
    id: 3,
    title: 'E-commerce Delivery',
    description: 'Full-stack e-delivery solution with order tracking and inventory management.',
    fullDescription: 'A complete e-commerce delivery solution focused on managing the logistics of product distribution. It includes features for real-time order tracking, inventory management, and route optimization. Built to handle the entire lifecycle of an order from purchase to successful delivery.',
    tech: ['React', 'JavaScript', 'Node.js', 'MongoDB', 'Stripe'],
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200',
    github: 'https://github.com/Amitsaini-tech/Ecommerce-delivery',
    demo: '#',
    goals: [
      'Streamline the delivery management process',
      'Provide customers with real-time tracking updates',
      'Implement an efficient inventory tracking system',
      'Integrate secure payment gateways',
    ],
    features: [
      'Real-time delivery tracking',
      'Inventory management dashboard',
      'Secure payment processing with Stripe',
      'Driver assignment and route management',
      'Customer notification system',
      'Multi-vendor support capability',
    ],
    duration: '5 months',
    team: '1 developer',
  },
  {
    id: 4,
    title: 'Animated Portfolio',
    description: 'An interactive developer portfolio with smooth animations and modern design.',
    fullDescription: 'A visually engaging developer portfolio designed to showcase projects and skills with flair. It heavily utilizes modern animation libraries to create a dynamic and memorable user experience. The design focuses on performance, aesthetics, and clear presentation of professional capabilities.',
    tech: ['React', 'JavaScript', 'Framer Motion', 'Tailwind CSS'],
    image: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1200',
    github: 'https://github.com/Amitsaini-tech/animated_portfolio',
    demo: '#',
    goals: [
      'Create a standout, visually impressive portfolio',
      'Implement smooth, performant micro-animations',
      'Showcase projects in an engaging manner',
      'Ensure full responsiveness across all devices',
    ],
    features: [
      'Smooth scroll and page transitions',
      'Interactive 3D or animated elements',
      'Dynamic project gallery',
      'Dark mode support',
      'Performance optimized rendering',
      'Clean, modern UI design',
    ],
    duration: '1 month',
    team: '1 developer',
  },
  {
    id: 5,
    title: 'Industrial Quotation & POS System',
    description: 'A fully functional comprehensive system for generating industrial quotations and managing point-of-sale inventory.',
    fullDescription: 'A robust, fully functional enterprise solution tailored for industrial use. It streamlines the generation of complex quotations while seamlessly integrating with a real-time point-of-sale (POS) and inventory management system. This ensures accurate stock levels, quick sales processing, and professional quotation delivery.',
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS'],
    image: 'https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=1200',
    github: '#',
    demo: '#',
    goals: [
      'Automate the generation of industrial quotations',
      'Provide real-time inventory tracking and alerts',
      'Ensure a fast and reliable point-of-sale checkout',
      'Create comprehensive sales and inventory reports',
    ],
    features: [
      'Dynamic quotation builder with PDF export',
      'Real-time POS checkout interface',
      'Automated inventory deduction on sales',
      'Low stock alerts and supplier management',
      'Secure user roles and permissions',
      'Detailed analytics and reporting dashboard',
    ],
    duration: '6 months',
    team: '1 developer',
  },
];
