<template>
    <div class="topbar">
		<div class="container">
			<Row class="header" type="flex" justify="space-between" align="middle" >
                <Col  :xs="18" :lg="12" class="leftView"><nuxt-link to="/"><Logo :theme='$store.state.theme'/></nuxt-link><span>Blockchain Explorer</span></Col>
                <Col  :xs="6" :lg="12" class="rightView">
					<Langlist />
					<Icon type="ios-moon-outline" @click="handleChange(false)" v-if="theme"/>
					<Icon type="ios-moon" @click="handleChange(true)"  v-else/>
				</Col>
			</Row>
		</div>
	</div>
</template>
<script>
var flog = 0; 
export default {
  name: "headers",
  data(){
	  return{
		  theme:false
	  }
  },
  created(){
	  this.theme = this.$store.state.theme
  },
  methods:{
	  handleChange(bool){
		this.theme = bool;
		this.$store.commit("changeTheme",bool)
		this.$cookies.set('theme', bool)
	  }
  },
  mounted(){
	 
  }
}
</script>
<style lang="less" scoped>
    .header{
		.ivu-icon-ios-moon,.ivu-icon-ios-moon-outline{
			font-size: 16px;
			line-height: 21px;
			cursor: pointer;
		}
		.ivu-icon-ios-moon-outline{
			color: #fff;
		}
	}
</style>