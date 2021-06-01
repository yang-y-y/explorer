

let explorer = 'eth'
let Api = {
    blockList:'/api/'+explorer+'/block/list', //爆块表
    blockNewList:'/api/'+explorer+'/block/newestList', //最新爆块
    blockFind:'/api/'+explorer+'/block/find',//爆块详细

    uncleBlockList:'/api/'+explorer+'/uncleblock/list',//叔块表
    uncleNewList:'/api/'+explorer+'/uncleblock/newestList',//最新叔块
    uncleFind:'/api/'+explorer+'/uncleblock/findBlock',//叔块详细

    transactionList:'/api/'+explorer+'/transaction/list',//交易表
    transactionNewList:'/api/'+explorer+'/transaction/newestList',//最新交易
    transactionFind:'/api/'+explorer+'/transaction/find',//交易信息

    acountList:'/api/'+explorer+'/eth-account/list',//账户
    acountNewList:'/api/'+explorer+'/eth-account/newestList',//最新账户
    acountFind:'/api/'+explorer+'/eth-account/find',//账户信息

    tokenList:'/api/'+explorer+'/token/list',//代币
    tokenFind:'/api/'+explorer+'/token/find',//代币信息

    tokenAcountFind:'/api/'+explorer+'/token-account/findByAddress',//根据 address，查询该账户全部代币信息
    tokenAcountList:'/api/'+explorer+'/token-account/list',//根据地址查询代币信息

    toList:'/api/'+explorer+'/eth-account/topList', //富豪列表

    explorerInfo:'/api/'+explorer+'/main/info', //整体数据
    explorerLast:'/api/'+explorer+'/main/last', //最新同步数据

    dailyAcountList:'/api/'+explorer+'/daily-account-eth/list',//账户余额日报列表
    dailyBlockList:'/api/'+explorer+'/daily-block/list',//区块日报列表
    dailyNewBlockList:'/api/'+explorer+'/daily-block/newestList',//区块日报列表

    isValidAddress:'/api/'+explorer+'/address/isValidAddress',// 地址是否为有效的 eth 地址 



}

export default {Api}