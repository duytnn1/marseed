'use client'

import { useState } from 'react'
import { 
  PlusIcon,
  PlayIcon,
  PauseIcon,
  StopIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon,
  ClockIcon,
  ChartBarIcon,
  UsersIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'

const CampaignsPage = () => {
  const [selectedTab, setSelectedTab] = useState('all')
  const [showCreateModal, setShowCreateModal] = useState(false)

  // Mock campaign data
  const campaigns = [
    {
      id: 1,
      name: 'Campaign Mỹ phẩm Tết 2024',
      status: 'active',
      platform: 'Shopee',
      industry: 'Beauty',
      startDate: '2024-01-15',
      endDate: '2024-02-15',
      budget: 500000,
      spent: 125000,
      commentsGenerated: 245,
      engagement: 1850,
      reach: 15600,
      ctr: 3.2,
      description: 'Chiến dịch quảng bá sản phẩm mỹ phẩm dịp Tết Nguyên Đán'
    },
    {
      id: 2,
      name: 'Thời trang Thu Đông',
      status: 'paused',
      platform: 'Lazada',
      industry: 'Fashion',
      startDate: '2024-01-10',
      endDate: '2024-03-10',
      budget: 300000,
      spent: 87000,
      commentsGenerated: 156,
      engagement: 1240,
      reach: 9800,
      ctr: 2.8,
      description: 'Quảng bá bộ sưu tập thời trang mùa thu đông'
    },
    {
      id: 3,
      name: 'F&B Healthy Trend',
      status: 'completed',
      platform: 'TikTok',
      industry: 'F&B',
      startDate: '2023-12-01',
      endDate: '2024-01-01',
      budget: 200000,
      spent: 200000,
      commentsGenerated: 320,
      engagement: 2650,
      reach: 22400,
      ctr: 4.1,
      description: 'Xu hướng ăn uống healthy cho giới trẻ'
    },
    {
      id: 4,
      name: 'Tech Gadgets 2024',
      status: 'draft',
      platform: 'Facebook',
      industry: 'Technology',
      startDate: '2024-02-01',
      endDate: '2024-04-01',
      budget: 750000,
      spent: 0,
      commentsGenerated: 0,
      engagement: 0,
      reach: 0,
      ctr: 0,
      description: 'Giới thiệu các sản phẩm công nghệ mới nhất'
    }
  ]

  const tabs = [
    { id: 'all', name: 'Tất cả', count: campaigns.length },
    { id: 'active', name: 'Đang chạy', count: campaigns.filter(c => c.status === 'active').length },
    { id: 'paused', name: 'Tạm dừng', count: campaigns.filter(c => c.status === 'paused').length },
    { id: 'completed', name: 'Hoàn thành', count: campaigns.filter(c => c.status === 'completed').length },
    { id: 'draft', name: 'Nháp', count: campaigns.filter(c => c.status === 'draft').length }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800'
      case 'paused':
        return 'bg-yellow-100 text-yellow-800'
      case 'completed':
        return 'bg-blue-100 text-blue-800'
      case 'draft':
        return 'bg-gray-100 text-gray-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active':
        return 'Đang chạy'
      case 'paused':
        return 'Tạm dừng'
      case 'completed':
        return 'Hoàn thành'
      case 'draft':
        return 'Nháp'
      default:
        return status
    }
  }

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'Shopee':
        return 'bg-orange-100 text-orange-800'
      case 'Lazada':
        return 'bg-blue-100 text-blue-800'
      case 'TikTok':
        return 'bg-pink-100 text-pink-800'
      case 'Facebook':
        return 'bg-blue-100 text-blue-800'
      case 'Zalo':
        return 'bg-blue-100 text-blue-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const filteredCampaigns = selectedTab === 'all' 
    ? campaigns 
    : campaigns.filter(campaign => campaign.status === selectedTab)

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 text-vietnamese">
            Quản lý chiến dịch
          </h1>
          <p className="mt-1 text-sm text-gray-600 text-vietnamese">
            Tạo và theo dõi các chiến dịch comment seeding
          </p>
        </div>
        
        <button
          onClick={() => setShowCreateModal(true)}
          className="btn-primary mt-4 sm:mt-0 flex items-center space-x-2"
        >
          <PlusIcon className="h-5 w-5" />
          <span>Tạo chiến dịch mới</span>
        </button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <PlayIcon className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Đang chạy</p>
              <p className="text-2xl font-bold text-gray-900">
                {campaigns.filter(c => c.status === 'active').length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <ChatBubbleLeftRightIcon className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Comments tháng này</p>
              <p className="text-2xl font-bold text-gray-900">
                {campaigns.reduce((sum, c) => sum + c.commentsGenerated, 0)}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded-lg">
              <UsersIcon className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Tổng reach</p>
              <p className="text-2xl font-bold text-gray-900">
                {(campaigns.reduce((sum, c) => sum + c.reach, 0) / 1000).toFixed(1)}K
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-orange-100 rounded-lg">
              <ChartBarIcon className="h-6 w-6 text-orange-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">CTR trung bình</p>
              <p className="text-2xl font-bold text-gray-900">
                {(campaigns.reduce((sum, c) => sum + c.ctr, 0) / campaigns.length).toFixed(1)}%
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6" aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`${
                  selectedTab === tab.id
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm text-vietnamese`}
              >
                {tab.name}
                <span className="ml-2 text-xs bg-gray-100 text-gray-900 px-2 py-1 rounded-full">
                  {tab.count}
                </span>
              </button>
            ))}
          </nav>
        </div>

        {/* Campaign List */}
        <div className="p-6">
          {filteredCampaigns.length === 0 ? (
            <div className="text-center py-12">
              <ChatBubbleLeftRightIcon className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900 text-vietnamese">
                Chưa có chiến dịch nào
              </h3>
              <p className="mt-1 text-sm text-gray-500 text-vietnamese">
                Bắt đầu bằng cách tạo chiến dịch comment seeding đầu tiên
              </p>
              <div className="mt-6">
                <button
                  onClick={() => setShowCreateModal(true)}
                  className="btn-primary flex items-center space-x-2"
                >
                  <PlusIcon className="h-5 w-5" />
                  <span>Tạo chiến dịch mới</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredCampaigns.map((campaign) => (
                <div key={campaign.id} className="border border-gray-200 rounded-lg p-6">
                  {/* Campaign Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 text-vietnamese">
                        {campaign.name}
                      </h3>
                      <p className="text-sm text-gray-600 text-vietnamese mt-1">
                        {campaign.description}
                      </p>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(campaign.status)}`}>
                        {getStatusText(campaign.status)}
                      </span>
                    </div>
                  </div>

                  {/* Platform & Industry */}
                  <div className="flex items-center space-x-2 mb-4">
                    <span className={`px-2 py-1 text-xs font-medium rounded ${getPlatformColor(campaign.platform)}`}>
                      {campaign.platform}
                    </span>
                    <span className="px-2 py-1 text-xs font-medium rounded bg-gray-100 text-gray-800">
                      {campaign.industry}
                    </span>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-gray-600">Comments</p>
                      <p className="text-lg font-semibold text-gray-900">
                        {campaign.commentsGenerated}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600">Tương tác</p>
                      <p className="text-lg font-semibold text-gray-900">
                        {campaign.engagement.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600">Reach</p>
                      <p className="text-lg font-semibold text-gray-900">
                        {(campaign.reach / 1000).toFixed(1)}K
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600">CTR</p>
                      <p className="text-lg font-semibold text-gray-900">
                        {campaign.ctr}%
                      </p>
                    </div>
                  </div>

                  {/* Budget Progress */}
                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-gray-600 mb-1">
                      <span>Ngân sách: {campaign.spent.toLocaleString()}₫ / {campaign.budget.toLocaleString()}₫</span>
                      <span>{Math.round((campaign.spent / campaign.budget) * 100)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-primary-600 h-2 rounded-full"
                        style={{ width: `${Math.min((campaign.spent / campaign.budget) * 100, 100)}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="flex items-center text-xs text-gray-600 mb-4">
                    <ClockIcon className="h-4 w-4 mr-1" />
                    <span>{campaign.startDate} - {campaign.endDate}</span>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center space-x-2">
                      {campaign.status === 'active' && (
                        <button className="p-2 text-yellow-600 hover:bg-yellow-50 rounded">
                          <PauseIcon className="h-4 w-4" />
                        </button>
                      )}
                      {campaign.status === 'paused' && (
                        <button className="p-2 text-green-600 hover:bg-green-50 rounded">
                          <PlayIcon className="h-4 w-4" />
                        </button>
                      )}
                      {(campaign.status === 'active' || campaign.status === 'paused') && (
                        <button className="p-2 text-red-600 hover:bg-red-50 rounded">
                          <StopIcon className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-gray-600 hover:bg-gray-50 rounded">
                        <EyeIcon className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-gray-600 hover:bg-gray-50 rounded">
                        <PencilIcon className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-red-600 hover:bg-red-50 rounded">
                        <TrashIcon className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Create Campaign Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 text-vietnamese">
                Tạo chiến dịch mới
              </h3>
              <p className="text-sm text-gray-600 text-vietnamese">
                Thiết lập chiến dịch comment seeding cho sản phẩm của bạn
              </p>
            </div>
            
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="form-label">Tên chiến dịch</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="VD: Campaign Mỹ phẩm Tết 2024"
                  />
                </div>
                
                <div>
                  <label className="form-label">Nền tảng</label>
                  <select className="form-select">
                    <option value="">Chọn nền tảng</option>
                    <option value="shopee">Shopee</option>
                    <option value="lazada">Lazada</option>
                    <option value="tiktok">TikTok</option>
                    <option value="facebook">Facebook</option>
                    <option value="zalo">Zalo</option>
                  </select>
                </div>
                
                <div>
                  <label className="form-label">Ngành hàng</label>
                  <select className="form-select">
                    <option value="">Chọn ngành hàng</option>
                    <option value="beauty">Mỹ phẩm</option>
                    <option value="fashion">Thời trang</option>
                    <option value="fnb">F&B</option>
                    <option value="tech">Công nghệ</option>
                    <option value="home">Nhà cửa</option>
                    <option value="health">Sức khỏe</option>
                  </select>
                </div>
                
                <div>
                  <label className="form-label">Ngân sách (VND)</label>
                  <input
                    type="number"
                    className="form-input"
                    placeholder="500000"
                  />
                </div>
                
                <div>
                  <label className="form-label">Ngày bắt đầu</label>
                  <input
                    type="date"
                    className="form-input"
                  />
                </div>
                
                <div>
                  <label className="form-label">Ngày kết thúc</label>
                  <input
                    type="date"
                    className="form-input"
                  />
                </div>
              </div>
              
              <div>
                <label className="form-label">Mô tả chiến dịch</label>
                <textarea
                  className="form-textarea"
                  rows={3}
                  placeholder="Mô tả mục tiêu và chiến lược của chiến dịch..."
                ></textarea>
              </div>
            </div>
            
            <div className="p-6 border-t border-gray-200 flex justify-end space-x-3">
              <button
                onClick={() => setShowCreateModal(false)}
                className="btn-outline"
              >
                Hủy
              </button>
              <button
                onClick={() => setShowCreateModal(false)}
                className="btn-primary"
              >
                Tạo chiến dịch
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CampaignsPage 