<template>
  <div>
    <nav class="container">
      <router-link to="/admin" exact-active-class="active"
        >Dashboard</router-link
      >
      <router-link to="/admin/manager-user" active-class="active"
        >User</router-link
      >
      <router-link to="/admin/manager-product" active-class="active"
        >Product</router-link
      >
      <router-link to="/admin/manager-setting" active-class="active"
        >Setting</router-link
      >
    </nav>
    <router-view />
    <h1>Dashboard Page</h1>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  display: flex;
  gap: 30px;
}
.active {
  background-color: red;
  color: #fff;
  width: 90px;
  border-radius: 6px;
  text-align: center;
}
</style>
