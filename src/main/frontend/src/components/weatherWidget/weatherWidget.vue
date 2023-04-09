<script src="./weatherWidget.ts"/>
<style lang="scss" src="./weatherWidget.scss"/>

<template>
  <div ref="elWeatherWidget" :style="style"
    style="position: fixed; cursor: move; width: 100px; height: 100px; background-color: red;">dw</div>

  <div class="weatherBox" id="weatherBox">
    <div class="clockBox" id="test">
      <timeWidget></timeWidget>
      <!-- <app-mini-day-widget></app-mini-day-widget> -->
  </div>
    <div class="internWeatherBox">
      <!-- <app-hourly-forecast-widget></app-hourly-forecast-widget>
                                                                  <app-weekly-forecast-widget></app-weekly-forecast-widget> -->
    </div>
  </div>
</template>
