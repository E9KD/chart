<template>
  <div class="login">
    <div class="login_box">
      <p class="login_title">登陆</p>
      <div class="box_userinfo">
        <p class="userinfo_text">用户名</p>
        <input type="text" class="userinfo_input" placeholder="请输入用户名" v-model="username">
        <p class="userinfo_p">&nbsp;</p>
      </div>
      <div class="box_userinfo">
        <p class="userinfo_text">密码</p>
        <input type="password" class="userinfo_input" placeholder="请输入密码" v-model="userpassword">
        <p class="userinfo_p">&nbsp;</p>
      </div>
      <div class="box_register">
        <p class="register_btn" @click="goRegsiterPage">立刻注册</p>
      </div>
      <div class="box_loginbtn">
        <p class="loginbtn_btn" @click="login">登陆</p>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    mapState,
    mapMutations
  } from "vuex";
  import {
    test
  } from "../../until/test.js";
  import {
    name
  } from '@/until/tip.js'
  export default {
    data() {
      return {
        username: "",
        userpassword: "",
        name: `song`,
        lastName: `zhen`
      };
    },
    methods: {
      ...mapMutations(["loginStateActive"]),
      goRegsiterPage() {
        this.$router.push("/register");
      },
      login() {
        if (this.username == "" || this.userpassword == "") {
          this.$Message.warning("请输入用户名和密码");
          return;
        } else {
          const ctest = new test();
          let loginusername = ctest.npTest(this.username);
          let loginuserpassword = ctest.npTest(this.userpassword);
          if (loginusername && loginuserpassword) {
            let url =
              "https://api.shenjian.io/?appid=827aad4fcad024878809fbcb5d8e2c60";
            let body = {
              code: 300100,
              date: 2012 - 12 - 19,
              showContent: false
            };
            if (true) {
              this.$Message.success("登陆成功");
              setTimeout(() => {
                let Cookieparse = JSON.parse(document.cookie);
                Cookieparse.username = this.username;
                Cookieparse.userpassword = this.userpassword;
                Cookieparse.logintime = new Date().getTime();
                document.cookie = JSON.stringify(Cookieparse);
                this.loginStateActive();
                this.$router.push("/main");
              }, 800);
            } else {
              this.$Message.error("用户名和密码不正确");
            }
          } else {
            if (!loginusername && !loginuserpassword) {
              this.$Message.warning(
                "用户名和密码请输入6到12位，字母数字，不能有符号"
              );
            } else {
              if (!loginusername) {
                this.$Message.warning(
                  "用户名请输入6到12位，字母数字，不能有符号"
                );
              }
              if (!loginuserpassword) {
                this.$Message.warning("密码请输入6到12位，字母数字，不能有符号");
              }
            }
          }
        }
      },
      // 默认检测
      init() {
        if (document.cookie.length == 0) {
          document.cookie = '{"username":"","userpassword":"","logintime":""}';
          console.log(document.cookie);
          console.log("什么也没有");
        } else {
          let Cookieparse = JSON.parse(document.cookie);
          this.username = Cookieparse.username;
          this.userpassword = Cookieparse.userpassword;
        }
      },
      test() {
        
      }
    },
    created() {
      this.init();
      this.test()
    },
    computed: {
      ...mapState(["Loginurl"])
    }
  };
</script>

<style lang="less" scoped>
  .login {
    width: 100%;
    height: 92vh;
    position: relative; // background-color: #393e46;
    background: url("../../assets/IK-qKu29biI.jpg") center center no-repeat;
    background-size: cover;
    .login_box {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 30%;
      height: 80%;
      max-width: 400px;
      max-height: 500px;
      background-color: #eeeeee;
      border-radius: 30px;
      .login_title {
        margin-top: 10%;
        font-size: 30px;
        color: #00adb5;
        text-align: center;
      }
      .box_userinfo {
        margin-top: 10%;
        margin-left: 15%;
        .userinfo_text {
          color: #00adb5;
        }
        input {
          margin-top: 3%;
          padding-left: 10px;
          width: 80%;
          height: 4vh;
          line-height: 4vh;
          background-color: #e7e0e0;
          border: none;
          border-radius: 10px;
        }
        .userinfo_p {
          margin: 10px 10px;
          font-size: 12px;
          color: #999;
        }
      }
      .box_register {
        width: 100%;
        margin-top: 5%;
        .register_btn {
          cursor: pointer;
          margin: 0 auto;
          text-align: center;
          width: 20%;
          height: 4vh;
          line-height: 4vh;
          font-size: 12px;
          color: #00adb5;
        }
      }
      .box_loginbtn {
        width: 100%;
        margin-top: 10%;
        .loginbtn_btn {
          cursor: pointer;
          margin: 0 auto;
          text-align: center;
          width: 20%;
          height: 4vh;
          line-height: 4vh;
          font-size: 15px;
          color: white;
          border-radius: 30px;
          background-color: #00adb5;
          &:hover {
            background-color: #0a8f96;
          }
        }
      }
    }
  }
</style>
