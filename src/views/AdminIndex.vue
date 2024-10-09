<template>
  <div>
    <h1>Admin index Page</h1>
    <nav>
      <router-link to="/admin" exact-active-class="active"
        >DashboardDashboard</router-link
      >
      <router-link to="/admin/manager-user" active-class="active"
        >Manager User</router-link
      >
      <router-link to="/admin/manager-product" active-class="active"
        >Manager Product</router-link
      >
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.active {
  background-color: red;
  color: #fff;
}
</style>
