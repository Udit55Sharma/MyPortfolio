

import Image from 'next/image'
import Link from 'next/link'

export default function CodingProfiles() {
  const profiles = [
    {
      platform: "LeetCode",
      stats: "385+ problems solved",
      link: "https://leetcode.com/u/udit55sharma",
      logo: "/leetcodelogo.png"
    },
    {
      platform: "HackerRank",
      stats: "4 Stars in C++ and Java",
      link: "https://hackerrank.com/udit55sharma",
      logo: "/hackerranklogo.png"
    }
  ]

  return (
    <section id="coding-profiles" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Coding Profiles</h2>
        
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
          {profiles.map((profile, index) => (
            <Link
              key={index}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center gap-4 dark:bg-gray-800 dark:text-white dark:hover:shadow-lg"
            >
              <div>
                <Image src={profile.logo} alt={profile.platform + ' logo'} width={40} height={40} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{profile.platform}</h3>
                <p className="text-gray-600 dark:text-gray-400">{profile.stats}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
