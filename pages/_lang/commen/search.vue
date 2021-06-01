<template>
    <Input v-model="findval" class="small-search">
        <Select v-model="select3" slot="prepend" style="width: 80px">
            <Option v-for="(item,index) in list" :key="index" :value="item.value">{{item.name}}</Option>
        </Select>
        <Button slot="append" icon="ios-search" @click="findBlock(select3,findval)"></Button>
    </Input>
</template>
<script>
export default {
    props:['page_id'],
    data(){
        return{
            select3:'eth',
            findval:'',
            list:[
                {
                    name:'ETH',
                    value:"eth"
                },
                {
                    name:'All Blockchains',
                    value:"all"
                }
            ]
            
        }
    },
    methods: {
        findBlock(type,id){
            let isnumb = id.replace(/\"/g,"");
            
            
            this.$nextTick(() => {
                this.$nuxt.$loading.start()
                setTimeout(() => this.$nuxt.$loading.finish(), 500)
            })
            if(type==this.$store.state.explorer){
                if(id.length==66){
                    this.$router.push('/'+this.$store.state.locale+'/transaction/'+id)
                }else if(id.length==42){
                   this.$router.push('/'+this.$store.state.locale+'/address/'+id)
                }else if(isNaN(isnumb) == false&&id){
                   this.$router.push('/'+this.$store.state.locale+'/block/'+id)
                }
                else{
                    this.$emit('handleNodata', 'true')
                }
            }else{
                 this.$router.push('/'+this.$store.state.locale+'/search/?id='+id)
            }
        },

    }
      
}
</script>