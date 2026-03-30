'use client'

import { 
  ChartBarIcon,
  ChatBubbleLeftRightIcon,
  ArrowTrendingUpIcon,
  EyeIcon,
  CalendarIcon,
  PlayIcon
} from '@heroicons/react/24/outline'
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts'
import AICopilotPanel from '@/components/AICopilotPanel'

const DashboardPage = () => {
  const stats = [
    {
      name: 'Comments tạo tháng này',
      value: '2,450',
      change: '+12%',
      changeType: 'increase',
      icon: ChatBubbleLeftRightIcon
    },
    {
      name: 'Engagement rate',
      value: '65.4%',
      change: '+8.2%',
      changeType: 'increase',
      icon: ArrowTrendingUpIcon
    },
    {
      name: 'Campaigns đang chạy',
      value: '8',
      change: '+2',
      changeType: 'increase',
      icon: PlayIcon
    },
    {
      name: 'Platforms kết nối',
      value: '5',
      change: '+1',
      changeType: 'increase',
      icon: EyeIcon
    }
  ]

  const engagementData = [
    { name: 'T2', shopee: 120, facebook: 80, tiktok: 140 },
    { name: 'T3', shopee: 140, facebook: 95, tiktok: 160 },
    { name: 'T4', shopee: 160, facebook: 110, tiktok: 180 },
    { name: 'T5', shopee: 180, facebook: 125, tiktok: 200 },
    { name: 'T6', shopee: 200, facebook: 140, tiktok: 220 },
    { name: 'T7', shopee: 220, facebook: 160, tiktok: 240 },
    { name: 'CN', shopee: 190, facebook: 145, tiktok: 210 }
  ]

  const commentsData = [
    { name: 'Tuần 1', comments: 1200 },
    { name: 'Tuần 2', comments: 1500 },
    { name: 'Tuần 3', comments: 1800 },
    { name: 'Tuần 4', comments: 2200 }
  ]

  const recentCampaigns = [
    {
      id: 1,
      name: 'Mỹ phẩm trending Q4',
      platform: 'Shopee + Facebook',
      status: 'active',
      comments: 245,
      engagement: '+45%',
      lastUpdate: '2 giờ trước'
    },
    {
      id: 2,
      name: 'Fashion sale 11.11',
      platform: 'TikTok + Instagram',
      status: 'completed',
      comments: 180,
      engagement: '+32%',
      lastUpdate: '1 ngày trước'
    },
    {
      id: 3,
      name: 'Tech gadgets review',
      platform: 'Lazada + Zalo',
      status: 'scheduled',
      comments: 0,
      engagement: '--',
      lastUpdate: 'Chưa bắt đầu'
    }
  ]

  const topTemplates = [
    { name: 'Mỹ phẩm - Khen ngợi hiệu quả', usage: 89, category: 'Beauty' },
    { name: 'Thời trang - Trendy comment', usage: 76, category: 'Fashion' },
    { name: 'F&B - Ngon miệng', usage: 65, category: 'Food' },
    { name: 'Tech - Đánh giá tính năng', usage: 54, category: 'Technology' }
  ]

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 text-vietnamese">
            Dashboard Tổng quan
          </h1>
          <p className="text-gray-600 text-vietnamese">
            Theo dõi hiệu quả comment seeding và quản lý campaigns
          </p>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="btn-outline px-4 py-2">
            📊 Xuất báo cáo
          </button>
          <button className="btn-primary px-4 py-2">
            ➕ Tạo campaign mới
          </button>
        </div>
      </div>

      {/* AI Campaign Copilot */}
      <AICopilotPanel />

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 text-vietnamese">
                  {stat.name}
                </p>
                <p className="text-2xl font-bold text-gray-900 mt-2">
                  {stat.value}
                </p>
              </div>
              <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center">
                <stat.icon className="h-6 w-6 text-primary-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <span className={`text-sm font-medium ${
                stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change}
              </span>
              <span className="text-sm text-gray-500 ml-2">so với tháng trước</span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Engagement Trends */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900 text-vietnamese">
              Engagement theo nền tảng
            </h3>
            <select className="text-sm border border-gray-300 rounded-lg px-3 py-1">
              <option>7 ngày qua</option>
              <option>30 ngày qua</option>
              <option>3 tháng qua</option>
            </select>
          </div>
          
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={engagementData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="shopee" stackId="1" stroke="#f59e0b" fill="#fef3c7" />
              <Area type="monotone" dataKey="facebook" stackId="1" stroke="#3b82f6" fill="#dbeafe" />
              <Area type="monotone" dataKey="tiktok" stackId="1" stroke="#ef4444" fill="#fee2e2" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Comments Volume */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900 text-vietnamese">
              Lượng comments theo tuần
            </h3>
            <div className="text-sm text-gray-600">
              Tổng: 6,700 comments
            </div>
          </div>
          
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={commentsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="comments" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Tables Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Campaigns */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900 text-vietnamese">
              Campaigns gần đây
            </h3>
            <a href="/dashboard/campaigns" className="text-sm text-primary-600 hover:text-primary-700 font-medium">
              Xem tất cả →
            </a>
          </div>
          
          <div className="space-y-4">
            {recentCampaigns.map((campaign) => (
              <div key={campaign.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 text-vietnamese">
                    {campaign.name}
                  </h4>
                  <p className="text-sm text-gray-600 text-vietnamese">
                    {campaign.platform}
                  </p>
                </div>
                
                <div className="text-right">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      campaign.status === 'active' ? 'bg-green-100 text-green-800' :
                      campaign.status === 'completed' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {campaign.status === 'active' ? 'Đang chạy' :
                       campaign.status === 'completed' ? 'Hoàn thành' : 'Đã lên lịch'}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">
                    {campaign.comments} comments • {campaign.engagement}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Templates */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900 text-vietnamese">
              Templates phổ biến
            </h3>
            <a href="/dashboard/templates" className="text-sm text-primary-600 hover:text-primary-700 font-medium">
              Xem tất cả →
            </a>
          </div>
          
          <div className="space-y-4">
            {topTemplates.map((template, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 text-vietnamese">
                    {template.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {template.category}
                  </p>
                </div>
                
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">
                    {template.usage} lượt dùng
                  </p>
                  <div className="w-16 bg-gray-200 rounded-full h-1.5 mt-1">
                    <div 
                      className="bg-primary-600 h-1.5 rounded-full"
                      style={{ width: `${template.usage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold mb-2 text-vietnamese">
              🚀 Sẵn sàng tạo campaign mới?
            </h3>
            <p className="text-primary-100 text-vietnamese">
              Bắt đầu tạo comments với AI thông minh và templates chuyên nghiệp
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200">
              Tạo Comments AI
            </button>
            <button className="bg-white bg-opacity-20 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-30 transition-colors duration-200">
              Xem Templates
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage 