// Honour an explicit language URL and remember the visitor's choice.
(() => {
  const language = document.documentElement.lang;
  const explicit = new URLSearchParams(location.search).get('lang');
  let preferred = null;
  try {
    preferred = localStorage.getItem('data-atlas-language');
  } catch { /* Use the default when storage is disabled. */ }

  const requested = explicit === 'bg' || explicit === 'en' ? explicit : null;
  const useEnglishByDefault = language === 'bg' && preferred !== 'bg';
  const target = requested ?? (useEnglishByDefault ? 'en' : language);
  if (target !== language) {
    location.replace(document.documentElement.dataset.otherLanguageUrl + location.search + location.hash);
    return;
  }

  try {
    localStorage.setItem('data-atlas-language', language);
  } catch { /* Both languages remain available when storage is disabled. */ }
})();
