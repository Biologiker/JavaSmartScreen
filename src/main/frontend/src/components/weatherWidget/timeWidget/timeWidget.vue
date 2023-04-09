<script src="./timeWidget.ts"/>
<style lang="scss" src="./timeWidget.scss"/>

<template>
  <div class="timeBox" @load="init()">
    <div class="hours">
      <div class="timeNumbers leftMiddle" id="hourLeft">0</div>
      <div class="timeNumbers rightMiddle" id="hourRight">0</div>
      <div class="timeNumbers leftDown" id="hourLeft2">0</div>
      <div class="timeNumbers rightDown " id="hourRight2">0</div>
    </div>
    <div class="tick">:</div>
    <div class="minutes">
      <div class="timeNumbers leftMiddle" id="minuteLeft">0</div>
      <div class="timeNumbers rightMiddle" id="minuteRight">0</div>
      <div class="timeNumbers leftDown" id="minuteLeft2">0</div>
      <div class="timeNumbers rightDown" id="minuteRight2">0</div>
    </div>
    <div class="tick">:</div>
    <div class="seconds">
      <div class="timeNumbers leftMiddle" id="secondLeft">0</div>
      <div class="timeNumbers rightMiddle" id="secondRight">0</div>
      <div class="timeNumbers leftDown" id="secondLeft2">0</div>
      <div class="timeNumbers rightDown" id="secondRight2">0</div>
    </div>
  </div>
</template>
