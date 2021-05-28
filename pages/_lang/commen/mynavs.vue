<template>
    <div class="navs">
      <div class="container">
        <Row type="flex" align="middle">
          <Col :xs="24" :lg="8" class="names">
            <img src="~/assets/img/eth.png" height="40" alt="Ethereum" />
            <h1>ETH <span>Ethereum</span><span class="tag">POW</span></h1>
          </Col>
          <Col :xs="24" :lg="16">
            <Mymenu :page_index="page_index" />
          </Col>
        </Row>
      </div>
    </div>
</template>
<script>
export default {
    props: ["page_index"],
    data(){
      return{
        // page_index:this.page_index
      }
    }
    
}
</script>