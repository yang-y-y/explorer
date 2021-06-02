<template>
    <div class="blockPage">
        <Headmobile />
        <Headsearch crumbs="transaction" v-on:handleNodata="isNaNdata"/>
        <mynavs page_index='4'/>
        <Nodata v-if="nodata" v-on:reload="isNaNdata"/>
        <div class="main">
            <Spin size="large" fix v-if="loading"></Spin>
            <div class="title-con">
                <div class="container">
                    <div class="title-global">
                    <h2>{{$t('Transaction.title')}}</h2>
                    </div>
                </div>
            </div>
            <div class="blockDetail">
                <div class="container">
                    <div class="detail">
                        <h4> {{$route.params.id}}</h4>
                        <div class="infos">
                        <ul>
                            <li>
                                <div class="types">{{$t('Transaction.TransactionStatus')}}</div>
                                <div class="vals"><span class="success" v-if="data.status==0">Success</span><span class="error" v-else>Pending</span></div>
                            </li>
                            <li>
                                <div class="types">{{$t('Transaction.Included')}}</div>
                                <div class="vals"><nuxt-link :to="'/'+this.$route.params.lang+'/block/'+data.block_id">{{data.block_id}}</nuxt-link></div>
                            </li>
                            <li>
                                <div class="types">{{$t('Transaction.Time')}}</div>
                                <div class="vals"><Time :time="data.stamp||0" /></div>
                            </li>
                            <li>
                                <div class="types">{{$t('transaction.from')}}</div>
                                <div class="vals"><nuxt-link :to="'/'+this.$route.params.lang+'/address/'+data.from">{{data.from}}</nuxt-link></div>
                            </li>
                            <li>
                                <div class="types">{{$t('transaction.to')}}</div>
                                <div class="vals"><nuxt-link :to="'/'+this.$route.params.lang+'/address/'+data.to">{{data.to}}</nuxt-link></div>
                            </li>
                            <li>
                                <div class="types">{{$t('Transaction.AmountTransacted')}}</div>
                                <div class="vals">{{data.amount}}</div>
                            </li>
                            <li>
                                <div class="types">{{$t('Transaction.GasUsed')}}</div>
                                <div class="vals">{{data.gas_used}}</div>
                            </li>
                            <li>
                                <div class="types">{{$t('Transaction.GasLimit')}}</div>
                                <div class="vals">{{data.gas_limit}}</div>
                            </li>
                            <li>
                                <div class="types">{{$t('Transaction.GasPrice')}}</div>
                                <div class="vals">{{data.gas_price}}</div>
                            </li>
                            <li>
                                <div class="types">{{$t('Transaction.TransactionFee')}}</div>
                                <div class="vals">{{data.fee}}</div>
                            </li>
                            <li>
                                <div class="types">{{$t('Transaction.Confirmations')}}</div>
                                <div class="vals">{{data.index}}</div>
                            </li>
                            <li>
                                <div class="types">Nonce</div>
                                <div class="vals">{{data.nonce}}</div>
                            </li>
                            <li>
                                <div class="types">{{$t('Transaction.inputdata')}}</div>
                                <div class="vals">{{data.input}}</div>
                            </li>
                        </ul>
                        </div>
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
        title: this.$t('head.txDetail.title'),
        meta: [
            {
            hid: "description",
            name: "description",
            content: this.$t('head.txDetail.description'),
            },
            {
            hid: "keywords",
            name: "keywords",
            content: this.$t('head.txDetail.keywords'),
            },
        ],
        };
    },
    data() {
        return{
            data:[],
            loading:true,
            nodata:false,
        }
    },
    created() {
        this.getDetail(this.$route.params.id);
    },
    methods: {
        getDetail(id){
             this.$axios.get(this.$ApiUrl.Api.transactionFind+"?hash="+id).then(({data})  => {
                if(data.code != '-1'){
                    this.data = data.data;
                }else{
                    console.log(data.code,data.msg)
                    this.nodata = true;
                }
            this.loading = false;
        })
        },
        isNaNdata:function(bool){
            this.nodata = bool;
        }
    },
    mounted() {
    },

}
</script>