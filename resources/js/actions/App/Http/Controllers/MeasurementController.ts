import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\MeasurementController::index
 * @see app/Http/Controllers/MeasurementController.php:19
 * @route '/measurements'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/measurements',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MeasurementController::index
 * @see app/Http/Controllers/MeasurementController.php:19
 * @route '/measurements'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementController::index
 * @see app/Http/Controllers/MeasurementController.php:19
 * @route '/measurements'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MeasurementController::index
 * @see app/Http/Controllers/MeasurementController.php:19
 * @route '/measurements'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MeasurementController::index
 * @see app/Http/Controllers/MeasurementController.php:19
 * @route '/measurements'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MeasurementController::index
 * @see app/Http/Controllers/MeasurementController.php:19
 * @route '/measurements'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MeasurementController::index
 * @see app/Http/Controllers/MeasurementController.php:19
 * @route '/measurements'
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
* @see \App\Http\Controllers\MeasurementController::create
 * @see app/Http/Controllers/MeasurementController.php:37
 * @route '/measurements/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/measurements/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MeasurementController::create
 * @see app/Http/Controllers/MeasurementController.php:37
 * @route '/measurements/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementController::create
 * @see app/Http/Controllers/MeasurementController.php:37
 * @route '/measurements/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MeasurementController::create
 * @see app/Http/Controllers/MeasurementController.php:37
 * @route '/measurements/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MeasurementController::create
 * @see app/Http/Controllers/MeasurementController.php:37
 * @route '/measurements/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MeasurementController::create
 * @see app/Http/Controllers/MeasurementController.php:37
 * @route '/measurements/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MeasurementController::create
 * @see app/Http/Controllers/MeasurementController.php:37
 * @route '/measurements/create'
 */
        createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    create.form = createForm
/**
* @see \App\Http\Controllers\MeasurementController::store
 * @see app/Http/Controllers/MeasurementController.php:50
 * @route '/measurements'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/measurements',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MeasurementController::store
 * @see app/Http/Controllers/MeasurementController.php:50
 * @route '/measurements'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementController::store
 * @see app/Http/Controllers/MeasurementController.php:50
 * @route '/measurements'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\MeasurementController::store
 * @see app/Http/Controllers/MeasurementController.php:50
 * @route '/measurements'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MeasurementController::store
 * @see app/Http/Controllers/MeasurementController.php:50
 * @route '/measurements'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\MeasurementController::show
 * @see app/Http/Controllers/MeasurementController.php:65
 * @route '/measurements/{measurement}'
 */
export const show = (args: { measurement: number | { id: number } } | [measurement: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/measurements/{measurement}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MeasurementController::show
 * @see app/Http/Controllers/MeasurementController.php:65
 * @route '/measurements/{measurement}'
 */
show.url = (args: { measurement: number | { id: number } } | [measurement: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { measurement: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { measurement: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    measurement: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        measurement: typeof args.measurement === 'object'
                ? args.measurement.id
                : args.measurement,
                }

    return show.definition.url
            .replace('{measurement}', parsedArgs.measurement.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementController::show
 * @see app/Http/Controllers/MeasurementController.php:65
 * @route '/measurements/{measurement}'
 */
show.get = (args: { measurement: number | { id: number } } | [measurement: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MeasurementController::show
 * @see app/Http/Controllers/MeasurementController.php:65
 * @route '/measurements/{measurement}'
 */
show.head = (args: { measurement: number | { id: number } } | [measurement: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MeasurementController::show
 * @see app/Http/Controllers/MeasurementController.php:65
 * @route '/measurements/{measurement}'
 */
    const showForm = (args: { measurement: number | { id: number } } | [measurement: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MeasurementController::show
 * @see app/Http/Controllers/MeasurementController.php:65
 * @route '/measurements/{measurement}'
 */
        showForm.get = (args: { measurement: number | { id: number } } | [measurement: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MeasurementController::show
 * @see app/Http/Controllers/MeasurementController.php:65
 * @route '/measurements/{measurement}'
 */
        showForm.head = (args: { measurement: number | { id: number } } | [measurement: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\MeasurementController::edit
 * @see app/Http/Controllers/MeasurementController.php:76
 * @route '/measurements/{measurement}/edit'
 */
export const edit = (args: { measurement: number | { id: number } } | [measurement: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/measurements/{measurement}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MeasurementController::edit
 * @see app/Http/Controllers/MeasurementController.php:76
 * @route '/measurements/{measurement}/edit'
 */
edit.url = (args: { measurement: number | { id: number } } | [measurement: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { measurement: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { measurement: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    measurement: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        measurement: typeof args.measurement === 'object'
                ? args.measurement.id
                : args.measurement,
                }

    return edit.definition.url
            .replace('{measurement}', parsedArgs.measurement.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementController::edit
 * @see app/Http/Controllers/MeasurementController.php:76
 * @route '/measurements/{measurement}/edit'
 */
edit.get = (args: { measurement: number | { id: number } } | [measurement: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MeasurementController::edit
 * @see app/Http/Controllers/MeasurementController.php:76
 * @route '/measurements/{measurement}/edit'
 */
edit.head = (args: { measurement: number | { id: number } } | [measurement: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MeasurementController::edit
 * @see app/Http/Controllers/MeasurementController.php:76
 * @route '/measurements/{measurement}/edit'
 */
    const editForm = (args: { measurement: number | { id: number } } | [measurement: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MeasurementController::edit
 * @see app/Http/Controllers/MeasurementController.php:76
 * @route '/measurements/{measurement}/edit'
 */
        editForm.get = (args: { measurement: number | { id: number } } | [measurement: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MeasurementController::edit
 * @see app/Http/Controllers/MeasurementController.php:76
 * @route '/measurements/{measurement}/edit'
 */
        editForm.head = (args: { measurement: number | { id: number } } | [measurement: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
/**
* @see \App\Http\Controllers\MeasurementController::update
 * @see app/Http/Controllers/MeasurementController.php:91
 * @route '/measurements/{measurement}'
 */
export const update = (args: { measurement: number | { id: number } } | [measurement: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/measurements/{measurement}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\MeasurementController::update
 * @see app/Http/Controllers/MeasurementController.php:91
 * @route '/measurements/{measurement}'
 */
update.url = (args: { measurement: number | { id: number } } | [measurement: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { measurement: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { measurement: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    measurement: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        measurement: typeof args.measurement === 'object'
                ? args.measurement.id
                : args.measurement,
                }

    return update.definition.url
            .replace('{measurement}', parsedArgs.measurement.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementController::update
 * @see app/Http/Controllers/MeasurementController.php:91
 * @route '/measurements/{measurement}'
 */
update.put = (args: { measurement: number | { id: number } } | [measurement: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\MeasurementController::update
 * @see app/Http/Controllers/MeasurementController.php:91
 * @route '/measurements/{measurement}'
 */
update.patch = (args: { measurement: number | { id: number } } | [measurement: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\MeasurementController::update
 * @see app/Http/Controllers/MeasurementController.php:91
 * @route '/measurements/{measurement}'
 */
    const updateForm = (args: { measurement: number | { id: number } } | [measurement: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MeasurementController::update
 * @see app/Http/Controllers/MeasurementController.php:91
 * @route '/measurements/{measurement}'
 */
        updateForm.put = (args: { measurement: number | { id: number } } | [measurement: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\MeasurementController::update
 * @see app/Http/Controllers/MeasurementController.php:91
 * @route '/measurements/{measurement}'
 */
        updateForm.patch = (args: { measurement: number | { id: number } } | [measurement: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\MeasurementController::destroy
 * @see app/Http/Controllers/MeasurementController.php:106
 * @route '/measurements/{measurement}'
 */
export const destroy = (args: { measurement: number | { id: number } } | [measurement: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/measurements/{measurement}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\MeasurementController::destroy
 * @see app/Http/Controllers/MeasurementController.php:106
 * @route '/measurements/{measurement}'
 */
destroy.url = (args: { measurement: number | { id: number } } | [measurement: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { measurement: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { measurement: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    measurement: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        measurement: typeof args.measurement === 'object'
                ? args.measurement.id
                : args.measurement,
                }

    return destroy.definition.url
            .replace('{measurement}', parsedArgs.measurement.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementController::destroy
 * @see app/Http/Controllers/MeasurementController.php:106
 * @route '/measurements/{measurement}'
 */
destroy.delete = (args: { measurement: number | { id: number } } | [measurement: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\MeasurementController::destroy
 * @see app/Http/Controllers/MeasurementController.php:106
 * @route '/measurements/{measurement}'
 */
    const destroyForm = (args: { measurement: number | { id: number } } | [measurement: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MeasurementController::destroy
 * @see app/Http/Controllers/MeasurementController.php:106
 * @route '/measurements/{measurement}'
 */
        destroyForm.delete = (args: { measurement: number | { id: number } } | [measurement: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const MeasurementController = { index, create, store, show, edit, update, destroy }

export default MeasurementController