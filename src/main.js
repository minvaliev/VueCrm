import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Vuelidate from "vuelidate";
import Paginate from 'vuejs-paginate'
import VueMeta from 'vue-meta'
import router from './router'
import store from './store'
import messagePlugin from '@/utils/message.plugin'
import titlePlugin from '../src/utils/title.plugin'
import Loader from "./components/app/Loader";
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from "firebase/compat";
import 'firebase/auth'
import 'firebase/database'
import currencyFilter from "./filters/currency.filter";
import localizeFilter from "./filters/localize.filter";
import tooltipDirective from "./directives/tooltip.directive"

Vue.config.productionTip = false

Vue.use(Vuelidate)
Vue.use(titlePlugin)
Vue.use(VueMeta)
Vue.use(localizeFilter)
Vue.use(VueRouter)
Vue.component('Loader', Loader)
Vue.filter('currency', currencyFilter)
Vue.filter('localize', localizeFilter)
Vue.directive('tooltip', tooltipDirective)
Vue.use(messagePlugin)
Vue.component('Paginate', Paginate)

firebase.initializeApp({
  apiKey: "AIzaSyBzfSR47IIwlk77Ga3WsUvN1FWy7LtU51o",
  authDomain: "crmvue-6b93e.firebaseapp.com",
  projectId: "crmvue-6b93e",
  storageBucket: "crmvue-6b93e.appspot.com",
  messagingSenderId: "618526487779",
  appId: "1:618526487779:web:b98d66cf4e4be1821c01d6"
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
