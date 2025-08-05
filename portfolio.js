document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.custom-project-card');
    const loader = document.getElementById('portfolio-loader');

    // Loader gösterme fonksiyonu
    function showLoader() {
        loader.classList.add('show');
    }

    // Loader gizleme fonksiyonu
    function hideLoader() {
        loader.classList.remove('show');
    }

    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Loader'ı göster
            showLoader();

            // Aktif butonu güncelle
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const filter = this.textContent.trim();

            // Kısa bir gecikme ile filtreleme işlemini gerçekleştir
            setTimeout(() => {
                projectCards.forEach(card => {
                    const category = card.querySelector('.custom-category').textContent.trim();
                    if (filter === "Tümü" || filter === category) {
                        card.style.display = "";
                    } else {
                        card.style.display = "none";
                    }
                });

                // Loader'ı gizle
                hideLoader();
            }, 800); // 800ms gecikme ile gerçekçi bir yükleme efekti
        });
    });

    // Proje kartlarının hepsine tıklama eventi ekle
    document.querySelectorAll('.custom-project-card').forEach(function(card) {
        card.addEventListener('click', function() {
            const id = card.getAttribute('data-id');
            if (id) {
                window.location.href = `project-detail.html?id=${id}`;
            }
        });
    });

    // "Projeyi İncele" butonlarına tıklama eventi ekle
    document.querySelectorAll('.custom-project-link').forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Linkin varsayılan davranışını engelle
            e.stopPropagation(); // Kart tıklamasını engelle
            
            const card = this.closest('.custom-project-card');
            const id = card.getAttribute('data-id');
            if (id) {
                window.location.href = `project-detail.html?id=${id}`;
            }
        });
    });

    // TO-TOP BUTTON
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
});