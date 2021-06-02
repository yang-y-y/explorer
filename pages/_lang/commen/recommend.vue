<template>
  <div class="recommend">
    <div class="container">
      <div class="title-global">
        <h2>如何使用以太坊浏览器？</h2>
      </div>
      <div class="text-view">
        <div class="detail">
          <p>
            以太坊浏览器可以查询所有基于以太坊的TOKEN信息，最新爆块，最新交易，各类图表信息等等。如何查询呢？查询后可以获得哪些信息呢？这些字段信息代表什么含义呢？在哪可以了解以太坊ETH相关区块链知识呢？
          </p>
        </div>
        <div class="morelink"><nuxt-link :to="'/'+$store.state.locale+'/learn/'" class="blue">{{$t('more')}}></nuxt-link></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>