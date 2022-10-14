<template>
  <div id="messageBox">
    <p class="title">{{title}}</p>
    <p class="desc">{{desc}}</p>
    <button @click="handleCancel">关闭窗口</button>
  </div>
</template>

<script>
export default {
  name: 'messagebox'
};
</script>

<style scoped>
#messageBox{
  width: 300px;
  height: 250px;
  background: #f00;
  color: #ffffff;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  padding-top: 60px;
  margin: 100px auto;
}
</style>