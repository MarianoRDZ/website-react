import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { SocialLinks } from '../components/common';
import { uiText } from '../constants/data';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

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

      setStatus({ loading: false, success: true, error: null });
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setStatus({ loading: false, success: false, error: null });
      }, 5000);
    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        error: 'Failed to send message. Please try again.',
      });
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
          {uiText.contact.title}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">{uiText.contact.subtitle}</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800"
      >
        {status.success && (
          <div className="rounded-lg bg-green-50 p-4 text-green-800 dark:bg-green-900/20 dark:text-green-400">
            ✓ Message sent successfully! I'll get back to you soon.
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
            className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={status.loading}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            placeholder="Your name"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={status.loading}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            disabled={status.loading}
            className="w-full resize-none rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            placeholder="Your message..."
          />
        </div>

        <button
          type="submit"
          disabled={status.loading}
          className="w-full rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {status.loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      <div className="mt-12 text-center">
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
          {uiText.contact.socialTitle}
        </h2>
        <SocialLinks className="justify-center" />
      </div>
    </div>
  );
};

export default Contact;
