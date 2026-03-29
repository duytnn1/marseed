'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRightIcon, SparklesIcon, RocketLaunchIcon } from '@heroicons/react/24/outline'

const CTASection = () => {
  const benefits = [
    '✅ Miễn phí 7 ngày đầu tiên',
    '✅ Không cần thẻ tín dụng',
    '✅ Hủy bất cứ lúc nào',
    '✅ Hỗ trợ setup miễn phí'
  ]

  const urgencyPoints = [
    {
      icon: '🚀',
      title: 'Tăng engagement ngay lập tức',
      description: 'Bắt đầu tạo comments trong 5 phút'
    },
    {
      icon: '💰',
      title: 'Tiết kiệm chi phí marketing',
      description: 'Giảm 80% chi phí so với thuê agency'
    },
    {
      icon: '⚡',
      title: 'Vượt trội competitors',
      description: 'Chiến lược seeding thông minh của AI'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 text-white overflow-hidden relative">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white bg-opacity-10 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-300 bg-opacity-20 rounded-full filter blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 bg-white bg-opacity-20 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium mb-8"
        >
          <RocketLaunchIcon className="h-5 w-5" />
          <span>🎉 Ưu đãi đặc biệt - Chỉ còn vài ngày!</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-6xl font-heading font-bold mb-6 text-vietnamese"
        >
          Sẵn sàng tăng engagement{' '}
          <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
            gấp 3 lần
          </span>{' '}
          chỉ trong 7 ngày?
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl text-primary-100 mb-12 max-w-4xl mx-auto text-vietnamese"
        >
          Hàng nghìn shop đã thành công với MarkSeed. Đến lượt bạn chinh phục thị trường Việt Nam với AI comment seeding thông minh nhất!
        </motion.p>

        {/* Urgency Points */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {urgencyPoints.map((point, index) => (
            <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl mb-4">{point.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-vietnamese">{point.title}</h3>
              <p className="text-primary-100 text-vietnamese">{point.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-12"
        >
          <Link
            href="/auth/register"
            className="inline-flex items-center space-x-3 bg-white text-primary-600 px-12 py-5 rounded-2xl text-xl font-bold hover:bg-gray-50 transition-all duration-200 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
          >
            <SparklesIcon className="h-6 w-6" />
            <span>Bắt đầu miễn phí ngay - 0đ</span>
            <ArrowRightIcon className="h-6 w-6" />
          </Link>
          
          <p className="text-primary-100 mt-4 text-sm">
            ⚡ Setup trong 2 phút • 🎯 Kết quả ngay lập tức • 💝 Hoàn tiền 100% nếu không hài lòng
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {benefits.map((benefit, index) => (
            <div key={index} className="text-primary-100 text-sm font-medium text-vietnamese">
              {benefit}
            </div>
          ))}
        </motion.div>

        {/* Secondary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="border-t border-white border-opacity-20 pt-8"
        >
          <p className="text-primary-100 mb-6 text-vietnamese">
            Vẫn chưa chắc chắn? Xem demo trước khi quyết định
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              href="#demo"
              className="inline-flex items-center space-x-2 bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-primary-600 transition-all duration-200"
            >
              <span>📹 Xem demo 2 phút</span>
            </Link>
            
            <Link
              href="/case-studies"
              className="inline-flex items-center space-x-2 bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-primary-600 transition-all duration-200"
            >
              <span>📊 Đọc success stories</span>
            </Link>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mt-16 pt-8 border-t border-white border-opacity-20"
        >
          <div className="flex flex-wrap justify-center items-center space-x-8 opacity-70">
            <div className="flex items-center space-x-2 text-primary-100 text-sm">
              <span>🔒</span>
              <span>Bảo mật SSL 256-bit</span>
            </div>
            <div className="flex items-center space-x-2 text-primary-100 text-sm">
              <span>🇻🇳</span>
              <span>Máy chủ tại Việt Nam</span>
            </div>
            <div className="flex items-center space-x-2 text-primary-100 text-sm">
              <span>⭐</span>
              <span>4.9/5 từ 2,500+ reviews</span>
            </div>
            <div className="flex items-center space-x-2 text-primary-100 text-sm">
              <span>📞</span>
              <span>Hỗ trợ 24/7 tiếng Việt</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection 