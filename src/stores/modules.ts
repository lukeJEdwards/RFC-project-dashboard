import { computed, reactive, ref, type Ref } from "vue";
import { defineStore } from "pinia";

import type { modual } from "@/types/types";
import { modualType } from "@/types/enums";

export const useModualStore = defineStore("moduals", () => {
  const modules: Array<modual> = reactive([]);
  const filter: Ref<string> = ref("");

  const NFC = computed(() => modules.filter((v) => v.type == modualType.NFC));
  const PI = computed(() => modules.filter((v) => v.type == modualType.PIZERO));

  const loopList = computed<modual[]>(() =>
    modules.filter(
      (v) => v.id.includes(filter.value) || v.tagId.includes(filter.value)
    )
  );

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

  return { filter, NFC, PI, loopList, addModule, removeModule };
});
