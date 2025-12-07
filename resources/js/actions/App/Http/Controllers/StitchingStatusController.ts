import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\StitchingStatusController::index
 * @see app/Http/Controllers/StitchingStatusController.php:20
 * @route '/stitching-statuses'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/stitching-statuses',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\StitchingStatusController::index
 * @see app/Http/Controllers/StitchingStatusController.php:20
 * @route '/stitching-statuses'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\StitchingStatusController::index
 * @see app/Http/Controllers/StitchingStatusController.php:20
 * @route '/stitching-statuses'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\StitchingStatusController::index
 * @see app/Http/Controllers/StitchingStatusController.php:20
 * @route '/stitching-statuses'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\StitchingStatusController::index
 * @see app/Http/Controllers/StitchingStatusController.php:20
 * @route '/stitching-statuses'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\StitchingStatusController::index
 * @see app/Http/Controllers/StitchingStatusController.php:20
 * @route '/stitching-statuses'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\StitchingStatusController::index
 * @see app/Http/Controllers/StitchingStatusController.php:20
 * @route '/stitching-statuses'
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
* @see \App\Http\Controllers\StitchingStatusController::store
 * @see app/Http/Controllers/StitchingStatusController.php:29
 * @route '/stitching-statuses'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/stitching-statuses',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\StitchingStatusController::store
 * @see app/Http/Controllers/StitchingStatusController.php:29
 * @route '/stitching-statuses'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\StitchingStatusController::store
 * @see app/Http/Controllers/StitchingStatusController.php:29
 * @route '/stitching-statuses'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\StitchingStatusController::store
 * @see app/Http/Controllers/StitchingStatusController.php:29
 * @route '/stitching-statuses'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\StitchingStatusController::store
 * @see app/Http/Controllers/StitchingStatusController.php:29
 * @route '/stitching-statuses'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\StitchingStatusController::update
 * @see app/Http/Controllers/StitchingStatusController.php:43
 * @route '/stitching-statuses/{stitchingStatus}'
 */
export const update = (args: { stitchingStatus: number | { id: number } } | [stitchingStatus: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/stitching-statuses/{stitchingStatus}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\StitchingStatusController::update
 * @see app/Http/Controllers/StitchingStatusController.php:43
 * @route '/stitching-statuses/{stitchingStatus}'
 */
update.url = (args: { stitchingStatus: number | { id: number } } | [stitchingStatus: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { stitchingStatus: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { stitchingStatus: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    stitchingStatus: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        stitchingStatus: typeof args.stitchingStatus === 'object'
                ? args.stitchingStatus.id
                : args.stitchingStatus,
                }

    return update.definition.url
            .replace('{stitchingStatus}', parsedArgs.stitchingStatus.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\StitchingStatusController::update
 * @see app/Http/Controllers/StitchingStatusController.php:43
 * @route '/stitching-statuses/{stitchingStatus}'
 */
update.put = (args: { stitchingStatus: number | { id: number } } | [stitchingStatus: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\StitchingStatusController::update
 * @see app/Http/Controllers/StitchingStatusController.php:43
 * @route '/stitching-statuses/{stitchingStatus}'
 */
    const updateForm = (args: { stitchingStatus: number | { id: number } } | [stitchingStatus: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\StitchingStatusController::update
 * @see app/Http/Controllers/StitchingStatusController.php:43
 * @route '/stitching-statuses/{stitchingStatus}'
 */
        updateForm.put = (args: { stitchingStatus: number | { id: number } } | [stitchingStatus: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\StitchingStatusController::reorder
 * @see app/Http/Controllers/StitchingStatusController.php:56
 * @route '/stitching-statuses/reorder'
 */
export const reorder = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reorder.url(options),
    method: 'post',
})

reorder.definition = {
    methods: ["post"],
    url: '/stitching-statuses/reorder',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\StitchingStatusController::reorder
 * @see app/Http/Controllers/StitchingStatusController.php:56
 * @route '/stitching-statuses/reorder'
 */
reorder.url = (options?: RouteQueryOptions) => {
    return reorder.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\StitchingStatusController::reorder
 * @see app/Http/Controllers/StitchingStatusController.php:56
 * @route '/stitching-statuses/reorder'
 */
reorder.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reorder.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\StitchingStatusController::reorder
 * @see app/Http/Controllers/StitchingStatusController.php:56
 * @route '/stitching-statuses/reorder'
 */
    const reorderForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: reorder.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\StitchingStatusController::reorder
 * @see app/Http/Controllers/StitchingStatusController.php:56
 * @route '/stitching-statuses/reorder'
 */
        reorderForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: reorder.url(options),
            method: 'post',
        })
    
    reorder.form = reorderForm
/**
* @see \App\Http\Controllers\StitchingStatusController::destroy
 * @see app/Http/Controllers/StitchingStatusController.php:71
 * @route '/stitching-statuses/{stitchingStatus}'
 */
export const destroy = (args: { stitchingStatus: number | { id: number } } | [stitchingStatus: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/stitching-statuses/{stitchingStatus}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\StitchingStatusController::destroy
 * @see app/Http/Controllers/StitchingStatusController.php:71
 * @route '/stitching-statuses/{stitchingStatus}'
 */
destroy.url = (args: { stitchingStatus: number | { id: number } } | [stitchingStatus: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { stitchingStatus: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { stitchingStatus: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    stitchingStatus: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        stitchingStatus: typeof args.stitchingStatus === 'object'
                ? args.stitchingStatus.id
                : args.stitchingStatus,
                }

    return destroy.definition.url
            .replace('{stitchingStatus}', parsedArgs.stitchingStatus.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\StitchingStatusController::destroy
 * @see app/Http/Controllers/StitchingStatusController.php:71
 * @route '/stitching-statuses/{stitchingStatus}'
 */
destroy.delete = (args: { stitchingStatus: number | { id: number } } | [stitchingStatus: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\StitchingStatusController::destroy
 * @see app/Http/Controllers/StitchingStatusController.php:71
 * @route '/stitching-statuses/{stitchingStatus}'
 */
    const destroyForm = (args: { stitchingStatus: number | { id: number } } | [stitchingStatus: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\StitchingStatusController::destroy
 * @see app/Http/Controllers/StitchingStatusController.php:71
 * @route '/stitching-statuses/{stitchingStatus}'
 */
        destroyForm.delete = (args: { stitchingStatus: number | { id: number } } | [stitchingStatus: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const StitchingStatusController = { index, store, update, reorder, destroy }

export default StitchingStatusController