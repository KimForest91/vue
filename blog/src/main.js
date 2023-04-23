import { createApp } from 'vue';
import App from './App.vue';
import VueRouter from './VueRouter.js';

import './assets/main.css';
import './assets/reset.css';
import './assets/base.css';

createApp(App).use(VueRouter).mount('#app');
