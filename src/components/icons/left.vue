<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M19 12H5.99997M11 6L5.70708 11.2929C5.31655 11.6834 5.31655 12.3166 5.70708 12.7071L11 18"
      :stroke="props.stroke"
      :fill="props.fill"
      stroke-width="2"
      stroke-linecap="round"
    />
  </svg>
</template>

<script setup lang="ts">
import type { svgProps } from "@/types/props";
const props = defineProps<svgProps>();
</script>
