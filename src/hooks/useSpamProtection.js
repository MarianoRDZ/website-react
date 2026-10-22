import { useEffect, useRef } from 'react';

export const useSpamProtection = () => {
  const formStartTime = useRef(null);
  const lastSubmitTime = useRef(0);

  useEffect(() => {
    formStartTime.current = Date.now();
  }, []);

  const resetTimer = () => {
    formStartTime.current = Date.now();
  };

  const check = (honeypot, t) => {
    if (honeypot) {
      console.warn('Bot detected: honeypot filled');
      return { blocked: true, silent: true };
    }

    const now = Date.now();

    if (now - formStartTime.current < 3000) {
      return { blocked: true, error: t('contact.errors.tooFast') };
    }

    if (lastSubmitTime.current !== 0 && now - lastSubmitTime.current < 60000) {
      return { blocked: true, error: t('contact.errors.rateLimit') };
    }

    return { blocked: false };
  };

  const recordSubmit = () => {
    lastSubmitTime.current = Date.now();
  };

  return { check, recordSubmit, resetTimer };
};
