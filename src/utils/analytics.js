import ReactGA from 'react-ga4';

export const initializeAnalytics = (measurementId) => {
  if (!measurementId || measurementId.trim() === '') {
    console.warn('Google Analytics: No measurement ID provided. Analytics disabled.');
    return false;
  }

  try {
    ReactGA.initialize(measurementId, {
      gaOptions: {
        anonymize_ip: true,
      },
    });
    return true;
  } catch (error) {
    console.error('Error initializing Google Analytics:', error);
    return false;
  }
};

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

export const trackButtonClick = (buttonName, location) => {
  trackEvent('Button', 'click', `${location} - ${buttonName}`);
};

export const trackLinkClick = (url, linkText) => {
  trackEvent('Link', 'click', `${linkText} - ${url}`);
};

export const trackFormSubmission = (formName, success) => {
  trackEvent('Form', success ? 'submit_success' : 'submit_error', formName);
};

export const trackDownload = (fileName) => {
  trackEvent('Download', 'click', fileName);
};
