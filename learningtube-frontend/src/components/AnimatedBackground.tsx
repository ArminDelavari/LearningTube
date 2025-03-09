import { motion } from 'framer-motion'

export const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-800" />

      {/* Animated Circles */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute w-96 h-96 bg-gradient-radial from-glow-primary/20 to-transparent rounded-full blur-3xl"
          animate={{
            x: ['-25%', '25%'],
            y: ['-25%', '25%'],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
          style={{ top: '10%', left: '20%' }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-gradient-radial from-glow-secondary/20 to-transparent rounded-full blur-3xl"
          animate={{
            x: ['25%', '-25%'],
            y: ['25%', '-25%'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
          style={{ bottom: '10%', right: '20%' }}
        />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#1a1c2133_1px,transparent_1px),linear-gradient(to_bottom,#1a1c2133_1px,transparent_1px)]"
        style={{ backgroundSize: '4rem 4rem' }}
      />

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-glow-primary/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-glow-secondary/10 to-transparent" />
    </div>
  )
}
