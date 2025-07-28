import React, { useState } from 'react';
import { FaUpload, FaCheckCircle, FaUserTie } from 'react-icons/fa';

const dummyVisaRequests = [
  {
    id: 1,
    name: 'Alice Johnson',
    email: 'alice@example.com',
    country: 'Canada',
    visaType: 'Study',
    date: '2025-07-15',
    status: 'Pending',
    agent: '',
    document: '',
  },
  {
    id: 2,
    name: 'Mark Lee',
    email: 'mark@example.com',
    country: 'USA',
    visaType: 'Work',
    date: '2025-07-13',
    status: 'In Progress',
    agent: 'Agent Smith',
    document: 'docs/mark_letter.pdf',
  },
];

const VisaRequests = () => {
  const [requests, setRequests] = useState(dummyVisaRequests);

  const handleAgentAssign = (id, agentName) => {
    const updated = requests.map((req) =>
      req.id === id ? { ...req, agent: agentName } : req
    );
    setRequests(updated);
  };

  const handleStatusUpdate = (id, newStatus) => {
    const updated = requests.map((req) =>
      req.id === id ? { ...req, status: newStatus } : req
    );
    setRequests(updated);
  };

  const handleFileUpload = (id, fileName) => {
    const updated = requests.map((req) =>
      req.id === id ? { ...req, document: fileName } : req
    );
    setRequests(updated);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-orange-600">Visa Requests</h2>

      <div className="overflow-x-auto">
        <table className="w-full table-auto border text-sm">
          <thead className="bg-orange-100">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Country</th>
              <th className="p-3 text-left">Visa Type</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Agent</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Document</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req) => (
              <tr key={req.id} className="border-t">
                <td className="p-2">{req.name}</td>
                <td className="p-2">{req.email}</td>
                <td className="p-2">{req.country}</td>
                <td className="p-2">{req.visaType}</td>
                <td className="p-2">{req.date}</td>
                <td className="p-2">
                  <input
                    type="text"
                    placeholder="Assign agent"
                    value={req.agent}
                    onChange={(e) => handleAgentAssign(req.id, e.target.value)}
                    className="border p-1 rounded w-full"
                  />
                </td>
                <td className="p-2">
                  <select
                    value={req.status}
                    onChange={(e) => handleStatusUpdate(req.id, e.target.value)}
                    className="border p-1 rounded"
                  >
                    <option>Pending</option>
                    <option>In Progress</option>
                    <option>Completed</option>
                    <option>Rejected</option>
                  </select>
                </td>
                <td className="p-2">
                  {req.document ? (
                    <a href={`/${req.document}`} className="text-blue-500 underline" download>
                      Download
                    </a>
                  ) : (
                    <label className="flex items-center space-x-2 text-blue-600 cursor-pointer">
                      <FaUpload />
                      <input
                        type="file"
                        hidden
                        onChange={(e) => handleFileUpload(req.id, `uploads/${e.target.files[0].name}`)}
                      />
                      <span className="text-xs">Upload</span>
                    </label>
                  )}
                </td>
                <td className="p-2 space-x-1">
                  <button
                    onClick={() => handleStatusUpdate(req.id, 'Completed')}
                    className="bg-green-500 text-white px-2 py-1 rounded"
                    title="Mark as Completed"
                  >
                    <FaCheckCircle />
                  </button>
                  <button
                    onClick={() => handleAgentAssign(req.id, '')}
                    className="bg-gray-400 text-white px-2 py-1 rounded"
                    title="Clear Agent"
                  >
                    <FaUserTie />
                  </button>
                </td>
              </tr>
            ))}
            {requests.length === 0 && (
              <tr>
                <td colSpan="9" className="text-center text-gray-500 py-4">No visa requests found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VisaRequests;
