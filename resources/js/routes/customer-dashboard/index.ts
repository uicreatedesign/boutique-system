import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
import orders from './orders'
/**
* @see \App\Http\Controllers\CustomerDashboardController::index
 * @see app/Http/Controllers/CustomerDashboardController.php:12
 * @route '/customer-dashboard'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/customer-dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CustomerDashboardController::index
 * @see app/Http/Controllers/CustomerDashboardController.php:12
 * @route '/customer-dashboard'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CustomerDashboardController::index
 * @see app/Http/Controllers/CustomerDashboardController.php:12
 * @route '/customer-dashboard'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CustomerDashboardController::index
 * @see app/Http/Controllers/CustomerDashboardController.php:12
 * @route '/customer-dashboard'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CustomerDashboardController::index
 * @see app/Http/Controllers/CustomerDashboardController.php:12
 * @route '/customer-dashboard'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CustomerDashboardController::index
 * @see app/Http/Controllers/CustomerDashboardController.php:12
 * @route '/customer-dashboard'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CustomerDashboardController::index
 * @see app/Http/Controllers/CustomerDashboardController.php:12
 * @route '/customer-dashboard'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
const customerDashboard = {
    index: Object.assign(index, index),
orders: Object.assign(orders, orders),
}

export default customerDashboard