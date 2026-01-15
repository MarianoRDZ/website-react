import { useState } from 'react';
import { SocialLinks } from '../components/common';
import { uiText } from '../constants/data';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent! (Not implemented yet)');
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
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
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
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
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
            className="w-full resize-none rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            placeholder="Your message..."
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
        >
          Send Message
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
