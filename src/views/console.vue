<template>
  <div class="wrapper">
    <div class="console">
      <p v-for="(log, i) in logs" :key="i" :class="classType(log.type)">
        {{ log.message }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Logging } from "@/types/enums";
import { useLogStore } from "@/stores/log";
import { storeToRefs } from "pinia";

const { logs } = storeToRefs(useLogStore());

const { addLog } = useLogStore();

for (let i = 0; i < 50; i++) {
  addLog();
}

function classType(type: Logging) {
  return Logging[type].toLocaleLowerCase();
}
</script>
