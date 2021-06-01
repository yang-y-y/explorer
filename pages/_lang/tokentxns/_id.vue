<template>
    <div class="blockPage">
        <Headmobile />
        <Headsearch crumbs="tokentxns" v-on:handleNodata="isNaNdata"/>
        <mynavs page_index='7'/>
        <Nodata v-if="nodata" v-on:reload="isNaNdata"/>
        <div class="main" v-else>
            <div class="title-con">
                <div class="container">
                    <div class="title-global">
                    <h2>代币余额</h2>
                    </div>
                </div>
            </div>
            <div class="tokentxns">
                <div class="container">
                    <Mytable :columns="columns" :loading="loading" :datalist="data" />
                    <div class="pageCon">
                        <Page
                        :total="total"
                        size="small"
                        show-total
                        @on-change="handlePage"
                        v-model="page"
                        />
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return{
            data:[],
            loading:true,
            nodata:false,
            page:1,
            total:0,
            pagesize:10,
            columns:[
                {
                    title:'Id',
                    key: "id",
                    width: 120,
                },
                 {
                    title:'Address',
                    key: "address",
                    width: 400,
                },
                 {
                    title:'Balance',
                    key: "balance",
                    width: 400,
                },
                 {
                    title:'Time',
                    key: "stamp",
                    width: 274,
                    render: (h, params) => {
                        return  h('Time',{
                            attrs:{
                                time: params.row.stamp
                            }
                        })
                    },
                }
            ]
        }
    },
    created() {
        this.getDetail(this.$route.params.id,this.page);
    },
    methods: {
        getDetail(id,page){
             this.$axios.get('/'+this.$store.state.explorer+"/daily-account-eth/list?pageNum="+page+"&pageSize="+this.pagesize+"&address="+id).then(({data})  => {
                if(data.code != '-1'&&data.data.list != null){

                    this.data = data.data.list;
                    this.total = data.data.total;

                }else{
                    console.log(data.code,data.msg)
                }
            this.loading = false;
        })
        },
        isNaNdata:function(bool){
            this.nodata = bool;
        },
        handlePage(page){
            this.loading = true;
            this.getDetail(this.$route.params.id,page)
            // console.log(page)
        },
    },
    mounted() {
        
    },

}
</script>