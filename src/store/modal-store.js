export default {
  state: {
    common: { // a
      confirm: { // b
        visible: false
      },  
      alert: { // b
        visible: false,
        message: '',
        isRequest: false
      }
    },
    router: {
      add: {
        visible: false
      },
      delete: {
        visible: false,
        selectedNode: []
      }
    },
    route: {
      add: {
        visible: false,
        params: {
          bridge: [],
          bond: [],
          physical: [],
          tenant_name: ''
        },
        change: false
      },
      edit: {
        visible: false,
        params: {
          // { prev: '', next: '' }
          tenant_name: ''
        },
        change: false,
        prev: '',
        next: '',
        id: ''
      },
      delete: {
        visible: false
      }
    },
    rule: {
      add: {
        visible: false,
        ruleId: ''
      },
      edit: {
        visible: false,
        ruleId: ''
      }
    },
    bridge: {
      
    },
    bond: {

    },
    response: {
      done: false
    }
  },
  getters: {
    currentModal(state) {
      return 'current openModal test';
    },
    routeAdd(state) {
      return state.route.add.change;
    },
    routeEdit(state) {
      return state.route.edit;
    }
  },
  mutations: {
    openModal(state, payload) {
      state[payload.key.a][payload.key.b]['visible'] = true;
      for(var key in payload.key) {
        state[payload.key.a][payload.key.b][key] = payload.key[key]
      }
      /* if(payload.key.message) {
        state[payload.key.a][payload.key.b]['message'] = payload.key.message;
      }
      if(payload.key.params) {
        state[payload.key.a][payload.key.b]['params'] = payload.key.params;
      }
      if(payload.key.isRequest) {
        state[payload.key.a][payload.key.b]['isRequest'] = payload.key.isRequest;
      } */
    },
    closeModal(state, payload) {
      state[payload.key.a][payload.key.b]['visible'] = false;
      if(payload.key.isRequest) {
        state[payload.key.a][payload.key.b]['isRequest'] = payload.key.isRequest;
      }
    },
    addInterface(state, payload) {
      var a = payload.key.a;
      var b = payload.key.b;
      if(payload.key.change) {
        state[a][b]['change'] = payload.key.change;
      }
      if(payload.key.message) {
        state[payload.key.a][payload.key.b]['message'] = payload.key.message;
      }
      if(payload.key.params) {
        state[payload.key.a][payload.key.b]['params'] = payload.key.params;
      }
    },
    changeInterface(state, payload) {
      var a = payload.key.a;
      var b = payload.key.b;
      if(payload.key.message) {
        state[payload.key.a][payload.key.b]['message'] = payload.key.message;
      }
      if(payload.key.params) {
        state[payload.key.a][payload.key.b]['params'] = payload.key.params;
      }
      state[a][b]['change'] = payload.key.change;
      state[payload.key.a][payload.key.b]['prev'] = payload.key.prev;
      state[payload.key.a][payload.key.b]['next'] = payload.key.next;
      state[a][b]['id'] = payload.key.id;
    },
    clearAddedInterface(state, payload) {
      state[payload.key.a][payload.key.b]['params'] = {
        selectedNode: [],
        tenant_name: ''
      }
    },
    afterResponse(state, payload) {
      state[payload.key.a][payload.key.b] = payload.key.c;
    },
    selectNode(state, payload) {
      state[payload.key.a][payload.key.b]['selectedNode'] = payload.key.selectedNode;
    },
    clearNode(state, payload) {
      state[payload.key.a][payload.key.b][payload.key.c] = '';
    },
    selectRule(state, payload) {
      state[payload.key.a][payload.key.b]['ruleId'] = payload.key.ruleId;
    }
  }
}
