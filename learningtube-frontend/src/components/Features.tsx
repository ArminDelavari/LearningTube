import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { motion } from 'framer-motion'

export const Features = () => {
  const features = [
    {
      title: 'Live 1-on-1 Sessions',
      description:
        'Get personalized attention from expert instructors in real-time video sessions.',
      icon: '🎯',
    },
    {
      title: 'Flexible Schedule',
      description: 'Book lessons at your convenience, 24/7 availability worldwide.',
      icon: '⏰',
    },
    {
      title: 'Native Speakers',
      description:
        'Learn from certified native speaking instructors for authentic language experience.',
      icon: '🗣',
    },
    {
      title: 'Progress Tracking',
      description: 'Monitor your learning journey with detailed progress analytics.',
      icon: '📈',
    },
    {
      title: 'Interactive Materials',
      description: 'Access a rich library of interactive learning resources and exercises.',
      icon: '📚',
    },
    {
      title: 'Community Support',
      description: 'Join a community of learners and practice with language exchange partners.',
      icon: '👥',
    },
  ]

  const { elementRef, isVisible } = useScrollAnimation()

  return (
    <section
      ref={elementRef}
      className={`section-padding bg-dark-900/50 backdrop-blur-sm relative overflow-hidden`}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-800 opacity-50" />

      <div className="max-w-7xl mx-auto container-padding relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-accent-300 mb-4 rounded-2xl bg-dark-800/50 px-10 py-6"
            >
              Why Choose LearningTube?
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-dark-800/30 rounded-xl p-6 max-w-2xl mx-auto"
          >
            <p className="text-xl text-gray-300">
              Experience the most effective way to learn a new language with our comprehensive
              features.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card p-6 hover:scale-105 transition-transform duration-300 relative group"
            >
              <div className="absolute inset-0 bg-accent-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="text-4xl mb-4 bg-dark-800/50 rounded-full w-20 h-20 flex items-center justify-center">
                  {feature.icon}
                </div>
                <div className="bg-dark-800/30 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-accent-300 mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
