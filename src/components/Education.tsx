import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Engineering',
      field: 'Computer Science',
      institution: 'Mangalore Institute of Technology and Engineering, Moodabidri',
      year: '2018 - 2022',
      grade: '8.9 CGPA',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      degree: 'Pre-University Education',
      field: 'PCMB',
      institution: 'SR PU College, Hebri',
      year: '2016 - 2018',
      grade: '93.16%',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      degree: 'Secondary School Education',
      field: '',
      institution: 'Govt High School, Muniyal',
      year: '2016 - 2017',
      grade: '96.00%',
      color: 'from-orange-500 to-amber-500',
    },
  ];

  return (
    <section id="education" className="relative py-20 px-4 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto rounded-full" />
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="group bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10"
            >
              <div className="flex items-start gap-4">
                <div className={`w-14 h-14 bg-gradient-to-br ${edu.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <GraduationCap className="text-white" size={28} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                        {edu.degree}
                        {edu.field && <span className="text-cyan-400"> - {edu.field}</span>}
                      </h3>
                      <p className="text-gray-300">{edu.institution}</p>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-lg border border-cyan-500/30 flex-shrink-0">
                      <Award className="text-cyan-400" size={18} />
                      <span className="text-cyan-400 font-bold">{edu.grade}</span>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">{edu.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
