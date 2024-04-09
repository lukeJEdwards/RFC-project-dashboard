<template>
  <svg
    width="34"
    height="26"
    viewBox="0 0 34 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 7.44346C9.83656 -1.3931 24.1634 -1.3931 33 7.44346M5.92298 12.3665C12.0406 6.24891 21.9592 6.24891 28.0768 12.3665M10.8462 17.2896C14.2448 13.8909 19.7552 13.8909 23.1539 17.2896M18.7406 23.4434C18.7406 24.4047 17.9613 25.184 17 25.184C16.0387 25.184 15.2594 24.4047 15.2594 23.4434C15.2594 22.4822 16.0387 21.7029 17 21.7029C17.9613 21.7029 18.7406 22.4822 18.7406 23.4434Z"
      :stroke="props.stroke"
      :fill="props.fill"
      stroke-linecap="round"
    />
  </svg>
</template>

<script setup lang="ts">
import type { svgProps } from "@/types/props";
const props = defineProps<svgProps>();
</script>
