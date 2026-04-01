export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <p className="text-sm font-medium text-primary-600 mb-2">404</p>
        <h1 className="text-2xl font-bold text-gray-900 mb-2 text-vietnamese">
          Không tìm thấy trang
        </h1>
        <p className="text-sm text-gray-600 mb-4 text-vietnamese">
          Đường dẫn bạn truy cập không tồn tại hoặc đã được di chuyển.
        </p>
        <a
          href="/"
          className="inline-flex items-center px-4 py-2 rounded-lg bg-primary-600 text-white text-sm font-medium hover:bg-primary-700"
        >
          Quay lại trang chủ
        </a>
      </div>
    </div>
  )
}
