<template>
  <div>
    <h1>List Product</h1>
    <input type="text" v-model="keySearch" />
    <input type="number" v-model="priceValue" />
    <button @click="handleSearch">Search</button>

    <h1>Product Name : {{ result.productName }}</h1>
    <h1>Price : {{ result.price }}</h1>
  </div>
</template>

<script setup>
import { computed, reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
const router = useRouter(); //Chuyển trang
const route = useRoute(); //Lấy dữ liệu trên URL

// const queryParam = reactive({
//   productName: "",
//   price: 0,
// });
const keySearch = ref("");
const priceValue = ref(0);

// Lấy giá trị trên URL
const result = computed(() => {
  return {
    productName: route.query.productName,
    price: route.query.price,
  };
});
const handleSearch = () => {
  //   router.push(`/list-product?search=${keySearch.value}`);
  router.push({
    path: "/list-product",
    query: { productName: keySearch.value, price: priceValue.value },
  });
};
</script>

<style></style>
