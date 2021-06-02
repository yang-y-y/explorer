

let explorer = 'eth'
let Api = {
    blockList:'/'+explorer+'/block/list', //爆块表
    blockNewList:'/'+explorer+'/block/newestList', //最新爆块
    blockFind:'/'+explorer+'/block/find',//爆块详细

    uncleBlockList:'/'+explorer+'/uncleblock/list',//叔块表
    uncleNewList:'/'+explorer+'/uncleblock/newestList',//最新叔块
    uncleFind:'/'+explorer+'/uncleblock/findBlock',//叔块详细

    transactionList:'/'+explorer+'/transaction/list',//交易表
    transactionNewList:'/'+explorer+'/transaction/newestList',//最新交易
    transactionFind:'/'+explorer+'/transaction/find',//交易信息

    acountList:'/'+explorer+'/eth-account/list',//账户
    acountNewList:'/'+explorer+'/eth-account/newestList',//最新账户
    acountFind:'/'+explorer+'/eth-account/find',//账户信息

    tokenList:'/'+explorer+'/token/list',//代币
    tokenFind:'/'+explorer+'/token/find',//代币信息

    tokenAcountFind:'/'+explorer+'/token-account/findByAddress',//根据 address，查询该账户全部代币信息
    tokenAcountList:'/'+explorer+'/token-account/list',//根据地址查询代币信息

    toList:'/'+explorer+'/eth-account/topList', //富豪列表

    explorerInfo:'/'+explorer+'/main/info', //整体数据
    explorerLast:'/'+explorer+'/main/last', //最新同步数据

    dailyAcountList:'/'+explorer+'/daily-account-eth/list',//账户余额日报列表
    dailyBlockList:'/'+explorer+'/daily-block/list',//区块日报列表
    dailyNewBlockList:'/'+explorer+'/daily-block/newestList',//区块日报列表

    isValidAddress:'/'+explorer+'/address/isValidAddress',// 地址是否为有效的 eth 地址 
    isSmartContractAddress:'/'+explorer+'/address/isValidAddress'
    // this.$ApiUrl.Api

}

export default {Api}