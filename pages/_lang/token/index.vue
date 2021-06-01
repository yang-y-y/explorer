<template>
  <div class="list">
    <Headmobile />
    <Headsearch crumbs="token" v-on:handleNodata="isNaNdata" />
    <mynavs page_index="7" />
    <Nodata v-if="nodata" v-on:reload="isNaNdata"/>
    <div class="main" v-else>
      <div class="title-con">
        <div class="container">
          <div class="title-global">
            <h2>{{$t('tokenlist.title')}}</h2>
          </div>
        </div>
      </div>
      <div class="table-global">
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
  head() {
      return {
      title: this.$t('head.tokenList.title'),
      meta: [
          {
          hid: "description",
          name: "description",
          content: this.$t('head.tokenList.description'),
          },
          {
          hid: "keywords",
          name: "keywords",
          content: this.$t('head.tokenList.keywords'),
          },
      ],
      };
  },
  data() {
    return {
      data: [],
      page: 1,
      total: 10,
      loading:true,
      nodata:false,
      columns: [
        {
          title:this.$t('tokenlist.token'),
          key: "id",
          width: 150,
          render: (h, params) => {
            return h(
              "nuxt-link",
              {
                attrs: {
                  to:
                    "/" +
                    this.$store.state.locale +
                    "/" +
                    this.$store.state.explorer +
                    "/token/" +
                    params.row.token,
                },
              },
              params.row.token
            );
          },
        },
        {
          title:this.$t('tokenlist.price'),
          key: "price",
          width: 420
        },
        {
          title:this.$t('tokenlist.24hVomule'),
          key: "created",
          width: 210
        },
        {
          title:this.$t('tokenlist.market'),
          key: "market",
          width: 210,
        },
        {
          title: this.$t('tokenlist.holder'),
          key: "holder",
          width: 206,
        },
      ],
    };
  },
  created() {
    this.getDetail(this.page);
  },
  methods: {
    getDetail(page) {
      this.$axios.get("/" + this.$store.state.explorer + "/token/list?pageNum="+page)
        .then(({data})  => {
          if (data.code != "-1"||data.data!=null) {
            this.data = data.data.list;
            this.total = data.data.total
          } else {
            console.log(data.code, data.msg);
          }
          this.loading = false;
        });
    },
    handlePage(page){
        this.loading = true;
        this.getDetail(page)
        // console.log(page)
    },
    isNaNdata:function(bool){
      this.nodata = bool;
    }

  },
  mounted() {
  },
};
</script>