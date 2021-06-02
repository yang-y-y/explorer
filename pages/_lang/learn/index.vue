<template>
  <div class="list">
    <Headmobile />
    <Headsearch crumbs="token" v-on:handleNodata="isNaNdata" />
    <mynavs page_index="0" />
    <Nodata v-if="nodata" v-on:reload="isNaNdata"/>
    <div class="main" v-else>
      <div class="title-con">
        <div class="container">
          <div class="title-global">
            <h2>Learn</h2>
          </div>
        </div>
      </div>
      <div class="table-global">
        <div class="container">
          <div class="wikiList">
            <Card  v-for="(item,index) in data" :key="index" dis-hover>
                <p slot="title">{{item.title}}</p>
                <p>{{item.shortContent}}</p>
            </Card>
          </div>
          <!-- <div class="pageCon">
            <Page
              :total="total"
              size="small"
              show-total
              @on-change="handlePage"
              v-model="page"
            />
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: [
          {
            "_id": "5ea93bca78bb73b7daf5504f",
            "uniqueUrl": "eth-block",
            "locale": "cn",
            "network": "eth",
            "modules": "blocklist",
            "date": "2020-04-28 18:00",
            "category": "knowledge-base",
            "tag": "以太坊区块，区块高度，区块信息",
            "description": "把以太坊区块链想象成一本记账的笔记本的话，区块就是笔记本上的一页页纸，纸上面的内容就是记账的内容。",
            "author": "Doris",
            "title": "什么是以太坊区块？怎么查看区块内的数据信息？",
            "shortContent": "把以太坊区块链想象成一本记账的笔记本的话，【区块】就是笔记本上的一页页纸，纸上面的内容就是记账的内容。那么区块内还包含哪些数据信息呢？",
            "categoryRank": 1,
            "score": 110
            },
            {
            "_id": "5e8dbd4644125ef03d6acdfc",
            "uniqueUrl": "eth-address",
            "locale": "cn",
            "network": "eth",
            "date": "2020-04-08 20:00",
            "category": "knowledge-base",
            "tag": "以太坊，合约账户，外部账户",
            "description": "以太坊的账户有两种：外部账户(EOA)和合约账户。",
            "modules": "newAddress",
            "author": "Doris",
            "title": "以太坊外部账户和合约账户的区别？",
            "shortContent": "以太坊的账户有两种：外部账户(EOA)和合约账户。外部地址也就是我们常说的外部地址，那合约账户也就是我们所说的合约地址。点击查看更多内容。",
            "categoryRank": 1,
            "score": 100
            },
      ],
      page: 1,
      total: 2,
      loading:true,
      nodata:false,
    }
  },
  created() {},
  methods: {
    // getDetail(page) {
    //   this.$API
    //     .GET("")
    //     .then(({data})  => {
    //       if (data.code != "-1") {
    //         this.data = data.data.list;
    //         this.total = data.data.total
    //       } else {
    //         console.log(data.code, data.msg);
    //       }
    //       this.loading = false;
    //     });
    // },
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
    // this.getDetail(this.page);
  },
};
</script>