"use client"

import { useEffect, useState } from "react"
import { SparklesIcon, ClockIcon, ArrowTrendingUpIcon } from "@heroicons/react/24/outline"

const MOCK_INSIGHTS = [
  {
    id: 1,
    title: "Khung giờ vàng hôm nay",
    description: "18:00 – 22:00 là khung giờ có tỉ lệ tương tác cao nhất cho ngành F&B.",
    metric: "+34% engagement",
    tag: "Timing"
  },
  {
    id: 2,
    title: "Template đang hot",
    description: "Template 'Mỹ phẩm - Khen ngợi hiệu quả' đang outperform +27% so với trung bình.",
    metric: "89 lượt dùng",
    tag: "Template"
  },
  {
    id: 3,
    title: "Kênh nên đẩy mạnh",
    description: "TikTok hiện mang về 52% tổng lượng comment tuần này, nên ưu tiên ngân sách.",
    metric: "52% từ TikTok",
    tag: "Channel"
  },
  {
    id: 4,
    title: "Ý tưởng campaign nhanh",
    description: "Tạo mini game comment 'kể chuyện trải nghiệm' cho sản phẩm best-seller.",
    metric: "5 phút setup",
    tag: "Idea"
  }
]

export default function LiveInsightsPanel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % MOCK_INSIGHTS.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  const current = MOCK_INSIGHTS[index]

  return (
    <div className="bg-white rounded-xl shadow-sm border border-purple-100 p-6 flex flex-col md:flex-row gap-6">
      <div className="flex-1">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-medium mb-3">
          <SparklesIcon className="h-4 w-4 mr-2" />
          Gợi ý AI thời gian thực
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-1 text-vietnamese">
          {current.title}
        </h3>
        <p className="text-sm text-gray-600 mb-3 text-vietnamese">
          {current.description}
        </p>
        <div className="flex items-center space-x-3 text-sm">
          <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-gray-100 text-gray-700">
            <ClockIcon className="h-4 w-4 mr-1" />
            Cập nhật mỗi 8 giây
          </span>
          <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700">
            <ArrowTrendingUpIcon className="h-4 w-4 mr-1" />
            {current.metric}
          </span>
          <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs uppercase tracking-wide">
            {current.tag}
          </span>
        </div>
      </div>

      <div className="w-full md:w-64 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl text-white p-4 flex flex-col justify-between">
        <div>
          <p className="text-xs text-purple-100 mb-1 text-vietnamese">Gợi ý tiếp theo</p>
          <p className="text-sm font-medium text-vietnamese">
            Con sen AI sẽ luân phiên đề xuất insight về **khung giờ**, **kênh** và **template** cho anh.
          </p>
        </div>
        <div className="mt-4 text-xs text-purple-100 space-y-1">
          <p>• Không cần config – chỉ là playground ý tưởng.</p>
          <p>• Sau này có thể nối vào dữ liệu thật (GA, TikTok, Shopee...).</p>
        </div>
      </div>
    </div>
  )
}
