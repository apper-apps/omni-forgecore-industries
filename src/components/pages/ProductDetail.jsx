import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Button from '@/components/atoms/Button'
import Badge from '@/components/atoms/Badge'
import Loading from '@/components/ui/Loading'
import Error from '@/components/ui/Error'
import ApperIcon from '@/components/ApperIcon'
import { productService } from '@/services/api/productService'

const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [selectedImage, setSelectedImage] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    loadProduct()
  }, [id])

  const loadProduct = async () => {
    try {
      setLoading(true)
      setError('')
      const data = await productService.getById(parseInt(id))
      setProduct(data)
    } catch (err) {
      setError('Product not found or failed to load.')
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <Loading />
  if (error) return <Error message={error} onRetry={loadProduct} />
  if (!product) return <Error message="Product not found" />

  return (
    <div className="section-padding">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-slate-600 mb-8">
          <Link to="/" className="hover:text-primary-600">Home</Link>
          <ApperIcon name="ChevronRight" size={16} />
          <Link to="/products" className="hover:text-primary-600">Products</Link>
          <ApperIcon name="ChevronRight" size={16} />
          <span className="text-slate-900">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <motion.div
              className="aspect-w-16 aspect-h-12 bg-slate-100 rounded-xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-96 object-cover"
              />
            </motion.div>
            
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-w-16 aspect-h-12 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? 'border-primary-500' : 'border-transparent'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-20 object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <Badge variant="primary" className="mb-3">{product.category}</Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                {product.name}
              </h1>
              <p className="text-lg text-slate-600">{product.description}</p>
            </div>

            {/* Specifications */}
            {product.specifications && (
              <div className="card p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="text-slate-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                      <span className="font-medium text-slate-900">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Materials */}
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Available Materials</h3>
              <div className="flex flex-wrap gap-2">
                {product.materials.map((material) => (
                  <Badge key={material} variant="secondary">{material}</Badge>
                ))}
              </div>
            </div>

            {/* Applications */}
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Applications</h3>
              <div className="space-y-2">
                {product.applications.map((application, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <ApperIcon name="Check" className="text-primary-600" size={16} />
                    <span className="text-slate-600">{application}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link to={`/quote?product=${product.Id}`} className="flex-1">
                <Button variant="primary" size="lg" icon="FileText" className="w-full">
                  Request Quote
                </Button>
              </Link>
              <Link to="/contact" className="flex-1">
                <Button variant="secondary" size="lg" icon="MessageCircle" className="w-full">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Related Products</h2>
          <div className="text-center py-12">
            <p className="text-slate-600">Related products will be displayed here.</p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ProductDetail