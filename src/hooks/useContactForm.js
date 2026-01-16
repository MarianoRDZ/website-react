import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

export const useContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    honeypot: '',
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null,
  });

  const formStartTime = useRef(null);
  const lastSubmitTime = useRef(0);

  useEffect(() => {
    formStartTime.current = Date.now();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e, t) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    const now = Date.now();
    const timeSinceStart = now - formStartTime.current;
    const timeSinceLastSubmit = now - lastSubmitTime.current;

    // Anti-spam validations
    if (formData.honeypot) {
      console.warn('Bot detected: honeypot filled');
      setStatus({ loading: false, success: false, error: null });
      return;
    }

    if (timeSinceStart < 3000) {
      setStatus({
        loading: false,
        success: false,
        error: t('contact.errors.tooFast'),
      });
      return;
    }

    if (timeSinceLastSubmit < 60000 && lastSubmitTime.current !== 0) {
      setStatus({
        loading: false,
        success: false,
        error: t('contact.errors.rateLimit'),
      });
      return;
    }

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      lastSubmitTime.current = now;
      setStatus({ loading: false, success: true, error: null });
      setFormData({ name: '', email: '', message: '', honeypot: '' });
      formStartTime.current = Date.now();

      setTimeout(() => {
        setStatus({ loading: false, success: false, error: null });
      }, 5000);
    } catch {
      setStatus({
        loading: false,
        success: false,
        error: t('contact.errors.failed'),
      });
    }
  };

  return {
    formData,
    status,
    handleChange,
    handleSubmit,
  };
};
