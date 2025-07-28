import React, { useState } from 'react';
import { FaCheck, FaTimes, FaFileDownload, FaTrash } from 'react-icons/fa';

const dummyBookings = [
  {
    id: 1,
    name: 'Emily Carter',
    email: 'emily@example.com',
    from: 'Kigali',
    to: 'Toronto',
    date: '2025-07-20',
    status: 'Pending',
    ticketed: false,
    document: '/docs/emily_passport.pdf',
  },
  {
    id: 2,
    name: 'Michael Brown',
    email: 'michael@example.com',
    from: 'Nairobi',
    to: 'London',
    date: '2025-08-05',
    status: 'Confirmed',
    ticketed: true,
    document: '/docs/michael_id.jpg',
  },
];

const AirlineBookings = () => {
  const [bookings, setBookings] = useState(dummyBookings);
  const [searchTerm, setSearchTerm] = useState('');

  const updateStatus = (id, newStatus) => {
    setBookings(prev =>
      prev.map(b => (b.id === id ? { ...b, status: newStatus } : b))
    );
  };

  const toggleTicketed = (id) => {
    setBookings(prev =>
      prev.map(b => (b.id === id ? { ...b, ticketed: !b.ticketed } : b))
    );
  };

  const deleteBooking = (id) => {
    if (window.confirm('Are you sure you want to delete this booking?')) {
      setBookings(prev => prev.filter(b => b.id !== id));
    }
  };

  const filteredBookings = bookings.filter((b) =>
    `${b.name} ${b.email} ${b.from} ${b.to}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-orange-600">Airline Bookings</h2>

      {/* Search */}
      <div className="mb-4 max-w-sm">
        <input
          type="text"
          placeholder="Search by name, email or destination..."
          className="w-full border px-4 py-2 rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full table-auto border text-sm">
          <thead className="bg-orange-100">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">From</th>
              <th className="p-3 text-left">To</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Ticketed</th>
              <th className="p-3 text-left">Document</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredBookings.map((b) => (
              <tr key={b.id} className="border-t">
                <td className="p-2">{b.name}</td>
                <td className="p-2">{b.email}</td>
                <td className="p-2">{b.from}</td>
                <td className="p-2">{b.to}</td>
                <td className="p-2">{b.date}</td>
                <td className="p-2">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    b.status === 'Pending' ? 'bg-yellow-200' :
                    b.status === 'Confirmed' ? 'bg-green-200' :
                    'bg-red-200'
                  }`}>
                    {b.status}
                  </span>
                </td>
                <td className="p-2">
                  {b.ticketed ? (
                    <span className="text-green-600 font-medium">Yes</span>
                  ) : (
                    <span className="text-red-500 font-medium">No</span>
                  )}
                </td>
                <td className="p-2">
                  <a
                    href={b.document}
                    download
                    className="flex items-center text-blue-600 underline text-xs"
                  >
                    <FaFileDownload className="mr-1" /> Download
                  </a>
                </td>
                <td className="p-2 space-x-2">
                  <button
                    onClick={() => updateStatus(b.id, 'Confirmed')}
                    className="bg-green-500 text-white px-2 py-1 rounded"
                    title="Confirm"
                  >
                    <FaCheck />
                  </button>
                  <button
                    onClick={() => updateStatus(b.id, 'Cancelled')}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                    title="Cancel"
                  >
                    <FaTimes />
                  </button>
                  <button
                    onClick={() => toggleTicketed(b.id)}
                    className={`${
                      b.ticketed ? 'bg-gray-500' : 'bg-blue-500'
                    } text-white px-2 py-1 rounded`}
                    title="Toggle Ticketed"
                  >
                    {b.ticketed ? 'Undo' : 'Ticketed'}
                  </button>
                  <button
                    onClick={() => deleteBooking(b.id)}
                    className="bg-black text-white px-2 py-1 rounded"
                    title="Delete Booking"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
            {filteredBookings.length === 0 && (
              <tr>
                <td colSpan="9" className="text-center text-gray-500 py-4">
                  No bookings found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AirlineBookings;
