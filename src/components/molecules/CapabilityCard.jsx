import React from 'react'
import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'

const CapabilityCard = ({ capability, index }) => {
  return (
    <motion.div
      className="card p-8 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl mb-6">
        <ApperIcon name={capability.icon} className="text-white" size={32} />
      </div>
      <h3 className="text-xl font-semibold text-slate-900 mb-3">{capability.name}</h3>
      <p className="text-slate-600 mb-4">{capability.description}</p>
      <div className="space-y-2">
        <div className="flex items-center justify-center text-sm text-slate-500">
          <ApperIcon name="Wrench" size={16} className="mr-2" />
          {capability.equipment.length} Equipment Types
        </div>
        <div className="flex items-center justify-center text-sm text-slate-500">
          <ApperIcon name="Layers" size={16} className="mr-2" />
          {capability.materials.length} Material Types
        </div>
      </div>
    </motion.div>
  )
}

export default CapabilityCard