<template>
  <div>
    <Table :loading="loading" :columns="columns" :data="data" />
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
    
</template>
<script>
export default {
  props: ["block_id","block_address","load"],
  data() {
    return {
      loading: true,
      data: [],
      page: 1,
      total: 0,
      columns: [
        {
          title: this.$t('tokenlist.token'),
          key: "token",
          width: 300,
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
                      to: "http://www.baidu.com",
                    },
                  },
                  params.row.token
                ),
              ]
            );
          },
        },
        {
          title: this.$t('tokenlist.height'),
          key: "block_id",
          width: 140,
        },
       
        {
          title: this.$t('tokenlist.from'),
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
                      to: '/'+this.$store.state.locale+"/address/"+params.row.from,
                    },
                  },
                  params.row.from
                ),
              ]
            );
          },
        },
        {
          title: this.$t('tokenlist.to'),
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
                  "nuxt-link",
                  {
                    attrs: {
                      to: '/'+this.$store.state.locale+'/'+this.$store.state.explorer+"/address/"+params.row.to,
                    },
                  },
                  params.row.to
                ),
              ]
            );
          },
        },
        {
          title: this.$t('tokenlist.amount'),
          key: "amount",
          width: 140,
        },
         {
          title: this.$t('tokenlist.time'),
          key: "created",
          width: 136,
          render: (h, params) => {
            return h(
              "div",
              {
                attrs: {
                  class: "nowarp",
                },
              },
              [
                h('Time',{
                  attrs:{
                      time: params.row.created||0
                  }
                })
              ]
            );
          },
        },
      ],
    };
  },
  created() {

  },
  methods: {
    handlePage(page) {
      this.loading = true;
     
      if(this.block_address){
           this.getToken("address_contract",this.block_address, page);
      }
      // console.log(page)
    },
    getToken(type,id, page) {
        this.$axios.get(this.$ApiUrl.Api.transactionList + "?"+type+"="+id+"&pageNum="+page).then(({data})  => {
          if (data.code == 0&&data.data.list) {
            this.data = data.data.list;
            this.total = data.data.total;
            this.$emit('childtotal_02', data.data.total)
          } else {
            console.log(data.msg);
          }
        // this.loading = false

        });
    },
  },
  mounted(){
    
  },
  watch: {
    block_id:function (newval, oldval) {
        this.data = this.$store.state.Txnlist.tokenData;
        this.loading = false;
    },
    load:function (newval, oldval) {
        this.getToken('address_token',this.block_address, this.page);
    },
  },

};
</script>