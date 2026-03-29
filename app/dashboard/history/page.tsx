'use client'

import { useState } from 'react'
import { 
  MagnifyingGlassIcon,
  FunnelIcon,
  EyeIcon,
  ClipboardDocumentIcon,
  TrashIcon,
  CheckCircleIcon,
  ClockIcon,
  XCircleIcon
} from '@heroicons/react/24/outline'

interface CommentHistory {
  id: string
  text: string
  platform: string
  category: string
  tone: string
  status: 'generated' | 'posted' | 'scheduled' | 'failed'
  createdAt: string
  postedAt?: string
  engagement?: {
    likes: number
    replies: number
    shares: number
  }
  targetUrl?: string
}

const HistoryPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedPlatform, setSelectedPlatform] = useState('all')
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [selectedComment, setSelectedComment] = useState<CommentHistory | null>(null)

  const [commentHistory] = useState<CommentHistory[]>([
    {
      id: '1',
      text: 'Sản phẩm này thật sự tuyệt vời! Da mình sáng hẳn lên sau 1 tuần sử dụng 😍',
      platform: 'shopee',
      category: 'beauty',
      tone: 'friendly',
      status: 'posted',
      createdAt: '2024-01-15 14:30',
      postedAt: '2024-01-15 15:00',
      engagement: { likes: 12, replies: 3, shares: 1 },
      targetUrl: 'https://shopee.vn/product/123456'
    },
    {
      id: '2',
      text: 'OBSESSED với sản phẩm này! Đã recommend cho toàn bộ hội chị em! 😍',
      platform: 'tiktok',
      category: 'beauty',
      tone: 'excited',
      status: 'posted',
      createdAt: '2024-01-15 10:20',
      postedAt: '2024-01-15 10:45',
      engagement: { likes: 45, replies: 8, shares: 5 }
    },
    {
      id: '3',
      text: 'Outfit này xinh quá! Mặc lên tự tin hẳn ra 👗',
      platform: 'facebook',
      category: 'fashion',
      tone: 'friendly',
      status: 'scheduled',
      createdAt: '2024-01-15 16:45',
      targetUrl: 'https://facebook.com/post/789012'
    },
    {
      id: '4',
      text: 'Món này ngon tuyệt! Vị đậm đà, ăn một lần nhớ mãi 🍜',
      platform: 'zalo',
      category: 'food',
      tone: 'friendly',
      status: 'failed',
      createdAt: '2024-01-15 12:15'
    },
    {
      id: '5',
      text: 'Sản phẩm chất lượng, tính năng đầy đủ như mô tả',
      platform: 'lazada',
      category: 'tech',
      tone: 'professional',
      status: 'generated',
      createdAt: '2024-01-15 18:20'
    }
  ])

  const platforms = [
    { id: 'all', name: 'Tất cả nền tảng', icon: '📱' },
    { id: 'shopee', name: 'Shopee', icon: '🛒' },
    { id: 'lazada', name: 'Lazada', icon: '🏪' },
    { id: 'tiktok', name: 'TikTok', icon: '🎵' },
    { id: 'facebook', name: 'Facebook', icon: '👥' },
    { id: 'zalo', name: 'Zalo', icon: '💬' },
    { id: 'instagram', name: 'Instagram', icon: '📸' }
  ]

  const statuses = [
    { id: 'all', name: 'Tất cả trạng thái', color: 'gray' },
    { id: 'generated', name: 'Đã tạo', color: 'blue' },
    { id: 'scheduled', name: 'Đã lên lịch', color: 'yellow' },
    { id: 'posted', name: 'Đã đăng', color: 'green' },
    { id: 'failed', name: 'Thất bại', color: 'red' }
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'posted': return <CheckCircleIcon className="h-4 w-4" />
      case 'scheduled': return <ClockIcon className="h-4 w-4" />
      case 'failed': return <XCircleIcon className="h-4 w-4" />
      default: return <ClipboardDocumentIcon className="h-4 w-4" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'posted': return 'text-green-600 bg-green-50'
      case 'scheduled': return 'text-yellow-600 bg-yellow-50'
      case 'failed': return 'text-red-600 bg-red-50'
      case 'generated': return 'text-blue-600 bg-blue-50'
      default: return 'text-gray-600 bg-gray-50'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'posted': return 'Đã đăng'
      case 'scheduled': return 'Đã lên lịch'
      case 'failed': return 'Thất bại'
      case 'generated': return 'Đã tạo'
      default: return 'Không xác định'
    }
  }

  const filteredComments = commentHistory.filter(comment => {
    const matchesSearch = comment.text.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesPlatform = selectedPlatform === 'all' || comment.platform === selectedPlatform
    const matchesStatus = selectedStatus === 'all' || comment.status === selectedStatus
    
    return matchesSearch && matchesPlatform && matchesStatus
  })

  const stats = {
    total: commentHistory.length,
    posted: commentHistory.filter(c => c.status === 'posted').length,
    scheduled: commentHistory.filter(c => c.status === 'scheduled').length,
    failed: commentHistory.filter(c => c.status === 'failed').length
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 text-vietnamese">
            📝 Lịch sử Comments
          </h1>
          <p className="text-gray-600 text-vietnamese">
            Theo dõi và quản lý tất cả comments đã tạo và đăng
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center">
            <div className="p-2 bg-blue-50 rounded-lg">
              <ClipboardDocumentIcon className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Tổng comments</p>
              <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center">
            <div className="p-2 bg-green-50 rounded-lg">
              <CheckCircleIcon className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Đã đăng</p>
              <p className="text-2xl font-bold text-gray-900">{stats.posted}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center">
            <div className="p-2 bg-yellow-50 rounded-lg">
              <ClockIcon className="h-6 w-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Đã lên lịch</p>
              <p className="text-2xl font-bold text-gray-900">{stats.scheduled}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center">
            <div className="p-2 bg-red-50 rounded-lg">
              <XCircleIcon className="h-6 w-6 text-red-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Thất bại</p>
              <p className="text-2xl font-bold text-gray-900">{stats.failed}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Tìm kiếm comments..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
          </div>

          {/* Platform Filter */}
          <div className="min-w-[200px]">
            <select
              value={selectedPlatform}
              onChange={(e) => setSelectedPlatform(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            >
              {platforms.map(platform => (
                <option key={platform.id} value={platform.id}>
                  {platform.icon} {platform.name}
                </option>
              ))}
            </select>
          </div>

          {/* Status Filter */}
          <div className="min-w-[180px]">
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            >
              {statuses.map(status => (
                <option key={status.id} value={status.id}>
                  {status.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Comments List */}
      <div className="bg-white rounded-xl border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">
            Comments ({filteredComments.length})
          </h3>
        </div>

        {filteredComments.length === 0 ? (
          <div className="p-12 text-center">
            <ClipboardDocumentIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">Không tìm thấy comments nào</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-200">
            {filteredComments.map((comment) => {
              const platform = platforms.find(p => p.id === comment.platform)
              return (
                <div key={comment.id} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 pr-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-xl">{platform?.icon}</span>
                        <span className="text-sm font-medium text-gray-900">
                          {platform?.name}
                        </span>
                        <span className={`inline-flex items-center space-x-1 text-xs px-2 py-1 rounded-full ${getStatusColor(comment.status)}`}>
                          {getStatusIcon(comment.status)}
                          <span>{getStatusText(comment.status)}</span>
                        </span>
                        <span className="text-xs text-gray-500">
                          #{comment.id}
                        </span>
                      </div>

                      <p className="text-gray-800 mb-3 text-vietnamese">
                        {comment.text}
                      </p>

                      <div className="flex items-center space-x-6 text-sm text-gray-500">
                        <span>Tạo: {comment.createdAt}</span>
                        {comment.postedAt && (
                          <span>Đăng: {comment.postedAt}</span>
                        )}
                        <span className="capitalize">{comment.category}</span>
                        <span className="capitalize">{comment.tone}</span>
                        
                        {comment.engagement && (
                          <div className="flex items-center space-x-3">
                            <span>❤️ {comment.engagement.likes}</span>
                            <span>💬 {comment.engagement.replies}</span>
                            <span>🔄 {comment.engagement.shares}</span>
                          </div>
                        )}
                      </div>

                      {comment.targetUrl && (
                        <a
                          href={comment.targetUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-primary-600 hover:text-primary-700 mt-2 inline-block"
                        >
                          🔗 Xem bài viết gốc
                        </a>
                      )}
                    </div>

                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => setSelectedComment(comment)}
                        className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
                        title="Xem chi tiết"
                      >
                        <EyeIcon className="h-4 w-4" />
                      </button>

                      <button
                        onClick={() => navigator.clipboard.writeText(comment.text)}
                        className="p-2 text-gray-400 hover:text-green-600 transition-colors"
                        title="Copy comment"
                      >
                        <ClipboardDocumentIcon className="h-4 w-4" />
                      </button>

                      <button
                        className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                        title="Xóa comment"
                      >
                        <TrashIcon className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>

      {/* Comment Detail Modal */}
      {selectedComment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Chi tiết Comment #{selectedComment.id}
              </h3>
              <button
                onClick={() => setSelectedComment(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700">Nội dung:</label>
                <p className="mt-1 p-3 bg-gray-50 rounded-lg text-gray-800">
                  {selectedComment.text}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">Nền tảng:</label>
                  <p className="mt-1 text-gray-900 capitalize">{selectedComment.platform}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Trạng thái:</label>
                  <p className="mt-1 text-gray-900">{getStatusText(selectedComment.status)}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Ngành hàng:</label>
                  <p className="mt-1 text-gray-900 capitalize">{selectedComment.category}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Giọng điệu:</label>
                  <p className="mt-1 text-gray-900 capitalize">{selectedComment.tone}</p>
                </div>
              </div>

              {selectedComment.engagement && (
                <div>
                  <label className="text-sm font-medium text-gray-700">Tương tác:</label>
                  <div className="mt-1 flex items-center space-x-4">
                    <span className="flex items-center space-x-1">
                      <span>❤️</span>
                      <span>{selectedComment.engagement.likes} lượt thích</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <span>💬</span>
                      <span>{selectedComment.engagement.replies} bình luận</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <span>🔄</span>
                      <span>{selectedComment.engagement.shares} chia sẻ</span>
                    </span>
                  </div>
                </div>
              )}

              <div className="flex items-center space-x-4 pt-4">
                <button
                  onClick={() => navigator.clipboard.writeText(selectedComment.text)}
                  className="btn-outline px-4 py-2 flex items-center space-x-2"
                >
                  <ClipboardDocumentIcon className="h-4 w-4" />
                  <span>Copy</span>
                </button>

                {selectedComment.targetUrl && (
                  <a
                    href={selectedComment.targetUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary px-4 py-2 flex items-center space-x-2"
                  >
                    <EyeIcon className="h-4 w-4" />
                    <span>Xem bài viết</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default HistoryPage 