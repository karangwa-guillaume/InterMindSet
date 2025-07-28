import React, { useState } from 'react'
import { FaTrash, FaPlus, FaChevronDown, FaChevronUp } from 'react-icons/fa'

const ContentManagement = () => {
  const [whyText, setWhyText] = useState(
    'We are committed to supporting your study abroad goals from start to finish.'
  )

  const [testimonials, setTestimonials] = useState([
    { id: 1, name: 'Jane Doe', text: 'Mindset Pathway guided me perfectly through my visa process.' },
    { id: 2, name: 'Michael Smith', text: 'I got accepted at my dream university, thanks to them!' },
  ])

  const [blogs, setBlogs] = useState([
    { id: 1, title: 'Study in Canada', content: 'Discover top universities in Canada and how to apply.' },
  ])

  const [galleryImages, setGalleryImages] = useState([])
  const [newImage, setNewImage] = useState('')

  const [activeSection, setActiveSection] = useState('')

  const toggleSection = (section) =>
    setActiveSection(activeSection === section ? '' : section)

  const handleWhyChange = (e) => setWhyText(e.target.value)

  const handleAddTestimonial = () => {
    setTestimonials([...testimonials, { id: Date.now(), name: '', text: '' }])
  }

  const handleTestimonialChange = (id, field, value) => {
    const updated = testimonials.map(t =>
      t.id === id ? { ...t, [field]: value } : t
    )
    setTestimonials(updated)
  }

  const handleDeleteTestimonial = (id) =>
    setTestimonials(testimonials.filter(t => t.id !== id))

  const handleAddBlog = () => {
    setBlogs([...blogs, { id: Date.now(), title: '', content: '' }])
  }

  const handleBlogChange = (id, field, value) => {
    const updated = blogs.map(b =>
      b.id === id ? { ...b, [field]: value } : b
    )
    setBlogs(updated)
  }

  const handleDeleteBlog = (id) =>
    setBlogs(blogs.filter(b => b.id !== id))

  const handleImageUpload = () => {
    if (newImage) {
      setGalleryImages([...galleryImages, newImage])
      setNewImage('')
    }
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-orange-600">Content Management</h2>

      {/* Section: Why Choose Us */}
      <div className="mb-8 border rounded shadow">
        <button
          onClick={() => toggleSection('why')}
          className="w-full px-4 py-3 bg-gray-100 flex justify-between items-center font-semibold"
        >
          Why Choose Us
          {activeSection === 'why' ? <FaChevronUp /> : <FaChevronDown />}
        </button>
        {activeSection === 'why' && (
          <div className="p-4 bg-white">
            <textarea
              className="w-full border rounded p-2 min-h-[100px]"
              value={whyText}
              onChange={handleWhyChange}
            />
          </div>
        )}
      </div>

      {/* Section: Testimonials */}
      <div className="mb-8 border rounded shadow">
        <button
          onClick={() => toggleSection('testimonials')}
          className="w-full px-4 py-3 bg-gray-100 flex justify-between items-center font-semibold"
        >
          Testimonials
          {activeSection === 'testimonials' ? <FaChevronUp /> : <FaChevronDown />}
        </button>
        {activeSection === 'testimonials' && (
          <div className="p-4 bg-white space-y-4">
            {testimonials.map((t) => (
              <div key={t.id} className="border p-3 rounded">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border p-2 mb-2"
                  value={t.name}
                  onChange={(e) =>
                    handleTestimonialChange(t.id, 'name', e.target.value)
                  }
                />
                <textarea
                  placeholder="Testimonial"
                  className="w-full border p-2"
                  value={t.text}
                  onChange={(e) =>
                    handleTestimonialChange(t.id, 'text', e.target.value)
                  }
                />
                <button
                  className="mt-2 text-sm text-red-500"
                  onClick={() => handleDeleteTestimonial(t.id)}
                >
                  <FaTrash className="inline mr-1" /> Delete
                </button>
              </div>
            ))}
            <button
              onClick={handleAddTestimonial}
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              <FaPlus className="inline mr-2" /> Add Testimonial
            </button>
          </div>
        )}
      </div>

      {/* Section: Blog Posts */}
      <div className="mb-8 border rounded shadow">
        <button
          onClick={() => toggleSection('blogs')}
          className="w-full px-4 py-3 bg-gray-100 flex justify-between items-center font-semibold"
        >
          Blog Posts
          {activeSection === 'blogs' ? <FaChevronUp /> : <FaChevronDown />}
        </button>
        {activeSection === 'blogs' && (
          <div className="p-4 bg-white space-y-4">
            {blogs.map((b) => (
              <div key={b.id} className="border p-3 rounded">
                <input
                  type="text"
                  placeholder="Blog Title"
                  className="w-full border p-2 mb-2"
                  value={b.title}
                  onChange={(e) =>
                    handleBlogChange(b.id, 'title', e.target.value)
                  }
                />
                <textarea
                  placeholder="Blog Content"
                  className="w-full border p-2"
                  value={b.content}
                  onChange={(e) =>
                    handleBlogChange(b.id, 'content', e.target.value)
                  }
                />
                <button
                  className="mt-2 text-sm text-red-500"
                  onClick={() => handleDeleteBlog(b.id)}
                >
                  <FaTrash className="inline mr-1" /> Delete
                </button>
              </div>
            ))}
            <button
              onClick={handleAddBlog}
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              <FaPlus className="inline mr-2" /> Add Blog
            </button>
          </div>
        )}
      </div>

      {/* Section: Image Gallery */}
      <div className="mb-8 border rounded shadow">
        <button
          onClick={() => toggleSection('gallery')}
          className="w-full px-4 py-3 bg-gray-100 flex justify-between items-center font-semibold"
        >
          Image Gallery
          {activeSection === 'gallery' ? <FaChevronUp /> : <FaChevronDown />}
        </button>
        {activeSection === 'gallery' && (
          <div className="p-4 bg-white">
            <div className="flex space-x-2 mb-4">
              <input
                type="text"
                placeholder="Paste image URL..."
                className="w-full border p-2"
                value={newImage}
                onChange={(e) => setNewImage(e.target.value)}
              />
              <button
                onClick={handleImageUpload}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Upload
              </button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {galleryImages.map((url, i) => (
                <img
                  key={i}
                  src={url}
                  alt="Gallery"
                  className="h-40 object-cover rounded border"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ContentManagement
