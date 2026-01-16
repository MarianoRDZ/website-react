import { useTranslation } from 'react-i18next';
import { Card, Input, Textarea, Button } from '../common';
import { useContactForm } from '../../hooks/useContactForm';
import { SendIcon } from './ContactIcons';

const ContactForm = () => {
  const { t } = useTranslation();
  const { formData, status, handleChange, handleSubmit } = useContactForm();

  return (
    <form onSubmit={(e) => handleSubmit(e, t)} className="h-fit">
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

          {/* Honeypot field */}
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

          <Button
            type="submit"
            disabled={status.loading}
            loading={status.loading}
            fullWidth
            variant="primary"
            size="lg"
            rightIcon={!status.loading && <SendIcon className="h-5 w-5" />}
          >
            {status.loading ? t('contact.form.sending') : t('contact.form.send')}
          </Button>
        </div>
      </Card>
    </form>
  );
};

export default ContactForm;
