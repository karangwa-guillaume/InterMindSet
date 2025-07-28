import React from 'react'
import Footer from '../components/Footer'

const galleyPosts = [
  {
    id: 1,
    image: '/images/visit-1.jpeg',
    date: 'January 30, 2020',
    author: 'Admin',
    comments: 3,
    title: 'Genocide survivors and former perpetrators who confessed their role in the 1994 genocide against the Tutsi and were forgiven—share testimonies about their journey of reconciliation with students from Lewis University',
    link: '/blog-single',
  },
  {
    id: 2,
    image: '/images/visit-2.jpeg',
    date: 'July 17, 2022',
    author: 'Admin',
    comments: 3,
    title: 'The students had a wonderful opportunity to learn about the process of rapprochement/ reconciliation, the power of forgiveness, and the journey since the 1994 Genocide against the Tutsi from PeacEdu beneficiaries.',
    link: '/blog-single',
  },
  {
    id: 3,
    image: '/images/visit-3.jpeg',
    date: 'January 12, 2024',
    author: 'Admin',
    comments: 3,
    title: 'This Friday 12th of January 2024, PeacEdu Initiative Rwanda happily hosted a delegation of the staff and students through International Mindset Pathway  who came to learn the power of forgiveness to our village of reconciliation.',
    link: '/blog-single',
  },
  {
    id: 4,
    image: '/images/visit-4.jpeg',
    date: 'January 19, 2022',
    author: 'Admin',
    comments: 3,
    title: 'Business faculty, students expand Rwanda project through new venture selling handcrafted products',
    link: '/blog-single',
  },
  {
    id: 5,
    image: '/images/visit-5.jpeg',
    date: 'January 30, 2020',
    author: 'Admin',
    comments: 3,
    title: 'Students help the PeacEdu community construct a kitchen garden for a widow in the Rukara sector of Rwanda. Kitchen gardens help the community fight malnutrition by providing vegetables for healthy meals.',
    link: '/blog-single',
  },
  {
    id: 6,
    image: '/images/visit-6.jpeg',
    date: 'January 30, 2020',
    author: 'Admin',
    comments: 3,
    title: 'On a visit to the Kigali Genocide Memorial, students pay tribute to victims of the 1994 genocide against the Tutsi. The final resting place for more than 250,000 genocide victims, the memorial’s goal is to prevent future mass atrocities and genocides, in Rwanda and the world.',
    link: '/blog-single',
  },
]

const Gallery = () => {
  return (
    <>
    
      {/* Hero Section */}
      <section
        className="relative h-[60vh] bg-cover bg-center flex items-end"
        style={{ backgroundImage: `url('/images/bg_1.webp')` }}
      >
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative z-10 container mx-auto px-4 pb-10">
          <p className="text-white text-sm mb-2">
            <a href="/" className="underline">Home</a> / Gallery
          </p>
          <h1 className="text-white text-4xl font-bold">Gallery</h1>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleyPosts.map(post => (
              <div key={post.id} className="bg-white shadow rounded overflow-hidden">
                <a href={post.link}>
                  <div
                    className="h-56 bg-cover bg-center"
                    style={{ backgroundImage: `url('${post.image}')` }}
                  />
                </a>
                <div className="p-4">
                  <div className="text-sm text-gray-500 flex justify-between mb-2">
                    <span>{post.date}</span>
                    <span>{post.author}</span>
                    <span><i className="fa fa-comment mr-1"></i>{post.comments}</span>
                  </div>
                  <h3 className="text-lg font-semibold">
                    <a href={post.link} className="hover:text-orange-600">
                      {post.title}
                    </a>
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-10 text-center">
            <ul className="inline-flex space-x-2 text-sm">
              <li><a href="#" className="px-3 py-1 border rounded">&lt;</a></li>
              <li><span className="px-3 py-1 bg-orange-500 text-white rounded">1</span></li>
              <li><a href="/blog" className="px-3 py-1 border rounded">2</a></li>
              <li><a href="#" className="px-3 py-1 border rounded">3</a></li>
              <li><a href="#" className="px-3 py-1 border rounded">4</a></li>
              <li><a href="#" className="px-3 py-1 border rounded">&gt;</a></li>
            </ul>
          </div>
        </div>
        
      </section>
      <Footer/>
    </>
  )
}

export default Gallery
