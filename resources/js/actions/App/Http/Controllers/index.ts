import CustomerController from './CustomerController'
import Settings from './Settings'
const Controllers = {
    CustomerController: Object.assign(CustomerController, CustomerController),
Settings: Object.assign(Settings, Settings),
}

export default Controllers