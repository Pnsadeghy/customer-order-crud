import { createI18n } from 'vue-i18n'
import en from "./i18n/en.json"

const i18n = createI18n({
    locale: "en",
    legacy: false,
    fallbackLocale: "en",
    messages: {
        en
    }
})

export default i18n