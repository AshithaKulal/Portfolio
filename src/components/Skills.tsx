import { Server, Layout, Database, Cog, GitBranch, Briefcase } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Server,
      title: 'Backend Development',
      color: 'from-cyan-500 to-blue-500',
      skills: [
        'C#, ASP.NET, .NET Core Web API, MVC',
        'RESTful API Design',
        'Entity Framework, LINQ',
      ],
    },
    {
      icon: Layout,
      title: 'Frontend Development',
      color: 'from-emerald-500 to-green-500',
      skills: [
        'Angular, React, JavaScript',
        'HTML5, CSS3, jQuery, Knockout.js',
        'Bootstrap, PrimeNG, Angular Material, Tailwind CSS',
      ],
    },
    {
      icon: Database,
      title: 'Database & Reporting',
      color: 'from-orange-500 to-red-500',
      skills: [
        'Microsoft SQL Server (Queries, Stored Procedures, Views, Triggers)',
        'SSRS (SQL Server Reporting Services)',
        'SSIS (SQL Server Integration Services)',
      ],
    },
    {
      icon: Briefcase,
      title: 'CRM & Enterprise Systems',
      color: 'from-pink-500 to-rose-500',
      skills: ['Microsoft Dynamics CRM'],
    },
    {
      icon: GitBranch,
      title: 'DevOps & Tools',
      color: 'from-cyan-500 to-emerald-500',
      skills: [
        'Git, Azure DevOps',
        'CI/CD Pipelines',
        'Visual Studio, VS Code',
        'Swagger, Postman',
      ],
    },
    {
      icon: Cog,
      title: 'Testing & Quality',
      color: 'from-yellow-500 to-orange-500',
      skills: ['Jasmine, Karma', 'NUnit', 'Unit Testing'],
    },
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
              A comprehensive tech stack powering enterprise-level solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="group bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <category.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>

                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">▹</span>
                      <span className="text-gray-300">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
