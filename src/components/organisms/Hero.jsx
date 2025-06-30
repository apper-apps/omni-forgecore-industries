import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Button from '@/components/atoms/Button'
import ApperIcon from '@/components/ApperIcon'

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 to-slate-100 hero-pattern overflow-hidden">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Precision Manufacturing
                <span className="text-gradient block">Excellence</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-lg">
                Delivering reliable, high-quality components with cutting-edge production capabilities 
                and unwavering commitment to customer satisfaction.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products">
                <Button variant="primary" size="lg" icon="Package">
                  Explore Products
                </Button>
              </Link>
              <Link to="/quote">
                <Button variant="secondary" size="lg" icon="FileText">
                  Request Quote
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900">25+</div>
                <div className="text-sm text-slate-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900">500+</div>
                <div className="text-sm text-slate-600">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900">99%</div>
                <div className="text-sm text-slate-600">Quality Rating</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Manufacturing facility"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute top-8 right-8 w-32 h-32 bg-primary-500 rounded-full opacity-20 animate-float"></div>
            <div className="absolute bottom-8 left-8 w-24 h-24 bg-primary-300 rounded-full opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero