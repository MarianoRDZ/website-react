import { useEffect, useRef } from 'react';

const MIN_FILL_TIME_MS = 3000;
const RATE_LIMIT_MS = 60000;

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

    if (now - formStartTime.current < MIN_FILL_TIME_MS) {
      return { blocked: true, error: t('contact.errors.tooFast') };
    }

    if (lastSubmitTime.current !== 0 && now - lastSubmitTime.current < RATE_LIMIT_MS) {
      return { blocked: true, error: t('contact.errors.rateLimit') };
    }

    return { blocked: false };
  };

  const recordSubmit = () => {
    lastSubmitTime.current = Date.now();
  };

  return { check, recordSubmit, resetTimer };
};
