'use client';

import { useCallback, useMemo, useState } from 'react';
import { WHATSAPP_MESSAGES, waLink } from '../config/site';
import { DEFAULT_SERVICE } from '../data/content';
import { scrollToSection } from '../lib/scroll';

import { BookingContext } from './booking-context';

const createInitialForm = () => ({
  name: '',
  phone: '',
  service: DEFAULT_SERVICE,
  preferredDate: '',
  message: '',
});

const buildInquiryMessage = (data) =>
  [
    WHATSAPP_MESSAGES.fitting,
    '',
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    `Service: ${data.service}`,
    `Preferred fitting date: ${data.preferredDate || 'Flexible'}`,
    `Requirements: ${data.message}`,
  ].join('\n');

/* Owns the fitting-inquiry form so any section can pre-fill and jump to it. */
export function BookingProvider({ children }) {
  const [formData, setFormData] = useState(createInitialForm);
  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = useCallback((event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => (prev[name] ? { ...prev, [name]: undefined } : prev));
  }, []);

  const validate = useCallback(() => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = 'Please tell us your name.';
    } else if (formData.name.trim().length < 2) {
      errors.name = 'Name looks too short.';
    }

    const digits = formData.phone.replace(/\D/g, '');
    if (!digits) {
      errors.phone = 'A phone or WhatsApp number is required.';
    } else if (digits.length < 8 || digits.length > 15) {
      errors.phone = 'Enter a valid phone number.';
    }

    if (!formData.service) {
      errors.service = 'Choose a service.';
    }

    if (formData.preferredDate) {
      const chosen = new Date(`${formData.preferredDate}T00:00:00`);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (chosen < today) {
        errors.preferredDate = 'Please pick today or a future date.';
      }
    }

    if (formData.message.trim().length < 10) {
      errors.message = 'Add a little more detail about the garment.';
    }

    return errors;
  }, [formData]);

  const handleSubmit = useCallback(
    (event) => {
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

  const selectService = useCallback((service) => {
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

