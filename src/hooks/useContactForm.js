import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useFormState } from './useFormState';
import { useSpamProtection } from './useSpamProtection';

const INITIAL_VALUES = { name: '', email: '', message: '', honeypot: '' };

export const useContactForm = () => {
  const { formData, handleChange, resetForm } = useFormState(INITIAL_VALUES);
  const { check, recordSubmit, resetTimer } = useSpamProtection();

  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  const handleSubmit = async (e, t) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    const spamCheck = check(formData.honeypot, t);
    if (spamCheck.blocked) {
      setStatus({ loading: false, success: false, error: spamCheck.silent ? null : spamCheck.error });
      return;
    }

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { from_name: formData.name, from_email: formData.email, message: formData.message },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      recordSubmit();
      resetForm();
      resetTimer();
      setStatus({ loading: false, success: true, error: null });

      setTimeout(() => setStatus({ loading: false, success: false, error: null }), 5000);
    } catch {
      setStatus({ loading: false, success: false, error: t('contact.errors.failed') });
    }
  };

  return { formData, status, handleChange, handleSubmit };
};
