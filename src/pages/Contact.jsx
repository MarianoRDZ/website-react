import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';
import { SocialLinks } from '../components/common';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    honeypot: '', // Anti-spam field
  });
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null,
  });
  const formStartTime = useRef(null);
  const lastSubmitTime = useRef(0);

  useEffect(() => {
    // Track when user starts interacting with form
    formStartTime.current = Date.now();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    // Anti-spam validations
    const now = Date.now();
    const timeSinceStart = now - formStartTime.current;
    const timeSinceLastSubmit = now - lastSubmitTime.current;

    // 1. Honeypot check - if filled, it's a bot
    if (formData.honeypot) {
      console.warn('Bot detected: honeypot filled');
      setStatus({ loading: false, success: false, error: null });
      return;
    }

    // 2. Time check - too fast (less than 3 seconds)
    if (timeSinceStart < 3000) {
      setStatus({
        loading: false,
        success: false,
        error: t('contact.errors.tooFast'),
      });
      return;
    }

    // 3. Rate limiting - max 1 submission per minute
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
      formStartTime.current = Date.now(); // Reset timer

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

  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <div className="mb-8 text-center">
        <h1 className="mb-3 text-3xl font-bold text-gray-900 dark:text-white">
          {t('contact.title')}
        </h1>
        <p className="text-base text-gray-600 dark:text-gray-400">{t('contact.subtitle')}</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-background-surface space-y-5 rounded-lg p-6 shadow-lg"
      >
        {status.success && (
          <div className="rounded-lg bg-green-50 p-4 text-green-800 dark:bg-green-900/20 dark:text-green-400">
            ✓ {t('contact.success')}
          </div>
        )}

        {status.error && (
          <div className="rounded-lg bg-red-50 p-4 text-red-800 dark:bg-red-900/20 dark:text-red-400">
            ✗ {status.error}
          </div>
        )}

        <div>
          <label
            htmlFor="name"
            className="text-text-secondary mb-2 block text-xs font-semibold tracking-wider uppercase"
          >
            {t('contact.form.name')}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={status.loading}
            className="border-background-tertiary bg-background-surface text-text-primary w-full rounded-lg border px-4 py-3 placeholder-blue-400/60 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
            placeholder={t('contact.form.namePlaceholder')}
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="text-text-secondary mb-2 block text-xs font-semibold tracking-wider uppercase"
          >
            {t('contact.form.email')}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={status.loading}
            className="border-background-tertiary bg-background-surface text-text-primary w-full rounded-lg border px-4 py-3 placeholder-blue-400/60 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
            placeholder={t('contact.form.emailPlaceholder')}
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="text-text-secondary mb-2 block text-xs font-semibold tracking-wider uppercase"
          >
            {t('contact.form.message')}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            disabled={status.loading}
            className="border-background-tertiary bg-background-surface text-text-primary w-full resize-none rounded-lg border px-4 py-3 placeholder-blue-400/60 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
            placeholder={t('contact.form.messagePlaceholder')}
          />
        </div>

        {/* Honeypot field - hidden from users, only bots fill it */}
        <input
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          autoComplete="off"
          tabIndex="-1"
          className="absolute -left-2499.75 h-0 w-0 opacity-0"
          aria-hidden="true"
        />

        <button
          type="submit"
          disabled={status.loading}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-all hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {status.loading ? t('contact.form.sending') : t('contact.form.send')}
          {!status.loading && (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          )}
        </button>
      </form>
    </div>
  );
};

export default Contact;
