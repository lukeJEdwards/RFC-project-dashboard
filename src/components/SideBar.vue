<template>
  <div>
    <h1>My modules</h1>
    <div>
      <Modual
        id="0"
        tagId=""
        :modualType="modualType.NFC"
        videoTitle="video.mp4"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Modual from "./Modual.vue";
import { modualType } from "@/types/enums";
</script>
