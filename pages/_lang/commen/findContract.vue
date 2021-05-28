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
          title: "ID",
          key: "id",
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
                      to:'/'+this.$store.state.locale+'/'+this.$route.params.explorer+"/block/"+params.row.id
                    },
                  },
                  params.row.id
                ),
              ]
            );
          },
        },
        {
          title: "区块高度",
          key: "height",
          width: 140
        },
        {
          title: "时间",
          key: "gas_limit",
          width: 170,
          render: (h, params) => {
             return  h('Time',{
                  attrs:{
                      time: params.row.stamp
                  }
              })
          },
        },
        {
          title: "从",
          key: "from",
          width: 300,
        },
        {
          title: "到",
          key: "to",
          width: 300
        },
        {
          title: "交易总额",
          key: "reward",
          width: 136,
        },
      ],
    };
  },
  created() {
     if (this.block_id) {
      this.getTransaction("block_id",this.block_address, this.page);
    }
    if(this.block_address&&this.load){
      this.getTransaction("address_contract",this.block_address, this.page);
    }
  },
  methods: {
    handlePage(page) {
      this.loading = true;
      if(this.block_id){
          this.getTransaction("block_id",this.block_id,page);
      }
      if(this.block_address){
           this.getTransaction("address_contract",this.block_address, page);
      }
      // console.log(page)
    },
    getTransaction(type,id, page) {
      this.$axios.get(
          "/" +
            this.$route.params.explorer +
            "/transaction/list?"+type+"=" +
            id +
            "&pageNum=" +
            page
        )
        .then(({data})  => {
          if (data.code == 0 && data.data.total >= 1) {
            this.data = data.data.list;
            this.total = data.data.total;
            this.$emit('childtotal_03', data.data.total)
          } else {
            console.log(data.msg);
          this.loading = false;

          }
          this.loading = false;
        });
    },
  },
  mounted() {
   
  },
  watch: {
    block_id:function (newval, oldval) {
        // 从而全局状态改变的值，就会赋值给当前控制页面变化的active，他只要一变就会实现页面跳转
        this.getTransaction("block_id",this.block_id, this.page);
    },
     load:function (newval, oldval) {
        // 从而全局状态改变的值，就会赋值给当前控制页面变化的active，他只要一变就会实现页面跳转
       this.getTransaction("address_contract",this.block_address, this.page);
    },
  },
};
</script>