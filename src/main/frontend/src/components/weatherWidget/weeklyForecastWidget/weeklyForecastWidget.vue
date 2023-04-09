<script src="./weeklyForecastWidget.ts" />

<style lang="scss" src="./weeklyForecastWidget.scss" />

<template>
  <div class="weatherForeCastBox">
    <div class="dayForecastTextBox centerContent" id="weeklyForecastHeader">Weekly Forecast</div>
    <div class="dayLegendeBox centerContent" id="dayLegendeBox">
      <div class="dayLegende" id="dayLegende">
        <div v-for='(item) in items'>
          {{ item }}
        </div>
      </div>
    </div>
    <div v-for='(id) in ids' :id=id class="dayForecastBox centerContent">
      <div class="weekDayForecast">
        <div v-for="(item) in content" :class=item[1]>{{ item[0] }}</div>
      </div>
    </div>
  </div>
</template>