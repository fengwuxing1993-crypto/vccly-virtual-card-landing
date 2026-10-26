import { renderHeader, renderFooter } from './components/layout.js';
import { renderHero } from './components/hero.js';
import { renderTrustBar, renderPlatformStats, renderPillars } from './components/stats.js';
import { renderProduct } from './components/product.js';
import { renderSolutions } from './components/solutions.js';
import { renderPricing, renderCalculator } from './components/pricing.js';
import { renderDevelopers, renderHowItWorks } from './components/developers.js';
import {
  renderTestimonials, renderCompliance, renderFAQ,
  renderApply, renderBottomCTA, renderFloatingActions
} from './components/sections.js';
import { observeReveal } from './utils.js';

const boot = () => {
  // Layout
  renderHeader();
  renderFooter();

  // Home sections (top-down)
  renderHero();
  renderTrustBar();
  renderPlatformStats();
  renderPillars();
  renderProduct();
  renderSolutions();
  renderPricing();
  renderDevelopers();
  renderHowItWorks();
  renderCalculator();
  renderTestimonials();
  renderCompliance();
  renderFAQ();
  renderApply();
  renderBottomCTA();
  renderFloatingActions();

  // Reveal animations after render
  observeReveal(document);

  // Smooth-scroll offset for sticky header
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute('href');
    if (!id || id === '#' || id === '#top') {
      if (id === '#top') { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
      return;
    }
    const target = document.querySelector(id);
    if (target) {
      e.preventDefault();
      const header = document.getElementById('site-header');
      const offset = (header?.offsetHeight || 60) + 8;
      const y = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      // close mobile menu after click
      document.getElementById('mobile-menu')?.classList.add('hidden');
    }
  });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
