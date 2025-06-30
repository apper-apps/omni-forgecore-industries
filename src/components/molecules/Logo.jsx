import React from 'react'
import { Link } from 'react-router-dom'
import ApperIcon from '@/components/ApperIcon'

const Logo = ({ className = '' }) => {
  return (
    <Link to="/" className={`flex items-center space-x-3 ${className}`}>
      <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg">
        <ApperIcon name="Zap" className="text-white" size={24} />
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold text-slate-900">ForgeCore</span>
        <span className="text-sm text-slate-600 -mt-1">Industries</span>
      </div>
    </Link>
  )
}

export default Logo