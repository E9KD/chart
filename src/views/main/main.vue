<template>
  <div class="main" id="main" @click="go">
    <!-- <Leftbar></Leftbar> -->

      <router-view></router-view>

  
  </div>
</template>

<script>
import Leftbar from "./commponents/leftbar.vue";
import { mapState, mapMutations } from "vuex";
export default {
  components: {
    Leftbar
  },
  computed: {
    ...mapState(["password", "Loginstate"])
  },
  methods: {
    ...mapMutations(["loginStateDelete"]),
    go() {
      if (!this.Loginstate) {
        this.$Message.warning("登陆状态过期，请重新登陆");
        setTimeout(() => {
          this.$router.replace("/login");
        }, 800);
      }
    },
    clearModule() {
      let Cookieparse = JSON.parse(document.cookie);
      Cookieparse.userpassword = "";
      this.loginStateDelete();
    },
    loginStateTest() {
      setInterval(() => {
        let Cookieparse = JSON.parse(document.cookie);
        if (new Date().getTime() - Cookieparse.logintime >= 60 * 60 * 1000) {
          this.clearModule();
        }
      }, 5000);
    }
  },
  created() {
    this.loginStateTest();
  }
};
</script>

<style>
.main {
  width: 100%;
  height: 92vh;
}
</style>
