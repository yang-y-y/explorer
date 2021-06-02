<template>
    <div class="blockPage">
        <Headmobile />
        <Headsearch crumbs="uncleblock" v-on:handleNodata="isNaNdata"/>
        <mynavs page_index='3'/>
        <Nodata v-if="nodata" v-on:reload="isNaNdata"/>
        <div class="main" v-else>
            <div class="title-con">
                <div class="container">
                    <div class="title-global">
                    <h2>区块信息</h2>
                    </div>
                </div>
            </div>
            <div class="blockDetail">
                <div class="container">
                    <div class="detail">
                        <h4> {{$route.params.id}}</h4>
                        <p>{{data.hash}}</p>
                        <div class="infos">
                        <ul>
                            <li>
                                <div class="types">时间</div>
                                <div class="vals">{{data.stamp}}</div>
                            </li>
                            <li>
                                <div class="types">大小</div>
                                <div class="vals">{{data.size}}</div>
                            </li>
                            <li>
                                <div class="types">交易费</div>
                                <div class="vals">{{data.fee}}</div>
                            </li>
                            <li>
                                <div class="types">交易数量</div>
                                <div class="vals">{{data.amount}}</div>
                            </li>
                            <li>
                                <div class="types">Gas 使用量</div>
                                <div class="vals">{{data.gas_limit}}</div>
                            </li>
                            <li>
                                <div class="types">挖矿难度</div>
                                <div class="vals">{{data.difficulty}}</div>
                            </li>
                            <li>
                                <div class="types">总难度</div>
                                <div class="vals">{{data.difficulty_total}}</div>
                            </li>
                            <li>
                                <div class="types">区块奖励</div>
                                <div class="vals">{{data.reward}}</div>
                            </li>
                            <li>
                                <div class="types">包含叔块奖励</div>
                                <div class="vals">{{data.reward_uncles}}</div>
                            </li>
                            <li>
                                <div class="types">确认数</div>
                                <div class="vals">{{data.tx_cnt}}</div>
                            </li>
                            <li>
                                <div class="types">上一个区块</div>
                                <div class="vals">{{data.parent_hash}}</div>
                            </li>
                            <li>
                                <div class="types">下一个区块</div>
                                <div class="vals">{{data.next_hash}}</div>
                            </li>
                            <li>
                                <div class="types">Sha3Uncles</div>
                                <div class="vals">{{data.sha_3_uncles}}</div>
                            </li>
                            <li>
                                <div class="types">区块附加数据</div>
                                <div class="vals">{{data.extra}}</div>
                            </li>
                            <li>
                                <div class="types">播报方</div>
                                <div class="vals">{{data.miner}}</div>
                            </li>
                            <li>
                                <div class="types">Nonce</div>
                                <div class="vals">{{data.nonce}}</div>
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
        title: this.$t('head.uncleBlockDetail.title'),
        meta: [
            {
            hid: "description",
            name: "description",
            content: this.$t('head.uncleBlockDetail.description'),
            },
            {
            hid: "keywords",
            name: "keywords",
            content: this.$t('head.uncleBlockDetail.keywords'),
            },
        ],
        };
    },
    data() {
        return{
            data:[],
            nodata:false,
        }
    },
    created() {
        this.getDetail(this.$route.params.id);

    },
    methods: {
        getDetail(id){
             this.$axios.get(this.$ApiUrl.Api.uncleFind+"?block="+id).then(({data})  => {
                 if(data.code!=0){
                    this.data = data.data[0];
                 }
                console.log(data)
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