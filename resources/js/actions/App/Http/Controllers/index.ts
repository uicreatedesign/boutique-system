import Api from './Api'
import CustomerController from './CustomerController'
import RoleController from './RoleController'
import PermissionController from './PermissionController'
import TailorController from './TailorController'
import UserController from './UserController'
import MeasurementCategoryController from './MeasurementCategoryController'
import MeasurementFieldController from './MeasurementFieldController'
import Auth from './Auth'
import DashboardController from './DashboardController'
import Settings from './Settings'
import TailorDashboardController from './TailorDashboardController'
import MeasurementController from './MeasurementController'
import GarmentTypeController from './GarmentTypeController'
import FabricController from './FabricController'
import StitchingStatusController from './StitchingStatusController'
import OrderController from './OrderController'
import ReportController from './ReportController'
import NotificationController from './NotificationController'
import SearchController from './SearchController'
import CustomerDashboardController from './CustomerDashboardController'
const Controllers = {
    Api: Object.assign(Api, Api),
CustomerController: Object.assign(CustomerController, CustomerController),
RoleController: Object.assign(RoleController, RoleController),
PermissionController: Object.assign(PermissionController, PermissionController),
TailorController: Object.assign(TailorController, TailorController),
UserController: Object.assign(UserController, UserController),
MeasurementCategoryController: Object.assign(MeasurementCategoryController, MeasurementCategoryController),
MeasurementFieldController: Object.assign(MeasurementFieldController, MeasurementFieldController),
Auth: Object.assign(Auth, Auth),
DashboardController: Object.assign(DashboardController, DashboardController),
Settings: Object.assign(Settings, Settings),
TailorDashboardController: Object.assign(TailorDashboardController, TailorDashboardController),
MeasurementController: Object.assign(MeasurementController, MeasurementController),
GarmentTypeController: Object.assign(GarmentTypeController, GarmentTypeController),
FabricController: Object.assign(FabricController, FabricController),
StitchingStatusController: Object.assign(StitchingStatusController, StitchingStatusController),
OrderController: Object.assign(OrderController, OrderController),
ReportController: Object.assign(ReportController, ReportController),
NotificationController: Object.assign(NotificationController, NotificationController),
SearchController: Object.assign(SearchController, SearchController),
CustomerDashboardController: Object.assign(CustomerDashboardController, CustomerDashboardController),
}

export default Controllers