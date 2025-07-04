import React from 'react'
import Button from '@/components/atoms/Button'
import ApperIcon from '@/components/ApperIcon'

const Error = ({ message = 'Something went wrong', onRetry }) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
        <ApperIcon name="AlertCircle" className="text-red-600" size={32} />
      </div>
      <h3 className="text-lg font-semibold text-slate-900 mb-2">Oops! Something went wrong</h3>
      <p className="text-slate-600 mb-6 max-w-md">{message}</p>
      {onRetry && (
        <Button variant="primary" onClick={onRetry} icon="RefreshCw">
          Try Again
        </Button>
      )}
    </div>
  )
}

export default Error