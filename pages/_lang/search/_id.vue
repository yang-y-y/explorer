<template>
    <div class="searchPage">
        <Headmobile />
        <div class="container">
            <div class="searchInfo">
                <div class="searchForm">
                    <Input search enter-button placeholder="Enter something..." @on-search="searchInfo" v-model="searchData"/>
                </div>
                <div class="searchResult">
                    <h3> 我们查询到 12 个结果</h3>
                    <div class="cards">
                        <div class="card-head">
                            <div class="names">
                                <img src="~/assets/img/eth.png" height="30" alt="">
                                ETH
                                <span>
                                    Ethereum
                                </span>
                            </div>
                            <div class="intros">
                                交易哈希：1232132132132
                            </div>
                        </div>
                        <div class="card-content">
                            <ul>
                                <li>
                                    <div class="key">
                                        余额
                                    </div>
                                    <div class="vol">
                                        123
                                    </div>
                                </li>
                                <li>
                                    <div class="key">
                                        交易数量
                                    </div>
                                    <div class="vol">
                                        53
                                    </div>
                                </li>
                                <li>
                                    <div class="key">
                                        余额
                                    </div>
                                    <div class="vol">
                                        123
                                    </div>
                                </li>
                                <li>
                                    <div class="key">
                                        交易数量
                                    </div>
                                    <div class="vol">
                                        53
                                    </div>
                                </li>
                                
                            </ul>
                           
                        </div>
                         <div class="morelink">
                            <a href="">了解更多>></a>
                        </div>
                    </div>
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
            searchData:''
        }
    },
    methods: {
        findBlock(type,id){
            // this.$axios.get(type+"/block/find?id="+id).then(({data})  => {
            //     this.data = data.data;
            //     console.log(res)
            // })
        },
        searchInfo(e){
             let isnumb = e.replace(/\"/g,"");
                 if(id.length==66){
                     this.getUrlData('/eth/transaction/list?address='+id)
                }else if(id.length==42){
                    this.getUrlData('/eth/eth-account/find?address='+id)
                }else if(isNaN(isnumb) == false&&id){
                   this.getUrlData('/eth/block/find?id='+id)
                }else{
                    this.data = ''
                }
        },
        getUrlData(url){
            this.$axios.get(url).then(({data})  => {
                this.data = data.data;
            })
        }

    },
     mounted() {
         this.findBlock(this.type,this.findval)
     }

      
}
</script>