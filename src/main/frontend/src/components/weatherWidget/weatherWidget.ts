import { dragMouseDown } from '@/services/dragElement'
import { setPostionOfElement } from '@/services/elementPostionService'
import { defineComponent } from 'vue';

import timeWidget from './timeWidget/timeWidget.vue'
import miniDayWidget from './miniDayWidget/miniDayWidget.vue';

export default defineComponent({
  name: 'WeatherWidget',
  components: {
    timeWidget,
    miniDayWidget,
  },
  methods: {
    dragMouseDown,
  }
})

window.onload = () => setPostionOfElement('weatherBox');