// lib/gtag.ts
// Google Analytics utility functions
export const GA_TRACKING_ID = 'G-4VQMLEWL7N';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('config', GA_TRACKING_ID, {
      page_location: url,
    });
  }
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: {
  action: string;
  category: string;
  label: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Generic event function for custom tracking
export const trackEvent = (action: string, params: { [key: string]: any }) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', action, params);
  }
};

export const handleQuizAnswer = (
  quizTitle: string,
  questionIndex: number,
  correct: boolean
) => {
  trackEvent('quiz_answered', {
    quiz_title: quizTitle,
    question_index: questionIndex,
    correct: correct,
  });
};

export const handleQuizFinished = (quizTitle: string, score: number, total: number) => {
  trackEvent('quiz_finished', {
    quiz_title: quizTitle,
    score,
    total,
  });
};

export const handleVocabSaved = (word: string) => {
  trackEvent("vocab_saved", {
    word,
  });
};

export const handleQuizReadComplete = (quizTitle: string) => {
  trackEvent('quiz_read_complete', {
    quiz_title: quizTitle,
  });
};

// Declare gtag on window object
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js',
      targetId: string,
      config?: Record<string, any>
    ) => void;
  }
}
