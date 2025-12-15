import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\CustomerDashboardController::show
 * @see app/Http/Controllers/CustomerDashboardController.php:52
 * @route '/customer-dashboard/orders/{id}'
 */
export const show = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/customer-dashboard/orders/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CustomerDashboardController::show
 * @see app/Http/Controllers/CustomerDashboardController.php:52
 * @route '/customer-dashboard/orders/{id}'
 */
show.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return show.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CustomerDashboardController::show
 * @see app/Http/Controllers/CustomerDashboardController.php:52
 * @route '/customer-dashboard/orders/{id}'
 */
show.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CustomerDashboardController::show
 * @see app/Http/Controllers/CustomerDashboardController.php:52
 * @route '/customer-dashboard/orders/{id}'
 */
show.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CustomerDashboardController::show
 * @see app/Http/Controllers/CustomerDashboardController.php:52
 * @route '/customer-dashboard/orders/{id}'
 */
    const showForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CustomerDashboardController::show
 * @see app/Http/Controllers/CustomerDashboardController.php:52
 * @route '/customer-dashboard/orders/{id}'
 */
        showForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CustomerDashboardController::show
 * @see app/Http/Controllers/CustomerDashboardController.php:52
 * @route '/customer-dashboard/orders/{id}'
 */
        showForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
/**
* @see \App\Http\Controllers\CustomerDashboardController::invoice
 * @see app/Http/Controllers/CustomerDashboardController.php:82
 * @route '/customer-dashboard/orders/{id}/invoice'
 */
export const invoice = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: invoice.url(args, options),
    method: 'get',
})

invoice.definition = {
    methods: ["get","head"],
    url: '/customer-dashboard/orders/{id}/invoice',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CustomerDashboardController::invoice
 * @see app/Http/Controllers/CustomerDashboardController.php:82
 * @route '/customer-dashboard/orders/{id}/invoice'
 */
invoice.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return invoice.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CustomerDashboardController::invoice
 * @see app/Http/Controllers/CustomerDashboardController.php:82
 * @route '/customer-dashboard/orders/{id}/invoice'
 */
invoice.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: invoice.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CustomerDashboardController::invoice
 * @see app/Http/Controllers/CustomerDashboardController.php:82
 * @route '/customer-dashboard/orders/{id}/invoice'
 */
invoice.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: invoice.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CustomerDashboardController::invoice
 * @see app/Http/Controllers/CustomerDashboardController.php:82
 * @route '/customer-dashboard/orders/{id}/invoice'
 */
    const invoiceForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: invoice.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CustomerDashboardController::invoice
 * @see app/Http/Controllers/CustomerDashboardController.php:82
 * @route '/customer-dashboard/orders/{id}/invoice'
 */
        invoiceForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: invoice.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CustomerDashboardController::invoice
 * @see app/Http/Controllers/CustomerDashboardController.php:82
 * @route '/customer-dashboard/orders/{id}/invoice'
 */
        invoiceForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: invoice.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    invoice.form = invoiceForm
const orders = {
    show: Object.assign(show, show),
invoice: Object.assign(invoice, invoice),
}

export default orders