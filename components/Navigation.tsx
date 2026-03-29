'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon, LanguageIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [language, setLanguage] = useState('vi')

  const navItems = {
    vi: [
      { name: 'Trang chủ', href: '/' },
      { name: 'Tính năng', href: '#features' },
      { name: 'Giá cả', href: '#pricing' },
      { name: 'Dashboard', href: '/dashboard' },
      { name: 'Liên hệ', href: '#contact' },
    ],
    en: [
      { name: 'Home', href: '/' },
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Dashboard', href: '/dashboard' },
      { name: 'Contact', href: '#contact' },
    ]
  }

  const authButtons = {
    vi: {
      login: 'Đăng nhập',
      signup: 'Dùng thử miễn phí'
    },
    en: {
      login: 'Login',
      signup: 'Try Free'
    }
  }

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">MS</span>
              </div>
              <span className="font-heading font-bold text-xl text-gray-900">
                MarkSeed
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems[language as keyof typeof navItems].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Language Switch & Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setLanguage(language === 'vi' ? 'en' : 'vi')}
              className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 transition-colors duration-200"
            >
              <LanguageIcon className="h-5 w-5" />
              <span className="text-sm font-medium uppercase">{language}</span>
            </button>
            
            <Link
              href="/auth/login"
              className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              {authButtons[language as keyof typeof authButtons].login}
            </Link>
            
            <Link
              href="/auth/register"
              className="btn-primary text-sm"
            >
              {authButtons[language as keyof typeof authButtons].signup}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary-600 p-2"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems[language as keyof typeof navItems].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="flex items-center px-3 space-x-3">
                  <button
                    onClick={() => setLanguage(language === 'vi' ? 'en' : 'vi')}
                    className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 transition-colors duration-200"
                  >
                    <LanguageIcon className="h-5 w-5" />
                    <span className="text-sm font-medium uppercase">{language}</span>
                  </button>
                </div>
                
                <div className="mt-3 px-3 space-y-2">
                  <Link
                    href="/auth/login"
                    className="block text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {authButtons[language as keyof typeof authButtons].login}
                  </Link>
                  <Link
                    href="/auth/register"
                    className="block btn-primary text-center text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    {authButtons[language as keyof typeof authButtons].signup}
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navigation 