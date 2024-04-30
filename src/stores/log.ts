import { Logging } from "@/types/enums";
import type { log } from "@/types/types";

import { defineStore } from "pinia";
import { ref, type Ref } from "vue";

export const useLogStore = defineStore("log", () => {
  const logs: Ref<log[]> = ref([]);

  function addLog() {
    logs.value.push({
      type: Logging.INFO,
      message: "test info",
    });
  }

  return { logs, addLog };
});
