<template>
  <div class="chartslist">
    <Headmobile />
    <Headsearch crumbs="charts" v-on:handleNodata="isNaNdata" />
    <Mynavs page_index="2" />
    <Nodata v-if="nodata" v-on:reload="isNaNdata"/>
    <div class="main" v-else>
      <div class="title-con">
        <div class="container">
          <div class="title-global">
            <h2>{{$t('chartInfo.marketInfo')}}</h2>
          </div>
        </div>
      </div>
      <div class="chartinfo">
        <div class="container">
            <div class="view">
                <div class="chartTitle">{{$t('chartInfo.title.coinPrice')}}</div>
                <x-chart id="c0" :option="initdata(global.blockPrice)"></x-chart>
            </div>
        </div>
      </div>
       
      <div class="title-con">
        <div class="container">
          <div class="title-global">
            <h2>{{$t('chartInfo.blockInfo')}}</h2>
          </div>
        </div>
      </div>
      <div class="chartinfo">
        <div class="container">
          <div class="view">
            <div class="chartTitle">{{$t('chartInfo.title.blockNum')}}</div>
            <x-chart id="c1" :option="initdata(global.blockNum)"></x-chart>
          </div>
          <div class="view">
            <div class="chartTitle">{{$t('chartInfo.title.blockSize')}}</div>
            <x-chart id="c2" :option="initdata(global.blockSize)"></x-chart>
          </div>
          <div class="view">
            <div class="chartTitle">{{$t('chartInfo.title.blockTime')}}</div>
            <x-chart id="c3" :option="initdata(global.blockTime)"></x-chart>
          </div>
        </div>
      </div>
      <div class="title-con">
        <div class="container">
          <div class="title-global">
            <h2>{{$t('chartInfo.netInfo')}}</h2>
          </div>
        </div>
      </div>
      <div class="chartinfo">
        <div class="container">
          <div class="view">
            <div class="chartTitle">{{$t('chartInfo.title.dailyDiff')}}（P）</div>
            <x-chart id="c4" :option="initdata(global.blockDifficulty)"></x-chart>
          </div>
        </div>
      </div>

      <div class="title-con">
        <div class="container">
          <div class="title-global">
            <h2>{{$t('chartInfo.miner')}}</h2>
          </div>
        </div>
      </div>
      <div class="chartinfo">
        <div class="container">
          <div class="view">
            <div class="chartTitle">{{$t('chartInfo.title.blockReward')}}（ETH）</div>
            <x-chart id="c5" :option="initdata(global.blockReward)"></x-chart>
          </div>
          <div class="view">
            <div class="chartTitle">{{$t('chartInfo.title.dailyUncleReward')}}（ETH）</div>
            <x-chart id="c6" :option="initdata(global.uncleReward)"></x-chart>
          </div>
          <div class="view">
            <div class="chartTitle">{{$t('chartInfo.title.dailyFee')}}</div>
            <x-chart id="c8" :option="initdata(global.fee)"></x-chart>
          </div>
        </div>
      </div>
      <div class="title-con">
        <div class="container">
          <div class="title-global">
            <h2>{{$t('chartInfo.transInfo')}}</h2>
          </div>
        </div>
      </div>
      <div class="chartinfo">
        <div class="container">
            <div class="view">
                <div class="chartTitle">{{$t('chartInfo.title.dailyTotalAmount')}}（ETH）</div>
                <x-chart id="c7" :option="initdata(global.amount)"></x-chart>
            </div>
            
            <div class="view">
                <div class="chartTitle">{{$t('chartInfo.title.dailyAmountNum')}}</div>
                <x-chart id="c9" :option="initdata(global.txn_total)"></x-chart>
            </div>
        </div>
      </div>
      <div class="title-con">
        <div class="container">
          <div class="title-global">
            <h2>{{$t('chartInfo.activity')}}</h2>
          </div>
        </div>
      </div>
      <div class="chartinfo">
        <div class="container">
            <div class="view">
                <div class="chartTitle">{{$t('chartInfo.title.newAnd')}}</div>
                <x-chart id="c10" :option="initdata(global.new_accounts)"></x-chart>
            </div>
        </div>
      </div>
      <div class="title-con">
        <div class="container">
          <div class="title-global">
            <h2>{{$t('chartInfo.gasInfo')}}</h2>
          </div>
        </div>
      </div>
      <div class="chartinfo">
        <div class="container">
            <div class="view">
                <div class="chartTitle">{{$t('chartInfo.title.totalGasUsed')}}</div>
                <x-chart id="c11" :option="initdata(global.gas_used)"></x-chart>
            </div>
            <div class="view">
                <div class="chartTitle">{{$t('chartInfo.title.gasLimit')}}</div>
                <x-chart id="c12" :option="initdata(global.gas_limit)"></x-chart>
            </div>
            <div class="view">
                <div class="chartTitle">{{$t('chartInfo.title.gasPrice')}}</div>
                <x-chart id="c13" :option="initdata(global.gas_price)"></x-chart>
            </div>
        </div>
      </div>
      <div class="title-con">
        <div class="container">
          <div class="title-global">
            <h2>{{$t('chartInfo.uncle')}}</h2>
          </div>
        </div>
      </div>
      <div class="chartinfo">
        <div class="container">
            <div class="view">
                <div class="chartTitle">{{$t('chartInfo.title.uncleBlockNum')}}</div>
                <x-chart id="c14" :option="initdata(global.uncles)"></x-chart>
            </div>
            <div class="view">
                <div class="chartTitle">{{$t('chartInfo.title.daily_uncle_total_mined_coin')}}</div>
                <x-chart id="c15" :option="initdata(global.uncles_miner)"></x-chart>
            </div>
        </div>
      </div>
      <div class="title-con">
        <div class="container">
          <div class="title-global">
            <h2>{{$t('chartInfo.circul')}}</h2>
          </div>
        </div>
      </div>
      <div class="chartinfo">
        <div class="container">
          <div class="view">
              <div class="chartTitle">ETH {{$t('chartInfo.title.dailySupply')}}</div>
              <x-chart id="c16" :option="initdata(global.total)"></x-chart>
          </div>
        </div>
      </div>
     
    </div>
  </div>
</template>
<script>
import XChart from "~/pages/_lang/commen/charts.vue";

export default {
  data() {
    return {
      page: 1,
      total: 30,
      loading: true,
      nodata: false,
      global:{
        blockPrice:[],
        blockPrice: [],// 币价
        blockNum: [],// 区块数
        blockSize: [],// 区块大小
        blockTime: [], //出块耗时
        blockDifficulty:[],//难度
        blockReward:[],//区块奖励
        uncleReward:[],//叔块奖励
        amount:[], //交易总金额
        fee:[], //交易总手续费
        txn_total:[],//交易数(全部)
        new_accounts:[],//新账户数
        gas_used:[], //gas消耗
        gas_limit:[], //gas限额
        gas_price:[], //gas价格 
        total:[], //ETH总量
        uncles:[],
        uncles_miner:[] 
      },

    };
  },
  created() {
    this.getDetail(this.page,this.total);
  },
  components: {
    XChart,
  },
  methods: {
    getDetail(page,total) {
      this.$axios.get(
          "/" + this.$route.params.explorer + "/daily-block/list?pageSize="+total+'&pageNum='+page
        )
        .then(({data})  => {
          if (data.code != "-1"&&data.data.list) {
            let blockdata = [];
            let blocksize = [];
            let blockusetime = [];
            let difficulty = []
            let price = []
            let blockreward = []
            let unclereward = []
            let amount =[];
            let fee =[];
            let txn_total = [];
            let new_accounts = [];
            let gas_used = [];
            let gas_limit = [];
            let gas_price = [];
            let getTime =[];
            let total = [];
            let uncles = [];
            let uncles_miner = [];
            let getdata = data.data.list;
            getdata = getdata.reverse();
            getdata.forEach((item, index, arr) => {
            //   let {reward,blocks,id} = item //es6结构
              getTime = item.id * 1000;
              price.push([getTime, item.price]);
              blockdata.push([getTime, item.blocks]); 
              blocksize.push([getTime, item.size]);
              blockusetime.push([getTime, item.consume_time]);
              blockreward.push([getTime, item.reward]);
              unclereward.push([getTime, item.uncles_reward]);
              amount.push([getTime, item.amount]);
              fee.push([getTime, item.fee]);
              txn_total.push([getTime, item.txn_total]);
              new_accounts.push([getTime, item.new_accounts]);
              gas_used.push([getTime, item.gas_used]);
              gas_limit.push([getTime, item.gas_limit]);
              gas_price.push([getTime, item.gas_price]);
              total.push([getTime, item.total])
              uncles.push([getTime, item.uncles])
              uncles_miner.push([getTime, item.uncles_miner])

              if(item.difficulty!=''){
                difficulty.push([getTime, item.difficulty])
              }

            });
            this.global={
                blockPrice:price,
                blockNum:blockdata,
                blockSize:blocksize,
                blockTime:blockusetime,
                blockDifficulty:difficulty,
                blockReward:blockreward,
                uncleReward:unclereward,
                amount:amount,
                fee:fee,
                txn_total:txn_total,
                new_accounts:new_accounts,
                gas_used:gas_used,
                gas_limit:gas_limit,
                gas_price:gas_price,
                total:total,
                uncles:uncles,
                uncles_miner:uncles_miner
            }   
            

          } else {
            console.log(data.code, data.msg);
          }
          this.loading = false;
        });
    },
    initdata(data) {
      let option = {};
      option = {
        chart: {
          type: "area", //指定图表的类型，默认是折线图（line）
          height: 164,
        },
        credits: {
          enabled: false,
        }, //去掉地址
        legend: {
          enabled: false,
        },
        title: false,
        xAxis: {
          type: "datetime",
          dateTimeLabelFormats: {
            day: "%y-%m-%d",
          },
          labels: {
            format: '{value:%m-%d}',
            style: {
              color: "#bdbec2",
            },
          },
          gridLineWidth: 0,
          lineColor:this.$store.state.theme?'#2a3040':'#ececec',
          tickColor:this.$store.state.theme?'#2a3040':'#ececec',
        },
        yAxis: 
          {
            title: false,
            labels: {
              format: "{value}",

              style: {
                color: "#bdbec2",
              },
              align: "left",
              x: 0,
            },
            opposite: false,
            gridLineColor:this.$store.state.theme?'#2a3040':'#ececec'
          },
        plotOptions: {
          area: {
            fillColor: {
              linearGradient: {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1,
              },
              stops: [
                [0, "rgba(72,120,255,0.3)"],
                [1, "rgba(255,255,255,0.1)"], //这里就是设置渐变色的代码
              ],
            },
          },
        },
        series: [
          {
            name: "123",
            data: data,
            color: this.$store.state.theme?'#4878FF':'#00217D',
            lineWidth: 1.5,
            marker: {
              enabled: false,
            },
          },
        ],
      };

      return option;
    },
    handlePage(page) {
      this.loading = true;
      this.getDetail(page);
      // console.log(page)
    },
    isNaNdata: function (bool) {
      this.nodata = bool;
    },
  },

  mounted() {
  },
};
</script>