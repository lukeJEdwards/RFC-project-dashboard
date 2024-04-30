<template>
  <article @click="open = !open" class="module">
    <section class="title">
      <p>{{ moduleTitle }}</p>
      <component :is="moduleIcon" stroke="#27B973" />
    </section>
    <Transition>
      <section v-show="open" class="info">
        <p>ID: {{ props.tagId }}</p>
        <p>Video: {{ props.videoTitle }}</p>
      </section>
    </Transition>
  </article>
</template>

<script setup lang="ts">
import { ref, computed, type Ref } from "vue";

import pi from "./icons/pi.vue";
import signal from "./icons/signal.vue";

import type { modualProps } from "@/types/props";
import { modualType } from "@/types/enums";

const props = withDefaults(defineProps<modualProps>(), {
  videoTitle: "Null",
});
const open: Ref<boolean> = ref(false);

const moduleTitle = computed(() => {
  switch (props.modualType) {
    case modualType.NFC:
      return `RFC reader ${props.id}`;
    case modualType.PiZero:
      return `Pi Zero - ${props.id}`;
  }
});

const moduleIcon = computed(() => {
  switch (props.modualType) {
    case modualType.NFC:
      return signal;
    case modualType.PiZero:
      return pi;
  }
});
</script>
