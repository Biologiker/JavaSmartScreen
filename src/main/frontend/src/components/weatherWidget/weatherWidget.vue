<script src="./weatherWidget.ts" />
<style lang="scss" src="./weatherWidget.scss" />

<template>
  <div class="weatherBox" id="weatherBox" @mousedown="dragMouseDown($event, 'weatherBox', 'bigBox')">
    <div class=" clockBox" id="test">
      <timeWidget />
      <miniDayWidget />
    </div>
  <div class="internWeatherBox">
      <weeklyForecastWidget />
      <!-- <app-hourly-forecast-widget></app-hourly-forecast-widget>
                                                                                                                                                                                                                                                                                                                                              <app-weekly-forecast-widget></app-weekly-forecast-widget> -->
    </div>
  </div>
</template>
