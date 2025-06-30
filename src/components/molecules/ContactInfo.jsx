import React from 'react'
import ApperIcon from '@/components/ApperIcon'

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: 'MapPin',
      label: 'Address',
      value: '1234 Industrial Blvd, Manufacturing District, MI 48201'
    },
    {
      icon: 'Phone',
      label: 'Phone',
      value: '+1 (555) 123-4567'
    },
    {
      icon: 'Mail',
      label: 'Email',
      value: 'info@forgecoreindustries.com'
    },
    {
      icon: 'Clock',
      label: 'Business Hours',
      value: 'Mon-Fri: 8:00 AM - 6:00 PM EST'
    }
  ]

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-slate-900 mb-4">Get in Touch</h3>
      {contactDetails.map((detail) => (
        <div key={detail.label} className="flex items-start space-x-4">
          <div className="flex items-center justify-center w-10 h-10 bg-primary-100 rounded-lg flex-shrink-0">
            <ApperIcon name={detail.icon} className="text-primary-600" size={20} />
          </div>
          <div>
            <p className="font-medium text-slate-900">{detail.label}</p>
            <p className="text-slate-600">{detail.value}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ContactInfo