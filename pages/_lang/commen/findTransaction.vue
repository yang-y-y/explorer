<template>
  <div>
    <Mytable :loading="loading" :columns="columns" :datalist="data" />
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
          title: this.$t('transaction.hash'),
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
                      to:this.$route.params.lang?'/'+this.$route.params.lang:''+"/block/"+params.row.id
                    },
                  },
                  params.row.hash
                ),
              ]
            );
          },
        },
        {
          title:  this.$t('transaction.time'),
          key: "stamp",
          width: 140,
          render: (h, params) => {
             return  h('Time',{
                  attrs:{
                      time: params.row.stamp
                  }
              })
          },
        },
        {
          title: this.$t('transaction.gasLimit'),
          key: "gas_limit",
          width: 140,
        },
        {
          title: this.$t('transaction.gasPrice'),
          key: "gas_price",
          width: 130,
        },
        {
          title:  this.$t('transaction.from'),
          key: "from",
          width: 190,
          render: (h, params) => {
            return h(
             "Tooltip",
              {
                attrs: {
                  content: params.row.from, 
                  placement:"top",
                  "max-width":'100%'
                },
              },
              [
                h(
                  "nuxt-link",
                  {
                    attrs: {
                     to:this.$route.params.lang?'/'+this.$route.params.lang:''+"/address/"+params.row.from
                    },
                  },
                  params.row.from
                ),
              ]
            );
          },
        },
        {
          title: this.$t('transaction.to'),
          key: "to",
          width: 150,
          render: (h, params) => {
            return h(
             "Tooltip",
              {
                attrs: {
                  content: params.row.to, 
                  placement:"top",
                  "max-width":'100%'
                },
              },
              [
                h(
                  "nuxt-link",
                  {
                    attrs: {
                     to:this.$route.params.lang?'/'+this.$route.params.lang:''+"/address/"+params.row.to
                    },
                  },
                  params.row.to
                ),
              ]
            );
          },
        },
        {
          title: this.$t('transaction.transAmount'),
          key: "gas_used",
          width: 160,
        },
        {
          title: this.$t('transaction.fee'),
          key: "fee",
          width: 116,
        },
      ],
    };
  },
  created() {
     if (this.block_id) {
      this.getTransaction("block_id",this.block_id, this.page);
    }
    if(this.block_address&&this.load){
      this.getTransaction("address",this.block_address, this.page);
    }
  },
  methods: {
    handlePage(page) {
      this.loading = true;
      if(this.block_id){
          this.getTransaction("block_id",this.block_id,page);
      }
      if(this.block_address){
           this.getTransaction("address",this.block_address, page);
      }
      // console.log(page)
    },
    getTransaction(type,id, page) {
      this.$axios.get(this.$ApiUrl.Api.transactionList+"?"+type+"=" +
            id +
            "&pageNum=" +
            page
        )
        .then(({data})  => {
          if (data.code == 0 && data.data.total >= 1) {
            this.data = data.data.list;
            this.total = data.data.total;
            this.$emit('childtotal_01', data.data.total)
            
            let dlist = data.data.list;

            let tokenData = []; //token交易数据
            let contractData = []; //合约交易数据

            for(let i=0;i< dlist.length;i++){
              if(dlist[i].token!==''){
                tokenData.push(dlist[i])
              }
            }

            for(let i=0;i< dlist.length;i++){
              var reg = '0x0000';
              if(dlist[i].contract_address.search(reg)!=0){
                contractData.push(dlist[i])
              }
            }
            this.$store.commit('setTxnlist', {tokenData,contractData});

          } else {
            console.log(data.msg);
          }
          this.loading = false;
        });
    },
  },
  mounted() {
   
  },
  watch: {
    block_id:function (newval, oldval) {
        this.getTransaction("block_id",this.block_id, this.page);
    },
    load:function(){
      this.getTransaction("address",this.block_address, this.page);
    }
  },
};
</script>