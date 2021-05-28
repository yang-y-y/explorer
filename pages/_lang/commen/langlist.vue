<template>
    <Dropdown>
        <a href="javascript:void(0)">
            {{lang.name}}
            <Icon type="md-arrow-dropdown" />
        </a>
        <DropdownMenu slot="list" >
            <DropdownItem v-for="(item,index) in langlist" :key="index"  @click.native="setLang(item)">{{item.name}}</DropdownItem>
        </DropdownMenu>
    </Dropdown>
</template>
<script>
export default {
    name:'setlang',
    data(){
        return{
            lang:{
                name:'English',
                code:'en'
            },
            langlist:[{
                name:'English',
                code:'en',
            },{
                name:'中文简体',
                code:'zh',
            }]
        }
    },
    methods: {
        setLang
    },
    mounted() {
        // this.setLang();
        for(let i=0;i<this.langlist.length;i++){
            if(this.langlist[i].code == this.$route.params.lang){
                this.lang = this.langlist[i]
            }
        }
    },
}
function setLang(val){
    this.lang = val
    
    if(val.code == this.$store.state.locale) return false;

    this.$store.commit('SET_LANG', val.code);
    this.$i18n.locale = val.code;
    var changePath = this.$store.state.locale;
    var beforePath = this.$nuxt.$router.history.current.path;
    let result = "";
      result = beforePath.replace("/en", "");
      result = result.replace("/zh", "");
    this.$nuxt.$router.replace({ path: "/" + changePath + result }); 

    // window.history.replaceState('', '', '/'+ changePath + result)
}
</script>