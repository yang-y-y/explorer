<template>
    <div class="blockPage">
        <Headmobile />
        <Headsearch crumbs="token" v-on:handleNodata="isNaNdata"/>
        <Mynavs page_index='6'/>
        <Nodata v-if="nodata" v-on:reload="isNaNdata"/>
        <div class="main" v-else>
            <div class="title-con">
                <div class="container">
                    <div class="title-global">
                    <h2>代币信息</h2>
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
                                    <div class="types">发行量</div>
                                    <div class="vals">0</div>
                                </li>
                                <li>
                                    <div class="types">持币地址数</div>
                                    <div class="vals">0</div>
                                </li>
                                <li>
                                    <div class="types">精度</div>
                                    <div class="vals">0</div>
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
        title: this.$t('head.tokenDetail.title'),
        meta: [
            {
            hid: "description",
            name: "description",
            content: this.$t('head.tokenDetail.description'),
            },
            {
            hid: "keywords",
            name: "keywords",
            content: this.$t('head.tokenDetail.keywords'),
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
             this.$axios.get('/'+this.$route.params.explorer+"/token-account/findByAddress?address="+id).then(({data})  => {
                if(data.code != '-1'||data.data != null){
                    this.data = data.data;
                }else{
                    console.log(data.code,data.msg)
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