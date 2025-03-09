import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import axios from 'axios'

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
}

interface RegisterFormData {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
  agreeToTerms: boolean
}

export const AuthModal = ({ isOpen, onClose }: AuthModalProps) => {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login')
  const [registerForm, setRegisterForm] = useState<RegisterFormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  })
  const [error, setError] = useState<string>('')
  const [loading, setLoading] = useState(false)

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    // Validation
    if (
      !registerForm.firstName ||
      !registerForm.lastName ||
      !registerForm.email ||
      !registerForm.password
    ) {
      setError('Please fill in all required fields')
      setLoading(false)
      return
    }

    if (registerForm.password !== registerForm.confirmPassword) {
      setError('Passwords do not match')
      setLoading(false)
      return
    }

    if (!registerForm.agreeToTerms) {
      setError('Please agree to the Terms of Service')
      setLoading(false)
      return
    }

    try {
      // First create person
      const personResponse = await axios.post('http://localhost:3333/admin/add-person', {
        firstName: registerForm.firstName,
        lastName: registerForm.lastName,
        email: registerForm.email,
      })

      if (personResponse.data.id) {
        // Then create user
        const userResponse = await axios.post('http://localhost:3333/auth/register', {
          email: registerForm.email,
          password: registerForm.password,
          personId: personResponse.data.id,
        })

        if (userResponse.data) {
          // Success! Close modal and maybe show success message
          onClose()
          // You might want to automatically log them in here
        }
      }
    } catch (err: any) {
      setError(err.response?.data?.message || 'Registration failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  // Control body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-[100]">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-[90%] sm:w-[600px] max-w-2xl mx-auto"
          >
            <div className="bg-dark-800/90 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-accent-500/10">
              {/* Tabs */}
              <div className="flex p-1 gap-1 bg-dark-900/50 m-4 rounded-xl">
                <button
                  onClick={() => setActiveTab('login')}
                  className={`flex-1 py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === 'login'
                      ? 'bg-accent-500 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Login
                </button>
                <button
                  onClick={() => setActiveTab('register')}
                  className={`flex-1 py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === 'register'
                      ? 'bg-accent-500 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Register
                </button>
              </div>

              {/* Forms Container */}
              <div className="p-8">
                <AnimatePresence mode="wait">
                  {activeTab === 'login' ? (
                    <motion.div
                      key="login"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h2 className="text-2xl font-bold text-white mb-6">Welcome Back!</h2>
                      <form className="space-y-4">
                        <div>
                          <label className="block text-gray-300 mb-2 text-left">Email</label>
                          <input
                            type="email"
                            className="w-full bg-dark-900/50 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-500"
                            placeholder="Enter your email"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-300 mb-2 text-left">Password</label>
                          <input
                            type="password"
                            className="w-full bg-dark-900/50 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-500"
                            placeholder="Enter your password"
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <label className="flex items-center">
                            <input
                              type="checkbox"
                              className="rounded bg-dark-900/50 border-gray-600"
                            />
                            <span className="ml-2 text-gray-300">Remember me</span>
                          </label>
                          <a href="#" className="text-accent-400 hover:text-accent-300">
                            Forgot password?
                          </a>
                        </div>
                        <button className="w-full bg-accent-500 text-white py-3 rounded-lg font-medium hover:bg-accent-600 transition-colors">
                          Sign In
                        </button>
                      </form>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="register"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h2 className="text-2xl font-bold text-white mb-6">Create Account</h2>
                      {error && (
                        <div className="bg-red-500/10 border border-red-500/50 text-red-500 px-4 py-2 rounded-lg mb-4">
                          {error}
                        </div>
                      )}
                      <form onSubmit={handleRegisterSubmit} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-gray-300 mb-2 text-left">First Name</label>
                            <input
                              type="text"
                              value={registerForm.firstName}
                              onChange={(e) =>
                                setRegisterForm({ ...registerForm, firstName: e.target.value })
                              }
                              className="w-full bg-dark-900/50 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-500"
                              placeholder="John"
                            />
                          </div>
                          <div>
                            <label className="block text-gray-300 mb-2 text-left">Last Name</label>
                            <input
                              type="text"
                              value={registerForm.lastName}
                              onChange={(e) =>
                                setRegisterForm({ ...registerForm, lastName: e.target.value })
                              }
                              className="w-full bg-dark-900/50 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-500"
                              placeholder="Doe"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-gray-300 mb-2 text-left">Email</label>
                          <input
                            type="email"
                            value={registerForm.email}
                            onChange={(e) =>
                              setRegisterForm({ ...registerForm, email: e.target.value })
                            }
                            className="w-full bg-dark-900/50 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-500"
                            placeholder="john@example.com"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-300 mb-2 text-left">Password</label>
                          <input
                            type="password"
                            value={registerForm.password}
                            onChange={(e) =>
                              setRegisterForm({ ...registerForm, password: e.target.value })
                            }
                            className="w-full bg-dark-900/50 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-500"
                            placeholder="Choose a strong password"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-300 mb-2 text-left">
                            Confirm Password
                          </label>
                          <input
                            type="password"
                            value={registerForm.confirmPassword}
                            onChange={(e) =>
                              setRegisterForm({ ...registerForm, confirmPassword: e.target.value })
                            }
                            className="w-full bg-dark-900/50 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-500"
                            placeholder="Confirm your password"
                          />
                        </div>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            checked={registerForm.agreeToTerms}
                            onChange={(e) =>
                              setRegisterForm({ ...registerForm, agreeToTerms: e.target.checked })
                            }
                            className="rounded bg-dark-900/50 border-gray-600"
                          />
                          <span className="ml-2 text-gray-300">
                            I agree to the{' '}
                            <a href="#" className="text-accent-400 hover:text-accent-300">
                              Terms of Service
                            </a>{' '}
                            and{' '}
                            <a href="#" className="text-accent-400 hover:text-accent-300">
                              Privacy Policy
                            </a>
                          </span>
                        </div>
                        <button
                          type="submit"
                          disabled={loading}
                          className={`w-full bg-accent-500 text-white py-3 rounded-lg font-medium transition-colors ${
                            loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-accent-600'
                          }`}
                        >
                          {loading ? 'Creating Account...' : 'Create Account'}
                        </button>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
