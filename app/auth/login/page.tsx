'use client'

import { useState } from 'react'
import Link from 'next/link'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate login
    setTimeout(() => {
      setIsLoading(false)
      // Redirect to dashboard
      window.location.href = '/dashboard'
    }, 2000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <Link href="/" className="inline-flex items-center space-x-2 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">MS</span>
            </div>
            <span className="font-heading font-bold text-2xl text-gray-900">
              MarkSeed
            </span>
          </Link>
          
          <h2 className="text-3xl font-bold text-gray-900 text-vietnamese">
            Đăng nhập tài khoản
          </h2>
          <p className="mt-2 text-sm text-gray-600 text-vietnamese">
            Hoặc{' '}
            <Link
              href="/auth/register"
              className="font-medium text-primary-600 hover:text-primary-500"
            >
              tạo tài khoản mới miễn phí
            </Link>
          </p>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                placeholder="nguyenvana@email.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="form-label">
                Mật khẩu
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  value={formData.password}
                  onChange={handleChange}
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
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="rememberMe"
                name="rememberMe"
                type="checkbox"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-900 text-vietnamese">
                Ghi nhớ đăng nhập
              </label>
            </div>

            <div className="text-sm">
              <Link
                href="/auth/forgot-password"
                className="font-medium text-primary-600 hover:text-primary-500 text-vietnamese"
              >
                Quên mật khẩu?
              </Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="btn-primary w-full py-3 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                  <span>Đang đăng nhập...</span>
                </>
              ) : (
                <span>Đăng nhập</span>
              )}
            </button>
          </div>

          {/* Social Login */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500 text-vietnamese">
                  Hoặc đăng nhập với
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button
                type="button"
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="text-xl">📘</span>
                <span className="ml-2">Facebook</span>
              </button>

              <button
                type="button"
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="text-xl">🌐</span>
                <span className="ml-2">Google</span>
              </button>
            </div>
          </div>
        </form>

        {/* Benefits */}
        <div className="mt-8 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg p-4">
          <h3 className="text-sm font-semibold text-gray-900 mb-3 text-vietnamese">
            🎯 Tại sao chọn MarkSeed?
          </h3>
          <ul className="text-xs text-gray-700 space-y-2 text-vietnamese">
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              AI tối ưu cho thị trường Việt Nam
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Tích hợp tất cả nền tảng phổ biến
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Giá cả phải chăng, hiệu quả cao
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Hỗ trợ 24/7 bằng tiếng Việt
            </li>
          </ul>
        </div>

        {/* Footer */}
        <div className="text-center text-xs text-gray-600 text-vietnamese">
          Bằng việc đăng nhập, bạn đồng ý với{' '}
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

export default LoginPage 