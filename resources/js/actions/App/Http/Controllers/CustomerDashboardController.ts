import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
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
/**
* @see \App\Http\Controllers\CustomerDashboardController::orders
 * @see app/Http/Controllers/CustomerDashboardController.php:93
 * @route '/customer/orders'
 */
export const orders = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: orders.url(options),
    method: 'get',
})

orders.definition = {
    methods: ["get","head"],
    url: '/customer/orders',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CustomerDashboardController::orders
 * @see app/Http/Controllers/CustomerDashboardController.php:93
 * @route '/customer/orders'
 */
orders.url = (options?: RouteQueryOptions) => {
    return orders.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CustomerDashboardController::orders
 * @see app/Http/Controllers/CustomerDashboardController.php:93
 * @route '/customer/orders'
 */
orders.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: orders.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CustomerDashboardController::orders
 * @see app/Http/Controllers/CustomerDashboardController.php:93
 * @route '/customer/orders'
 */
orders.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: orders.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CustomerDashboardController::orders
 * @see app/Http/Controllers/CustomerDashboardController.php:93
 * @route '/customer/orders'
 */
    const ordersForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: orders.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CustomerDashboardController::orders
 * @see app/Http/Controllers/CustomerDashboardController.php:93
 * @route '/customer/orders'
 */
        ordersForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: orders.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CustomerDashboardController::orders
 * @see app/Http/Controllers/CustomerDashboardController.php:93
 * @route '/customer/orders'
 */
        ordersForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: orders.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    orders.form = ordersForm
/**
* @see \App\Http\Controllers\CustomerDashboardController::showOrder
 * @see app/Http/Controllers/CustomerDashboardController.php:59
 * @route '/customer-dashboard/orders/{id}'
 */
export const showOrder = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showOrder.url(args, options),
    method: 'get',
})

showOrder.definition = {
    methods: ["get","head"],
    url: '/customer-dashboard/orders/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CustomerDashboardController::showOrder
 * @see app/Http/Controllers/CustomerDashboardController.php:59
 * @route '/customer-dashboard/orders/{id}'
 */
showOrder.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                }

    return showOrder.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CustomerDashboardController::showOrder
 * @see app/Http/Controllers/CustomerDashboardController.php:59
 * @route '/customer-dashboard/orders/{id}'
 */
showOrder.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showOrder.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CustomerDashboardController::showOrder
 * @see app/Http/Controllers/CustomerDashboardController.php:59
 * @route '/customer-dashboard/orders/{id}'
 */
showOrder.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showOrder.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CustomerDashboardController::showOrder
 * @see app/Http/Controllers/CustomerDashboardController.php:59
 * @route '/customer-dashboard/orders/{id}'
 */
    const showOrderForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: showOrder.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CustomerDashboardController::showOrder
 * @see app/Http/Controllers/CustomerDashboardController.php:59
 * @route '/customer-dashboard/orders/{id}'
 */
        showOrderForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showOrder.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CustomerDashboardController::showOrder
 * @see app/Http/Controllers/CustomerDashboardController.php:59
 * @route '/customer-dashboard/orders/{id}'
 */
        showOrderForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showOrder.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    showOrder.form = showOrderForm
/**
* @see \App\Http\Controllers\CustomerDashboardController::downloadInvoice
 * @see app/Http/Controllers/CustomerDashboardController.php:127
 * @route '/customer-dashboard/orders/{id}/invoice'
 */
export const downloadInvoice = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: downloadInvoice.url(args, options),
    method: 'get',
})

downloadInvoice.definition = {
    methods: ["get","head"],
    url: '/customer-dashboard/orders/{id}/invoice',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CustomerDashboardController::downloadInvoice
 * @see app/Http/Controllers/CustomerDashboardController.php:127
 * @route '/customer-dashboard/orders/{id}/invoice'
 */
downloadInvoice.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                }

    return downloadInvoice.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CustomerDashboardController::downloadInvoice
 * @see app/Http/Controllers/CustomerDashboardController.php:127
 * @route '/customer-dashboard/orders/{id}/invoice'
 */
downloadInvoice.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: downloadInvoice.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CustomerDashboardController::downloadInvoice
 * @see app/Http/Controllers/CustomerDashboardController.php:127
 * @route '/customer-dashboard/orders/{id}/invoice'
 */
downloadInvoice.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: downloadInvoice.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CustomerDashboardController::downloadInvoice
 * @see app/Http/Controllers/CustomerDashboardController.php:127
 * @route '/customer-dashboard/orders/{id}/invoice'
 */
    const downloadInvoiceForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: downloadInvoice.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CustomerDashboardController::downloadInvoice
 * @see app/Http/Controllers/CustomerDashboardController.php:127
 * @route '/customer-dashboard/orders/{id}/invoice'
 */
        downloadInvoiceForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: downloadInvoice.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CustomerDashboardController::downloadInvoice
 * @see app/Http/Controllers/CustomerDashboardController.php:127
 * @route '/customer-dashboard/orders/{id}/invoice'
 */
        downloadInvoiceForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: downloadInvoice.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    downloadInvoice.form = downloadInvoiceForm
const CustomerDashboardController = { index, orders, showOrder, downloadInvoice }

export default CustomerDashboardController