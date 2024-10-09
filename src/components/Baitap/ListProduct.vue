<template>
  <div>
    <h1>List Product</h1>
    <div class="header">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Tìm kiếm theo tên"
      />
      <button @click="handleSearch">Tìm kiếm</button>
    </div>

    <div class="children-container">
      <div
        v-for="product in filteredProducts"
        :key="product.id"
        class="children"
      >
        <img :src="product.image" alt="" />
        <h2>{{ product.name }}</h2>
        <p>{{ formatPrice(product.price) }}</p>
        <div class="btn">
          <button @click="handleDetailProduct(product.id)" class="but">
            Xem chi tiết
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
const searchQuery = ref("");
const router = useRouter();
const products = [
  {
    id: 1,
    name: "Điện thoại iphone 15 Pro",
    image:
      "https://salt.tikicdn.com/cache/750x750/ts/product/6c/6c/9e/f3464d16a782e0d9ed5f74d98f155642.png.webp",
    price: "300000000",
  },
  {
    id: 2,
    name: "Điện thoại OPPO Reno11 5G",
    image:
      "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/o/p/oppo-reno-11-f-xanh-2_1_1_1.png",
    price: "10600000",
  },
  {
    id: 3,
    name: "Điện thoại vivo Y17s",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/315651/vivo-y17s-thumb-600x600.jpg",
    price: "3500000",
  },
  {
    id: 4,
    name: "Điện thoại iphone 16 promax",
    image: "https://uscom.vn/wp-content/uploads/2024/09/iPhone-16-trang-2.webp",
    price: "45000000",
  },
];

// Lưu products vào localStorage nếu chưa có
if (!localStorage.getItem("products")) {
  localStorage.setItem("products", JSON.stringify(products));
}

// Lấy danh sách sản phẩm từ localStorage
const storedProducts = JSON.parse(localStorage.getItem("products"));

const handleSearch = () => {
  router.push(`?name=${searchQuery.value}`);
};

// Hàm lọc sản phẩm dựa trên từ khóa tìm kiếm
const filteredProducts = computed(() => {
  if (!searchQuery.value) {
    return storedProducts;
  }
  return storedProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

// Hàm định dạng giá tiền
const formatPrice = (price) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price);
};
// chuyển hướng sang detail product

const handleDetailProduct = (productId) => {
  router.push(`/product-detail/${productId}`);
};
</script>

<style scoped>
.children-container {
  display: flex;
  justify-content: flex-start;
  overflow-x: auto;
  white-space: nowrap;
  gap: 30px;
}
.children {
  width: 300px;
  height: 450px;
  border: 1px solid grey;
  border-radius: 8px;
}
.header {
  display: flex;
  justify-content: end;
  margin-bottom: 30px;
}
img {
  margin-top: 35px;
  width: 100%;
}
h2,
p {
  text-align: center;
}
.btn {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}
.but {
  height: 25px;
  background-color: blue;
  color: #fff;
  border: none;
}
button {
  background-color: blue;
  color: #fff;
  border: none;
}
</style>
