export default {
  state: {
    titles: {}
  },
  getters: {
    titles: (state) => state.titles,
    getTitle: (state) => (type, id, isHandleNoTitle = true) => {
      let idVar = '';
      let titles = [];
      let _id = '';
      let _type = Array.isArray(type) ? type[0]: type;

      switch(_type) {
        case 'controller':
          if(state.titles.controller){
            titles = state.titles.controller;
          }
          idVar = 'ip_address';
          _id = id;
          break;
        case 'switch':
          if(state.titles.switch) {
            titles = state.titles.switch;
          }
          idVar = 'switch_name';
          _id = id;
          break;
        case 'port':
          if(state.titles.switch) {
            if(Array.isArray(id)) {
              state.titles.switch.forEach(value => {
                if (value.switch_name === id[0]) {
                  titles = value.port;
                }
              });
            } else {
              state.titles.switch.forEach(value => {
                titles = titles.concat(value.port);
              })
            }
          }
          idVar = 'port_name';
          _id = Array.isArray(id) ? id[1] : id;
          break;
        case 'tenant':
          if(state.titles.tenant) {
            titles = state.titles.tenant;
          }
          idVar = 'tenant_name';
          _id = id;
          break;
        case 'interface':
          if(state.titles.tenant) {
            if(Array.isArray(id)) {
              state.titles.tenant.forEach((value) => {
                if(value.tenant_name === id[0]) {
                  titles = Array.isArray(type) && type.length == 2 ? value.interface.filter(intf => intf.type === type[1]) : value.interface
                }
              });
            } else {
              state.titles.tenant.forEach((value) => {
                titles = Array.isArray(type) && type.length == 2 ? value.interface.filter(intf => intf.type === type[1]) : value.interface
              });
            }
          }
          idVar = 'intf_name';
          _id = Array.isArray(id) ? id[1] : id;
          break;
      }

      let item;
      for(let i = 0; i < titles.length; i++){
        item = titles[i];
        if(item[idVar] === _id){
          if(item.title) {
            return Object.assign({}, item, {
              id: _id,
              title: item.title
            })
          } else if(isHandleNoTitle) {
            return Object.assign({}, item, {
              id: _id,
              title: ''+_id
            })
          }
        }
      }

      if(isHandleNoTitle) {
        return {
          id: _id,
          title: ''+_id
        }
      }
    },
    getControllerTitles: (state) => {
      if(state.titles.controller){
        return state.titles.controller.map(controller => {
          return {
            id: controller.ip_address,
            ip_address: controller.ip_address,
            title: controller.title ? controller.title : controller.ip_address
          }
        });
      }
    },
    getControllerTitle: (state) => (id) => {
      if(state.titles.controller) {
        let controller = state.titles.controller.filter(controller => {
          return controller.ip_address === id
        })
        if(controller.length > 0) {
          controller = controller[0];
          return {
            id: controller.ip_address,
            ip_address: controller.ip_address,
            title: controller.title ? controller.title : controller.ip_address
          }
        }
      }
    },
    getSwitchTitles: (state) => (includePort) => {
      if(state.titles.switch) {
        return state.titles.switch.map(_switch => {
          let switchInfo = {
            id: _switch.switch_name,
            switch_name: _switch.switch_name,
            title: _switch.title ? _switch.title : _switch.switch_name
          };

          if(includePort) {
            switchInfo.port = _switch.port.map(port => {
              return {
                id: port.port_name,
                port_name: port.port_name,
                title: port.title ? port.title : port.port_name
              }
            })
          }
          return switchInfo;
        });
      }
    },
    getSwitchTitle: (state) => (id, includePort) => {
      if(state.titles.switch){
        let _switch = state.titles.switch.filter(_switch => {
          return _switch.switch_name === id;
        })

        if(_switch.length > 0) {
          _switch = _switch[0];
          if(includePort) {
            _switch.port = _switch.port.map(port => {
              return {
                id: port.port_name,
                port_name: port.port_name,
                title: port.title ? port.title : port.port_name
              }
            })
          }
  
          return {
            id: _switch.switch_name,
            switch_name: _switch.switch_name,
            title: _switch.title ? _switch.title : _switch.switch_name
          };
        }
      }
    },
    getTenantTitles: (state) => (includeInterface, intfType) => {
      if(state.titles.tenant){
        return state.titles.tenant.map(tenant => {
          let tenantInfo = {
            id: tenant.tenant_name,
            tenant_name: tenant.tenant_name,
            title: tenant.title ? tenant.title : tenant.tenant_name
          }

          if(includeInterface) {
            if(intfType) {
              tenantInfo.interface = tenant.interface
                                          .filter(intf => intf.type === intfType)
                                          .map(intf => {
                return {
                  id: intf.intf_name,
                  intf_name: intf.intf_name,
                  title: intf.title ? intf.title : intf.intf_name,
                  type: intf.type
                }
              })
            }else{
              tenantInfo.interface = tenant.interface
                                          .map(intf => {
                return {
                  id: intf.intf_name,
                  intf_name: intf.intf_name,
                  title: intf.title ? intf.title : intf.intf_name,
                  type: intf.type
                }
              })
            }
          }

          return tenantInfo;
        })
      }
    },
    getTenantTitle: (state) => (id, includeInterface, intfType) => {
      if(state.titles.tenant){
        let tenant = state.titles.tenant.filter(tenant => {
          return tenant.tenant_name === id;
        })

        if(tenant.length > 0) {
          tenant = tenant[0];
          if(includeInterface) {
            if(intfType) {
              tenant.interface = tenant.interface
                                          .filter(intf => intf.type === intfType)
                                          .map(intf => {
                return {
                  id: intf.intf_name,
                  intf_name: intf.intf_name,
                  title: intf.title ? intf.title : intf.intf_name,
                  type: intf.type
                }
              })
            }else{
              tenant.interface = tenant.interface
                                          .map(intf => {
                return {
                  id: intf.intf_name,
                  intf_name: intf.intf_name,
                  title: intf.title ? intf.title : intf.intf_name,
                  type: intf.type
                }
              })
            }
          }
  
          return tenant;
        }
      }
    },
    selectUserTitle(state) {
      return 'Select User';
    }
  },
  mutations: {
    async refreshTitles (state, titles){
      if(titles) {
        state.titles = titles;
      } else {
        let result = (await this.$http.get('/1.1/title/all')).data;
        state.titles = result;
      }

      if(state.apiServer) {
        let title = state.apiServer;
        if(state.titles.controller) {
          let controller = state.titles.controller.filter(controller => {
            return controller.ip_address === state.apiServer;
          })
          if(controller.length > 0) {
            controller = controller[0];
            title = controller.title ? controller.title : controller.ip_address;
          }
        }
        document.title = 'Prism [' + title + ']';
      }
    },
    setApiServer (state, apiServer) {
      state.apiServer = apiServer;
      let title = apiServer;
      if(state.titles.controller) {
        let controller = state.titles.controller.filter(controller => {
          return controller.ip_address === apiServer
        })
        if(controller.length > 0) {
          controller = controller[0];
          title = controller.title ? controller.title : controller.ip_address;
        }
      }
      document.title = 'Prism [' + title + ']';
    }
  }
}
