<template>
  <div>
    <input type="text" v-model="searchValue" />
    <button @click="handleSearch">Tìm kiếm</button>

    <h1>Value : {{ result.value }}</h1>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();

const result = computed(() => {
  return {
    query: route.query.value,
  };
});

const searchValue = ref("");

const handleSearch = () => {
  router.push({
    path: "/search",
    query: { query: searchValue.value },
  });
};
</script>

<style></style>
