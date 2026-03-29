'use client'

import { useState } from 'react'
import { 
  PlusIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  TrashIcon,
  CogIcon,
  LinkIcon
} from '@heroicons/react/24/outline'

interface ConnectedAccount {
  id: string
  platform: string
  username: string
  status: 'connected' | 'disconnected' | 'expired'
  lastSync: string
  postsCount?: number
  followersCount?: string
}

const AccountsPage = () => {
  const [connectedAccounts, setConnectedAccounts] = useState<ConnectedAccount[]>([
    {
      id: '1',
      platform: 'shopee',
      username: 'my_beauty_store',
      status: 'connected',
      lastSync: '2 giờ trước',
      postsCount: 245,
      followersCount: '12.5K'
    },
    {
      id: '2',
      platform: 'facebook',
      username: 'Beauty Store VN',
      status: 'connected',
      lastSync: '1 ngày trước',
      postsCount: 189,
      followersCount: '8.2K'
    },
    {
      id: '3',
      platform: 'tiktok',
      username: '@beautystore_vn',
      status: 'expired',
      lastSync: '1 tuần trước',
      postsCount: 67,
      followersCount: '15.8K'
    }
  ])

  const [showAddAccount, setShowAddAccount] = useState(false)
  const [selectedPlatform, setSelectedPlatform] = useState('')

  const platforms = [
    { 
      id: 'shopee', 
      name: 'Shopee', 
      icon: '🛒', 
      color: 'orange',
      description: 'Kết nối với shop Shopee để tự động comment trên sản phẩm'
    },
    { 
      id: 'lazada', 
      name: 'Lazada', 
      icon: '🏪', 
      color: 'blue',
      description: 'Tự động tương tác với khách hàng trên Lazada'
    },
    { 
      id: 'tiktok', 
      name: 'TikTok', 
      icon: '🎵', 
      color: 'pink',
      description: 'Đăng comments trên TikTok, tăng engagement'
    },
    { 
      id: 'facebook', 
      name: 'Facebook', 
      icon: '👥', 
      color: 'blue',
      description: 'Quản lý Page Facebook, tự động reply comments'
    },
    { 
      id: 'zalo', 
      name: 'Zalo', 
      icon: '💬', 
      color: 'blue',
      description: 'Kết nối Zalo OA để chăm sóc khách hàng'
    },
    { 
      id: 'instagram', 
      name: 'Instagram', 
      icon: '📸', 
      color: 'purple',
      description: 'Tự động comment và tương tác trên Instagram'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'connected': return 'text-green-600 bg-green-50'
      case 'expired': return 'text-red-600 bg-red-50'
      case 'disconnected': return 'text-gray-600 bg-gray-50'
      default: return 'text-gray-600 bg-gray-50'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'connected': return 'Đã kết nối'
      case 'expired': return 'Hết hạn'
      case 'disconnected': return 'Ngắt kết nối'
      default: return 'Không xác định'
    }
  }

  const handleConnectAccount = (platformId: string) => {
    // In real app, this would redirect to OAuth flow
    console.log('Connecting to', platformId)
    setShowAddAccount(false)
    
    // Mock successful connection
    const newAccount: ConnectedAccount = {
      id: Date.now().toString(),
      platform: platformId,
      username: `new_account_${platformId}`,
      status: 'connected',
      lastSync: 'Vừa kết nối',
      postsCount: 0
    }
    
    setConnectedAccounts([...connectedAccounts, newAccount])
  }

  const handleDisconnectAccount = (accountId: string) => {
    setConnectedAccounts(connectedAccounts.filter(acc => acc.id !== accountId))
  }

  const handleReconnectAccount = (accountId: string) => {
    setConnectedAccounts(connectedAccounts.map(acc => 
      acc.id === accountId 
        ? { ...acc, status: 'connected', lastSync: 'Vừa kết nối lại' }
        : acc
    ))
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 text-vietnamese">
            🔗 Quản lý tài khoản
          </h1>
          <p className="text-gray-600 text-vietnamese">
            Kết nối các tài khoản mạng xã hội để tự động đăng comments
          </p>
        </div>
        
        <button
          onClick={() => setShowAddAccount(true)}
          className="btn-primary px-4 py-2 flex items-center space-x-2"
        >
          <PlusIcon className="h-5 w-5" />
          <span>Thêm tài khoản</span>
        </button>
      </div>

      {/* Connected Accounts */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Tài khoản đã kết nối ({connectedAccounts.length})
        </h3>
        
        {connectedAccounts.length === 0 ? (
          <div className="text-center py-12">
            <LinkIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 mb-4">Chưa có tài khoản nào được kết nối</p>
            <button
              onClick={() => setShowAddAccount(true)}
              className="btn-primary px-4 py-2"
            >
              Kết nối tài khoản đầu tiên
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {connectedAccounts.map((account) => {
              const platform = platforms.find(p => p.id === account.platform)
              return (
                <div key={account.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="text-3xl">{platform?.icon}</div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h4 className="font-medium text-gray-900">
                            {platform?.name}
                          </h4>
                          <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(account.status)}`}>
                            {getStatusText(account.status)}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">@{account.username}</p>
                        <div className="flex items-center space-x-4 text-xs text-gray-500 mt-1">
                          <span>Đồng bộ: {account.lastSync}</span>
                          {account.postsCount !== undefined && (
                            <span>Posts: {account.postsCount}</span>
                          )}
                          {account.followersCount && (
                            <span>Followers: {account.followersCount}</span>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      {account.status === 'expired' && (
                        <button
                          onClick={() => handleReconnectAccount(account.id)}
                          className="btn-outline px-3 py-1 text-sm"
                        >
                          Kết nối lại
                        </button>
                      )}
                      
                      <button
                        className="p-2 text-gray-500 hover:text-blue-600"
                        title="Cài đặt"
                      >
                        <CogIcon className="h-4 w-4" />
                      </button>
                      
                      <button
                        onClick={() => handleDisconnectAccount(account.id)}
                        className="p-2 text-gray-500 hover:text-red-600"
                        title="Ngắt kết nối"
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

      {/* Add Account Modal */}
      {showAddAccount && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900">
                🔗 Thêm tài khoản mới
              </h3>
              <button
                onClick={() => setShowAddAccount(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            
            <p className="text-gray-600 mb-6 text-vietnamese">
              Chọn nền tảng bạn muốn kết nối để bắt đầu tự động đăng comments
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {platforms.map((platform) => {
                const isConnected = connectedAccounts.some(acc => acc.platform === platform.id)
                return (
                  <button
                    key={platform.id}
                    onClick={() => !isConnected && handleConnectAccount(platform.id)}
                    disabled={isConnected}
                    className={`p-4 border-2 rounded-lg text-left transition-all ${
                      isConnected
                        ? 'border-gray-200 bg-gray-50 cursor-not-allowed'
                        : 'border-gray-200 hover:border-primary-500 hover:bg-primary-50'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="text-3xl">{platform.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <h4 className="font-medium text-gray-900">
                            {platform.name}
                          </h4>
                          {isConnected && (
                            <CheckCircleIcon className="h-4 w-4 text-green-600" />
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mt-1 text-vietnamese">
                          {platform.description}
                        </p>
                        {isConnected && (
                          <p className="text-xs text-green-600 mt-2">
                            ✓ Đã kết nối
                          </p>
                        )}
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>
            
            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex items-start space-x-2">
                <ExclamationTriangleIcon className="h-5 w-5 text-yellow-600 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium text-yellow-800 text-vietnamese">
                    Lưu ý quan trọng
                  </h4>
                  <ul className="text-sm text-yellow-700 mt-1 space-y-1 text-vietnamese">
                    <li>• Chỉ kết nối tài khoản mà bạn sở hữu hoàn toàn</li>
                    <li>• Tuân thủ chính sách của từng nền tảng</li>
                    <li>• Không spam hoặc đăng nội dung không phù hợp</li>
                    <li>• MarkSeed không lưu trữ thông tin đăng nhập</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Platform Features Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200">
          <div className="flex items-center space-x-3 mb-4">
            <span className="text-2xl">🛒</span>
            <h3 className="font-semibold text-orange-900">Shopee & Lazada</h3>
          </div>
          <ul className="text-sm text-orange-800 space-y-2">
            <li>• Tự động reply comments khách hàng</li>
            <li>• Seeding comments trên sản phẩm cạnh tranh</li>
            <li>• Tăng review và rating</li>
            <li>• Theo dõi feedback khách hàng</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl border border-pink-200">
          <div className="flex items-center space-x-3 mb-4">
            <span className="text-2xl">📱</span>
            <h3 className="font-semibold text-pink-900">TikTok & Instagram</h3>
          </div>
          <ul className="text-sm text-pink-800 space-y-2">
            <li>• Tăng engagement trên video/post</li>
            <li>• Tự động comment trending hashtags</li>
            <li>• Xây dựng cộng đồng followers</li>
            <li>• Theo dõi xu hướng viral</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
          <div className="flex items-center space-x-3 mb-4">
            <span className="text-2xl">💬</span>
            <h3 className="font-semibold text-blue-900">Facebook & Zalo</h3>
          </div>
          <ul className="text-sm text-blue-800 space-y-2">
            <li>• Quản lý fanpage chuyên nghiệp</li>
            <li>• Tự động chăm sóc khách hàng</li>
            <li>• Tăng tương tác trên groups</li>
            <li>• Xây dựng thương hiệu online</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AccountsPage 