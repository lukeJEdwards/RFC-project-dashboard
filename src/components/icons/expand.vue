<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
  >
    <path
      d="M1 7.85714V2.21218C1 1.54271 1.54271 1 2.21218 1H7.85714M18.1429 1H23.7878C24.4573 1 25 1.54272 25 2.21218V7.85714M18.1429 25H23.7878C24.4573 25 25 24.4573 25 23.7878V18.1429M1 18.1429V23.7878C1 24.4573 1.54271 25 2.21218 25H7.85714M16.4286 9.57143L23.2857 2.71429M9.57143 9.57143L2.71429 2.71429M16.4286 16.4286L23.2857 23.2857M9.57143 16.4286L2.71429 23.2857"
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
