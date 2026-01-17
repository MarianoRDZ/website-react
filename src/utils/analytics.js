import ReactGA from 'react-ga4';

/**
 * Initialize Google Analytics 4
 * @param {string} measurementId - GA4 Measurement ID (G-XXXXXXXXXX)
 */
export const initializeAnalytics = (measurementId) => {
  if (!measurementId || measurementId.trim() === '') {
    console.warn('Google Analytics: No measurement ID provided. Analytics disabled.');
    return false;
  }

  try {
    ReactGA.initialize(measurementId, {
      gaOptions: {
        anonymize_ip: true, // Anonymize IP addresses for privacy
      },
    });
    console.log('Google Analytics initialized successfully');
    return true;
  } catch (error) {
    console.error('Error initializing Google Analytics:', error);
    return false;
  }
};

/**
 * Track page view
 * @param {string} path - Page path
 * @param {string} title - Page title
 */
export const trackPageView = (path, title) => {
  try {
    ReactGA.send({
      hitType: 'pageview',
      page: path,
      title: title,
    });
  } catch (error) {
    console.error('Error tracking page view:', error);
  }
};

/**
 * Track custom event
 * @param {string} category - Event category
 * @param {string} action - Event action
 * @param {string} label - Event label (optional)
 * @param {number} value - Event value (optional)
 */
export const trackEvent = (category, action, label = '', value = undefined) => {
  try {
    ReactGA.event({
      category,
      action,
      label,
      value,
    });
  } catch (error) {
    console.error('Error tracking event:', error);
  }
};

/**
 * Track button click
 * @param {string} buttonName - Name/ID of the button
 * @param {string} location - Where the button is located (e.g., 'navbar', 'hero')
 */
export const trackButtonClick = (buttonName, location) => {
  trackEvent('Button', 'click', `${location} - ${buttonName}`);
};

/**
 * Track link click
 * @param {string} url - The URL being navigated to
 * @param {string} linkText - Text of the link
 */
export const trackLinkClick = (url, linkText) => {
  trackEvent('Link', 'click', `${linkText} - ${url}`);
};

/**
 * Track form submission
 * @param {string} formName - Name of the form
 * @param {boolean} success - Whether submission was successful
 */
export const trackFormSubmission = (formName, success) => {
  trackEvent('Form', success ? 'submit_success' : 'submit_error', formName);
};

/**
 * Track file download
 * @param {string} fileName - Name of the file
 */
export const trackDownload = (fileName) => {
  trackEvent('Download', 'click', fileName);
};
