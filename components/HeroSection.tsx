'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { SparklesIcon, ChatBubbleLeftRightIcon, TrophyIcon } from '@heroicons/react/24/outline'

const HeroSection = () => {
  const stats = [
    { number: '10K+', label: 'Comments được tạo mỗi ngày' },
    { number: '500+', label: 'Shop tin dùng' },
    { number: '98%', label: 'Tỷ lệ hài lòng' },
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-16 pb-20">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium mb-8"
          >
            <SparklesIcon className="h-4 w-4" />
            <span>AI được tối ưu cho thị trường Việt Nam</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-heading font-bold text-gray-900 mb-6 text-vietnamese"
          >
            Tự động hóa{' '}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Comment Seeding
            </span>
            <br />
            với AI thông minh
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto text-vietnamese"
          >
            Công cụ AI đầu tiên tại Việt Nam chuyên tạo comment seeding tự nhiên cho 
            Shopee, Lazada, TikTok, Facebook và Zalo. Tăng engagement, xây dựng uy tín 
            với chi phí thấp và hiệu quả cao.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-16"
          >
            <Link
              href="/auth/register"
              className="btn-primary text-lg px-8 py-4 w-full sm:w-auto"
            >
              Dùng thử miễn phí ngay
            </Link>
            <Link
              href="#demo"
              className="btn-outline text-lg px-8 py-4 w-full sm:w-auto flex items-center justify-center space-x-2"
            >
              <ChatBubbleLeftRightIcon className="h-5 w-5" />
              <span>Xem demo</span>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-vietnamese">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Demo Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20"
        >
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="ml-4 text-sm text-gray-600">MarkSeed Dashboard</div>
                </div>
              </div>
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-vietnamese">
                      🎯 Tạo comment cho sản phẩm mỹ phẩm
                    </h3>
                    <div className="space-y-3">
                      <div className="bg-blue-50 p-3 rounded-lg text-sm text-vietnamese">
                        "Sản phẩm xịn xò quá, shop phục vụ nhanh như chớp! 😍"
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg text-sm text-vietnamese">
                        "Dùng xong da em sáng hẳn lên, yêu shop quá đi thôi! ❤️"
                      </div>
                      <div className="bg-purple-50 p-3 rounded-lg text-sm text-vietnamese">
                        "Chất lượng đỉnh như nước cất, giá lại hợp lý nữa chứ!"
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-vietnamese">
                      📊 Thống kê hiệu quả
                    </h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Engagement Rate</span>
                        <span className="text-sm font-semibold text-green-600">+65%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Comments/ngày</span>
                        <span className="text-sm font-semibold text-blue-600">2,450</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Tỷ lệ chuyển đổi</span>
                        <span className="text-sm font-semibold text-purple-600">+42%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection 