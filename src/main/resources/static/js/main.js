import Vue from 'vue'
import VueResource from 'vue-resource'
import App from 'pages/App1.vue'
import { connect } from './util/ws'

connect()

Vue.use(VueResource)

new Vue({
    el: '#app',
    render: a => a(App)
})