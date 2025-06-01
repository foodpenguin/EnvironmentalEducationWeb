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
          <h2>展區一：缺水與污染場域</h2>
          <p>感受缺水與污染的真實氛圍，體驗氣味與空間設計</p>
        </div>
        <div class="zone-content">
          <!-- 氣味與空間設計區塊 -->
          <div class="zone-row">
            <div class="zone-col-text">
              <div class="zone-block-title">氣味與空間設計</div>
              <div class="smell-list">
                <div class="smell-card">
                  <div class="smell-card-header">
                    <div class="smell-card-icon">🏜️</div>
                    <div class="smell-card-title">空間設計理念</div>
                  </div>
                  <div class="smell-card-body">
                    <div class="smell-card-desc">
                      <p>本展區以昏暗光線、乾裂地面與限水標語，營造出缺水與污染的緊張氛圍。觀眾可在空間中感受到水資源短缺對生活的直接衝擊，並思考日常用水的珍貴。</p>
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
              <div class="zone-block-title">污染的氣味</div>
              <div class="smell-list">
                <!-- 霉味 -->
                <div class="smell-card">
                  <div class="smell-card-header">
                    <div class="smell-card-icon">🍄</div>
                    <div class="smell-card-title">霉味</div>
                  </div>
                  <div class="smell-card-body">
                    <div class="smell-card-desc">
                      <p>霉味常見於潮濕、通風不良的環境，象徵著水資源管理不善與空間老化。這種氣味提醒我們保持環境乾燥與清潔的重要性。</p>
                    </div>
                    <div class="smell-card-image">
                      <div class="zone-image-placeholder small">
                        <span class="img-icon">🖼️</span>
                        <span class="img-tip">霉味示意圖</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- 廢水味 -->
                <div class="smell-card">
                  <div class="smell-card-header">
                    <div class="smell-card-icon">🏭</div>
                    <div class="smell-card-title">廢水味</div>
                  </div>
                  <div class="smell-card-body">
                    <div class="smell-card-desc">
                      <p>廢水味來自未經處理的生活或工業污水，帶有刺鼻的化學或腐敗氣息。這種氣味反映出水污染對健康與生態的威脅。</p>
                    </div>
                    <div class="smell-card-image">
                      <div class="zone-image-placeholder small">
                        <span class="img-icon">🖼️</span>
                        <span class="img-tip">廢水味示意圖</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- 垃圾腐臭味 -->
                <div class="smell-card">
                  <div class="smell-card-header">
                    <div class="smell-card-icon">🗑️</div>
                    <div class="smell-card-title">垃圾腐臭味</div>
                  </div>
                  <div class="smell-card-body">
                    <div class="smell-card-desc">
                      <p>垃圾腐臭味來自廢棄物堆積與分解，常伴隨細菌滋生。這種氣味提醒我們垃圾分類與妥善處理對環境衛生的影響。</p>
                    </div>
                    <div class="smell-card-image">
                      <div class="zone-image-placeholder small">
                        <span class="img-icon">🖼️</span>
                        <span class="img-tip">垃圾腐臭味示意圖</span>
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
                <!-- 全球缺水城市案例 -->
                <div class="smell-card">
                  <div class="smell-card-header">
                    <div class="smell-card-icon">🏙️</div>
                    <div class="smell-card-title">全球缺水城市案例</div>
                  </div>
                  <div class="smell-card-body">
                    <div class="smell-card-desc">
                      <p>例如南非開普敦曾面臨「Day Zero」限水危機，居民需嚴格限水、排隊取水，讓城市生活大受影響。這提醒我們水資源管理與節約用水的重要性。</p>
                    </div>
                    <div class="smell-card-image">
                      <div class="zone-image-placeholder small">
                        <span class="img-icon">🖼️</span>
                        <span class="img-tip">缺水城市案例圖</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- 污水未處理的影響 -->
                <div class="smell-card">
                  <div class="smell-card-header">
                    <div class="smell-card-icon">💧</div>
                    <div class="smell-card-title">污水未處理的影響</div>
                  </div>
                  <div class="smell-card-body">
                    <div class="smell-card-desc">
                      <p>未經處理的污水會污染河川與地下水，影響飲用水安全，並導致疾病傳播與生態系失衡。這強調了污水處理設施與環境保護的必要性。</p>
                    </div>
                    <div class="smell-card-image">
                      <div class="zone-image-placeholder small">
                        <span class="img-icon">🖼️</span>
                        <span class="img-tip">污水未處理示意圖</span>
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
  
  // 頁面標題淡入效果
  gsap.from('.section-title', {
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  })
  
  // 展區卡片逐個顯示
  const zoneRows = document.querySelectorAll('.zone-row')
  zoneRows.forEach((row, index) => {
    gsap.fromTo(row, 
      { opacity: 0, y: 50 }, 
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.7,
        delay: 0.3 + (index * 0.2), 
        ease: 'power2.out',
        scrollTrigger: {
          trigger: row,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    )
  })
  
  // 卡片標題動畫
  gsap.utils.toArray('.zone-block-title').forEach((title) => {
    gsap.from(title, {
      x: -20,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: title,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    })
  })
  
  // 氣味卡片動畫
  gsap.utils.toArray('.smell-card').forEach((card, index) => {
    gsap.from(card, {
      scale: 0.95,
      opacity: 0,
      duration: 0.6,
      delay: 0.1 * index,
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
      gsap.to(card, { y: -8, duration: 0.3, ease: 'power2.out' })
    })
    card.addEventListener('mouseleave', () => {
      gsap.to(card, { y: 0, duration: 0.4, ease: 'power2.out' })
    })
  })
  
  // 污染氣泡動畫已移除
  console.log('污染氣泡動畫已停用')
})

// 創建污染氣泡效果 - 已停用
const createPollutionBubbles = () => {
  // 功能已移除
  console.log('污染氣泡效果創建功能已停用')
}

onUnmounted(() => {
  // 清理事件監聽器和動畫
  const cards = document.querySelectorAll('.smell-card')
  cards.forEach(card => {
    card.removeEventListener('mouseenter', () => {})
    card.removeEventListener('mouseleave', () => {})
  })
  
  // 污染氣泡動畫已移除，不再需要清理元素
  console.log('組件卸載：污染氣泡已移除')
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

/* 污染氣泡動畫 - 已移除 */
/* 動畫效果已停用 */

.zone-wrapper {
  background: linear-gradient(135deg, #f5f0ff 0%, #f2e5fb 50%, #f4e8f8 100%);
  min-height: calc(100vh - var(--nav-height));
  padding-top: 2rem;
  padding-bottom: 4rem; /* 添加底部間距避免圖標堆疊問題 */
  margin-top: var(--nav-height);
  position: relative;
  overflow: hidden;
  /* 添加水波紋背景效果 */
  background-image: 
    radial-gradient(circle at 20% 30%, rgba(186, 104, 200, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(103, 58, 183, 0.08) 0%, transparent 60%);
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
  height: 4px;  background: linear-gradient(90deg, #673ab7, #9c27b0);
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
  box-shadow: 0 10px 40px rgba(103, 58, 183, 0.15);
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
  background: linear-gradient(90deg, #673ab7, #9c27b0, #ba68c8);
  border-radius: 20px 20px 0 0;
}

.section-title h2 {
  font-size: 2.3rem;
  font-weight: 700;
  color: #673ab7;
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
  transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  min-height: 200px;
  overflow: hidden;
  will-change: transform, box-shadow;
}

.zone-row:hover {
  transform: translateY(-5px) scale(1.01);
  box-shadow: 0 20px 60px rgba(103, 58, 183, 0.2);
}

.zone-row::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #673ab7, #9c27b0, #ba68c8);
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
  color: #673ab7;
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
  background: linear-gradient(90deg, #673ab7, #ba68c8);
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
  border: 1px solid rgba(103, 58, 183, 0.1);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  cursor: pointer;
  position: relative;
  will-change: transform, box-shadow;
}

.smell-card:hover {
  box-shadow: 0 12px 30px rgba(103, 58, 183, 0.2);
  transform: translateY(-8px) scale(1.02);
}

.smell-card-header {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background: linear-gradient(90deg, rgba(103, 58, 183, 0.1), rgba(186, 104, 200, 0.05));
  padding: 1rem 1.5rem;
  border-bottom: 1px solid rgba(103, 58, 183, 0.1);
  transition: background 0.3s ease;
}

.smell-card:hover .smell-card-header {
  background: linear-gradient(90deg, rgba(103, 58, 183, 0.2), rgba(186, 104, 200, 0.1));
}

.smell-card-icon {
  font-size: 1.6rem;
  line-height: 1;
  transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.smell-card:hover .smell-card-icon {
  transform: scale(1.15) rotate(5deg);
}

.smell-card-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #673ab7;
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
  background: rgba(186, 104, 200, 0.2);
  border: 1px dashed rgba(103, 58, 183, 0.4);
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
  color: rgba(103, 58, 183, 0.6);
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
