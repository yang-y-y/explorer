<template>
  <div class="blocklist">
    <Headmobile />
    <Headsearch crumbs="block" v-on:handleNodata="isNaNdata" />
    <Mynavs page_index="3" />
    <Nodata v-if="nodata" v-on:reload="isNaNdata"/>
    <div class="main" v-else>
      <div class="title-con">
        <div class="container">
          <div class="title-global">
            <h2>{{ $t('blockList.title') }}</h2>
          </div>
        </div>
      </div>
      <div class="table-global">
        <div class="container">
          <Mytable :columns="columns" :loading="loading" :datalist="datalist" />
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
  head() {
      return {
      title: this.$t('head.block.title'),
      meta: [
          {
          hid: "description",
          name: "description",
          content: this.$t('head.block.description'),
          },
          {
          hid: "keywords",
          name: "keywords",
          content: this.$t('head.block.keywords'),
          },
      ],
      };
  },
  // async asyncData({ $axios, store,params, query }) {
  //   let [datalist] =  await Promise.all([
  //     $axios.get('/eth/block/newestList?pageNum=1').catch(err => {console.log(err)})
  //   ]);
  //   return {
  //     datalist: datalist.data.list,
  //     page: 1,
  //     loading: false,
  //   };
  // },
  data() {
    return {
      loading: true,
      loading2: true,
      nodata: false,
      page: 1,
      total: 10,
      columns: [
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
          width: 160,
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
                      to:"/" +
                        this.$store.state.locale +
                        "/" +
                        this.$route.params.explorer +
                        "/address/" +
                        params.row.miner,
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
          width: 130,
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
          title: "最新爆块",
          key: "gas_limit",
          render:(h,params)=>{
              return h('Tooltip',{
                  attr:{
                    content:'近24小时交易笔数/24小时'
                  }
              },[
                h(
                  "Icon",
                  {
                    attrs: {
                      type:"ios-information-circle-outline"
                    },
                  },
                  params.row.miner
                ),
              ])
          }
          
        //   tps=近24小时交易笔数/24小时
        },
        {
          title: "最新爆块时间",
          key: "gas_limit",
        },
        {
          title: "tps",
          key: "gas_limit",
        },
        {
          title: "平均出块时间",
          key: "gas_limit",
        },
      ],
      datalist: [],
     
    };
  },
  created() {
    this.getDetail(this.page);
  },
  methods: {
    getDetail(page) {
      this.$axios.get("/eth/block/newestList?pageNum=" + page).then(({data})  => {
        if (data.code != "-1") {
          this.datalist = data.data.list;
          this.total = data.data.total;
        }
        this.loading = false;
      });
    },
    handlePage(page) {
      this.loading = true;
      this.getDetail(page);
    },
    isNaNdata: function (bool) {
      this.nodata = bool;
    },
  },
  mounted() {
  },
};
</script>