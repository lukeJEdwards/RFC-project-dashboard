import { computed, reactive } from "vue";
import { defineStore } from "pinia";

import type { modual } from "@/types/types";

export const useStore = defineStore("moduals", () => {
  const readers: Map<String, modual> = reactive(new Map<String, modual>());

  const readerCount = computed(() => readers.size);

  function addReader(reader: modual) {
    if (readers.has(reader.id)) {
      console.log("Reader id already added");
      return;
    }

    readers.set(reader.id, reactive(reader));
  }

  function removeReader(reader: modual) {
    if (!readers.has(reader.id)) {
      console.log("Reader doesn't exist");
      return;
    }
    readers.delete(reader.id);
  }

  return { readers, readerCount, addReader, removeReader };
});
