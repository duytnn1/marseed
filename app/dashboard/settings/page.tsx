'use client'

import { useState } from 'react'
import { 
  UserCircleIcon,
  CogIcon,
  CreditCardIcon,
  LinkIcon,
  BellIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  EyeIcon,
  EyeSlashIcon,
  PencilIcon,
  TrashIcon
} from '@heroicons/react/24/outline'

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('profile')
  const [showPassword, setShowPassword] = useState(false)
  type NotificationType = 'email' | 'push' | 'sms' | 'marketing'

  const [notifications, setNotifications] = useState<Record<NotificationType, boolean>>({
    email: true,
    push: false,
    sms: true,
    marketing: false
  })

  const tabs = [
    { id: 'profile', name: 'Hồ sơ', icon: UserCircleIcon },
    { id: 'account', name: 'Tài khoản', icon: CogIcon },
    { id: 'billing', name: 'Thanh toán', icon: CreditCardIcon },
    { id: 'integrations', name: 'Kết nối', icon: LinkIcon },
    { id: 'notifications', name: 'Thông báo', icon: BellIcon },
    { id: 'security', name: 'Bảo mật', icon: ShieldCheckIcon }
  ]

  const connectedPlatforms = [
    { id: 'shopee', name: 'Shopee', connected: true, lastSync: '2024-01-20 14:30' },
    { id: 'lazada', name: 'Lazada', connected: true, lastSync: '2024-01-20 12:15' },
    { id: 'tiktok', name: 'TikTok', connected: false, lastSync: null },
    { id: 'facebook', name: 'Facebook', connected: true, lastSync: '2024-01-19 18:45' },
    { id: 'zalo', name: 'Zalo', connected: false, lastSync: null },
    { id: 'instagram', name: 'Instagram', connected: true, lastSync: '2024-01-20 09:20' }
  ]

  const billingHistory = [
    { id: 1, date: '2024-01-15', plan: 'Gói Cơ bản', amount: 199000, status: 'Đã thanh toán' },
    { id: 2, date: '2023-12-15', plan: 'Gói Cơ bản', amount: 199000, status: 'Đã thanh toán' },
    { id: 3, date: '2023-11-15', plan: 'Gói Cơ bản', amount: 199000, status: 'Đã thanh toán' }
  ]

  const handleNotificationChange = (type: NotificationType) => {
    setNotifications(prev => ({
      ...prev,
      [type]: !prev[type]
    }))
  }

  const renderProfileTab = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 text-vietnamese">
          Thông tin cá nhân
        </h3>
        
        <div className="flex items-center space-x-6 mb-6">
          <div className="w-20 h-20 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center">
            <span className="text-white text-2xl font-bold">NA</span>
          </div>
          <div>
            <button className="btn-outline text-sm">
              Thay đổi ảnh
            </button>
            <p className="text-xs text-gray-500 mt-1">
              JPG, GIF hoặc PNG. Tối đa 1MB.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="form-label">Họ và tên</label>
            <input
              type="text"
              className="form-input"
              defaultValue="Nguyễn Văn A"
            />
          </div>
          
          <div>
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-input"
              defaultValue="nguyenvana@email.com"
            />
          </div>
          
          <div>
            <label className="form-label">Số điện thoại</label>
            <input
              type="tel"
              className="form-input"
              defaultValue="+84 901 234 567"
            />
          </div>
          
          <div>
            <label className="form-label">Ngày sinh</label>
            <input
              type="date"
              className="form-input"
              defaultValue="1990-01-01"
            />
          </div>
        </div>

        <div className="mt-6">
          <label className="form-label">Tên công ty/shop</label>
          <input
            type="text"
            className="form-input"
            defaultValue="Beauty Shop Lan Anh"
          />
        </div>

        <div className="mt-6">
          <label className="form-label">Địa chỉ</label>
          <textarea
            className="form-textarea"
            rows={3}
            defaultValue="123 Nguyễn Huệ, Quận 1, TP.HCM"
          ></textarea>
        </div>

        <div className="mt-6 flex justify-end">
          <button className="btn-primary">
            Lưu thay đổi
          </button>
        </div>
      </div>
    </div>
  )

  const renderAccountTab = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 text-vietnamese">
          Cài đặt tài khoản
        </h3>
        
        <div className="space-y-6">
          <div>
            <label className="form-label">Ngôn ngữ</label>
            <select className="form-select">
              <option value="vi">Tiếng Việt</option>
              <option value="en">English</option>
            </select>
          </div>
          
          <div>
            <label className="form-label">Múi giờ</label>
            <select className="form-select">
              <option value="Asia/Ho_Chi_Minh">Việt Nam (UTC+7)</option>
              <option value="Asia/Bangkok">Bangkok (UTC+7)</option>
              <option value="Asia/Singapore">Singapore (UTC+8)</option>
            </select>
          </div>
          
          <div>
            <label className="form-label">Định dạng ngày</label>
            <select className="form-select">
              <option value="dd/mm/yyyy">DD/MM/YYYY</option>
              <option value="mm/dd/yyyy">MM/DD/YYYY</option>
              <option value="yyyy-mm-dd">YYYY-MM-DD</option>
            </select>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button className="btn-primary">
            Lưu cài đặt
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 text-vietnamese">
          Xóa tài khoản
        </h3>
        
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
          <p className="text-red-800 text-sm text-vietnamese">
            <strong>Cảnh báo:</strong> Việc xóa tài khoản sẽ không thể hoàn tác. 
            Tất cả dữ liệu, chiến dịch và lịch sử sẽ bị xóa vĩnh viễn.
          </p>
        </div>
        
        <button className="btn-danger">
          Xóa tài khoản
        </button>
      </div>
    </div>
  )

  const renderBillingTab = () => (
    <div className="space-y-6">
      {/* Current Plan */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 text-vietnamese">
          Gói hiện tại
        </h3>
        
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-xl font-bold text-gray-900 text-vietnamese">
                Gói Cơ bản
              </h4>
              <p className="text-gray-600 text-vietnamese">
                500 comments/ngày • 5 nền tảng • Phân tích chi tiết
              </p>
              <p className="text-2xl font-bold text-primary-600 mt-2">
                199,000₫/tháng
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Gia hạn tiếp theo</p>
              <p className="font-semibold text-gray-900">15/02/2024</p>
            </div>
          </div>
        </div>
        
        <div className="flex space-x-3">
          <button className="btn-primary">
            Nâng cấp gói
          </button>
          <button className="btn-outline">
            Hủy đăng ký
          </button>
        </div>
      </div>

      {/* Payment Method */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 text-vietnamese">
          Phương thức thanh toán
        </h3>
        
        <div className="border border-gray-200 rounded-lg p-4 mb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">VISA</span>
              </div>
              <div>
                <p className="font-medium">**** **** **** 1234</p>
                <p className="text-sm text-gray-600">Hết hạn 12/26</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-2 text-gray-600 hover:bg-gray-50 rounded">
                <PencilIcon className="h-4 w-4" />
              </button>
              <button className="p-2 text-red-600 hover:bg-red-50 rounded">
                <TrashIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
        
        <button className="btn-outline">
          Thêm phương thức thanh toán
        </button>
      </div>

      {/* Billing History */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 text-vietnamese">
          Lịch sử thanh toán
        </h3>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ngày
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Gói dịch vụ
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Số tiền
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Trạng thái
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Hành động
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {billingHistory.map((bill) => (
                <tr key={bill.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {bill.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-vietnamese">
                    {bill.plan}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {bill.amount.toLocaleString()}₫
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                      {bill.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button className="text-primary-600 hover:text-primary-500">
                      Tải hóa đơn
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )

  const renderIntegrationsTab = () => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 text-vietnamese">
        Kết nối nền tảng
      </h3>
      <p className="text-gray-600 mb-6 text-vietnamese">
        Kết nối các tài khoản mạng xã hội để tự động đăng comments
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {connectedPlatforms.map((platform) => (
          <div key={platform.id} className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm font-bold">
                    {platform.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{platform.name}</h4>
                  <p className="text-sm text-gray-600">
                    {platform.connected ? 'Đã kết nối' : 'Chưa kết nối'}
                  </p>
                </div>
              </div>
              
              <button className={`px-4 py-2 rounded-lg text-sm font-medium ${
                platform.connected 
                  ? 'bg-red-100 text-red-700 hover:bg-red-200'
                  : 'bg-primary-100 text-primary-700 hover:bg-primary-200'
              }`}>
                {platform.connected ? 'Ngắt kết nối' : 'Kết nối'}
              </button>
            </div>
            
            {platform.connected && platform.lastSync && (
              <p className="text-xs text-gray-500">
                Đồng bộ lần cuối: {platform.lastSync}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  )

  const renderNotificationsTab = () => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 text-vietnamese">
        Cài đặt thông báo
      </h3>
      
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-medium text-gray-900 text-vietnamese">
              Thông báo Email
            </h4>
            <p className="text-sm text-gray-600 text-vietnamese">
              Nhận thông báo về hoạt động tài khoản qua email
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={notifications.email}
              onChange={() => handleNotificationChange('email')}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
          </label>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-medium text-gray-900 text-vietnamese">
              Thông báo Push
            </h4>
            <p className="text-sm text-gray-600 text-vietnamese">
              Nhận thông báo đẩy trên trình duyệt
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={notifications.push}
              onChange={() => handleNotificationChange('push')}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
          </label>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-medium text-gray-900 text-vietnamese">
              Thông báo SMS
            </h4>
            <p className="text-sm text-gray-600 text-vietnamese">
              Nhận tin nhắn SMS về các hoạt động quan trọng
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={notifications.sms}
              onChange={() => handleNotificationChange('sms')}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
          </label>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-medium text-gray-900 text-vietnamese">
              Thông báo Marketing
            </h4>
            <p className="text-sm text-gray-600 text-vietnamese">
              Nhận thông tin về tính năng mới và ưu đãi đặc biệt
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={notifications.marketing}
              onChange={() => handleNotificationChange('marketing')}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
          </label>
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <button className="btn-primary">
          Lưu cài đặt
        </button>
      </div>
    </div>
  )

  const renderSecurityTab = () => (
    <div className="space-y-6">
      {/* Change Password */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 text-vietnamese">
          Đổi mật khẩu
        </h3>
        
        <div className="space-y-4">
          <div>
            <label className="form-label">Mật khẩu hiện tại</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                className="form-input pr-10"
                placeholder="••••••••"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeSlashIcon className="h-5 w-5 text-gray-400" />
                ) : (
                  <EyeIcon className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>
          </div>
          
          <div>
            <label className="form-label">Mật khẩu mới</label>
            <input
              type="password"
              className="form-input"
              placeholder="••••••••"
            />
          </div>
          
          <div>
            <label className="form-label">Xác nhận mật khẩu mới</label>
            <input
              type="password"
              className="form-input"
              placeholder="••••••••"
            />
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button className="btn-primary">
            Cập nhật mật khẩu
          </button>
        </div>
      </div>

      {/* Two-Factor Authentication */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 text-vietnamese">
          Xác thực 2 bước (2FA)
        </h3>
        
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600 text-vietnamese">
              Tăng cường bảo mật tài khoản với xác thực 2 bước
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Trạng thái: <span className="text-red-600 font-medium">Chưa kích hoạt</span>
            </p>
          </div>
          
          <button className="btn-primary">
            Kích hoạt 2FA
          </button>
        </div>
      </div>

      {/* Active Sessions */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 text-vietnamese">
          Phiên đăng nhập
        </h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div>
              <p className="font-medium text-gray-900">Chrome trên Windows</p>
              <p className="text-sm text-gray-600">IP: 192.168.1.100 • TP.HCM, Việt Nam</p>
              <p className="text-sm text-gray-500">Hoạt động hiện tại</p>
            </div>
            <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
              Hiện tại
            </span>
          </div>
          
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div>
              <p className="font-medium text-gray-900">Safari trên iPhone</p>
              <p className="text-sm text-gray-600">IP: 10.0.0.50 • Hà Nội, Việt Nam</p>
              <p className="text-sm text-gray-500">2 giờ trước</p>
            </div>
            <button className="text-red-600 hover:text-red-500 text-sm font-medium">
              Đăng xuất
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 text-vietnamese">
            Cài đặt
          </h1>
          <p className="mt-1 text-sm text-gray-600 text-vietnamese">
            Quản lý thông tin tài khoản và tùy chỉnh trải nghiệm
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          {/* Tab Navigation */}
          <div className="lg:w-64 mb-6 lg:mb-0">
            <nav className="space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`${
                    activeTab === tab.id
                      ? 'bg-primary-50 border-primary-500 text-primary-700'
                      : 'border-transparent text-gray-900 hover:bg-gray-50'
                  } group border-l-4 px-3 py-2 flex items-center text-sm font-medium w-full text-left text-vietnamese`}
                >
                  <tab.icon className={`${
                    activeTab === tab.id ? 'text-primary-500' : 'text-gray-400 group-hover:text-gray-500'
                  } flex-shrink-0 -ml-1 mr-3 h-6 w-6`} />
                  <span className="truncate">{tab.name}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="flex-1 min-w-0">
            {activeTab === 'profile' && renderProfileTab()}
            {activeTab === 'account' && renderAccountTab()}
            {activeTab === 'billing' && renderBillingTab()}
            {activeTab === 'integrations' && renderIntegrationsTab()}
            {activeTab === 'notifications' && renderNotificationsTab()}
            {activeTab === 'security' && renderSecurityTab()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SettingsPage 