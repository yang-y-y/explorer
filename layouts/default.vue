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
             themeBlack:false
        }
    },
    methods: {
     
    },
    mounted(){
	 
    }
}
</script>
<style lang="less">
@import "~/assets/css/commen.less";
@import "~/assets/css/style.less";
</style>

