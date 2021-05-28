<template>
    <div class="nodata">
        <div class="container">
            <div class="info">
                 <h4>Search not found</h4>
                 <p>Oops! The search string you entered was: eth

Sorry! This is an invalid search string.</p>
            </div>
            <div class="reload">
                <span v-on:click="reload">刷新</span>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    data(){
        return{
            isShow:false,
        }
    },
    created(){
        
    },
    methods:{
        reload:function(e){
            this.$router.go(-1);
            // this.$emit('reload', false);
        }
    }
}
</script>