import timeWidget from './timeWidget/timeWidget.vue'
import { dragMouseDown } from '@/services/dragElement'
import { setPostionOfElement } from '@/services/elementPostionService'
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WeatherWidget',
  components: {
    timeWidget,
  },
  methods: {
    dragMouseDown,
  }
})

window.onload = () => setPostionOfElement('weatherBox');