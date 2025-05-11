export default function Experience() {
  const experiences = [
    {
      title: "Google Generative AI Virtual Internship",
      period: "July – Sep 2024",
      description: "Engineered AI-driven applications using Gemini on Google Cloud. Automated coding tasks, improved query efficiency using AI/ML APIs."
    },
    {
      title: "Google Cloud Computing Foundations Program",
      period: "Oct – Dec 2023",
      description: "Deployed AI models on Google Cloud to process large datasets. Optimized cost and model training performance."
    },
    {
      title: "Postman API Student Expert",
      period: "April – May 2023",
      description: "Automated and monitored APIs, reducing response errors and enhancing deployment workflow."
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
        
        <div className="max-w-3xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-blue-600">{exp.title}</h3>
                <span className="text-gray-500 text-sm hidden md:inline">{exp.period}</span>
              </div>
              <p className="text-gray-600">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
