<template>
  <div class="home">
    <Headmobile />
    <div class="main">
      <div class="container">
        <h1>Blockchain Explorer</h1>
        <div class="searchLarge">
          <input
            type="search"
            autofocus="autofocus"
            placeholder="Search for address、transaction、block"
          />
          <input type="button" value="Search" />
        </div>
        <Mytable :columns="columns1" :loading="loading" :datalist="datalist" />
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "index",
  head() {
    return {
      title: this.$t('head.title'),
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$t('head.meta.description'),
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.$t('head.meta.keywords'),
        },
      ],
    };
  },
  data() {
    return {
      loading: true,
      columns1: [
        {
          title: this.$t('indexInfo.coin'),
          key: "name",
          width: 150,
          render: (h, params) => {
            return h("div",{
                attrs: {
                  class: "tokenname",
                },
              },[
                h("nuxt-link",{
                    attrs: {
                      to:"/" + this.$store.state.locale + "/" + params.row.name,
                      title:this.$t('altTitle.home.title'),
                      alt:this.$t('altTitle.home.alt')
                    }
                  },[
                    h("div", {
                      attrs: {
                        class: "icons",
                      },
                    },[
                        h("img",{
                          attrs:{
                            src:require('~/assets/img/eth.png'),
                            height:32
                          }
                        })
                      ]
                    ),
                    h("div", {
                      attrs: {
                        class: "names",
                      },
                    },[
                        h("div",{
                          class:'titles'
                        },
                        params.row.name
                        ),
                        h("p",params.row.code)
                        
                      ]
                    )
                    
                  ]
                ),
              ]
            );
          },
        },
        {
          title: this.$t('indexInfo.mechanism'),
          key: "type",
          width: 150,
        },
        {
          title: this.$t('indexInfo.price'),
          key: "price",
          width: 150,
        },
        {
          title: this.$t('indexInfo.updown24'),
          key: "changeUsd24h",
          width: 150,
        },
        {
          title: this.$t('indexInfo.latestBlock'),
          key: "block_no",
          width: 150,
        },
        {
          title: "tps",
          key: "tps24h",
          width: 140,
        },
        {
          title: this.$t('indexInfo.fee'),
          key: "txFee",
          width: 130,
        },
        {
          title: this.$t('indexInfo.AmountTransacted'),
          key: "txCnt",
          width: 176,
        },
      ],
      datalist: [
        {
          name: "eth",
          type: "POW",
          code:"Ethereum",
          changeUsd24h: "24",
          block_no: "12321",
          tps24h: "4.22",
          txFee: "0.0012",
          txCnt: "12312",
          price:"3822.2"
        },
      ],
    };
  },
  methods: {
    getData() {
      this.$axios.get("eth/block/list").then(({data})  => {
        this.datalist = data.data.list;
      });
    },
  },
  mounted() {
    // this.getData();
    this.loading = false;
  },
};
</script>
<style lang="less">
.home{
  .ivu-table-header{
    border-top: 1px solid #ececec !important;
  }
  }
</style>
