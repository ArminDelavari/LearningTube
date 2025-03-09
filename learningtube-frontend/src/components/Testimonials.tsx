import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'English Learner',
      image: '/images/testimonial-1.jpg',
      quote:
        'The personalized attention from native speakers has dramatically improved my confidence in speaking English. The flexible scheduling makes it easy to learn at my own pace.',
      rating: 5,
    },
    {
      name: 'Miguel Rodriguez',
      role: 'Spanish Teacher',
      image: '/images/testimonial-2.jpg',
      quote:
        'As an instructor, I love how the platform connects me with dedicated students worldwide. The teaching tools are excellent and make online lessons engaging and effective.',
      rating: 5,
    },
    {
      name: 'Yuki Tanaka',
      role: 'Japanese Learner',
      image: '/images/testimonial-3.jpg',
      quote:
        "I've tried many language learning platforms, but LearningTube's approach to combining structured lessons with casual conversation practice is unique and effective.",
      rating: 5,
    },
  ]

  const { elementRef, isVisible } = useScrollAnimation(0.2)

  return (
    <section ref={elementRef} className="section-padding bg-dark-800/50 backdrop-blur-sm relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-950 opacity-50" />

      <div className="max-w-7xl mx-auto container-padding relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-accent-300 mb-4 rounded-2xl bg-dark-800/50 px-10 py-6"
            >
              What Our Community Says
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-dark-800/30 rounded-xl p-6 max-w-2xl mx-auto"
          >
            <p className="text-xl text-gray-300">
              Join thousands of satisfied learners and teachers who are achieving their language
              goals with LearningTube.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="card p-6 flex flex-col group hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center mb-6 bg-dark-800/30 p-6 rounded-xl">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4 ring-2 ring-accent-500/20">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-accent-300">{testimonial.name}</h3>
                  <p className="text-accent-400">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex-1 bg-dark-800/30 p-6 rounded-xl">
                <p className="text-gray-300 italic mb-6">"{testimonial.quote}"</p>
                <div className="flex text-accent-400 bg-dark-800/50 p-3 rounded-lg inline-block">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <button className="btn-primary">View More Testimonials</button>
        </motion.div>
      </div>
    </section>
  )
}
