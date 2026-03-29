'use client'

import { motion } from 'framer-motion'
import { 
  GlobeAltIcon, 
  ChatBubbleLeftRightIcon, 
  CogIcon, 
  CurrencyDollarIcon, 
  ChartBarIcon, 
  ShieldCheckIcon 
} from '@heroicons/react/24/outline'

const USPSection = () => {
  const usps = [
    {
      icon: GlobeAltIcon,
      title: 'Tối ưu cho thị trường Việt Nam',
      description: 'AI hiểu sâu tiếng Việt, slang và văn hóa địa phương. Tạo comment tự nhiên như người Việt thực sự.',
      features: [
        'Hiểu slang Việt: "xịn xò", "chất như nước cất"',
        'Phong cách giao tiếp thân thiện, địa phương hóa',
        'Tùy chỉnh theo từng nền tảng: Shopee, TikTok, Lazada'
      ],
      gradient: 'from-blue-500 to-purple-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'Chuyên về Comment Seeding',
      description: 'Công cụ chuyên biệt tạo comment seeding đa dạng, tự nhiên, tránh bị phát hiện spam.',
      features: [
        'Tạo comment đa dạng theo ngữ cảnh sản phẩm',
        'Template chuyên ngành: F&B, thời trang, mỹ phẩm',
        'Tính năng chống phát hiện bot thông minh'
      ],
      gradient: 'from-green-500 to-teal-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: CogIcon,
      title: 'Tích hợp đa nền tảng & Tự động hóa',
      description: 'Kết nối tất cả nền tảng phổ biến tại Việt Nam trong một dashboard duy nhất.',
      features: [
        'Tích hợp Zalo, Shopee, Lazada, TikTok, Facebook',
        'Tự động hóa toàn bộ quy trình seeding',
        'Lên lịch đăng comment thông minh'
      ],
      gradient: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: CurrencyDollarIcon,
      title: 'Giao diện thân thiện & Giá cả phải chăng',
      description: 'Thiết kế đơn giản, dễ sử dụng với mô hình freemium phù hợp với shop nhỏ Việt Nam.',
      features: [
        'Giao diện trực quan, không cần kỹ thuật',
        'Mô hình freemium: Miễn phí cơ bản, trả phí nâng cao',
        'Hướng dẫn tiếng Việt và hỗ trợ AI chatbot'
      ],
      gradient: 'from-yellow-500 to-orange-600',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: ChartBarIcon,
      title: 'Phân tích & Tối ưu hiệu quả',
      description: 'Đo lường engagement và đưa ra gợi ý tối ưu hóa dựa trên dữ liệu thực tế.',
      features: [
        'Theo dõi engagement (like, reply) từ comment seeding',
        'Gợi ý tối ưu hóa dựa trên dữ liệu',
        'Báo cáo chi tiết hiệu quả chiến dịch'
      ],
      gradient: 'from-indigo-500 to-blue-600',
      bgColor: 'bg-indigo-50'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Tuân thủ & Thực hành đạo đức',
      description: 'Đảm bảo seeding an toàn, tuân thủ quy định nền tảng và giảm thiểu rủi ro bị khóa tài khoản.',
      features: [
        'Tạo nội dung đa dạng, không lặp lại',
        'Hướng dẫn seeding hợp pháp và đạo đức',
        'Thời gian đăng ngẫu nhiên như người dùng thật'
      ],
      gradient: 'from-emerald-500 to-green-600',
      bgColor: 'bg-emerald-50'
    }
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium mb-4"
          >
            <span>⭐ Điểm nổi bật</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4 text-vietnamese"
          >
            6 Lợi thế cạnh tranh độc đáo của MarkSeed
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto text-vietnamese"
          >
            Được thiết kế riêng cho thị trường Việt Nam với những tính năng không có ở các công cụ quốc tế
          </motion.p>
        </div>

        {/* USPs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {usps.map((usp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card card-hover group"
            >
              {/* Icon */}
              <div className={`w-12 h-12 bg-gradient-to-r ${usp.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200`}>
                <usp.icon className="h-6 w-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-vietnamese">
                {usp.title}
              </h3>
              
              <p className="text-gray-600 mb-6 text-vietnamese leading-relaxed">
                {usp.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3">
                {usp.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700 text-vietnamese">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Hover Effect */}
              <div className={`absolute inset-0 ${usp.bgColor} opacity-0 group-hover:opacity-10 transition-opacity duration-200 rounded-xl`}></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-vietnamese">
              Sẵn sàng trải nghiệm sự khác biệt?
            </h3>
            <p className="text-gray-600 mb-6 text-vietnamese">
              Hàng nghìn shop đã tin tùng MarkSeed để tăng engagement và doanh số
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="btn-primary px-8 py-3">
                Bắt đầu miễn phí
              </button>
              <button className="btn-outline px-8 py-3">
                Tìm hiểu thêm
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default USPSection 