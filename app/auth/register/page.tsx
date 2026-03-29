'use client'

import { useState } from 'react'
import Link from 'next/link'
import { EyeIcon, EyeSlashIcon, CheckIcon } from '@heroicons/react/24/outline'

const RegisterPage = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  
  const [formData, setFormData] = useState({
    // Step 1: Personal Info
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    
    // Step 2: Business Info
    businessName: '',
    businessType: '',
    platforms: [],
    
    // Step 3: Plan Selection
    selectedPlan: 'basic'
  })

  const steps = [
    { number: 1, title: 'Thông tin cá nhân', description: 'Tạo tài khoản' },
    { number: 2, title: 'Thông tin business', description: 'Cài đặt ban đầu' },
    { number: 3, title: 'Chọn gói dịch vụ', description: 'Hoàn tất đăng ký' }
  ]

  const businessTypes = [
    { id: 'individual', name: 'Cá nhân/Freelancer', emoji: '👤' },
    { id: 'small-business', name: 'Shop nhỏ', emoji: '🏪' },
    { id: 'medium-business', name: 'Doanh nghiệp vừa', emoji: '🏢' },
    { id: 'agency', name: 'Agency/Marketing', emoji: '📈' }
  ]

  const platforms = [
    { id: 'shopee', name: 'Shopee', emoji: '🛒' },
    { id: 'lazada', name: 'Lazada', emoji: '🏪' },
    { id: 'tiktok', name: 'TikTok', emoji: '🎵' },
    { id: 'facebook', name: 'Facebook', emoji: '👥' },
    { id: 'zalo', name: 'Zalo', emoji: '💬' },
    { id: 'instagram', name: 'Instagram', emoji: '📸' }
  ]

  const plans = [
    {
      id: 'free',
      name: 'Miễn phí',
      price: 0,
      features: ['50 comments/ngày', '2 nền tảng', 'Templates cơ bản'],
      recommended: false
    },
    {
      id: 'basic',
      name: 'Cơ bản',
      price: 199000,
      features: ['500 comments/ngày', '5 nền tảng', 'Templates chuyên ngành', 'Phân tích chi tiết'],
      recommended: true
    },
    {
      id: 'pro',
      name: 'Chuyên nghiệp',
      price: 399000,
      features: ['2000 comments/ngày', 'Không giới hạn nền tảng', 'AI learning', 'API access'],
      recommended: false
    }
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      if (name === 'platforms') {
        setFormData(prev => ({
          ...prev,
          platforms: checked 
            ? [...prev.platforms, value]
            : prev.platforms.filter(p => p !== value)
        }))
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate registration
    setTimeout(() => {
      setIsLoading(false)
      // Redirect to dashboard
      window.location.href = '/dashboard'
    }, 2000)
  }

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.fullName && formData.email && formData.password && 
               formData.password === formData.confirmPassword
      case 2:
        return formData.businessName && formData.businessType && formData.platforms.length > 0
      case 3:
        return formData.selectedPlan
      default:
        return false
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">MS</span>
            </div>
            <span className="font-heading font-bold text-2xl text-gray-900">
              MarkSeed
            </span>
          </Link>
          
          <h2 className="text-3xl font-bold text-gray-900 text-vietnamese">
            Tạo tài khoản miễn phí
          </h2>
          <p className="mt-2 text-sm text-gray-600 text-vietnamese">
            Đã có tài khoản?{' '}
            <Link
              href="/auth/login"
              className="font-medium text-primary-600 hover:text-primary-500"
            >
              Đăng nhập ngay
            </Link>
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                    currentStep >= step.number
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {currentStep > step.number ? (
                      <CheckIcon className="h-6 w-6" />
                    ) : (
                      step.number
                    )}
                  </div>
                  <div className="mt-2 text-center">
                    <p className="text-xs font-medium text-gray-900 text-vietnamese">
                      {step.title}
                    </p>
                    <p className="text-xs text-gray-500 text-vietnamese">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                {index < steps.length - 1 && (
                  <div className={`w-16 h-0.5 mx-4 ${
                    currentStep > step.number ? 'bg-primary-600' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Personal Info */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 text-vietnamese">
                    Thông tin cá nhân
                  </h3>
                  <p className="text-gray-600 text-vietnamese">
                    Chúng tôi cần một số thông tin cơ bản để tạo tài khoản
                  </p>
                </div>

                <div>
                  <label className="form-label">Họ và tên</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Nguyễn Văn A"
                    required
                  />
                </div>

                <div>
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="nguyenvana@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="form-label">Mật khẩu</label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="form-input pr-10"
                      placeholder="••••••••"
                      required
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
                  <label className="form-label">Xác nhận mật khẩu</label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="form-input pr-10"
                      placeholder="••••••••"
                      required
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? (
                        <EyeSlashIcon className="h-5 w-5 text-gray-400" />
                      ) : (
                        <EyeIcon className="h-5 w-5 text-gray-400" />
                      )}
                    </button>
                  </div>
                  {formData.password && formData.confirmPassword && 
                   formData.password !== formData.confirmPassword && (
                    <p className="mt-1 text-sm text-red-600 text-vietnamese">
                      Mật khẩu xác nhận không khớp
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Step 2: Business Info */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 text-vietnamese">
                    Thông tin business
                  </h3>
                  <p className="text-gray-600 text-vietnamese">
                    Giúp chúng tôi tùy chỉnh trải nghiệm phù hợp với bạn
                  </p>
                </div>

                <div>
                  <label className="form-label">Tên shop/doanh nghiệp</label>
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Beauty Shop Lan Anh"
                    required
                  />
                </div>

                <div>
                  <label className="form-label">Loại hình kinh doanh</label>
                  <div className="grid grid-cols-2 gap-4 mt-2">
                    {businessTypes.map((type) => (
                      <label key={type.id} className="relative">
                        <input
                          type="radio"
                          name="businessType"
                          value={type.id}
                          checked={formData.businessType === type.id}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <div className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                          formData.businessType === type.id
                            ? 'border-primary-500 bg-primary-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}>
                          <div className="text-center">
                            <div className="text-2xl mb-2">{type.emoji}</div>
                            <div className="text-sm font-medium text-gray-900 text-vietnamese">
                              {type.name}
                            </div>
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="form-label">Nền tảng bạn đang sử dụng (chọn nhiều)</label>
                  <div className="grid grid-cols-3 gap-3 mt-2">
                    {platforms.map((platform) => (
                      <label key={platform.id} className="relative">
                        <input
                          type="checkbox"
                          name="platforms"
                          value={platform.id}
                          checked={formData.platforms.includes(platform.id)}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <div className={`p-3 border-2 rounded-lg cursor-pointer transition-all ${
                          formData.platforms.includes(platform.id)
                            ? 'border-primary-500 bg-primary-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}>
                          <div className="text-center">
                            <div className="text-xl mb-1">{platform.emoji}</div>
                            <div className="text-xs font-medium text-gray-900">
                              {platform.name}
                            </div>
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Plan Selection */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 text-vietnamese">
                    Chọn gói dịch vụ
                  </h3>
                  <p className="text-gray-600 text-vietnamese">
                    Bạn có thể thay đổi gói bất cứ lúc nào
                  </p>
                </div>

                <div className="space-y-4">
                  {plans.map((plan) => (
                    <label key={plan.id} className="relative">
                      <input
                        type="radio"
                        name="selectedPlan"
                        value={plan.id}
                        checked={formData.selectedPlan === plan.id}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <div className={`p-6 border-2 rounded-lg cursor-pointer transition-all ${
                        formData.selectedPlan === plan.id
                          ? 'border-primary-500 bg-primary-50'
                          : 'border-gray-200 hover:border-gray-300'
                      } ${plan.recommended ? 'ring-2 ring-secondary-200' : ''}`}>
                        {plan.recommended && (
                          <div className="absolute -top-3 left-4">
                            <span className="bg-secondary-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                              Phổ biến nhất
                            </span>
                          </div>
                        )}
                        
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 text-vietnamese">
                              {plan.name}
                            </h4>
                            <div className="text-2xl font-bold text-primary-600">
                              {plan.price === 0 ? 'Miễn phí' : `${plan.price.toLocaleString()}₫/tháng`}
                            </div>
                          </div>
                        </div>
                        
                        <ul className="space-y-2">
                          {plan.features.map((feature, index) => (
                            <li key={index} className="flex items-center text-sm text-gray-700 text-vietnamese">
                              <CheckIcon className="h-4 w-4 text-green-500 mr-2" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="mt-8 flex justify-between">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="btn-outline px-6 py-2"
                >
                  Quay lại
                </button>
              )}
              
              <div className="ml-auto">
                {currentStep < 3 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={!isStepValid()}
                    className="btn-primary px-6 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Tiếp tục
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isLoading || !isStepValid()}
                    className="btn-primary px-6 py-2 flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                        <span>Đang tạo tài khoản...</span>
                      </>
                    ) : (
                      <span>Hoàn tất đăng ký</span>
                    )}
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="text-center text-xs text-gray-600 mt-6 text-vietnamese">
          Bằng việc đăng ký, bạn đồng ý với{' '}
          <Link href="/terms" className="text-primary-600 hover:text-primary-500">
            Điều khoản sử dụng
          </Link>
          {' '}và{' '}
          <Link href="/privacy" className="text-primary-600 hover:text-primary-500">
            Chính sách bảo mật
          </Link>
          {' '}của MarkSeed.
        </div>
      </div>
    </div>
  )
}

export default RegisterPage 