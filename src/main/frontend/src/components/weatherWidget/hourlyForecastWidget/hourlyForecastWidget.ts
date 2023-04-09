import { defineComponent } from 'vue';
import { getHourlyForecast } from '@/services/dataServices/getHourlyWeatherForecast';

export default defineComponent({
  name: 'HourlyForecastWidget',
  methods: {
    initHourlyForecastWidget
  },
  mounted() { initHourlyForecastWidget() },
  data() {
    return {
      forecastBoxes: forecastBoxes,
    }
  },
})

const forecastBoxes = [
  'forecastBox1',
  'forecastBox2',
  'forecastBox3',
  'forecastBox4',
  'forecastBox5',
  'forecastBox6',
];

export function initHourlyForecastWidget() {
  refreshHourlyForecast();

  // this.loopService.componentMethodCalled$.subscribe(() => {
  //   if (LoopTimings.minutelyReload) {
  //     refreshHourlyForecast();
  //   }
  // });

  function refreshHourlyForecast() {
    const currDate: Date = new Date(Date.now())
    const currentHour: number = currDate.getHours();

    const hours: Array<number> = [];

    for (let i = 0; i < 6; i++) {
      hours.push(currentHour + i);
    }

    let valuesAndBoxIDs: object = { temperature_2m: "degreesBox", rain: "rainPossibility", hour: "weatherTimeBox", weatherImage: "smallWeatherImage" };

    getHourlyForecast(hours, "dateBox", valuesAndBoxIDs);
  }
}