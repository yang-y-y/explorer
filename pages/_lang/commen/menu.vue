<template>
  <nav class="m-nav">
    <ul>
      <li
        v-for="(item, index) in menuData"
        :key="index"
        :class="page_index == index ? current==index?'in active':'in' : current==index?'active':''"
        v-on:mouseover="addActive(index)"
        v-on:mouseout="removeActive()"
      >
        <div v-if="index == 3">
            <div class="title"><nuxt-link :to="item.path">{{$t('headerTab.'+item.name)}}</nuxt-link></div>
            <div class="smlist">
                <nuxt-link :to="item.path">{{ $t('headerMore.blocklist')}}</nuxt-link>
                <nuxt-link :to="'/'+$route.params.lang+'/'+$route.params.explorer+'/uncleblock/'">{{$t('headerMore.uncleblocklist')}}</nuxt-link>
            </div>
        </div>
        <div class="title"  v-else>
            <router-link :to="item.path" :alt="$t('altTitle.'+item.name+'.alt')" :title="$t('altTitle.'+item.name+'.title')">{{ $t('headerTab.'+item.name)}}</router-link >
        </div>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: "HomeRecommand",
  props: ["page_index"],
  data() {
    return {
      menuData: [
        {
            name:"home",
            path:'/'+this.$route.params.lang+'/'+this.$route.params.explorer+'/',
        },
        {
            name:"largetxs",
            path:'/'+this.$route.params.lang+'/'+this.$route.params.explorer+'/large/'
        },
        {
            name:"charts",
            path:'/'+this.$route.params.lang+'/'+this.$route.params.explorer+'/charts/'
        },
        {
            name:"blockList",
            path:'/'+this.$route.params.lang+'/'+this.$route.params.explorer+'/block/'
        },
        {
            name:"newTxs",
            path:'/'+this.$route.params.lang+'/'+this.$route.params.explorer+'/transaction/'
        },
        {
            name:"pending",
            path:'/'+this.$route.params.lang+'/'+this.$route.params.explorer+'/transaction/'
        },
        {
            name:"newAddress",
            path:'/'+this.$route.params.lang+'/'+this.$route.params.explorer+'/address/'
        },
        {
            name:"token",
            path:'/'+this.$route.params.lang+'/'+this.$route.params.explorer+'/token/'
        },
      ],
      current:this.page_index
    };
  },
  created() {
      this.removeActive();
  },
  methods: {
      addActive(index){
        this.current = index;
      },
      removeActive(){
        this.current = null;
      }
  },
  mounted() {
      
  },
  components: {},
};
</script>

