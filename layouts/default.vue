<template>
     <div :class="$store.state.theme?'theme_black':'theme'">
         <Myheader />
         <Nuxt />
         <Myfooter />
     </div>
</template>
<script>
export default {
    props:['theme'],
    data(){
        return{
             themeBlack:false,
             timer:false
        }
    },
    methods: {
        searchFormWidth() {
	      let w = window.innerWidth;
	      if(w <=1170) {
                this.$store.commit('setIsMobile',true)
	      }else{
                this.$store.commit('setIsMobile',false)
          }
	    }
    },
    destroyed() {
		// 组件销毁后解绑事件
		window.onresize = null;
	},
    mounted(){
        this.searchFormWidth(); // 组件初始化的时候不会触发onresize事件，这里强制执行一次
        let that = this;
	    window.onresize = () => {
            
	          that.searchFormWidth();
	       
	    }
    }
}
</script>
<style lang="less">
@import "~/assets/css/commen.less";
@import "~/assets/css/style.less";
</style>

