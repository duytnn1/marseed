'use client'

import { useState, useEffect } from 'react'
import { 
  SparklesIcon,
  ClipboardDocumentIcon,
  PlayIcon,
  CogIcon,
  ExclamationTriangleIcon,
  BookmarkIcon,
  ClockIcon,
  EyeIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline'

interface GeneratedComment {
  id: number
  text: string
  timestamp: Date
  platform: string
  status: string
  tone?: string
}

interface SavedTemplate {
  id: number
  name: string
  category: string
  tone: string
  platform: string
  template: string
  exampleComment?: string
  structure?: string
}

const CommentsPage = () => {
  const [selectedPlatform, setSelectedPlatform] = useState('shopee')
  const [selectedCategory, setSelectedCategory] = useState('beauty')
  const [selectedTones, setSelectedTones] = useState(['friendly'])
  const [productInfo, setProductInfo] = useState('')
  const [exampleComment, setExampleComment] = useState('')
  const [commentStructure, setCommentStructure] = useState('')
  const [numComments, setNumComments] = useState(10)
  const [diversity, setDiversity] = useState('medium')
  const [generatedComments, setGeneratedComments] = useState<GeneratedComment[]>([])
  const [isGenerating, setIsGenerating] = useState(false)
  const [savedTemplates, setSavedTemplates] = useState<SavedTemplate[]>([])
  const [showTemplates, setShowTemplates] = useState(false)
  const [selectedTemplate, setSelectedTemplate] = useState<SavedTemplate | null>(null)

  const platforms = [
    { id: 'shopee', name: 'Shopee', icon: '🛒', color: 'orange' },
    { id: 'lazada', name: 'Lazada', icon: '🏪', color: 'blue' },
    { id: 'tiktok', name: 'TikTok', icon: '🎵', color: 'pink' },
    { id: 'facebook', name: 'Facebook', icon: '👥', color: 'blue' },
    { id: 'zalo', name: 'Zalo', icon: '💬', color: 'blue' },
    { id: 'instagram', name: 'Instagram', icon: '📸', color: 'purple' }
  ]

  const categories = [
    { id: 'beauty', name: 'Mỹ phẩm', emoji: '🧴' },
    { id: 'fashion', name: 'Thời trang', emoji: '👗' },
    { id: 'food', name: 'F&B', emoji: '🍜' },
    { id: 'tech', name: 'Công nghệ', emoji: '📱' },
    { id: 'home', name: 'Nội thất', emoji: '🏠' },
    { id: 'health', name: 'Sức khỏe', emoji: '💊' }
  ]

  const tones = [
    { id: 'friendly', name: 'Thân thiện', description: 'Giọng điệu gần gũi, ấm áp' },
    { id: 'excited', name: 'Phấn khích', description: 'Năng động, nhiệt tình' },
    { id: 'professional', name: 'Chuyên nghiệp', description: 'Lịch sự, đáng tin cậy' },
    { id: 'trendy', name: 'Trendy', description: 'Hợp xu hướng, gen Z' }
  ]

  // Enhanced comment generation with more variation
  const commentTemplates = {
    beauty: {
      friendly: [
        "Sản phẩm này thật sự tuyệt vời! Da mình sáng hẳn lên sau {time} sử dụng 😍",
        "Mình đã dùng được {time} và thấy hiệu quả rõ rệt, da mịn màng hơn hẳn",
        "Chất lượng tốt, giá cả hợp lý, sẽ ủng hộ shop lâu dài ❤️",
        "Bao bì đẹp, sản phẩm chất lượng, giao hàng nhanh chóng 👍",
        "Dùng thử nghiệm vài ngày rồi, da mình ít bị khô hơn nhiều",
        "Shop tư vấn nhiệt tình, sản phẩm đúng như mô tả, recommended!",
        "Lần đầu mua ở shop này, ấn tượng lắm, sẽ quay lại",
        "Texture mềm mịn, thấm nhanh, không gây bết dính gì cả"
      ],
      excited: [
        "OMG! Sản phẩm này amazing quá! Hiệu quả ngay từ lần đầu dùng! 🔥🔥",
        "BEST PURCHASE EVER! Da mình transform hoàn toàn sau {time}! ✨",
        "Guys! Phải thử ngay! Tôi không thể tin được hiệu quả này! 💕",
        "WOW WOW WOW! Đáng đồng tiền bát gạo! Must-have item!",
        "OBSESSED với sản phẩm này! Đã recommend cho toàn bộ hội chị em! 😍",
        "Không thể tin nổi! Chỉ sau {time} mà da đã khác biệt rõ rệt!",
        "THIS IS IT! Đây chính là holy grail tôi tìm kiếm bấy lâu! 🙌"
      ],
      professional: [
        "Sản phẩm có thành phần an toàn, phù hợp với làn da nhạy cảm",
        "Chất lượng ổn định, đóng gói cẩn thận, dịch vụ chuyên nghiệp",
        "Hiệu quả như mô tả, không gây kích ứng, đáng tin cậy",
        "Thành phần rõ ràng, nguồn gốc xuất xứ minh bạch, an tâm sử dụng",
        "Sản phẩm chất lượng cao, giá cả cạnh tranh trong phân khúc",
        "Dịch vụ khách hàng tốt, tư vấn chi tiết và chuyên nghiệp"
      ],
      trendy: [
        "Viral trên TikTok mà giờ mới thử! Thực sự không hề overrated! 💯",
        "Gen Z phải có! Skincare routine level up immediately! ⚡",
        "Trending item mà chất lượng thật! No cap! 🧢",
        "Aesthetic packaging + amazing result = perfect purchase! ✨",
        "This is giving main character energy! Skin looking bomb! 💣",
        "POV: Tìm được sản phẩm viral mà thực sự work! Slay! 👑"
      ]
    },
    fashion: {
      friendly: [
        "Outfit này xinh quá! Mặc lên tự tin hẳn ra 👗",
        "Chất vải mềm mại, form dáng vừa vặn, rất hài lòng",
        "Màu sắc đẹp như hình, may gia công tỉ mỉ",
        "Size chuẩn, đóng gói cẩn thận, giao hàng nhanh",
        "Phối đồ dễ dàng, đi làm hay đi chơi đều được",
        "Giá tốt cho chất lượng này, sẽ ủng hộ shop tiếp"
      ],
      excited: [
        "OH MY GOD! Cái áo này beautiful quá! Instant love! 💕",
        "OBSESSED! Đây là best purchase của tháng này! 🔥",
        "Slay queen vibes! Mặc lên như runway model! 👑",
        "Can't even! Xinh đến mức không thể tả! Must buy! ✨"
      ],
      professional: [
        "Thiết kế hiện đại, chất liệu bền đẹp, phù hợp môi trường công sở",
        "Sản phẩm đạt chuẩn chất lượng, dịch vụ khách hàng chuyên nghiệp",
        "Kiểu dáng thanh lịch, dễ phối đồ, đáng giá đầu tư"
      ],
      trendy: [
        "This outfit is giving main character energy! Absolutely iconic! 💯",
        "Trending item mà chất lượng thật! Definitely not overrated! 🔥",
        "Aesthetic goals achieved! Every OOTD gonna be fire! ✨"
      ]
    },
    food: {
      friendly: [
        "Món này ngon tuyệt! Vị đậm đà, ăn một lần nhớ mãi 🍜",
        "Shipper giao nhanh, đồ ăn vẫn còn nóng hổi",
        "Giá rẻ mà ngon bất ngờ, sẽ order thường xuyên",
        "Phần ăn nhiều, chất lượng tốt, đáng đồng tiền",
        "Vệ sinh sạch sẽ, đóng gói cẩn thận, yên tâm"
      ],
      excited: [
        "AMAZING FOOD! Ngon đến mức muốn order mỗi ngày! 🔥",
        "BEST MEAL EVER! Flavor explosion in my mouth! 💥",
        "OMG! Tôi đã tìm thấy thiên đường ẩm thực! 🌟"
      ]
    },
    tech: {
      friendly: [
        "Sản phẩm chất lượng, tính năng đầy đủ như mô tả",
        "Giao hàng nhanh, đóng gói cẩn thận, không bị hỏng hóc",
        "Giá cả hợp lý, dịch vụ hậu mãi tốt",
        "Thiết kế đẹp, sử dụng dễ dàng, hiệu suất ổn định"
      ],
      professional: [
        "Hiệu năng ổn định, tương thích tốt với các thiết bị khác",
        "Chất lượng build tốt, thiết kế ergonomic, đáng đầu tư",
        "Tính năng phong phú, phù hợp nhu cầu sử dụng chuyên nghiệp"
      ]
    }
  }

  // Load saved templates
  useEffect(() => {
    // Mock saved templates - in real app, this would come from API
    setSavedTemplates([
      {
        id: 1,
        name: "Mỹ phẩm - Khen hiệu quả",
        category: "beauty",
        tone: "friendly",
        platform: "shopee",
        template: "Sản phẩm {product} thật sự tuyệt vời! Da mình {effect} sau {time} sử dụng 😍"
      },
      {
        id: 2,
        name: "Thời trang - Trendy",
        category: "fashion",
        tone: "trendy",
        platform: "tiktok",
        template: "This {product} is giving main character energy! Absolutely {adjective}! 💯"
      }
    ])
  }, [])

  // Enhanced comment generation with example and structure support
  const generateComments = (template: string, productInfo: string, platform: string, category: string, tone: string, exampleComment?: string, structure?: string) => {
    const timeVariations = ['1 tuần', '3 ngày', '5 ngày', '2 tuần', '10 ngày']
    const effectVariations = ['sáng hẳn lên', 'mịn màng hơn', 'khỏe khoắn hơn', 'tươi tắn hơn']
    const adjectiveVariations = ['amazing', 'perfect', 'stunning', 'incredible', 'fantastic']
    
    let generated = template
    
    // If user provided an example, use it as inspiration
    if (exampleComment && Math.random() > 0.5) {
      // Extract key phrases from example and adapt template
      const exampleWords = exampleComment.split(' ')
      const keyWords = exampleWords.filter(word => word.length > 3)
      if (keyWords.length > 0) {
        const randomKeyWord = keyWords[Math.floor(Math.random() * keyWords.length)]
        generated = generated.replace('sản phẩm này', randomKeyWord)
      }
    }
    
    // Apply user-defined structure if provided
    if (structure) {
      const structureParts = structure.split('|').map(part => part.trim())
      if (structureParts.length > 1) {
        // Use structure as template: "intro | main point | conclusion"
        const parts = generated.split('.')
        if (parts.length >= structureParts.length) {
          generated = structureParts.map((structPart, index) => {
            return parts[index] ? `${structPart}: ${parts[index].trim()}` : structPart
          }).join('. ')
        }
      }
    }
    
    // Replace placeholders with variations
    generated = generated.replace('{time}', timeVariations[Math.floor(Math.random() * timeVariations.length)])
    generated = generated.replace('{effect}', effectVariations[Math.floor(Math.random() * effectVariations.length)])
    generated = generated.replace('{adjective}', adjectiveVariations[Math.floor(Math.random() * adjectiveVariations.length)])
    generated = generated.replace('{product}', productInfo.split(' ').slice(0, 3).join(' ') || 'sản phẩm này')
    
    // Add platform-specific variations
    if (platform === 'tiktok' && Math.random() > 0.7) {
      generated += ' #fyp #viral'
    }
    if (platform === 'shopee' && Math.random() > 0.8) {
      generated += ' 🛒'
    }
    
    return generated
  }

  const handleGenerate = async () => {
    setIsGenerating(true)
    
    // Enhanced AI generation simulation with multiple tones
    setTimeout(() => {
      const categoryTemplates = commentTemplates[selectedCategory as keyof typeof commentTemplates] || commentTemplates.beauty
      const comments: any[] = []
      
      // Collect templates from all selected tones
      const allTemplates: string[] = []
      selectedTones.forEach(tone => {
        const toneTemplates = categoryTemplates[tone as keyof typeof categoryTemplates] || categoryTemplates.friendly
        allTemplates.push(...toneTemplates)
      })
      
      const templatesCopy = [...allTemplates]
      
      for (let i = 0; i < numComments; i++) {
        if (templatesCopy.length === 0) {
          templatesCopy.push(...allTemplates) // Refill if we run out
        }
        
        const randomIndex = Math.floor(Math.random() * templatesCopy.length)
        const template = templatesCopy.splice(randomIndex, 1)[0]
        
        // Pick a random tone from selected tones for this comment
        const randomTone = selectedTones[Math.floor(Math.random() * selectedTones.length)]
        
        const generated = generateComments(
          template, 
          productInfo, 
          selectedPlatform, 
          selectedCategory, 
          randomTone,
          exampleComment,
          commentStructure
        )
        
        comments.push({
          id: i + 1,
          text: generated,
          timestamp: new Date(),
          platform: selectedPlatform,
          status: 'generated',
          tone: randomTone
        })
      }
      
      setGeneratedComments(comments)
      setIsGenerating(false)
    }, 2000)
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    // Add toast notification here in real app
  }

  const copyAllComments = () => {
    const allText = generatedComments.map(c => c.text).join('\n\n')
    navigator.clipboard.writeText(allText)
  }

  const saveAsTemplate = () => {
    if (!productInfo.trim()) return
    
    const newTemplate = {
      id: Date.now(),
      name: `${categories.find(c => c.id === selectedCategory)?.name} - ${selectedTones.join(', ')}`,
      category: selectedCategory,
      tone: selectedTones[0], // Save primary tone
      platform: selectedPlatform,
      template: productInfo,
      exampleComment: exampleComment,
      structure: commentStructure
    }
    
    setSavedTemplates([...savedTemplates, newTemplate])
  }

  const useTemplate = (template: SavedTemplate) => {
    setSelectedCategory(template.category)
    setSelectedTones([template.tone])
    setSelectedPlatform(template.platform)
    setProductInfo(template.template)
    setExampleComment(template.exampleComment || '')
    setCommentStructure(template.structure || '')
    setSelectedTemplate(template)
    setShowTemplates(false)
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 text-vietnamese">
            🤖 Tạo Comments AI
          </h1>
          <p className="text-gray-600 text-vietnamese">
            Tạo comments seeding tự nhiên với AI được tối ưu cho người Việt
          </p>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="text-sm text-gray-600 bg-gray-100 px-4 py-2 rounded-lg">
            Còn lại: <span className="font-semibold text-primary-600">450/500</span> comments tháng này
          </div>
          
          <button
            onClick={() => setShowTemplates(!showTemplates)}
            className="btn-outline px-4 py-2 flex items-center space-x-2"
          >
            <BookmarkIcon className="h-4 w-4" />
            <span>Templates</span>
          </button>
        </div>
      </div>

      {/* Templates Section */}
      {showTemplates && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">📋 Templates đã lưu</h3>
          
          {savedTemplates.length === 0 ? (
            <p className="text-gray-500 text-center py-8">Chưa có templates nào. Tạo comments và lưu làm template!</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {savedTemplates.map((template) => (
                <div key={template.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900">{template.name}</h4>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                      {platforms.find(p => p.id === template.platform)?.name}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{template.template}</p>
                  <button
                    onClick={() => useTemplate(template)}
                    className="btn-primary text-xs px-3 py-1"
                  >
                    Sử dụng
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Configuration Panel */}
        <div className="lg:col-span-1 space-y-6">
          {/* Platform Selection */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 text-vietnamese">
              🔗 Chọn nền tảng
            </h3>
            
            <div className="grid grid-cols-2 gap-3">
              {platforms.map((platform) => (
                <button
                  key={platform.id}
                  onClick={() => setSelectedPlatform(platform.id)}
                  className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                    selectedPlatform === platform.id
                      ? 'border-primary-500 bg-primary-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="text-2xl mb-1">{platform.icon}</div>
                  <div className="text-sm font-medium text-gray-900">{platform.name}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Category Selection */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 text-vietnamese">
              📦 Ngành hàng
            </h3>
            
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-primary-50 border-2 border-primary-500'
                      : 'hover:bg-gray-50 border-2 border-transparent'
                  }`}
                >
                  <span className="text-xl">{category.emoji}</span>
                  <span className="text-sm font-medium text-gray-900 text-vietnamese">
                    {category.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Tone Selection */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 text-vietnamese">
              🎭 Giọng điệu (có thể chọn nhiều)
            </h3>
            
            <div className="space-y-3">
              {tones.map((tone) => (
                <label key={tone.id} className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    value={tone.id}
                    checked={selectedTones.includes(tone.id)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedTones([...selectedTones, tone.id])
                      } else {
                        setSelectedTones(selectedTones.filter(t => t !== tone.id))
                      }
                    }}
                    className="mt-1 text-primary-600 focus:ring-primary-500 rounded"
                  />
                  <div>
                    <div className="text-sm font-medium text-gray-900 text-vietnamese">
                      {tone.name}
                    </div>
                    <div className="text-xs text-gray-600 text-vietnamese">
                      {tone.description}
                    </div>
                  </div>
                </label>
              ))}
            </div>
            
            <div className="mt-4 text-xs text-gray-500 text-vietnamese">
              💡 Chọn nhiều giọng điệu để tạo comments đa dạng hơn
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Input Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 text-vietnamese">
              ✍️ Thông tin sản phẩm/bài viết
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="form-label">
                  Mô tả sản phẩm hoặc link bài viết
                </label>
                <textarea
                  value={productInfo}
                  onChange={(e) => setProductInfo(e.target.value)}
                  placeholder="VD: Kem dưỡng da chống lão hóa với công nghệ peptide, phù hợp da nhạy cảm..."
                  className="form-input h-24 resize-none"
                />
              </div>
              
              <div>
                <label className="form-label">
                  💡 Comment mẫu (tùy chọn)
                </label>
                <textarea
                  value={exampleComment}
                  onChange={(e) => setExampleComment(e.target.value)}
                  placeholder="VD: Sản phẩm này thật sự tuyệt vời! Mình đã dùng được 2 tuần và thấy hiệu quả rõ rệt. Da mịn màng hơn hẳn, sẽ tiếp tục ủng hộ shop! 😍"
                  className="form-input h-20 resize-none"
                />
                <p className="text-xs text-gray-500 mt-1 text-vietnamese">
                  AI sẽ học từ comment mẫu để tạo ra những comment tương tự nhưng đa dạng hơn
                </p>
              </div>
              
              <div>
                <label className="form-label">
                  📝 Cấu trúc comment (tùy chọn)
                </label>
                <input
                  type="text"
                  value={commentStructure}
                  onChange={(e) => setCommentStructure(e.target.value)}
                  placeholder="VD: Khen sản phẩm | Chia sẻ trải nghiệm | Recommend cho người khác"
                  className="form-input"
                />
                <p className="text-xs text-gray-500 mt-1 text-vietnamese">
                  Định nghĩa cấu trúc comment, phân cách bằng dấu "|"
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="form-label">
                    Số lượng comments
                  </label>
                  <input
                    type="number"
                    value={numComments}
                    onChange={(e) => setNumComments(parseInt(e.target.value))}
                    min="1"
                    max="50"
                    className="form-input"
                  />
                </div>
                
                <div>
                  <label className="form-label">
                    Độ đa dạng
                  </label>
                  <select 
                    value={diversity}
                    onChange={(e) => setDiversity(e.target.value)}
                    className="form-input"
                  >
                    <option value="low">Thấp - Tương tự nhau</option>
                    <option value="medium">Vừa phải - Cân bằng</option>
                    <option value="high">Cao - Rất đa dạng</option>
                  </select>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <button
                  onClick={handleGenerate}
                  disabled={isGenerating || !productInfo.trim()}
                  className="btn-primary flex-1 py-3 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isGenerating ? (
                    <>
                      <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                      <span>Đang tạo comments...</span>
                    </>
                  ) : (
                    <>
                      <SparklesIcon className="h-5 w-5" />
                      <span>Tạo Comments AI</span>
                    </>
                  )}
                </button>
                
                <button
                  onClick={saveAsTemplate}
                  disabled={!productInfo.trim()}
                  className="btn-outline px-4 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  title="Lưu làm template"
                >
                  <BookmarkIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Generated Comments */}
          {generatedComments.length > 0 && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 text-vietnamese">
                  💬 Comments đã tạo ({generatedComments.length})
                </h3>
                
                <div className="flex items-center space-x-2">
                  <button
                    onClick={copyAllComments}
                    className="btn-outline px-4 py-2 text-sm flex items-center space-x-2"
                  >
                    <ClipboardDocumentIcon className="h-4 w-4" />
                    <span>Copy tất cả</span>
                  </button>
                  
                  <button className="btn-outline px-4 py-2 text-sm flex items-center space-x-2">
                    <ClockIcon className="h-4 w-4" />
                    <span>Lên lịch</span>
                  </button>
                  
                  <button className="btn-primary px-4 py-2 text-sm flex items-center space-x-2">
                    <PlayIcon className="h-4 w-4" />
                    <span>Đăng ngay</span>
                  </button>
                </div>
              </div>
              
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {generatedComments.map((comment, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 group hover:bg-gray-100 transition-colors duration-200">
                    <div className="flex items-start justify-between">
                      <div className="flex-1 pr-4">
                        <p className="text-gray-800 text-vietnamese mb-2">
                          {comment.text}
                        </p>
                        <div className="flex items-center text-xs text-gray-500 space-x-3">
                          <span>#{comment.id}</span>
                          <span>{platforms.find(p => p.id === selectedPlatform)?.name}</span>
                          <span className="text-green-600">● {comment.status}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => copyToClipboard(comment.text)}
                          className="opacity-0 group-hover:opacity-100 p-2 text-gray-500 hover:text-primary-600 transition-all duration-200"
                          title="Copy comment"
                        >
                          <ClipboardDocumentIcon className="h-4 w-4" />
                        </button>
                        
                        <button
                          className="opacity-0 group-hover:opacity-100 p-2 text-gray-500 hover:text-blue-600 transition-all duration-200"
                          title="Xem preview"
                        >
                          <EyeIcon className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Enhanced Tips Section */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
            <div className="flex items-start space-x-3">
              <ExclamationTriangleIcon className="h-6 w-6 text-blue-600 mt-1" />
              <div>
                <h4 className="font-semibold text-blue-900 mb-2 text-vietnamese">
                  💡 Tips để tạo comments hiệu quả
                </h4>
                <ul className="text-sm text-blue-800 space-y-1 text-vietnamese">
                  <li>• Cung cấp thông tin sản phẩm chi tiết để AI tạo comments chính xác hơn</li>
                  <li>• Chọn nhiều giọng điệu để tạo comments đa dạng và tự nhiên hơn</li>
                  <li>• Thêm comment mẫu để AI học cách viết theo phong cách bạn muốn</li>
                  <li>• Định nghĩa cấu trúc comment để có format nhất quán</li>
                  <li>• Sử dụng templates để tăng tốc độ tạo comments</li>
                  <li>• Đặt lịch đăng comments để tránh spam</li>
                  <li>• Kiểm tra và chỉnh sửa comments trước khi đăng</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommentsPage 