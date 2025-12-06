import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\TailorController::index
 * @see app/Http/Controllers/TailorController.php:18
 * @route '/api/tailors'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/tailors',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TailorController::index
 * @see app/Http/Controllers/TailorController.php:18
 * @route '/api/tailors'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TailorController::index
 * @see app/Http/Controllers/TailorController.php:18
 * @route '/api/tailors'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\TailorController::index
 * @see app/Http/Controllers/TailorController.php:18
 * @route '/api/tailors'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\TailorController::index
 * @see app/Http/Controllers/TailorController.php:18
 * @route '/api/tailors'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\TailorController::index
 * @see app/Http/Controllers/TailorController.php:18
 * @route '/api/tailors'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\TailorController::index
 * @see app/Http/Controllers/TailorController.php:18
 * @route '/api/tailors'
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
* @see \App\Http\Controllers\TailorController::store
 * @see app/Http/Controllers/TailorController.php:37
 * @route '/api/tailors'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/tailors',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\TailorController::store
 * @see app/Http/Controllers/TailorController.php:37
 * @route '/api/tailors'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TailorController::store
 * @see app/Http/Controllers/TailorController.php:37
 * @route '/api/tailors'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\TailorController::store
 * @see app/Http/Controllers/TailorController.php:37
 * @route '/api/tailors'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\TailorController::store
 * @see app/Http/Controllers/TailorController.php:37
 * @route '/api/tailors'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\TailorController::show
 * @see app/Http/Controllers/TailorController.php:54
 * @route '/api/tailors/{tailor}'
 */
export const show = (args: { tailor: number | { id: number } } | [tailor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/tailors/{tailor}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TailorController::show
 * @see app/Http/Controllers/TailorController.php:54
 * @route '/api/tailors/{tailor}'
 */
show.url = (args: { tailor: number | { id: number } } | [tailor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { tailor: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { tailor: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    tailor: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        tailor: typeof args.tailor === 'object'
                ? args.tailor.id
                : args.tailor,
                }

    return show.definition.url
            .replace('{tailor}', parsedArgs.tailor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TailorController::show
 * @see app/Http/Controllers/TailorController.php:54
 * @route '/api/tailors/{tailor}'
 */
show.get = (args: { tailor: number | { id: number } } | [tailor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\TailorController::show
 * @see app/Http/Controllers/TailorController.php:54
 * @route '/api/tailors/{tailor}'
 */
show.head = (args: { tailor: number | { id: number } } | [tailor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\TailorController::show
 * @see app/Http/Controllers/TailorController.php:54
 * @route '/api/tailors/{tailor}'
 */
    const showForm = (args: { tailor: number | { id: number } } | [tailor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\TailorController::show
 * @see app/Http/Controllers/TailorController.php:54
 * @route '/api/tailors/{tailor}'
 */
        showForm.get = (args: { tailor: number | { id: number } } | [tailor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\TailorController::show
 * @see app/Http/Controllers/TailorController.php:54
 * @route '/api/tailors/{tailor}'
 */
        showForm.head = (args: { tailor: number | { id: number } } | [tailor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\TailorController::update
 * @see app/Http/Controllers/TailorController.php:59
 * @route '/api/tailors/{tailor}'
 */
export const update = (args: { tailor: number | { id: number } } | [tailor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/tailors/{tailor}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\TailorController::update
 * @see app/Http/Controllers/TailorController.php:59
 * @route '/api/tailors/{tailor}'
 */
update.url = (args: { tailor: number | { id: number } } | [tailor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { tailor: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { tailor: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    tailor: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        tailor: typeof args.tailor === 'object'
                ? args.tailor.id
                : args.tailor,
                }

    return update.definition.url
            .replace('{tailor}', parsedArgs.tailor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TailorController::update
 * @see app/Http/Controllers/TailorController.php:59
 * @route '/api/tailors/{tailor}'
 */
update.put = (args: { tailor: number | { id: number } } | [tailor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\TailorController::update
 * @see app/Http/Controllers/TailorController.php:59
 * @route '/api/tailors/{tailor}'
 */
update.patch = (args: { tailor: number | { id: number } } | [tailor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\TailorController::update
 * @see app/Http/Controllers/TailorController.php:59
 * @route '/api/tailors/{tailor}'
 */
    const updateForm = (args: { tailor: number | { id: number } } | [tailor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\TailorController::update
 * @see app/Http/Controllers/TailorController.php:59
 * @route '/api/tailors/{tailor}'
 */
        updateForm.put = (args: { tailor: number | { id: number } } | [tailor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\TailorController::update
 * @see app/Http/Controllers/TailorController.php:59
 * @route '/api/tailors/{tailor}'
 */
        updateForm.patch = (args: { tailor: number | { id: number } } | [tailor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\TailorController::destroy
 * @see app/Http/Controllers/TailorController.php:77
 * @route '/api/tailors/{tailor}'
 */
export const destroy = (args: { tailor: number | { id: number } } | [tailor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/tailors/{tailor}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\TailorController::destroy
 * @see app/Http/Controllers/TailorController.php:77
 * @route '/api/tailors/{tailor}'
 */
destroy.url = (args: { tailor: number | { id: number } } | [tailor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { tailor: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { tailor: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    tailor: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        tailor: typeof args.tailor === 'object'
                ? args.tailor.id
                : args.tailor,
                }

    return destroy.definition.url
            .replace('{tailor}', parsedArgs.tailor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TailorController::destroy
 * @see app/Http/Controllers/TailorController.php:77
 * @route '/api/tailors/{tailor}'
 */
destroy.delete = (args: { tailor: number | { id: number } } | [tailor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\TailorController::destroy
 * @see app/Http/Controllers/TailorController.php:77
 * @route '/api/tailors/{tailor}'
 */
    const destroyForm = (args: { tailor: number | { id: number } } | [tailor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\TailorController::destroy
 * @see app/Http/Controllers/TailorController.php:77
 * @route '/api/tailors/{tailor}'
 */
        destroyForm.delete = (args: { tailor: number | { id: number } } | [tailor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const TailorController = { index, store, show, update, destroy }

export default TailorController