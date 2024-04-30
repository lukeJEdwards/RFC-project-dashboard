<template>
  <nav>
    <ul>
      <li v-for="(route, i) in routes" :key="i">
        <RouterLink :to="route.path">
          {{ route.name }}
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink, useRouter } from "vue-router";

const router = useRouter();
const routes = router.getRoutes();
</script>
