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
          <li><a href="#concept">展覽概念</a></li>
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
          </li>
          <li><a href="#info">參觀資訊</a></li>
          <li><router-link to="/about-us">關於我們</router-link></li>
        </ul>
      </div>
    </nav>

    <!-- Hero 區 -->
    <header class="banner" ref="bannerElRef">
      <div class="banner-image-container">
        <!-- 保持原有背景圖片設置 -->
      </div>
      <div class="banner-overlay"></div>

      <div class="floating-elements">
        <img :src="floatingElement1" alt="floating pink blossom" class="floating-element" id="float-blossom1" />
        <img :src="floatingElement2" alt="floating beige blossom cluster" class="floating-element" id="float-blossom2" />
        <img :src="floatingKoi1" alt="floating koi fish" class="floating-element" id="float-koi1" />
        <img :src="floatingElement1" alt="floating pink blossom" class="floating-element" id="float-blossom3" style="opacity: 0.7; width: 80px;" />
      </div>

      <!-- Hero內容 -->
      <div class="info-box">
        <h1 class="main-title">聞水而知</h1>
        <p class="course-subtitle">用鼻子感受水的故事</p>
        <p class="exhibition-description">一場嗅覺引領的水之旅</p>
        <div class="features-list">
          <div class="feature-item">
            <span class="list-icon">💧</span> 
            <span>嗅覺體驗水議題</span>
          </div>
          <div class="feature-item">
            <span class="list-icon">🌿</span> 
            <span>環境教育互動</span>
          </div>
          <div class="feature-item">
            <span class="list-icon">🎨</span> 
            <span>氣味創作工坊</span>
          </div>
          <div class="feature-item">
            <span class="list-icon">🌊</span> 
            <span>五感沉浸體驗</span>
          </div>
        </div>
        <button class="cta-button hero-cta">
          <span>立即預約參觀</span>
          <span class="button-arrow">→</span>
        </button>
      </div>
    </header>

    <main>
      <!-- 展覽概念區 -->
      <section id="concept" class="features-section concept-section">
        <div class="section-title anim-fade-in-up">
          <h2>展覽概念</h2>
          <p>透過嗅覺感知，重新認識水資源的重要性</p>
        </div>
        <div class="concept-content">
          <div class="concept-text-grid">
            <div class="concept-card">
              <div class="concept-icon">👃</div>
              <h3>聞水而知</h3>
              <p>本展覽以「嗅覺」作為水議題的切入點，透過氣味還原「缺水與污染」與「乾淨水源」的生活環境，讓觀展者用鼻子感受水的重要性。</p>
            </div>
            <div class="concept-card">
              <div class="concept-icon">🌊</div>
              <h3>雙重體驗</h3>
              <p>我們將帶領您體驗兩種極端的水環境：從霉味、廢水味構成的缺水污染場域，到濕潤泥土、雨後青草香營造的潔淨水源空間。</p>
            </div>
            <div class="concept-card">
              <div class="concept-icon">🎯</div>
              <h3>深度感知</h3>
              <p>透過五感體驗，重新認識水資源的珍貴與環境保護的重要性，讓每位觀眾都能深刻體會水對生活的影響。</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 三大主題區 -->
      <section id="themes" class="features-section">
        <div class="section-title anim-fade-in-up">
          <h2>展覽主題</h2>
          <p>透過三個不同主題區域，體驗水的多重面貌</p>
        </div>
        <div class="features-grid">
          <div id="theme-pollution" class="feature-card theme-card anim-fade-in-up">
            <div class="theme-image pollution-theme">
              <span class="theme-emoji">💨</span>
            </div>
            <div class="theme-content">
              <h3>缺水與污染場域</h3>
              <p class="theme-tagline">感受乾涸與污染的環境警示</p>
              <p>霉味、廢水味、垃圾腐臭味，體驗缺水城市的真實氣味環境</p>
              <div class="theme-highlights">
                <span class="highlight-tag">環境警示</span>
                <span class="highlight-tag">真實體驗</span>
              </div>
            </div>
          </div>

          <div id="theme-clean" class="feature-card theme-card anim-fade-in-up">
            <div class="theme-image clean-theme">
              <span class="theme-emoji">🌿</span>
            </div>
            <div class="theme-content">
              <h3>乾淨水源與舒適生活</h3>
              <p class="theme-tagline">享受潔淨水源帶來的美好</p>
              <p>濕潤泥土、雨後青草香，感受大自然的清新與生命力</p>
              <div class="theme-highlights">
                <span class="highlight-tag">自然清新</span>
                <span class="highlight-tag">生命活力</span>
              </div>
            </div>
          </div>

          <div id="theme-interactive" class="feature-card theme-card anim-fade-in-up">
            <div class="theme-image interactive-theme">
              <span class="theme-emoji">🎨</span>
            </div>
            <div class="theme-content">
              <h3>氣味互動創作</h3>
              <p class="theme-tagline">聞水而做，發揮你的想像力</p>
              <p>聞嗅氣味卡，用畫筆創作你的水世界，體現氣味感知×環境創作</p>
              <div class="theme-highlights">
                <span class="highlight-tag">創意互動</span>
                <span class="highlight-tag">藝術創作</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 參觀資訊區 -->
      <section id="info" class="features-section info-section">
        <div class="section-title anim-fade-in-up">
          <h2>參觀資訊</h2>
          <p>展覽詳細資訊與注意事項</p>
        </div>
        <div class="features-grid info-grid">
          <div class="feature-card info-card anim-fade-in-up">
            <div class="info-icon-wrapper">
              <div class="info-icon">🕒</div>
            </div>
            <h3>開放時間</h3>
            <ul class="info-list">
              <li>週二至週日 09:00-17:00</li>
              <li>週一休館</li>
              <li>最後入場：16:30</li>
            </ul>
          </div>

          <div class="feature-card info-card anim-fade-in-up">
            <div class="info-icon-wrapper">
              <div class="info-icon">🎫</div>
            </div>
            <h3>票價資訊</h3>
            <ul class="info-list">
              <li>全票：NT$ 200</li>
              <li>學生票：NT$ 150</li>
              <li>兒童票：NT$ 100</li>
              <li class="free-entry">6歲以下免費</li>
            </ul>
          </div>

          <div class="feature-card info-card anim-fade-in-up">
            <div class="info-icon-wrapper">
              <div class="info-icon">ℹ️</div>
            </div>
            <h3>注意事項</h3>
            <ul class="info-list">
              <li>館內禁止飲食</li>
              <li>請勿觸摸展品</li>
              <li>提供無障礙動線</li>
              <li>歡迎拍照分享</li>
            </ul>
          </div>
        </div>

        <!-- FAQ 區域 -->
        <div class="faq-section anim-fade-in-up">
          <button @click="toggleFAQ" class="faq-toggle-btn">
            {{ showFAQ ? '收起' : '更多' }} 常見問題
            <span :class="{ rotated: showFAQ }">▼</span>
          </button>
          <div v-show="showFAQ" class="faq-content">
            <div class="faq-item">
              <h4>Q: 展覽需要預約嗎？</h4>
              <p>A: 建議提前線上預約，現場購票依人數開放。</p>
            </div>
            <div class="faq-item">
              <h4>Q: 展覽適合什麼年齡參觀？</h4>
              <p>A: 適合所有年齡，特別推薦給對環境議題有興趣的觀眾。</p>
            </div>
            <div class="faq-item">
              <h4>Q: 有導覽服務嗎？</h4>
              <p>A: 提供定時導覽服務，詳情請洽詢現場工作人員。</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA 區域 -->
      <section class="features-section cta-section">
        <div class="section-title anim-fade-in-up">
          <h2>準備好開始你的嗅覺水之旅了嗎？</h2>
          <p>立即預約，體驗前所未有的感官展覽</p>
          <button class="cta-button large">立即預約參觀</button>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer>
      <div class="footer-content">
        <div class="footer-section">
          <h3>聞水而知展覽</h3>
          <p>用鼻子感受水的故事</p>
          <p>一場嗅覺引領的水之旅，帶您重新認識水資源的珍貴</p>
        </div>
        <div class="footer-links">
          <a href="#concept">展覽概念</a>
          <a href="#themes">主題介紹</a>
          <a href="#info">參觀資訊</a>
          <a href="#contact">聯絡我們</a>
        </div>
        <div class="footer-contact">
          <p>聯絡電話：0-2771-2717</p>
          <p>展覽地址：台北市大安區忠孝東路三段1號</p>
          <p>開放時間：週二至週日 09:00-17:00</p>
        </div>
      </div>
      <p>&copy; 2025 聞水而知展覽版權所有</p>
    </footer>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import floatingElement1 from '../assets/floating_element_1.png'
import floatingElement2 from '../assets/floating_element_2.png'
import floatingKoi1 from '../assets/floating_koi_1.png'

gsap.registerPlugin(ScrollTrigger)

const isNavActive = ref(false)
const showFAQ = ref(false)
const showDropdown = ref(false)
const bannerElRef = ref(null); // Ref for the banner element

const toggleNav = () => {
  isNavActive.value = !isNavActive.value
}

const toggleFAQ = () => {
  showFAQ.value = !showFAQ.value
}

const scrollToTheme = (themeId) => {
  const element = document.getElementById(`theme-${themeId}`)
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'center',
      inline: 'nearest'
    })
  }
  showDropdown.value = false
  isNavActive.value = false // 關閉手機版選單
}

// 添加頁面滾動時的導覽列效果
const handleScroll = () => {
  const nav = document.querySelector('.top-nav')
  if (nav) {
    if (window.scrollY > 50) {
      nav.style.background = 'rgba(255, 255, 255, 0.95)'
      nav.style.backdropFilter = 'blur(20px)'
    } else {
      nav.style.background = 'rgba(255, 255, 255, 0.9)'
      nav.style.backdropFilter = 'blur(10px)'
    }
  }
}


onMounted(() => {
  // 添加滾動監聽器
  window.addEventListener('scroll', handleScroll)

  // 簡化初始動畫，避免過度動畫造成的閃爍
  gsap.from('.info-box', {
    opacity: 0,
    x: 30,
    duration: 0.8,
    delay: 0.2,
    ease: 'power2.out'
  })

  // ...existing code...

  gsap.from('.section-title', {
    scrollTrigger: {
      trigger: '.section-title',
      start: 'top 85%',
      toggleActions: 'play none none none'
    },
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: 'power2.out'
  })

  gsap.from('.feature-card', {
    scrollTrigger: {
      trigger: '.features-grid',
      start: 'top 80%',
      toggleActions: 'play none none none',
      invalidateOnRefresh: true 
    },
    opacity: 0,
    y: 40,
    duration: 0.6,
    stagger: 0.2,
    ease: 'power2.out'
  })

  // 優化浮動元素動畫，減少性能負荷
  const floatingElements = [
    { id: '#float-blossom1', dx: -20, dy: -30, rot: 10, dur: 15 },
    { id: '#float-blossom2', dx: 30, dy: 15, rot: -8, dur: 20 },
    { id: '#float-blossom3', dx: -15, dy: 25, rot: 12, dur: 18 },
    { id: '#float-koi1', dx: 35, dy: -15, rot: 5, dur: 25 },
  ];

  floatingElements.forEach((el) => {
    const targetElement = document.querySelector(el.id);
    if (targetElement) {
      // 簡化入場動畫
      gsap.fromTo(
        el.id,
        { opacity: 0, scale: 0.8 },
        {
          opacity: targetElement.id === 'float-blossom3' ? 0.7 : 0.8,
          scale: 1,
          duration: 1.5,
          delay: 0.3 + Math.random() * 0.3,
          ease: 'power2.out'
        }
      );

      // 減緩浮動動畫
      gsap.to(el.id, {
        x: `+=${el.dx}`,
        y: `+=${el.dy}`,
        rotation: `${el.rot}_short`,
        repeat: -1,
        yoyo: true,
        duration: el.dur,
        ease: 'sine.inOut',
        delay: Math.random() * 3
      });
    }
  });

  // 優化水波紋效果，減少DOM操作頻率
  const bannerElement = bannerElRef.value; 

  if (bannerElement) { 
    const rippleAnimationDuration = 5000; 
    const numberOfConcentricRipples = 2; // 減少同心圓數量
    const concentricRippleDelay = 400; 

    const createRippleAt = (xPercent, yPercent) => {
      for (let i = 0; i < numberOfConcentricRipples; i++) {
        const ripple = document.createElement('div');
        ripple.classList.add('ripple');
        bannerElement.appendChild(ripple); 

        ripple.style.left = `${xPercent}%`;
        ripple.style.top = `${yPercent}%`;
        
        // 減少隨機範圍，避免過大的水波紋
        const minScale = 15;
        const maxScale = 25;
        const randomFinalScale = Math.random() * (maxScale - minScale) + minScale;
        ripple.style.setProperty('--ripple-final-scale', randomFinalScale);

        const currentDelay = i * concentricRippleDelay;
        ripple.style.animationDelay = `${currentDelay}ms`;

        setTimeout(() => {
          if (ripple.parentNode) {
            ripple.remove();
          }
        }, rippleAnimationDuration + currentDelay);
      }
    };

    // 減少水波紋頻率，從1秒改為2.5秒
    setInterval(() => {
      const randomX = Math.random() * 70 + 15; // 縮小範圍
      const randomY = Math.random() * 60 + 20; // 縮小範圍
      createRippleAt(randomX, randomY);
    }, 2500);
  }
});

onUnmounted(() => {
  // 清理事件監聽器
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
@import '../style.css' ;

/* 防止 FOUC (Flash of Unstyled Content) */
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* 基礎可見性控制 */
.banner {
  visibility: visible;
  opacity: 1;
}

.info-box {
  visibility: visible;
}

.floating-elements {
  visibility: visible;
}

/* Hero 區 - 背景漸層 - 優化性能 */
.banner {
  position: relative;
  background: linear-gradient(180deg, #d0e7ff 0%, #fbf6e9 100%);
  overflow: hidden;
  z-index: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 6vw 0 0; /* 增加右側內邊距 */
  /* 確保穩定布局 */
  box-sizing: border-box;
  min-height: calc(100vh - var(--nav-height)); /* 讓 Hero 區佔據整個視窗高度 */
  height: 100vh; /* 直接設定為 100vh */
}

/* Z-index layering for banner content - 重新調整層級 */
.banner-image-container { 
  position: absolute; 
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  will-change: transform;
}
.banner-overlay { 
  position: absolute; 
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2; 
  background: none;
  opacity: 1;
}
.floating-elements { 
  position: absolute; 
  z-index: 3; /* 確保在 info-box 之下但在背景之上 */
  width: 100%; 
  height: 100%; 
  top: 0; 
  left: 0; 
  pointer-events: none;
  /* 優化性能 */
  will-change: transform;
  contain: layout;
}
.info-box { 
  position: relative;
  z-index: 10 !important; /* 最高層級確保始終可見 */
  background: rgba(0, 0, 0, 0.7) !important;
  backdrop-filter: blur(20px) !important;
  -webkit-backdrop-filter: blur(20px) !important;
  color: #fff !important;
  padding: 2.5rem 2.5rem 2.8rem 2.5rem !important;
  border-radius: 24px !important;
  max-width: 400px !important;
  width: 100% !important;
  box-shadow: 0 15px 50px rgba(0,0,0,0.3) !important;
  border: 1px solid rgba(255, 255, 255, 0.25) !important;
  margin: 0 2vw 0 0 !important; /* 添加右側邊距 */
  /* 防止超出 banner */
  box-sizing: border-box !important;
  /* 確保穩定顯示 */
  visibility: visible !important;
  opacity: 1 !important;
  /* 防止被其他元素覆蓋 */
  isolation: isolate !important;
  /* 增強可讀性 */
  letter-spacing: 0.01em !important;
  /* 增加亮度 */
  filter: brightness(1.05) !important;
  /* 向上移動 info-box */
  transform: translateY(-35px) !important;
}

/* 浮動元素分布更平均且放大 - 性能優化 */
.floating-element {
  position: absolute;
  pointer-events: none; /* 改為 none 避免不必要的交互 */
  /* 性能優化 */
  will-change: transform;
  backface-visibility: hidden;
  transform: translateZ(0);
}

#float-blossom1 { /* 左上花瓣 */
  top: 10%;
  left: 10%;
  width: 100px;
  opacity: 0.9;
}
#float-blossom2 { /* 左下花朵 */
  top: 68%;
  left: 12%;
  width: 130px;
  opacity: 0.85;
}
#float-blossom3 { /* 左中花瓣 - 遠離 info-box */
  top: 30%;
  left: 22%;
  width: 85px !important;
  opacity: 0.7 !important;
}
#float-koi1 { /* 錦鯉左中下方 - 確保不會與 info-box 重疊 */
  top: 50%;
  left: 15%;
  width: 200px;
  opacity: 0.9;
}

/* 移除價格標籤，調整 info-box */
.info-box .price-tag {
  display: none;
}

.info-box h2 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
}

.exhibition-description {
  font-size: 1.1rem;
  color: var(--color-text-body);
  margin-bottom: 1.5rem;
  font-style: italic;
}

/* 參觀資訊樣式 */
.info-section {
  background-color: var(--color-white);
}

.info-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center; /* 改為置中對齊 */
  text-align: center;  /* 改為文字置中 */
  justify-content: flex-start; /* 內容從頂部開始 */
  padding: 2rem 1.5rem; /* 統一的內邊距與主題卡片一致 */
}

.info-icon {
  font-size: 2.5rem;
  height: 3rem; /* 固定圖標區域高度 */
  margin-bottom: 1rem;
  flex-shrink: 0; /* 防止圖標收縮 */
  display: flex;
  align-items: center;
  justify-content: center; /* 圖標置中 */
}

.info-card h3 {
  min-height: 2.5rem; /* 改用最小高度，與主題卡片一致 */
  margin-bottom: 1.5rem;
  flex-shrink: 0; /* 防止標題收縮 */
  display: flex;
  align-items: center;
  justify-content: center; /* 標題置中 */
  line-height: 1.2;
  text-align: center;
}

.info-list {
  list-style: none;
  text-align: center; /* 改為置中對齊 */
  flex-grow: 1; /* 佔據剩餘空間 */
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* 列表項從頂部開始排列 */
  width: 100%; /* 確保列表佔滿寬度 */
  margin: 0;
  padding: 0;
  min-height: 200px; /* 設定最小高度確保視覺平衡 */
}

.info-list li {
  padding: 0.8rem 1rem; /* 增加左右內邊距 */
  border-bottom: 1px solid var(--color-secondary-accent);
  font-size: 0.95rem;
  text-align: center; /* 確保每個列表項都置中 */
  display: block; /* 確保為塊級元素 */
  width: 100%;
}

.info-list li:last-child {
  border-bottom: none;
}

/* FAQ 樣式 */
.faq-section {
  margin-top: 100px;
  text-align: center;
}

.faq-toggle-btn {
  background: none;
  border: 2px solid var(--color-primary-accent);
  padding: 12px 24px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  color: var(--color-text-heading);
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.faq-toggle-btn:hover {
  background-color: var(--color-primary-accent);
  color: white;
}

.faq-toggle-btn span {
  transition: transform 0.3s ease;
}

.faq-toggle-btn span.rotated {
  transform: rotate(180deg);
}

.faq-content {
  max-width: 800px;
  margin: 2rem auto 0;
  text-align: left;
}

.faq-item {
  background: var(--color-bg);
  margin-bottom: 2rem;
  padding: 1.5rem;
  border-radius: 6px;
  border-left: 4px solid var(--color-price);
}

.faq-item h4 {
  color: var(--color-price);
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.faq-item p {
  margin-bottom: 0;
}

/* CTA 區域 */
.cta-section {
  background-color: var(--color-primary-accent);
  color: white;
}

.cta-section .section-title h2 {
  color: white;
  font-size: 2.2rem;
}

.cta-section .section-title p {
  color: white;
  opacity: 0.9;
}

.cta-button.large {
  padding: 1.2rem 2.5rem;
  font-size: 1.1rem;
  margin-top: 1rem;
}

/* Footer 擴展 */
footer {
  background: linear-gradient(135deg, #f8f8f8 0%, #f0f0f0 100%);
  padding: 3rem 0 1.5rem;
  border-top: 1px solid rgba(0,0,0,0.05);
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 3rem;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto 2rem;
  text-align: left;
}

footer > p {
  text-align: center;
  font-size: 0.9rem;
  color: var(--color-text-body);
  opacity: 0.8;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(0,0,0,0.05);
}

.footer-section h3 {
  color: var(--color-text-heading);
  margin-bottom: 0.8rem;
  font-weight: 600;
}

.footer-section p {
  color: var(--color-text-body);
  opacity: 0.9;
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.footer-links a {
  color: var(--color-text-body);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: var(--color-price);
}

.footer-contact p {
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

/* 增加卡片之間的間距 */
.features-grid {
  display: flex;
  align-items: stretch; /* 確保同一列的卡片等高 */
  gap: 3rem;
  margin: 2rem 0;
}

.features-grid > .feature-card {
  flex: 1; /* 讓卡片平均分配寬度 */
  display: flex; /* Make card a flex container */
  flex-direction: column; /* Arrange children vertically */
  min-height: 380px; /* 增加最小高度確保更好的一致性 */
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.features-grid > .feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

/* Specific vertical alignment for children of theme cards (feature-card that is NOT an info-card) */
.features-grid > .feature-card:not(.info-card) {
  justify-content: flex-start; /* 內容從頂部開始 */
  padding: 2rem 1.5rem; /* 統一的內邊距 */
}

/* 為主題卡片創建統一的內容結構 */
.features-grid > .feature-card:not(.info-card) .theme-image {
  width: 100%;
  height: 120px; /* 保持原有高度 */
  background-color: var(--color-secondary-accent);
  border: 2px dashed var(--color-primary-accent);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  border-radius: 8px;
  color: var(--color-text-body);
  font-style: italic;
  font-size: 0.9rem;
  flex-shrink: 0; /* 防止圖片區域收縮 */
}

.features-grid > .feature-card:not(.info-card) h3 {
  min-height: 2.5rem; /* 改用最小高度而非固定高度 */
  margin-bottom: 0.8rem;
  flex-shrink: 0; /* 防止標題收縮 */
  display: flex;
  align-items: center;
  line-height: 1.2;
}

.features-grid > .feature-card:not(.info-card) .theme-tagline {
  min-height: 1.8rem; /* 改用最小高度而非固定高度 */
  margin-bottom: 1rem;
  flex-shrink: 0; /* 防止副標題收縮 */
  display: flex;
  align-items: center;
  line-height: 1.3;
  font-style: italic;
  opacity: 0.8;
  color: var(--color-price);
  font-weight: 600;
  font-size: 0.9rem;
}

.features-grid > .feature-card:not(.info-card) p:last-child {
  flex-grow: 1; /* 讓最後的描述段落佔據剩餘空間 */
  margin: 0;
  line-height: 1.6;
  display: flex;
  align-items: flex-start;
}

/* 如果是資訊卡片區域，也增加間距 */
.info-grid {
  gap: 3rem;
  align-items: stretch;
}

.info-grid .feature-card {
  min-height: 380px; /* 與主題卡片保持一致的最小高度 */
  height: 100%; /* 確保卡片填滿分配的高度，實現一致高度 */
}

/* 導覽選單項目間距 */
.nav-menu {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 2rem; 
}

/* 下拉式選單樣式 */
.dropdown-item {
  position: relative;
}

.dropdown-trigger {
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.dropdown-arrow {
  font-size: 0.7rem;
  transition: transform 0.3s ease;
}

.dropdown-item:hover .dropdown-arrow {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  min-width: 200px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border-radius: 6px;
  padding: 0.5rem 0;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s ease;
  z-index: 1000;
}

.dropdown-menu.show {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-menu li {
  list-style: none;
}

.dropdown-menu a {
  display: block;
  padding: 0.7rem 1.2rem;
  color: var(--color-text-heading);
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.dropdown-menu a:hover {
  background-color: var(--color-primary-accent);
  color: white;
}

/* concept-section 內文垂直置中 */
.concept-section {
  min-height: 380px;
  display: flex;
  flex-direction: column;
  justify-content: center; /* 垂直置中 */
}

.concept-content {
  display: flex;
  flex-direction: column;
  justify-content: center; /* 垂直置中 */
  align-items: center;
  min-height: 220px;
  height: 100%;
}

.concept-text {
  width: 100%;
  max-width: 1100px;
  text-align: center;
  font-size: 1.15rem;
  color: var(--color-text-body);
  line-height: 2;
}

@media (max-width: 768px) {
  .concept-section {
    min-height: 260px;
  }
  .concept-content {
    min-height: 120px;
  }
  .concept-text {
    font-size: 1rem;
  }
}

/* 響應式調整 */
@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem; 
  }
  
  .footer-links {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.5rem;
  }
  
  .concept-text {
    font-size: 1rem;
  }
  
  .info-box {
    max-width: 95% !important;
    padding: 2rem 2rem 2.2rem 2rem !important;
  }
  
  .info-box .main-title {
    font-size: 2.5rem !important;
  }
  
  .theme-image {
    height: 100px;
    font-size: 0.8rem;
  }

  .features-grid {
    gap: 2rem; 
  }
  
  .info-grid {
    gap: 2rem; 
  }

  .info-grid .feature-card {
    min-height: auto;
  }

  .faq-section {
    margin-top: 4rem; 
  }

  .banner {
    min-height: 500px;
    padding: 0 1rem;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .info-box {
    max-width: 100% !important;
    padding: 1.8rem 1.8rem 2rem 1.8rem !important;
    border-radius: 18px !important;
  }
  
  .info-box .main-title {
    font-size: 2.2rem !important;
  }
  
  .cta-section .section-title h2 {
    font-size: 1.8rem;
  }
  
  .theme-image {
    height: 80px;
  }

  .features-grid {
    gap: 1.5rem; 
  }

  .info-grid {
    gap: 1.5rem; 
  }

  .faq-section {
    margin-top: 3rem; 
  }

  .banner {
    min-height: 450px;
    padding: 0 0.5rem;
  }

  .floating-elements {
    /* 在小螢幕上減少浮動元素的複雜度 */
    opacity: 0.7;
  }
}

/* Hero 區域優化 */
.main-title {
  font-size: 3.5rem;
  font-weight: 800;
  color: white;
  margin-bottom: 1rem;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  letter-spacing: 0.02em;
}

.features-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 2rem 0;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.8rem 1.2rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.feature-item:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateX(10px);
}

.feature-item .list-icon {
  font-size: 1.5rem;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
}

.feature-item span:last-child {
  color: white;
  font-weight: 500;
  font-size: 1.1rem;
}

.cta-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  padding: 1.2rem 2.5rem;
  background: linear-gradient(135deg, #ff6b6b, #ee5a52);
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(255, 107, 107, 0.3);
  margin-top: 2rem;
}

.cta-button:hover {
  background: linear-gradient(135deg, #ee5a52, #e04848);
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(255, 107, 107, 0.4);
}

.button-arrow {
  font-size: 1.2rem;
  transition: transform 0.3s ease;
}

.cta-button:hover .button-arrow {
  transform: translateX(5px);
}

/* 展覽概念區優化 */
.concept-text-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.concept-card {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  border: 1px solid rgba(25, 118, 210, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.concept-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #1976d2, #42a5f5, #90caf9);
  border-radius: 20px 20px 0 0;
}

.concept-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(25, 118, 210, 0.15);
  border-color: rgba(25, 118, 210, 0.3);
}

.concept-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.1));
}

.concept-card h3 {
  font-size: 1.4rem;
  color: #1976d2;
  margin-bottom: 1rem;
  font-weight: 700;
}

.concept-card p {
  color: #555;
  line-height: 1.7;
  font-size: 1.05rem;
}

/* 主題卡片優化 */
.theme-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(15px);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.4s ease;
  border: 1px solid rgba(255, 255, 255, 0.3);
  position: relative;
}

.theme-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #1976d2, #42a5f5, #90caf9);
}

.theme-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
}

.theme-image {
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.pollution-theme {
  background: linear-gradient(135deg, #ffebee, #ffcdd2);
}

.clean-theme {
  background: linear-gradient(135deg, #e8f5e8, #c8e6c9);
}

.interactive-theme {
  background: linear-gradient(135deg, #f3e5f5, #e1bee7);
}

.theme-emoji {
  font-size: 4rem;
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.2));
}

.theme-content {
  padding: 2rem;
}

.theme-content h3 {
  font-size: 1.3rem;
  color: #1976d2;
  margin-bottom: 0.8rem;
  font-weight: 700;
}

.theme-tagline {
  color: #666;
  font-style: italic;
  margin-bottom: 1rem;
  font-size: 1rem;
}

.theme-content p:last-of-type {
  color: #555;
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.theme-highlights {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.highlight-tag {
  background: rgba(25, 118, 210, 0.1);
  color: #1976d2;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.85rem;
  font-weight: 500;
  border: 1px solid rgba(25, 118, 210, 0.2);
}
</style>
