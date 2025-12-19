import { Briefcase, ChevronRight } from 'lucide-react';

const Experience = () => {
  const projects = [
    {
      company: 'TietoEvry Pvt Ltd',
      project: 'AgFirst',
      description:
        'A financial services platform supporting agricultural and rural lending operations. Enables users to manage customer data, loan processing, credit assessments, and reporting.',
      techStack: [
        'Angular 19',
        '.NET Core Web API',
        'Entity Framework',
        'LINQ',
        'SQL Server',
        'SSRS',
        'SSIS',
        'CRM',
        'Knockout.js',
        'Azure DevOps',
      ],
      products: [
        {
          name: 'L2DAT – Loans2 Data Adjust Tool',
          description:
            'Allows bank users to adjust loan, customer, or institution data against the Loans2 source system, individually or in bulk.',
          responsibilities: [
            'Developed Angular-based UI and .NET server components from scratch',
            'Solely responsible for design, development, deployment, and maintenance',
            'Implemented Windows authentication and responsive UI with custom controls',
            'Created database tables, triggers, and implemented robust error handling',
            'Developed unit tests using Jasmine and NUnit for code quality',
          ],
        },
        {
          name: 'CIQ – Customer Inquiry',
          description:
            'Read-only customer inquiry application to view complete customer details, associated loans, responsible parties, notes, and generate monthly/annual reports.',
          responsibilities: [
            'Enhanced application functionality using Knockout.js, .NET Framework, and SQL Server',
            'Added new features and optimized SQL queries',
            'Resolved bugs and maintained stored procedures and views for reporting',
          ],
        },
        {
          name: 'CRM',
          description:
            'Manages customer profiles, interactions, financial data, onboarding, tracking, and reporting through secure workflows.',
          responsibilities: [
            'Customized application using JavaScript to meet business requirements',
            'Developed and modified SSIS packages to extract/load data from source systems',
            'Generated and improved SSRS reports and managed CRM integrations using .NET Core',
          ],
        },
      ],
    },
    {
      company: 'TietoEvry Pvt Ltd',
      project: 'Therapy Brands',
      description:
        'Healthcare software platform helping organizations manage clinical documentation, scheduling, billing, and compliance in a single system.',
      techStack: ['Angular 15', '.NET Core', 'Web API', '.NET Framework', 'SQL Server', 'Azure DevOps', 'Swagger'],
      products: [
        {
          name: 'ShareNote',
          description:
            'Therapy practice management system handling clinical documentation, scheduling, billing, and compliance workflows.',
          responsibilities: [
            'Built and enhanced backend functionality using ASP.NET MVC and .NET Core Web APIs',
            'Leveraged Entity Framework and LINQ for data operations',
            'Designed and optimized SQL Server interactions with stored procedures and indexing',
            'Participated in Agile Scrum practices including sprint planning and daily stand-ups',
          ],
        },
        {
          name: 'CodeMetro',
          description:
            "Children's therapy booking platform allowing parents to schedule appointments, synchronize data/status across systems, and generate timely reports.",
          responsibilities: [
            'Developed scheduling and booking features with real-time synchronization',
            'Implemented reporting functionality for therapy sessions',
            'Optimized database queries for performance tuning',
          ],
        },
      ],
    },
    {
      company: 'TietoEvry Pvt Ltd',
      project: 'ServicePower',
      description:
        'Field service management application that streamlines job scheduling, workforce allocation, work order management, and real-time status tracking for enterprise clients.',
      techStack: ['Angular 12', '.NET Core Web API', 'SQL Server', 'Git', 'Bitbucket', 'Postman'],
      products: [
        {
          name: 'ServicePower',
          description: 'Enterprise field service management platform',
          responsibilities: [
            'Designed and developed scalable Angular applications using reusable components and custom directives',
            'Utilized RxJS for efficient state and data management',
            'Built secure, high-performance RESTful APIs with .NET Core Web API and Entity Framework',
            'Supported end-to-end CRUD operations with SQL Server',
            'Developed responsive, cross-browser UIs using Bootstrap, PrimeNG, and SCSS',
            'Implemented unit tests with Jasmine and Karma while following Git best practices',
          ],
        },
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-400">Enterprise projects across healthcare, finance, and field services</p>
          </div>

          <div className="space-y-12">
            {projects.map((project, projectIndex) => (
              <div
                key={projectIndex}
                className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">{project.project}</h3>
                    <p className="text-cyan-400 font-semibold mb-3">{project.company}</p>
                    <p className="text-gray-300 leading-relaxed mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-700/50 text-emerald-400 rounded-full text-sm border border-gray-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-8 mt-8">
                  {project.products.map((product, productIndex) => (
                    <div key={productIndex} className="pl-6 border-l-2 border-cyan-500/30">
                      <h4 className="text-xl font-bold text-cyan-400 mb-2">{product.name}</h4>
                      <p className="text-gray-400 mb-4">{product.description}</p>

                      <div className="space-y-2">
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                          Key Responsibilities
                        </p>
                        {product.responsibilities.map((responsibility, respIndex) => (
                          <div key={respIndex} className="flex items-start gap-2">
                            <ChevronRight className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-300">{responsibility}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
