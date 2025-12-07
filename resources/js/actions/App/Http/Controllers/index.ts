import CustomerController from './CustomerController'
import RoleController from './RoleController'
import PermissionController from './PermissionController'
import TailorController from './TailorController'
import UserController from './UserController'
import MeasurementCategoryController from './MeasurementCategoryController'
import MeasurementFieldController from './MeasurementFieldController'
import Settings from './Settings'
import TailorDashboardController from './TailorDashboardController'
import MeasurementController from './MeasurementController'
import GarmentTypeController from './GarmentTypeController'
import FabricController from './FabricController'
import StitchingStatusController from './StitchingStatusController'
import OrderController from './OrderController'
const Controllers = {
    CustomerController: Object.assign(CustomerController, CustomerController),
RoleController: Object.assign(RoleController, RoleController),
PermissionController: Object.assign(PermissionController, PermissionController),
TailorController: Object.assign(TailorController, TailorController),
UserController: Object.assign(UserController, UserController),
MeasurementCategoryController: Object.assign(MeasurementCategoryController, MeasurementCategoryController),
MeasurementFieldController: Object.assign(MeasurementFieldController, MeasurementFieldController),
Settings: Object.assign(Settings, Settings),
TailorDashboardController: Object.assign(TailorDashboardController, TailorDashboardController),
MeasurementController: Object.assign(MeasurementController, MeasurementController),
GarmentTypeController: Object.assign(GarmentTypeController, GarmentTypeController),
FabricController: Object.assign(FabricController, FabricController),
StitchingStatusController: Object.assign(StitchingStatusController, StitchingStatusController),
OrderController: Object.assign(OrderController, OrderController),
}

export default Controllers