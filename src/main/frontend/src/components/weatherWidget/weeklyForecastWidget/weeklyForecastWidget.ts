import { defineComponent, ref } from 'vue';
import { getWeeklyForecast } from '@/services/dataServices/getWeeklyWeatherForecast';

export default defineComponent({
  name: 'WeeklyForecastWidget',
  methods: {
    initWeeklyForecastWidget
  },
  mounted() { initWeeklyForecastWidget() },
  data() {
    return {
      items: items,
      ids: ids,
      content: content,
    }
  },
})

const items = ref(['Wochentag', 'Max Temp.', 'Min Temp.', 'Regen', 'Regen Zeit', 'Regenws.'])

const ids = ref([
  'dayForecastBox1',
  'dayForecastBox2',
  'dayForecastBox3',
  'dayForecastBox4',
  'dayForecastBox5',
])

const content = ref([
  ['Mo', 'weekDay centerContent'],
  ['.', 'temperature_2m_max centerContent'],
  ['.', 'temperature_2m_min centerContent'],
  ['.', 'rain_sum centerContent'],
  ['.', 'precipitation_hours centerContent'],
  ['.', 'precipitation_probability_max centerContent']
])

function initWeeklyForecastWidget() {
  refreshWeeklyForecast();

  // this.loopService.componentMethodCalled$.subscribe(() => {
  //   if (LoopTimings.minutelyReload) {
  //     refreshWeeklyForecast(this.getWeeklyWeatherForecastService);
  //   }
  // });

  function refreshWeeklyForecast() {
    const currDate: Date = new Date(Date.now())

    const weekDays: Array<string> = [];

    for (let i = 0; i < 5; i++) {
      let calcDate: Date = new Date(currDate.getTime() + 86400000 * i);

      weekDays.push(calcDate.toISOString().split("T")[0]);
    }

    let valuesAndBoxIDs: object = { weekDay: "weekDay", temperature_2m_max: "temperature_2m_max", temperature_2m_min: "temperature_2m_min", rain_sum: "rain_sum", precipitation_hours: "precipitation_hours", precipitation_probability_max: "precipitation_probability_max" };

    getWeeklyForecast(currDate, weekDays, "weeklyForecastHeader", valuesAndBoxIDs);
  }
}