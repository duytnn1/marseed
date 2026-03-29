'use client'

import { useState } from 'react'
import { 
  ChartBarIcon, 
  ArrowTrendingUpIcon, 
  EyeIcon, 
  HeartIcon,
  ChatBubbleLeftRightIcon,
  ShareIcon,
  CalendarDaysIcon,
  FunnelIcon
} from '@heroicons/react/24/outline'
import { 
  LineChart, 
  Line, 
  AreaChart, 
  Area, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts'

const AnalyticsPage = () => {
  const [timeRange, setTimeRange] = useState('7d')
  const [selectedPlatform, setSelectedPlatform] = useState('all')

  // Mock data
  const engagementData = [
    { name: 'T2', comments: 45, likes: 120, shares: 20, reach: 1500 },
    { name: 'T3', comments: 52, likes: 140, shares: 25, reach: 1800 },
    { name: 'T4', comments: 38, likes: 110, shares: 18, reach: 1200 },
    { name: 'T5', comments: 65, likes: 180, shares: 35, reach: 2200 },
    { name: 'T6', comments: 48, likes: 130, shares: 22, reach: 1600 },
    { name: 'T7', comments: 72, likes: 200, shares: 40, reach: 2500 },
    { name: 'CN', comments: 58, likes: 160, shares: 28, reach: 1900 }
  ]

  const platformData = [
    { name: 'Shopee', value: 35, color: '#FF6B35' },
    { name: 'Lazada', value: 25, color: '#0F146D' },
    { name: 'TikTok', value: 20, color: '#FF0050' },
    { name: 'Facebook', value: 15, color: '#1877F2' },
    { name: 'Zalo', value: 5, color: '#0068FF' }
  ]

  const campaignPerformance = [
    { name: 'Campaign Mỹ phẩm', impressions: 15000, clicks: 450, ctr: 3.0, cost: 150000 },
    { name: 'Campaign Thời trang', impressions: 12000, clicks: 380, ctr: 3.2, cost: 120000 },
    { name: 'Campaign F&B', impressions: 18000, clicks: 520, ctr: 2.9, cost: 180000 },
    { name: 'Campaign Tech', impressions: 8000, clicks: 280, ctr: 3.5, cost: 90000 }
  ]

  const topComments = [
    {
      id: 1,
      platform: 'Shopee',
      content: 'Sản phẩm này chất lượng quá, mình đã dùng và rất hài lòng!',
      engagement: 145,
      reach: 2800
    },
    {
      id: 2,
      platform: 'Lazada',
      content: 'Giá cả hợp lý, ship nhanh, đóng gói cẩn thận. Recommend!',
      engagement: 132,
      reach: 2400
    },
    {
      id: 3,
      platform: 'TikTok',
      content: 'Wow, trend này đang hot đấy! Ai cũng nên thử 🔥',
      engagement: 186,
      reach: 3200
    }
  ]

  const kpiCards = [
    {
      title: 'Tổng Comments',
      value: '1,247',
      change: '+12.5%',
      icon: ChatBubbleLeftRightIcon,
      color: 'blue'
    },
    {
      title: 'Tương tác trung bình',
      value: '156',
      change: '+8.2%',
      icon: HeartIcon,
      color: 'green'
    },
    {
      title: 'Tỷ lệ phản hồi',
      value: '89.4%',
      change: '+2.1%',
      icon: ArrowTrendingUpIcon,
      color: 'purple'
    },
    {
      title: 'Reach tổng',
      value: '42.8K',
      change: '+15.7%',
      icon: EyeIcon,
      color: 'orange'
    }
  ]

  const timeRanges = [
    { value: '7d', label: '7 ngày' },
    { value: '30d', label: '30 ngày' },
    { value: '90d', label: '3 tháng' },
    { value: '1y', label: '1 năm' }
  ]

  const platforms = [
    { value: 'all', label: 'Tất cả' },
    { value: 'shopee', label: 'Shopee' },
    { value: 'lazada', label: 'Lazada' },
    { value: 'tiktok', label: 'TikTok' },
    { value: 'facebook', label: 'Facebook' },
    { value: 'zalo', label: 'Zalo' }
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 text-vietnamese">
            Phân tích & Báo cáo
          </h1>
          <p className="mt-1 text-sm text-gray-600 text-vietnamese">
            Theo dõi hiệu quả marketing của bạn
          </p>
        </div>
        
        <div className="mt-4 sm:mt-0 flex space-x-3">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="form-select text-sm"
          >
            {timeRanges.map((range) => (
              <option key={range.value} value={range.value}>
                {range.label}
              </option>
            ))}
          </select>
          
          <select
            value={selectedPlatform}
            onChange={(e) => setSelectedPlatform(e.target.value)}
            className="form-select text-sm"
          >
            {platforms.map((platform) => (
              <option key={platform.value} value={platform.value}>
                {platform.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiCards.map((kpi, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 text-vietnamese">{kpi.title}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{kpi.value}</p>
                <p className={`text-sm mt-1 ${
                  kpi.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                }`}>
                  {kpi.change} từ tuần trước
                </p>
              </div>
              <div className={`p-3 rounded-lg ${
                kpi.color === 'blue' ? 'bg-blue-100' :
                kpi.color === 'green' ? 'bg-green-100' :
                kpi.color === 'purple' ? 'bg-purple-100' :
                'bg-orange-100'
              }`}>
                <kpi.icon className={`h-6 w-6 ${
                  kpi.color === 'blue' ? 'text-blue-600' :
                  kpi.color === 'green' ? 'text-green-600' :
                  kpi.color === 'purple' ? 'text-purple-600' :
                  'text-orange-600'
                }`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Engagement Trends */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 text-vietnamese">
              Xu hướng tương tác
            </h3>
            <ChartBarIcon className="h-5 w-5 text-gray-400" />
          </div>
          
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={engagementData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area 
                type="monotone" 
                dataKey="comments" 
                stackId="1"
                stroke="#3B82F6" 
                fill="#3B82F6" 
                fillOpacity={0.6}
                name="Comments"
              />
              <Area 
                type="monotone" 
                dataKey="likes" 
                stackId="1"
                stroke="#10B981" 
                fill="#10B981" 
                fillOpacity={0.6}
                name="Likes"
              />
              <Area 
                type="monotone" 
                dataKey="shares" 
                stackId="1"
                stroke="#F59E0B" 
                fill="#F59E0B" 
                fillOpacity={0.6}
                name="Shares"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Platform Distribution */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 text-vietnamese">
              Phân bố theo nền tảng
            </h3>
            <FunnelIcon className="h-5 w-5 text-gray-400" />
          </div>
          
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={platformData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {platformData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Campaign Performance */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 text-vietnamese">
            Hiệu quả chiến dịch
          </h3>
          <p className="text-sm text-gray-600 text-vietnamese">
            Theo dõi hiệu suất các chiến dịch comment seeding
          </p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Chiến dịch
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Lượt hiển thị
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tương tác
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  CTR
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Chi phí
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {campaignPerformance.map((campaign, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900 text-vietnamese">
                      {campaign.name}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {campaign.impressions.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {campaign.clicks}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {campaign.ctr}%
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {campaign.cost.toLocaleString()}₫
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Top Performing Comments */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 text-vietnamese">
            Comments hiệu quả nhất
          </h3>
          <p className="text-sm text-gray-600 text-vietnamese">
            Những comments có tương tác cao nhất tuần này
          </p>
        </div>
        
        <div className="p-6 space-y-4">
          {topComments.map((comment) => (
            <div key={comment.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-xs bg-primary-100 text-primary-800 px-2 py-1 rounded">
                      {comment.platform}
                    </span>
                  </div>
                  <p className="text-gray-900 text-vietnamese mb-3">
                    "{comment.content}"
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <HeartIcon className="h-4 w-4" />
                      <span>{comment.engagement} tương tác</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <EyeIcon className="h-4 w-4" />
                      <span>{comment.reach.toLocaleString()} reach</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Export Options */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 text-vietnamese">
              Xuất báo cáo
            </h3>
            <p className="text-sm text-gray-600 text-vietnamese">
              Tải xuống báo cáo chi tiết theo định dạng mong muốn
            </p>
          </div>
          
          <div className="flex space-x-3">
            <button className="btn-outline">
              Xuất PDF
            </button>
            <button className="btn-outline">
              Xuất Excel
            </button>
            <button className="btn-primary">
              Gửi email báo cáo
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnalyticsPage 