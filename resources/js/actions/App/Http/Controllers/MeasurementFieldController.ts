import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\MeasurementFieldController::index
 * @see app/Http/Controllers/MeasurementFieldController.php:16
 * @route '/api/measurement-fields'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/measurement-fields',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MeasurementFieldController::index
 * @see app/Http/Controllers/MeasurementFieldController.php:16
 * @route '/api/measurement-fields'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementFieldController::index
 * @see app/Http/Controllers/MeasurementFieldController.php:16
 * @route '/api/measurement-fields'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MeasurementFieldController::index
 * @see app/Http/Controllers/MeasurementFieldController.php:16
 * @route '/api/measurement-fields'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MeasurementFieldController::index
 * @see app/Http/Controllers/MeasurementFieldController.php:16
 * @route '/api/measurement-fields'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MeasurementFieldController::index
 * @see app/Http/Controllers/MeasurementFieldController.php:16
 * @route '/api/measurement-fields'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MeasurementFieldController::index
 * @see app/Http/Controllers/MeasurementFieldController.php:16
 * @route '/api/measurement-fields'
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
* @see \App\Http\Controllers\MeasurementFieldController::store
 * @see app/Http/Controllers/MeasurementFieldController.php:27
 * @route '/api/measurement-fields'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/measurement-fields',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MeasurementFieldController::store
 * @see app/Http/Controllers/MeasurementFieldController.php:27
 * @route '/api/measurement-fields'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementFieldController::store
 * @see app/Http/Controllers/MeasurementFieldController.php:27
 * @route '/api/measurement-fields'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\MeasurementFieldController::store
 * @see app/Http/Controllers/MeasurementFieldController.php:27
 * @route '/api/measurement-fields'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MeasurementFieldController::store
 * @see app/Http/Controllers/MeasurementFieldController.php:27
 * @route '/api/measurement-fields'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\MeasurementFieldController::show
 * @see app/Http/Controllers/MeasurementFieldController.php:41
 * @route '/api/measurement-fields/{measurement_field}'
 */
export const show = (args: { measurement_field: string | number } | [measurement_field: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/measurement-fields/{measurement_field}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MeasurementFieldController::show
 * @see app/Http/Controllers/MeasurementFieldController.php:41
 * @route '/api/measurement-fields/{measurement_field}'
 */
show.url = (args: { measurement_field: string | number } | [measurement_field: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { measurement_field: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    measurement_field: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        measurement_field: args.measurement_field,
                }

    return show.definition.url
            .replace('{measurement_field}', parsedArgs.measurement_field.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementFieldController::show
 * @see app/Http/Controllers/MeasurementFieldController.php:41
 * @route '/api/measurement-fields/{measurement_field}'
 */
show.get = (args: { measurement_field: string | number } | [measurement_field: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MeasurementFieldController::show
 * @see app/Http/Controllers/MeasurementFieldController.php:41
 * @route '/api/measurement-fields/{measurement_field}'
 */
show.head = (args: { measurement_field: string | number } | [measurement_field: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MeasurementFieldController::show
 * @see app/Http/Controllers/MeasurementFieldController.php:41
 * @route '/api/measurement-fields/{measurement_field}'
 */
    const showForm = (args: { measurement_field: string | number } | [measurement_field: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MeasurementFieldController::show
 * @see app/Http/Controllers/MeasurementFieldController.php:41
 * @route '/api/measurement-fields/{measurement_field}'
 */
        showForm.get = (args: { measurement_field: string | number } | [measurement_field: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MeasurementFieldController::show
 * @see app/Http/Controllers/MeasurementFieldController.php:41
 * @route '/api/measurement-fields/{measurement_field}'
 */
        showForm.head = (args: { measurement_field: string | number } | [measurement_field: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\MeasurementFieldController::update
 * @see app/Http/Controllers/MeasurementFieldController.php:46
 * @route '/api/measurement-fields/{measurement_field}'
 */
export const update = (args: { measurement_field: string | number } | [measurement_field: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/measurement-fields/{measurement_field}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\MeasurementFieldController::update
 * @see app/Http/Controllers/MeasurementFieldController.php:46
 * @route '/api/measurement-fields/{measurement_field}'
 */
update.url = (args: { measurement_field: string | number } | [measurement_field: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { measurement_field: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    measurement_field: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        measurement_field: args.measurement_field,
                }

    return update.definition.url
            .replace('{measurement_field}', parsedArgs.measurement_field.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementFieldController::update
 * @see app/Http/Controllers/MeasurementFieldController.php:46
 * @route '/api/measurement-fields/{measurement_field}'
 */
update.put = (args: { measurement_field: string | number } | [measurement_field: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\MeasurementFieldController::update
 * @see app/Http/Controllers/MeasurementFieldController.php:46
 * @route '/api/measurement-fields/{measurement_field}'
 */
update.patch = (args: { measurement_field: string | number } | [measurement_field: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\MeasurementFieldController::update
 * @see app/Http/Controllers/MeasurementFieldController.php:46
 * @route '/api/measurement-fields/{measurement_field}'
 */
    const updateForm = (args: { measurement_field: string | number } | [measurement_field: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MeasurementFieldController::update
 * @see app/Http/Controllers/MeasurementFieldController.php:46
 * @route '/api/measurement-fields/{measurement_field}'
 */
        updateForm.put = (args: { measurement_field: string | number } | [measurement_field: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\MeasurementFieldController::update
 * @see app/Http/Controllers/MeasurementFieldController.php:46
 * @route '/api/measurement-fields/{measurement_field}'
 */
        updateForm.patch = (args: { measurement_field: string | number } | [measurement_field: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\MeasurementFieldController::destroy
 * @see app/Http/Controllers/MeasurementFieldController.php:61
 * @route '/api/measurement-fields/{measurement_field}'
 */
export const destroy = (args: { measurement_field: string | number } | [measurement_field: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/measurement-fields/{measurement_field}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\MeasurementFieldController::destroy
 * @see app/Http/Controllers/MeasurementFieldController.php:61
 * @route '/api/measurement-fields/{measurement_field}'
 */
destroy.url = (args: { measurement_field: string | number } | [measurement_field: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { measurement_field: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    measurement_field: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        measurement_field: args.measurement_field,
                }

    return destroy.definition.url
            .replace('{measurement_field}', parsedArgs.measurement_field.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementFieldController::destroy
 * @see app/Http/Controllers/MeasurementFieldController.php:61
 * @route '/api/measurement-fields/{measurement_field}'
 */
destroy.delete = (args: { measurement_field: string | number } | [measurement_field: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\MeasurementFieldController::destroy
 * @see app/Http/Controllers/MeasurementFieldController.php:61
 * @route '/api/measurement-fields/{measurement_field}'
 */
    const destroyForm = (args: { measurement_field: string | number } | [measurement_field: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MeasurementFieldController::destroy
 * @see app/Http/Controllers/MeasurementFieldController.php:61
 * @route '/api/measurement-fields/{measurement_field}'
 */
        destroyForm.delete = (args: { measurement_field: string | number } | [measurement_field: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const MeasurementFieldController = { index, store, show, update, destroy }

export default MeasurementFieldController