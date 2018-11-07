export default {
  state: {
    alarmCount: 0,
    newUserCount: 0,
    resetUserCount: 0,
    current: {} // this.$store.state.event.current.controller (.switch, .alarm, .tenant)
  },
  getters: {
    currentAlarmId: (state) => {
      if(state.current.alarm){
        return state.current.alarm.objectId;
      } else {
        return null;
      }
    },
    currentControllerStat: state => {
      if(state.current.controller){
        return state.current.controller;
      } else {
        return null;
      }
    },
    currentSwitchStat: state => {
      if(state.current.switch){
        return state.current.switch;
      } else {
        return null;
      }
    },
    currentTenantStat: state => {
      if(state.current.tenant){
        return state.current.tenant;
      } else {
        return null;
      }
    }
  },
  mutations: {
    setCurrent (state, payload, rootState){
      state.current = {...state.current};
      state.current[payload.key] = payload.current;
    },
    setAlarmCount (state, payload) {
      state.alarmCount = payload.count;
    },
    setNewUserCount (state, payload) {
      state.newUserCount = payload.count;
    },
    setResetUserCount (state, payload) {
      state.ResetUserCount = payload.count;
    }
  }
}
