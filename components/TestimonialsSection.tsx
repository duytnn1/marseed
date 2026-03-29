'use client'

import { motion } from 'framer-motion'
import { StarIcon } from '@heroicons/react/24/solid'

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Nguyễn Thị Lan Anh',
      role: 'Chủ shop mỹ phẩm',
      business: 'LanaBeauty Store',
      image: '👩‍💼',
      rating: 5,
      content: 'Từ khi dùng MarkSeed, engagement của shop em tăng gấp 3 lần! Comments AI tạo ra tự nhiên như người thật, không ai phát hiện được. Đặc biệt thích tính năng tự động lên lịch.',
      stats: '+245% engagement',
      platform: 'Shopee & Facebook'
    },
    {
      name: 'Trần Văn Minh',
      role: 'Marketing Manager',
      business: 'TechGadget VN',
      image: '👨‍💻',
      rating: 5,
      content: 'Tool này cứu cả team marketing của công ty! Trước đây phải thuê 3 người làm seeding, giờ chỉ cần 1 người quản lý MarkSeed. ROI tăng 400% chỉ sau 2 tháng.',
      stats: '+400% ROI',
      platform: 'TikTok & Lazada'
    },
    {
      name: 'Lê Thị Hồng',
      role: 'Chủ quán ăn',
      business: 'Bún Bò Huế Cô Hồng',
      image: '👩‍🍳',
      rating: 5,
      content: 'Dù em không giỏi công nghệ nhưng MarkSeed rất dễ dùng. Comments về món ăn nghe rất thuyết phục, nhiều khách mới tìm đến quán nhờ thấy reviews tốt trên Zalo và Facebook.',
      stats: '+180% khách mới',
      platform: 'Zalo & Facebook'
    },
    {
      name: 'Phạm Hoàng Nam',
      role: 'Founder',
      business: 'Fashion4You',
      image: '👔',
      rating: 5,
      content: 'Template cho ngành thời trang của MarkSeed rất chất! AI hiểu được trend và tạo comment hợp thời. Bán hàng trên TikTok tăng vọt, đơn hàng nhiều không kể xuể.',
      stats: '+320% doanh số',
      platform: 'TikTok & Instagram'
    },
    {
      name: 'Đỗ Thị Mai',
      role: 'E-commerce Manager',
      business: 'HomeDecor Plus',
      image: '🏠',
      rating: 5,
      content: 'Phân tích hiệu quả của MarkSeed giúp em tối ưu chiến lược rất tốt. Biết được comment nào work, time nào đăng hiệu quả nhất. Dashboard rất trực quan và dễ hiểu.',
      stats: '+155% conversion',
      platform: 'Shopee & Lazada'
    },
    {
      name: 'Vũ Đức Thành',
      role: 'Digital Marketing Lead',
      business: 'ElectroShop',
      image: '📱',
      rating: 5,
      content: 'So với các tool quốc tế như Hootsuite, MarkSeed hiểu rõ market Việt Nam hơn nhiều. Comment tự nhiên, không spam, và giá cả phải chăng hơn gấp 5 lần!',
      stats: '+280% engagement',
      platform: 'Tất cả platforms'
    }
  ]

  const stats = [
    { number: '10,000+', label: 'Shop tin dùng' },
    { number: '2.5M+', label: 'Comments được tạo' },
    { number: '98%', label: 'Khách hàng hài lòng' },
    { number: '250%', label: 'Tăng trung bình engagement' }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-secondary-100 text-secondary-800 px-4 py-2 rounded-full text-sm font-medium mb-4"
          >
            <span>⭐ Khách hàng yêu thích</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4 text-vietnamese"
          >
            Hàng nghìn shop đã thành công với MarkSeed
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto text-vietnamese"
          >
            Từ shop nhỏ đến doanh nghiệp lớn, tất cả đều đạt kết quả vượt ngoài mong đợi
          </motion.p>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
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

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 card-hover"
            >
              {/* Header */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-2xl">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-vietnamese">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600 text-vietnamese">
                    {testimonial.role}
                  </p>
                  <p className="text-xs text-primary-600 font-medium">
                    {testimonial.business}
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-gray-700 mb-4 text-vietnamese leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              {/* Stats & Platform */}
              <div className="border-t border-gray-100 pt-4">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-lg font-bold text-primary-600">
                      {testimonial.stats}
                    </div>
                    <div className="text-xs text-gray-500">Cải thiện</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900 text-vietnamese">
                      {testimonial.platform}
                    </div>
                    <div className="text-xs text-gray-500">Nền tảng sử dụng</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-vietnamese">
              🏆 Được tin dùng bởi các ngành hàng hàng đầu
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60">
              <div className="text-center">
                <div className="text-2xl mb-2">🧴</div>
                <div className="text-sm font-medium text-vietnamese">Mỹ phẩm</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">👗</div>
                <div className="text-sm font-medium text-vietnamese">Thời trang</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🍜</div>
                <div className="text-sm font-medium text-vietnamese">F&B</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">📱</div>
                <div className="text-sm font-medium text-vietnamese">Công nghệ</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🏠</div>
                <div className="text-sm font-medium text-vietnamese">Nội thất</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-vietnamese">
            Bạn sẽ là success story tiếp theo?
          </h3>
          <p className="text-gray-600 mb-8 text-vietnamese">
            Tham gia cùng hàng nghìn businesses đã tăng trưởng với MarkSeed
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="btn-primary px-8 py-3 text-lg">
              Bắt đầu success story của bạn
            </button>
            <button className="btn-outline px-8 py-3 text-lg">
              Đọc thêm case studies
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection 