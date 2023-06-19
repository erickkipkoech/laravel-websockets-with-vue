import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
 import Pusher from 'pusher-js';
 import Echo from 'laravel-echo'
 window.Pusher = Pusher;

 window.Echo = new Echo({
     broadcaster: 'pusher',
     key: import.meta.env.VITE_PUSHER_APP_KEY,
     cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER ?? 'mt1',
     wsHost: import.meta.env.VITE_PUSHER_HOST ? import.meta.env.VITE_PUSHER_HOST : `ws-${import.meta.env.VITE_PUSHER_APP_CLUSTER}.pusher.com`,
     wsPort: import.meta.env.VITE_PUSHER_PORT ?? 6001,
     wssPort: import.meta.env.VITE_PUSHER_PORT ?? 443,
     forceTLS: (import.meta.env.VITE_PUSHER_SCHEME ?? 'https') === 'https',
     enabledTransports: ['ws', 'wss'],
     disableStats:true,
 });

app.use(createPinia())
app.use(router)

app.mount('#app')
