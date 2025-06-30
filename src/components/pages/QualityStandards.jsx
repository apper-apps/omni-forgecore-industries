import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import CertificationCard from '@/components/molecules/CertificationCard'
import Loading from '@/components/ui/Loading'
import Error from '@/components/ui/Error'
import ApperIcon from '@/components/ApperIcon'
import { certificationService } from '@/services/api/certificationService'

const QualityStandards = () => {
  const [certifications, setCertifications] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const qualityMetrics = [
    { metric: 'Defect Rate', value: '<0.1%', icon: 'Target' },
    { metric: 'On-Time Delivery', value: '99.5%', icon: 'Clock' },
    { metric: 'Customer Satisfaction', value: '98.7%', icon: 'ThumbsUp' },
    { metric: 'First Pass Yield', value: '99.2%', icon: 'CheckCircle' }
  ]

  const qualityProcess = [
    {
      step: '01',
      title: 'Incoming Inspection',
      description: 'All raw materials undergo rigorous inspection before entering production.',
      icon: 'Eye'
    },
    {
      step: '02',
      title: 'In-Process Control',
      description: 'Continuous monitoring throughout manufacturing ensures consistent quality.',
      icon: 'Settings'
    },
    {
      step: '03',
      title: 'Final Inspection',
      description: 'Comprehensive testing and validation before product release.',
      icon: 'CheckSquare'
    },
    {
      step: '04',
      title: 'Documentation',
      description: 'Complete traceability and documentation for every manufactured part.',
      icon: 'FileText'
    }
  ]

  const standards = [
    {
      name: 'ISO 9001:2015',
      description: 'Quality Management Systems standard ensuring consistent product quality and customer satisfaction.',
      scope: 'Company-wide quality management'
    },
    {
      name: 'AS9100D',
      description: 'Aerospace Quality Management System standard for aerospace manufacturing.',
      scope: 'Aerospace products and services'
    },
    {
      name: 'ISO 14001',
      description: 'Environmental Management Systems standard for sustainable manufacturing practices.',
      scope: 'Environmental compliance'
    },
    {
      name: 'OHSAS 18001',
      description: 'Occupational Health and Safety Management Systems standard.',
      scope: 'Workplace safety management'
    }
  ]

  useEffect(() => {
    loadCertifications()
  }, [])

  const loadCertifications = async () => {
    try {
      setLoading(true)
      setError('')
      const data = await certificationService.getAll()
      setCertifications(data)
    } catch (err) {
      setError('Failed to load certifications. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <Loading type="cards" />
  if (error) return <Error message={error} onRetry={loadCertifications} />

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
                Quality <span className="text-gradient">Standards</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12">
                Our commitment to excellence is demonstrated through rigorous quality standards, 
                comprehensive certifications, and continuous improvement processes.
              </p>
            </motion.div>

            {/* Quality Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {qualityMetrics.map((metric, index) => (
                <motion.div
                  key={metric.metric}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-xl mb-4">
                    <ApperIcon name={metric.icon} className="text-primary-600" size={24} />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                    {metric.value}
                  </div>
                  <div className="text-slate-600 font-medium">{metric.metric}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Process */}
      <section className="max-w-7xl mx-auto container-padding py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Our Quality Process
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Every product follows our comprehensive quality assurance process from start to finish.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {qualityProcess.map((process, index) => (
            <motion.div
              key={process.step}
              className="relative text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative z-10 card p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl mb-4">
                  <ApperIcon name={process.icon} className="text-white" size={24} />
                </div>
                <div className="absolute top-2 right-2 text-4xl font-bold text-primary-100">
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{process.title}</h3>
                <p className="text-slate-600 text-sm">{process.description}</p>
              </div>
              {index < qualityProcess.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-0">
                  <ApperIcon name="ArrowRight" className="text-primary-300" size={24} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Standards */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              International Standards
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We adhere to the highest international standards for quality, safety, and environmental responsibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {standards.map((standard, index) => (
              <motion.div
                key={standard.name}
                className="card p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ApperIcon name="Award" className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">{standard.name}</h3>
                    <p className="text-slate-600 mb-3">{standard.description}</p>
                    <div className="text-sm text-primary-600 font-medium">
                      Scope: {standard.scope}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="max-w-7xl mx-auto container-padding py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Current Certifications
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our active certifications demonstrate our ongoing commitment to quality and compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((certification, index) => (
            <CertificationCard key={certification.Id} certification={certification} index={index} />
          ))}
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 py-16">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Quality Commitment
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              We are dedicated to delivering products that not only meet but exceed your expectations. 
              Our quality management system ensures consistent excellence in every aspect of our operations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-primary-100">Inspection Coverage</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-primary-100">Quality Monitoring</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">Zero</div>
                <div className="text-primary-100">Compromise Policy</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default QualityStandards