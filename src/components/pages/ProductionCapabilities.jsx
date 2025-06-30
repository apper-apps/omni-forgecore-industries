import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import CapabilityCard from '@/components/molecules/CapabilityCard'
import Loading from '@/components/ui/Loading'
import Error from '@/components/ui/Error'
import ApperIcon from '@/components/ApperIcon'
import { capabilityService } from '@/services/api/capabilityService'

const ProductionCapabilities = () => {
  const [capabilities, setCapabilities] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const stats = [
    { label: 'Production Capacity', value: '10,000', unit: 'units/month' },
    { label: 'Precision Level', value: '±0.001', unit: 'inches' },
    { label: 'Material Types', value: '50+', unit: 'available' },
    { label: 'Equipment Units', value: '25+', unit: 'machines' }
  ]

  const processes = [
    {
      name: 'CNC Machining',
      description: 'High-precision computer-controlled machining for complex geometries',
      image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      features: ['3-axis and 5-axis machining', 'Tolerances to ±0.001"', 'Various materials', 'Complex geometries']
    },
    {
      name: 'Sheet Metal Fabrication',
      description: 'Complete sheet metal solutions from cutting to finishing',
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      features: ['Laser cutting', 'Forming and bending', 'Welding services', 'Surface finishing']
    },
    {
      name: 'Assembly Services',
      description: 'Complete product assembly with quality control testing',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      features: ['Mechanical assembly', 'Electronic integration', 'Quality testing', 'Packaging services']
    }
  ]

  useEffect(() => {
    loadCapabilities()
  }, [])

  const loadCapabilities = async () => {
    try {
      setLoading(true)
      setError('')
      const data = await capabilityService.getAll()
      setCapabilities(data)
    } catch (err) {
      setError('Failed to load capabilities. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <Loading type="cards" />
  if (error) return <Error message={error} onRetry={loadCapabilities} />

  return (
    <div className="section-padding">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 hero-pattern">
        <div className="max-w-7xl mx-auto container-padding py-16 lg:py-24">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Production <span className="text-gradient">Capabilities</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12">
                Our state-of-the-art manufacturing facility is equipped with advanced machinery 
                and operated by skilled technicians to deliver exceptional precision and quality.
              </p>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-500">{stat.unit}</div>
                  <div className="text-slate-700 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Processes */}
      <section className="max-w-7xl mx-auto container-padding py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Manufacturing Processes
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our comprehensive manufacturing capabilities cover every aspect of production.
          </p>
        </div>

        <div className="space-y-16">
          {processes.map((process, index) => (
            <motion.div
              key={process.name}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <img
                  src={process.image}
                  alt={process.name}
                  className="rounded-2xl shadow-xl"
                />
              </div>
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                  {process.name}
                </h3>
                <p className="text-lg text-slate-600 mb-6">{process.description}</p>
                <div className="space-y-3">
                  {process.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center">
                        <ApperIcon name="Check" className="text-primary-600" size={14} />
                      </div>
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Core Capabilities
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive manufacturing solutions backed by years of expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <CapabilityCard key={capability.Id} capability={capability} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Equipment & Technology */}
      <section className="max-w-7xl mx-auto container-padding py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Advanced Equipment & Technology
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Our facility features the latest in manufacturing technology, ensuring precision, 
              efficiency, and consistency in every project we undertake.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <ApperIcon name="Cpu" className="text-primary-600" size={20} />
                  <span className="font-medium text-slate-900">CNC Machines</span>
                </div>
                <p className="text-sm text-slate-600 ml-7">15+ precision machining centers</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <ApperIcon name="Zap" className="text-primary-600" size={20} />
                  <span className="font-medium text-slate-900">Laser Cutting</span>
                </div>
                <p className="text-sm text-slate-600 ml-7">High-power fiber laser systems</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <ApperIcon name="Settings" className="text-primary-600" size={20} />
                  <span className="font-medium text-slate-900">Inspection</span>
                </div>
                <p className="text-sm text-slate-600 ml-7">CMM and optical measurement</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <ApperIcon name="Layers" className="text-primary-600" size={20} />
                  <span className="font-medium text-slate-900">Assembly</span>
                </div>
                <p className="text-sm text-slate-600 ml-7">Automated assembly lines</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Manufacturing equipment"
              className="rounded-2xl shadow-xl"
            />
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ProductionCapabilities