import { Code2, Rocket, Users, Award } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: 'Full-Stack Expertise',
      description: 'Proficient across frontend, backend, and database technologies',
    },
    {
      icon: Rocket,
      title: 'Enterprise Solutions',
      description: 'Delivered scalable applications for healthcare, banking, and finance',
    },
    {
      icon: Users,
      title: 'Agile Practitioner',
      description: 'Thrives in collaborative Scrum teams with proven track record',
    },
    {
      icon: Award,
      title: 'Production-Ready Code',
      description: 'Consistently delivers reliable, maintainable, and secure solutions',
    },
  ];

  return (
    <section id="about" className="py-24 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto"></div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 mb-12">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              <span className="text-cyan-400 font-semibold">Highly Skilled Full-Stack Developer</span> with{' '}
              <span className="text-emerald-400 font-semibold">3.5 years of experience</span> building secure,
              scalable, and high-performance web applications. Strong expertise across frontend, backend, and
              database development, with hands-on experience delivering enterprise-level solutions in{' '}
              <span className="text-cyan-400">healthcare</span>,{' '}
              <span className="text-emerald-400">banking</span>, and large-scale business domains.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mt-6">
              Skilled in designing clean system architectures, well-structured APIs, optimized databases, and
              modern user-friendly interfaces. A proactive problem solver who thrives in Agile teams and
              consistently delivers reliable, maintainable, and production-ready code.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
