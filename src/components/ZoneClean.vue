<template>
  <div>
    <nav class="top-nav">
      <div class="nav-container">        <router-link to="/" class="nav-logo">
          <img :src="logoImg" alt="聞水而知 Logo" class="nav-logo-img">
          聞水而知
        </router-link>
        <button class="nav-toggle" @click="toggleNav" :class="{ active: isNavActive }" aria-label="Toggle navigation" :aria-expanded="isNavActive">
          <span></span>
          <span></span>
          <span></span>
        </button>        <ul class="nav-menu" :class="{ active: isNavActive }">
          <li><a @click.prevent="navigateToHome('concept')">展覽概念</a></li>
          <li class="dropdown-item" @mouseenter="showDropdown = true" @mouseleave="showDropdown = false">            <a class="dropdown-trigger" @click.prevent>
              主題介紹<span class="dropdown-arrow">▼</span>
            </a>
            <ul class="dropdown-menu" :class="{ show: showDropdown }">              <li>
                <router-link to="/zone-pollution" @click.native="showDropdown = false; isNavActive = false">缺水與污染場域</router-link>
              </li>
              <li>
                <router-link to="/zone-clean" @click.native="showDropdown = false; isNavActive = false">乾淨水源與舒適生活</router-link>
              </li>
              <li>
                <router-link to="/zone-interactive" @click.native="showDropdown = false; isNavActive = false">氣味互動創作</router-link>
              </li>
            </ul>
          </li>          <li><a @click.prevent="navigateToHome('info')">參觀資訊</a></li>
          <li><router-link to="/about-us" @click.native="isNavActive = false">關於我們</router-link></li>
        </ul>
      </div>
    </nav>
    
    <div class="zone-wrapper">
      <div class="zone-section">
        <div class="section-title anim-fade-in-up">
          <h2>展區二：乾淨水源與舒適生活</h2>
          <p>體驗清新自然的生活環境，感受乾淨水源帶來的舒適感</p>
        </div>
        <div class="zone-content">
          <!-- 氣味與空間設計區塊 -->
          <div class="zone-row">
            <div class="zone-col-text">
              <div class="zone-block-title">氣味與空間設計</div>
              <div class="smell-list">
                <div class="smell-card">
                  <div class="smell-card-header">
                    <div class="smell-card-icon">🌳</div>
                    <div class="smell-card-title">空間設計理念</div>
                  </div>
                  <div class="smell-card-body">
                    <div class="smell-card-desc">
                      <p>本展區以自然光線、綠色植栽與流水聲音營造出舒適清新的環境。觀眾將體驗乾淨水源環境下的生活氛圍，感受到大自然與現代城市和諧共存的可能性。</p>
                    </div>
                    <div class="smell-card-image">
                      <div class="zone-image-placeholder small">
                        <span class="img-icon">🖼️</span>
                        <span class="img-tip">空間設計示意圖</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- 氣味體驗區塊 -->
          <div class="zone-row">
            <div class="zone-col-text">
              <div class="zone-block-title">清新的氣味</div>
              <div class="smell-list">
                <!-- 濕潤泥土味 -->
                <div class="smell-card">
                  <div class="smell-card-header">
                    <div class="smell-card-icon">🌱</div>
                    <div class="smell-card-title">濕潤泥土味</div>
                  </div>
                  <div class="smell-card-body">
                    <div class="smell-card-desc">
                      <p>濕潤泥土的氣味（又稱地氣）來自土壤微生物與水分的結合，是清晨花園或雨後大地的特有香氣。這種氣味代表著健康的土壤生態系統與水分充足的環境。</p>
                    </div>
                    <div class="smell-card-image">
                      <div class="zone-image-placeholder small">
                        <span class="img-icon">🖼️</span>
                        <span class="img-tip">濕潤泥土味示意圖</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- 雨後青草香 -->
                <div class="smell-card">
                  <div class="smell-card-header">
                    <div class="smell-card-icon">🌿</div>
                    <div class="smell-card-title">雨後青草香</div>
                  </div>
                  <div class="smell-card-body">
                    <div class="smell-card-desc">
                      <p>雨後青草香是雨滴落在植物上時釋放出的特殊氣味，清新且令人心曠神怡。這種氣味象徵著大自然的潔淨與更新，提醒我們植被與水的相互依存關係。</p>
                    </div>
                    <div class="smell-card-image">
                      <div class="zone-image-placeholder small">
                        <span class="img-icon">🖼️</span>
                        <span class="img-tip">雨後青草香示意圖</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- 湖泊清新氣息 -->
                <div class="smell-card">
                  <div class="smell-card-header">
                    <div class="smell-card-icon">🌊</div>
                    <div class="smell-card-title">湖泊清新氣息</div>
                  </div>
                  <div class="smell-card-body">
                    <div class="smell-card-desc">
                      <p>湖泊清新氣息來自於乾淨的水體與周圍植物的結合，帶有輕微的礦物質與水生植物香氣。這種氣味代表著健康的水域生態系統，提醒我們保護水源的重要性。</p>
                    </div>
                    <div class="smell-card-image">
                      <div class="zone-image-placeholder small">
                        <span class="img-icon">🖼️</span>
                        <span class="img-tip">湖泊清新氣息示意圖</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- 展板說明區塊 -->
          <div class="zone-row">
            <div class="zone-col-text">
              <div class="zone-block-title">展板說明與案例</div>
              <div class="smell-list">
                <!-- 都市綠地與水系統 -->
                <div class="smell-card">
                  <div class="smell-card-header">
                    <div class="smell-card-icon">🌆</div>
                    <div class="smell-card-title">都市綠地與水系統</div>
                  </div>
                  <div class="smell-card-body">
                    <div class="smell-card-desc">
                      <p>如丹麥哥本哈根的綠色屋頂政策與雨水管理系統，不僅能減緩城市暴雨問題，還創造了宜人的都市微氣候。這展現了都市綠地如何與水資源管理相互結合，創造永續城市景觀。</p>
                    </div>
                    <div class="smell-card-image">
                      <div class="zone-image-placeholder small">
                        <span class="img-icon">🖼️</span>
                        <span class="img-tip">都市水系統案例圖</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- 自然淨水系統 -->
                <div class="smell-card">
                  <div class="smell-card-header">
                    <div class="smell-card-icon">♻️</div>
                    <div class="smell-card-title">自然淨水系統</div>
                  </div>
                  <div class="smell-card-body">
                    <div class="smell-card-desc">
                      <p>人工濕地與植物淨化水質的案例，如新加坡的雙溪布洛濕地公園，展示了如何利用自然生態系統淨化水源。這些系統不僅能有效處理污水，還能創造生物多樣性豐富的環境。</p>
                    </div>
                    <div class="smell-card-image">
                      <div class="zone-image-placeholder small">
                        <span class="img-icon">🖼️</span>
                        <span class="img-tip">自然淨水系統示意圖</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- 個人水資源管理 -->
                <div class="smell-card">
                  <div class="smell-card-header">
                    <div class="smell-card-icon">👤</div>
                    <div class="smell-card-title">個人水資源管理</div>
                  </div>
                  <div class="smell-card-body">
                    <div class="smell-card-desc">
                      <p>介紹每個人如何在日常生活中更有效地使用水資源，從節水裝置到雨水收集系統，展示個人行為如何積極影響整體水資源管理，營造更健康的居住環境。</p>
                    </div>
                    <div class="smell-card-image">
                      <div class="zone-image-placeholder small">
                        <span class="img-icon">🖼️</span>
                        <span class="img-tip">個人水資源管理示意圖</span>
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
import { useRouter } from 'vue-router'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// 導入圖片資源
import logoImg from '../assets/logo.jpg'

gsap.registerPlugin(ScrollTrigger)

const router = useRouter()
const isNavActive = ref(false)
const showDropdown = ref(false)

const toggleNav = () => {
  isNavActive.value = !isNavActive.value
}

const navigateToHome = (anchor) => {
  isNavActive.value = false
  // 使用 router 導航到首頁並帶上 hash
  router.push({ path: '/', hash: `#${anchor}` })
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
  
  // 頁面標題淡入效果 - 自上而下的清新感
  gsap.from('.section-title', {
    y: -40,
    opacity: 0,
    duration: 0.9,
    ease: 'back.out(1.2)'
  })
  
  // 展區卡片淡入 - 清新漂浮感
  const zoneRows = document.querySelectorAll('.zone-row')
  zoneRows.forEach((row, index) => {
    gsap.fromTo(row, 
      { opacity: 0, y: 30, scale: 0.97 }, 
      { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        duration: 0.8,
        delay: 0.3 + (index * 0.25), 
        ease: 'power2.out',
        scrollTrigger: {
          trigger: row,
          start: 'top 90%',
          toggleActions: 'play none none none'
        }
      }
    )
  })
  
  // 添加彈性效果給每個卡片標題
  gsap.utils.toArray('.zone-block-title').forEach((title) => {
    gsap.from(title, {
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: 'back.out(1.5)',
      scrollTrigger: {
        trigger: title,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    })
  })
  
  // 氣味卡片交錯動畫
  const smellCards = document.querySelectorAll('.smell-card')
  smellCards.forEach((card, index) => {
    gsap.from(card, {
      x: index % 2 === 0 ? -20 : 20,
      opacity: 0,
      duration: 0.7,
      delay: 0.1 * index,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: card,
        start: 'top 90%',
        toggleActions: 'play none none none'
      }
    })
  })
  
  // 為卡片添加懸停效果
  const cards = document.querySelectorAll('.smell-card')
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, { 
        y: -10, 
        boxShadow: '0 15px 30px rgba(76, 175, 80, 0.3)', 
        duration: 0.3, 
        ease: 'power2.out' 
      })
      
      // 找到卡片中的圖標，添加輕微搖動效果
      const icon = card.querySelector('.smell-card-icon')
      if (icon) {
        gsap.to(icon, {
          rotation: 5,
          scale: 1.1,
          duration: 0.4,
          ease: 'elastic.out(1, 0.3)'
        })
      }
    })
    card.addEventListener('mouseleave', () => {
      gsap.to(card, { 
        y: 0, 
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)', 
        duration: 0.5, 
        ease: 'power2.out' 
      })
      
      // 還原圖標
      const icon = card.querySelector('.smell-card-icon')
      if (icon) {
        gsap.to(icon, {
          rotation: 0,
          scale: 1,
          duration: 0.3,
          ease: 'power2.out'
        })
      }
    })
  })
  
  // 落葉與水波紋動畫已移除
  console.log('落葉和水波紋動畫已停用')
})

// 創建落葉效果 - 已停用
const createFallingLeaves = () => {
  // 功能已移除
  console.log('落葉效果創建功能已停用')
}

// 創建水波紋效果 - 已停用
const createWaterEffects = () => {
  // 功能已移除
  console.log('水波紋效果創建功能已停用')
}

// 創建單個水波紋 - 已停用
const createRipple = (wrapper) => {
  // 功能已移除
  console.log('單個水波紋創建功能已停用')
}

onUnmounted(() => {
  // 清理事件監聽器
  const cards = document.querySelectorAll('.smell-card')
  cards.forEach(card => {
    card.removeEventListener('mouseenter', () => {})
    card.removeEventListener('mouseleave', () => {})
  })
  
  // 落葉和水波紋動畫已移除，不再需要清理元素
  console.log('組件卸載：落葉和水波紋已移除')
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

/* 展區特定樣式 */
.zone-wrapper {
  /* 改為更明亮、清新的背景色 */
  background: linear-gradient(135deg, #e6f7ff 0%, #f0f9ff 50%, #e8f8f5 100%);
  min-height: calc(100vh - var(--nav-height));
  padding-top: 2rem;
  padding-bottom: 2rem; /* 添加底部間距避免圖標堆疊問題 */
  margin-top: var(--nav-height);
  position: relative;
  overflow: hidden;
  /* 添加更柔和的水波紋背景效果 */
  background-image: 
    radial-gradient(circle at 20% 30%, rgba(144, 238, 144, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(173, 216, 230, 0.08) 0%, transparent 60%);
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
  /* 使用更清新淺綠色的漸變 */
  background: linear-gradient(90deg, #4caf50, #81c784);
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
  box-shadow: 0 10px 40px rgba(76, 175, 80, 0.15);
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
  /* 使用更清新淺綠色的漸變 */
  background: linear-gradient(90deg, #4caf50, #81c784, #c8e6c9);
  border-radius: 20px 20px 0 0;
}

.section-title h2 {
  font-size: 2.3rem;
  font-weight: 700;
  /* 改為綠色主調 */
  color: #2e7d32;
  margin: 0 0 1rem 0;
  letter-spacing: 0.02em;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  line-height: 1.2;
}

.section-title p {
  font-size: 1.2rem;
  color: #555;
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
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  min-height: 200px;
  overflow: hidden;
  will-change: transform, box-shadow;
}

.zone-row:hover {
  transform: translateY(-8px) scale(1.01);
  box-shadow: 0 20px 50px rgba(76, 175, 80, 0.2);
}

.zone-row::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  /* 使用更清新淺綠色的漸變 */
  background: linear-gradient(90deg, #4caf50, #81c784, #c8e6c9);
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
  /* 改為綠色主調 */
  color: #2e7d32;
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
  /* 使用更清新淺綠色的漸變 */
  background: linear-gradient(90deg, #4caf50, #a5d6a7);
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
  /* 改為淺綠色邊框 */
  border: 1px solid rgba(76, 175, 80, 0.1);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  cursor: pointer;
  position: relative;
  will-change: transform, box-shadow;
}

.smell-card:hover {
  box-shadow: 0 15px 30px rgba(76, 175, 80, 0.25);
  transform: translateY(-10px) scale(1.02);
  background: rgba(255, 255, 255, 0.85);
}

.smell-card-header {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  /* 使用更清新淺綠色的背景 */
  background: linear-gradient(90deg, rgba(76, 175, 80, 0.1), rgba(200, 230, 201, 0.05));
  padding: 1rem 1.5rem;
  /* 改為淺綠色邊框 */
  border-bottom: 1px solid rgba(76, 175, 80, 0.1);
  transition: background 0.3s ease;
}

.smell-card:hover .smell-card-header {
  background: linear-gradient(90deg, rgba(76, 175, 80, 0.15), rgba(200, 230, 201, 0.1));
}

.smell-card-icon {
  font-size: 1.6rem;
  line-height: 1;
  transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.smell-card:hover .smell-card-icon {
  transform: scale(1.2) rotate(-5deg);
}

.smell-card-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2e7d32;
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
  background: rgba(129, 199, 132, 0.2);
  border: 1px dashed rgba(76, 175, 80, 0.4);
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
  color: rgba(76, 175, 80, 0.6);
}

.img-tip {
  font-size: 0.8rem;
  color: #888;
}

/* 落葉動畫 */
/* 動畫效果已停用 */

/* 水波紋效果 */
/* 動畫效果已停用 */

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
  .zone-wrapper {
    padding-top: 1rem;
    padding-bottom: 3rem;
  }
  
  .zone-section {
    padding: 1.5rem 1rem 2.5rem;
  }
  
  .section-title {
    padding: 1.5rem 1rem;
    margin-bottom: 2rem;
    border-radius: 16px;
  }
  
  .section-title h2 {
    font-size: 1.6rem;
    line-height: 1.3;
  }
  
  .section-title p {
    font-size: 0.95rem;
    line-height: 1.5;
  }
  
  .zone-content {
    gap: 1.5rem;
  }
  
  .zone-row {
    padding: 1.5rem 1rem;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
    border-radius: 16px;
  }
  
  .zone-block-title {
    font-size: 1.4rem;
    text-align: center;
    margin-bottom: 1.2rem;
  }
  
  .zone-block-title::after {
    left: 50%;
    transform: translateX(-50%);
  }
  
  .smell-list {
    gap: 1.5rem;
  }
  
  .smell-card {
    border-radius: 12px;
    /* 確保觸控友好的目標大小 */
    min-height: 48px;
  }
  
  .smell-card-header {
    padding: 1rem 1.2rem;
    flex-wrap: wrap;
    text-align: center;
    justify-content: center;
    /* 觸控友好的最小高度 */
    min-height: 60px;
  }
  
  .smell-card-icon {
    font-size: 1.8rem;
    margin-bottom: 0.3rem;
  }
  
  .smell-card-title {
    font-size: 1.1rem;
    font-weight: 600;
    width: 100%;
    line-height: 1.3;
  }
  
  .smell-card-body {
    padding: 1.2rem;
    gap: 1rem;
  }
  
  .smell-card-desc p {
    font-size: 0.95rem;
    line-height: 1.6;
    text-align: left;
  }
  
  .zone-image-placeholder {
    height: 120px;
    border-radius: 8px;
  }
  
  .zone-image-placeholder.small {
    width: 100%;
    height: 100px;
    max-width: 200px;
  }
  
  .img-icon {
    font-size: 1.5rem;
  }
  
  .img-tip {
    font-size: 0.75rem;
    text-align: center;
    line-height: 1.3;
  }
  
  /* 觸控優化 */
  .smell-card {
    cursor: pointer;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    user-select: none;
  }
  
  /* 防止卡片在小螢幕上過度縮放 */
  .smell-card:hover {
    transform: translateY(-4px) scale(1.01);
  }
  
  .zone-row:hover {
    transform: translateY(-3px) scale(1.005);
  }
  
  /* 確保在小螢幕上有足夠的間距 */
  .zone-row:last-child {
    margin-bottom: 2rem;
  }
  
  /* 優化文字可讀性 */
  .smell-card-desc p {
    word-wrap: break-word;
    hyphens: auto;
  }
}
</style>
