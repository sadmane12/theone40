/**
 * Site analytics (Google Analytics 4) — free visitor statistics.
 *
 * ACTIVATION (one-time, ~5 minutes, no coding):
 *  1. Go to https://analytics.google.com and sign in with a Google account.
 *  2. Admin → Create → Property → name it "Mysco Sports Website".
 *  3. Choose platform "Web", enter URL https://myscosports.co.uk
 *  4. Copy the Measurement ID (looks like G-XXXXXXXXXX).
 *  5. Replace the placeholder value below with your ID, rebuild and re-upload.
 *
 * Until a real ID is entered, this module does nothing (no tracking loaded).
 */
export const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function initAnalytics(): void {
  if (!GA_MEASUREMENT_ID || GA_MEASUREMENT_ID.includes('X')) return;
  if (typeof document === 'undefined') return;
  if (document.querySelector('script[data-ga4]')) return;

  const script = document.createElement('script');
  script.async = true;
  script.setAttribute('data-ga4', 'true');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function (...args: unknown[]) {
    window.dataLayer!.push(args);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID);
}
