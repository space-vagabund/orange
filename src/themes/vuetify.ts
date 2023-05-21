import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives';
import paragraphTheme from './paragraph';

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'paragraphTheme',
    themes: {
      paragraphTheme,
    },
  },
  components,
  directives,
});

export default vuetify