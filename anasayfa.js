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
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
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