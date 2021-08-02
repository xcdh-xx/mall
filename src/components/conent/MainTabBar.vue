<template>
  <div>
    <tab-bar class="item-img">
      <tab-bar-item path="/home" activeColor="#ff5777">
        <template v-slot:icon>
          <img src="../../assets/img/tabbar/home.svg" alt="">
        </template>
        <template v-slot:iconActive>
          <img src="../../assets/img/tabbar/home_active.svg" alt="">
        </template>
        <template v-slot:text>
          <div>首页</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="#ff5777">
        <template v-slot:icon>
          <img src="../../assets/img/tabbar/category.svg" alt="">
        </template>
        <template v-slot:iconActive>
          <img src="../../assets/img/tabbar/category_active.svg" alt="">
        </template>
        <template v-slot:text>
          <div>分类</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/shopCart" activeColor="#ff5777">
        <template v-slot:icon>
          <img src="../../assets/img/tabbar/shopcart.svg" alt="">

        </template>
        <template v-slot:iconActive>
          <img src="../../assets/img/tabbar/shopcart_active.svg" alt="">
        </template>
        <template v-slot:text>
          <div>购物车</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="#ff5777">
        <template v-slot:icon>
          <img src="../../assets/img/tabbar/profile.svg" alt="">
        </template>
        <template v-slot:iconActive>
          <img src="../../assets/img/tabbar/profile_active.svg" alt="">
        </template>
        <template v-slot:text>
          <div>我的</div>
        </template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>


<script>
  import TabBar from '../common/tabber/TabBar.vue'
  import TabBarItem from '../common/tabber/TabBarItem.vue'
  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem,
    }
  }
</script>


<style scoped>
  .item-img img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
  }
</style>