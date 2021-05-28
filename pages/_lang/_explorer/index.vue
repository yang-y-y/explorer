<template>
  <div class="contents">
    <Headmobile />
    <Headsearch v-on:handleNodata="isNaNdata"/>
    <Mynavs page_index="0" />
    <Nodata v-if="nodata" v-on:reload="isNaNdata"/>
    <div class="main" v-else>
      <div class="dataview">
        <div class="container">
          <Row type="flex" align="middle" justify="space-between">
            <Col :xs="24" :lg="12" class="chainData">
              <h2>{{$t('coinPrice.blockData')}}</h2>
              <ul>
                <li><b>{{$t('coinPrice.latestBlock')}}</b> <span>123123</span></li>
                <li><b>{{$t('coinPrice.count')}}</b> <span>1,085,938,756</span></li>
                <li><b>{{$t('coinPrice.hashRate')}}</b> <span>{{dataInfo.Power|hashInit}}</span></li>
                <li><b>{{$t('coinPrice.trans24')}}</b> <span>{{dataInfo.TransactionsToday}}</span></li>
                <li><b>{{$t('coinPrice.holder')}}</b> <span>{{dataInfo.Address}}</span></li>
                <li><b>{{$t('coinPrice.transMount')}}</b> <span>{{dataInfo.TransferToday|parseinit}}</span></li>
                <li><b>{{$t('coinPrice.size')}}</b> <span>{{dataInfo.Size|sizeInit}}</span></li>
                <li><b>{{$t('coinPrice.diff')}}</b> <span>{{dataInfo.Difficulty|DifficultyInit}}</span></li>
              </ul>
            </Col>
            <Col :xs="24" :lg="12" class="marketData">
              <h2>{{$t('coinPrice.marketData')}}</h2>
              <ul>
                <li><b>{{$t('coinPrice.price')}}</b> <span class="up">$12,676</span></li>
                <li><b>{{$t('coinPrice.marketValue')}}</b> <span>{{dataInfo.MarketValue|parseinit}}</span></li>
                <li><b>{{$t('coinPrice.updown24')}}</b> <span class="up">+10%</span></li>
                <li><b>{{$t('coinPrice.btcys')}}</b> <span>59.12 %</span></li>
                <li><b>{{$t('coinPrice.transMount24')}}</b> <span>56,392,839</span></li>
                <li><b>{{$t('coinPrice.circul')}}</b> <span>306,894</span></li>
                <li><b>{{$t('coinPrice.volume24')}}</b> <span>{{dataInfo.TransactionsTotal}}</span></li>
                <li><b>{{$t('coinPrice.Circulate')}}</b> <span>-</span></li>
              </ul>
            </Col>
          </Row>
        </div>
      </div>
      <div class="title-con">
        <div class="container">
          <div class="title-global">
            <h2>{{$t('blockList.title')}}</h2>
          </div>
        </div>
      </div>

      <div class="table-global">
        <div class="container">
          <Mytable
            :columns="columns1"
            :loading="loading"
            :datalist="datalist"
          />
          <div class="morelink">
            <nuxt-link :to="'/'+$route.params.lang+'/'+$route.params.explorer+'/block/'" class="blue">{{$t('more')}}></nuxt-link>
          </div>
        </div>
      </div>

      <div class="title-con">
        <div class="container">
          <div class="title-global">
            <h2>{{$t('transaction.title')}}</h2>
          </div>
        </div>
      </div>

      <div class="table-global">
        <div class="container">
          <Mytable
            :columns="columns2"
            :loading="loading2"
            :datalist="datalist2"
          />
          <div class="morelink">
            <nuxt-link :to="'/'+$route.params.lang+'/'+$route.params.explorer+'/transaction/'" class="blue">{{$t('more')}}></nuxt-link>
          </div>
        </div>
      </div>

      <!-- <div class="title-con">
        <div class="container">
          <div class="title-global">
            <h2>待确认交易</h2>
          </div>
        </div>
      </div>

      <div class="table-global">
        <div class="container">
          <Mytable
            :columns="columns2"
            :loading="loading"
            :datalist="datalist2"
          />
          <div class="morelink">
            <a href="" class="blue">{{$t('more')}}></a>
          </div>
        </div>
      </div> -->

      <XRecommend/>
      <div class="title-con">
        <div class="container">
          <div class="title-global">
            <h2>什么是以太坊(ETH)?</h2>
          </div>
        </div>
      </div>
      <div class="textview">
        <div class="container">
          <div class="detail">
            <p>
              以太坊（英语：Ethereum）是一个开源的有智能合约功能的公共区块链平台。通过其专用加密货币以太币（Ether，又称以太币）提供去中心化的虚拟机（称为以太虚拟机EthereumVirtualMachine）来处理点对点合约。以太坊的概念首次在2013至2014年间由程序员维塔利克·布特林受比特币启发后提出，大意为下一代加密货币与去中心化应用平台，在2014年透过ICO众筹得以开始发展。截至2018年6月，以太币是市值第二高的加密货币，以太坊亦被称为第二代的区块链平台，仅次于比特币。
            </p>
            <p>
              Ethereum(ETH)的最新价格是$1,753，
              Ethereum价格在过去24小时涨跌幅为+1.71%， 成交额为$
              17,899,951,575， Ethereum流通量是115,246,587 ETH，
              最大供应量是115,246,587 ETH。
              bitforex是Ethereum当前交易深度最好的市场。
              如果想了解Ethereum(ETH)区块链上的交易数据，您可以使用区块浏览器，
              EtherscanEthplorerBlockchairTokenviewHecoinfo.
            </p>
          </div>
          <div class="morelink">
            <a href="" class="blue">{{$t('more')}}></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import filters from "~/plugins/filter_plus.js";
import headmobile from '../commen/headmobile.vue';
import XRecommend from '../commen/recommend.vue';
export default {
  components: { headmobile,XRecommend },
  head() {
    return {
      title: "Ethereum Explorer",
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.description,
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.keywords,
        },
      ],
    };
  },
  data() {
    return {
      loading: true,
      loading2: true,
      nodata:false,
      explorer_code: "Ethereum",
      description:
        "Ethereum Block Explorer lets users track eth address, transaction, eth price and eth mining. Via this Block Explorer, you can lookup all the eth coin info and latest block.",
      keywords:
        "ethereum, eth vs btc, ethereum news,ethereum explorer, ethereum price, ethereum chart, ethereum coin, etherum mining, eth price",
      columns1: [
        {
          title: this.$t('blockList.height'),
          key: "id",
          width: 120,
          render: (h, params) => {
            return h(
              "nuxt-link",
              {
                attrs: {
                  to:
                    "/" +
                    this.$store.state.locale +
                    "/" +
                    this.$route.params.explorer +
                    "/block/" +
                    params.row.id,
                },
              },
              params.row.id
            );
          },
        },
        {
          title: this.$t('blockList.miner'),
          key: "miner",
          width: 180,
          render: (h, params) => {
            return h(
              "div",
              {
                attrs: {
                  class: "nowarp",
                },
              },
              [
                h(
                  "nuxt-link",
                  {
                    attrs: {
                      to: "/" +
                    this.$store.state.locale +
                    "/" +
                    this.$route.params.explorer +
                    "/address/" +params.row.miner,
                    title:params.row.miner
                    },
                  },
                  params.row.miner
                ),
              ]
            );
          },
        },
        {
          title: this.$t('blockList.time'),
          key: "stamp",
          width: 110,
          render: (h, params) => {
            return  h('Time',{
                attrs:{
                    time: params.row.stamp || 0
                }
            })
          },
        },
        {
          title: this.$t('blockList.gasused'),
          key: "gas_used",
          width: 160,
        },
        {
          title: this.$t('blockList.size')+'(Bytes)',
          key: "size",
          width: 170,
        },
        {
          title: this.$t('blockList.reward')+'('+this.$route.params.explorer+')',
          key: "reward",
          width: 170,
        },
        {
          title:this.$t('blockList.transNum'),
          key: "gas_limit",
          width: 130,
        },
        {
          title:this.$t('blockList.amount')+'('+this.$route.params.explorer+')',
          key: "amount",
          width: 156,
        },
      ],
      columns2: [
        {
          title: this.$t('pending.hash'),
          key: "hash",
          width: 170,
          render: (h, params) => {
            return h(
              "div",
              {
                attrs: {
                  class: "nowarp",
                },
              },
              [
                h(
                  "nuxt-link",
                  {
                    attrs: {
                      to:
                        "/" +
                        this.$store.state.locale +
                        "/" +
                        this.$route.params.explorer +
                        "/transaction/" +
                        params.row.hash,
                    },
                  },
                  params.row.hash
                ),
              ]
            );
          },
        },
        {
          title: this.$t('pending.time'),
          key: "stamp",
          width: 140,
          render: (h, params) => {
            return  h('Time',{
                attrs:{
                    time: params.row.stamp || 0,
                }
            })
          },
        },
        {
          title: this.$t('pending.gasLimit'),
          key: "gas_limit",
          width: 140,
        },
        {
          title: this.$t('pending.gasPrice'),
          key: "gas_price",
          width: 130,
        },
        {
          title: this.$t('pending.from'),
          key: "from",
          width: 240,
          render: (h, params) => {
            return h(
              "div",
              {
                attrs: {
                  class: "nowarp",
                },
              },
              [
                h(
                  "nuxt-link",
                  {
                    attrs: {
                      to: "/",
                    },
                  },
                  params.row.from
                ),
              ]
            );
          },
        },
        {
          title: this.$t('pending.to'),
          key: "to",
          width: 240,
          render: (h, params) => {
            return h(
              "div",
              {
                attrs: {
                  class: "nowarp",
                },
              },
              [
                h(
                  "a",
                  {
                    attrs: {
                      href: "/",
                    },
                  },
                  params.row.to
                ),
              ]
            );
          },
        },
        {
          title: this.$t('pending.amount'),
          key: "amount",
          width: 136,
        },
      ],
      dataInfo:[],
      datalist: [],
      datalist2: [],
      currentTime: 0,
      timeObj: null, // 时间对象,下方会用到
      myHours: "00", // 我定义来接收计算出来的 小时 的
      myMinutes: "00", // 我定义来接收计算出来的 分钟 的
      mySeconds: "00", // 我定义来接收计算出来的 秒钟 的
    };
  },
  created() {
    this.getData();
  },
  methods: {
    isNaNdata:function(bool){
        this.nodata = bool;
    },
    
    getData() {
      this.$axios.get("eth/main/info").then(({data})  => {
        if(data.data){
           this.dataInfo = data.data
        }
      });
      this.$axios.get("eth/block/newestList").then(({data})  => {
        if(data.data){
           this.datalist = data.data.list;
        }
       
        this.loading = false;
      });
      this.$axios.get("eth/transaction/newestList").then(({data})  => {
        if(data.data){
        this.datalist2 = data.data.list;

        }
        this.loading2 = false;
      });
    },
    testTimer() {
      this.timeFunction();
      setInterval(() => {
        this.timeFunction();
      }, 1000);
    },
    timeFunction() {
      // 开始执行倒计时
      this.timeObj = {
        // 时间对象
        seconds: Math.floor(this.currentTime % 60),
        minutes: Math.floor(this.currentTime / 60) % 60,
        hours: Math.floor(this.currentTime / 60 / 60) % 24,
      };
      // 计算出时分秒
      this.myHours = this.timeObj.hours < 10 ? "0" + this.timeObj.hours : this.timeObj.hours;
      this.myMinutes = this.timeObj.minutes < 10 ? "0" + this.timeObj.minutes : this.timeObj.minutes;
      this.mySeconds = this.timeObj.seconds < 10 ? "0" + this.timeObj.seconds : this.timeObj.seconds;
      
      this.currentTime++;
    },
  },
  mounted() {
    this.testTimer();
  },
  filters: {
    //数据过滤
  },
};
</script>
