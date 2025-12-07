import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\MeasurementCategoryController::index
 * @see app/Http/Controllers/MeasurementCategoryController.php:16
 * @route '/api/measurement-categories'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/measurement-categories',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MeasurementCategoryController::index
 * @see app/Http/Controllers/MeasurementCategoryController.php:16
 * @route '/api/measurement-categories'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementCategoryController::index
 * @see app/Http/Controllers/MeasurementCategoryController.php:16
 * @route '/api/measurement-categories'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MeasurementCategoryController::index
 * @see app/Http/Controllers/MeasurementCategoryController.php:16
 * @route '/api/measurement-categories'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MeasurementCategoryController::index
 * @see app/Http/Controllers/MeasurementCategoryController.php:16
 * @route '/api/measurement-categories'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MeasurementCategoryController::index
 * @see app/Http/Controllers/MeasurementCategoryController.php:16
 * @route '/api/measurement-categories'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MeasurementCategoryController::index
 * @see app/Http/Controllers/MeasurementCategoryController.php:16
 * @route '/api/measurement-categories'
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
* @see \App\Http\Controllers\MeasurementCategoryController::store
 * @see app/Http/Controllers/MeasurementCategoryController.php:21
 * @route '/api/measurement-categories'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/measurement-categories',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MeasurementCategoryController::store
 * @see app/Http/Controllers/MeasurementCategoryController.php:21
 * @route '/api/measurement-categories'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementCategoryController::store
 * @see app/Http/Controllers/MeasurementCategoryController.php:21
 * @route '/api/measurement-categories'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\MeasurementCategoryController::store
 * @see app/Http/Controllers/MeasurementCategoryController.php:21
 * @route '/api/measurement-categories'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MeasurementCategoryController::store
 * @see app/Http/Controllers/MeasurementCategoryController.php:21
 * @route '/api/measurement-categories'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\MeasurementCategoryController::show
 * @see app/Http/Controllers/MeasurementCategoryController.php:34
 * @route '/api/measurement-categories/{measurement_category}'
 */
export const show = (args: { measurement_category: string | number } | [measurement_category: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/measurement-categories/{measurement_category}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MeasurementCategoryController::show
 * @see app/Http/Controllers/MeasurementCategoryController.php:34
 * @route '/api/measurement-categories/{measurement_category}'
 */
show.url = (args: { measurement_category: string | number } | [measurement_category: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { measurement_category: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    measurement_category: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        measurement_category: args.measurement_category,
                }

    return show.definition.url
            .replace('{measurement_category}', parsedArgs.measurement_category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementCategoryController::show
 * @see app/Http/Controllers/MeasurementCategoryController.php:34
 * @route '/api/measurement-categories/{measurement_category}'
 */
show.get = (args: { measurement_category: string | number } | [measurement_category: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MeasurementCategoryController::show
 * @see app/Http/Controllers/MeasurementCategoryController.php:34
 * @route '/api/measurement-categories/{measurement_category}'
 */
show.head = (args: { measurement_category: string | number } | [measurement_category: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MeasurementCategoryController::show
 * @see app/Http/Controllers/MeasurementCategoryController.php:34
 * @route '/api/measurement-categories/{measurement_category}'
 */
    const showForm = (args: { measurement_category: string | number } | [measurement_category: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MeasurementCategoryController::show
 * @see app/Http/Controllers/MeasurementCategoryController.php:34
 * @route '/api/measurement-categories/{measurement_category}'
 */
        showForm.get = (args: { measurement_category: string | number } | [measurement_category: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MeasurementCategoryController::show
 * @see app/Http/Controllers/MeasurementCategoryController.php:34
 * @route '/api/measurement-categories/{measurement_category}'
 */
        showForm.head = (args: { measurement_category: string | number } | [measurement_category: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\MeasurementCategoryController::update
 * @see app/Http/Controllers/MeasurementCategoryController.php:39
 * @route '/api/measurement-categories/{measurement_category}'
 */
export const update = (args: { measurement_category: string | number } | [measurement_category: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/measurement-categories/{measurement_category}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\MeasurementCategoryController::update
 * @see app/Http/Controllers/MeasurementCategoryController.php:39
 * @route '/api/measurement-categories/{measurement_category}'
 */
update.url = (args: { measurement_category: string | number } | [measurement_category: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { measurement_category: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    measurement_category: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        measurement_category: args.measurement_category,
                }

    return update.definition.url
            .replace('{measurement_category}', parsedArgs.measurement_category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementCategoryController::update
 * @see app/Http/Controllers/MeasurementCategoryController.php:39
 * @route '/api/measurement-categories/{measurement_category}'
 */
update.put = (args: { measurement_category: string | number } | [measurement_category: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\MeasurementCategoryController::update
 * @see app/Http/Controllers/MeasurementCategoryController.php:39
 * @route '/api/measurement-categories/{measurement_category}'
 */
update.patch = (args: { measurement_category: string | number } | [measurement_category: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\MeasurementCategoryController::update
 * @see app/Http/Controllers/MeasurementCategoryController.php:39
 * @route '/api/measurement-categories/{measurement_category}'
 */
    const updateForm = (args: { measurement_category: string | number } | [measurement_category: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MeasurementCategoryController::update
 * @see app/Http/Controllers/MeasurementCategoryController.php:39
 * @route '/api/measurement-categories/{measurement_category}'
 */
        updateForm.put = (args: { measurement_category: string | number } | [measurement_category: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\MeasurementCategoryController::update
 * @see app/Http/Controllers/MeasurementCategoryController.php:39
 * @route '/api/measurement-categories/{measurement_category}'
 */
        updateForm.patch = (args: { measurement_category: string | number } | [measurement_category: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\MeasurementCategoryController::destroy
 * @see app/Http/Controllers/MeasurementCategoryController.php:53
 * @route '/api/measurement-categories/{measurement_category}'
 */
export const destroy = (args: { measurement_category: string | number } | [measurement_category: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/measurement-categories/{measurement_category}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\MeasurementCategoryController::destroy
 * @see app/Http/Controllers/MeasurementCategoryController.php:53
 * @route '/api/measurement-categories/{measurement_category}'
 */
destroy.url = (args: { measurement_category: string | number } | [measurement_category: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { measurement_category: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    measurement_category: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        measurement_category: args.measurement_category,
                }

    return destroy.definition.url
            .replace('{measurement_category}', parsedArgs.measurement_category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementCategoryController::destroy
 * @see app/Http/Controllers/MeasurementCategoryController.php:53
 * @route '/api/measurement-categories/{measurement_category}'
 */
destroy.delete = (args: { measurement_category: string | number } | [measurement_category: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\MeasurementCategoryController::destroy
 * @see app/Http/Controllers/MeasurementCategoryController.php:53
 * @route '/api/measurement-categories/{measurement_category}'
 */
    const destroyForm = (args: { measurement_category: string | number } | [measurement_category: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MeasurementCategoryController::destroy
 * @see app/Http/Controllers/MeasurementCategoryController.php:53
 * @route '/api/measurement-categories/{measurement_category}'
 */
        destroyForm.delete = (args: { measurement_category: string | number } | [measurement_category: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const MeasurementCategoryController = { index, store, show, update, destroy }

export default MeasurementCategoryController