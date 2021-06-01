<template>
  <div class="list">
    <Headmobile />
    <Headsearch crumbs="address" v-on:handleNodata="isNaNdata"/>
    <mynavs page_index="6" />
    <Nodata v-if="nodata" v-on:reload="isNaNdata"/>
    <div class="main" v-else>
        <div class="title-con">
        <div class="container">
            <div class="title-global">
            <h2>{{$t('newAddress.title')}}</h2>
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
      title: this.$t('head.address.title'),
      meta: [
          {
          hid: "description",
          name: "description",
          content: this.$t('head.address.description'),
          },
          {
          hid: "keywords",
          name: "keywords",
          content: this.$t('head.address.keywords'),
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
          title: this.$t('newAddress.height'),
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
                    "/block/" +
                    params.row.block_id,
                },
              },
              params.row.block_id
            );
          },
        },
        {
          title: this.$t('newAddress.address'),
          key: "address",
          width: 420,
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
                        "/address/" +
                        params.row.address
                    },
                  },
                  params.row.address
                ),
              ]
            );
          },
        },
        {
          title: this.$t('newAddress.time'),
          key: "created",
          width: 210,
          render: (h, params) => {
             return  h('Time',{
                  attrs:{
                      time: params.row.created
                  }
              })
          },
          
        },
        {
          title: this.$t('newAddress.num'),
          key: "txn",
          width: 210,
        },  
        {
          title: this.$t('newAddress.count'),
          key: "balance",
          width: 206,
        },
      ],
    };
  },
  created() {},
  methods: {
    getDetail(page) {
      this.$axios.get("/" + this.$store.state.explorer + "/eth-account/newestList?pageNum="+page)
        .then(({data})  => {
          if (data.code != "-1") {
            this.data = data.data.list;
            this.total = data.data.total;
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
    this.getDetail(this.page);
  },
};
</script>