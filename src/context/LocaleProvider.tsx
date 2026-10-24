'use client';

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

export type Locale = 'en' | 'hi' | 'mr' | 'hinglish';

const HTML_LANG: Record<Locale, string> = {
  en: 'en-IN',
  hi: 'hi',
  mr: 'mr',
  hinglish: 'hi-Latn',
};

const isLocale = (value: string | null): value is Locale =>
  value === 'en' || value === 'hi' || value === 'mr' || value === 'hinglish';

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

const STORAGE_KEY = 'kohinoor-locale';

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLocale(stored)) {
      setLocaleState(stored);
      document.documentElement.lang = HTML_LANG[stored];
    }
  }, []);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, next);
      document.documentElement.lang = HTML_LANG[next];
    }
  };

  const value = useMemo(() => ({ locale, setLocale }), [locale]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider');
  return ctx;
}
