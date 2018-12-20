<template>
  <div class="chart_colleft">
    <!-- <Queue></Queue> -->
    <div class="list_box">
      <div class="list_hover" id="hover"></div>
      <div
        class="colleft_list"
        :class="[ischoose==item.personname?a:b]"
        @click="goChartList(item.personname)"
        @mouseenter="mousein(index)"
        @mouseleave="mouseout(index)"
        v-for="(item,index) in talkingpersonlist"
        :key="index"
      >
        <div
          class="colleft_close"
          v-show="cur==index?t:f,ischoose==item.personname?a:f"
          @click.stop="closelist(index)"
        >结束</div>
        <div class="demo-avatar-badge colleft_img">
          <Badge :count="item.messagecount">
            <Avatar shape="square" :src="item.img"/>
          </Badge>
        </div>
        <!-- <img :src="item.img" class="colleft_img"> -->
        <p class="colleft_p">{{item.personname}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Queue from "./queue";
import { mapMutations, mapState } from "vuex";
// import {TalkingList} from '../../../../until/api.js'
export default {
  data() {
    return {
      cur: 999,
      t: true,
      f: false,
      s: "enter",
      h: "leave",
      ischoose: null,
      a: "ischoose",
      b: "nochoose",
      talkingpersonlist: [
        {
          img: require("../../../../assets/active.png"),
          personname: "asdasd",
          messagecount: 4
        },
        {
          img: require("../../../../assets/active.png"),
          personname: "asdasd",
          messagecount: 4
        },
        {
          img: require("../../../../assets/active.png"),
          personname: "asdasd",
          messagecount: 4
        },
        {
          img: require("../../../../assets/active.png"),
          personname: "asdasd",
          messagecount: 4
        }
      ]
    };
  },
  components: {
    Queue
  },
  methods: {
    ...mapMutations([
      "talkingUserState",
      "talkingUserStateClose",
      "pushNewPersonMessage",
      "changeTalkListNumber"
    ]),
    goChartList(x) {
      this.talkingUserState(x);
      this.ischoose = x;
    },
    closelist(x) {
      this.talkingpersonlist.splice(x, 1);
      this.talkingUserStateClose();
    },
    mousein(x) {
      this.cur = x;
      let hover = document.getElementById("hover");
      hover.style.height = 12 + "vh";
      hover.style.top = 12 * x + "vh";
    },
    mouseout(x) {
      this.cur = 999;
      document.getElementById("hover").style.height = 0 + "vh";
    },
    // messagecount展示判定
    getMessagecount() {
      //  判定当前没有现实任何的对话
      if (this.talkingUsername == "") {
        // 允许Messagecount,进行展示出来
      } else {
        // 有对话
        //继续判定是不是当前的对话用户，是的话就不展示Messagecount，不是的话就展示Messagecount
        if (this.talkingUsername == `发送过来用户名`) {
          //相同就说明是当前对话的，直接展示出来
          // 直接将拿到的内容展示出来。
          let meg = ""; // 这个就是新对话内容
          this.pushNewPersonMessage(meg);
        } else {
          // 不是这个对话下的，在对应的对话下展示messagecount
          // 根据过来的用户名，用find找到对应的messagecount，进行修改
        }
      }
    },
    changeTalklistnum() {
      let talklistlength = this.talkingpersonlist.length;
      this.changeTalkListNumber(talklistlength);
    }
    // GetChartingList(){
    //   TalkingList().then(res=>console.log(res))
    // }
  },
  computed: {
    ...mapState([
      "nextpersonmeg",
      "clearPersonname",
      "talklistnumber",
      "talknumbertop",
      "talkingUsername"
    ])
  },
  created() {
    this.changeTalklistnum();
    // this.GetChartingList()
  },
  watch: {
    talkingpersonlist() {
      this.changeTalklistnum();
    },
    // 改变说明添加了下一个人
    nextpersonmeg(x) {
      if (this.talkingpersonlist.length >= this.talknumbertop) {
        this.$Message.warning(
          `最多接待${this.talknumbertop}位,勇士请继续加油！`
        );
      } else {
        this.talkingpersonlist.push(x);
      }
    },
    clearPersonname(x) {
      if (x == "") {
        return;
      } else {
        this.talkingpersonlist.find(
          item => item.personname == x
        ).messagecount = 0;
      }
    }
  }
};
</script>

<style scoped lang='less'>
.chart_colleft {
  height: 92vh;
  overflow: auto;
  width: 17%;
  float: left;
  border-right: 1px solid #393e46;
  background-color: #eeeeee;
  position: relative;
}

.list_box {
  position: relative;
}

.colleft_list {
  width: 100%;
  height: 12vh;
  position: relative;
  &:hover {
    color: #eeeeee;
  }
}

.colleft_p {
  margin-left: 30px;
  vertical-align: middle;
  position: absolute;
  top: 50%;
  left: 40%;
  transform: translate(-50%, -50%);
}

.colleft_img {
  width: 6vh;
  height: 6vh;
  position: absolute;
  top: 50%;
  left: 20%;
  transform: translate(-50%, -50%);
}

.colleft_close {
  height: 30px;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translate(0px, -50%);
  padding: 5px 15px;
  border-radius: 8px;
  line-height: 20px;
  color: black;
  background-color: white;
  &:hover {
    color: white;
    background-color: #00adb5;
    cursor: pointer;
  }
}

.enter {
  color: #eeeeee;
  box-shadow: 0 0 20px #222831;
}

.leave {
  color: black;
}

.ischoose {
  color: #eeeeee;
  background-color: #393e46;
  box-shadow: 0 0 20px #222831;
}

.list_hover {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 0px;
  background: url("../../../../assets/bg.png") center center no-repeat;
  transition: top 0.3s, height 0.3s;
}
</style>
