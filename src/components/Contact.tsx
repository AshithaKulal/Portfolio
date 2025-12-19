import { Mail, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ashithakadthala@gmail.com',
      href: 'mailto:ashithakadthala@gmail.com',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/ashitha-kulal',
      href: 'https://www.linkedin.com/in/ashitha-kulal/',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/AshithaKulal',
      href: 'https://github.com/AshithaKulal',
      color: 'from-emerald-500 to-green-500',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-400">
              Open to exciting opportunities and collaborations
            </p>
          </div>

          <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {contactLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target={link.label !== 'Email' ? '_blank' : undefined}
                  rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="group bg-gray-900/50 rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20"
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${link.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <link.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{link.label}</h3>
                  <p className="text-sm text-gray-400 break-all">{link.value}</p>
                </a>
              ))}
            </div>

            <div className="text-center pt-8 border-t border-gray-700">
              <p className="text-gray-400 mb-6">
                Interested in working together? Feel free to reach out!
              </p>
              <a
                href="mailto:ashithakadthala@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
              >
                <Send className="w-5 h-5" />
                Send a Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
