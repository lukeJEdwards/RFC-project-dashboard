<template>
  <article
    @click="dropDownHandler"
    class="module"
    :class="{ nfc: isNFC, 'pi-zero': isPiZero }"
  >
    <section>
      <h3>{{ moduleTitle }}</h3>
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

const isNFC = computed(() => props.modualType == modualType.NFC);
const isPiZero = computed(() => props.modualType == modualType.PiZero);

const moduleTitle = computed(() => {
  switch (props.modualType) {
    case modualType.NFC:
      return `RFC reader ${props.id}`;
    case modualType.PiZero:
      return `Pi Zero - ${props.id}`;
  }
});

const open: Ref<boolean> = ref(isPiZero.value);
function dropDownHandler() {
  if (isNFC.value) {
    open.value = !open.value;
  }
}
</script>
