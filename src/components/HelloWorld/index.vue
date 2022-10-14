<template>
  <div>
    hello world
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HelloWorld',
  data(){
    return {
    }
  },
  mounted(){
  },
  methods:{
    fib(num){
      return num;
    },
    fix(a,b,c){
      setTimeout(() => {
        c(a+b);
      }, 2000);
    },
    getData(res){
      axios.get('xxxxx');
      const cb = res();
      return cb;
    }
  }
};
</script>

<style scoped>
</style>