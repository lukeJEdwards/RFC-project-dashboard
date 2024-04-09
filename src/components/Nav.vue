<template>
  <nav>
    <ul>
      <li>
        <RouterLink to="/">
          <Home fill="#979AA0" stroke="#323539" />
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/database">
          <database fill="#979AA0" stroke="#323539" />
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/analytics">
          <analytics fill="#979AA0" stroke="#323539" />
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
import Home from "@/components/icons/home.vue";
import database from "@/components/icons/database.vue";
import analytics from "@/components/icons/analytics.vue";
</script>
