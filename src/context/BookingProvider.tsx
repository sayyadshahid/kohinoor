'use client';

import {
  useCallback,
  useMemo,
  useState,
  type ChangeEvent,
  type FormEvent,
  type ReactNode,
} from 'react';
import { WHATSAPP_MESSAGES, waLink } from '../config/site';
import { useLocale } from './LocaleProvider';
import { t } from '../data/i18n/dict';
import { DEFAULT_SERVICE } from '../data/content';
import { scrollToSection } from '../lib/scroll';

import { BookingContext } from './booking-context';

type BookingForm = {
  name: string;
  phone: string;
  service: string;
  preferredDate: string;
  message: string;
};

type FormErrors = Partial<Record<keyof BookingForm, string>>;

const createInitialForm = (): BookingForm => ({
  name: '',
  phone: '',
  service: DEFAULT_SERVICE,
  preferredDate: '',
  message: '',
});

const buildInquiryMessage = (data: BookingForm) =>
  [
    WHATSAPP_MESSAGES.fitting,
    '',
    `Naam: ${data.name}`,
    `Phone: ${data.phone}`,
    `Service: ${data.service}`,
    `Fitting ki date: ${data.preferredDate || 'Koi bhi din chalega'}`,
    `Requirements: ${data.message}`,
  ].join('\n');

/* Owns the fitting-inquiry form so any section can pre-fill and jump to it. */
export function BookingProvider({ children }: { children: ReactNode }) {
  const { locale } = useLocale();
  const [formData, setFormData] = useState<BookingForm>(createInitialForm);
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = event.target;
      const field = name as keyof BookingForm;
      setFormData((prev) => ({ ...prev, [field]: value }));
      setFormErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev));
    },
    []
  );

  const validate = useCallback(() => {
    const errors: FormErrors = {};

    if (!formData.name.trim()) {
      errors.name = t(locale, 'form_err_name_req');
    } else if (formData.name.trim().length < 2) {
      errors.name = t(locale, 'form_err_name_short');
    }

    const digits = formData.phone.replace(/\D/g, '');
    if (!digits) {
      errors.phone = t(locale, 'form_err_phone_req');
    } else if (digits.length < 8 || digits.length > 15) {
      errors.phone = t(locale, 'form_err_phone_invalid');
    }

    if (!formData.service) {
      errors.service = t(locale, 'form_err_service_req');
    }

    if (formData.preferredDate) {
      const chosen = new Date(`${formData.preferredDate}T00:00:00`);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (chosen < today) {
        errors.preferredDate = t(locale, 'form_err_date_past');
      }
    }

    if (formData.message.trim().length < 10) {
      errors.message = t(locale, 'form_err_msg_short');
    }

    return errors;
  }, [formData, locale]);

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const errors = validate();
      setFormErrors(errors);

      const firstError = Object.keys(errors)[0];
      if (firstError) {
        const field = document.getElementById(firstError);
        if (field) field.focus();
        return false;
      }

      setFormSubmitted(true);
      if (typeof window !== 'undefined') {
        window.open(waLink(buildInquiryMessage(formData)), '_blank', 'noopener,noreferrer');
      }
      return true;
    },
    [formData, validate]
  );

  const resetForm = useCallback(() => {
    setFormData(createInitialForm());
    setFormErrors({});
    setFormSubmitted(false);
  }, []);

  const selectService = useCallback((service: string) => {
    setFormData((prev) => ({ ...prev, service }));
    setFormSubmitted(false);
    scrollToSection('contact');
  }, []);

  const value = useMemo(
    () => ({
      formData,
      formErrors,
      formSubmitted,
      handleInputChange,
      handleSubmit,
      resetForm,
      selectService,
    }),
    [formData, formErrors, formSubmitted, handleInputChange, handleSubmit, resetForm, selectService]
  );

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>;
}

