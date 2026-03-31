export const SNAP_PIXEL_ID = 'YOUR_PIXEL_ID'; // Replace with actual ID later

export const initSnapPixel = () => {
  if (typeof window !== 'undefined') {
    window.snaptr('init', SNAP_PIXEL_ID);
    window.snaptr('track', 'PAGE_VIEW');
  }
};

export const trackSnapEvent = (eventName, data = {}) => {
  if (typeof window !== 'undefined') {
    window.snaptr('track', eventName, data);
  }
};