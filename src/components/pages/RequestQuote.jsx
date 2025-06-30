import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { motion } from 'framer-motion'
import Button from '@/components/atoms/Button'
import Input from '@/components/atoms/Input'
import TextArea from '@/components/atoms/TextArea'
import Select from '@/components/atoms/Select'
import ApperIcon from '@/components/ApperIcon'
import Loading from '@/components/ui/Loading'
import Error from '@/components/ui/Error'
import { productService } from '@/services/api/productService'
import { quoteService } from '@/services/api/quoteService'

const RequestQuote = () => {
  const [searchParams] = useSearchParams()
  const preselectedProductId = searchParams.get('product')
  
  const [currentStep, setCurrentStep] = useState(1)
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const [formData, setFormData] = useState({
    // Company Information
    company: '',
    contactName: '',
    email: '',
    phone: '',
    // Project Details
    projectName: '',
    timeline: '',
    budget: '',
    // Product Selection
    selectedProducts: [],
    quantities: {},
    // Requirements
    requirements: '',
    specifications: '',
    // Files
    attachments: []
  })
  
  const [errors, setErrors] = useState({})

  const timelineOptions = [
    { value: 'rush', label: 'Rush (1-2 weeks)' },
    { value: 'standard', label: 'Standard (3-4 weeks)' },
    { value: 'flexible', label: 'Flexible (5+ weeks)' },
    { value: 'ongoing', label: 'Ongoing Project' }
  ]

  const budgetOptions = [
    { value: 'under-5k', label: 'Under $5,000' },
    { value: '5k-25k', label: '$5,000 - $25,000' },
    { value: '25k-100k', label: '$25,000 - $100,000' },
    { value: 'over-100k', label: 'Over $100,000' },
    { value: 'tbd', label: 'To be determined' }
  ]

  const steps = [
    { number: 1, title: 'Company Info', description: 'Tell us about your company' },
    { number: 2, title: 'Project Details', description: 'Describe your project needs' },
    { number: 3, title: 'Product Selection', description: 'Choose products and quantities' },
    { number: 4, title: 'Requirements', description: 'Specify technical requirements' },
    { number: 5, title: 'Review & Submit', description: 'Review and submit your quote' }
  ]

  useEffect(() => {
    loadProducts()
  }, [])

  useEffect(() => {
    if (preselectedProductId && products.length > 0) {
      const productId = parseInt(preselectedProductId)
      if (!formData.selectedProducts.includes(productId)) {
        setFormData(prev => ({
          ...prev,
          selectedProducts: [productId],
          quantities: { ...prev.quantities, [productId]: 1 }
        }))
      }
    }
  }, [preselectedProductId, products])

  const loadProducts = async () => {
    try {
      setLoading(true)
      const data = await productService.getAll()
      setProducts(data)
    } catch (err) {
      setError('Failed to load products')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleProductSelection = (productId) => {
    const id = parseInt(productId)
    setFormData(prev => {
      const isSelected = prev.selectedProducts.includes(id)
      const newSelectedProducts = isSelected
        ? prev.selectedProducts.filter(pid => pid !== id)
        : [...prev.selectedProducts, id]
      
      const newQuantities = { ...prev.quantities }
      if (!isSelected) {
        newQuantities[id] = 1
      } else {
        delete newQuantities[id]
      }
      
      return {
        ...prev,
        selectedProducts: newSelectedProducts,
        quantities: newQuantities
      }
    })
  }

  const handleQuantityChange = (productId, quantity) => {
    setFormData(prev => ({
      ...prev,
      quantities: {
        ...prev.quantities,
        [productId]: Math.max(1, parseInt(quantity) || 1)
      }
    }))
  }

  const validateStep = (step) => {
    const newErrors = {}
    
    if (step === 1) {
      if (!formData.company.trim()) newErrors.company = 'Company name is required'
      if (!formData.contactName.trim()) newErrors.contactName = 'Contact name is required'
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required'
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address'
      }
      if (!formData.phone.trim()) newErrors.phone = 'Phone number is required'
    }
    
    if (step === 2) {
      if (!formData.projectName.trim()) newErrors.projectName = 'Project name is required'
      if (!formData.timeline) newErrors.timeline = 'Please select a timeline'
    }
    
    if (step === 3) {
      if (formData.selectedProducts.length === 0) {
        newErrors.selectedProducts = 'Please select at least one product'
      }
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, steps.length))
    }
  }

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
  }

  const handleSubmit = async () => {
    if (!validateStep(currentStep)) return
    
    setSubmitting(true)
    
    try {
      await quoteService.create({
        ...formData,
        timestamp: new Date().toISOString()
      })
      
      toast.success('Quote request submitted successfully! We will get back to you within 24 hours.')
      
      // Reset form
      setFormData({
        company: '',
        contactName: '',
        email: '',
        phone: '',
        projectName: '',
        timeline: '',
        budget: '',
        selectedProducts: [],
        quantities: {},
        requirements: '',
        specifications: '',
        attachments: []
      })
      setCurrentStep(1)
    } catch (err) {
      toast.error('Failed to submit quote request. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  if (loading) return <Loading />
  if (error) return <Error message={error} onRetry={loadProducts} />

  const selectedProductsData = products.filter(p => formData.selectedProducts.includes(p.Id))

  return (
    <div className="section-padding">
      <div className="max-w-4xl mx-auto container-padding">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Request a <span className="text-gradient">Quote</span>
          </h1>
          <p className="text-xl text-slate-600">
            Get a custom quote for your manufacturing project. Our team will review your 
            requirements and provide a detailed proposal.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className={`flex flex-col items-center ${index < steps.length - 1 ? 'flex-1' : ''}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold mb-2 ${
                    currentStep >= step.number
                      ? 'bg-primary-600 text-white'
                      : 'bg-slate-200 text-slate-600'
                  }`}>
                    {currentStep > step.number ? (
                      <ApperIcon name="Check" size={20} />
                    ) : (
                      step.number
                    )}
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium text-slate-900">{step.title}</div>
                    <div className="text-xs text-slate-500 hidden sm:block">{step.description}</div>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className={`flex-1 h-1 mx-4 ${
                    currentStep > step.number ? 'bg-primary-600' : 'bg-slate-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <motion.div
          className="card p-8"
          key={currentStep}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Step 1: Company Information */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-slate-900 mb-6">Company Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Company Name"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  error={errors.company}
                  required
                />
                <Input
                  label="Contact Name"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleChange}
                  error={errors.contactName}
                  required
                />
                <Input
                  label="Email Address"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  required
                />
                <Input
                  label="Phone Number"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  error={errors.phone}
                  required
                />
              </div>
            </div>
          )}

          {/* Step 2: Project Details */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-slate-900 mb-6">Project Details</h2>
              <Input
                label="Project Name"
                name="projectName"
                value={formData.projectName}
                onChange={handleChange}
                error={errors.projectName}
                required
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Select
                  label="Timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  options={timelineOptions}
                  error={errors.timeline}
                  required
                />
                <Select
                  label="Budget Range"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  options={budgetOptions}
                />
              </div>
            </div>
          )}

          {/* Step 3: Product Selection */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-slate-900 mb-6">Product Selection</h2>
              {errors.selectedProducts && (
                <p className="text-error text-sm">{errors.selectedProducts}</p>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {products.map((product) => (
                  <div
                    key={product.Id}
                    className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                      formData.selectedProducts.includes(product.Id)
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                    onClick={() => handleProductSelection(product.Id)}
                  >
                    <div className="flex items-start space-x-4">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-slate-900 mb-1">{product.name}</h3>
                        <p className="text-sm text-slate-600 mb-2">{product.category}</p>
                        {formData.selectedProducts.includes(product.Id) && (
                          <div className="flex items-center space-x-2">
                            <label className="text-sm font-medium text-slate-700">Quantity:</label>
                            <input
                              type="number"
                              min="1"
                              value={formData.quantities[product.Id] || 1}
                              onChange={(e) => handleQuantityChange(product.Id, e.target.value)}
                              className="w-20 px-2 py-1 border border-slate-300 rounded text-sm"
                              onClick={(e) => e.stopPropagation()}
                            />
                          </div>
                        )}
                      </div>
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        formData.selectedProducts.includes(product.Id)
                          ? 'border-primary-500 bg-primary-500'
                          : 'border-slate-300'
                      }`}>
                        {formData.selectedProducts.includes(product.Id) && (
                          <ApperIcon name="Check" className="text-white" size={14} />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Requirements */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-slate-900 mb-6">Technical Requirements</h2>
              <TextArea
                label="Project Requirements"
                name="requirements"
                value={formData.requirements}
                onChange={handleChange}
                rows={4}
                placeholder="Describe your project requirements, applications, and any specific needs..."
              />
              <TextArea
                label="Technical Specifications"
                name="specifications"
                value={formData.specifications}
                onChange={handleChange}
                rows={4}
                placeholder="Include dimensions, tolerances, materials, finishes, or any technical specifications..."
              />
              <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center">
                <ApperIcon name="Upload" className="text-slate-400 mx-auto mb-2" size={32} />
                <p className="text-slate-600 mb-2">Upload drawings, specifications, or reference files</p>
                <p className="text-sm text-slate-500">Supported formats: PDF, DWG, DXF, STEP, IGES (Max 10MB each)</p>
              </div>
            </div>
          )}

          {/* Step 5: Review & Submit */}
          {currentStep === 5 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-slate-900 mb-6">Review Your Quote Request</h2>
              
              {/* Company Info Review */}
              <div className="border border-slate-200 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 mb-3">Company Information</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div><strong>Company:</strong> {formData.company}</div>
                  <div><strong>Contact:</strong> {formData.contactName}</div>
                  <div><strong>Email:</strong> {formData.email}</div>
                  <div><strong>Phone:</strong> {formData.phone}</div>
                </div>
              </div>

              {/* Project Details Review */}
              <div className="border border-slate-200 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 mb-3">Project Details</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div><strong>Project:</strong> {formData.projectName}</div>
                  <div><strong>Timeline:</strong> {timelineOptions.find(t => t.value === formData.timeline)?.label}</div>
                  {formData.budget && (
                    <div><strong>Budget:</strong> {budgetOptions.find(b => b.value === formData.budget)?.label}</div>
                  )}
                </div>
              </div>

              {/* Selected Products Review */}
              <div className="border border-slate-200 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 mb-3">Selected Products</h3>
                <div className="space-y-2">
                  {selectedProductsData.map((product) => (
                    <div key={product.Id} className="flex justify-between items-center text-sm">
                      <span>{product.name}</span>
                      <span>Quantity: {formData.quantities[product.Id]}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirements Review */}
              {(formData.requirements || formData.specifications) && (
                <div className="border border-slate-200 rounded-lg p-4">
                  <h3 className="font-semibold text-slate-900 mb-3">Requirements</h3>
                  {formData.requirements && (
                    <div className="mb-3">
                      <strong className="text-sm">Project Requirements:</strong>
                      <p className="text-sm text-slate-600 mt-1">{formData.requirements}</p>
                    </div>
                  )}
                  {formData.specifications && (
                    <div>
                      <strong className="text-sm">Technical Specifications:</strong>
                      <p className="text-sm text-slate-600 mt-1">{formData.specifications}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-8 border-t border-slate-200">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
              icon="ArrowLeft"
            >
              Previous
            </Button>
            
            {currentStep < steps.length ? (
              <Button
                variant="primary"
                onClick={nextStep}
                icon="ArrowRight"
                iconPosition="right"
              >
                Next Step
              </Button>
            ) : (
              <Button
                variant="primary"
                onClick={handleSubmit}
                loading={submitting}
                icon="Send"
              >
                Submit Quote Request
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default RequestQuote