'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  BellIcon, 
  UserCircleIcon, 
  MagnifyingGlassIcon,
  PlusIcon
} from '@heroicons/react/24/outline'

const DashboardHeader = () => {
  const [showNotifications, setShowNotifications] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)

  const notifications = [
    {
      id: 1,
      title: 'Campaign "Mỹ phẩm trend" hoàn thành',
      message: '150 comments đã được đăng thành công',
      time: '5 phút trước',
      type: 'success'
    },
    {
      id: 2,
      title: 'Engagement tăng 45%',
      message: 'Shop của bạn có sự cải thiện đáng kể',
      time: '1 giờ trước',
      type: 'info'
    },
    {
      id: 3,
      title: 'Gần hết quota tháng này',
      message: 'Còn 50 comments, cân nhắc nâng cấp',
      time: '2 giờ trước',
      type: 'warning'
    }
  ]

  const userMenuItems = [
    { name: 'Hồ sơ cá nhân', href: '/dashboard/profile' },
    { name: 'Cài đặt tài khoản', href: '/dashboard/settings' },
    { name: 'Billing & Plans', href: '/dashboard/billing' },
    { name: 'Liên hệ hỗ trợ', href: '/dashboard/support' },
    { name: 'Đăng xuất', href: '/auth/logout' }
  ]

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="flex items-center justify-between h-16 px-6">
        {/* Search */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Tìm kiếm campaigns, templates..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          {/* Quick Action */}
          <Link
            href="/dashboard/comments/new"
            className="inline-flex items-center space-x-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors duration-200"
          >
            <PlusIcon className="h-4 w-4" />
            <span className="text-sm font-medium">Tạo Comments</span>
          </Link>

          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            >
              <BellIcon className="h-6 w-6" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* Notifications Dropdown */}
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                <div className="p-4 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 text-vietnamese">
                    Thông báo
                  </h3>
                </div>
                
                <div className="max-h-96 overflow-y-auto">
                  {notifications.map((notification) => (
                    <div key={notification.id} className="p-4 border-b border-gray-100 hover:bg-gray-50">
                      <div className="flex items-start space-x-3">
                        <div className={`w-2 h-2 rounded-full mt-2 ${
                          notification.type === 'success' ? 'bg-green-500' :
                          notification.type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                        }`}></div>
                        <div className="flex-1">
                          <h4 className="text-sm font-medium text-gray-900 text-vietnamese">
                            {notification.title}
                          </h4>
                          <p className="text-sm text-gray-600 text-vietnamese mt-1">
                            {notification.message}
                          </p>
                          <p className="text-xs text-gray-400 mt-2">
                            {notification.time}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="p-4 text-center border-t border-gray-200">
                  <Link
                    href="/dashboard/notifications"
                    className="text-sm text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Xem tất cả thông báo
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* User Menu */}
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center space-x-2 p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            >
              <img
                src="https://via.placeholder.com/32x32"
                alt="User avatar"
                className="w-8 h-8 rounded-full"
              />
              <span className="text-sm font-medium text-gray-900 text-vietnamese">
                Nguyễn Văn A
              </span>
            </button>

            {/* User Dropdown */}
            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                <div className="p-4 border-b border-gray-200">
                  <p className="text-sm font-medium text-gray-900 text-vietnamese">
                    Nguyễn Văn A
                  </p>
                  <p className="text-sm text-gray-600">
                    nguyenvana@email.com
                  </p>
                  <div className="mt-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                      Gói Cơ bản
                    </span>
                  </div>
                </div>
                
                <div className="py-2">
                  {userMenuItems.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600 text-vietnamese"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default DashboardHeader 