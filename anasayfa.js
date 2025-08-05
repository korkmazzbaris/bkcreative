document.addEventListener("DOMContentLoaded", function () {
  const toTopBtn = document.getElementById("toTopBtn");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      toTopBtn.classList.add("show");
    } else {
      toTopBtn.classList.remove("show");
    }
  });

  toTopBtn.addEventListener("click", function () {
    // Smooth scrolling with easing
    const startPosition = window.pageYOffset;
    const startTime = performance.now();
    const duration = 1000; // 1 saniye

    function easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    }

    function animateScroll(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeInOutCubic(progress);
      
      const newPosition = startPosition * (1 - easedProgress);
      window.scrollTo(0, newPosition);
      
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    }
    
    requestAnimationFrame(animateScroll);
  });

  // FAQ smooth açılış/kapanış animasyonu
  document.querySelectorAll('.faq-item').forEach(details => {
    const content = details.querySelector('.faq-content');
    if (!content) return;

    // İlk başta kapalıysa max-height 0, açıksa içeriğe göre ayarla
    if (details.open) {
      content.style.maxHeight = content.scrollHeight + 'px';
    } else {
      content.style.maxHeight = '0px';
    }

    details.addEventListener('toggle', function() {
      if (details.open) {
        // Açılırken animasyon
        content.style.maxHeight = '0px';
        // Bir sonraki frame'de gerçek yüksekliği ayarla
        requestAnimationFrame(() => {
          content.style.maxHeight = content.scrollHeight + 'px';
        });
      } else {
        // Kapanırken animasyon
        content.style.maxHeight = content.scrollHeight + 'px';
        // Bir sonraki frame'de 0'a çek
        requestAnimationFrame(() => {
          content.style.maxHeight = '0px';
        });
      }
    });
  });

  // Sayfa yüklendiğinde linkleri dinle
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "center", // Burada tam ortalamayı sağlıyoruz
        });
      }
    });
  });

  const scrollBtn = document.querySelector('.scroll-down');
  if (scrollBtn) {
    scrollBtn.addEventListener('click', function(e) {
      e.preventDefault();
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
      scrollBtn.style.display = 'none';
    });
  }
});