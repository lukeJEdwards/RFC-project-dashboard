<template>
  <left stroke="#fff" class="arrow" v-show="open" @click="open = false" />
  <burger stroke="#fff" class="burger" v-show="!open" @click="open = true" />
  <div class="modules" v-show="open">
    <h1>My Modules</h1>
    <input v-model.number="amount" />
    <div class="module-list">
      <Modual
        v-for="i in amount"
        :key="i"
        id="1"
        tagId=" 04 9C 64 D2 45 2B 80 "
        :modualType="modualType.NFC"
      />
    </div>
    <button>Add Module +</button>
  </div>
</template>

<script setup lang="ts">
import Modual from "@/components/Modual.vue";
import left from "@/components/icons/left.vue";
import burger from "@/components/icons/burger.vue";

import { modualType } from "@/types/enums";
import { ref, type Ref } from "vue";

const amount: Ref<number> = ref(5);
const open: Ref<boolean> = ref(false);
</script>
