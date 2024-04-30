<template>
  <left stroke="#fff" class="arrow" v-show="open" @click="open = false" />
  <burger stroke="#fff" class="burger" v-show="!open" @click="open = true" />
  <div class="modules" v-show="open">
    <h1>My Modules</h1>
    <input v-model="filter" />
    <div class="module-list">
      <Modual
        v-for="(module, i) in loopList"
        :key="i"
        :id="module.id"
        :tagId="module.tagId"
        :modualType="module.type"
        :videoTitle="module.videoTitle"
      />
    </div>
    <button>Add Module +</button>
  </div>
</template>

<script setup lang="ts">
import Modual from "@/components/Modual.vue";
import left from "@/components/icons/left.vue";
import burger from "@/components/icons/burger.vue";

import { useModualStore } from "@/stores/modules";
import { connection, modualType } from "@/types/enums";

import { ref, type Ref } from "vue";
import { storeToRefs } from "pinia";

const { filter, loopList } = storeToRefs(useModualStore());
const { addModule } = useModualStore();

function getHexString() {
  let hexArray = Array.from({ length: 14 }, () =>
    "0123456789ABCDEF".charAt(Math.floor(Math.random() * 16))
  );

  return Array.from(
    { length: hexArray.length / 2 },
    (_, i) => hexArray[2 * i] + hexArray[2 * i + 1]
  )
    .join(" ")
    .toString();
}

for (let i = 0; i < 4; i++) {
  addModule({
    type: modualType.NFC,
    id: i.toString(),
    status: connection.CONNECTED,
    tagId: getHexString(),
  });
}

for (let i = 0; i < 4; i++) {
  addModule({
    type: modualType.PIZERO,
    id: (i + 4).toString(),
    status: connection.CONNECTED,
    tagId: getHexString(),
  });
}

const open: Ref<boolean> = ref(true);
</script>
