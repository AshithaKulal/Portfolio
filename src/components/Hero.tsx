import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <div className="inline-block p-1 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full mb-6">
              <div className="bg-gray-900 px-6 py-2 rounded-full">
                <span className="text-cyan-400 font-semibold">Full-Stack Developer</span>
              </div>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
              Ashitha Kulal
            </h1>

            <p className="text-lg text-gray-400 mb-8">
              3.5 Years of Excellence in Building Scalable Web Applications
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up">
            <a
              href="mailto:ashithakadthala@gmail.com"
              className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </a>

            <a
              href="https://www.linkedin.com/in/ashitha-kulal/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3 bg-gray-800/50 backdrop-blur-sm text-white rounded-lg font-semibold border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:scale-105"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>

            {/* <a
              href="https://github.com/AshithaKulal"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3 bg-gray-800/50 backdrop-blur-sm text-white rounded-lg font-semibold border border-gray-700 hover:border-emerald-500 transition-all duration-300 hover:scale-105"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a> */}
          </div>

          {/* <div className="animate-bounce">
            <ArrowDown className="w-8 h-8 text-cyan-400 mx-auto" />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
