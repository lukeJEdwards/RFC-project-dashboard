import { Logging } from "@/types/enums";
import type { log } from "@/types/types";

import { defineStore } from "pinia";
import { ref, type Ref } from "vue";

export const useLogStore = defineStore("log", () => {
  const logs: Ref<log[]> = ref([
    {
      type: Logging.CRITICAL,
      message: "test critical",
    },
    {
      type: Logging.ERROR,
      message: "test error",
    },
    {
      type: Logging.WARNING,
      message: "test warning",
    },
    {
      type: Logging.SUCCESS,
      message: "test success",
    },
    {
      type: Logging.INFO,
      message: "test info",
    },
  ]);

  function addLog() {
    logs.value.push({
      type: Logging.INFO,
      message: "test info",
    });
  }

  return { logs, addLog };
});
