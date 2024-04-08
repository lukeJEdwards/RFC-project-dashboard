<template>
  <article @click="open = !open">
    <section>
      <h3>RFC reader {{ props.count }}</h3>
      <signalIcon :color="props.connection" />
    </section>
    <section v-show="open">
      <p>{{ props.id }}</p>
      <p>{{ props.videoTitle }}</p>
    </section>
  </article>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { NFCProps } from "@/types/props";
import type { Ref } from "vue";

import signalIcon from "@/components/icons/signal.vue";

const props = defineProps<NFCProps>();
const open: Ref<boolean> = ref(true);
</script>

<style scoped>
article {
  width: fit-content;
  min-width: 225px;
  padding: 32px;
  justify-content: center;
  align-items: center;

  border-radius: var(--Roundness-Round-Inside, 6px);
  border: 1px solid var(--Stroke-Dark-Base, #323539);
  background: var(--Background-Dark-Base-Second, #252525);
}
article:hover {
  cursor: pointer;
}
p {
  color: #979aa0;
}
h3 {
  color: #fff;
}
section:first-child {
  display: flex;
  justify-content: space-between;
}
</style>
