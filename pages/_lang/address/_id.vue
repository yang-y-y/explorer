<template>
    <div class="addressPage">
        <Headmobile />
        <Headsearch crumbs="address" v-on:handleNodata="isNaNdata"/>
        <mynavs page_index='6'/>
        <Nodata v-if="nodata" v-on:reload="isNaNdata"/>
        <div class="main" v-else>
            <div class="title-con">
                <div class="container">
                    <div class="title-global">
                    <h2>{{$t('address.title')}}</h2>
                    </div>
                </div>
            </div>
            <div class="blockDetail">
                <div class="container">
                    <div class="detail">
                        <h4><span v-if="addressType">{{$t('address.ContractAddr')}}</span><span v-else>{{$t('address.NormalAddr')}}</span> {{$route.params.id}} <i @click="StringCopy(false,$route.params.id)"><Icon type="ios-copy" />{{$t('utils.copy')}}</i>
                           <i class="ewmcode" @mouseover="handleHover" @mouseout="handleOut" ><Icon type="ios-qr-scanner" />{{$t('utils.code')}}<vue-qr v-show="isshow" :margin="0" :text="downloadData.url"  colorDark="#000" colorLight="#fff" :logoSrc="downloadData.icon + '?cache'" :logoScale="0.2" :size="140" ></vue-qr></i>
                        
                        </h4>
                        <div class="infos">
                        <ul>
                            <li>
                                <div class="types">{{$t('address.Balance')}}</div>
                                <div class="vals">{{data.balance}}</div>
                            </li>
                            <li>
                                <div class="types">{{$t('address.tokenBalance')}}</div>
                                <div class="vals"><nuxt-link :to="this.$route.params.lang?'/'+this.$route.params.lang+'/tokentxns/'+$route.params.id:'/tokentxns/'+$route.params.id">{{$t('address.lookToken')}}</nuxt-link></div>
                            </li>
                            <li>
                                <div class="types">{{$t('address.TotalTransactions')}}</div>
                                <div class="vals">{{data.txn}}</div>
                            </li>
                            <li>
                                <div class="types">{{$t('address.Rank')}}</div>
                                <div class="vals">{{data.rank||0}}</div>
                            </li>
                            <li>
                                <div class="types">Nonce</div>
                                <div class="vals">{{data.nonce||0}}</div>
                            </li>
                            
                        </ul>
                        </div>
                    </div>
                    <div class="tabCon">
                        <Tabs type="card" :animated="false" @on-click="handloeTab">
                        <TabPane :label="$t('address.Transactions') + '(' + total_01 + ')'">
                            <find-Transaction
                            :block_address="block_address"
                            :load="this.load1"
                            v-on:childtotal_01="childtotal_01"
                            />
                        </TabPane>
                        <TabPane
                            :label="$t('address.tokenBalance')+'(' + total_02 + ')'"
                        >
                            <find-Token :block_address="block_address" 
                            v-on:childtotal_02="childtotal_02"
                            :load="this.load2"
                            />
                        </TabPane>
                        <TabPane
                            :label="$t('address.callTransfer')+'(' + total_03 + ')'"
                        >
                            <find-contract :block_address="block_address" 
                            v-on:childtotal_03="childtotal_03"
                            :load="this.load3"
                            />
                        </TabPane>
                        
                        </Tabs>
                    </div>
                
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import findTransaction from "~/pages/_lang/commen/findTransaction.vue";
import findToken from "~/pages/_lang/commen/findToken.vue";
import findBlocks from "~/pages/_lang/commen/findBlocks.vue";
import findContract from "~/pages/_lang/commen/findContract.vue";
import {StringCopy} from "~/plugins/util.js"
import vueQr from 'vue-qr'
export default { 
    data() {
        return{
            data:{
                balance:'',
                txn:'',
                rank:'',
                nonce:''
            },
            isshow:false,
            loading:true,
            nodata:false,
            block_address:this.$route.params.id,
            total_01:0,
            total_02:0,
            total_03:0,
            total_04:0,
            load1:true,
            load2:false,
            load3:false,
            addressType:false,//判断是否合约地址
            downloadData: {
                url: this.$route.params.id,
                icon: require('~/assets/img/logo_small.png')
            }

        }
    },
    created() {

    },
    components: {
        vueQr,
        findTransaction,
        findToken,
        findBlocks,
        findContract
    },
    methods: {
        StringCopy, //导入的copy方法
        addressTypeof(id){
            this.$axios.get(this.$ApiUrl.Api.isSmartContractAddress+"?address="+id).then(({data})  => {
                if(data.code != '-1'&&data.data!=null){
                    this.addressType = data.data.valid
                }else{
                    console.log(data.code,data.msg)
                }
           })
        },
        getDetail(id){
             this.$axios.get(this.$ApiUrl.Api.acountFind+"?pageSize=20&address="+id).then(({data})  => {
                 
                if(data.code != '-1'&&data.data!=null){
                    this.data = data.data;
                    
                }else{
                    console.log(data.code,data.msg)
                }
            this.loading = false;
        })
        },
        handleHover(){
            this.isshow = true;
        },
        handleOut(){
            this.isshow = false;
        },
        childtotal_01: function (childtotal_01) {
        this.total_01 = childtotal_01;
        },
        childtotal_02: function (childtotal_02) {
        this.total_02 = childtotal_02;
        },
        childtotal_03: function (childtotal_03) {
        this.total_03 = childtotal_03;
        },
        childtotal_04: function (childtotal_04) {
        this.total_04 = childtotal_04;
        },
        isNaNdata:function(bool){
           this.nodata = bool;
        },
        handloeTab(name){
            if(name == 0){
                this.load1= true;
            }else if(name == 1){
                this.load2= true;
            }else{
                this.load3= true;
            }
        }
    },
    mounted() {
        this.getDetail(this.$route.params.id);
        this.addressTypeof(this.$route.params.id);
        console.log(StringCopy)
    },

}
</script>