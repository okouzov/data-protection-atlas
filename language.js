// Honour an explicit language URL, otherwise remember the visitor's choice.
(() => {
  try {
    const language = document.documentElement.lang;
    const explicit = new URLSearchParams(location.search).get('lang');
    const preferred = localStorage.getItem('data-atlas-language');
    if ((explicit === 'bg' || explicit === 'en') && explicit !== language) {
      localStorage.setItem('data-atlas-language', explicit);
      location.replace(document.documentElement.dataset.otherLanguageUrl + location.search + location.hash);
    } else if (language === 'bg' && !explicit && preferred === 'en') {
      location.replace(document.documentElement.dataset.otherLanguageUrl + location.hash);
    } else {
      localStorage.setItem('data-atlas-language', language);
    }
  } catch { /* Both languages remain available when storage is disabled. */ }
})();
