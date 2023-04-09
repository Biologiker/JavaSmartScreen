import timeWidget from './timeWidget/timeWidget.vue'
import { dragMouseDown } from '@/services/dragElement'
import { setPostionOfElement } from '@/services/elementPostionService'

export default {
  components: {
    timeWidget,
  },
  // data() {
  //   return {
  //     count: 0,
  //     count2: 0
  //   }
  // }
  methods: {
    dragMouseDown,
  }
}

window.onload = () => setPostionOfElement('weatherBox');