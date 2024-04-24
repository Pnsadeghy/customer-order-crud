import { plugin, defaultConfig } from '@formkit/vue'
import appFilters from "@/utils/filters.utils"
import { setupCalendar } from 'v-calendar'
import localization from "@/localization"
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import router from './router'
import "@/assets/main.scss"
import App from './App.vue'

const app = createApp(App)
app.use(plugin, defaultConfig)
app.use(setupCalendar, {})
app.use(createPinia())
app.use(localization)
app.use(router)

app.config.globalProperties.$filters = appFilters

app.mount('#app')
