import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export const Stats = () => {
  const stats = [
    {
      number: '10K+',
      label: 'Active Students',
      icon: '👨‍🎓',
    },
    {
      number: '500+',
      label: 'Expert Instructors',
      icon: '👩‍🏫',
    },
    {
      number: '30+',
      label: 'Languages',
      icon: '🌍',
    },
    {
      number: '95%',
      label: 'Satisfaction Rate',
      icon: '⭐',
    },
  ]

  const { elementRef, isVisible } = useScrollAnimation()

  return (
    <section ref={elementRef} className="section-padding bg-dark-950/50 backdrop-blur-sm relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-800 to-dark-950 opacity-50" />

      <div className="max-w-7xl mx-auto container-padding relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center relative group"
            >
              <div className="absolute inset-0 bg-accent-500/5 rounded-2xl -z-10 group-hover:bg-accent-500/10 transition-colors duration-300" />
              <div className="bg-dark-800/30 rounded-2xl p-20 backdrop-blur-sm hover:bg-dark-800/40 transition-all duration-300">
                <div className="text-4xl mb-6">{stat.icon}</div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isVisible ? { scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  className="text-4xl md:text-5xl font-bold text-accent-300 mb-4"
                >
                  {stat.number}
                </motion.div>
                <div className="px-4">
                  <p className="text-gray-300 text-lg leading-relaxed">{stat.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
