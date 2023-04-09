import axios, { AxiosResponse } from "axios";
import { hourlyForecastData } from "@/types/weatherApiIntefaces";

export async function getHourlyForecast(hour: Array<number>, dateBox: string, className: object) {
  //todo: get these values by ip or from userinput
  const lat: number = 52.50;
  const lon: number = 9.46;
  const timeZone: string = "Europe%2FBerlin"
  //this is the data that is supposed to come back from the api
  const data: string = "temperature_2m,relativehumidity_2m,rain,snowfall,snow_depth,weathercode,visibility,weathercode";

  //this is the Api string thats getting added together
  const url: string = 'https://api.open-meteo.com/v1/forecast?latitude=' + lat + '&longitude=' + lon + '&hourly=' + data + '&timezone=' + timeZone

  let response: AxiosResponse = await axios.get(url);
  let responseData: hourlyForecastData = response.data;

  setdata(responseData, hour, dateBox, className);
}

function setdata(data: any, hour: Array<number>, dateBox: string, className: object) { //nosonar
  const usableData = data.hourly;

  //the timer counts the itterations of the for loop so i can change the picked html element from a htmlClassList
  let timer: number = 0;

  const date = Date.now();
  const today = new Date(date).getDate();
  //one day is 86400000 milliseconds
  const tomorrow = new Date(date + 86400000).getDate();

  if (document.getElementById(dateBox)) {
    //this is for the date for the page header
    const todayDate: string = new Date(date).toLocaleDateString('de-DE');

    document.getElementById(dateBox)!.innerHTML = todayDate;
  }

  hour.forEach(function (value) {
    let time: string
    let hourString: string = value.toString()

    if (value < 24) {
      //the hour value has to be formatted as e.g. 01 instead of just 1
      let insertValue: string = value < 10 ? "0" + hourString : hourString

      time = usableData.time[0].replace("00:00", insertValue + ":00");
    }
    else {
      //if the necessary data is after 0h i have to use the next day for building the string
      hourString = (value - 24).toString()
      let insertValue: string = (value - 24) < 10 ? "0" + hourString : hourString

      time = usableData.time[0].replace("00:00", insertValue + ":00").replace(today + "T" + value, tomorrow + "T" + value);
    }

    //to get the data from the correct time the time string is used to get the index of the other values
    const index = usableData.time.indexOf(time);

    for (const i in className) {
      let suffix: string = "";
      const element: Element = document.getElementsByClassName(className[i as keyof typeof className]!)[timer];

      if (i.match("temperature") != null) {
        suffix = "°";
      } else if (i.match("rain") != null) {
        suffix = "%";
      }

      let dataString: string = "";

      //most numerical values can be handled the same way
      if (usableData[i as keyof typeof className]) {
        dataString = usableData[i as keyof typeof className]![index] + suffix;
      }
      else if (i === "hour") {
        dataString = hourString + ":00";
      }
      else if (i === "weatherImage") {
        //this map represent the weathercodes from the api and additional images, descriptions and keys
        const weatherCodeMap = new Map([
          [0, ['clearSky', 'Klarer Himmel', '01d.png', '01n.png']],
          [1, ['mainlyClear', 'Überwiegend klar', '02d.png', '02n.png']],
          [2, ['partlyCloudy', 'Teilweise bewölkt', '03d.png', '03n.png']],
          [3, ['overCast', 'Bedeckt', '04d.png', '04n.png']],
          [45, ['fog', 'Nebel', '50d.png', '50n.png']],
          [48, ['depositingRimeFog', 'Raureif', '50d.png', '50n.png']],
          [51, ['drizzleLight', 'Leichter Nieselregen', '09d.png', '09n.png']],
          [53, ['drizzleModerate', 'Mäßiger Nieselregen', '09d.png', '09n.png']],
          [55, ['drizzleHeavy', 'Heftiger Nieselregen', '09d.png', '09n.png']],
          [56, ['freezingDrizzleLight', 'Leichter gefrierender Nieselregen', '13d.png', '13n.png']],
          [57, ['freezingDrizzleHeavy', 'Heftiger gefrierender Nieselregen', '13d.png', '13n.png']],
          [61, ['rainSlight', 'Leichter Regen', '10d.png', '10n.png']],
          [63, ['rainModerate', 'Mäßiger Regen', '10d.png', '10n.png']],
          [65, ['rainHeavy', 'Heftiger Regen', '10d.png', '10n.png']],
          [66, ['freezingRainLight', 'Leichter gefrierender Regen', '13d.png', '13n.png']],
          [67, ['freezingRainHeavy', 'Heftiger gefrierender Regen', '13d.png', '13n.png']],
          [71, ['snowSlight', 'Leichter Schneefall', '13d.png', '13n.png']],
          [73, ['snowModerate', 'Mäßiger Schneefall', '13d.png', '13n.png']],
          [75, ['snowHeavy', 'Heftiger Schneefall', '13d.png', '13n.png']],
          [77, ['snowGrains', 'Schneekörner', '13d.png', '13n.png']],
          [80, ['rainShowersSlight', 'Leichte Regenschauer', '09d.png', '09n.png']],
          [81, ['rainShowersModerate', 'Mäßige Regenschauer', '09d.png', '09n.png']],
          [82, ['rainShowersViolent', 'Heftige Regenschauer', '09d.png', '09n.png']],
          [85, ['snowShowersSlight', 'Leichte Schneeschauer', '13d.png', '13n.png']],
          [86, ['snowShowersHeavy', 'Heftige Schneeschauer', '13d.png', '13n.png']],
          [95, ['thunderstormSlightModerate', 'Gewitter mit geringer bis mäßiger Intensität', '11d.png', '11n.png']],
          [96, ['thunderstormWithSlightHail', 'Gewitter mit leichtem Hagel', '11d.png', '11n.png']],
          [99, ['thunderstormWithHeavyHail', 'Gewitter mit Heftigem Hagel', '11d.png', '11n.png']]
        ]);

        let dayOrNight

        if (parseInt(hourString) < 7 || parseInt(hourString) > 18) {
          dayOrNight = 3
        }
        else {
          dayOrNight = 2
        }

        const weatherCode = usableData["weathercode"]![index];

        if (weatherCodeMap.get(weatherCode)) {
          const imageElement: HTMLImageElement = element as HTMLImageElement;

          imageElement.alt = weatherCodeMap.get(weatherCode)![1];
          imageElement.title = weatherCodeMap.get(weatherCode)![1];
          imageElement.src = "https://openweathermap.org/img/wn/" + weatherCodeMap.get(weatherCode)![dayOrNight];
        }

        //the rest of the logic is not needed for the images
        break;
      }

      if (className[i as keyof typeof className]) {
        element.innerHTML = dataString
      }
    }

    timer++;
  });
}
