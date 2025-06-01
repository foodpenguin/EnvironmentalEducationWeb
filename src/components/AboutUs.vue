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
          </li>
          <li><a href="/#info" @click="isNavActive = false">參觀資訊</a></li>
          <li><router-link to="/about-us" @click="isNavActive = false">關於我們</router-link></li>
        </ul>
      </div>
    </nav>
    
    <div class="about-wrapper">
      <div class="about-section">
        <div class="section-title anim-fade-in-up">
          <h2>關於我們</h2>
          <p>認識「環境小小兵」團隊，一群致力於水資源環保意識推廣的熱忱創作者</p>
        </div>
        
        <div class="team-intro">
          <div class="team-header">
            <h3>環境小小兵</h3>
            <p>我們是一群對環境保護充滿熱情的年輕人，致力於透過互動展覽「聞水而知」來推廣水資源保護的重要性。團隊結合了設計、技術與環保專業知識，打造出融合氣味、視覺和互動體驗的創新展覽。</p>
          </div>
        </div>
        
        <div class="team-members">
          <div class="members-row top-row">
            <div class="member-card">
              <div class="member-avatar-container">
                <img src="../assets/Avatar1.jpg" alt="練書睿" class="member-avatar">
              </div>
              <div class="member-info">
                <h4 class="member-name">練書睿</h4>
                <p class="member-role">網頁設計</p>
                <p class="member-desc">負責展覽網站的前端開發與視覺設計，致力於創造友善且具互動性的使用者體驗。</p>
              </div>
            </div>
            
            <div class="member-card">
              <div class="member-avatar-container">
                <img src="../assets/Avatar2.jpg" alt="陳彥廷" class="member-avatar">
              </div>
              <div class="member-info">
                <h4 class="member-name">陳彥廷</h4>
                <p class="member-role">網頁設計</p>
                <p class="member-desc">專注於網站的技術實現與全端整合，確保展覽網站運行順暢且安全。</p>
              </div>
            </div>
          </div>
          
          <div class="members-row bottom-row">
            <div class="member-card">
              <div class="member-avatar-container">
                <img src="../assets/Avatar2.jpg" alt="林亭汝" class="member-avatar">
              </div>
              <div class="member-info">
                <h4 class="member-name">林亭汝</h4>
                <p class="member-role">企劃發想</p>
                <p class="member-desc">展覽核心概念與主題策劃者，擅長將環保理念轉化為具創意的展覽企劃。</p>
              </div>
            </div>
            
            <div class="member-card">
              <div class="member-avatar-container">
                <img src="../assets/Avatar2.jpg" alt="王若妍" class="member-avatar">
              </div>
              <div class="member-info">
                <h4 class="member-name">王若妍</h4>
                <p class="member-role">企劃執行</p>
                <p class="member-desc">負責展覽實體空間規劃與執行，確保參觀者擁有沉浸式的體驗。</p>
              </div>
            </div>
            
            <div class="member-card">
              <div class="member-avatar-container">
                <img src="../assets/Avatar2.jpg" alt="劉芯妤" class="member-avatar">
              </div>
              <div class="member-info">
                <h4 class="member-name">劉芯妤</h4>
                <p class="member-role">企劃執行</p>
                <p class="member-desc">專責展覽互動元素設計與氣味體驗的規劃，強化參觀者的感官連結。</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="contact-section">
          <h3>與我們聯繫</h3>
          <p>如果您對展覽有任何疑問或合作提案，歡迎透過以下方式聯繫我們：</p>
          <div class="contact-info">
            <div class="contact-item">
              <span class="contact-icon">📧</span>
              <span class="contact-text">environmentminiforce@example.com</span>
            </div>
            <div class="contact-item">
              <span class="contact-icon">📱</span>
              <span class="contact-text">+886 0912 557 590</span>
            </div>
            <div class="contact-item">
              <span class="contact-icon">📍</span>
              <span class="contact-text">10608台北市大安區忠孝東路三段1號</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const isNavActive = ref(false)
const showDropdown = ref(false)

const toggleNav = () => {
  isNavActive.value = !isNavActive.value
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
  
  // 團隊介紹淡入
  gsap.fromTo('.team-intro', 
    { opacity: 0, y: 30 }, 
    { 
      opacity: 1, 
      y: 0, 
      duration: 0.7,
      delay: 0.3, 
      ease: 'power2.out'
    }
  )
  
  // 成員卡片動畫
  const memberCards = document.querySelectorAll('.member-card')
  memberCards.forEach((card, index) => {
    gsap.fromTo(card, 
      { opacity: 0, y: 50 }, 
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.7,
        delay: 0.5 + (index * 0.15), 
        ease: 'back.out(1.2)',
        scrollTrigger: {
          trigger: card,
          start: 'top 90%',
          toggleActions: 'play none none none'
        }
      }
    )
  })
  
  // 頭像動畫
  gsap.utils.toArray('.member-avatar').forEach((avatar, index) => {
    gsap.fromTo(avatar, 
      { scale: 0.8, opacity: 0 }, 
      { 
        scale: 1,
        opacity: 1,
        duration: 0.6,
        delay: 0.7 + (index * 0.15), 
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: avatar,
          start: 'top 90%',
          toggleActions: 'play none none none'
        }
      }
    )
  })
  
  // 聯絡區塊動畫
  gsap.fromTo('.contact-section', 
    { opacity: 0, y: 30 }, 
    { 
      opacity: 1, 
      y: 0, 
      duration: 0.7,
      scrollTrigger: {
        trigger: '.contact-section',
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      ease: 'power2.out'
    }
  )
  
  // 聯絡項目依序淡入
  gsap.utils.toArray('.contact-item').forEach((item, index) => {
    gsap.fromTo(item, 
      { opacity: 0, x: -20 }, 
      { 
        opacity: 1, 
        x: 0, 
        duration: 0.5,
        delay: 0.2 + (index * 0.15), 
        scrollTrigger: {
          trigger: '.contact-section',
          start: 'top 85%',
          toggleActions: 'play none none none'
        },
        ease: 'power2.out'
      }
    )
  })
  
  // 為成員卡片添加懸停效果
  const cards = document.querySelectorAll('.member-card')
  cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
      gsap.to(card, { y: -10, boxShadow: '0 15px 30px rgba(230, 184, 0, 0.2)', duration: 0.3 })
      
      // 頭像放大效果
      const avatar = card.querySelector('.member-avatar')
      if (avatar) {
        gsap.to(avatar, { scale: 1.05, duration: 0.4, ease: 'power2.out' })
      }
    })
    
    card.addEventListener('mouseleave', () => {
      gsap.to(card, { y: 0, boxShadow: '0 5px 15px rgba(0, 0, 0, 0.08)', duration: 0.5 })
      
      // 頭像恢復原狀
      const avatar = card.querySelector('.member-avatar')
      if (avatar) {
        gsap.to(avatar, { scale: 1, duration: 0.3 })
      }
    })
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

/* 導航下拉選單樣式 */
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

/* 關於我們頁面樣式 */
.about-wrapper {
  /* 使用漸變背景，溫暖的黃色調 */
  background: linear-gradient(135deg, #fffaf0 0%, #fefae0 50%, #fff8e1 100%);
  min-height: calc(100vh - var(--nav-height));
  padding-top: 2rem;
  padding-bottom: 4rem; /* 底部間距 */
  margin-top: var(--nav-height);
  position: relative;
  overflow: hidden;
  /* 添加柔和的圓形漸變背景 */
  background-image: 
    radial-gradient(circle at 20% 30%, rgba(230, 184, 0, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(255, 193, 7, 0.08) 0%, transparent 60%);
  z-index: 0;
}

.about-section {
  max-width: 1100px;
  margin: 0 auto;
  padding: 3rem 1.5rem 4rem 1.5rem;
  position: relative;
}

.about-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 4px;  
  background: linear-gradient(90deg, #e6b800, #ffc107);
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
  box-shadow: 0 10px 40px rgba(230, 184, 0, 0.15);
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
  background: linear-gradient(90deg, #e6b800, #ffc107, #ffeb3b);
  border-radius: 20px 20px 0 0;
}

.section-title h2 {
  font-size: 2.3rem;
  font-weight: 700;
  color: #e6b800;
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

/* 團隊介紹區塊 */
.team-intro {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  margin-bottom: 2.5rem;
  padding: 2.5rem 2rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  position: relative;
  z-index: 1;
}

.team-intro::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #e6b800, #ffc107, #ffeb3b);
  border-radius: 20px 20px 0 0;
}

.team-header h3 {
  font-size: 1.8rem;
  font-weight: 700;
  color: #e6b800;
  margin: 0 0 1.2rem 0;
}

.team-header p {
  font-size: 1.1rem;
  color: #555;
  line-height: 1.7;
  margin: 0;
}

/* 團隊成員卡片網格 - 交錯排列佈局: 上排2個，下排3個 */
.team-members {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 3rem;
  max-width: 100%;
}

.members-row {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: nowrap; /* 防止卡片換行 */
  width: 100%;
}

.top-row {
  /* 上排2個成員 */
  margin-bottom: 2rem;
  max-width: 600px; /* 控制上排寬度，適合放2張卡片 */
  margin-left: auto;
  margin-right: auto;
}

.bottom-row {
  /* 下排3個成員 */
  max-width: 900px;
  margin: 0 auto;
}

.member-card {
  background: rgba(255, 255, 255, 0.85);
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%; /* 使用百分比寬度，保證每排的卡片數量 */
  max-width: 280px;
  min-height: 300px;
  flex: 1; /* 讓卡片均勻分布 */
}

.member-avatar-container {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 1.5rem;
  box-shadow: 0 5px 15px rgba(230, 184, 0, 0.2);
  border: 3px solid #fff;
  position: relative;
}

.member-avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.4s ease;
}

.member-info {
  width: 100%;
}

.member-name {
  font-size: 1.4rem;
  font-weight: 700;
  color: #e6b800;
  margin: 0 0 0.3rem 0;
}

.member-role {
  font-size: 1rem;
  color: #ffa000;
  margin: 0 0 1rem 0;
  font-weight: 600;
}

.member-desc {
  font-size: 0.95rem;
  color: #666;
  line-height: 1.6;
  margin: 0;
}

/* 聯絡資訊區塊 */
.contact-section {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  padding: 2.5rem 2rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  position: relative;
  z-index: 1;
}

.contact-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #e6b800, #ffc107, #ffeb3b);
  border-radius: 20px 20px 0 0;
}

.contact-section h3 {
  font-size: 1.8rem;
  font-weight: 700;
  color: #e6b800;
  margin: 0 0 1.2rem 0;
}

.contact-section > p {
  font-size: 1.1rem;
  color: #555;
  margin: 0 0 2rem 0;
  line-height: 1.6;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem 1.5rem;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 12px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.contact-item:hover {
  transform: translateX(5px);
  box-shadow: 0 5px 15px rgba(230, 184, 0, 0.15);
  background: rgba(255, 255, 255, 0.9);
}

.contact-icon {
  font-size: 1.5rem;
  color: #e6b800;
}

.contact-text {
  font-size: 1.05rem;
  color: #555;
}

/* 響應式設計 */
@media (max-width: 992px) {
  .about-section {
    padding: 2.5rem 2rem 3rem;
  }
  
  .section-title {
    margin-bottom: 2.5rem;
    padding: 2rem 1.2rem;
  }
  
  .section-title h2 {
    font-size: 2rem;
  }
  
  .members-row {
    gap: 1.5rem;
  }
  
  .member-card {
    width: 250px;
    max-width: 250px;
  }
}

@media (max-width: 768px) {
  .about-wrapper {
    padding-top: 1.5rem;
  }
  
  .about-section {
    padding: 2rem 1.5rem 3rem;
  }
  
  .team-intro,
  .contact-section {
    padding: 2rem 1.5rem;
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
  
  .team-header h3,
  .contact-section h3 {
    font-size: 1.6rem;
    text-align: center;
  }
  
  .team-header p,
  .contact-section > p {
    font-size: 1rem;
    text-align: center;
  }
  
  .members-row {
    gap: 1.5rem;
  }
  
  .top-row {
    margin-bottom: 1.5rem;
  }
  
  .member-card {
    padding: 1.2rem;
    width: 220px;
    max-width: 220px;
    min-height: 280px;
  }
  
  .member-avatar-container {
    width: 120px;
    height: 120px;
  }
  
  .member-name {
    font-size: 1.3rem;
  }
}

@media (max-width: 480px) {
  .about-section {
    padding: 1.5rem 1rem 2.5rem;
  }
  
  .section-title h2 {
    font-size: 1.6rem;
  }
  
  .section-title p {
    font-size: 0.95rem;
  }
  
  .team-intro,
  .contact-section {
    padding: 1.5rem 1.2rem;
  }
  
  .members-row {
    flex-wrap: wrap; /* 在手機版允許卡片換行 */
    gap: 1.5rem;
  }
  
  .top-row {
    margin-bottom: 1.5rem;
  }
  
  .member-card {
    width: 100%;
    max-width: 280px;
    min-height: auto;
    padding: 1.2rem 1rem;
  }
  
  .member-avatar-container {
    width: 100px;
    height: 100px;
    margin-bottom: 1.2rem;
  }
  
  .member-name {
    font-size: 1.2rem;
  }
  
  .member-role {
    font-size: 0.9rem;
    margin-bottom: 0.8rem;
  }
  
  .member-desc {
    font-size: 0.9rem;
  }
  
  .contact-item {
    padding: 0.8rem 1.2rem;
  }
  
  .contact-icon {
    font-size: 1.3rem;
  }
  
  .contact-text {
    font-size: 0.95rem;
  }
}
</style>
