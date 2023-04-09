import timeWidget from './timeWidget/timeWidget.vue'
import { useDraggable } from '@vueuse/core'
import { ref } from 'vue'
import { setPostionOfElement, inputPostionOfElement } from '@/services/elementPostionService';

export default {
  components: {
    timeWidget,
  },
  data() {
    return {
      style: style,
    }
  },
}

const elWeatherWidget = ref(null)

const { style } = useDraggable(elWeatherWidget, {
  initialValue: { x: 500, y: 500 },
})

console.log(style);


// setPostionOfElement("dwdw");