import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\CustomerRegistrationController::store
 * @see app/Http/Controllers/Api/CustomerRegistrationController.php:17
 * @route '/api/customers/register'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/customers/register',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\CustomerRegistrationController::store
 * @see app/Http/Controllers/Api/CustomerRegistrationController.php:17
 * @route '/api/customers/register'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\CustomerRegistrationController::store
 * @see app/Http/Controllers/Api/CustomerRegistrationController.php:17
 * @route '/api/customers/register'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\CustomerRegistrationController::store
 * @see app/Http/Controllers/Api/CustomerRegistrationController.php:17
 * @route '/api/customers/register'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\CustomerRegistrationController::store
 * @see app/Http/Controllers/Api/CustomerRegistrationController.php:17
 * @route '/api/customers/register'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
const CustomerRegistrationController = { store }

export default CustomerRegistrationController