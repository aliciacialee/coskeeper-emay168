/* ============================================================
   CosKeeper Funnel — funnel.js
   Shared interactive behaviors across all pages
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initAccordion();
  initTabs();
  initModal();
  initAnimations();
});

/* ------------------------------------------------------------
   Accordion (Day Timeline)
   Usage: .day-item containing .day-header and .day-body
   ------------------------------------------------------------ */
function initAccordion() {
  const items = document.querySelectorAll('.day-item');

  items.forEach(item => {
    const header = item.querySelector('.day-header');
    if (!header) return;

    header.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close all others (optional: comment out for multi-open)
      items.forEach(i => i.classList.remove('open'));

      // Toggle clicked
      if (!isOpen) item.classList.add('open');
    });
  });

  // Auto-open Day 1 on load
  if (items.length > 0) {
    items[0].classList.add('open');
  }
}

/* ------------------------------------------------------------
   Tabs (光頭選擇)
   Usage: .tabs > .tab-btn[data-tab="id"] + .tab-panel[id="id"]
   ------------------------------------------------------------ */
function initTabs() {
  const tabGroups = document.querySelectorAll('[data-tab-group]');

  tabGroups.forEach(group => {
    const buttons = group.querySelectorAll('.tab-btn');
    const panels  = group.querySelectorAll('.tab-panel');

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.tab;

        // Update buttons
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Update panels
        panels.forEach(p => {
          p.classList.toggle('active', p.id === target);
        });
      });
    });

    // Activate first tab by default
    if (buttons.length > 0) {
      buttons[0].click();
    }
  });
}

/* ------------------------------------------------------------
   Modal (假門 Bottom Sheet)
   Usage:
     Trigger: any element with data-modal="modal-id"
     Modal:   .modal-overlay[id="modal-id"] > .modal-sheet
     Close:   .modal-close inside modal
   ------------------------------------------------------------ */
function initModal() {
  // Open
  document.querySelectorAll('[data-modal]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const id = trigger.dataset.modal;
      const modal = document.getElementById(id);
      if (modal) openModal(modal);
    });
  });

  // Close — overlay click
  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal(modal);
    });
  });

  // Close — close button
  document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal-overlay');
      if (modal) closeModal(modal);
    });
  });

  // Close — ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.open').forEach(closeModal);
    }
  });
}

function openModal(modal) {
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

/* ------------------------------------------------------------
   Fake Door — Waitlist Form Submit
   Usage: form with class .waitlist-form inside a modal
   ------------------------------------------------------------ */
document.addEventListener('submit', (e) => {
  if (!e.target.classList.contains('waitlist-form')) return;
  e.preventDefault();

  const btn = e.target.querySelector('.waitlist-submit');
  if (!btn) return;

  // Fake submission state
  btn.disabled = true;
  btn.textContent = '✅ 已登記！我們會通知你';
  btn.style.background = '#16A34A';

  // Increment counter (cosmetic)
  const counter = document.querySelector('.waitlist-count');
  if (counter) {
    const current = parseInt(counter.textContent.replace(/\D/g, '')) || 0;
    counter.textContent = `已有 ${current + 1} 人登記候補`;
  }
});

/* ------------------------------------------------------------
   Scroll-triggered Animations
   Usage: add class .animate-on-scroll to any element
   ------------------------------------------------------------ */
function initAnimations() {
  const els = document.querySelectorAll('.animate-on-scroll');
  if (!els.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  els.forEach(el => observer.observe(el));
}

/* ------------------------------------------------------------
   Ingredient Filter (成分紅綠燈頁篩選器)
   Usage: .filter-btn[data-filter="all|laser|peel|hydra"]
          ingredient items with data-category="laser peel" etc.
   ------------------------------------------------------------ */
function initIngredientFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('[data-category]');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active', 'chip-selected'));
      btn.classList.add('active', 'chip-selected');

      const filter = btn.dataset.filter;

      items.forEach(item => {
        if (filter === 'all') {
          item.style.display = '';
        } else {
          const cats = item.dataset.category || '';
          item.style.display = cats.includes(filter) ? '' : 'none';
        }
      });
    });
  });
}

// Call filter init if on ingredients page
if (document.querySelector('.filter-btn')) {
  initIngredientFilter();
}