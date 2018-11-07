export default {
  state: {
    initTopology: {controllers: [], switches: [], positions: [], hosts:[]},
    currentTopology: {controllers: [], switches: [], positions: [], hosts: []}
  },
  getters: {
    getInitTopology: state => state.initTopology,
    getCurrentTopology: state => state.currentTopology,
    removedControllers: state => {
      return state.initTopology.controllers.filter(initController => {
        let exist = false;
        state.currentTopology.controllers.forEach(currentController => {
          if(currentController.ip_address === initController.ip_address) {
            exist = true;
          }
        });

        return !exist;
      });
    },
    addedControllers: state => {
      return state.currentTopology.controllers.filter(currentController => {
        let exist = false;
        state.initTopology.controllers.forEach(initController => {
          if(currentController.ip_address === initController.ip_address) {
            exist = true;
          }
        });

        return !exist;
      });
    },
    removedSwitches: state => {
      return state.initTopology.switches.filter(initSwitch => {
        let exist = false;
        state.currentTopology.switches.forEach(currentSwitch => {
          if(currentSwitch.dpid === initSwitch.dpid) {
            exist = true;
          }
        });

        return !exist;
      });
    },
    addedSwitches: state => {
      return state.currentTopology.switches.filter(currentSwitch => {
        let exist = false;
        state.initTopology.switches.forEach(initSwitch => {
          if(currentSwitch.dpid === initSwitch.dpid) {
            exist = true;
          }
        });

        return !exist;
      });
    },
    getCurrentSwitch: state => dpid => {
      let switches = state.currentTopology.switches.filter(currentSwitch => {
        return currentSwitch.dpid === dpid;
      });

      if(switches.length > 0) {
        return switches[0];
      }
    },
    getRemovedSwitch: state => dpid => {
      let switches = state.initTopology.switches.filter(currentSwitch => {
        return currentSwitch.dpid === dpid;
      });

      if(switches.length > 0) {
        return switches[0];
      }
    },
    allPositions: state => {
      return state.initTopology.positions;
    },
    getPosition: state => dpid => {
      let positions = state.initTopology.positions.filter(position => position.dpid === dpid);
      if(positions.length > 0) {
        return positions[0].position;
      }
    }
  },
  mutations: {
    setCurrentTopology(state, topology) {
      let neighbors = topology.topology;
      let controllers = topology.controllers;
      let switches = topology.switches;
      let ports = topology.ports;
      let positions = topology.positions;
      let hosts = topology.hosts;

      let initControllers = state.initTopology.controllers.slice(0);
      controllers.forEach(controller => {
        controller.type = 'controller';
        let exist = false;
        initControllers.forEach(initController => {
          if(initController.ip_address === controller.ip_address) {
            initController = controller;
            exist = true;
          }
        });

        if(!exist){
          initControllers.push(controller);
        }
      });

      let initSwitches = state.initTopology.switches.slice(0);
      switches.forEach(_switch => {
        _switch.type = 'switch';
        _switch.portCount = _switch.port_count;
        _switch.ports = [];
        _switch.neighbors = [];
        _switch.hosts = [];

        ports.forEach(port => {
          if(port.dpid === _switch.dpid){
            _switch.ports = port.ports;
          }
        });

        neighbors.forEach(neighbor => {
          if(neighbor.dpid === _switch.dpid){
            _switch.neighbors = neighbor.neighbors;
          }
        });

        hosts.forEach(tenantHosts => {
          if(tenantHosts.neighbor) {
            tenantHosts.neighbor.forEach(host => {
              if(!host.tenant_name) {
                host.tenant_name = tenantHosts.tenant_name;
              }

              if(!host._id) {
                host._id = host.host_mac + '_' + host.host_ip + '_' + host.vlan;
              }

              if(host.dpid === _switch.dpid) {
                _switch.hosts.push(host);
              }
            });
          }
        })

        let exist = false
        initSwitches.forEach(initSwitch => {
          if(initSwitch.dpid === _switch.dpid){
            initSwitch = _switch;
            exist = true;
          }
        });
        if(!exist) {
          initSwitches.push(_switch);
        }
      });

      let initPositions = state.initTopology.positions.slice(0);
      positions.forEach(position => {
        let exist = false;
        initPositions.forEach(initPosition => {
          if(initPosition.dpid === position.dpid) {
            initPosition.position = position.position;
            exist = true;
          }
        });

        if(!exist){
          initPositions.push(position);
        }
      })
      state.initTopology = {controllers: initControllers, switches: initSwitches, positions: initPositions, hosts};
      state.currentTopology = {controllers, switches, positions, hosts};
    }
  }
}
