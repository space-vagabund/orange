import { createApp } from 'vue'
import App from './app/App.vue';
import router from './router';
import vuetify from './themes/vuetify';
import 'vuetify/styles';
import 'material-icons/iconfont/material-icons.css';
import store from './app/store';

createApp(App).use(vuetify).use(router).use(store).mount('#app');
