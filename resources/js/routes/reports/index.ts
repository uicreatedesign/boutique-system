import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
import exportMethod from './export'
/**
* @see \App\Http\Controllers\ReportController::index
 * @see app/Http/Controllers/ReportController.php:23
 * @route '/reports'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/reports',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ReportController::index
 * @see app/Http/Controllers/ReportController.php:23
 * @route '/reports'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ReportController::index
 * @see app/Http/Controllers/ReportController.php:23
 * @route '/reports'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ReportController::index
 * @see app/Http/Controllers/ReportController.php:23
 * @route '/reports'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ReportController::index
 * @see app/Http/Controllers/ReportController.php:23
 * @route '/reports'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ReportController::index
 * @see app/Http/Controllers/ReportController.php:23
 * @route '/reports'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ReportController::index
 * @see app/Http/Controllers/ReportController.php:23
 * @route '/reports'
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
* @see \App\Http\Controllers\ReportController::sales
 * @see app/Http/Controllers/ReportController.php:28
 * @route '/reports/sales'
 */
export const sales = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: sales.url(options),
    method: 'get',
})

sales.definition = {
    methods: ["get","head"],
    url: '/reports/sales',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ReportController::sales
 * @see app/Http/Controllers/ReportController.php:28
 * @route '/reports/sales'
 */
sales.url = (options?: RouteQueryOptions) => {
    return sales.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ReportController::sales
 * @see app/Http/Controllers/ReportController.php:28
 * @route '/reports/sales'
 */
sales.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: sales.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ReportController::sales
 * @see app/Http/Controllers/ReportController.php:28
 * @route '/reports/sales'
 */
sales.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: sales.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ReportController::sales
 * @see app/Http/Controllers/ReportController.php:28
 * @route '/reports/sales'
 */
    const salesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: sales.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ReportController::sales
 * @see app/Http/Controllers/ReportController.php:28
 * @route '/reports/sales'
 */
        salesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: sales.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ReportController::sales
 * @see app/Http/Controllers/ReportController.php:28
 * @route '/reports/sales'
 */
        salesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: sales.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    sales.form = salesForm
/**
* @see \App\Http\Controllers\ReportController::tailorPerformance
 * @see app/Http/Controllers/ReportController.php:61
 * @route '/reports/tailor-performance'
 */
export const tailorPerformance = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: tailorPerformance.url(options),
    method: 'get',
})

tailorPerformance.definition = {
    methods: ["get","head"],
    url: '/reports/tailor-performance',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ReportController::tailorPerformance
 * @see app/Http/Controllers/ReportController.php:61
 * @route '/reports/tailor-performance'
 */
tailorPerformance.url = (options?: RouteQueryOptions) => {
    return tailorPerformance.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ReportController::tailorPerformance
 * @see app/Http/Controllers/ReportController.php:61
 * @route '/reports/tailor-performance'
 */
tailorPerformance.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: tailorPerformance.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ReportController::tailorPerformance
 * @see app/Http/Controllers/ReportController.php:61
 * @route '/reports/tailor-performance'
 */
tailorPerformance.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: tailorPerformance.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ReportController::tailorPerformance
 * @see app/Http/Controllers/ReportController.php:61
 * @route '/reports/tailor-performance'
 */
    const tailorPerformanceForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: tailorPerformance.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ReportController::tailorPerformance
 * @see app/Http/Controllers/ReportController.php:61
 * @route '/reports/tailor-performance'
 */
        tailorPerformanceForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: tailorPerformance.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ReportController::tailorPerformance
 * @see app/Http/Controllers/ReportController.php:61
 * @route '/reports/tailor-performance'
 */
        tailorPerformanceForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: tailorPerformance.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    tailorPerformance.form = tailorPerformanceForm
/**
* @see \App\Http\Controllers\ReportController::customers
 * @see app/Http/Controllers/ReportController.php:101
 * @route '/reports/customers'
 */
export const customers = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: customers.url(options),
    method: 'get',
})

customers.definition = {
    methods: ["get","head"],
    url: '/reports/customers',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ReportController::customers
 * @see app/Http/Controllers/ReportController.php:101
 * @route '/reports/customers'
 */
customers.url = (options?: RouteQueryOptions) => {
    return customers.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ReportController::customers
 * @see app/Http/Controllers/ReportController.php:101
 * @route '/reports/customers'
 */
customers.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: customers.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ReportController::customers
 * @see app/Http/Controllers/ReportController.php:101
 * @route '/reports/customers'
 */
customers.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: customers.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ReportController::customers
 * @see app/Http/Controllers/ReportController.php:101
 * @route '/reports/customers'
 */
    const customersForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: customers.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ReportController::customers
 * @see app/Http/Controllers/ReportController.php:101
 * @route '/reports/customers'
 */
        customersForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: customers.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ReportController::customers
 * @see app/Http/Controllers/ReportController.php:101
 * @route '/reports/customers'
 */
        customersForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: customers.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    customers.form = customersForm
/**
* @see \App\Http\Controllers\ReportController::inventory
 * @see app/Http/Controllers/ReportController.php:139
 * @route '/reports/inventory'
 */
export const inventory = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: inventory.url(options),
    method: 'get',
})

inventory.definition = {
    methods: ["get","head"],
    url: '/reports/inventory',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ReportController::inventory
 * @see app/Http/Controllers/ReportController.php:139
 * @route '/reports/inventory'
 */
inventory.url = (options?: RouteQueryOptions) => {
    return inventory.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ReportController::inventory
 * @see app/Http/Controllers/ReportController.php:139
 * @route '/reports/inventory'
 */
inventory.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: inventory.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ReportController::inventory
 * @see app/Http/Controllers/ReportController.php:139
 * @route '/reports/inventory'
 */
inventory.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: inventory.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ReportController::inventory
 * @see app/Http/Controllers/ReportController.php:139
 * @route '/reports/inventory'
 */
    const inventoryForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: inventory.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ReportController::inventory
 * @see app/Http/Controllers/ReportController.php:139
 * @route '/reports/inventory'
 */
        inventoryForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: inventory.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ReportController::inventory
 * @see app/Http/Controllers/ReportController.php:139
 * @route '/reports/inventory'
 */
        inventoryForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: inventory.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    inventory.form = inventoryForm
const reports = {
    index: Object.assign(index, index),
sales: Object.assign(sales, sales),
tailorPerformance: Object.assign(tailorPerformance, tailorPerformance),
customers: Object.assign(customers, customers),
inventory: Object.assign(inventory, inventory),
export: Object.assign(exportMethod, exportMethod),
}

export default reports