import Vue from 'vue'
import App from './App.vue'
import '../assets/app.scss'
// BootstrapのJavaScript側の機能
import 'bootstrap'
// スタイルシート
import './index.scss'

/* eslint-disable-next-line no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
