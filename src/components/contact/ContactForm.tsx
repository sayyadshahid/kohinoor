'use client';

import { useMemo } from 'react';
import { Check, Send } from 'lucide-react';
import { useBooking } from '../../context/booking-context';
import { useLocale } from '../../context/LocaleProvider';
import { SERVICE_OPTIONS } from '../../data/content';
import { t } from '../../data/i18n/dict';
import Button from '../ui/Button';
import Card from '../ui/Card';
import Reveal from '../ui/Reveal';
import { Field, Select, Textarea, TextInput } from './FormControls';
import SectionHeading from '../ui/SectionHeading';

const SERVICE_LABEL_KEYS: Record<string, string> = {
  'Garment Alterations & Reshaping': 'service_opt_alterations',
  'Ladies Suit Stitching': 'service_opt_stitching',
  'Intricate Embroidery': 'service_opt_embroidery',
  'General Inquiry': 'service_opt_general',
};

export default function ContactForm({ onClose, inDialog = false }) {
  const { locale } = useLocale();
  const { formData, formErrors, formSubmitted, handleInputChange, handleSubmit, resetForm } =
    useBooking();

  const serviceOptions = useMemo(
    () =>
      SERVICE_OPTIONS.map((option) => ({
        ...option,
        label: t(locale, SERVICE_LABEL_KEYS[option.value] ?? 'service_opt_general'),
      })),
    [locale]
  );

  const serviceLabel =
    serviceOptions.find((option) => option.value === formData.service)?.label ?? formData.service;

  const submit = (event) => {
    const valid = handleSubmit(event);
    if (valid && onClose) {
      resetForm();
      onClose();
    }
  };

  return (
    <Reveal>
      <Card padding="lg" elevation="lift" className="space-y-6 h-full">
        <div className={inDialog ? 'pr-10' : ''}>

             <SectionHeading
                  id="booking-form-title"
                  eyebrow={t(locale, 'form_eyebrow')}
                  title={t(locale, 'form_title')}
                  threadClassName="w-56"
                />

        </div>

        {formSubmitted ? (
          <div className="p-6 bg-canvas rounded-2xl border border-line-strong space-y-3 text-center">
            <div className="w-12 h-12 rounded-full bg-brand text-on-dark flex items-center justify-center mx-auto shadow-card">
              <Check className="w-6 h-6" aria-hidden="true" />
            </div>
            <h3
              id="booking-confirmation-title"
              className="font-serif text-xl font-semibold text-brand"
            >
              {t(locale, 'form_received')}
            </h3>
            <p className="text-xs sm:text-sm text-ink-soft">
              {t(locale, 'form_thank')} <strong>{formData.name}</strong>.{' '}
              {t(locale, 'form_will_call')} <strong>{formData.phone}</strong>{' '}
              {t(locale, 'form_regarding')} <em>{serviceLabel}</em> {t(locale, 'form_request')}
            </p>
            <div className="pt-2">
              <Button onClick={resetForm} size="snug">
                {t(locale, 'form_another')}
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={submit} className="space-y-4" noValidate>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field id="name" label={t(locale, 'form_name')} error={formErrors.name} errorId="name-error">
                <TextInput
                  name="name"
                  type="text"
                  required
                  autoFocus={inDialog}
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder={t(locale, 'form_name_ph')}
                  error={formErrors.name}
                  errorId="name-error"
                />
              </Field>

              <Field
                id="phone"
                label={t(locale, 'form_phone')}
                error={formErrors.phone}
                errorId="phone-error"
              >
                <TextInput
                  name="phone"
                  type="tel"
                  required
                  inputMode="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder={t(locale, 'form_phone_ph')}
                  error={formErrors.phone}
                  errorId="phone-error"
                />
              </Field>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field
                id="service"
                label={t(locale, 'form_service')}
                error={formErrors.service}
                errorId="service-error"
              >
                <Select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  options={serviceOptions}
                  error={formErrors.service}
                  errorId="service-error"
                />
              </Field>

              <Field
                id="preferredDate"
                label={t(locale, 'form_date')}
                error={formErrors.preferredDate}
                errorId="date-error"
              >
                <TextInput
                  name="preferredDate"
                  type="date"
                  value={formData.preferredDate}
                  onChange={handleInputChange}
                  error={formErrors.preferredDate}
                  errorId="date-error"
                />
              </Field>
            </div>

            <Field
              id="message"
              label={t(locale, 'form_details')}
              error={formErrors.message}
              errorId="message-error"
            >
              <Textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleInputChange}
                placeholder={t(locale, 'form_details_ph')}
                error={formErrors.message}
                errorId="message-error"
              />
            </Field>

            <Button type="submit" size="xl" elevation="lift" full caps>
              <Send className="w-4 h-4" aria-hidden="true" />
              {t(locale, 'form_submit')}
            </Button>
          </form>
        )}
      </Card>
    </Reveal>
  );
}
