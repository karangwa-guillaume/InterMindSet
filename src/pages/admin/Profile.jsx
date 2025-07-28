import React from 'react'

const Profile = ({ adminProfile, setAdminProfile }) => {
  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (!file) return

    const reader = new FileReader()
    reader.onloadend = () => {
      const updated = { ...adminProfile, profileImage: reader.result }
      setAdminProfile(updated)
      localStorage.setItem('adminProfile', JSON.stringify(updated))
      alert('Profile image updated!')
    }
    reader.readAsDataURL(file)
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4 text-orange-600">Admin Profile</h2>

      <div className="text-center mb-4">
        <img
          src={adminProfile.profileImage}
          alt="Admin"
          className="w-28 h-28 rounded-full mx-auto object-cover border"
        />
        <p className="mt-2 font-semibold">{adminProfile.name}</p>
        <p className="text-sm text-gray-500">{adminProfile.email}</p>
      </div>

      <div>
        <label className="block mb-1 font-medium">Change Profile Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full border p-2 rounded"
        />
      </div>
    </div>
  )
}

export default Profile
