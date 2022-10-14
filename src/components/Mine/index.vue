<template>
  <div ref="parent">
    <button id="toTop">上</button>
    <button id="toRight">右</button>
    <button id="toBottom">下</button>
    <button id="toLeft">左</button>
    <div id="box"></div>
  </div>
</template>

<script>
import Mover from "./move";

export default {
  name: "Mine",
  mounted() {
    this.$nextTick(() => {
      new Mover({
        parentElement: this.$refs.parent,
        idArrs: ["#toTop", "#toRight", "#toBottom", "#toLeft"],
        target: "#box",
      }).bind();
    });
  }
};
</script>

<style scoped>
#box {
  width: 100px;
  height: 100px;
  background: #f00;
  position: absolute;
  left: 100px;
  top: 100px;
}
</style>