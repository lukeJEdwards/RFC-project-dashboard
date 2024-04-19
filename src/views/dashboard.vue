<template>
  <div class="viewport">
    <h1 class="dash-board-title">DashBoard</h1>
    <div class="readers">
      <Modual
        v-for="reader in readers"
        :key="reader.id"
        :id="reader.id"
        :modual-type="modualType.NFC"
        :tag-id="reader.tagId"
        video-title="video.mp4"
      >
        <Signal stroke="#E33B32" />
      </Modual>
    </div>
    <LogConsole />
    <div class="pi">
      <Modual
        v-for="Pi in PiZeros"
        :key="Pi.id"
        :id="Pi.id"
        :modual-type="modualType.PiZero"
        :tag-id="Pi.tagId"
        video-title="video.mp4"
      >
        <Pi fill="#E33B32" />
      </Modual>
    </div>
  </div>
</template>

<script setup lang="ts">
import LogConsole from "@/components/LogConsole.vue";
import Signal from "@/components/icons/signal.vue";
import Modual from "@/components/Modual.vue";
import Pi from "@/components/icons/pi.vue";

import { storeToRefs } from "pinia";
import { useStore } from "@/stores/store";
import { connection, modualType } from "@/types/enums";

const { readers, PiZeros } = storeToRefs(useStore());
const { addModule } = useStore();

for (let i = 0; i < 4; i++) {
  addModule({
    id: Math.floor(Math.random() * 10000).toString(),
    status: connection.disconnected,
    tagId: "04 9C 64 D2 45 2B 80",
    type: modualType.NFC,
  });
  addModule({
    id: Math.floor(Math.random() * 10000).toString(),
    status: connection.disconnected,
    tagId: "04 9C 64 D2 45 2B 80",
    type: modualType.PiZero,
  });
}
</script>
