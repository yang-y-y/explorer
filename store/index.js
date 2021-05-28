
export default {
    state: () => ({
      locales: ['zh', 'en'],//支持的语言ID
      locale: 'en',
      explorerList:['eth','doge'],//支持的浏览器ID
      explorer:'eth',
      chartsType:['marketInfo','coinPrice','blockNum','blockSize','blockTime','dailyHashrate','dailyDiff','dailyRewardUsd','dailyReward','dailyTxFeeUsd','dailyTxFee','mineFee','mineFeeMiddle','rewardUsd','dailyMeidanBlock','dailyAmount','dailyAmountNum','dailyTotalAmount','twitterNum','activeNew','totalGasUsed','gasPrice','gasLimit','gasUsed','dailyUncleReward','uncleBlockNum','daily_uncle_reward_usd','daily_uncle_total_mined_coin','dailyMinedCoin','dailyChainSize'],//支持的图表ID
      Txnlist:{

      },
      theme:false
    }),
    mutations: {
        SET_LANG(state, locale) {  //更改语言
            if (state.locales.includes(locale)) {
                state.locale = locale
            }
        },
        setTxnlist(state,data){
            state.Txnlist = data
        },
        changeTheme(state,bool){
            state.theme = bool
        }
    },
}