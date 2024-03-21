import '@/styles/main.scss'
import { createVuetify } from 'vuetify';
import '@mdi/font/css/materialdesignicons.css';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

export default createVuetify({
  components,
  directives,

  theme: {
    defaultTheme: 'dark'
  },
  defaults: {
    VBtn: {},
    VCard: {
      rounded: 'md'
    }
  }
});