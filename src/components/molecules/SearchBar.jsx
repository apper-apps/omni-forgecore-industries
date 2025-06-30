import React from 'react'
import ApperIcon from '@/components/ApperIcon'

const SearchBar = ({ value, onChange, placeholder = "Search products..." }) => {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <ApperIcon name="Search" className="text-slate-400" size={20} />
      </div>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="input-field pl-10"
      />
    </div>
  )
}

export default SearchBar