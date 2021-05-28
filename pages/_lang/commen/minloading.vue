<template>
    <Spin size="large" fix v-if="loading"></Spin>
</template>
<script>
export default {
    data(){
        return{
            loading:true
        }
    },
    watch:{
        loading:function(newval, oldval){
            this.loading = newval
        }
    }
}
</script>