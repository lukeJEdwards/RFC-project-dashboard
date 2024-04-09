<template>
  <div class="viewport">
    <h1>DashBoard</h1>
    <div class="readers">
      <NFC
        v-for="reader in readers"
        :key="reader[1].id"
        :id="reader[1].id"
        :tag-id="reader[1].tagId"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import NFC from "@/components/NFC.vue";
import { useReaderStore } from "@/stores/reader";
import { connection } from "@/types/enums";

const { readers, addReader } = useReaderStore();

for (let i = 0; i < 4; i++) {
  addReader({
    id: i.toString(),
    status: connection.disconnected,
    tagId: "04 9C 64 D2 45 2B 80",
  });
}
</script>
