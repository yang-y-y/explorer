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
            <div class="title"><nuxt-link :to="item.path"  :title="$t('altTitle.'+item.name+'.title')">{{$t('headerTab.'+item.name)}}</nuxt-link></div>
            <div class="smlist">
                <nuxt-link :to="item.path"  :title="$t('altTitle.'+item.name+'.title')">{{ $t('headerMore.blocklist')}}</nuxt-link>
                <nuxt-link :to="'/'+$store.state.locale+'/uncleblock/'">{{$t('headerMore.uncleblocklist')}}</nuxt-link>
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
            path:'/'+this.$store.state.locale+'/',
        },
        {
            name:"largetxs",
            path:'/'+this.$store.state.locale+'/large/'
        },
        {
            name:"charts",
            path:'/'+this.$store.state.locale+'/charts/'
        },
        {
            name:"blockList",
            path:'/'+this.$store.state.locale+'/block/'
        },
        {
            name:"newTxs",
            path:'/'+this.$store.state.locale+'/transaction/'
        },
        {
            name:"pending",
            path:'/'+this.$store.state.locale+'/transaction/'
        },
        {
            name:"newAddress",
            path:'/'+this.$store.state.locale+'/address/'
        },
        {
            name:"token",
            path:'/'+this.$store.state.locale+'/token/'
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

