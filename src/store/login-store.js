export default {
  state: {
    loginInfo: null,
    users: null,
    userNames: []
  },
  getters: {
    login (state) {
      if(state.loginInfo) {
        return state.loginInfo;
      } else {
        return true;
      }
    },
    loginTime (state) {
      if(state.loginInfo) {
        return new Date(state.loginInfo.time);
      } else {
        return new Date();
      }
    },
    userName (state) {
      if(state.loginInfo) {
        return state.loginInfo.name;
      } else {
        return 'admin';
      }
    },
    roles (state) {
      if(state.loginInfo) {
        return state.loginInfo.roles;
      } else {
        return ['admin'];
      }
    },
    users (state) {
      return state.users;
    },
    userNames (state) {
      return state.userNames;
    }
  },
  mutations: {
    initLoginStore (state){
      let loginInfoStr = window.sessionStorage.getItem('loginInfo')
      if(loginInfoStr) {
        state.loginInfo = JSON.parse(loginInfoStr);
      }
    },
    setUsers (state, users) {
      state.users = users;
      let userNames = users.map(user => {
        return user.user_id;
      });

      state.userNames = userNames;
    }
  }
}
