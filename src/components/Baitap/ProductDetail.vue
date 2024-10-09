<template>
  <div>
    <h1>Product Detail</h1>

    <div v-if="product">
      <img :src="product.image" alt="" />
      <h2>Id : {{ product.id }}</h2>
      <h2>ProductName : {{ product.name }}</h2>
      <h2>Price : {{ formatPrice(product.price) }}</h2>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
// Lấy danh sách sản phẩm từ localStorage
const storedProducts = JSON.parse(localStorage.getItem("products"));

const productId = parseInt(route.params.id);
const product = computed(() =>
  storedProducts.find((pro) => pro.id === productId)
);

// Hàm định dạng giá tiền
const formatPrice = (price) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price);
};
</script>

<style scoped>
img {
  width: 350px;
}
</style>
