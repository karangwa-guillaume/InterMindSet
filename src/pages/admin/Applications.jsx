import React, { useState } from 'react';
import { FaCheck, FaTimes, FaFileDownload } from 'react-icons/fa';

const dummyApplications = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    university: 'Lewis University',
    program: 'Computer Science',
    date: '2025-07-10',
    status: 'Pending',
    paid: true,
    document: '/docs/john_transcript.pdf',
  },
  {
    id: 2,
    name: 'Sarah Smith',
    email: 'sarah@example.com',
    university: 'Kent State University',
    program: 'Nursing',
    date: '2025-07-10',
    status: 'Reviewed',
    paid: true,
    document: '/docs/sarah_cv.pdf',
  },
];

const Applications = () => {
  const [applications, setApplications] = useState(dummyApplications);
  const [searchTerm, setSearchTerm] = useState('');

  const updateStatus = (id, newStatus) => {
    const updated = applications.map(app =>
      app.id === id ? { ...app, status: newStatus } : app
    );
    setApplications(updated);
  };

  const filteredApplications = applications.filter((app) => {
    const search = searchTerm.toLowerCase();
    return (
      app.name.toLowerCase().includes(search) ||
      app.email.toLowerCase().includes(search) ||
      app.university.toLowerCase().includes(search) ||
      app.program.toLowerCase().includes(search)
    );
  });

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-orange-600">Applications</h2>

      {/* Search Input */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by name, email, university or program..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/2 border border-gray-300 p-2 rounded"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full table-auto border">
          <thead className="bg-orange-100">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">University</th>
              <th className="p-3 text-left">Program</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Payment</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredApplications.map((app) => (
              <tr key={app.id} className="border-t text-sm">
                <td className="p-2">{app.name}</td>
                <td className="p-2">{app.email}</td>
                <td className="p-2">{app.university}</td>
                <td className="p-2">{app.program}</td>
                <td className="p-2">{app.date}</td>
                <td className="p-2">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    app.status === 'UnderReview' ? 'bg-blue-200' :
                    app.status === 'Reviewed' ? 'bg-green-200' :
                    app.status === 'Incomplete' ? 'bg-red-200' :
                    'bg-red-200'
                  }`}>
                    {app.status}
                  </span>
                </td>
                <td className="p-2">
                  {app.paid ? (
                    <span className="text-green-600 font-medium">Paid</span>
                  ) : (
                    <span className="text-red-500 font-medium">Unpaid</span>
                  )}
                </td>
                <td className="p-2 space-x-2">
                  <button
                    className="bg-green-500 text-white px-2 py-1 rounded text-xs"
                    onClick={() => updateStatus(app.id, 'Reviewed')}
                  >
                    <FaCheck />
                  </button>
                  <button
                    className="bg-blue-500 text-white px-2 py-1 rounded text-xs"
                    onClick={() => updateStatus(app.id, 'UnderReview')}
                  >
                    <FaTimes />
                  </button>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded text-xs"
                    onClick={() => updateStatus(app.id, 'Incomplete')}
                  >
                    <FaTimes />
                  </button>
                  <a
                    href={app.document}
                    download
                    className="bg-gray-300 text-black px-2 py-1 rounded text-xs inline-flex items-center"
                  >
                    <FaFileDownload className="mr-1" /> Doc
                  </a>
                </td>
              </tr>
            ))}
            {filteredApplications.length === 0 && (
              <tr>
                <td colSpan="8" className="text-center py-4 text-gray-500">
                  No applications found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Applications;
