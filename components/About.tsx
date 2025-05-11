'use client'

export default function About() {
  const education = [
    {
      institution: "GL Bajaj Institute of Technology and Management, Greater Noida",
      degree: "B.Tech in Information Technology (2022–26)",
      details: "CGPA: 7.6"
    },
    {
      institution: "Jaypee Public School, Greater Noida",
      degree: "Senior Secondary (Class XII)",
      details: "84%"
    },
    {
      institution: "Jaypee Public School, Greater Noida",
      degree: "Class X",
      details: "93%"
    }
  ]

  const skills = {
    languages: ["C++", "Java", "Python", "MySQL", "HTML", "CSS"],
    frameworks: ["Django", "OpenCV"],
    tools: ["Git", "GitHub", "PostgreSQL", "VS Code", "PyCharm"],
    libraries: ["Pandas", "NumPy", "scikit-learn"],
    softSkills: ["Team Collaboration", "Communication", "Time Management"]
  }

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-blue-600 dark:text-blue-400">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg dark:bg-gray-800 dark:text-white">
                  <h4 className="font-semibold text-lg">{edu.institution}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{edu.degree}</p>
                  <p className="text-gray-500 dark:text-gray-500">{edu.details}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-blue-600 dark:text-blue-400">Skills</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm dark:bg-blue-600 dark:text-blue-100">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Frameworks</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.frameworks.map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm dark:bg-green-600 dark:text-green-100">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm dark:bg-purple-600 dark:text-purple-100">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Libraries</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.libraries.map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm dark:bg-yellow-600 dark:text-yellow-100">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Soft Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.softSkills.map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm dark:bg-gray-700 dark:text-gray-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
