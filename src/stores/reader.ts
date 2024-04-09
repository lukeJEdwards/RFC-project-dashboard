import { computed, reactive } from "vue";
import { defineStore } from "pinia";

import type { reader } from "@/types/types";

export const useReaderStore = defineStore("Readers", () => {
  const readers: Map<String, reader> = reactive(new Map<String, reader>());

  const readerCount = computed(() => readers.size);

  function addReader(reader: reader) {
    if (readers.has(reader.id)) {
      console.log("Reader id already added");
      return;
    }

    readers.set(reader.id, reactive(reader));
  }

  function removeReader(reader: reader) {
    if (!readers.has(reader.id)) {
      console.log("Reader doesn't exist");
      return;
    }
    readers.delete(reader.id);
  }

  return { readers, readerCount, addReader, removeReader };
});
