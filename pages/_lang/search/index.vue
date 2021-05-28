<template>
    <div class="searchPage">
        <Headmobile />
        <div class="container">
            <div class="searchInfo">
                <div class="searchForm">
                    <Input search enter-button placeholder="Enter something..." />
                </div>
                <div class="searchResult">
                    我们查询到 732 个结果
                </div>
            </div>
            <div class="main">
                
            </div>
        </div>
       
    </div>
</template>
<script>
export default {
    head() {
        return {
        title: this.$t('head.search.title'),
        meta: [
            {
            hid: "description",
            name: "description",
            content: this.$t('head.search.description'),
            },
            {
            hid: "keywords",
            name: "keywords",
            content: this.$t('head.search.keywords'),
            },
        ],
        };
    },
    data(){
        return{
            type:this.$route.query.type,
            findval:this.$route.query.id,
            data:[],
        }
    },
    methods: {
        findBlock(type,id){
            // this.$axios.get(type+"/block/find?id="+id).then(({data})  => {
            //     this.data = data.data;
            //     console.log(res)
            // })
        },

    },
     mounted() {
         this.findBlock(this.type,this.findval)
     }

      
}
</script>