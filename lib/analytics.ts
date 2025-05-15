declare global {
    interface Window {
      gtag?: (...args: any[]) => void;
    }
  }
  
  export function trackClick(label: string) {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'cta_click', {
        event_category: 'engagement',
        event_label: label,
      });
    } else {
      console.warn('[Analytics] gtag not available');
    }
  }
  