import weatherWidget from '../weatherWidget/weatherWidget.vue'
import { initLoop } from '../../services/loopService'

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Index',
  components: {
    weatherWidget,
  }
});

initLoop();