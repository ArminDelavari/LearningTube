import { motion } from 'framer-motion'

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-100 rounded-full opacity-20" />
        <div className="absolute top-40 -left-20 w-60 h-60 bg-primary-200 rounded-full opacity-15" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-primary-300 rounded-full opacity-10" />
        <div className="absolute top-60 right-60 w-50 h-50 bg-primary-200 rounded-full opacity-15" />
        <div className="absolute bottom-40 left-40 w-70 h-70 bg-primary-100 rounded-full opacity-20" />
        <div className="absolute top-20 right-1/3 w-30 h-30 bg-primary-300 rounded-full opacity-10" />
        <div className="absolute bottom-60 left-1/4 w-45 h-45 bg-primary-200 rounded-full opacity-15" />
      </div>

      {/* Content */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6 mx-auto text-center"
        >
          Learn & Connect
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
        >
          Connect with native speakers, learn at your own pace, and achieve fluency faster than ever
          before.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-accent-500 text-white rounded-full font-medium hover:bg-accent-600 transition-colors duration-300"
          >
            Start Learning Now
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-accent-500 text-accent-400 rounded-full font-medium hover:bg-accent-500/10 transition-colors duration-300"
          >
            Browse Courses
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: '10K+', label: 'Active Students' },
            { number: '500+', label: 'Expert Instructors' },
            { number: '30+', label: 'Languages' },
            { number: '95%', label: 'Satisfaction Rate' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="text-center relative group p-5 border-radius-3xl"
            >
              <div className="absolute inset-0 bg-accent-500/5 rounded-lg -z-10 group-hover:bg-accent-500/10 transition-colors duration-300" />
              <div className="text-3xl font-bold text-accent-400 mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
