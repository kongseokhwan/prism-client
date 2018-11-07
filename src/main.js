// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueI18n from 'vue-i18n'
import axios from 'axios'
import VueMoment from 'vue-moment'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import enLocale from 'element-ui/lib/locale/lang/en'
import VueDragDrop from 'vue-drag-drop';
import App from './App'
import router from './router'
import enums from './utils/enums'
import utils from './utils/utils'
import pubsub from './utils/pubsub'
import {EventBus} from './utils/eventbus'
import validation from './utils/validation'
import LoginStore from './store/login-store'
import EventStore from './store/event-store'
import TitleStore from './store/title-store';
import TopologyStore from './store/topology-store';
import ModalStore from './store/modal-store'

// support ajax communication
// reference in component: this.$http
let timeId = setInterval(() => {
  let html = $(".loading").html();
  let dotIndex = html.indexOf('.');
  if($(".loading").html().length - dotIndex == 5){
    $(".loading").html('Data Loading.')
  } else {
    $(".loading").html(html + '.');
  }
}, 500);

let timeout = 20000;
let withCredentials = true;
Vue.prototype.$viewApi = axios.create({
  baseURL: '/view/api',
  timeout: timeout,
  withCredentials: withCredentials
});
Vue.prototype.$viewRepo = axios.create({
  baseURL: '/view/repo',
  timeout: timeout,
  withCredentials: withCredentials
});

Vue.prototype.$http = axios.create({
  baseURL: '/proxy/api',
  timeout: timeout,
  withCredentials: withCredentials
});
Vue.prototype.$proxyApi = Vue.prototype.$http;
Vue.prototype.$download = axios.create({
  baseURL: '/proxy/download',
  timeout: timeout,
  withCredentials: withCredentials
});
Vue.prototype.$upload = axios.create({
  baseURL: '/proxy/upload',
  timeout: timeout,
  withCredentials: withCredentials
});

Vue.prototype.$pubsub = pubsub;
Vue.prototype.$utils = utils;
Vue.prototype.$enums = enums;
Vue.prototype.$valid = validation;

Vuex.Store.prototype.$http = Vue.prototype.$http;

(function() {
  Object.defineProperties(Vue.prototype, {
      $eventBus: {
          get: function () {
              return EventBus;
          }
      }
  })
})();

Vue.prototype.$openNotify = function (message, type='success') {
  this.$notify({
    message: message,
    type: type
  });  
};

// register plugin of vue
Vue.use(Vuex)
Vue.use(VueI18n)
Vue.use(VueMoment)
Vue.use(ElementUI, { enLocale })
Vue.use(VueDragDrop);

Vue.config.productionTip = false

// create vux store
const store = new Vuex.Store({
  modules: {
    login: LoginStore,
    event: EventStore,
    title:TitleStore,
    topology: TopologyStore,
    modal: ModalStore
  }
})

/* eslint-disable no-new */
Promise.all([
  axios.get('/proxy/api/1.1/title/all'),
  axios.get('/proxy/api/1.0/topology'),
  axios.get('/proxy/api/1.0/controller'),
  axios.get('/proxy/api/1.1/topology/switch'),
  axios.get('/proxy/api/1.1/topology/switch/all/port'),
  axios.get('/proxy/api/1.1/topology/switch/position'),
  axios.get('/view/api/controller'),
  axios.get('/proxy/api/1.1/ssh/forward/controller'),
  axios.get('/proxy/api/1.1/user/info/all'),
  axios.get('/proxy/api/1.0/prism/nh/all')
]).then(response => {
  clearInterval(timeId);
  $("#app").empty();
  let titles = response[0].data;
  let currentTopology = response[1].data.topology ? response[1].data.topology : [];
  let currentController = response[2].data.controllers ? response[2].data.controllers : [];
  let currentSwitches = response[3].data.switches ? response[3].data.switches : [];
  let ports = response[4].data.switch_ports ? response[4].data.switch_ports : [];
  let positions = response[5].data.positions ? response[5].data.positions : [];
  let controllerHost = response[6].data;
  let controllerSshPort = response[7].data.port;
  let users = response[8].data.users ? response[8].data.users : [];
  let hosts = response[9].data.neighbors ? response[9].data.neighbors : [];

  new Vue({
    el: '#app',
    router,
    store, // reference in component: this.$store
    components: { App },
    template: '<App/>',
    data: {
      uuid: ''
    },
    methods: {
      readAlarmCount () {
        this.$viewApi.get('/alarm/count').then(response => {
          let count = response.data;
          if(Number.isInteger(count)) {
            this.$store.commit({
              type: "setAlarmCount",
              count: count
            })
          }
        });
      },
      readUers () {
        this.$proxyApi.get('/1.1/user/info/all').then(response => {
          let users = response.data.users;
          this.$store.commit('setUsers', users);
        });
      },
      readNewUserCount() {
        this.$proxyApi.get('/1.1/user/confirm/all').then(response => {
          let count = response.data.count;
          if(Number.isInteger(count)) {
            this.$store.commit({
              type: "setNewUserCount",
              count: count
            })
          }
        });
      },
      readResetUserCount() {
        this.$proxyApi.get('/1.1/user/password/reset/all').then(response => {
          let count = response.data.count;
          if(Number.isInteger(count)) {
            this.$store.commit({
              type: "setNewUserCount",
              count: count
            })
          }
        });
      },
      readTopology () {
        if(!this.readingTopology) {
          this.readingTopology = true;
          Promise.all([
            axios.get('/proxy/api/1.0/topology'),
            axios.get('/proxy/api/1.0/controller'),
            axios.get('/proxy/api/1.1/topology/switch'),
            axios.get('/proxy/api/1.0/topology/switch/all/port'),
            axios.get('/proxy/api/1.1/topology/switch/position'),
            axios.get('/proxy/api/1.0/prism/nh/all')
          ]).then(response => {
            let topology = response[0].data.topology ? response[0].data.topology : [];
            let controllers = response[1].data.controllers ? response[1].data.controllers : [];
            let switches = response[2].data.switches ? response[2].data.switches : [];
            let ports = response[3].data.switch_ports ? response[3].data.switch_ports : [];
            let positions = response[4].data.positions ? response[4].data.positions : [];
            let hosts = response[5].data.neighbors ? response[5].data.neighbors : [];
            this.$store.commit('setCurrentTopology', {topology, controllers, switches, ports, positions, hosts});
            this.readingTopology = false;
          }).catch(() => {
            this.readingTopology = false;
          });
        }
      },
      readMongoDocument (collection, _id, key) {
        let that = this;
        axios.get('/view/api/mongo/' + collection + '/' + _id)
        .then(response => {
          let object = response.data;
          if(object) {
            that.$store.commit({
              type: "setCurrent",
              key: key,
              current: {...object, objectId: _id}
            });
          }
        });
      }
    },
    beforeCreate () {
      // initialize
      this.$store.commit('refreshTitles', titles);
      this.$store.commit('setApiServer', controllerHost);
      this.$store.commit('setCurrentTopology', {topology: currentTopology, controllers: currentController, switches: currentSwitches, ports, positions, hosts});
      this.$store.commit('initLoginStore');
      this.$store.commit('setUsers', users);
      this.$store.ssh = {host: controllerHost, port: controllerSshPort};
    },
    created () {
      let that = this;
      this.$pubsub.connect(function () {
        that.$pubsub.subscribe('/topic/mongo/kulcloud/history_controller/**', function (event) {
          let controller = JSON.parse(event.body);
          that.readMongoDocument('history_controller', controller.objectId, 'controller');
          that.$eventBus.$emit('/topic/mongo/kulcloud/history_controller', event.body);
        });
  
        that.$pubsub.subscribe('/topic/mongo/kulcloud/history_switch/**', function (event) {
          let _switch = JSON.parse(event.body);
          that.readMongoDocument('history_switch', _switch.objectId, 'switch');
          that.$eventBus.$emit('/topic/mongo/kulcloud/history_switch', event.body);
        });

        that.$pubsub.subscribe('/topic/mongo/kulcloud/history_tenant/**', function (event) {
          let tenant = JSON.parse(event.body);
          that.readMongoDocument('history_tenant', tenant.objectId, 'tenant');
          that.$eventBus.$emit('/topic/mongo/kulcloud/history_switch', event.body);
        });
  
        that.$pubsub.subscribe('/topic/mongo/kulcloud/history_alarm/**', function (event) {
          let alarm = JSON.parse(event.body);
          that.readMongoDocument('history_alarm', alarm.objectId, 'alarm');
          that.$eventBus.$emit('/topic/mongo/kulcloud/history_alarm', event.body);
          that.readAlarmCount();
        });

        that.$pubsub.subscribe('/topic/alarm/confirm', function (event) {
          that.readAlarmCount();
          that.$eventBus.$emit('/topic/alarm/confirm', event);
        });
  
        that.$pubsub.subscribe('/topic/title/change', function (event) {
          setTimeout(() => {
            that.$store.commit('refreshTitles');
            that.$eventBus.$emit('/topic/title/change', event.body);
          }, 1000);
        });

        that.$pubsub.subscribe('/topic/kafka/kulcloud/prism/**', function (event) {
          if(event.headers.destination.endsWith('system/account')) { // 새로운 사용자
              that.readNewUserCount();
              that.readResetUserCount();
              that.readUers();
          } else { // 페브릭 연관 변경 이벤트 수신
              that.readTopology();
          }
          
          that.$eventBus.$emit(event.headers.destination, event.body);
        });

        that.$pubsub.subscribe('/topic/topology/**', function (event) {
          that.readTopology();
          that.$eventBus.$emit(event.headers.destination, event.body);
        });
      });

      this.readAlarmCount();
    },
    beforeDestroy () {
      this.$pubsub.disconnect();
    }
  })
})
.catch(function (error) {
  clearInterval(timeId);
  $(".loading").html('<font color="red">Error!</font><br>Cannot load a initial data.');
  console.log(error);
});
