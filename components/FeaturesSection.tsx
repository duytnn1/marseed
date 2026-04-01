'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  SparklesIcon, 
  ClockIcon, 
  ChartBarIcon, 
  CogIcon,
  PaintBrushIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

const FeaturesSection = () => {
  const [activeTab, setActiveTab] = useState(0)

  type CommentDemoItem = { platform: string; comment: string }
  type ScheduleDemoItem = { time: string; activity: string }
  type AnalyticsDemoItem = { metric: string; value: string; trend: 'up' | 'down' }
  type TemplateDemoItem = { category: string; template: string }

  const tabs = [
    { name: 'Tạo Comment AI', icon: SparklesIcon },
    { name: 'Lên lịch thông minh', icon: ClockIcon },
    { name: 'Phân tích hiệu quả', icon: ChartBarIcon },
    { name: 'Templates ngành', icon: PaintBrushIcon },
  ]

  const tabContent: {
    title: string
    description: string
    features: string[]
    demo:
      | CommentDemoItem[]
      | ScheduleDemoItem[]
      | AnalyticsDemoItem[]
      | TemplateDemoItem[]
  }[] = [
    {
      title: 'AI tạo comment tự nhiên như người Việt thật',
      description: 'Công nghệ AI tiên tiến hiểu sâu ngôn ngữ và văn hóa Việt Nam, tạo ra những comment seeding tự nhiên, đa dạng và phù hợp với từng ngữ cảnh.',
      features: [
        'Hiểu slang và từ ngữ thịnh hành',
        'Tạo comment đa dạng, không lặp lại',
        'Phù hợp với từng nền tảng và sản phẩm',
        'Tự động điều chỉnh tone và style'
      ],
      demo: [
        { platform: 'Shopee', comment: 'Sản phẩm xịn xò quá, shop phục vụ nhanh như chớp! 😍' },
        { platform: 'TikTok', comment: 'Trend này hay ghê, ai cũng phải thử ngay! 🔥' },
        { platform: 'Facebook', comment: 'Chất lượng đỉnh như nước cất, giá lại hợp lý nữa chứ!' }
      ]
    },
    {
      title: 'Lên lịch đăng comment thông minh',
      description: 'Hệ thống lên lịch AI tự động phân bổ comment theo thời gian tối ưu, tránh spam và tăng hiệu quả tương tác.',
      features: [
        'Phân tích thời gian tối ưu cho từng nền tảng',
        'Tự động điều chỉnh tần suất đăng',
        'Tránh đăng cùng lúc nhiều comment',
        'Mô phỏng hành vi người dùng thật'
      ],
      demo: [
        { time: '8:00 - 10:00', activity: 'Peak time Shopee - Đăng 15 comments' },
        { time: '12:00 - 13:00', activity: 'Lunch break TikTok - Đăng 8 comments' },
        { time: '19:00 - 22:00', activity: 'Prime time Facebook - Đăng 20 comments' }
      ]
    },
    {
      title: 'Phân tích hiệu quả chi tiết',
      description: 'Dashboard thống kê toàn diện giúp theo dõi hiệu quả seeding và tối ưu hóa chiến lược marketing.',
      features: [
        'Theo dõi engagement rate theo thời gian thực',
        'Phân tích comment nào hiệu quả nhất',
        'So sánh hiệu quả giữa các nền tảng',
        'Gợi ý tối ưu hóa chiến lược'
      ],
      demo: [
        { metric: 'Engagement Rate', value: '+65%', trend: 'up' },
        { metric: 'Comment Interactions', value: '2,450', trend: 'up' },
        { metric: 'Conversion Rate', value: '+42%', trend: 'up' }
      ]
    },
    {
      title: 'Templates chuyên ngành',
      description: 'Thư viện template phong phú được thiết kế riêng cho từng ngành hàng, đảm bảo comment phù hợp và hiệu quả.',
      features: [
        'Mỹ phẩm: Tập trung vào hiệu quả và cảm nhận',
        'Thời trang: Nhấn mạnh style và trend',
        'F&B: Tập trung vào hương vị và trải nghiệm',
        'Công nghệ: Tính năng và hiệu suất'
      ],
      demo: [
        { category: 'Mỹ phẩm', template: 'Da em sáng hẳn lên sau khi dùng! Recommend mọi người nha ❤️' },
        { category: 'Thời trang', template: 'Outfit này trendy quá, mặc lên xinh như công chúa! 👗' },
        { category: 'F&B', template: 'Món này ngon tuyệt vời, vị đậm đà không thể chối từ! 🍜' }
      ]
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-secondary-100 text-secondary-800 px-4 py-2 rounded-full text-sm font-medium mb-4"
          >
            <CogIcon className="h-4 w-4" />
            <span>Tính năng chính</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4 text-vietnamese"
          >
            Tất cả trong một - Từ tạo đến phân tích
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto text-vietnamese"
          >
            Giải pháp comment seeding hoàn chỉnh với AI thông minh và analytics mạnh mẽ
          </motion.p>
        </div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeTab === index
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-primary-600'
              }`}
            >
              <tab.icon className="h-5 w-5" />
              <span>{tab.name}</span>
            </button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Content */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-vietnamese">
                {tabContent[activeTab].title}
              </h3>
              <p className="text-gray-600 mb-6 text-vietnamese leading-relaxed">
                {tabContent[activeTab].description}
              </p>
              
              <ul className="space-y-3">
                {tabContent[activeTab].features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-vietnamese">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Demo/Visual */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-4 text-vietnamese">
                {activeTab === 0 && '🎯 Ví dụ comments được tạo'}
                {activeTab === 1 && '⏰ Lịch đăng tối ưu'}
                {activeTab === 2 && '📊 Thống kê hiệu quả'}
                {activeTab === 3 && '📝 Templates mẫu'}
              </h4>
              
              <div className="space-y-4">
                {activeTab === 0 &&
                  (tabContent[0].demo as CommentDemoItem[]).map((item, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg border border-gray-200">
                      <div className="text-xs text-primary-600 font-medium mb-2">
                        {item.platform}
                      </div>
                      <div className="text-sm text-gray-700 text-vietnamese">
                        "{item.comment}"
                      </div>
                    </div>
                  ))}

                {activeTab === 1 &&
                  (tabContent[1].demo as ScheduleDemoItem[]).map((item, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg border border-gray-200">
                      <div className="text-sm font-medium text-gray-900">
                        {item.time}
                      </div>
                      <div className="text-sm text-gray-600 text-vietnamese">
                        {item.activity}
                      </div>
                    </div>
                  ))}

                {activeTab === 2 &&
                  (tabContent[2].demo as AnalyticsDemoItem[]).map((item, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg border border-gray-200">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">{item.metric}</span>
                        <span
                          className={`text-sm font-semibold ${
                            item.trend === 'up' ? 'text-green-600' : 'text-red-600'
                          }`}
                        >
                          {item.value}
                        </span>
                      </div>
                    </div>
                  ))}

                {activeTab === 3 &&
                  (tabContent[3].demo as TemplateDemoItem[]).map((item, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg border border-gray-200">
                      <div className="text-xs text-secondary-600 font-medium mb-2">
                        {item.category}
                      </div>
                      <div className="text-sm text-gray-700 text-vietnamese">
                        "{item.template}"
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesSection 