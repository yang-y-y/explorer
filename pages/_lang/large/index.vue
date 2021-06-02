<template>
  <div class="list">
    <Headmobile />
    <Headsearch crumbs="token" v-on:handleNodata="isNaNdata" />
    <mynavs page_index="1" />
    <Nodata v-if="nodata" v-on:reload="isNaNdata"/>
    <div class="main" v-else>
      <div class="title-con">
        <div class="container">
          <div class="title-global">
            <h2>大额追踪</h2>
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
  data() {
    return {
      data: [],
      page: 1,
      total: 10,
      loading:true,
      nodata:false,
      columns: [
        {
          title: "区块高度",
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
          title: "地址",
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
          title: "首笔交易时间",
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
          title: "交易笔数",
          key: "txn",
          width: 210,
        },
        {
          title: "余额",
          key: "balance",
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
      this.$axios.get(this.$ApiUrl.Api.toList + "?pageNum="+page)
        .then(({data})  => {
          if (data.code != "-1") {
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