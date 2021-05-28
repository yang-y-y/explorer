import Vue from "vue";
import VueI18n from'vue-i18n';
import ViewUI from 'view-design'
import en from 'view-design/dist/locale/en-US';
import zh from 'view-design/dist/locale/zh-CN';
Vue.use(VueI18n);


export default ({ app,store}) => {
    app.i18n = new VueI18n({
      locale: store.state.locale,  //通过cookie设置国际化（用户选择一次终身不切换）
      fallbackLocale: store.state.locale || 'en',   //默认国际化
      messages: {
        en: {...require('~/locales/en.json'),...en},
        zh: {...require('~/locales/zh.json'),...zh}
      }
    })

    app.i18n.path = (link) => {
      // 如果是默认语言，就省略
        if (app.i18n.locale === app.i18n.fallbackLocale) {
            return `/${link}`
        }
        return `/${app.i18n.locale}/${link}`
    }
    
    ViewUI.i18n((key,value)=>app.i18n.t(key,value));
  }

