<template>
  <div class="flex row">
    <div class="flex flex-col">
      <h5>Sun (default)</h5>
      <va-date-picker stateful />
    </div>
    <div class="flex flex-col">
      <h5>Monday</h5>
      <va-date-picker stateful first-weekday="Monday" />
    </div>
  </div>
</template>
