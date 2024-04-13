<template>
  <div class="viewport">
    <h1>DashBoard</h1>
    <div class="readers">
      <NFC
        v-for="reader in readers"
        :key="reader[1].id"
        :id="reader[1].id"
        :modual-type="modualType.NFC"
        :tag-id="reader[1].tagId"
        video-title="video.mp4"
      >
        <Signal stroke="#E33B32" />
      </NFC>
    </div>
  </div>
</template>

<script setup lang="ts">
import NFC from "@/components/Modual.vue";
import Signal from "@/components/icons/signal.vue";
import { useStore } from "@/stores/store";
import { connection, modualType } from "@/types/enums";

const { readers, addReader } = useStore();

for (let i = 0; i < 4; i++) {
  addReader({
    id: i.toString(),
    status: connection.disconnected,
    tagId: "04 9C 64 D2 45 2B 80",
    type: modualType.NFC,
  });
}
</script>
