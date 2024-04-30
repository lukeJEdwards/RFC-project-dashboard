import { computed, ref, type Ref } from "vue";
import { defineStore } from "pinia";

export const useStore = defineStore("store", () => {
  const fullscreen: Ref<boolean> = ref(false);

  const hideElement = computed(() => !fullscreen.value);

  function toggleFullscreen() {
    fullscreen.value = !fullscreen.value;
  }

  return { fullscreen, hideElement, toggleFullscreen };
});
