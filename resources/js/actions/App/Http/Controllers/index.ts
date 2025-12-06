import CustomerController from './CustomerController'
import RoleController from './RoleController'
import PermissionController from './PermissionController'
import TailorController from './TailorController'
import UserController from './UserController'
import Settings from './Settings'
const Controllers = {
    CustomerController: Object.assign(CustomerController, CustomerController),
RoleController: Object.assign(RoleController, RoleController),
PermissionController: Object.assign(PermissionController, PermissionController),
TailorController: Object.assign(TailorController, TailorController),
UserController: Object.assign(UserController, UserController),
Settings: Object.assign(Settings, Settings),
}

export default Controllers