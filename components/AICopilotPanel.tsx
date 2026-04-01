"use client"

import { useState } from "react"
import { SparklesIcon } from "@heroicons/react/24/outline"

const goals = [
  { id: "sales", label: "Tăng đơn hàng" },
  { id: "engagement", label: "Tăng tương tác" },
  { id: "awareness", label: "Tăng nhận diện thương hiệu" },
]

const industries = [
  { id: "beauty", label: "Mỹ phẩm" },
  { id: "fashion", label: "Thời trang" },
  { id: "fnb", label: "F&B" },
  { id: "tech", label: "Công nghệ" },
  { id: "other", label: "Khác" },
]

const scales = [
  { id: "small", label: "Quy mô nhỏ" },
  { id: "medium", label: "Quy mô vừa" },
  { id: "large", label: "Quy mô lớn" },
]

type GoalId = (typeof goals)[number]["id"]
type IndustryId = (typeof industries)[number]["id"]
type ScaleId = (typeof scales)[number]["id"]

type Recommendation = {
  summary: string
  dailyComments: number
  platforms: {
    name: string
    commentsPerDay: number
  }[]
  bestTimes: string[]
  tone: string
  notes: string
}

const generateMockRecommendation = (
  goal: GoalId,
  industry: IndustryId,
  scale: ScaleId,
): Recommendation => {
  const base = scale === "small" ? 60 : scale === "medium" ? 120 : 220

  const goalText =
    goal === "sales"
      ? "tập trung tối ưu chuyển đổi và social proof"
      : goal === "engagement"
      ? "tăng tối đa tương tác tự nhiên (like, reply, share)"
      : "phủ sóng thương hiệu trên nhiều touchpoint"

  const industryTone =
    industry === "beauty"
      ? "Thân thiện, gần gũi, nhấn mạnh cảm nhận thật của khách hàng"
      : industry === "fashion"
      ? "Năng động, trendy, gợi ý mix & match và bắt trend"
      : industry === "fnb"
      ? "Kích thích vị giác, mô tả cảm xúc khi thưởng thức"
      : industry === "tech"
      ? "Rõ ràng, tin cậy, nhấn mạnh tính năng & lợi ích thực tế"
      : "Tự nhiên, như khách thật chia sẻ trải nghiệm"

  const platforms = [
    { name: "Shopee", weight: 0.35 },
    { name: "TikTok", weight: 0.35 },
    { name: "Facebook", weight: 0.2 },
    { name: "Instagram", weight: 0.1 },
  ].map((p) => ({
    name: p.name,
    commentsPerDay: Math.round(base * p.weight),
  }))

  return {
    summary: `Gợi ý ~${base} comments/ngày, tập trung ${goalText}.`,
    dailyComments: base,
    platforms,
    bestTimes: ["8:00 - 10:00", "12:00 - 13:00", "19:00 - 22:00"],
    tone: industryTone,
    notes:
      "Đây là gợi ý mock từ AI Copilot. Khi kết nối dữ liệu thật, hệ thống sẽ tinh chỉnh theo performance từng nền tảng và hành vi khách hàng của riêng bạn.",
  }
}

const AICopilotPanel = () => {
  const [goal, setGoal] = useState<GoalId>("sales")
  const [industry, setIndustry] = useState<IndustryId>("beauty")
  const [scale, setScale] = useState<ScaleId>("medium")
  const [loading, setLoading] = useState(false)
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null)

  const handleGenerate = () => {
    setLoading(true)
    // Mock "AI đang suy nghĩ"
    setTimeout(() => {
      const rec = generateMockRecommendation(goal, industry, scale)
      setRecommendation(rec)
      setLoading(false)
    }, 900)
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-medium mb-2">
            <SparklesIcon className="h-4 w-4 mr-1" />
            AI Campaign Copilot
          </div>
          <h2 className="text-lg font-semibold text-gray-900 text-vietnamese">
            Để AI gợi ý plan seeding tối ưu cho bạn
          </h2>
          <p className="text-sm text-gray-600 text-vietnamese mt-1">
            Chọn mục tiêu và ngành hàng, AI sẽ đề xuất số lượng comment, nền tảng và khung giờ phù hợp (mock, chạy trên frontend).
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        <div>
          <label className="form-label text-xs">Mục tiêu chiến dịch</label>
          <select
            className="form-select text-sm"
            value={goal}
            onChange={(e) => setGoal(e.target.value as GoalId)}
          >
            {goals.map((g) => (
              <option key={g.id} value={g.id}>
                {g.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="form-label text-xs">Ngành hàng</label>
          <select
            className="form-select text-sm"
            value={industry}
            onChange={(e) => setIndustry(e.target.value as IndustryId)}
          >
            {industries.map((i) => (
              <option key={i.id} value={i.id}>
                {i.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="form-label text-xs">Quy mô chiến dịch</label>
          <select
            className="form-select text-sm"
            value={scale}
            onChange={(e) => setScale(e.target.value as ScaleId)}
          >
            {scales.map((s) => (
              <option key={s.id} value={s.id}>
                {s.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-end">
          <button
            type="button"
            onClick={handleGenerate}
            disabled={loading}
            className="btn-primary w-full justify-center flex items-center text-sm disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <span className="mr-2 inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                AI đang phân tích...
              </>
            ) : (
              <>
                <SparklesIcon className="h-4 w-4 mr-1" />
                Để AI đề xuất
              </>
            )}
          </button>
        </div>
      </div>

      {recommendation && (
        <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 bg-gray-50 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-gray-900 mb-2 text-vietnamese">
              Tóm tắt kế hoạch
            </h3>
            <p className="text-sm text-gray-700 mb-3 text-vietnamese">
              {recommendation.summary}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
              <div className="bg-white rounded-lg border border-gray-200 p-3">
                <p className="text-xs text-gray-500 text-vietnamese">Tổng comments/ngày</p>
                <p className="text-xl font-bold text-primary-600">
                  {recommendation.dailyComments}
                </p>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-3">
                <p className="text-xs text-gray-500 text-vietnamese">Khung giờ gợi ý</p>
                <p className="text-sm text-gray-800 text-vietnamese">
                  {recommendation.bestTimes.join(" • ")}
                </p>
              </div>
            </div>

            <div>
              <p className="text-xs font-medium text-gray-600 mb-2 text-vietnamese">
                Phân bổ theo nền tảng (mock)
              </p>
              <div className="space-y-2">
                {recommendation.platforms.map((p) => (
                  <div
                    key={p.name}
                    className="flex items-center justify-between text-sm bg-white rounded-lg border border-gray-200 px-3 py-2"
                  >
                    <span className="text-gray-800">{p.name}</span>
                    <span className="font-medium text-primary-700">
                      {p.commentsPerDay} comments/ngày
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-2 text-vietnamese">
                Tone & lưu ý nội dung
              </h3>
              <p className="text-sm text-gray-700 mb-3 text-vietnamese">
                {recommendation.tone}
              </p>
              <p className="text-xs text-gray-500 text-vietnamese">
                {recommendation.notes}
              </p>
            </div>

            <button
              type="button"
              className="mt-4 w-full text-xs font-medium text-primary-700 bg-primary-50 hover:bg-primary-100 border border-primary-100 rounded-lg px-3 py-2 text-vietnamese"
            >
              (Mock) Dùng plan này cho campaign mới
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AICopilotPanel
