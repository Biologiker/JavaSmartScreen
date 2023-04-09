<script src="./weatherWidget" lang="ts" />
<style lang="scss" src="./weatherWidget.scss" />

<template>
  <div class="weatherBox" id="weatherBox" @mousedown="dragMouseDown($event, 'weatherBox', 'bigBox')">
    <div class=" clockBox" id="test">
      <timeWidget></timeWidget>
      <!-- <app-mini-day-widget></app-mini-day-widget> -->
  </div>
    <div class="internWeatherBox">
      <!-- <app-hourly-forecast-widget></app-hourly-forecast-widget>
                                                                                                                                                                                                                                                                                                                                  <app-weekly-forecast-widget></app-weekly-forecast-widget> -->
    </div>
  </div>
</template>
