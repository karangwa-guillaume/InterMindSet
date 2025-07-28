
import React from 'react'

const team = [
  {
    name: 'Guillaume Karangwa',
    position: 'Managing Director',
    image: '/images/staff_1.jpg',
    description:
      'Guillaume leads the overall vision and strategy at International Mindset Path Way. With years of experience in international education and leadership development, he ensures the company achieves its mission to empower minds across borders.',
  },
  {
    name: 'Pacifique Niyonzima',
    position: 'Program Manager',
    image: '/images/staff_2.jpg',
    description:
      'Pacifique oversees the design and implementation of our coaching and placement programs. He ensures that all services are tailored to meet the evolving needs of students and partners worldwide.',
  },
  {
    name: 'Ian Smith',
    position: 'Application Assistant',
    image: '/images/staff_3.jpg',
    description:
      'Ian supports clients throughout the application process, ensuring all documents are submitted correctly and deadlines are met. He is the go-to person for procedural guidance and follow-up.',
  },
  {
    name: 'Katy Bashabe',
    position: 'Operation Manager',
    image: '/images/staff_4.jpg',
    description:
      'Katy manages the day-to-day operations, focusing on efficiency and client satisfaction. Her coordination skills help maintain seamless service delivery across all departments.',
  },
]

const Team = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition text-left"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-sm text-orange-600 mb-2">{member.position}</p>
                <p className="text-gray-700 text-sm">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
