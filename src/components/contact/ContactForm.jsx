'use client';

import { Check, Send } from 'lucide-react';
import { useBooking } from '../../context/booking-context';
import { SERVICE_OPTIONS } from '../../data/content';
import StitchedThreadLine from '../brand/StitchedThreadLine';
import Button from '../ui/Button';
import Card from '../ui/Card';
import Eyebrow from '../ui/Eyebrow';
import Reveal from '../ui/Reveal';
import { Field, Select, Textarea, TextInput } from './FormControls';

export default function ContactForm() {
  const { formData, formErrors, formSubmitted, handleInputChange, handleSubmit, resetForm } =
    useBooking();

  return (
    <Reveal className="lg:col-span-7">
      <Card padding="lg" elevation="lift" className="space-y-6 h-full">
        <div>
          <Eyebrow>Schedule or Inquire</Eyebrow>
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-brand mt-1">
            Book a Fitting or Send a Note
          </h2>
          <StitchedThreadLine className="w-44 pt-1 text-silver" />
        </div>

        {formSubmitted ? (
          <div className="p-6 bg-canvas rounded-2xl border border-line-strong space-y-3 text-center">
            <div className="w-12 h-12 rounded-full bg-brand text-on-dark flex items-center justify-center mx-auto shadow-card">
              <Check className="w-6 h-6" aria-hidden="true" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-brand">Inquiry Received!</h3>
            <p className="text-xs sm:text-sm text-ink-soft">
              Thank you, <strong>{formData.name}</strong>. Master Tailor will call you shortly at{' '}
              <strong>{formData.phone}</strong> regarding your <em>{formData.service}</em> request.
            </p>
            <div className="pt-2">
              <Button onClick={resetForm} size="snug">
                Submit Another Inquiry
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field id="name" label="Your Full Name *" error={formErrors.name} errorId="name-error">
                <TextInput
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g. Radhika Sharma"
                  error={formErrors.name}
                  errorId="name-error"
                />
              </Field>

              <Field
                id="phone"
                label="Phone / WhatsApp *"
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
                  placeholder="+91 98765 43210"
                  error={formErrors.phone}
                  errorId="phone-error"
                />
              </Field>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field
                id="service"
                label="Select Tailoring Service *"
                error={formErrors.service}
                errorId="service-error"
              >
                <Select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  options={SERVICE_OPTIONS}
                  error={formErrors.service}
                  errorId="service-error"
                />
              </Field>

              <Field
                id="preferredDate"
                label="Preferred Fitting Date"
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
              label="Details / Specific Requirements"
              error={formErrors.message}
              errorId="message-error"
            >
              <Textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Describe your fabric, stitching pattern, or alteration requirements..."
                error={formErrors.message}
                errorId="message-error"
              />
            </Field>

            <Button type="submit" size="xl" elevation="lift" full caps>
              <Send className="w-4 h-4" aria-hidden="true" />
              Submit Fitting Inquiry
            </Button>
          </form>
        )}
      </Card>
    </Reveal>
  );
}
