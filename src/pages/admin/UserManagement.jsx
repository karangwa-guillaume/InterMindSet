import React, { useState } from 'react';
import { FaTrash, FaEdit, FaCheckCircle, FaTimesCircle, FaSyncAlt } from 'react-icons/fa';

const dummyUsers = [
  {
    id: 1,
    name: 'Alice Admin',
    email: 'alice@mindsetpathway.com',
    role: 'admin',
    verified: true,
  },
  {
    id: 2,
    name: 'John Student',
    email: 'john@student.com',
    role: 'applicant',
    verified: false,
  },
];

const UserManagement = () => {
  const [users, setUsers] = useState(dummyUsers);
  const [searchTerm, setSearchTerm] = useState('');

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      setUsers(prev => prev.filter(user => user.id !== id));
    }
  };

  const handleResetPassword = (email) => {
    alert(`Password reset email sent to: ${email}`);
    // Integrate backend password reset logic here
  };

  const filteredUsers = users.filter(user =>
    `${user.name} ${user.email}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-orange-600">User Management</h2>

      {/* Search */}
      <div className="mb-4 max-w-sm">
        <input
          type="text"
          placeholder="Search by name or email..."
          className="w-full border px-4 py-2 rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* User Table */}
      <div className="overflow-x-auto">
        <table className="w-full table-auto border text-sm">
          <thead className="bg-orange-100">
            <tr>
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Email</th>
              <th className="p-2 text-left">Role</th>
              <th className="p-2 text-left">Verified</th>
              <th className="p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id} className="border-t">
                <td className="p-2">{user.name}</td>
                <td className="p-2">{user.email}</td>
                <td className="p-2 capitalize">{user.role}</td>
                <td className="p-2">
                  {user.verified ? (
                    <span className="text-green-600 flex items-center gap-1">
                      <FaCheckCircle /> Verified
                    </span>
                  ) : (
                    <span className="text-red-500 flex items-center gap-1">
                      <FaTimesCircle /> Not Verified
                    </span>
                  )}
                </td>
                <td className="p-2 space-x-2">
                  <button
                    className="bg-blue-500 text-white px-2 py-1 rounded text-xs"
                    title="Edit"
                    onClick={() => alert(`Editing user: ${user.name}`)}
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="bg-gray-700 text-white px-2 py-1 rounded text-xs"
                    title="Reset Password"
                    onClick={() => handleResetPassword(user.email)}
                  >
                    <FaSyncAlt />
                  </button>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded text-xs"
                    title="Delete"
                    onClick={() => handleDelete(user.id)}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
            {filteredUsers.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center py-4 text-gray-500">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
