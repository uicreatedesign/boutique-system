import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
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
* @see \App\Http\Controllers\ReportController::customerReport
 * @see app/Http/Controllers/ReportController.php:101
 * @route '/reports/customers'
 */
export const customerReport = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: customerReport.url(options),
    method: 'get',
})

customerReport.definition = {
    methods: ["get","head"],
    url: '/reports/customers',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ReportController::customerReport
 * @see app/Http/Controllers/ReportController.php:101
 * @route '/reports/customers'
 */
customerReport.url = (options?: RouteQueryOptions) => {
    return customerReport.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ReportController::customerReport
 * @see app/Http/Controllers/ReportController.php:101
 * @route '/reports/customers'
 */
customerReport.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: customerReport.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ReportController::customerReport
 * @see app/Http/Controllers/ReportController.php:101
 * @route '/reports/customers'
 */
customerReport.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: customerReport.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ReportController::customerReport
 * @see app/Http/Controllers/ReportController.php:101
 * @route '/reports/customers'
 */
    const customerReportForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: customerReport.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ReportController::customerReport
 * @see app/Http/Controllers/ReportController.php:101
 * @route '/reports/customers'
 */
        customerReportForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: customerReport.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ReportController::customerReport
 * @see app/Http/Controllers/ReportController.php:101
 * @route '/reports/customers'
 */
        customerReportForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: customerReport.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    customerReport.form = customerReportForm
/**
* @see \App\Http\Controllers\ReportController::inventoryReport
 * @see app/Http/Controllers/ReportController.php:139
 * @route '/reports/inventory'
 */
export const inventoryReport = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: inventoryReport.url(options),
    method: 'get',
})

inventoryReport.definition = {
    methods: ["get","head"],
    url: '/reports/inventory',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ReportController::inventoryReport
 * @see app/Http/Controllers/ReportController.php:139
 * @route '/reports/inventory'
 */
inventoryReport.url = (options?: RouteQueryOptions) => {
    return inventoryReport.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ReportController::inventoryReport
 * @see app/Http/Controllers/ReportController.php:139
 * @route '/reports/inventory'
 */
inventoryReport.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: inventoryReport.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ReportController::inventoryReport
 * @see app/Http/Controllers/ReportController.php:139
 * @route '/reports/inventory'
 */
inventoryReport.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: inventoryReport.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ReportController::inventoryReport
 * @see app/Http/Controllers/ReportController.php:139
 * @route '/reports/inventory'
 */
    const inventoryReportForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: inventoryReport.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ReportController::inventoryReport
 * @see app/Http/Controllers/ReportController.php:139
 * @route '/reports/inventory'
 */
        inventoryReportForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: inventoryReport.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ReportController::inventoryReport
 * @see app/Http/Controllers/ReportController.php:139
 * @route '/reports/inventory'
 */
        inventoryReportForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: inventoryReport.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    inventoryReport.form = inventoryReportForm
/**
* @see \App\Http\Controllers\ReportController::exportSales
 * @see app/Http/Controllers/ReportController.php:173
 * @route '/reports/export/sales'
 */
export const exportSales = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportSales.url(options),
    method: 'get',
})

exportSales.definition = {
    methods: ["get","head"],
    url: '/reports/export/sales',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ReportController::exportSales
 * @see app/Http/Controllers/ReportController.php:173
 * @route '/reports/export/sales'
 */
exportSales.url = (options?: RouteQueryOptions) => {
    return exportSales.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ReportController::exportSales
 * @see app/Http/Controllers/ReportController.php:173
 * @route '/reports/export/sales'
 */
exportSales.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportSales.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ReportController::exportSales
 * @see app/Http/Controllers/ReportController.php:173
 * @route '/reports/export/sales'
 */
exportSales.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: exportSales.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ReportController::exportSales
 * @see app/Http/Controllers/ReportController.php:173
 * @route '/reports/export/sales'
 */
    const exportSalesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: exportSales.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ReportController::exportSales
 * @see app/Http/Controllers/ReportController.php:173
 * @route '/reports/export/sales'
 */
        exportSalesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: exportSales.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ReportController::exportSales
 * @see app/Http/Controllers/ReportController.php:173
 * @route '/reports/export/sales'
 */
        exportSalesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: exportSales.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    exportSales.form = exportSalesForm
const ReportController = { index, sales, tailorPerformance, customerReport, inventoryReport, exportSales }

export default ReportController