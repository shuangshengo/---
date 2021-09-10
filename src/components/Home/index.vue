<template>
  <div class="Home-container">
    <div
      v-for="(item, i) in ClassName"
      :key="item.id"
      :class="item"
      @click="handleClick(item[6], $event)"
    >
      <div class="content" :ref="`${i}`">
        <div>
          <img v-if="Myresp[i]" :src="Myresp[i].icon" alt="" />
          <p v-if="Myresp[i]">{{ Myresp[i].title }}</p>
          <hr />
        </div>
      </div>
      <div class="down" v-if="Myresp[index]">
        <div
          v-for="(istrue, index) in Myresp[index].content.length"
          :key="istrue"
        >
          <img :src="Mydata[index].pic" alt="" />
          <p>{{ Mydata[index].title }}</p>
          <a href="">{{
            Mydata[index].url_title
          }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import HomeDetails from "@/views/Home-details";
import $ from "jquery";
import axios from "axios";

export default {
  components: {
    // HomeDetails
  },
  data() {
    return {
      ClassName: ["slider0", "slider1", "slider2", "slider3"],
      Myresp: {},
      index: 0,
      Mydata: {},
      initial: null,
    };
  },
  computed: {},
  created() {
    let that = this;
    
    async function getData() {
      //请求数据
      that.Myresp = await axios.get("https://www.letsfun.cn/api/1");
      that.Myresp = that.Myresp.data.recommend;
      that.Mydata = that.Myresp[0].content;
      that.initial = that.Myresp[0].pic;
      add();
    }
    function add() {
      console.log(that.initial)
      $(".slider0").addClass("motion")
        .children(".content")
        .css("background-image", "url(" + `${that.initial}` + ")");
    }
    getData();
  },
  methods: {
    handleClick(item, e) {
      let Myitem = e.currentTarget;
      let index = item;
      $(".content").css("background-image", "url()");
      $(Myitem).siblings().removeClass("motion");
      $(Myitem).addClass("motion");
      $(Myitem)
        .children(".content")
        .css("background-image", "url(" + `${this.Myresp[index].pic}` + ")");
    },
  },
};
</script>

<style scoped lang="less">
@import url("~@/styles/Home.less");
</style>