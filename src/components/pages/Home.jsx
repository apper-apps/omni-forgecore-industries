import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Hero from '@/components/organisms/Hero'
import Button from '@/components/atoms/Button'
import ApperIcon from '@/components/ApperIcon'

const Home = () => {
  const features = [
    {
      icon: 'Zap',
      title: 'Precision Engineering',
      description: 'State-of-the-art machinery and expert craftsmanship ensure every component meets exact specifications.'
    },
    {
      icon: 'Shield',
      title: 'Quality Assurance',
      description: 'Rigorous testing and certification processes guarantee the highest quality standards for all products.'
    },
    {
      icon: 'Clock',
      title: 'On-Time Delivery',
      description: 'Reliable production schedules and efficient logistics ensure your projects stay on track.'
    },
    {
      icon: 'Users',
      title: 'Expert Support',
      description: 'Dedicated team of engineers and technicians provide comprehensive support throughout your project.'
    }
  ]

  const capabilities = [
    {
      name: 'CNC Machining',
      description: 'Precision machining for complex components',
      image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Sheet Metal',
      description: 'Custom fabrication and forming services',
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Assembly',
      description: 'Complete product assembly solutions',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ]

  const certifications = [
    { name: 'ISO 9001:2015', logo: 'Award' },
    { name: 'AS9100D', logo: 'Shield' },
    { name: 'ITAR Registered', logo: 'Lock' },
    { name: 'RoHS Compliant', logo: 'CheckCircle' }
  ]

  return (
    <div>
      <Hero />

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose ForgeCore Industries
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We combine decades of manufacturing expertise with cutting-edge technology 
              to deliver exceptional results for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl mb-6">
                  <ApperIcon name={feature.icon} className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Showcase */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Advanced Manufacturing Capabilities
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Our state-of-the-art facility houses the latest in manufacturing technology, 
                enabling us to tackle complex projects with precision and efficiency.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                {capabilities.map((capability, index) => (
                  <div key={capability.name} className="text-center">
                    <img
                      src={capability.image}
                      alt={capability.name}
                      className="w-full h-24 object-cover rounded-lg mb-3"
                    />
                    <h4 className="font-semibold text-slate-900 mb-1">{capability.name}</h4>
                    <p className="text-sm text-slate-600">{capability.description}</p>
                  </div>
                ))}
              </div>
              <Link to="/capabilities">
                <Button variant="primary" icon="ArrowRight">
                  View All Capabilities
                </Button>
              </Link>
            </motion.div>

            <motion.div
              className="relative"
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
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Quality Certifications
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our commitment to quality is backed by industry-leading certifications and standards.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 rounded-xl mb-4">
                  <ApperIcon name={cert.logo} className="text-primary-600" size={32} />
                </div>
                <h3 className="font-semibold text-slate-900">{cert.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Get a custom quote for your manufacturing needs. Our team is ready to help 
              bring your vision to life with precision and reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/quote">
                <Button variant="secondary" size="lg" icon="FileText">
                  Request Quote
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="ghost" size="lg" icon="Phone" className="text-white hover:bg-white/10">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home