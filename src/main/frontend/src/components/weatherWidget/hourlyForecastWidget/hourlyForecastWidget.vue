<script src="./hourlyForecastWidget.ts" />
<style lang="scss" src="./hourlyForecastWidget.scss" />

<template>
  <div class="currentWeatherBox">
    <div class="dateBox centerContent" id="dateBox"></div>
    <div v-for="(i) in forecastBoxes" :id=i class="forecastBox centerContent">
      <div class="weatherTimeBox centerContent"></div>
      <div class="smallWeatherImageBox centerContent">
        <img alt="smallWeatherImage" class="smallWeatherImage">
      </div>
      <div class="degreesBox centerContent"></div>
      <div class="rainPossibility centerContent"></div>
    </div>
  </div>
</template>