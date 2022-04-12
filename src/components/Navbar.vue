<template>
  <div class="navbar">
    <div class="navbar-title">
      <h1>CRUD APP</h1>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  background: rgb(234, 227, 227);
  box-shadow: rgba(0, 0, 15, 0.24) 0px 3px 8px;
  z-index: 100;

  &-title {
    h1 {
      font-family: "Courier New", Courier, monospace;
      font-size: 25px;
    }
  }
}
</style>
