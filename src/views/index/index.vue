<template>
  <div class="index">
    <img class="home-img" :src="$store.state.meta.homePageImg" alt="homeImg" />
  </div>
</template>

<style lang="less" scoped>
.index {
  .home-img {
    width: 100%;
  }
}
</style>
