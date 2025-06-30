import React from 'react'
import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'
import Badge from '@/components/atoms/Badge'

const CertificationCard = ({ certification, index }) => {
  const isValid = new Date(certification.validUntil) > new Date()
  
  return (
    <motion.div
      className="card p-6"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ y: -3 }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
            <ApperIcon name="Award" className="text-primary-600" size={24} />
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">{certification.name}</h3>
            <p className="text-sm text-slate-600">{certification.issuer}</p>
          </div>
        </div>
        <Badge variant={isValid ? 'success' : 'warning'} size="sm">
          {isValid ? 'Valid' : 'Expired'}
        </Badge>
      </div>
      <div className="flex items-center justify-between">
        <div className="text-sm text-slate-500">
          Valid until: {new Date(certification.validUntil).toLocaleDateString()}
        </div>
        {certification.documentUrl && (
          <a
            href={certification.documentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 hover:text-primary-700 text-sm flex items-center"
          >
            <ApperIcon name="Download" size={16} className="mr-1" />
            Download
          </a>
        )}
      </div>
    </motion.div>
  )
}

export default CertificationCard