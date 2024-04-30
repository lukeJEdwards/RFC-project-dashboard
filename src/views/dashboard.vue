<template>
  <div class="dashboard">
    <div class="bar" v-if="hideElement">
      <div>
        <p class="title">Dashbord</p>
        <p>Your personal dashboard over view</p>
      </div>
      <expand stroke="#979AA0" @click.native="toggleFullscreen" />
    </div>
    <div class="screens">
      <div class="screen">
        <p>Currently Playing:</p>
      </div>
      <div class="screen">
        <p>Currently Playing:</p>
      </div>
      <div class="screen">
        <p>Currently Playing:</p>
      </div>
      <div class="screen">
        <p>Currently Playing:</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import expand from "@/components/icons/expand.vue";
import { useStore } from "@/stores/store";
import { storeToRefs } from "pinia";

const { toggleFullscreen } = useStore();
const { hideElement } = storeToRefs(useStore());
</script>
