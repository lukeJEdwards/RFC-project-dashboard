<template>
  <article @click="open = !open">
    <section>
      <h3>Pi zero - {{ props.id }}</h3>
      <Pi :fill="props.statusColor" />
    </section>
    <section v-show="open">
      <p>{{ props.tagId }}</p>
      <p>{{ props.videoTitle }}</p>
    </section>
  </article>
</template>

<script setup lang="ts">
import type { Ref } from "vue";
import type { modelProps } from "@/types/props";

import Pi from "@/components/icons/pi.vue";
import { ref } from "vue";

const open: Ref<boolean> = ref(false);

const props = withDefaults(defineProps<modelProps>(), {
  statusColor: "#E33B32",
  videoTitle: "video.mp4",
});
</script>
