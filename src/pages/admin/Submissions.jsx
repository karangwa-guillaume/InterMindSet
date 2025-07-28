import React, { useEffect, useState } from 'react'

const dummySubmissions = [
  { name: 'John Doe', email: 'john@example.com', program: 'Business', date: '2025-07-10' },
  { name: 'Jane Smith', email: 'jane@example.com', program: 'Engineering', date: '2025-07-09' },
]

const Submissions = () => {
  const [submissions, setSubmissions] = useState([])

  useEffect(() => {
    // This will later fetch from real backend
    setTimeout(() => {
      setSubmissions(dummySubmissions)
    }, 1000)
  }, [])

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Submitted Applications</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left border">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2">Name</th>
              <th className="p-2">Email</th>
              <th className="p-2">Program</th>
              <th className="p-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((item, idx) => (
              <tr key={idx} className="border-t">
                <td className="p-2">{item.name}</td>
                <td className="p-2">{item.email}</td>
                <td className="p-2">{item.program}</td>
                <td className="p-2">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Submissions
