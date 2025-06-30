import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'
import Badge from '@/components/atoms/Badge'

const ProductCard = ({ product }) => {
  return (
    <motion.div
      className="card overflow-hidden"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="aspect-w-16 aspect-h-9 bg-slate-100">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <Badge variant="primary" size="sm">{product.category}</Badge>
          <div className="flex items-center text-sm text-slate-500">
            <ApperIcon name="Package" size={16} className="mr-1" />
            {product.materials.length} Materials
          </div>
        </div>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">{product.name}</h3>
        <p className="text-slate-600 text-sm mb-4 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-slate-500">
            <ApperIcon name="Settings" size={16} className="mr-1" />
            {product.applications.length} Applications
          </div>
          <Link 
            to={`/products/${product.Id}`}
            className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center"
          >
            View Details
            <ApperIcon name="ArrowRight" size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default ProductCard