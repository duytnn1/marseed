"use client"

import { useState } from "react"
import { SparklesIcon } from "@heroicons/react/24/outline"

const THEMES = [
  "Seeding comment",
  "Ý tưởng nội dung TikTok",
  "Mini game tăng tương tác",
  "Ý tưởng UGC (user-generated content)",
  "Kịch bản inbox tư vấn"
]

const CHANNELS = ["Facebook", "TikTok", "Shopee", "Instagram"]

const VIBES = ["hài hước", "chân thành", "sang xịn", "thân thiện", "nghiêm túc"]

const PROMPT_TEMPLATES = [
  "Viết 20 comments seeding theo phong cách {{vibe}} cho {{channel}} về chủ đề {{theme}}.",
  "Đề xuất 10 ý tưởng nội dung ngắn (<= 20s) cho {{channel}}, tone {{vibe}}, xoay quanh {{theme}}.",
  "Gợi ý một mini game đơn giản để tăng tương tác bình luận, phù hợp kênh {{channel}}, chủ đề {{theme}}, tone {{vibe}}.",
  "Tạo 5 kịch bản hội thoại inbox (chat) với khách theo tone {{vibe}} cho {{channel}}, chủ đề {{theme}}.",
]

const replaceVars = (tpl: string, vars: Record<string, string>) =>
  tpl
    .replace("{{theme}}", vars.theme)
    .replace("{{channel}}", vars.channel)
    .replace("{{vibe}}", vars.vibe)

export default function MetaIdeaGenerator() {
  const [theme, setTheme] = useState<string>(THEMES[0])
  const [channel, setChannel] = useState<string>(CHANNELS[0])
  const [vibe, setVibe] = useState<string>(VIBES[0])
  const [result, setResult] = useState<string>("")

  const handleGenerate = () => {
    const tpl =
      PROMPT_TEMPLATES[Math.floor(Math.random() * PROMPT_TEMPLATES.length)]
    const text = replaceVars(tpl, { theme, channel, vibe })
    setResult(text)
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-blue-100 p-6 space-y-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium mb-2">
            <SparklesIcon className="h-4 w-4 mr-1" />
            Meta Prompt Lab (mock)
          </div>
          <h2 className="text-base md:text-lg font-semibold text-gray-900 text-vietnamese">
            Gợi ý prompt để anh quăng vào bất kỳ AI nào
          </h2>
          <p className="text-xs md:text-sm text-gray-600 mt-1 text-vietnamese">
            Chọn kênh, chủ đề và vibe, con sen sẽ gợi ý một câu prompt tiếng Việt để anh copy/paste sang ChatGPT, Claude, Gemini... tuỳ thích.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="form-label text-xs">Chủ đề</label>
          <select
            className="form-select text-sm"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
          >
            {THEMES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="form-label text-xs">Kênh</label>
          <select
            className="form-select text-sm"
            value={channel}
            onChange={(e) => setChannel(e.target.value)}
          >
            {CHANNELS.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="form-label text-xs">Vibe</label>
          <select
            className="form-select text-sm"
            value={vibe}
            onChange={(e) => setVibe(e.target.value)}
          >
            {VIBES.map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex justify-between items-center gap-2">
        <p className="text-xs text-gray-500 text-vietnamese">
          Đây là layer "meta": thay vì AI viết nội dung trực tiếp, nó giúp anh nghĩ ra prompt chuẩn để dùng với bất kỳ AI nào.
        </p>
        <button
          type="button"
          onClick={handleGenerate}
          className="btn-primary text-xs md:text-sm inline-flex items-center gap-1"
        >
          <SparklesIcon className="h-4 w-4" />
          Sinh prompt
        </button>
      </div>

      {result && (
        <div className="mt-2">
          <label className="block text-xs font-medium text-gray-700 mb-1 text-vietnamese">
            Prompt gợi ý (copy/paste sang AI khác)
          </label>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-xs md:text-sm text-gray-800 whitespace-pre-wrap text-vietnamese">
            {result}
          </div>
        </div>
      )}
    </div>
  )
}
