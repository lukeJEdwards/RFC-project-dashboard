<template>
  <RouterView name="modules" v-if="hideElement" />
  <div class="viewport" @keydown.enter.shift.exact.prevent="toggleFullscreen">
    <Nav v-if="hideElement" />
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import Nav from "@/components/nav.vue";
import { useStore } from "@/stores/store";

import { useMagicKeys } from "@vueuse/core";
import { RouterView } from "vue-router";
import { storeToRefs } from "pinia";
import { watch } from "vue";

const { toggleFullscreen } = useStore();
const { hideElement } = storeToRefs(useStore());

const keys = useMagicKeys();
const shiftEnter = keys["Shift+Enter"];

watch(shiftEnter, (v) => {
  if (v) toggleFullscreen();
});
</script>

<style scoped></style>
