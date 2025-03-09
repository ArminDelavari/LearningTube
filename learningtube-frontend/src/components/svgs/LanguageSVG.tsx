import { motion } from 'framer-motion'

export const LanguageSVG = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      width="400"
      height="400"
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="relative z-10"
    >
      <motion.circle
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        cx="200"
        cy="200"
        r="180"
        className="fill-accent-900/30"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        d="M100 200 C 100 150, 300 150, 300 200"
        className="stroke-accent-400"
        strokeWidth="4"
        fill="none"
      />
      <motion.circle
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 1.5 }}
        cx="100"
        cy="200"
        r="10"
        className="fill-accent-400"
      />
      <motion.circle
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 1.8 }}
        cx="300"
        cy="200"
        r="10"
        className="fill-accent-400"
      />
      <motion.text
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 2 }}
        x="200"
        y="260"
        textAnchor="middle"
        dominantBaseline="middle"
        className="fill-accent-300 text-2xl font-bold"
        style={{ fontFamily: 'Arial' }}
      >
        Learn & Connect
      </motion.text>

      {/* Animated Particles */}
      {[...Array(5)].map((_, i) => (
        <motion.circle
          key={i}
          initial={{ scale: 0, x: 200, y: 200 }}
          animate={{
            scale: [0, 1, 0],
            x: [200, 200 + Math.cos(i * 72) * 150],
            y: [200, 200 + Math.sin(i * 72) * 150],
          }}
          transition={{
            duration: 2,
            delay: i * 0.2,
            repeat: Infinity,
            repeatDelay: 1,
          }}
          r="4"
          className="fill-accent-400/50"
        />
      ))}
    </motion.svg>
  )
}
