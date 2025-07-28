import React, { useState } from 'react'

const BlogEditor = () => {
  const [form, setForm] = useState({
    title: '',
    image: null,
    content: '',
    date: '',
    author: 'Admin',
  })

  const handleChange = (e) => {
    const { name, value, type, files } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Blog submitted successfully!')

    // You would send `form` data to your backend or Firebase here
  }

  return (
    <div className="p-6 bg-white shadow rounded max-w-3xl mx-auto">
      <h2 className="text-xl font-bold mb-4 text-orange-600">Add / Edit Blog</h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Title */}
        <div>
          <label className="block mb-1 font-medium">Blog Title</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Date */}
        <div>
          <label className="block mb-1 font-medium">Date</label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block mb-1 font-medium">Upload Image</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="w-full"
          />
        </div>

        {/* Content */}
        <div>
          <label className="block mb-1 font-medium">Blog Content</label>
          <textarea
            name="content"
            value={form.content}
            onChange={handleChange}
            rows="6"
            required
            className="w-full border p-2 rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded"
        >
          Submit Blog
        </button>
      </form>
    </div>
  )
}

export default BlogEditor
