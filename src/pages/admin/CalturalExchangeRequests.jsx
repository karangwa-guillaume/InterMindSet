import React, { useState } from 'react'
import { FaCheck, FaTimes, FaFileUpload, FaTrash } from 'react-icons/fa'

const dummyRequests = [
  {
    id: 1,
    name: 'Alice Johnson',
    email: 'alice@example.com',
    destination: 'Paris, France',
    programType: 'Cultural Tour',
    status: 'Pending',
    date: '2025-07-15',
    itinerary: '',
  },
  {
    id: 2,
    name: 'David Kim',
    email: 'david@example.com',
    destination: 'Tokyo, Japan',
    programType: 'Language Exchange',
    status: 'Approved',
    date: '2025-08-01',
    itinerary: '/itineraries/japan_tour.pdf',
  },
]

const CalturalExchangeRequests = () => {
  const [requests, setRequests] = useState(dummyRequests)
  const [searchTerm, setSearchTerm] = useState('')

  const updateStatus = (id, status) => {
    const updated = requests.map(req =>
      req.id === id ? { ...req, status } : req
    )
    setRequests(updated)
  }

  const handleItineraryUpload = (id, file) => {
    const updated = requests.map(req =>
      req.id === id ? { ...req, itinerary: URL.createObjectURL(file) } : req
    )
    setRequests(updated)
  }

  const deleteRequest = (id) => {
    if (window.confirm('Are you sure you want to delete this request?')) {
      setRequests(prev => prev.filter(r => r.id !== id))
    }
  }

  const filtered = requests.filter(r =>
    `${r.name} ${r.email} ${r.destination}`.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-orange-600">
        Travel & Cultural Exchange Requests
      </h2>

      {/* Search */}
      <div className="mb-4 max-w-sm">
        <input
          type="text"
          placeholder="Search by name, destination or email..."
          className="w-full border px-4 py-2 rounded"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full table-auto border text-sm">
          <thead className="bg-orange-100">
            <tr>
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Email</th>
              <th className="p-2 text-left">Destination</th>
              <th className="p-2 text-left">Program</th>
              <th className="p-2 text-left">Date</th>
              <th className="p-2 text-left">Status</th>
              <th className="p-2 text-left">Itinerary</th>
              <th className="p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(req => (
              <tr key={req.id} className="border-t">
                <td className="p-2">{req.name}</td>
                <td className="p-2">{req.email}</td>
                <td className="p-2">{req.destination}</td>
                <td className="p-2">{req.programType}</td>
                <td className="p-2">{req.date}</td>
                <td className="p-2">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    req.status === 'Pending'
                      ? 'bg-yellow-200'
                      : req.status === 'Approved'
                      ? 'bg-green-200'
                      : 'bg-red-200'
                  }`}>
                    {req.status}
                  </span>
                </td>
                <td className="p-2">
                  {req.itinerary ? (
                    <a
                      href={req.itinerary}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline text-xs"
                    >
                      View PDF
                    </a>
                  ) : (
                    req.status === 'Approved' && (
                      <label className="text-xs cursor-pointer flex items-center space-x-1 text-blue-500">
                        <FaFileUpload />
                        <input
                          type="file"
                          accept=".pdf"
                          hidden
                          onChange={e =>
                            handleItineraryUpload(req.id, e.target.files[0])
                          }
                        />
                        <span>Upload PDF</span>
                      </label>
                    )
                  )}
                </td>
                <td className="p-2 space-x-2">
                  {req.status === 'Pending' && (
                    <>
                      <button
                        className="bg-green-500 text-white px-2 py-1 rounded"
                        onClick={() => updateStatus(req.id, 'Approved')}
                      >
                        <FaCheck />
                      </button>
                      <button
                        className="bg-red-500 text-white px-2 py-1 rounded"
                        onClick={() => updateStatus(req.id, 'Declined')}
                      >
                        <FaTimes />
                      </button>
                    </>
                  )}
                  <button
                    className="bg-gray-800 text-white px-2 py-1 rounded"
                    onClick={() => deleteRequest(req.id)}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan="8" className="text-center text-gray-500 py-4">
                  No requests found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CalturalExchangeRequests
