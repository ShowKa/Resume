import Vue from 'vue'
import App from './App.vue'
import Properties from './Properties.js'
import '../assets/app.scss'
// BootstrapのJavaScript側の機能
import 'bootstrap'
// スタイルシート
import './index.scss'

// Properties
Object.assign(Vue.prototype, Properties)

/* eslint-disable-next-line no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
