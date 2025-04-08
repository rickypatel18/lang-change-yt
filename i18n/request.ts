// import { getRequestConfig } from "next-intl/server";
// import { Locale, routing } from "./routing";

// export default getRequestConfig(async ({ requestLocale }) => {
//   // This typically corresponds to the `[locale]` segment
//   let locale = await requestLocale;

//   // Ensure that a valid locale is used
//   if (!locale || !routing.locales.includes(locale as Locale)) {
//     locale = routing.defaultLocale;
//   }

//   return {
//     locale,
//     messages: (await import(`@/messages/${locale}.json`)).default,
//   };
// });



import { getRequestConfig } from "next-intl/server";
import { Locale, routing } from "./routing";
import en from "@/messages/en.json";
import de from "@/messages/de.json";
import fr from "@/messages/fr.json";

const messagesMap: Record<Locale, any> = {
  en,
  de,
  fr
};

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as Locale)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: messagesMap[locale as Locale],
  };
});
