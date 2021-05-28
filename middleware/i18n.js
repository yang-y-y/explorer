export default ({ isHMR,params, app,route, store, error,redirect }) => {
    const defaultLocale =  app.i18n.fallbackLocale 
    if ( isHMR ) return  //是否是通过模块热替换 webpack hot module replacement (仅在客户端以 dev 模式)
    const locale = store.state.locale || defaultLocale;

    const explorer = params.explorer ;

    const pageid = params.id;

    const pagelang = params.lang

    //判断地址栏是否有该语言



    // if(explorer && store.state.explorerList.indexOf(explorer)==-1) {
    //   return redirect('/')
    // }
    // if(pagelang && store.state.locales.indexOf(pagelang)==-1) {
    //   return redirect('/')
    // }

  

    if(pagelang&&store.state.locales.indexOf(pagelang)==0){
      store.commit('SET_LANG', pagelang)
      app.i18n.locale = pagelang
    }else{
      store.commit('SET_LANG', locale)
      app.i18n.locale = locale
    }
   
    
    // if(store.state.explorerList.indexOf(pageid)) {
    //   store.commit('SET_LANG', 'en')
    //   app.i18n.locale = 'en'
    // }
    

    //判断地址栏是否有该浏览器ID
    if(explorer&&store.state.explorerList.indexOf(explorer) === -1){
      return redirect('/' + defaultLocale + '/')
    }
    
    // //判断地址栏是否有该charts路由
    // if(route.name == 'lang-explorer-charts-id'&&pageid&&store.state.chartsType.indexOf(pageid) === -1){
    //   return redirect('/' + defaultLocale + '/' + store.state.explorer+'/charts/')
    // }
    // //判断地址栏是否有address
    // if(route.name == 'lang-explorer-tokentxns-id'&&pageid==undefined){
    //   return redirect('/' + defaultLocale + '/' + store.state.explorer)
    // }


    // else if (store.state.locales.indexOf(locale) === -1) {
    //   return error({ message: 'This page could not be found.', statusCode: 404 })
    // }
    


  }