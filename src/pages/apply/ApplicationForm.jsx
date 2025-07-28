import React, { useState } from 'react'
import Footer from '../../components/Footer'
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3'

const data = {
  USA: {
    'Lewis University': ['Computer Science', 'Business', 'Nursing'],
    'Kent State University': ['Engineering', 'Education', 'Health Sciences'],
  },
  Canada: {
    'University of Regina': ['Science', 'Arts', 'Engineering'],
    'Centennial College': ['Media', 'Business', 'IT'],
    'Yorkville University': ['Psychology', 'Business', 'Interior Design'],
    'Fleming College': ['Environmental Studies', 'Law', 'Trades'],
    'Northwestern Polytechnic (Alberta)': ['Technology', 'Health Care'],
    'University of Niagara Falls Canada': ['Computer Science', 'AI'],
    'Algoma University': ['Biology', 'Finance', 'History'],
    'University Canada West (UCW)': ['Commerce', 'Marketing'],
    'BLI Canada - Montreal (French programs)': ['French Language Programs'],
    'SELC Career College Vancouver': ['Hospitality', 'Marketing'],
    'George Brown College - Waterfront': ['Nursing', 'Culinary Arts'],
    'York University - School of Continuing Studies': ['Business', 'Technology'],
    'Niagara College': ['Tourism', 'Food Science'],
    'University of Victoria (via Kaplan International)': ['Engineering', 'Arts'],
    'International Language Academy of Canada (ILAC) - Toronto (ESL)': ['English Language Programs'],
  },
  UK: {
    'University of Oxford': ['Law', 'Philosophy', 'Medicine'],
    'University of Manchester': ['Computer Science', 'Engineering'],
  },
  Germany: {
    'Technical University of Munich': ['Robotics', 'Mechanical Engineering'],
  },
  Ireland: {
    'Trinity College Dublin': ['History', 'Computer Science'],
  },
  Australia: {
    'University of Sydney': ['Medicine', 'Law'],
  },
  Poland: {
    'Warsaw University': ['Economics', 'Computer Science'],
  },
}

const PUBLIC_KEY = 'FLWPUBK_TEST-xxxxxxxxxxxxxxxxxxxxx' // Replace with your real Flutterwave public key

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    country: '',
    university: '',
    program: '',
    hasPaid: false,
    document: null,
    txRef: '',
  })

  const handleChange = (e) => {
    const { name, value, type, files } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value,
      ...(name === 'country' ? { university: '', program: '' } : {}),
      ...(name === 'university' ? { program: '' } : {}),
    }))
  }

  const config = {
    public_key: PUBLIC_KEY,
    tx_ref: Date.now(),
    amount: 100,
    currency: 'USD',
    payment_options: 'mobilemoney',
    customer: {
      email: formData.email,
      name: formData.fullName,
    },
    customizations: {
      title: 'Application Review Fee',
      description: 'Pay $100 to review your application',
      logo: 'https://yourdomain.com/logo.png',
    },
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.hasPaid) return alert('Please complete the $100 payment.')
    if (!formData.document) return alert('Please upload your document.')
    alert('Application submitted successfully!')
    // Here you can handle uploading to your backend or database
  }

  const availableUniversities = formData.country ? Object.keys(data[formData.country]) : []
  const availablePrograms =
    formData.country && formData.university ? data[formData.country][formData.university] : []

  return (
    <>
      <section className="bg-gray-100 py-16 px-4 min-h-screen">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded shadow">
          <h2 className="text-2xl font-bold mb-6 text-center text-orange-600">
            University Application Form
          </h2>
          <p className="text-center text-gray-900 mb-6">
  🌍 Take the first step toward a global future! At <strong>International Mindset Pathway</strong>, we make your dream of studying abroad easier and stress-free. 
  Our team will guide you through every step — from choosing the right program to submitting your visa. Start your journey today by completing this application!
</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name & Email */}
            <div>
              <label className="block mb-1 font-medium">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full border p-2 rounded"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border p-2 rounded"
              />
            </div>

            {/* Country Selector */}
            <div>
              <label className="block mb-1 font-medium">Select Country</label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className="w-full border p-2 rounded"
              >
                <option value="">-- Choose --</option>
                {Object.keys(data).map((country, i) => (
                  <option key={i} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>

            {/* University Selector */}
            {formData.country && (
              <div>
                <label className="block mb-1 font-medium">Select University</label>
                <select
                  name="university"
                  value={formData.university}
                  onChange={handleChange}
                  required
                  className="w-full border p-2 rounded"
                >
                  <option value="">-- Choose --</option>
                  {availableUniversities.map((uni, i) => (
                    <option key={i} value={uni}>
                      {uni}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Program Selector */}
            {formData.university && (
              <div>
                <label className="block mb-1 font-medium">Select Program</label>
                <select
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  required
                  className="w-full border p-2 rounded"
                >
                  <option value="">-- Choose --</option>
                  {availablePrograms.map((prog, i) => (
                    <option key={i} value={prog}>
                      {prog}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Payment Button */}
{!formData.hasPaid && (
  <div className="text-center">
    
    <FlutterWaveButton
      {...config}
      callback={(response) => {
        if (response.status === 'successful') {
          setFormData((prev) => ({
            ...prev,
            hasPaid: true,
            txRef: response.tx_ref,
          }))
          alert('Payment successful! Now upload your document.')
          closePaymentModal()
        }
      }}
      onClose={() => alert('Payment closed.')}
      text="Pay $100 Application Fee"
      className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 mt-4"
    />
     <p className="mb-3 text-sm text-gray-700">
      Please note: A <strong>$100 application review fee</strong> is required before uploading your documents.
      This amount will be deducted from the final service fee after your documents are reviewed.
    </p>
  </div>
)}


            {/* Upload & Submit */}
            {formData.hasPaid && (
              <>
                <div>
                  <label className="block mb-1 font-medium">Upload Document (PDF, JPG)</label>
                  <input
                    type="file"
                    name="document"
                    accept=".pdf,.jpg,.png"
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
                >
                  Submit Application
                </button>
              </>
            )}
          </form>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default ApplicationForm
