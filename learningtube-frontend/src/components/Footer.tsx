import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export const Footer = () => {
  const footerSections = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Press', href: '/press' },
        { name: 'Blog', href: '/blog' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Community', href: '/community' },
        { name: 'Help Center', href: '/help' },
        { name: 'Guidelines', href: '/guidelines' },
        { name: 'Testimonials', href: '/testimonials' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cookie Policy', href: '/cookies' },
        { name: 'GDPR', href: '/gdpr' },
      ],
    },
  ]

  const socialLinks = [
    { name: 'Facebook', icon: 'fab fa-facebook', href: '#' },
    { name: 'Twitter', icon: 'fab fa-twitter', href: '#' },
    { name: 'Instagram', icon: 'fab fa-instagram', href: '#' },
    { name: 'LinkedIn', icon: 'fab fa-linkedin', href: '#' },
    { name: 'YouTube', icon: 'fab fa-youtube', href: '#' },
  ]

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto pt-16 pb-8 px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="text-2xl font-bold text-white mb-4 block">
              LearningTube
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Empowering global communication through personalized language learning experiences.
              Connect with native speakers and achieve fluency at your own pace.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <i className={`${social.icon} text-xl`}></i>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="max-w-md">
            <h3 className="text-white font-semibold mb-4">Subscribe to our newsletter</h3>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button className="btn-primary whitespace-nowrap">Subscribe</button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8 text-center md:flex md:justify-between md:text-left">
          <p className="text-gray-400">
            © {new Date().getFullYear()} LearningTube. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <select className="bg-gray-800 text-gray-400 px-3 py-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
              <option value="de">Deutsch</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  )
}
