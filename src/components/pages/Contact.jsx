import React from 'react'
import { motion } from 'framer-motion'
import ContactForm from '@/components/organisms/ContactForm'
import ContactInfo from '@/components/molecules/ContactInfo'
import ApperIcon from '@/components/ApperIcon'

const Contact = () => {
  return (
    <div className="section-padding">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 hero-pattern">
        <div className="max-w-7xl mx-auto container-padding py-16 lg:py-24">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Contact <span className="text-gradient">Us</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Ready to discuss your manufacturing needs? Get in touch with our team 
                and let's explore how we can help bring your project to life.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="max-w-7xl mx-auto container-padding py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <ContactInfo />

            {/* Map Placeholder */}
            <div className="card p-0 overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 bg-slate-200 flex items-center justify-center">
                <div className="text-center">
                  <ApperIcon name="MapPin" className="text-slate-400 mx-auto mb-2" size={48} />
                  <p className="text-slate-600">Interactive map would be displayed here</p>
                </div>
              </div>
            </div>

            {/* Additional Contact Methods */}
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Other Ways to Reach Us</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <ApperIcon name="MessageSquare" className="text-primary-600" size={20} />
                  <div>
                    <p className="font-medium text-slate-900">Live Chat</p>
                    <p className="text-sm text-slate-600">Available Mon-Fri, 9 AM - 5 PM EST</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <ApperIcon name="Calendar" className="text-primary-600" size={20} />
                  <div>
                    <p className="font-medium text-slate-900">Schedule a Visit</p>
                    <p className="text-sm text-slate-600">Tour our facility and meet our team</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <ApperIcon name="Users" className="text-primary-600" size={20} />
                  <div>
                    <p className="font-medium text-slate-900">Sales Team</p>
                    <p className="text-sm text-slate-600">Dedicated support for your projects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600">
              Quick answers to common questions about our services.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "What is your typical lead time for custom projects?",
                answer: "Lead times vary depending on project complexity and current capacity. Typically, we can deliver custom components within 2-4 weeks. Contact us for specific timeline estimates."
              },
              {
                question: "Do you provide material certification?",
                answer: "Yes, we provide complete material certifications and traceability documentation for all components. This includes material test reports and compliance certificates."
              },
              {
                question: "What file formats do you accept for quotes?",
                answer: "We accept most common CAD file formats including STEP, IGES, DWG, DXF, and PDF drawings. Our engineering team can work with your preferred format."
              },
              {
                question: "Do you offer assembly services?",
                answer: "Yes, we provide complete assembly services including mechanical assembly, testing, and packaging. We can handle everything from simple sub-assemblies to complex finished products."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="card p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{faq.question}</h3>
                <p className="text-slate-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact