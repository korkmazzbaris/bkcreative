// URL'den id parametresini al
function getProjectIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get('id');
}

function renderProjectDetail(project) {
  const container = document.getElementById('project-detail');
  const badge = document.getElementById('project-category-badge');
  const title = document.getElementById('project-title');
  const subtitle = document.querySelector('.portfolio-header .section-subtitle');
  const header = document.querySelector('.portfolio-header');
  // Önce eski tag alanını kaldır
  let oldTags = document.getElementById('project-tags');
  if (oldTags) oldTags.remove();

  if (!project) {
    container.innerHTML = `
      <div class="not-found">
        <div class="not-found-icon">🚫</div>
        <div>Proje bulunamadı.</div>
        <a href="portfolio.html" class="back-link">&larr; Tüm Projeler</a>
      </div>
    `;
    if (badge) badge.textContent = '';
    if (title) title.textContent = '';
    if (subtitle) subtitle.textContent = '';
    return;
  }
  if (badge) badge.textContent = project.category || '';
  if (title) title.textContent = project.title || '';
  if (subtitle) subtitle.textContent = project.description || '';

  // Section subtitle altına tagler
  if (header && project.tags && project.tags.length > 0) {
    const tagsDiv = document.createElement('div');
    tagsDiv.className = 'custom-tech-tags';
    tagsDiv.id = 'project-tags';
    tagsDiv.style.margin = '16px 0';
    tagsDiv.innerHTML = project.tags.map(tag => `<span class='custom-tag'>${tag}</span>`).join('');
    const sectionSubtitle = header.querySelector('.section-subtitle');
    if (sectionSubtitle) {
      sectionSubtitle.insertAdjacentElement('afterend', tagsDiv);
    }
  }

  let html = "";
  if (project.image) {
    html += `<img src="${project.image}" alt="${project.title}" class="project-detail-image">`;
  }
  if (project.video) {
    html += `<video src="${project.video}" controls class="project-detail-video"></video>`;
  }
  container.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', function() {
  const id = getProjectIdFromUrl();
  const project = (window.projects || []).find(p => p.id === id);
  renderProjectDetail(project);

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