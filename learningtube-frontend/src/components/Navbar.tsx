import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { AuthModal } from './AuthModal'

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 w-100 ${
        isScrolled ? 'backdrop-blur-sm' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-accent-400">
              Learning Tube
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 pr-6">
            <Link to="/courses" className="text-gray-300 hover:text-accent-400 transition-colors">
              Courses
            </Link>
            <Link
              to="/instructors"
              className="text-gray-300 hover:text-accent-400 transition-colors"
            >
              Instructors
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-accent-400 transition-colors">
              About
            </Link>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsAuthModalOpen(true)}
              className="bg-accent-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-accent-600 transition-colors"
            >
              Login / Register
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-accent-400"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-2 pb-3 space-y-1 sm:px-6 bg-dark-800 rounded-lg mt-2">
              <Link
                to="/courses"
                className="block px-3 py-2 rounded-md text-gray-300 hover:text-accent-400 hover:bg-dark-700"
              >
                Courses
              </Link>
              <Link
                to="/instructors"
                className="block px-3 py-2 rounded-md text-gray-300 hover:text-accent-400 hover:bg-dark-700"
              >
                Instructors
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 rounded-md text-gray-300 hover:text-accent-400 hover:bg-dark-700"
              >
                About
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsAuthModalOpen(true)}
                className="block px-3 py-2 rounded-md bg-accent-500 text-white hover:bg-accent-600"
              >
                Login / Register
              </motion.button>
            </div>
          </div>
        )}
      </div>

      {/* Auth Modal */}
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </nav>
  )
}
