import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { Features } from '../components/Features'
import { Testimonials } from '../components/Testimonials'
import { Footer } from '../components/Footer'
import { LanguageSVG } from '../components/svgs/LanguageSVG'
import { AnimatedBackground } from '../components/AnimatedBackground'

export const LandingPage = () => {
  return (
    <div className="min-h-screen text-gray-100 relative">
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <Features />
      <div className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1">
              <h2 className="text-4xl font-bold text-accent-300 mb-6">
                Learn Languages the Natural Way
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our platform combines structured lessons with natural conversation practice, helping
                you achieve fluency faster and more effectively.
              </p>
              <ul className="space-y-4">
                {[
                  'Interactive video lessons with native speakers',
                  'Real-time feedback and pronunciation correction',
                  'Customized learning paths based on your goals',
                  'Practice with language exchange partners',
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <svg
                      className="w-5 h-5 text-accent-400 mr-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-accent-500/20 rounded-full blur-xl animate-pulse-slow" />
                <LanguageSVG />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Testimonials />
      <Footer />
    </div>
  )
}
