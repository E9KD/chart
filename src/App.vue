<template>
  <div id="app">
    <top></top>
    <router-view></router-view>
    <Start></Start>
  </div>
</template>

<script>
  import top from "./components/top";
  import Start from './components/start.vue'
  import {
    con
  } from './until/test.js'
  import {
    mapState,
    mapMutations
  } from "vuex";
  export default {
    components: {
      top,
      Start
    },
    methods: {
      ...mapMutations(["loginStateDelete", "loginStateActive"]),
      // 清理模块
      clearModule() {
        let Cookieparse = JSON.parse(document.cookie);
        Cookieparse.userpassword = "";
        document.cookie = JSON.stringify(Cookieparse)
        this.loginStateDelete();
        this.$router.replace("/");
      },
      init() {
        // 如果以前登陆过
        if (document.cookie.length > 0) {
          let Cookieparse = JSON.parse(document.cookie);
          // ru guo chao chu shi jian 
          if (new Date().getTime() - Cookieparse.logintime >=  60 * 60 * 1000) {
            this.clearModule();
          }else {
            //  mei you chao chu shi jian
            this.loginStateActive()
          }
        } else {
          // 如果原来没有登陆过
          // 跳到主页
          this.$router.replace("/");
        }
        let m = new con
        m.c()
      },
    },
    created() {
      this.init();
      // 
    },
    computed: {
      ...mapState(["password", "Loginstate"])
    },
  };
</script>

<style lang="less">
  #app {
    height: 100vh;
  }
  @import url("../public/css/reset.css");
  @import url("../public/css/public.css");
  @import url("../public/css/animate.css");
</style>
