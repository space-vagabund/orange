import { createApp } from 'vue'
import App from './App.vue';
import router from './router';
import vuetify from './themes/vuetify';
import 'vuetify/styles';

createApp(App).use(vuetify).use(router).mount('#app');
