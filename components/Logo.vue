<template>
  <img :src="this.$store.state.theme?imgdata.url1:imgdata.url2" width="122"  alt="Block.org" srcset="" >
</template>
<script>
export default {
  props:['theme'],
  data(){
    return {
       imgdata:{
         url1:require('../assets/img/logo_white.png'),
         url2:require('../assets/img/logo.png'),
       }
    }
  },
  created(){
  },
  mounted(){
    
  },
  watch:{
    theme:function(){
      console.log('更新状态')
    }
  }
}
</script>