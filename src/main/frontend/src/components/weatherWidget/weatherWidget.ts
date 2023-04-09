import { dragMouseDown } from '@/services/dragElement'
import { setPostionOfElement } from '@/services/elementPostionService'
import { defineComponent } from 'vue';

import timeWidget from './timeWidget/timeWidget.vue'
import miniDayWidget from './miniDayWidget/miniDayWidget.vue';
import weeklyForecastWidget from './weeklyForecastWidget/weeklyForecastWidget.vue';
import hourlyForecastWidget from './hourlyForecastWidget/hourlyForecastWidget.vue';

export default defineComponent({
  name: 'WeatherWidget',
  components: {
    timeWidget,
    miniDayWidget,
    weeklyForecastWidget,
    hourlyForecastWidget,
  },
  methods: {
    dragMouseDown,
  }
})

window.onload = () => setPostionOfElement('weatherBox');