'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  HomeIcon,
  ChatBubbleLeftRightIcon,
  ChartBarIcon,
  CogIcon,
  DocumentTextIcon,
  UserGroupIcon,
  LightBulbIcon,
  QuestionMarkCircleIcon,
  LinkIcon,
  ClockIcon
} from '@heroicons/react/24/outline'
import { useState } from 'react'

const DashboardSidebar = () => {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)

  const navigation = [
    {
      name: 'Tổng quan',
      href: '/dashboard',
      icon: HomeIcon,
      badge: null
    },
    {
      name: 'Tạo Comments',
      href: '/dashboard/comments',
      icon: ChatBubbleLeftRightIcon,
      badge: 'hot'
    },
    {
      name: 'Tài khoản',
      href: '/dashboard/accounts',
      icon: LinkIcon,
      badge: null
    },
    {
      name: 'Campaigns',
      href: '/dashboard/campaigns',
      icon: LightBulbIcon,
      badge: null
    },
    {
      name: 'Lịch sử',
      href: '/dashboard/history',
      icon: ClockIcon,
      badge: null
    },
    {
      name: 'Phân tích',
      href: '/dashboard/analytics',
      icon: ChartBarIcon,
      badge: null
    },
    {
      name: 'Templates',
      href: '/dashboard/templates',
      icon: DocumentTextIcon,
      badge: null
    },
    {
      name: 'Nền tảng',
      href: '/dashboard/platforms',
      icon: UserGroupIcon,
      badge: null
    },
    {
      name: 'Cài đặt',
      href: '/dashboard/settings',
      icon: CogIcon,
      badge: null
    },
    {
      name: 'Hỗ trợ',
      href: '/dashboard/support',
      icon: QuestionMarkCircleIcon,
      badge: null
    }
  ]

  const currentPlan = {
    name: 'Cơ bản',
    usage: 450,
    limit: 500,
    percentage: 90
  }

  return (
    <>
      {/* Mobile overlay */}
      <div className="lg:hidden fixed inset-0 bg-gray-900 bg-opacity-50 z-40"></div>
      
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 bg-white shadow-lg transition-all duration-300 ${
        isCollapsed ? 'w-16' : 'w-64'
      } lg:translate-x-0`}>
        
        {/* Logo */}
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
          <Link href="/dashboard" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">MS</span>
            </div>
            {!isCollapsed && (
              <span className="font-heading font-bold text-xl text-gray-900">
                MarkSeed
              </span>
            )}
          </Link>
          
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-1 text-gray-500 hover:text-gray-700 lg:hidden"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-2 py-4 space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  isActive
                    ? 'bg-primary-50 text-primary-700 border-r-2 border-primary-600'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-primary-600'
                }`}
              >
                <item.icon className={`mr-3 h-5 w-5 flex-shrink-0 ${
                  isActive ? 'text-primary-600' : 'text-gray-400 group-hover:text-primary-600'
                }`} />
                
                {!isCollapsed && (
                  <>
                    <span className="text-vietnamese">{item.name}</span>
                    {item.badge && (
                      <span className="ml-auto inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        {item.badge}
                      </span>
                    )}
                  </>
                )}
              </Link>
            )
          })}
        </nav>

        {/* Plan Usage */}
        {!isCollapsed && (
          <div className="p-4 border-t border-gray-200">
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-900 text-vietnamese">
                  Gói {currentPlan.name}
                </span>
                <Link
                  href="/dashboard/billing"
                  className="text-xs text-primary-600 hover:text-primary-700 font-medium"
                >
                  Nâng cấp
                </Link>
              </div>
              
              <div className="mb-2">
                <div className="flex justify-between text-xs text-gray-600 mb-1">
                  <span>Comments đã dùng</span>
                  <span>{currentPlan.usage}/{currentPlan.limit}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-primary-600 to-secondary-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${currentPlan.percentage}%` }}
                  ></div>
                </div>
              </div>
              
              <p className="text-xs text-gray-600 text-vietnamese">
                Còn lại {currentPlan.limit - currentPlan.usage} comments tháng này
              </p>
            </div>
          </div>
        )}

        {/* Help Section */}
        {!isCollapsed && (
          <div className="p-4">
            <div className="bg-gray-50 rounded-lg p-3">
              <h4 className="text-sm font-medium text-gray-900 mb-2 text-vietnamese">
                💡 Cần hỗ trợ?
              </h4>
              <p className="text-xs text-gray-600 mb-3 text-vietnamese">
                Xem hướng dẫn sử dụng hoặc liên hệ team support
              </p>
              <Link
                href="/dashboard/support"
                className="inline-flex items-center text-xs text-primary-600 hover:text-primary-700 font-medium"
              >
                Nhận hỗ trợ →
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default DashboardSidebar 