<template>
  <article @click="open = !open" :class="{ nfc: isNFC, 'pi-zero': isPiZero }">
    <section>
      <h3>RFC reader {{ props.id }}</h3>
      <slot></slot>
    </section>
    <Transition>
      <section v-show="open">
        <p>{{ props.tagId }}</p>
        <p>{{ props.videoTitle }}</p>
      </section>
    </Transition>
  </article>
</template>

<script setup lang="ts">
import type { Ref } from "vue";
import type { modualProps } from "@/types/props";
import { ref, computed } from "vue";
import { modualType } from "@/types/enums";

const props = defineProps<modualProps>();
const open: Ref<boolean> = ref(false);

const isNFC = computed(() => props.modualType == modualType.NFC);
const isPiZero = computed(() => props.modualType == modualType.PiZero);
</script>
