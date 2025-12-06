import CustomerController from './CustomerController'
import RoleController from './RoleController'
import PermissionController from './PermissionController'
import Settings from './Settings'
const Controllers = {
    CustomerController: Object.assign(CustomerController, CustomerController),
RoleController: Object.assign(RoleController, RoleController),
PermissionController: Object.assign(PermissionController, PermissionController),
Settings: Object.assign(Settings, Settings),
}

export default Controllers