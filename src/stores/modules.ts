import { computed, reactive } from "vue";
import { defineStore } from "pinia";

import type { modual } from "@/types/types";
import { modualType } from "@/types/enums";

export const useModualStore = defineStore("moduals", () => {
  const modules: Array<modual> = reactive([]);

  const NFC = computed(() => modules.filter((v) => v.type == modualType.NFC));
  const Pi = computed(() => modules.filter((v) => v.type == modualType.PiZero));

  function addModule(module: modual): void {
    if (modules.findIndex((value) => value.id == module.id) > -1) {
      console.log("Object already added or ID taken");
      return;
    }
    modules.push(module);
  }

  function removeModule(module: modual): void {
    let index: number = modules.findIndex((value) => value.id == module.id);

    if (index == -1) {
      console.log("Object wasn't found");
      return;
    }

    modules.splice(index, 1);
    console.log("Object Removed");
  }

  return { NFC, Pi, addModule, removeModule };
});