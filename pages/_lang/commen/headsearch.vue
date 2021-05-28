<template>
    <div class="head">
      <div class="container">
        <Row type="flex" align="middle">
          <Col :xs="24" :lg="16">
            <div class="crumbs">
              <nuxt-link to="/">Home</nuxt-link>
              <Icon type="ios-arrow-forward" />
              <nuxt-link :to="'/'+$route.params.lang+'/'+$route.params.explorer">{{$route.params.explorer}}</nuxt-link>
              <Icon type="ios-arrow-forward" v-if="crumbs"/>
              <nuxt-link :to="'/'+$route.params.lang+'/'+$route.params.explorer+'/'+crumbs" v-if="$route.params.id">{{crumbs}}</nuxt-link>
              <Icon type="ios-arrow-forward" v-if="$route.params.id" />
              <span>{{$route.params.id?$route.params.id:crumbs}}</span>
            </div>
          </Col>
          <Col :xs="24" :lg="8">
            <Search :page_id="crumbs" v-on:handleNodata="isNaNdata"/>
          </Col>
        </Row>
      </div>
    </div>
</template>
<script>
export default {
    props:['crumbs'],
    methods:{
        isNaNdata:function(bool){
             this.$emit('handleNodata', bool)
        }
    }
}
</script>
