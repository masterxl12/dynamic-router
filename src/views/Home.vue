<template>
  <div class="home">
    <home-header :menuList="menuList"></home-header>
    <span>FirstName:</span>
    <input v-model="firstName" />
    <span>lastName:</span>
    <input v-model="lastName" />
    <span>fullName:</span>
    <input v-model="fullName" />
    <br />
    <a href="#" @click="getData">点击获取数据</a>&nbsp&nbsp|&nbsp&nbsp
    <a href="#" @click="getNavList">点击导航数据</a>
    <div>{{dataList}}</div>
    <el-table :data="tableList">
      <el-table-column label="序号" prop="id" width="100"></el-table-column>
      <el-table-column label="名称" prop="name" width="100">
        <template slot-scope="scope">
          <el-link type="primary" @click="dispatchNav(scope.row)">{{scope.row.name}}</el-link>
        </template>
      </el-table-column>
      <el-table-column label="描述" prop="desc" width="100"></el-table-column>
      <el-table-column label="导航条目数据" prop="itemData" width="500"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary" size="small" @click="edit(scope.row)">编辑</el-button>
          <el-button type="success" size="small" @click="view(scope.row.itemData)">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from "@/components/HomeHeader.vue";
import data from "../utils/data.js";
export default {
  name: "home",
  data() {
    return {
      firstName: "mr.",
      lastName: "lei",
      fullName: "",
      dataList: [],
      tableList: [],
      menus: ["项目开发", "项目测试", "项目运维", "产品推广"]
    };
  },
  components: {
    HomeHeader
  },
  computed: {
    menuList() {
      return JSON.parse(JSON.stringify(this.menus));
    }
  },
  methods: {
    getData() {
      let requesUrl = "http://jsonplaceholder.typicode.com/users";
      fetch(requesUrl)
        .then(res => res.json())
        .then(res => {
          this.dataList = res.reduce(
            (prev, curr) => [...prev, { name: curr.name }],
            []
          );
        });
    },
    getNavList() {
      fetch("/api/navlist1")
        .then(res => res.json())
        .then(res => {
          this.dataList = res.data.navlist1.reduce(
            (prev, curr) => [...prev, { city: curr }],
            []
          );
        })
        .catch(error => {
          console.log(error);
        });
    },
    // 获取table数据
    getTableList() {
      fetch("api/tablelist")
        .then(res => res.json())
        .then(res => {
          this.tableList = res.data.data;
        })
        .catch(err => console.log(err));
    },
    edit(item) {
      console.log(item);
    },
    view(itemNavList) {
      console.log(itemNavList);
    },
    dispatchNav(rowItem) {
      // this.menus = rowItem.itemNavList;
      console.log(data);
      // console.log(this.menus);
    }
  },
  watch: {
    menuList: {
      immediate: true,
      handler: function(newValue, oldValue) {
        this.menus = newValue;
        // console.log(newValue);
      },
      deep: true
    },
    firstName(newValue) {
      this.fullName = newValue + ":" + this.lastName;
    }
  },
  created() {
    this.getData();
    this.getTableList();
    console.log(data);
  }
};
</script>
