import { plugin, defaultConfig } from '@formkit/vue'
import { setupCalendar } from 'v-calendar'
import localization from "@/localization"
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import "@/assets/main.scss"
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(plugin, defaultConfig)
app.use(setupCalendar, {})
app.use(createPinia())
app.use(localization)
app.use(router)

app.mount('#app')
