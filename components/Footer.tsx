'use client'

import Link from 'next/link'
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline'

const Footer = () => {
  const footerSections = [
    {
      title: 'Sản phẩm',
      links: [
        { name: 'Tính năng', href: '#features' },
        { name: 'Giá cả', href: '#pricing' },
        { name: 'Templates', href: '/templates' },
        { name: 'Tích hợp', href: '/integrations' },
        { name: 'API', href: '/api-docs' }
      ]
    },
    {
      title: 'Giải pháp',
      links: [
        { name: 'Cho shop nhỏ', href: '/solutions/small-business' },
        { name: 'Cho doanh nghiệp', href: '/solutions/enterprise' },
        { name: 'Cho agency', href: '/solutions/agency' },
        { name: 'E-commerce', href: '/solutions/ecommerce' },
        { name: 'Social media', href: '/solutions/social-media' }
      ]
    },
    {
      title: 'Tài nguyên',
      links: [
        { name: 'Blog', href: '/blog' },
        { name: 'Hướng dẫn', href: '/guides' },
        { name: 'Case studies', href: '/case-studies' },
        { name: 'Webinar', href: '/webinars' },
        { name: 'Templates miễn phí', href: '/free-templates' }
      ]
    },
    {
      title: 'Hỗ trợ',
      links: [
        { name: 'Trung tâm trợ giúp', href: '/help' },
        { name: 'Liên hệ', href: '/contact' },
        { name: 'Trạng thái hệ thống', href: '/status' },
        { name: 'Báo lỗi', href: '/report-bug' },
        { name: 'Đề xuất tính năng', href: '/feature-request' }
      ]
    }
  ]

  const socialLinks = [
    { name: 'Facebook', href: 'https://facebook.com/markseed', icon: '📘' },
    { name: 'Zalo', href: 'https://zalo.me/markseed', icon: '💙' },
    { name: 'TikTok', href: 'https://tiktok.com/@markseed', icon: '🎵' },
    { name: 'YouTube', href: 'https://youtube.com/markseed', icon: '📺' },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/markseed', icon: '💼' }
  ]

  const legalLinks = [
    { name: 'Điều khoản sử dụng', href: '/terms' },
    { name: 'Chính sách bảo mật', href: '/privacy' },
    { name: 'Chính sách cookie', href: '/cookies' },
    { name: 'DMCA', href: '/dmca' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">MS</span>
                </div>
                <span className="font-heading font-bold text-2xl">
                  MarkSeed
                </span>
              </Link>
              
              <p className="text-gray-300 mb-6 text-vietnamese leading-relaxed">
                Công cụ AI đầu tiên tại Việt Nam chuyên tạo comment seeding tự nhiên cho 
                các nền tảng mạng xã hội và thương mại điện tử. Giúp businesses tăng 
                engagement và doanh số một cách hiệu quả.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPinIcon className="h-5 w-5 text-primary-400" />
                  <span className="text-gray-300 text-sm">
                    Tầng 10, Tòa nhà ABC, 123 Nguyễn Huệ, Q.1, TP.HCM
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <PhoneIcon className="h-5 w-5 text-primary-400" />
                  <span className="text-gray-300 text-sm">
                    +84 28 1234 5678
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <EnvelopeIcon className="h-5 w-5 text-primary-400" />
                  <span className="text-gray-300 text-sm">
                    support@markseed.vn
                  </span>
                </div>
              </div>
            </div>

            {/* Footer Sections */}
            {footerSections.map((section, index) => (
              <div key={index}>
                <h3 className="font-semibold text-white mb-4 text-vietnamese">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm text-vietnamese flex items-center group"
                      >
                        <span>{link.name}</span>
                        <ChevronRightIcon className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-200" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2 text-vietnamese">
                📧 Nhận tips marketing miễn phí
              </h3>
              <p className="text-gray-300 text-vietnamese">
                Cập nhật xu hướng comment seeding và chiến lược marketing mới nhất
              </p>
            </div>
            <div className="flex space-x-4">
              <input
                type="email"
                placeholder="Nhập email của bạn..."
                className="form-input flex-1 bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              <button className="btn-primary px-6 whitespace-nowrap">
                Đăng ký
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm text-vietnamese">
              © 2024 MarkSeed. Tất cả quyền được bảo lưu. Made with ❤️ in Vietnam.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Theo dõi chúng tôi:</span>
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                  title={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </Link>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-4">
              {legalLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm text-vietnamese"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-wrap justify-center items-center space-x-8 opacity-60">
            <div className="flex items-center space-x-2 text-gray-400 text-xs">
              <span>🔒</span>
              <span>SSL Secured</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-xs">
              <span>🇻🇳</span>
              <span>Proudly Vietnamese</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-xs">
              <span>⚡</span>
              <span>99.9% Uptime</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-xs">
              <span>📱</span>
              <span>Mobile Optimized</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-xs">
              <span>🤖</span>
              <span>AI Powered</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 