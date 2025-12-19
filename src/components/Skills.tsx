import { Server, Layout, Database, Layers, GitBranch, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Server,
      title: 'Backend Development',
      color: 'from-cyan-500 to-blue-500',
      skills: [
        'C#',
        'ASP.NET',
        '.NET Core Web API',
        'MVC',
        'RESTful API Design',
        'Entity Framework',
        'LINQ',
      ],
    },
    {
      icon: Layout,
      title: 'Frontend Development',
      color: 'from-emerald-500 to-teal-500',
      skills: [
        'Angular',
        'React',
        'JavaScript',
        'HTML5',
        'CSS3',
        'jQuery',
        'Knockout.js',
        'Bootstrap',
        'PrimeNG',
        'Angular Material',
        'Tailwind CSS',
      ],
    },
    {
      icon: Database,
      title: 'Database & Reporting',
      color: 'from-orange-500 to-amber-500',
      skills: [
        'Microsoft SQL Server',
        'SQL Server Reporting Services(SSRS)',
        'SQL Server Integration Services(SSIS)',
      ],
    },
    {
      icon: Layers,
      title: 'CRM & Enterprise',
      color: 'from-pink-500 to-rose-500',
      skills: ['Microsoft Dynamics CRM'],
    },
    {
      icon: GitBranch,
      title: 'DevOps & Tools',
      color: 'from-violet-500 to-purple-500',
      skills: [
        'Git',
        'Azure DevOps',
        'CI/CD Pipelines',
        'Visual Studio',
        'VS Code',
        'Swagger',
        'Postman',
        'Jira',
        'Bitbucket'
      ],
    },
    {
      icon: Wrench,
      title: 'Testing',
      color: 'from-cyan-500 to-emerald-500',
      skills: ['Jasmine', 'Karma', 'NUnit'],
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Core Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-400">
              Key technologies and tools I leverage to build effective and scalable solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="group bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1.5 bg-gray-700/50 backdrop-blur-sm rounded-lg text-sm text-gray-300 border border-gray-600/50 hover:border-cyan-500/50 hover:bg-gray-700 transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
