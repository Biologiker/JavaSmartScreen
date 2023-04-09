import axios, { AxiosResponse } from "axios";
import { WeatherApiData } from "@/types/weatherApiIntefaces";

export async function getWeeklyForecast(currDate: Date, weekDays: Array<string>, weeklyForecastHeaderID: string, boxesToFill: object) {
  const todayDate: string = currDate.toISOString().split("T")[0];
  const futureDate: string = (new Date(currDate.getTime() + 86400000 * 15)).toISOString().split("T")[0];

  const lat: number = 52.50;
  const lon: number = 9.46;
  const data: string = "weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,uv_index_clear_sky_max,precipitation_sum,rain_sum,showers_sum,snowfall_sum,precipitation_hours,precipitation_probability_max,windspeed_10m_max,windgusts_10m_max,winddirection_10m_dominant,shortwave_radiation_sum,et0_fao_evapotranspiration";
  const timeZone: string = "Europe%2FBerlin"

  if (document.getElementById(weeklyForecastHeaderID)) {
    const header: Element = document.getElementById(weeklyForecastHeaderID)!;

    header.innerHTML = new Date(weekDays[0]).toLocaleDateString('de-DE') + " - " + new Date(weekDays[weekDays.length - 1]).toLocaleDateString('de-DE');
  }

  const url: string = 'https://api.open-meteo.com/v1/forecast?latitude=' + lat + '&longitude=' + lon + '&daily=' + data + '&timezone=' + timeZone +
    '&start_date=' + todayDate + '&end_date=' + futureDate

  let response: AxiosResponse = await axios.get(url);
  let responseData: WeatherApiData = response.data;

  setData(responseData, weekDays, currDate, boxesToFill)
}

function setData(data: any, weekDays: Array<string>, currDate: Date, boxesToFill: object) {
  const usableData: any = data.daily;

  weekDays.forEach(function (value) {
    const index: number = usableData.time.indexOf(value)

    //this maps weekdays to ids coming from date.getUTCDay()
    const weekDaysMap = new Map([
      [0, 'So'],
      [1, 'Mo'],
      [2, 'Di'],
      [3, 'Mi'],
      [4, 'Do'],
      [5, 'Fr'],
      [6, 'Sa']
    ]);

    const myMap = new Map([
      ["weekDay", ""],
      ["temperature_2m_max", "°"],
      ["temperature_2m_min", "°"],
      ["rain_sum", ""],
      ["precipitation_hours", "h"],
      ["precipitation_probability_max", "%"]
    ]);

    for (const i in boxesToFill) {
      let value: string;
      const element: Element = document.getElementsByClassName(i)[index];

      if (i === "weekDay") {
        const date: Date = new Date(currDate.getTime() + 86400000 * index);
        value = weekDaysMap.get(date.getUTCDay())!.toString();
      } else {
        value = usableData[i][index].toString();
      }

      if (myMap.get(i) != undefined) {
        value += myMap.get(i);
      }

      element.innerHTML = value;
    }
  });
}