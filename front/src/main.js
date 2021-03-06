// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import moment from 'moment'
import VueDND from 'awe-dnd'
import VueQuillEditor from 'vue-quill-editor'
import App from './App'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'

import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.prototype.moment = moment;
Vue.use(ElementUI);
Vue.use(VueDND);
Vue.use(VueQuillEditor);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
