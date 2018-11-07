import Vue from 'vue'
import Router from 'vue-router'
import FabricTopology from '@/components/fabric/FabricTopology'
import FabricRouter from '@/components/fabric/FabricRouter'
import Monitoring from '@/components/monitoring/Monitoring'
import MonitoringController from '@/components/monitoring/MonitoringController'
import MonitoringSwitch from '@/components/monitoring/MonitoringSwitch'
import MonitoringRouter from '@/components/monitoring/MonitoringRouter'
import AlarmSearch from '@/components/alarm/AlarmSearch'
import AlarmSystem from '@/components/alarm/AlarmSystem'
import AlarmController from '@/components/alarm/AlarmController'
import AlarmSwitch from '@/components/alarm/AlarmSwitch'
import ControllerList from '@/components/monitoring/controller/ControllerList'
import ControllerDetail from '@/components/monitoring/controller/ControllerDetail'
import SwitchList from '@/components/monitoring/switch/SwitchList'
import SwitchDetail from '@/components/monitoring/switch/SwitchDetail'
import PortList from '@/components/monitoring/switch/PortList'
import FlowTable from '@/components/monitoring/switch/FlowTable'
import MeterTable from '@/components/monitoring/switch/MeterTable'
import GroupTable from '@/components/monitoring/switch/GroupTable'
import RouterList from '@/components/monitoring/router/RouterList'
import RouterDetail from '@/components/monitoring/router/RouterDetail'
import Tenant from '@/components/tenant/Tenant'
import VRouter from '@/components/tenant/router/VRouter'
import Bridge from '@/components/tenant/interface/Bridge'
import BridgeNew from '@/components/tenant/interface/BridgeNew'
import BridgeEdit from '@/components/tenant/interface/BridgeEdit'
import Bond from '@/components/tenant/interface/Bond'
import BondNew from '@/components/tenant/interface/BondNew'
import BondEdit from '@/components/tenant/interface/BondEdit'
import Physical from '@/components/tenant/interface/Physical'
import PhysicalEdit from '@/components/tenant/interface/PhysicalEdit'
import Arp from '@/components/tenant/l2/Arp'
import Fdb from '@/components/tenant/l2/Fdb'
import Static from '@/components/tenant/l3/static_route/Static'
import StaticEditor from '@/components/tenant/l3/static_route/StaticEditor'
import Ospf from '@/components/tenant/l3/Ospf'
import Bgp from '@/components/tenant/l3/Bgp'
import VxLAN from '@/components/tenant/l3/VxLAN'
import VxLANNew from '@/components/tenant/l3/VxLANNew'
import VxLANEdit from '@/components/tenant/l3/VxLANEdit'
import Acl from '@/components/tenant/acl/Acl'
import AclNew from '@/components/tenant/acl/AclNew'
import AclEdit from '@/components/tenant/acl/AclEdit'
import QosRule from '@/components/tenant/qos/QosRule'
import QosRuleNew from '@/components/tenant/qos/QosRuleNew'
import QosRuleEdit from '@/components/tenant/qos/QosRuleEdit'
import QosEntry from '@/components/tenant/qos/QosEntry'
import QosEntryNew from '@/components/tenant/qos/QosEntryNew'
import QosEntryEdit from '@/components/tenant/qos/QosEntryEdit'
import SwitchManager from '@/components/tools/management/SwitchManager'
import PortManager from '@/components/tools/management/PortManager'
import SshManager from '@/components/tools/management/SshManager'
import TitleManager from '@/components/tools/management/TitleManager'
import MirroringManager from '@/components/tools/management/mirroring/MirroringManager'
import MirroringEditor from '@/components/tools/management/mirroring/MirroringEditor'
import HostPath from '@/components/tools/hostpath/HostPath'
import ConfigurationFiles from '@/components/tools/backup/ConfigurationFiles'
import CrashFiles from '@/components/tools/backup/CrashFiles'
import LogFiles from '@/components/tools/backup/LogFiles'
import UserManager from '@/components/tools/user/UserManager'
import UserInfo from '@/components/tools/user/UserInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/fabric/topology'
    },
    {
      path: '/fabric/topology',
      name: 'fabric_topology',
      component: FabricTopology,
      props: true,
      children: [
        {
          path: 'controller',
          name: 'fabric_controllers',
          component: FabricTopology,
          props: true,
          children: [
            {
              path: ':id',
              name: 'fabric_controller',
              component: FabricTopology,
              props: true
            }
          ]
        },
        {
          path: 'switch',
          name: 'fabric_switches',
          component: FabricTopology,
          props: true,
          children: [
            {
              path: ':id',
              name: 'fabric_switch',
              component: FabricTopology,
              props: true
            }
          ]
        }
      ]
    },
    {
      path: '/fabric/router/:id',
      name: 'fabric_tenant',
      component: FabricRouter,
      props: true,
      children: [
        {
          path: 'physical',
          name: 'fabric_physical',
          component: FabricRouter,
          props: true
        },
        {
          path: 'bridge',
          name: 'fabric_bridge',
          component: FabricRouter,
          props: true
        },
        {
          path: 'bond',
          name: 'fabric_bond',
          component: FabricRouter,
          props: true
        }
      ]
    },
    {
      path: '/monitoring/controller',
      name: 'monitoring',
      component: MonitoringController,
      props: true,
      children: [
        {
          path: '',
          name: 'monitoring_controller',
          component: ControllerList,
          props: true
        },
        {
          path: ':name',
          name: 'monitoring_controller_detail',
          component: ControllerDetail,
          props: true
        }
      ]
    },
    {
      path: '/monitoring/switch',
      name: 'monitoring_switches',
      component: MonitoringSwitch,
      props: true,
      children: [
        {
          path: '',
          name: 'monitoring_switch_list',
          component: SwitchList,
          props: true
        },
        {
          path: ':dpid',
          name: 'monitoring_switch',
          component: SwitchDetail, // SwitchDetail
          props: true
        },
        {
          path: ':dpid/flowtable',
          name: 'monitoring_flowtable',
          component: FlowTable, // FlowTable
          props: true
        },
        // {
        //   path: ':dpid/port',
        //   name: 'monitoring_port',
        //   component: PortList, // PortDetail, PortList
        //   props: true
        // },
        {
          path: ':dpid/port',
          name: 'monitoring_port',
          component: PortList, // PortList(ALL, EACH ITEM)
          props: true,
          children: [
            {
              path: ':port',
              name: 'monitoring_port_detail',
              component: PortList, // PortDetail, // PortList(ALL, EACH ITEM)
              props: true
            }
          ]
        },
        {
          path: ':dpid/metertable',
          name: 'monitoring_metertable', // MeterTable
          component: MeterTable,
          props: true
        },
        {
          path: ':dpid/grouptable',
          name: 'monitoring_grouptable', // GroupTable
          component: GroupTable,
          props: true
        }
      ]
    },
    {
      path: '/monitoring/sfp',
      name: 'monitoring_sfps',
      component: Monitoring,
      props: true,
      children: [
        {
          path: ':id',
          name: 'monitoring_sfp',
          component: Monitoring,
          props: true
        }
      ]
    },
    {
      path: '/monitoring/router',
      name: 'monitoring_routers',
      component: MonitoringRouter,
      props: true,
      children: [
        {
          path: '',
          name: 'monitoring_router_list',
          component: RouterList,
          props: true
        },
        {
          path: ':tenantName',
          name: 'monitoring_router_detail',
          component: RouterDetail,
          props: true
        },
        {
          path: ':tenantName/:type',
          name: 'monitoring_router_detail',
          component: RouterDetail,
          props: true
        }
      ]
    },
    {
      path: '/tenant',
      name: 'tenant',
      component: Tenant,
      children: [
        {
          path: 'router',
          name: 'router',
          component: VRouter,
          props: true
        },
        {
          path: 'interfaces/bridge/:tenantName?',
          name: 'tenant_bridge',
          component: Bridge,
          props: true
        },
        {
          path: 'interfaces/bridge/new/:tenantName?',
          name: 'tenant_bridge_new',
          component: BridgeNew,
          props: true
        },
        {
          path: 'interfaces/bridge/edit',
          name: 'tenant_bridge_edit',
          component: BridgeEdit,
          props: true
        },
        {
          path: 'interfaces/bond/:tenantName?',
          name: 'tenant_bond',
          component: Bond,
          props: true
        },
        {
          path: 'interfaces/bond/new/:tenantName?',
          name: 'tenant_bond_new',
          component: BondNew,
          props: true
        },
        {
          path: 'interfaces/bond/edit',
          name: 'tenant_bond_edit',
          component: BondEdit,
          props: true
        },
        {
          path: 'interfaces/physical/:tenantName?',
          name: 'tenant_physical',
          component: Physical,
          props: true
        },
        {
          path: 'interfaces/physical/edit',
          name: 'tenant_physical_edit',
          component: PhysicalEdit,
          props: true
        },
        {
          path: 'l2/arp/:tenantName?',
          name: 'tenant_l2_arp',
          component: Arp,
          props: true
        },
        {
          path: 'l2/fdb/:tenantName?',
          name: 'tenant_l2_fdb',
          component: Fdb,
          props: true
        },
        {
          path: 'l3/static/:tenant?',
          name: 'tenant_l3_static',
          component: Static,
          props: true
        },
        {
          path: 'l3/static_new/:tenant?',
          name: 'tenant_l3_static_new',
          component: StaticEditor,
          props: true
        },
        {
          path: 'l3/ospf/:selected?',
          name: 'tenant_l3_ospf',
          component: Ospf,
          props: true
        },
        {
          path: 'l3/bgp/:selected?',
          name: 'tenant_l3_bgp',
          component: Bgp,
          props: true
        },
        {
          path: 'l3/vxlan',
          name: 'tenant_l3_vxlan',
          component: VxLAN,
          props: true
        },
        {
          path: 'l3/vxlan/new/:selected',
          name: 'tenant_l3_vxlan_new',
          component: VxLANNew,
          props: true
        },
        {
          path: 'l3/vxlan/edit/:selected',
          name: 'tenant_l3_vxlan_edit',
          component: VxLANEdit,
          props: true
        },
        {
          path: 'acl',
          name: 'tenant_acl',
          component: Acl,
          props: true
        },
        {
          path: 'acl/new',
          name: 'tenant_acl_new',
          component: AclNew,
          props: true
        },
        {
          path: 'acl/edit/:selected',
          name: 'tenant_acl_edit',
          component: AclEdit,
          props: true
        },
        {
          path: 'qos/rule',
          name: 'tenant_qos_rule',
          component: QosRule,
          props: true
        },
        {
          path: 'qos/rule/new',
          name: 'tenant_qos_rule_new',
          component: QosRuleNew,
          props: true
        },
        {
          path: 'qos/rule/edit',
          name: 'tenant_qos_rule_edit',
          component: QosRuleEdit,
          props: true
        },
        {
          path: 'qos/entry',
          name: 'tenant_qos_entry',
          component: QosEntry,
          props: true
        },
        {
          path: 'qos/entry/new',
          name: 'tenant_qos_entry_new',
          component: QosEntryNew,
          props: true
        },
        {
          path: 'qos/entry/edit',
          name: 'tenant_qos_entry_edit',
          component: QosEntryEdit,
          props: true
        }
      ]
    },
    {
      path: '/alarm/search',
      name: 'alarm_search',
      component: AlarmSearch
    },
    {
      path: '/alarm/setting/system',
      name: 'alarm_system',
      component: AlarmSystem
    },
    {
      path: '/alarm/setting/controller',
      name: 'alarm_controller',
      component: AlarmController
    },
    {
      path: '/alarm/setting/switch',
      name: 'alarm_switch',
      component: AlarmSwitch
    },
    {
      path: '/tools/management/switch',
      name: 'tools_switch',
      component: SwitchManager
    },
    {
      path: '/tools/management/port',
      name: 'tools_port',
      component: PortManager
    },
    {
      path: '/tools/management/ssh',
      name: 'tools_ssh',
      component: SshManager
    },
    {
      path: '/tools/management/title',
      name: 'tools_title',
      component: TitleManager
    },
    {
      path: '/tools/management/mirroring',
      name: 'tools_mirroring',
      component: MirroringManager
    },
    {
      path: '/tools/management/mirroring_new',
      name: 'tools_mirroring_edit',
      component: MirroringEditor
    },
    {
      path: '/tools/management/mirroring_edit/:dpid/:out_port',
      name: 'tools_mirroring_edit',
      component: MirroringEditor
    },
    {
      path: '/tools/hostpath',
      name: 'tools_hostpath',
      component: HostPath
    },
    {
      path: '/tools/backup/config',
      name: 'tools_config',
      component: ConfigurationFiles
    },
    {
      path: '/tools/backup/crash',
      name: 'tools_crash',
      component: CrashFiles
    },
    {
      path: '/tools/backup/log',
      name: 'tools_log',
      component: LogFiles
    },
    {
      path: '/tools/user',
      name: 'tools_user',
      component: UserManager
    },
    {
      path: '/tools/userinfo/:userName',
      name: 'tools_userinfo',
      component: UserInfo
    }
  ]
})
