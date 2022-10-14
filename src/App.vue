<template>
  <div id="app">
    <router-view />
    <!-- <button @click="showMessageBox">showMessageBox</button> -->
  </div>
</template>

<script>
import Vue from "vue";

export default {
  name: "App",
  mounted() {
    
  },
  methods: {
    showMessageBox() {
      this.messageBox({
        title: "javascript",
        desc: "this is a javascript !",
        handleCancel() {
          console.log("close yet !");
        }
      });
    }
  }
};
</script>

<style>
</style>
