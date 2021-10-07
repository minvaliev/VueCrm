import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Vuelidate from "vuelidate";
import router from './router'
import store from './store'
import messagePlugin from '@/utils/message.plugin'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import { initializeApp } from "firebase/app";
import firebase from "firebase/compat";
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(Vuelidate)
Vue.use(VueRouter)
Vue.use(messagePlugin)

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
