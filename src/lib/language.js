export const SUPPORTED_LANGUAGES = ["en", "es"];

export function validateLanguage(lang) {
  return SUPPORTED_LANGUAGES.includes(lang) ? lang : "en";
}

export async function getDictionary(lang) {
  const validLang = validateLanguage(lang);
  return import(`@/app/dictionaries/${validLang}.json`).then(m => m.default);
}
