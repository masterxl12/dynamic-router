<template>
  <div class="homeheader">
    <el-menu
      default-active="activeIndex"
      background-color="#545c64"
      class="el-menu-demo"
      mode="horizontal"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item v-for="(item,index) in menuList" :index=index.toString() :key="index">{{item}}</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "HomeHeader",
  props: {
    msg: String,
    menuList:Array
  },
  data(){
    return {
      activeIndex:"1"
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
