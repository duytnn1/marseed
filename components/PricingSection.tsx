'use client'

import { motion } from 'framer-motion'
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(true)

  const plans = [
    {
      name: 'Miễn phí',
      price: { monthly: 0, annual: 0 },
      description: 'Dành cho shop nhỏ mới bắt đầu',
      features: [
        { name: '50 comments/ngày', included: true },
        { name: '2 nền tảng kết nối', included: true },
        { name: 'Templates cơ bản', included: true },
        { name: 'Hỗ trợ email', included: true },
        { name: 'Phân tích cơ bản', included: false },
        { name: 'Lên lịch tự động', included: false },
        { name: 'Templates chuyên ngành', included: false },
        { name: 'Hỗ trợ 24/7', included: false }
      ],
      popular: false,
      cta: 'Bắt đầu miễn phí',
      color: 'gray'
    },
    {
      name: 'Cơ bản',
      price: { monthly: 299000, annual: 199000 },
      description: 'Dành cho shop vừa và nhỏ',
      features: [
        { name: '500 comments/ngày', included: true },
        { name: '5 nền tảng kết nối', included: true },
        { name: 'Templates chuyên ngành', included: true },
        { name: 'Lên lịch tự động', included: true },
        { name: 'Phân tích chi tiết', included: true },
        { name: 'Hỗ trợ chat', included: true },
        { name: 'Export báo cáo', included: false },
        { name: 'API access', included: false }
      ],
      popular: true,
      cta: 'Dùng thử 7 ngày',
      color: 'primary'
    },
    {
      name: 'Chuyên nghiệp',
      price: { monthly: 599000, annual: 399000 },
      description: 'Dành cho doanh nghiệp lớn',
      features: [
        { name: '2000 comments/ngày', included: true },
        { name: 'Không giới hạn nền tảng', included: true },
        { name: 'AI learning cá nhân hóa', included: true },
        { name: 'Multi-account quản lý', included: true },
        { name: 'Phân tích nâng cao', included: true },
        { name: 'Hỗ trợ 24/7', included: true },
        { name: 'Export báo cáo', included: true },
        { name: 'API access', included: true }
      ],
      popular: false,
      cta: 'Liên hệ tư vấn',
      color: 'secondary'
    }
  ]

  const faq = [
    {
      question: 'Có thể hủy gói trả phí bất cứ lúc nào không?',
      answer: 'Có, bạn có thể hủy gói trả phí bất cứ lúc nào. Chúng tôi không ràng buộc hợp đồng dài hạn.'
    },
    {
      question: 'Có được hoàn tiền nếu không hài lòng?',
      answer: 'Chúng tôi có chính sách hoàn tiền 100% trong vòng 7 ngày đầu tiên nếu bạn không hài lòng với dịch vụ.'
    },
    {
      question: 'Có giảm giá cho thanh toán hàng năm?',
      answer: 'Có, thanh toán hàng năm sẽ được giảm 33% so với thanh toán hàng tháng.'
    },
    {
      question: 'Tôi có thể nâng cấp hoặc hạ cấp gói bất cứ lúc nào?',
      answer: 'Có, bạn có thể thay đổi gói bất cứ lúc nào. Chúng tôi sẽ tính toán và hoàn/thu phí theo tỷ lệ.'
    }
  ]

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-accent-100 text-accent-800 px-4 py-2 rounded-full text-sm font-medium mb-4"
          >
            <span>💰 Giá cả phải chăng</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4 text-vietnamese"
          >
            Gói dịch vụ phù hợp mọi quy mô
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto text-vietnamese"
          >
            Từ shop nhỏ đến doanh nghiệp lớn, chúng tôi có gói phù hợp với ngân sách của bạn
          </motion.p>
        </div>

        {/* Billing Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white rounded-lg p-1 border border-gray-200">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                !isAnnual
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              Hàng tháng
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 relative ${
                isAnnual
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              Hàng năm
              <span className="absolute -top-2 -right-2 bg-secondary-500 text-white text-xs px-2 py-1 rounded-full">
                -33%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-white rounded-2xl shadow-lg p-8 ${
                plan.popular ? 'ring-2 ring-primary-500 scale-105' : ''
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Phổ biến nhất
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-vietnamese">{plan.description}</p>
                
                <div className="mt-6">
                  <span className="text-4xl font-bold text-gray-900">
                    {new Intl.NumberFormat('vi-VN').format(
                      isAnnual ? plan.price.annual : plan.price.monthly
                    )}₫
                  </span>
                  {plan.price.monthly > 0 && (
                    <span className="text-gray-600">/{isAnnual ? 'tháng' : 'tháng'}</span>
                  )}
                </div>
                
                {isAnnual && plan.price.monthly > 0 && (
                  <p className="text-sm text-gray-500 mt-2">
                    Thanh toán hàng năm, tiết kiệm{' '}
                    {new Intl.NumberFormat('vi-VN').format(
                      (plan.price.monthly - plan.price.annual) * 12
                    )}₫
                  </p>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    {feature.included ? (
                      <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
                    ) : (
                      <XMarkIcon className="h-5 w-5 text-gray-300 flex-shrink-0" />
                    )}
                    <span className={`text-sm ${
                      feature.included ? 'text-gray-700' : 'text-gray-400'
                    } text-vietnamese`}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
                plan.popular
                  ? 'btn-primary'
                  : 'btn-outline'
              }`}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-white rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8 text-vietnamese">
            Câu hỏi thường gặp
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faq.map((item, index) => (
              <div key={index}>
                <h4 className="text-lg font-semibold text-gray-900 mb-3 text-vietnamese">
                  {item.question}
                </h4>
                <p className="text-gray-600 text-vietnamese">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4 text-vietnamese">
              Vẫn chưa chắc chắn? Dùng thử miễn phí!
            </h3>
            <p className="text-primary-100 mb-6 text-vietnamese">
              Không cần thẻ tín dụng. Hủy bất cứ lúc nào. Hỗ trợ 24/7.
            </p>
            <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200">
              Dùng thử miễn phí ngay
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PricingSection 