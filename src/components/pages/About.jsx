import React from 'react'
import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'

const About = () => {
  const milestones = [
    { year: '1999', title: 'Company Founded', description: 'Started as a small precision machining shop' },
    { year: '2005', title: 'ISO Certification', description: 'Achieved ISO 9001:2015 certification' },
    { year: '2012', title: 'Facility Expansion', description: 'Doubled production capacity with new facility' },
    { year: '2018', title: 'Advanced Technology', description: 'Invested in state-of-the-art CNC equipment' },
    { year: '2024', title: 'Industry Leader', description: 'Recognized as top manufacturer in the region' }
  ]

  const values = [
    {
      icon: 'Target',
      title: 'Precision',
      description: 'We maintain the highest standards of accuracy in every component we manufacture.'
    },
    {
      icon: 'Handshake',
      title: 'Reliability',
      description: 'Our clients trust us to deliver quality products on time, every time.'
    },
    {
      icon: 'Lightbulb',
      title: 'Innovation',
      description: 'We continuously invest in new technologies and processes to stay ahead.'
    },
    {
      icon: 'Heart',
      title: 'Integrity',
      description: 'Honest communication and ethical business practices guide everything we do.'
    }
  ]

  const team = [
    {
      name: 'Michael Chen',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      bio: '25+ years in manufacturing with expertise in lean production and quality management.'
    },
    {
      name: 'Sarah Rodriguez',
      role: 'Chief Operating Officer',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b332c5d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      bio: 'Operations expert with a focus on process optimization and customer satisfaction.'
    },
    {
      name: 'David Kim',
      role: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      bio: 'Technology leader driving innovation in manufacturing processes and automation.'
    }
  ]

  return (
    <div className="section-padding">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 hero-pattern">
        <div className="max-w-7xl mx-auto container-padding py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                About <span className="text-gradient">ForgeCore Industries</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                For over two decades, we have been at the forefront of precision manufacturing, 
                delivering exceptional quality and reliability to clients across diverse industries.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold text-primary-600">25+</div>
                  <div className="text-slate-600">Years of Excellence</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600">500+</div>
                  <div className="text-slate-600">Projects Completed</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Our facility"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto container-padding py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            className="card p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                <ApperIcon name="Target" className="text-primary-600" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Our Mission</h2>
            </div>
            <p className="text-slate-600 text-lg">
              To deliver precision-engineered components that exceed our clients' expectations 
              through innovative manufacturing processes, unwavering quality standards, and 
              exceptional customer service.
            </p>
          </motion.div>

          <motion.div
            className="card p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                <ApperIcon name="Eye" className="text-primary-600" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Our Vision</h2>
            </div>
            <p className="text-slate-600 text-lg">
              To be the leading precision manufacturing partner, recognized for our innovation, 
              reliability, and commitment to helping our clients achieve their goals through 
              superior manufacturing solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              These principles guide our decisions and define our company culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl mb-6">
                  <ApperIcon name={value.icon} className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-7xl mx-auto container-padding py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Journey</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Key milestones that have shaped ForgeCore Industries over the years.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-200"></div>
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                  <div className="card p-6">
                    <div className="text-2xl font-bold text-primary-600 mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">{milestone.title}</h3>
                    <p className="text-slate-600">{milestone.description}</p>
                  </div>
                </div>
                <div className="relative flex items-center justify-center">
                  <div className="w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Leadership Team</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Meet the experienced professionals leading ForgeCore Industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="card p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                <p className="text-slate-600 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About