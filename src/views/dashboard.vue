<template>
  <div>
    <NFC
      :count="1"
      id="04 9C 64 D2 45 2B 80"
      video-title="video.mp4"
      :connection="connection.connected"
    />
  </div>
</template>

<script setup lang="ts">
import { connection } from "@/types/enums";
import NFC from "@/components/NFC.vue";
</script>

<style scoped></style>
