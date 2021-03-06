/* eslint-disable */
import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faCommentDots, faMapMarkerAlt, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import {faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
 
library.add(faBars, faCommentDots, faInstagram, faTwitter, faMapMarkerAlt, faCheck, faTimes)
 
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
