import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';
import { SocialLinks, Input, Textarea, Card } from '../components/common';
import { personalInfo } from '../constants/data';

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
    <div className="mx-auto max-w-7xl px-6 py-4">
      <div className="mb-6 text-center">
        <h1 className="mb-3 text-3xl font-bold text-gray-900 dark:text-white">
          {t('contact.title')}
        </h1>
        <p className="text-base text-gray-600 dark:text-gray-400">{t('contact.subtitle')}</p>
      </div>

      {/* Two-column layout */}
      <div className="grid gap-8 py-4 lg:grid-cols-2">
        {/* Left column - Contact Information */}
        <div className="space-y-8">
          <div className="h-fit p-8">
            <h2 className="mb-8 text-xl font-bold text-gray-900 dark:text-white">
              {t('contact.directContact')}
            </h2>

            {/* Email */}
            <div className="mb-8 flex gap-4">
              <div className="shrink-0">
                <svg
                  className="h-6 w-6 text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-wider text-gray-600 uppercase dark:text-gray-400">
                  {t('contact.emailLabel')}
                </p>
                <p className="mt-1 text-lg font-medium text-gray-900 dark:text-white">
                  {personalInfo.email}
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="mb-8 flex gap-4">
              <div className="shrink-0">
                <svg
                  className="h-6 w-6 text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-wider text-gray-600 uppercase dark:text-gray-400">
                  {t('contact.locationLabel')}
                </p>
                <p className="mt-1 text-lg font-medium text-gray-900 dark:text-white">
                  {personalInfo.location}
                </p>
              </div>
            </div>

            {/* Availability */}
            <div className="flex gap-4 border-t border-blue-600 pt-8">
              <div className="shrink-0">
                <svg
                  className="h-6 w-6 text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-wider text-gray-600 uppercase dark:text-gray-400">
                  {t('contact.availabilityLabel')}
                </p>
                <p className="mt-1 text-lg font-medium text-gray-900 dark:text-white">
                  {t('contact.availabilityText')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right column - Contact Form */}
        <form onSubmit={handleSubmit} className="h-fit">
          <Card variant="surface" className="space-y-5">
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

            <div className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-xs font-semibold tracking-wider text-gray-600 uppercase dark:text-gray-400"
                >
                  {t('contact.form.name')}
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={status.loading}
                  fullWidth
                  size="lg"
                  className="border-background-tertiary text-text-primary placeholder-text-secondary bg-gray-900"
                  placeholder={t('contact.form.namePlaceholder')}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs font-semibold tracking-wider text-gray-600 uppercase dark:text-gray-400"
                >
                  {t('contact.form.email')}
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status.loading}
                  fullWidth
                  size="lg"
                  className="border-background-tertiary text-text-primary placeholder-text-secondary bg-gray-900"
                  placeholder={t('contact.form.emailPlaceholder')}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-semibold tracking-wider text-gray-600 uppercase dark:text-gray-400"
                >
                  {t('contact.form.message')}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  disabled={status.loading}
                  fullWidth
                  size="lg"
                  className="border-background-tertiary text-text-primary placeholder-text-secondary bg-gray-900"
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
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" stroke="none">
                    <path d="M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.8429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 L4.13399899,1.16346273 C3.34915502,0.9 2.40734225,1.00636533 1.77946707,1.4776575 C0.994623095,2.10604706 0.837654326,3.0486314 1.15159189,3.99021575 L3.03521743,10.4311088 C3.03521743,10.5882061 3.19218622,10.7453035 3.50612381,10.7453035 L16.6915026,11.5307905 C16.6915026,11.5307905 17.1624089,11.5307905 17.1624089,12.0020827 C17.1624089,12.4744748 16.6915026,12.4744748 16.6915026,12.4744748 Z" />
                  </svg>
                )}
              </button>
            </div>
          </Card>
        </form>
      </div>
    </div>
  );
};

export default Contact;
