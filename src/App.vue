<template>
  <div id="wrap">
    <!-- modal layer  -->
    <modal></modal>
    <!-- modal layer -->
    <aside class="left-panel">
        <logo/>
        <main-menu/>
        <div class="resize-toolbar" @mousedown="startSplitter" @mouseup="stopSplitter"></div>
    </aside>
    <div class="right-panel">
      <!-- nav toggle & user info -->
      <header class="header">
          <div class="header-container">
              <ul class="header-nav-left">
                  <li>
                      <a href="#" class="sidebar-toggle" @click="toggleSideBar">
                          <i class="zmdi zmdi-menu"></i>
                      </a>                            
                  </li>
              </ul>
              <ul class="header-nav-right">
                  <li>
                      <span v-if="alarmCount > 0" class="counter alarmblink" @click="goAlarmSearch">{{alarmCount}}</span>
                      <a href="#" class="btn-alram" @click="goAlarmSearch">
                          <i class="zmdi zmdi-notifications-none"></i>
                      </a>                             
                  </li>
                  <li class="dropdown">
                      <a class="user-dropdown dropdown-toggle" data-toggle="dropdown">
                          <span>{{userName}}</span>
                          <i class="zmdi zmdi-caret-down"></i>                            
                      </a>
                      <ul class="dropdown-menu dropdown-menu-right">
                          <li><a href="#" @click.stop.prevent="goUserInfo">My Info</a></li>
                          <li><a href="#" @click.stop.prevent="goUser">New User<strong class="font-red">({{newUserCount}})</strong></a></li>
                          <!-- <li><a href="#" @click.stop.prevent="goUser">Reset Password<strong class="font-red">({{resetUserCount}})</strong></a></li> -->
                          <li class="logout"><a href="#" @click.stop.prevent="logout">Sign out</a></li>
                      </ul>
                  </li>                        
              </ul>
            <!-- alarm message -->
            <alarm-message/>
            <!-- //alarm message -->
          </div>
      </header>
      <!-- //nav toggle & user info -->
      <router-view/>
      <!-- components: [ MonitoringControllerList, MonitoringController ] -->
    </div>
  </div>
</template>

<script>
// test comment
import Logo from "./components/layout/Logo";
import AlarmMessage from "./components/layout/AlarmMessage";
import MainMenu from "./components/layout/MainMenu";
import Modal from './components/layout/Modal';
// import PubSub from './utils/pubsub'

export default {
  name: "App",
  components: {
    Logo,
    AlarmMessage,
    MainMenu,
    Modal
  },
  data() {
    return {
      splitter: {
        min: 350,
        max: 480,
        pagemin: 768
      }
    };
  },
  computed: {
    message: function() {
      return this.$store.state.event.message;
    },
    alarmCount: function() {
      return this.$store.state.event.alarmCount;
    },
    newUserCount: function() {
      return this.$store.state.event.newUserCount;
    },
    resetUserCount: function() {
      return this.$store.state.event.resetUserCount;
    },
    userName: function() {
      if (this.$store.state.login.loginInfo) {
        return this.$store.state.login.loginInfo.name;
      } else {
        return "admin";
      }
    },
    modalState: function() {
      return this.$store.getters.userName;
    }
  },
  mounted() {
    this.$eventBus.$on('showSideBar', this.showSideBar);
  },
  methods: {
    goAlarmSearch() {
      this.$router.push("/alarm/search");
      this.$eventBus.$emit('clickAlarmCount')
    },
    logout() {
      window.location.href = "/logout";
    },
    goUser() {
      this.$router.push("/tools/user");
    },
    goUserInfo() {
      this.$router.push("/tools/userinfo/" + this.userName);
    },
    showSideBar() {
      if($('#wrap').hasClass('fold')) {
        this.toggleSideBar();
      }
    },
    toggleSideBar() {
      $('#wrap').toggleClass('fold');
      window.setTimeout(() => {
        this.$eventBus.$emit('toggleSideBar', $('#wrap').hasClass('fold'));
      }, 100);
    },
    startSplitter(e) {
      e.preventDefault();
      $(document).on('mousemove', this.handleSplitter);
      $(document).on('mouseup', this.stopSplitter);
    },
    handleSplitter(e) {
      var x = e.pageX - $('.left-panel').offset().left;
      if (x > this.splitter.min && x < this.splitter.max && e.pageX < ($(window).width() - this.splitter.pagemin)) {
      // if (x > min && x < max) {
        $('.left-panel').css('width', x);
        $('.sidebar-toggle').css('left', x);
        $('.left-panel .sub-nav').css('width', x);
        $('.resize-toolbar').css('left', x);
        $('.right-panel').css('margin-left', x);
        $('.header-nav-left').css('left', x);
        $('.alarm-msg').css('padding-left', x);
      }
    },
    stopSplitter() {
      $(document).off('mousemove', this.handleSplitter);
      $(document).off('mouseup', this.stopSplitter);
    }
  }
};
</script>
<style>
/* for MS계열 브라우저 */
@keyframes blink {
 0% { opacity: 0; }
 50% { opacity: 1; }
 100% { opacity: 0; }
}
 
/* for Chrome, Safari */
@-webkit-keyframes blink {
 0% { opacity: 0; }
 50% { opacity: 1; }
 100% { opacity: 0; }
}
 
/* blink CSS 브라우저 별로 각각 애니메이션을 지정해 주어야 동작한다. */
.alarmblink {
 cursor: pointer;
 animation: blink 2s step-end infinite;
 -webkit-animation: blink 2s step-end infinite;
}
</style>
