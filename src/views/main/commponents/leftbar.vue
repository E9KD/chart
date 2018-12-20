<template>
    <div class="leftbar">
        <Tooltip content="接待中" placement="right" class="leftbar_chartnow" theme='light'>
            <img :src="ishover==0?b:a" @click="goCharting" @mouseover="mousein(0)" @mouseout="mouseout" alt="" srcset="" class="leftbar_set">
        </Tooltip>
        <Tooltip content="已接待" placement="right" class="leftbar_chartlast" theme='light'>
            <img :src="ishover==1?d:c" @click="goCharted" @mouseover="mousein(1)" @mouseout="mouseout" alt="" srcset="" class="leftbar_set">
        </Tooltip>
         <Tooltip content="设置" placement="right" class="leftbar_setbox" theme='light'>
            <img :src="ishover==2?y:n" @click="goSet" @mouseover="mousein(2)" @mouseout="mouseout" alt="" srcset="" class="leftbar_set">
        </Tooltip>
    </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      ishover: null,
      isset: false,
      y: require("../../../assets/setactive.png"),
      n: require("../../../assets/setnormal.png"),
      a: require("../../../assets/chartingactive.png"),
      b: require("../../../assets/chartingnormal.png"),
      c: require("../../../assets/charthistoryactive.png"),
      d: require("../../../assets/charthistorynormal.png")
    };
  },
  methods: {
    mousein(x) {
      this.ishover =x
    },
    mouseout() {
      this.ishover = null;
    },
    goCharting() {
      this.$router.push("/main/chart");
    },
    goCharted() {
      this.$router.push("/main/lastchart");
    },
    goSet() {
      this.$router.push("/main/set");
    }
  }
};
</script>

<style lang="less" scoped>
.leftbar {
  height: 92vh;
  width: 3%;
  float: left;
  background-color: #393e46;
  position: relative;
  .leftbar_setbox {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translate(-50%, 0px);
    .leftbar_set {
      width: 25px;
      height: 25px;
    }
  }
  .leftbar_chartnow {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, 0px);
    z-index: 99999;
    .leftbar_set {
      width: 25px;
      height: 25px;
    }
  }
  .leftbar_chartlast {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, 0px);
    z-index: 99999;
    .leftbar_set {
      width: 25px;
      height: 25px;
    }
  }
}
</style>

