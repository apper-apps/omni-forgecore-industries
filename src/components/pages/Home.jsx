import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
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

  const testimonials = [
    {
      Id: 1,
      quote: "ForgeCore Industries consistently delivers exceptional quality components on time. Their precision machining capabilities have been instrumental in our product success.",
      name: "Sarah Chen",
      title: "VP of Engineering",
      company: "AeroTech Solutions",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      Id: 2,
      quote: "The team's expertise in complex assemblies and their commitment to quality standards make them our go-to manufacturing partner for critical components.",
      name: "Michael Rodriguez",
      title: "Operations Director",
      company: "Precision Dynamics",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      Id: 3,
      quote: "Working with ForgeCore has streamlined our production process. Their attention to detail and rapid prototyping capabilities are unmatched in the industry.",
      name: "Jennifer Walsh",
      title: "Chief Technology Officer",
      company: "Innovation Labs",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      Id: 4,
      quote: "The quality of work and responsiveness from ForgeCore's team has exceeded our expectations. They've become an integral part of our supply chain.",
      name: "David Park",
      title: "Manufacturing Manager",
      company: "TechFlow Industries",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ]

  const companyLogos = [
    { Id: 1, name: "Boeing", logo: "https://logos-world.net/wp-content/uploads/2020/03/Boeing-Logo.png" },
    { Id: 2, name: "Lockheed Martin", logo: "https://logos-world.net/wp-content/uploads/2020/12/Lockheed-Martin-Logo.png" },
    { Id: 3, name: "General Electric", logo: "https://logos-world.net/wp-content/uploads/2020/09/General-Electric-Logo.png" },
    { Id: 4, name: "Siemens", logo: "https://logos-world.net/wp-content/uploads/2020/06/Siemens-Logo.png" },
    { Id: 5, name: "Honeywell", logo: "https://logos-world.net/wp-content/uploads/2020/12/Honeywell-Logo.png" },
    { Id: 6, name: "Raytheon", logo: "https://logos-world.net/wp-content/uploads/2020/12/Raytheon-Logo.png" }
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

      {/* Client Testimonials */}
      <section className="section-padding bg-slate-900">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Trusted by industry leaders for precision manufacturing and exceptional service.
            </p>
          </div>

          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                nextEl: '.testimonial-next',
                prevEl: '.testimonial-prev',
              }}
              pagination={{
                clickable: true,
                bulletClass: 'swiper-pagination-bullet !bg-white/30',
                bulletActiveClass: 'swiper-pagination-bullet-active !bg-white'
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                }
              }}
              className="testimonials-swiper"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.Id}>
                  <motion.div
                    className="bg-white rounded-2xl p-8 shadow-xl h-full"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="flex items-center mb-6">
                      <ApperIcon name="Quote" className="text-primary-500 mr-3" size={24} />
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <ApperIcon key={i} name="Star" className="text-yellow-400 fill-current" size={16} />
                        ))}
                      </div>
                    </div>
                    <p className="text-slate-700 text-lg mb-8 leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                        <p className="text-slate-600 text-sm">{testimonial.title}</p>
                        <p className="text-primary-600 text-sm font-medium">{testimonial.company}</p>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation */}
            <button className="testimonial-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-slate-50 transition-colors">
              <ApperIcon name="ChevronLeft" className="text-slate-600" size={20} />
            </button>
            <button className="testimonial-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-slate-50 transition-colors">
              <ApperIcon name="ChevronRight" className="text-slate-600" size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Company Logos */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg text-slate-600">
              Partnering with world-class companies to deliver exceptional results.
            </p>
          </div>

          <div className="relative overflow-hidden">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={60}
              slidesPerView={2}
              loop={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              speed={3000}
              breakpoints={{
                640: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 4,
                },
                1024: {
                  slidesPerView: 6,
                }
              }}
              className="company-logos-swiper"
            >
              {[...companyLogos, ...companyLogos].map((company, index) => (
                <SwiperSlide key={`${company.Id}-${index}`}>
                  <div className="flex items-center justify-center h-20 px-4">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="max-h-12 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
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