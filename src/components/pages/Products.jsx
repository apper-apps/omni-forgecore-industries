import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ProductCard from '@/components/molecules/ProductCard'
import SearchBar from '@/components/molecules/SearchBar'
import Select from '@/components/atoms/Select'
import Badge from '@/components/atoms/Badge'
import Loading from '@/components/ui/Loading'
import Error from '@/components/ui/Error'
import Empty from '@/components/ui/Empty'
import { productService } from '@/services/api/productService'

const Products = () => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedMaterial, setSelectedMaterial] = useState('')

  const categories = [
    { value: '', label: 'All Categories' },
    { value: 'Automotive', label: 'Automotive' },
    { value: 'Aerospace', label: 'Aerospace' },
    { value: 'Electronics', label: 'Electronics' },
    { value: 'Medical', label: 'Medical' },
    { value: 'Industrial', label: 'Industrial' }
  ]

  const materials = [
    { value: '', label: 'All Materials' },
    { value: 'Aluminum', label: 'Aluminum' },
    { value: 'Steel', label: 'Steel' },
    { value: 'Stainless Steel', label: 'Stainless Steel' },
    { value: 'Titanium', label: 'Titanium' },
    { value: 'Brass', label: 'Brass' },
    { value: 'Plastic', label: 'Plastic' }
  ]

  useEffect(() => {
    loadProducts()
  }, [])

  useEffect(() => {
    filterProducts()
  }, [products, searchTerm, selectedCategory, selectedMaterial])

  const loadProducts = async () => {
    try {
      setLoading(true)
      setError('')
      const data = await productService.getAll()
      setProducts(data)
    } catch (err) {
      setError('Failed to load products. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const filterProducts = () => {
    let filtered = products

    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    if (selectedCategory) {
      filtered = filtered.filter(product => product.category === selectedCategory)
    }

    if (selectedMaterial) {
      filtered = filtered.filter(product =>
        product.materials.includes(selectedMaterial)
      )
    }

    setFilteredProducts(filtered)
  }

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value)
  }

  const handleMaterialChange = (e) => {
    setSelectedMaterial(e.target.value)
  }

  const clearFilters = () => {
    setSearchTerm('')
    setSelectedCategory('')
    setSelectedMaterial('')
  }

  if (loading) return <Loading type="cards" />
  if (error) return <Error message={error} onRetry={loadProducts} />

  return (
    <div className="section-padding">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our <span className="text-gradient">Products</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Explore our comprehensive range of precision-manufactured components 
            designed to meet the demanding requirements of various industries.
          </p>
        </div>

        {/* Filters */}
        <div className="card p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <SearchBar
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search products..."
            />
            <Select
              value={selectedCategory}
              onChange={handleCategoryChange}
              options={categories}
              placeholder="Select Category"
            />
            <Select
              value={selectedMaterial}
              onChange={handleMaterialChange}
              options={materials}
              placeholder="Select Material"
            />
            <div className="flex items-center">
              {(searchTerm || selectedCategory || selectedMaterial) && (
                <button
                  onClick={clearFilters}
                  className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                >
                  Clear Filters
                </button>
              )}
            </div>
          </div>

          {/* Active Filters */}
          {(searchTerm || selectedCategory || selectedMaterial) && (
            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-200">
              {searchTerm && (
                <Badge variant="primary">Search: {searchTerm}</Badge>
              )}
              {selectedCategory && (
                <Badge variant="secondary">Category: {categories.find(c => c.value === selectedCategory)?.label}</Badge>
              )}
              {selectedMaterial && (
                <Badge variant="secondary">Material: {materials.find(m => m.value === selectedMaterial)?.label}</Badge>
              )}
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-8">
          <p className="text-slate-600">
            Showing {filteredProducts.length} of {products.length} products
          </p>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <Empty
            title="No products found"
            description="Try adjusting your filters or search terms to find what you're looking for."
            actionText="Clear Filters"
            onAction={clearFilters}
            icon="Package"
          />
        ) : (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {filteredProducts.map((product) => (
              <ProductCard key={product.Id} product={product} />
            ))}
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Products