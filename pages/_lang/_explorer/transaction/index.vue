<template>
    <div class="transactionlist">
        <Headmobile />
        <Headsearch crumbs="transaction" v-on:handleNodata="isNaNdata"/>
        <Mynavs page_index='4'/>
        <Nodata v-if="nodata" v-on:reload="isNaNdata"/>
        <div class="main" v-else>
            <div class="title-con">
                <div class="container">
                    <div class="title-global">
                    <h2>{{$t('transaction.title')}}</h2>
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
        title: this.$t('head.tx.title'),
        meta: [
            {
            hid: "description",
            name: "description",
            content: this.$t('head.tx.description'),
            },
            {
            hid: "keywords",
            name: "keywords",
            content: this.$t('head.tx.keywords'),
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
          title: this.$t('transaction.hash'),
          key: "hash",
          width:180,
          render: (h, params) => {
              return h('div',{
                attrs:{
                  class:'nowarp'
                }
              }, [
                  h('nuxt-link',{
                    attrs:{
                      to:'/'+this.$route.params.lang+'/'+this.$route.params.explorer+"/transaction/"+params.row.hash
                    }
                  }, params.row.hash)
              ]);
          }
        },
        {
          title: this.$t('transaction.time'),
          key: "stamp",
          width:160,
          render: (h, params) => {
            return  h('Time',{
                attrs:{
                    time: params.row.stamp || 0
                }
            })
          },
        },
        {
          title: this.$t('transaction.gasLimit'),
          key: "gas_limit",
          width:130,
        },
        {
          title: this.$t('transaction.gasPrice'),
          key: "gas_price",
          width:150,
        },
        {
          title: this.$t('transaction.from'),
          key: "from",
          width:200,
          render: (h, params) => {
              return h('div',{
                attrs:{
                  class:'nowarp'
                }
              }, [
                  h('nuxt-link',{
                    attrs:{
                       to:'/'+this.$route.params.lang+'/'+this.$route.params.explorer+"/address/"+params.row.from
                    }
                  }, params.row.from)
              ]);
          }
        },
        {
          title:  this.$t('transaction.to'),
          key: "to",
          width:200,
          render: (h, params) => {
              return h('div',{
                attrs:{
                  class:'nowarp'
                }
              }, [
                  h('nuxt-link',{
                    attrs:{
                      to:'/'+this.$route.params.lang+'/'+this.$route.params.explorer+"/address/"+params.row.to
                    }
                  }, params.row.to)
              ]);
          }
        },
        {
          title: this.$t('transaction.transAmount'),
          key: "amount",
          width:176,
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

             this.$axios.get('/eth/transaction/newestList?pageNum='+page).then(({data})  => {
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