import Vue from 'vue'
import ViewUI from 'view-design'

Vue.use(ViewUI)
import 'view-design/dist/styles/iview.css'
Vue.prototype.$Message.config({
    top: 100,
    duration: 3
});
Vue.prototype.$Notice.config({
    top: 50,
    duration: 3
});