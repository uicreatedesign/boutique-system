import CustomerController from './CustomerController'
import RoleController from './RoleController'
import PermissionController from './PermissionController'
import TailorController from './TailorController'
import UserController from './UserController'
import Settings from './Settings'
import TailorDashboardController from './TailorDashboardController'
const Controllers = {
    CustomerController: Object.assign(CustomerController, CustomerController),
RoleController: Object.assign(RoleController, RoleController),
PermissionController: Object.assign(PermissionController, PermissionController),
TailorController: Object.assign(TailorController, TailorController),
UserController: Object.assign(UserController, UserController),
Settings: Object.assign(Settings, Settings),
TailorDashboardController: Object.assign(TailorDashboardController, TailorDashboardController),
}

export default Controllers