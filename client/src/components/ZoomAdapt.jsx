import { useEffect } from 'react';

/**
 * Approximate browser zoom and expose it on <html> so CSS can
 * reflow dense UI (header, grids, fixed widths) at higher zoom levels.
 */
function readZoomRatio() {
  if (typeof window === 'undefined') return 1;

  const visualScale = window.visualViewport?.scale;
  if (typeof visualScale === 'number' && visualScale > 0 && Math.abs(visualScale - 1) > 0.02) {
    return visualScale;
  }

  // Desktop browser zoom often shrinks innerWidth vs outerWidth.
  if (window.outerWidth > 0 && window.innerWidth > 0) {
    const ratio = window.outerWidth / window.innerWidth;
    if (Number.isFinite(ratio) && ratio > 0) {
      return Math.min(Math.max(ratio, 0.75), 4);
    }
  }

  return 1;
}

function applyZoom(ratio) {
  const root = document.documentElement;
  const rounded = Math.round(ratio * 100) / 100;
  root.style.setProperty('--zoom-ratio', String(rounded));
  root.dataset.zoom = rounded >= 1.75 ? 'high' : rounded >= 1.25 ? 'mid' : 'normal';
  root.classList.toggle('is-zoomed', rounded >= 1.25);
  root.classList.toggle('is-zoomed-high', rounded >= 1.75);
}

export default function ZoomAdapt() {
  useEffect(() => {
    let frame = 0;

    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => applyZoom(readZoomRatio()));
    };

    update();
    window.addEventListener('resize', update);
    window.visualViewport?.addEventListener('resize', update);
    window.visualViewport?.addEventListener('scroll', update);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', update);
      window.visualViewport?.removeEventListener('resize', update);
      window.visualViewport?.removeEventListener('scroll', update);
    };
  }, []);

  return null;
}
