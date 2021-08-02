<template>
  <div class="tab-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="icon"></slot>
    </div>
    <div v-else>
      <slot name="iconActive"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="text"></slot>
    </div>
  </div>
</template>


<script>
  export default {
    name: "TabBarItem",
    data() {
      return {

      }
    },
    computed: {
      isActive() {
        // 比较当前活跃的路由是否是点击路由
        // indexOf,匹配字符串，如果匹配上就不等于-1
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle() {
        return this.isActive ? {
          color: this.activeColor
        } : {}
      }
    },
    props: {
      path: String,
      activeColor: {
        type: String,
        defalut: "#ff5777"
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.path);
      }
    }
  }
</script>


<style scoped>
  .tab-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
</style>