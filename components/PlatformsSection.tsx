'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const PlatformsSection = () => {
  const platforms = [
    {
      name: 'Shopee',
      description: 'E-commerce hàng đầu Việt Nam',
      features: ['Auto comment sản phẩm', 'Phản hồi đánh giá', 'Boost rating'],
      color: 'from-orange-500 to-red-500',
      icon: '🛒',
      stats: '2M+ sản phẩm được seed'
    },
    {
      name: 'Lazada',
      description: 'Nền tảng mua sắm trực tuyến',
      features: ['Comment livestream', 'Review seeding', 'Q&A tự động'],
      color: 'from-blue-500 to-purple-600',
      icon: '🏪',
      stats: '500K+ comments/tháng'
    },
    {
      name: 'TikTok',
      description: 'Mạng xã hội video ngắn',
      features: ['Trend comments', 'Viral seeding', 'Hashtag boost'],
      color: 'from-pink-500 to-purple-600',
      icon: '🎵',
      stats: '1M+ interactions'
    },
    {
      name: 'Facebook',
      description: 'Mạng xã hội phổ biến nhất',
      features: ['Post engagement', 'Group seeding', 'Page interaction'],
      color: 'from-blue-600 to-indigo-600',
      icon: '👥',
      stats: '800K+ posts seeded'
    },
    {
      name: 'Zalo',
      description: 'Ứng dụng nhắn tin Việt Nam',
      features: ['OA comments', 'Group chat', 'Timeline seeding'],
      color: 'from-blue-400 to-cyan-500',
      icon: '💬',
      stats: '300K+ messages'
    },
    {
      name: 'Instagram',
      description: 'Nền tảng chia sẻ hình ảnh',
      features: ['Story replies', 'Post comments', 'Reel engagement'],
      color: 'from-purple-500 to-pink-500',
      icon: '📸',
      stats: '400K+ interactions'
    }
  ]

  const integrationSteps = [
    {
      step: '01',
      title: 'Kết nối tài khoản',
      description: 'Liên kết an toàn các tài khoản social media và e-commerce của bạn'
    },
    {
      step: '02', 
      title: 'Cài đặt chiến lược',
      description: 'Thiết lập mục tiêu, đối tượng và style comment cho từng nền tảng'
    },
    {
      step: '03',
      title: 'AI tự động làm việc',
      description: 'Hệ thống AI tạo và đăng comment theo lịch được tối ưu hóa'
    },
    {
      step: '04',
      title: 'Theo dõi & Tối ưu',
      description: 'Phân tích kết quả và điều chỉnh chiến lược để đạt hiệu quả tốt nhất'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-accent-100 text-accent-800 px-4 py-2 rounded-full text-sm font-medium mb-4"
          >
            <span>🔗 Tích hợp đa nền tảng</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4 text-vietnamese"
          >
            Một dashboard - Tất cả nền tảng Việt Nam
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto text-vietnamese"
          >
            Quản lý comment seeding trên tất cả các nền tảng phổ biến tại Việt Nam từ một giao diện duy nhất
          </motion.p>
        </div>

        {/* Platforms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {platforms.map((platform, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card card-hover group relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-r ${platform.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Platform Icon & Name */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${platform.color} rounded-xl flex items-center justify-center text-2xl`}>
                    {platform.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{platform.name}</h3>
                    <p className="text-sm text-gray-600 text-vietnamese">{platform.description}</p>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {platform.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <div className={`w-2 h-2 bg-gradient-to-r ${platform.color} rounded-full`}></div>
                      <span className="text-sm text-gray-700 text-vietnamese">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Stats */}
                <div className={`bg-gradient-to-r ${platform.color} bg-opacity-10 rounded-lg p-3`}>
                  <div className="text-sm font-semibold text-gray-900 text-vietnamese">
                    {platform.stats}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Integration Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-vietnamese">
              Quy trình tích hợp đơn giản 4 bước
            </h3>
            <p className="text-gray-600 text-vietnamese">
              Chỉ mất 5 phút để kết nối tất cả tài khoản và bắt đầu seeding
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {integrationSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                {/* Step Number */}
                <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  {step.step}
                </div>
                
                {/* Step Title */}
                <h4 className="text-lg font-semibold text-gray-900 mb-2 text-vietnamese">
                  {step.title}
                </h4>
                
                {/* Step Description */}
                <p className="text-sm text-gray-600 text-vietnamese">
                  {step.description}
                </p>

                {/* Connector Line */}
                {index < integrationSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary-200 to-secondary-200 transform -translate-y-1/2"></div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-vietnamese">
            Sẵn sàng kết nối tất cả nền tảng?
          </h3>
          <p className="text-gray-600 mb-8 text-vietnamese">
            Hàng trăm businesses đã tăng engagement 3x sau khi sử dụng MarkSeed
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="btn-primary px-8 py-3">
              Kết nối ngay - Miễn phí
            </button>
            <button className="btn-outline px-8 py-3">
              Xem demo tích hợp
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PlatformsSection 