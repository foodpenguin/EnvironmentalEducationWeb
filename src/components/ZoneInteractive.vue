<template>
  <div>
    <nav class="top-nav">
      <div class="nav-container">
        <router-link to="/" class="nav-logo">
          <img src="../assets/logo.jpg" alt="聞水而知 Logo" class="nav-logo-img">
          聞水而知
        </router-link>
        <button class="nav-toggle" @click="toggleNav" :class="{ active: isNavActive }" aria-label="Toggle navigation" :aria-expanded="isNavActive">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul class="nav-menu" :class="{ active: isNavActive }">
          <li><a href="/#concept" @click="isNavActive = false">展覽概念</a></li>
          <li class="dropdown-item" @mouseenter="showDropdown = true" @mouseleave="showDropdown = false">
            <a href="#themes" class="dropdown-trigger">
              主題介紹<span class="dropdown-arrow">▼</span>
            </a>
            <ul class="dropdown-menu" :class="{ show: showDropdown }">
              <li>
                <router-link to="/zone-pollution" @click.native="showDropdown = false; isNavActive = false">缺水與污染場域</router-link>
              </li>
              <li>
                <router-link to="/zone-clean" @click.native="showDropdown = false; isNavActive = false">乾淨水源與舒適生活</router-link>
              </li>
              <li>
                <router-link to="/zone-interactive" @click.native="showDropdown = false; isNavActive = false">氣味互動創作</router-link>
              </li>
            </ul>
          </li>          <li><a href="/#info" @click="isNavActive = false">參觀資訊</a></li>
          <li><router-link to="/about-us" @click.native="isNavActive = false">關於我們</router-link></li>
        </ul>
      </div>
    </nav>
    
    <div class="zone-wrapper">
      <div class="zone-section">
        <div class="section-title anim-fade-in-up">
          <h2>展區三：氣味互動創作</h2>
          <p>聞水而做，透過氣味卡引導創作，發揮您的想像力</p>
        </div>
        <div class="zone-content">
          <!-- 互動區理念介紹區塊 -->
          <div class="zone-row">
            <div class="zone-col-text">
              <div class="zone-block-title">互動體驗設計</div>
              <div class="smell-list">
                <div class="smell-card">
                  <div class="smell-card-header">
                    <div class="smell-card-icon">🎨</div>
                    <div class="smell-card-title">體驗理念</div>
                  </div>
                  <div class="smell-card-body">
                    <div class="smell-card-desc">
                      <p>「氣味互動創作」區域讓您聞嗅不同的水相關氣味卡後，透過畫筆、色彩與線條，畫出您所感受到的環境、情緒或場景。這是一場氣味感知與環境創作的交融體驗，讓您用視覺表達嗅覺感知。</p>
                    </div>
                    <div class="smell-card-image">
                      <div class="zone-image-placeholder small">
                        <span class="img-icon">🖼️</span>
                        <span class="img-tip">互動區示意圖</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- 氣味卡介紹區塊 -->
          <div class="zone-row">
            <div class="zone-col-text">
              <div class="zone-block-title">氣味卡設計</div>
              <div class="smell-list">
                <!-- 乾涸之地 -->
                <div class="smell-card">
                  <div class="smell-card-header">
                    <div class="smell-card-icon">🏜️</div>
                    <div class="smell-card-title">乾涸之地</div>
                  </div>
                  <div class="smell-card-body">
                    <div class="smell-card-desc">
                      <p>由乾裂泥土與霉味組合而成，這是一張代表長期缺水的氣味卡。聞一聞，腦中浮現的是什麼樣的景象？或許是龜裂的土地，或許是乾旱的河床。「這是長時間沒水的地面，你會畫出怎樣的土地？」</p>
                      <div class="card-backstory">
                        <span class="story-title">氣味背後的故事：</span>
                        <p>乾裂的土地散發著特殊的氣味，是自然提醒我們缺水危機的方式，這種氣味常見於全球暖化導致的嚴重乾旱地區。</p>
                      </div>
                    </div>
                    <div class="smell-card-image">
                      <div class="zone-image-placeholder small">
                        <span class="img-icon">🖼️</span>
                        <span class="img-tip">乾涸之地氣味卡</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- 水岸工業區 -->
                <div class="smell-card">
                  <div class="smell-card-header">
                    <div class="smell-card-icon">🏭</div>
                    <div class="smell-card-title">水岸工業區</div>
                  </div>
                  <div class="smell-card-body">
                    <div class="smell-card-desc">
                      <p>這張氣味卡融合了污水、金屬味與柴油精油的氣味，呈現人類工業活動對水環境的影響。「這是工廠排水後的河岸，你會畫出什麼樣的景色？」</p>
                      <div class="card-backstory">
                        <span class="story-title">氣味背後的故事：</span>
                        <p>工業化的進程改變了許多自然水岸的面貌，這種複合氣味代表著環境污染與人類活動的強烈衝擊。</p>
                      </div>
                    </div>
                    <div class="smell-card-image">
                      <div class="zone-image-placeholder small">
                        <span class="img-icon">🖼️</span>
                        <span class="img-tip">水岸工業區氣味卡</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- 午後草地 -->
                <div class="smell-card">
                  <div class="smell-card-header">
                    <div class="smell-card-icon">🌿</div>
                    <div class="smell-card-title">午後草地</div>
                  </div>
                  <div class="smell-card-body">
                    <div class="smell-card-desc">
                      <p>結合檸檬草、青草香與濕土的清新氣味，喚起雨後公園的美好記憶。「你正走在午後剛下完雨的大安森林公園，眼前的景色讓你想畫些什麼？」</p>
                      <div class="card-backstory">
                        <span class="story-title">氣味背後的故事：</span>
                        <p>雨水賦予植物生命，這種清新的氣味代表著大自然的生命力與城市中的綠洲，是都市規劃中重要的水循環系統。</p>
                      </div>
                    </div>
                    <div class="smell-card-image">
                      <div class="zone-image-placeholder small">
                        <span class="img-icon">🖼️</span>
                        <span class="img-tip">午後草地氣味卡</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- 流動溪水 -->
                <div class="smell-card">
                  <div class="smell-card-header">
                    <div class="smell-card-icon">🌊</div>
                    <div class="smell-card-title">流動溪水</div>
                  </div>
                  <div class="smell-card-body">
                    <div class="smell-card-desc">
                      <p>由鈴蘭香與水生調香氛組成，讓人感受到清澈溪水流動的清新。「這是山中的清溪。閉上眼，你會畫出什麼樣的地方？」</p>
                      <div class="card-backstory">
                        <span class="story-title">氣味背後的故事：</span>
                        <p>台灣的溪流是珍貴的水資源，源自山林的純淨水滋養著大地，這種氣味代表著未受污染的自然水域。</p>
                      </div>
                    </div>
                    <div class="smell-card-image">
                      <div class="zone-image-placeholder small">
                        <span class="img-icon">🖼️</span>
                        <span class="img-tip">流動溪水氣味卡</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- 創作方式介紹區塊 -->
          <div class="zone-row">
            <div class="zone-col-text">
              <div class="zone-block-title">創作方式</div>
              <div class="smell-list">
                <!-- 創作流程 -->
                <div class="smell-card">
                  <div class="smell-card-header">
                    <div class="smell-card-icon">✏️</div>
                    <div class="smell-card-title">創作流程</div>
                  </div>
                  <div class="smell-card-body">
                    <div class="smell-card-desc">
                      <p>在互動區，每位參觀者可以選擇1-2張氣味卡聞嗅，我們提供畫紙與各種繪畫工具（色鉛筆、蠟筆、麥克筆），讓您根據氣味喚起的感受與想像進行自由創作。完成後的作品將被展示在「氣味畫廊牆」上，與其他參觀者共享您的氣味視覺化體驗。</p>
                    </div>
                    <div class="smell-card-image">
                      <div class="zone-image-placeholder small">
                        <span class="img-icon">🖼️</span>
                        <span class="img-tip">創作流程示意圖</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- 畫廊展示 -->
                <div class="smell-card">
                  <div class="smell-card-header">
                    <div class="smell-card-icon">🖼️</div>
                    <div class="smell-card-title">氣味畫廊牆</div>
                  </div>
                  <div class="smell-card-body">
                    <div class="smell-card-desc">
                      <p>「氣味畫廊牆」會依照不同氣味卡類別分類展示參觀者的創作。透過這面牆，您可以看到相同氣味如何在不同人的感知中轉化為各異的視覺表現。這是一場集體的感官記憶展示，展現了氣味與視覺藝術的奇妙連結。</p>
                    </div>
                    <div class="smell-card-image">
                      <div class="zone-image-placeholder small">
                        <span class="img-icon">🖼️</span>
                        <span class="img-tip">畫廊牆示意圖</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const isNavActive = ref(false)
const showDropdown = ref(false)

const toggleNav = () => {
  isNavActive.value = !isNavActive.value
}

const scrollToTheme = (themeId) => {
  // 回到 Homepage 並滾動到指定主題
  window.location.href = `/#theme-${themeId}`
  showDropdown.value = false
  isNavActive.value = false
}

onMounted(() => {
  // 確保在頁面加載完成後元素正確渲染
  document.documentElement.style.scrollBehavior = 'smooth'
  
  // 確保頁面滾動到頂部
  window.scrollTo(0, 0)
  
  // 添加藝術畫筆和顏料動畫元素
  createArtisticElements()
  
  // 主標題創意動畫 - 顏料揮灑效果
  const titleText = document.querySelector('.section-title h2')
  if (titleText) {
    let titleSplit = titleText.textContent.split('')
    titleText.textContent = ''
    
    titleSplit.forEach((char, index) => {
      const span = document.createElement('span')
      span.textContent = char
      span.classList.add('title-char')
      span.style.setProperty('--char-index', index)
      titleText.appendChild(span)
    })
    
    gsap.to('.title-char', {
      opacity: 1,
      y: 0,
      rotateZ: 0,
      stagger: 0.04,
      duration: 0.6,
      ease: 'back.out(1.7)'
    })
  }
  
  // 頁面副標題淡入
  gsap.from('.section-title p', {
    y: 20,
    opacity: 0,
    duration: 0.7,
    delay: 0.8,
    ease: 'power2.out'
  })
  
  // 展區卡片動畫 - 繪圖板效果
  const zoneRows = document.querySelectorAll('.zone-row')
  zoneRows.forEach((row, index) => {
    gsap.fromTo(row, 
      { opacity: 0, scale: 0.9, rotation: -1 }, 
      { 
        opacity: 1, 
        scale: 1,
        rotation: 0,
        duration: 0.8,
        delay: 0.5 + (index * 0.25), 
        ease: 'elastic.out(1, 0.7)',
        scrollTrigger: {
          trigger: row,
          start: 'top 90%',
          toggleActions: 'play none none none'
        }
      }
    )
  })
  
  // 區塊標題揮灑效果
  gsap.utils.toArray('.zone-block-title').forEach((title) => {
    gsap.from(title, {
      x: -30,
      opacity: 0,
      duration: 0.6,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: title,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    })
  })
  
  // 氣味卡片彈跳入場
  const smellCards = document.querySelectorAll('.smell-card')
  smellCards.forEach((card, index) => {
    gsap.from(card, {
      y: 50,
      opacity: 0,
      scale: 0.8,
      duration: 0.7,
      delay: 0.15 * index,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: card,
        start: 'top 90%',
        toggleActions: 'play none none none'
      }
    })
  })
  
  // 為氣味卡片添加藝術化懸停效果
  const cards = document.querySelectorAll('.smell-card')
  cards.forEach(card => {
    // 隨機角度，讓每個卡片轉動角度不同
    const randomRotate = (Math.random() - 0.5) * 4
    
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        y: -15, 
        rotation: randomRotate,
        scale: 1.03,
        duration: 0.4, 
        ease: 'power2.out'
      })
      
      // 同時給卡片頭部添加動畫
      const header = card.querySelector('.smell-card-header')
      if (header) {
        gsap.to(header, {
          backgroundColor: 'rgba(156, 39, 176, 0.15)',
          duration: 0.3
        })
      }
      
      // 圖標動畫
      const icon = card.querySelector('.smell-card-icon')
      if (icon) {
        gsap.to(icon, {
          scale: 1.2,
          rotation: randomRotate * 3,
          duration: 0.5,
          ease: 'elastic.out(1, 0.3)'
        })
      }
    })
    
    card.addEventListener('mouseleave', () => {
      gsap.to(card, { 
        y: 0, 
        rotation: 0,
        scale: 1,
        duration: 0.5, 
        ease: 'power2.inOut' 
      })
      
      // 還原卡片頭部
      const header = card.querySelector('.smell-card-header')
      if (header) {
        gsap.to(header, {
          backgroundColor: 'rgba(156, 39, 176, 0.1)',
          duration: 0.3
        })
      }
      
      // 還原圖標
      const icon = card.querySelector('.smell-card-icon')
      if (icon) {
        gsap.to(icon, {
          scale: 1,
          rotation: 0,
          duration: 0.3
        })
      }
    })
  })
  
  // 為故事背景區塊添加特殊效果
  gsap.utils.toArray('.card-backstory').forEach((backstory) => {
    gsap.from(backstory, {
      opacity: 0,
      y: 10,
      duration: 0.5,
      scrollTrigger: {
        trigger: backstory,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    })
  })
})

// 創建藝術畫筆和顏料動畫元素
const createArtisticElements = () => {
  // 動畫效果已移除
  console.log('美術元素創建功能已停用')
}

// 添加藝術顏料飛濺 - 已停用
const addPaintSplashes = (wrapper) => {
  // 功能已移除
  console.log('顏料飛濺創建功能已停用')
}

// 添加浮動畫筆效果 - 已停用
const addFloatingBrushes = (wrapper) => {
  // 功能已移除
  console.log('浮動畫筆創建功能已停用')
}

onUnmounted(() => {
  // 清理事件監聽器
  const cards = document.querySelectorAll('.smell-card')
  cards.forEach(card => {
    card.removeEventListener('mouseenter', () => {})
    card.removeEventListener('mouseleave', () => {})
  })
  
  // 清理所有藝術動畫元素
  document.querySelectorAll('.paint-splash, .floating-brush').forEach(el => {
    el.remove()
  })
})
</script>

<style scoped>
@import '../style.css';

/* 確保導覽列正確顯示 */
.top-nav {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  z-index: 1000 !important;
  background: var(--color-nav-bg) !important;
  backdrop-filter: blur(15px) !important;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1) !important;
}

.nav-container {
  height: var(--nav-height) !important;
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  width: 90% !important;
  max-width: 1200px !important;
  margin: 0 auto !important;
}

.nav-logo {
  display: flex !important;
  align-items: center !important;
  gap: 0.5rem !important;
  font-size: 1.5rem !important;
  font-weight: 700 !important;
  text-decoration: none !important;
  color: var(--color-text-heading) !important;
}

.nav-logo-img {
  height: 40px !important;
  width: 40px !important;
  border-radius: 50% !important;
  object-fit: cover !important;
}

.nav-menu {
  display: flex !important;
  align-items: center !important;
  gap: 2rem !important;
  list-style: none !important;
  margin: 0 !important;
  padding: 0 !important;
}

/* 導航下拉選單 - 本頁面特定樣式 */
.dropdown-trigger {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  white-space: nowrap;
}

.dropdown-arrow {
  font-size: 0.7rem;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  margin-top: 1px;
}

/* 藝術顏料飛濺效果 - 已移除 */
.paint-splash {
  display: none; /* 停用藝術顏料飛濺 */
}

/* 浮動畫筆效果 - 已移除 */
.floating-brush {
  display: none; /* 停用浮動畫筆效果 */
}

/* 標題字符動畫 */
.title-char {
  display: inline-block;
  opacity: 0;
  transform: translateY(40px) rotateZ(15deg);
  transition: all 0.3s ease;
  will-change: transform, opacity;
}

/* 展區特定樣式 - 使用相關顏色 */
.zone-wrapper {
  /* 使用紫色和粉色調，代表創意和藝術感 */
  background: linear-gradient(135deg, #f7f0fe 0%, #f3e6ff 50%, #f8e5f7 100%);
  min-height: calc(100vh - var(--nav-height));
  padding-top: 2rem;
  padding-bottom: 4rem; /* 增加底部間距避免圖標堆疊問題 */
  margin-top: var(--nav-height); 
  position: relative;
  overflow: hidden; /* 確保內容不會溢出 */
  /* 添加藝術風格的背景效果 */
  background-image: 
    radial-gradient(circle at 20% 30%, rgba(156, 39, 176, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(233, 30, 99, 0.08) 0%, transparent 60%);
  z-index: 0; /* 確保正確的堆疊順序 */
}

.zone-section {
  max-width: 1100px;
  margin: 0 auto;
  padding: 3rem 1.5rem 4rem 1.5rem;
  position: relative;
}

.zone-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 4px;
  /* 使用創作主題相關色調 */
  background: linear-gradient(90deg, #9c27b0, #e91e63);
  border-radius: 2px;
}

.section-title {
  text-align: center;
  margin-bottom: 3rem;
  padding: 2.5rem 1.5rem;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(156, 39, 176, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.3);
  position: relative;
  overflow: hidden;
}

.section-title::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  /* 使用創作主題相關色調 */
  background: linear-gradient(90deg, #9c27b0, #e91e63, #f48fb1);
  border-radius: 20px 20px 0 0;
}

.section-title h2 {
  font-size: 2.3rem;
  font-weight: 700;
  /* 紫色主調 */
  color: #9c27b0;
  margin: 0 0 1rem 0;
  letter-spacing: 0.02em;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  line-height: 1.2;
}

.section-title p {
  font-size: 1.2rem;
  color: #666;
  margin: 0;
  line-height: 1.6;
  font-weight: 400;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.zone-content {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-bottom: 2rem; /* 確保內容與頁面底部有足夠間距 */
}

.zone-row {
  display: flex;
  flex-direction: row;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  margin-bottom: 2rem; /* 增加間距避免堆疊問題 */
  padding: 2.5rem 2rem;
  align-items: flex-start;
  gap: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  position: relative;
  z-index: 1; /* 確保正確的堆疊順序 */
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  min-height: 200px;
  overflow: hidden;
  opacity: 1; /* 由JS控制動畫 */
  transform: translateY(0); /* 由JS控制動畫 */
  will-change: transform, box-shadow;
}

.zone-row:hover {
  transform: translateY(-8px) scale(1.01);
  box-shadow: 0 20px 60px rgba(156, 39, 176, 0.25);
}

.zone-row::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  /* 使用創作主題相關色調 */
  background: linear-gradient(90deg, #9c27b0, #e91e63, #f48fb1);
  border-radius: 20px 20px 0 0;
}

.zone-col-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.zone-col-img {
  flex: 0.5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
}

.zone-block-title {
  font-size: 1.6rem;
  font-weight: 700;
  /* 紫色主調 */
  color: #9c27b0;
  margin-bottom: 1rem;
  position: relative;
  padding-bottom: 0.5rem;
}

.zone-block-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 3px;
  /* 使用創作主題相關色調 */
  background: linear-gradient(90deg, #9c27b0, #e91e63);
  border-radius: 1.5px;
}

/* 卡片樣式 */
.smell-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 1rem;
}

.smell-card {
  background: rgba(255, 255, 255, 0.7);
  border-radius: 16px;
  /* 紫色和粉色調邊框 */
  border: 1px solid rgba(156, 39, 176, 0.1);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
  position: relative;
  will-change: transform, box-shadow, rotation;
}

.smell-card:hover {
  box-shadow: 0 15px 35px rgba(156, 39, 176, 0.3);
}

.smell-card-header {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  /* 使用創作主題相關淺色背景 */
  background: linear-gradient(90deg, rgba(156, 39, 176, 0.1), rgba(233, 30, 99, 0.05));
  padding: 1rem 1.5rem;
  /* 紫色和粉色調邊框 */
  border-bottom: 1px solid rgba(156, 39, 176, 0.1);
  transition: all 0.3s ease;
}

.smell-card-icon {
  font-size: 1.6rem;
  line-height: 1;
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform-origin: center;
}

.smell-card-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #9c27b0;
}

/* 氣味卡背後故事樣式 */
.card-backstory {
  margin-top: 1rem;
  padding: 1rem;
  background: rgba(156, 39, 176, 0.05);
  border-left: 3px solid #9c27b0;
  border-radius: 0 8px 8px 0;
  transition: all 0.3s ease;
}

.smell-card:hover .card-backstory {
  background: rgba(156, 39, 176, 0.08);
  transform: translateX(5px);
}

.story-title {
  display: block;
  font-weight: 600;
  font-size: 0.9rem;
  color: #9c27b0;
  margin-bottom: 0.5rem;
}

.smell-card-body {
  padding: 1.5rem;
  display: flex;
  gap: 1.5rem;
}

.smell-card-desc {
  flex: 1;
}

.smell-card-desc p {
  margin: 0;
  color: #555;
  line-height: 1.6;
}

.smell-card-image {
  min-width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.zone-image-placeholder {
  width: 100%;
  height: 150px;
  background: rgba(233, 30, 99, 0.1);
  border: 1px dashed rgba(156, 39, 176, 0.4);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}

.zone-image-placeholder.small {
  width: 120px;
  height: 100px;
}

.img-icon {
  font-size: 2rem;
  color: rgba(156, 39, 176, 0.6);
}

.img-tip {
  font-size: 0.8rem;
  color: #888;
}

/* 響應式設計 */
@media (max-width: 992px) {
  .zone-section {
    padding: 2.5rem 2rem 3rem;
  }
  
  .section-title {
    margin-bottom: 2.5rem;
    padding: 2rem 1.2rem;
  }
  
  .section-title h2 {
    font-size: 2rem;
  }
}

@media (max-width: 768px) {
  .zone-wrapper {
    padding-top: 1.5rem;
  }
  
  .zone-section {
    padding: 2rem 1.5rem 3rem;
  }
  
  .zone-row {
    padding: 2rem 1.5rem;
    flex-direction: column;
  }
  
  .zone-col-text,
  .zone-col-img {
    width: 100%;
  }
  
  .smell-card-body {
    flex-direction: column;
  }

  .smell-card-image {
    width: 100%;
    min-width: auto;
    margin-top: 1rem;
  }

  .zone-image-placeholder.small {
    width: 100%;
    max-width: 250px;
    margin: 0 auto;
  }

  .section-title {
    padding: 1.8rem 1.2rem;
  }
  
  .section-title h2 {
    font-size: 1.8rem;
  }

  .section-title p {
    font-size: 1rem;
  }

  .zone-block-title {
    font-size: 1.4rem;
    text-align: center;
  }
  
  .zone-block-title::after {
    left: 50%;
    transform: translateX(-50%);
  }
}

@media (max-width: 480px) {
  .zone-section {
    padding: 1.5rem 1rem 2.5rem;
  }
  
  .zone-row {
    padding: 1.5rem 1.2rem;
  }
  
  .section-title h2 {
    font-size: 1.6rem;
  }
  
  .section-title p {
    font-size: 0.95rem;
  }
  
  .smell-card-header {
    padding: 0.8rem 1.2rem;
  }
  
  .smell-card-title {
    font-size: 1.15rem;
  }
  
  .smell-card-body {
    padding: 1.2rem;
  }
}
</style>
