<template>
  <div class="mobile-menu">
    <div class="mobile-head">
      <div class="mobile-logo">
        <nuxt-link to="/"><Logo /></nuxt-link><span>Blockchain Explorer</span>
      </div>
      <Icon type="ios-menu" @click="handleOpen(true)" />
    </div>
    <Drawer :closable="false" v-model="isopen">
      <div class="explorerId">
        <div class="smlogo">
          <img src="~/assets/img/eth.png" height="40" alt="" />
        </div>
        <div class="tags">
          ETH <span>Ethereum</span><span class="tag">POW</span>
        </div>
      </div>

         <Menu width="auto">
        <div v-for="(item, index) in menuData" :key="index">
          <Submenu name="4" v-if="index == 3">
            <template slot="title">{{$t('headerTab.'+item.name)}}</template>
            <MenuItem
              :name="'4-' + (index + 1)"
              v-for="(item, index) in item.list"
              :key="index"
              :to="item.path"
              >{{$t('headerMore.'+item.name)}}</MenuItem
            >
          </Submenu>
          <MenuItem :name="index" :to="item.path" v-else>{{$t('headerTab.'+item.name)}}</MenuItem>
        </div>
      </Menu>
      <Menu width="auto">
        <Submenu name="1">
          <template slot="title">{{ lang.name }}</template>
          <MenuItem
            :name="'2-' + (index + 1)"
            v-for="(item, index) in langlist"
            :key="index"
            @click.native="setLang(item)"
            >{{item.name}}</MenuItem
          >
        </Submenu>
      </Menu>
      <div class="themeSet">
          <Icon type="ios-moon-outline" @click="handleChange(false)" v-if="$store.state.theme"/>
					<Icon type="ios-moon" @click="handleChange(true)"  v-else/>
      </div>
    </Drawer>
    <div :class="isopen ? 'mobile-info open' : 'mobile-info'">
      <!-- <div @click="isopen = false">close</div> -->
      
     
    </div>
    <div class="shade" v-if="isopen" @click="isopen = false"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isopen: false,
      theme:false,
      lang: {
        name: "English",
        code: "en",
      },
      langlist: [
        {
          name: "English",
          code: "en",
        },
        {
          name: "中文简体",
          code: "zh",
        },
      ],
      menuData: [
        {
            name:"home",
            path:this.$route.params.lang?'/'+this.$route.params.lang+'/':'/',
        },
        {
            name:"largetxs",
            path:this.$route.params.lang?'/'+this.$route.params.lang+'/large/':'/large/'
        },
        {
            name:"charts",
            path:this.$route.params.lang?'/'+this.$route.params.lang+'/charts/':'/charts/'
        },
        {
            name:"blockList",
            path:'',
            list: [
            {
              name: "blocklist",
              path:this.$route.params.lang?'/'+this.$route.params.lang+"/block/":"/block/"
            },
            {
              name: "uncleblocklist",
              path:this.$route.params.lang?'/'+this.$route.params.lang+"/uncleblock/":"/uncleblock/"
            },
          ],
        },
        {
            name:"newTxs",
            path:this.$route.params.lang?'/'+this.$route.params.lang+'/transaction/':'/transaction/'
        },
        {
            name:"pending",
            path:this.$route.params.lang?'/'+this.$route.params.lang+'/transaction/':'/transaction/'
        },
        {
            name:"newAddress",
            path:this.$route.params.lang?'/'+this.$route.params.lang+'/address/':'/address/'
        },
        {
            name:"token",
            path:this.$route.params.lang?'/'+this.$route.params.lang+'/token/':'/token/'
        },
      ],
    };
  },
  created() {
    //初始化前
  },
  methods: {
    //方法
    handleChange(bool){
      this.theme = bool;
      this.$store.commit("changeTheme",bool)
      this.$cookies.set('theme', bool)
	  },
    handleOpen(val) {
      this.isopen = val;
    },
    
    setLang(val) {
       this.lang = val
    if(val.code == this.$store.state.locale) return false;
    this.$store.commit('SET_LANG', val.code);
    this.$i18n.locale = val.code;
    var changePath = this.$store.state.locale;
    var beforePath = this.$nuxt.$router.history.current.path;
    let result = "";
      result = beforePath.replace("/zh", "");
    let newUrl = changePath=="en"?result:"/" + changePath + result

    this.$router.replace({ path: newUrl }); 
    },
  },
  mounted() {
    //初始化完成后
    for (let i = 0; i < this.langlist.length; i++) {
      if (this.langlist[i].code == this.$route.params.lang) {
        this.lang = this.langlist[i];
      }
    }
  },
  watch: {
    
  },
};
</script>
