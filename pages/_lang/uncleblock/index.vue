<template>
    <div class="uncleblocklist">
        <Headmobile />
        <Headsearch crumbs="uncleblock" v-on:handleNodata="isNaNdata"/>
        <mynavs page_index='3'/>
        <Nodata v-if="nodata" v-on:reload="isNaNdata"/>
        <div class="main" v-else>
            <div class="title-con">
                <div class="container">
                    <div class="title-global">
                    <h2>{{$t('uncleblocklist.title')}}</h2>
                    </div>
                </div>
            </div>
            <div class="table-global">
                <div class="container">
                    <Mytable :columns="columns" :loading="loading" :datalist="datalist"/>
                    <div class="pageCon">
                        <Page :total="total" size="small" show-total @on-change="handlePage" v-model="page"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    head() {
        return {
        title: this.$t('head.uncleBlockList.title'),
        meta: [
            {
            hid: "description",
            name: "description",
            content: this.$t('head.uncleBlockList.description'),
            },
            {
            hid: "keywords",
            name: "keywords",
            content: this.$t('head.uncleBlockList.keywords'),
            },
        ],
        };
    },
    data(){
        return{
            loading:true,
            nodata:false,
            page:1,
            total:10,
            columns: [
            {
            title: this.$t('uncleblocklist.height'),
            key: "id",
            width:150,
            render: (h, params) => {
                return h('nuxt-link',{
                    attrs:{
                    to:'/'+this.$store.state.locale+"/block/"+params.row.block_id
                    }
                }, params.row.block_id)
            }
            },
            {
            title: this.$t('uncleblocklist.uncle'),
            key: "uncle_block_id",
            width:150,
            render: (h, params) => {
                return h('nuxt-link',{
                    attrs:{
                    to:'/'+this.$store.state.locale+"/uncleblock/"+params.row.uncle_block_id
                    }
                }, params.row.uncle_block_id)
            }
            },
            {
            title: this.$t('uncleblocklist.miner'),
            key: "miner",
            width:410,
            render: (h, params) => {
                return h('div',{
                    attrs:{
                    class:'nowarp'
                    }
                }, [
                    h('nuxt-link',{
                        attrs:{
                        to:'/'+this.$store.state.locale+"/address/"+params.row.miner
                        }
                    }, params.row.miner)
                ]);
            }
            },
            {
            title: this.$t('uncleblocklist.time'),
            key: "stamp",
            width:160,
            render: (h, params) => {
                return  h('Time',{
                    attrs:{
                        time: params.row.stamp
                    }
                })
            },
            },
            {
            title: this.$t('uncleblocklist.gasused'),
            key: "gas_used",
            width:160,
            },
            {
            title: this.$t('uncleblocklist.reward'),
            key: "reward",
            width:166,
            },
            
        ],
            datalist:[]
        }
    },
    created() {
        this.getDetail(this.page);
    },
    methods: {
        getDetail(page){

             this.$axios.get('/eth/uncleblock/newestList?pageNum='+page).then(({data})  => {
                this.datalist = data.data.list;
                this.total = data.data.total;
                this.loading = false;
            })
        },
        handlePage(page){
            this.loading = true;
            this.getDetail(page)
            // console.log(page)
        },
        isNaNdata:function(bool){
            this.nodata = bool;
        }
    },
    mounted() {

    },
}
</script>