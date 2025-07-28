import React, { useState } from 'react';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { FaChevronDown, FaChevronUp, FaComments } from 'react-icons/fa';

const visaSteps = [
  {
    title: 'Consultation',
    description: 'We help you understand the visa type you need based on your purpose: study, tourism, or work.',
  },
  {
    title: 'Document Preparation',
    description: 'Our team assists in organizing all required documents including invitation letters, transcripts, and bank statements.',
  },
  {
    title: 'Application Submission',
    description: 'We guide you through online application systems or submit documents to the appropriate embassy.',
  },
  {
    title: 'Follow-Up & Interview Prep',
    description: 'We track your visa progress and prepare you with sample questions and tips for your interview.',
  },
  {
    title: 'Post-Visa Support',
    description: 'We support you with travel arrangements, accommodation, and arrival preparation once your visa is granted.',
  },
];

const faqs = [
  {
    question: 'How long does the visa process take?',
    answer: 'It depends on the country and visa type, but typically ranges from 2 to 8 weeks.',
  },
  {
    question: 'Can you help with Schengen or US visas?',
    answer: 'Yes. We assist with multiple visa types including Schengen, USA, UK, Canada, and others.',
  },
  {
    question: 'What documents do I need for a study visa?',
    answer: 'Generally, you need an admission letter, financial proof, passport, visa forms, and photos.',
  },
];

const requiredDocs = {
  'Study Visa': [
    'University Admission Letter',
    'Financial Statement',
    'Passport Copy',
    'Passport Picture',
    'Academic Transcripts',
  ],
  'Tourist Visa': [
    'Passport Copy',
    'Travel Itinerary',
    'Hotel Booking',
    'Bank Statement',
  ],
  'Work Visa': [
    'Job Offer Letter',
    'Work Contract',
    'Educational Certificates',
    'Passport',
  ],
};

const VisaAssistance = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [selectedFiles, setSelectedFiles] = useState({
    'Study Visa': null,
    'Tourist Visa': null,
    'Work Visa': null,
  });

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const handleFileChange = (e, visaType) => {
    setSelectedFiles((prev) => ({
      ...prev,
      [visaType]: e.target.files,
    }));
  };

  const handleUpload = (visaType) => {
    const files = selectedFiles[visaType];
    if (files && files.length > 0) {
      alert(`Uploading ${files.length} file(s) for ${visaType}`);
      // TODO: Replace with actual upload logic
      setSelectedFiles((prev) => ({
        ...prev,
        [visaType]: null,
      }));
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[60vh] flex items-end"
        style={{ backgroundImage: `url('/images/visa2.jpeg')` }}
      >
        <div className="absolute inset-0 bg-black opacity-20" />
        <div className="relative z-10 container mx-auto px-4 pb-12">
          <h1 className="text-white text-4xl md:text-5xl font-bold">Visa Assistance</h1>
        </div>
      </section>

      <section className="py-16 px-4 bg-white max-w-6xl mx-auto">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-orange-600">Visa Support Tailored to Your Journey</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Navigating visa applications can be confusing and stressful. At International Mindset Pathway,
            we simplify the process, offering expert guidance every step of the way to maximize your approval chances.
          </p>
        </motion.div>

        {/* Visa Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {visaSteps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded shadow hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-orange-500 mb-2">{step.title}</h3>
              <p className="text-gray-700 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* PDF Checklist Download */}
        <div className="text-center mb-16">
          <h3 className="text-xl font-semibold mb-3">Download Visa Checklist</h3>
          <p className="text-sm text-gray-600 mb-4">Stay organized with our printable visa checklist.</p>
          <a
            href="/pdfs/visa-checklist.pdf"
            download
            className="inline-block bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition"
          >
            Download PDF
          </a>
        </div>

        {/* Upload Documents Section */}
        <div className="mb-20 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-6 text-orange-600">Upload Your Visa Documents</h3>
          <p className="text-center text-gray-600 mb-8">
            Please upload the required documents based on the visa type you’re applying for. Supported formats: PDF, JPG, PNG.
          </p>

          {Object.keys(requiredDocs).map((visaType, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded p-6 shadow-sm mb-8">
              <h4 className="text-lg font-semibold text-orange-500 mb-2">{visaType}</h4>
              <ul className="list-disc list-inside text-sm text-gray-700 mb-4">
                {requiredDocs[visaType].map((doc, i) => <li key={i}>{doc}</li>)}
              </ul>

              <input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                multiple
                onChange={(e) => handleFileChange(e, visaType)}
                className="block w-full border rounded p-2 mb-3"
              />

              {selectedFiles[visaType] && selectedFiles[visaType].length > 0 && (
                <button
                  onClick={() => handleUpload(visaType)}
                  className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
                >
                  Upload
                </button>
              )}
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mb-20 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-6 text-orange-600">Frequently Asked Questions</h3>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 border border-gray-300 rounded"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-4 py-3 bg-white flex justify-between items-center"
              >
                <span className="font-medium">{faq.question}</span>
                {openFAQ === index ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {openFAQ === index && (
                <div className="px-4 py-3 bg-gray-50 text-gray-700 text-sm">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-orange-50 border-l-4 border-orange-500 p-10 rounded text-center"
        >
          <h3 className="text-2xl font-bold text-orange-600 mb-2">Need Visa Help?</h3>
          <p className="mb-4 text-gray-700">
            Let our professionals walk you through the visa process with clarity and confidence.
          </p>
          <a
            href="/contact"
            className="inline-block bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition"
          >
            Talk to an Advisor
          </a>
        </motion.div>
      </section>

      {/* Floating Chat Button */}
      <button
        onClick={() => alert('Chat feature coming soon!')}
        className="fixed bottom-6 right-6 bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-full shadow-lg z-50"
        title="Live Chat"
      >
        <FaComments size={22} />
      </button>

      <Footer />
    </>
  );
};

export default VisaAssistance;
