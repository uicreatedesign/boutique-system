import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\RoleController::index
 * @see app/Http/Controllers/RoleController.php:20
 * @route '/api/roles'
 */
const index459ad684f8cf618c9698f0c209d3a3c9 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index459ad684f8cf618c9698f0c209d3a3c9.url(options),
    method: 'get',
})

index459ad684f8cf618c9698f0c209d3a3c9.definition = {
    methods: ["get","head"],
    url: '/api/roles',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\RoleController::index
 * @see app/Http/Controllers/RoleController.php:20
 * @route '/api/roles'
 */
index459ad684f8cf618c9698f0c209d3a3c9.url = (options?: RouteQueryOptions) => {
    return index459ad684f8cf618c9698f0c209d3a3c9.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\RoleController::index
 * @see app/Http/Controllers/RoleController.php:20
 * @route '/api/roles'
 */
index459ad684f8cf618c9698f0c209d3a3c9.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index459ad684f8cf618c9698f0c209d3a3c9.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\RoleController::index
 * @see app/Http/Controllers/RoleController.php:20
 * @route '/api/roles'
 */
index459ad684f8cf618c9698f0c209d3a3c9.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index459ad684f8cf618c9698f0c209d3a3c9.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\RoleController::index
 * @see app/Http/Controllers/RoleController.php:20
 * @route '/api/roles'
 */
    const index459ad684f8cf618c9698f0c209d3a3c9Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index459ad684f8cf618c9698f0c209d3a3c9.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\RoleController::index
 * @see app/Http/Controllers/RoleController.php:20
 * @route '/api/roles'
 */
        index459ad684f8cf618c9698f0c209d3a3c9Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index459ad684f8cf618c9698f0c209d3a3c9.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\RoleController::index
 * @see app/Http/Controllers/RoleController.php:20
 * @route '/api/roles'
 */
        index459ad684f8cf618c9698f0c209d3a3c9Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index459ad684f8cf618c9698f0c209d3a3c9.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index459ad684f8cf618c9698f0c209d3a3c9.form = index459ad684f8cf618c9698f0c209d3a3c9Form
    /**
* @see \App\Http\Controllers\RoleController::index
 * @see app/Http/Controllers/RoleController.php:20
 * @route '/roles'
 */
const indexbe1fddd12d9a311af0360a2f8bcfa1e2 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexbe1fddd12d9a311af0360a2f8bcfa1e2.url(options),
    method: 'get',
})

indexbe1fddd12d9a311af0360a2f8bcfa1e2.definition = {
    methods: ["get","head"],
    url: '/roles',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\RoleController::index
 * @see app/Http/Controllers/RoleController.php:20
 * @route '/roles'
 */
indexbe1fddd12d9a311af0360a2f8bcfa1e2.url = (options?: RouteQueryOptions) => {
    return indexbe1fddd12d9a311af0360a2f8bcfa1e2.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\RoleController::index
 * @see app/Http/Controllers/RoleController.php:20
 * @route '/roles'
 */
indexbe1fddd12d9a311af0360a2f8bcfa1e2.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexbe1fddd12d9a311af0360a2f8bcfa1e2.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\RoleController::index
 * @see app/Http/Controllers/RoleController.php:20
 * @route '/roles'
 */
indexbe1fddd12d9a311af0360a2f8bcfa1e2.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexbe1fddd12d9a311af0360a2f8bcfa1e2.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\RoleController::index
 * @see app/Http/Controllers/RoleController.php:20
 * @route '/roles'
 */
    const indexbe1fddd12d9a311af0360a2f8bcfa1e2Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: indexbe1fddd12d9a311af0360a2f8bcfa1e2.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\RoleController::index
 * @see app/Http/Controllers/RoleController.php:20
 * @route '/roles'
 */
        indexbe1fddd12d9a311af0360a2f8bcfa1e2Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexbe1fddd12d9a311af0360a2f8bcfa1e2.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\RoleController::index
 * @see app/Http/Controllers/RoleController.php:20
 * @route '/roles'
 */
        indexbe1fddd12d9a311af0360a2f8bcfa1e2Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexbe1fddd12d9a311af0360a2f8bcfa1e2.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    indexbe1fddd12d9a311af0360a2f8bcfa1e2.form = indexbe1fddd12d9a311af0360a2f8bcfa1e2Form

export const index = {
    '/api/roles': index459ad684f8cf618c9698f0c209d3a3c9,
    '/roles': indexbe1fddd12d9a311af0360a2f8bcfa1e2,
}

/**
* @see \App\Http\Controllers\RoleController::store
 * @see app/Http/Controllers/RoleController.php:33
 * @route '/api/roles'
 */
const store459ad684f8cf618c9698f0c209d3a3c9 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store459ad684f8cf618c9698f0c209d3a3c9.url(options),
    method: 'post',
})

store459ad684f8cf618c9698f0c209d3a3c9.definition = {
    methods: ["post"],
    url: '/api/roles',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\RoleController::store
 * @see app/Http/Controllers/RoleController.php:33
 * @route '/api/roles'
 */
store459ad684f8cf618c9698f0c209d3a3c9.url = (options?: RouteQueryOptions) => {
    return store459ad684f8cf618c9698f0c209d3a3c9.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\RoleController::store
 * @see app/Http/Controllers/RoleController.php:33
 * @route '/api/roles'
 */
store459ad684f8cf618c9698f0c209d3a3c9.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store459ad684f8cf618c9698f0c209d3a3c9.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\RoleController::store
 * @see app/Http/Controllers/RoleController.php:33
 * @route '/api/roles'
 */
    const store459ad684f8cf618c9698f0c209d3a3c9Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store459ad684f8cf618c9698f0c209d3a3c9.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\RoleController::store
 * @see app/Http/Controllers/RoleController.php:33
 * @route '/api/roles'
 */
        store459ad684f8cf618c9698f0c209d3a3c9Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store459ad684f8cf618c9698f0c209d3a3c9.url(options),
            method: 'post',
        })
    
    store459ad684f8cf618c9698f0c209d3a3c9.form = store459ad684f8cf618c9698f0c209d3a3c9Form
    /**
* @see \App\Http\Controllers\RoleController::store
 * @see app/Http/Controllers/RoleController.php:33
 * @route '/roles'
 */
const storebe1fddd12d9a311af0360a2f8bcfa1e2 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storebe1fddd12d9a311af0360a2f8bcfa1e2.url(options),
    method: 'post',
})

storebe1fddd12d9a311af0360a2f8bcfa1e2.definition = {
    methods: ["post"],
    url: '/roles',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\RoleController::store
 * @see app/Http/Controllers/RoleController.php:33
 * @route '/roles'
 */
storebe1fddd12d9a311af0360a2f8bcfa1e2.url = (options?: RouteQueryOptions) => {
    return storebe1fddd12d9a311af0360a2f8bcfa1e2.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\RoleController::store
 * @see app/Http/Controllers/RoleController.php:33
 * @route '/roles'
 */
storebe1fddd12d9a311af0360a2f8bcfa1e2.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storebe1fddd12d9a311af0360a2f8bcfa1e2.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\RoleController::store
 * @see app/Http/Controllers/RoleController.php:33
 * @route '/roles'
 */
    const storebe1fddd12d9a311af0360a2f8bcfa1e2Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: storebe1fddd12d9a311af0360a2f8bcfa1e2.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\RoleController::store
 * @see app/Http/Controllers/RoleController.php:33
 * @route '/roles'
 */
        storebe1fddd12d9a311af0360a2f8bcfa1e2Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: storebe1fddd12d9a311af0360a2f8bcfa1e2.url(options),
            method: 'post',
        })
    
    storebe1fddd12d9a311af0360a2f8bcfa1e2.form = storebe1fddd12d9a311af0360a2f8bcfa1e2Form

export const store = {
    '/api/roles': store459ad684f8cf618c9698f0c209d3a3c9,
    '/roles': storebe1fddd12d9a311af0360a2f8bcfa1e2,
}

/**
* @see \App\Http\Controllers\RoleController::show
 * @see app/Http/Controllers/RoleController.php:49
 * @route '/api/roles/{role}'
 */
const show41e19e86395ff8566bc2b55a7a706b34 = (args: { role: number | { id: number } } | [role: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show41e19e86395ff8566bc2b55a7a706b34.url(args, options),
    method: 'get',
})

show41e19e86395ff8566bc2b55a7a706b34.definition = {
    methods: ["get","head"],
    url: '/api/roles/{role}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\RoleController::show
 * @see app/Http/Controllers/RoleController.php:49
 * @route '/api/roles/{role}'
 */
show41e19e86395ff8566bc2b55a7a706b34.url = (args: { role: number | { id: number } } | [role: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { role: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { role: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    role: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        role: typeof args.role === 'object'
                ? args.role.id
                : args.role,
                }

    return show41e19e86395ff8566bc2b55a7a706b34.definition.url
            .replace('{role}', parsedArgs.role.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\RoleController::show
 * @see app/Http/Controllers/RoleController.php:49
 * @route '/api/roles/{role}'
 */
show41e19e86395ff8566bc2b55a7a706b34.get = (args: { role: number | { id: number } } | [role: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show41e19e86395ff8566bc2b55a7a706b34.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\RoleController::show
 * @see app/Http/Controllers/RoleController.php:49
 * @route '/api/roles/{role}'
 */
show41e19e86395ff8566bc2b55a7a706b34.head = (args: { role: number | { id: number } } | [role: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show41e19e86395ff8566bc2b55a7a706b34.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\RoleController::show
 * @see app/Http/Controllers/RoleController.php:49
 * @route '/api/roles/{role}'
 */
    const show41e19e86395ff8566bc2b55a7a706b34Form = (args: { role: number | { id: number } } | [role: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show41e19e86395ff8566bc2b55a7a706b34.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\RoleController::show
 * @see app/Http/Controllers/RoleController.php:49
 * @route '/api/roles/{role}'
 */
        show41e19e86395ff8566bc2b55a7a706b34Form.get = (args: { role: number | { id: number } } | [role: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show41e19e86395ff8566bc2b55a7a706b34.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\RoleController::show
 * @see app/Http/Controllers/RoleController.php:49
 * @route '/api/roles/{role}'
 */
        show41e19e86395ff8566bc2b55a7a706b34Form.head = (args: { role: number | { id: number } } | [role: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show41e19e86395ff8566bc2b55a7a706b34.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show41e19e86395ff8566bc2b55a7a706b34.form = show41e19e86395ff8566bc2b55a7a706b34Form
    /**
* @see \App\Http\Controllers\RoleController::show
 * @see app/Http/Controllers/RoleController.php:49
 * @route '/roles/{role}'
 */
const showb6804635474708cf82d31cc1bd14928b = (args: { role: number | { id: number } } | [role: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showb6804635474708cf82d31cc1bd14928b.url(args, options),
    method: 'get',
})

showb6804635474708cf82d31cc1bd14928b.definition = {
    methods: ["get","head"],
    url: '/roles/{role}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\RoleController::show
 * @see app/Http/Controllers/RoleController.php:49
 * @route '/roles/{role}'
 */
showb6804635474708cf82d31cc1bd14928b.url = (args: { role: number | { id: number } } | [role: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { role: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { role: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    role: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        role: typeof args.role === 'object'
                ? args.role.id
                : args.role,
                }

    return showb6804635474708cf82d31cc1bd14928b.definition.url
            .replace('{role}', parsedArgs.role.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\RoleController::show
 * @see app/Http/Controllers/RoleController.php:49
 * @route '/roles/{role}'
 */
showb6804635474708cf82d31cc1bd14928b.get = (args: { role: number | { id: number } } | [role: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showb6804635474708cf82d31cc1bd14928b.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\RoleController::show
 * @see app/Http/Controllers/RoleController.php:49
 * @route '/roles/{role}'
 */
showb6804635474708cf82d31cc1bd14928b.head = (args: { role: number | { id: number } } | [role: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showb6804635474708cf82d31cc1bd14928b.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\RoleController::show
 * @see app/Http/Controllers/RoleController.php:49
 * @route '/roles/{role}'
 */
    const showb6804635474708cf82d31cc1bd14928bForm = (args: { role: number | { id: number } } | [role: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: showb6804635474708cf82d31cc1bd14928b.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\RoleController::show
 * @see app/Http/Controllers/RoleController.php:49
 * @route '/roles/{role}'
 */
        showb6804635474708cf82d31cc1bd14928bForm.get = (args: { role: number | { id: number } } | [role: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showb6804635474708cf82d31cc1bd14928b.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\RoleController::show
 * @see app/Http/Controllers/RoleController.php:49
 * @route '/roles/{role}'
 */
        showb6804635474708cf82d31cc1bd14928bForm.head = (args: { role: number | { id: number } } | [role: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showb6804635474708cf82d31cc1bd14928b.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    showb6804635474708cf82d31cc1bd14928b.form = showb6804635474708cf82d31cc1bd14928bForm

export const show = {
    '/api/roles/{role}': show41e19e86395ff8566bc2b55a7a706b34,
    '/roles/{role}': showb6804635474708cf82d31cc1bd14928b,
}

/**
* @see \App\Http\Controllers\RoleController::update
 * @see app/Http/Controllers/RoleController.php:54
 * @route '/api/roles/{role}'
 */
const update41e19e86395ff8566bc2b55a7a706b34 = (args: { role: number | { id: number } } | [role: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update41e19e86395ff8566bc2b55a7a706b34.url(args, options),
    method: 'put',
})

update41e19e86395ff8566bc2b55a7a706b34.definition = {
    methods: ["put","patch"],
    url: '/api/roles/{role}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\RoleController::update
 * @see app/Http/Controllers/RoleController.php:54
 * @route '/api/roles/{role}'
 */
update41e19e86395ff8566bc2b55a7a706b34.url = (args: { role: number | { id: number } } | [role: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { role: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { role: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    role: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        role: typeof args.role === 'object'
                ? args.role.id
                : args.role,
                }

    return update41e19e86395ff8566bc2b55a7a706b34.definition.url
            .replace('{role}', parsedArgs.role.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\RoleController::update
 * @see app/Http/Controllers/RoleController.php:54
 * @route '/api/roles/{role}'
 */
update41e19e86395ff8566bc2b55a7a706b34.put = (args: { role: number | { id: number } } | [role: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update41e19e86395ff8566bc2b55a7a706b34.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\RoleController::update
 * @see app/Http/Controllers/RoleController.php:54
 * @route '/api/roles/{role}'
 */
update41e19e86395ff8566bc2b55a7a706b34.patch = (args: { role: number | { id: number } } | [role: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update41e19e86395ff8566bc2b55a7a706b34.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\RoleController::update
 * @see app/Http/Controllers/RoleController.php:54
 * @route '/api/roles/{role}'
 */
    const update41e19e86395ff8566bc2b55a7a706b34Form = (args: { role: number | { id: number } } | [role: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update41e19e86395ff8566bc2b55a7a706b34.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\RoleController::update
 * @see app/Http/Controllers/RoleController.php:54
 * @route '/api/roles/{role}'
 */
        update41e19e86395ff8566bc2b55a7a706b34Form.put = (args: { role: number | { id: number } } | [role: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update41e19e86395ff8566bc2b55a7a706b34.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\RoleController::update
 * @see app/Http/Controllers/RoleController.php:54
 * @route '/api/roles/{role}'
 */
        update41e19e86395ff8566bc2b55a7a706b34Form.patch = (args: { role: number | { id: number } } | [role: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update41e19e86395ff8566bc2b55a7a706b34.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update41e19e86395ff8566bc2b55a7a706b34.form = update41e19e86395ff8566bc2b55a7a706b34Form
    /**
* @see \App\Http\Controllers\RoleController::update
 * @see app/Http/Controllers/RoleController.php:54
 * @route '/roles/{role}'
 */
const updateb6804635474708cf82d31cc1bd14928b = (args: { role: number | { id: number } } | [role: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateb6804635474708cf82d31cc1bd14928b.url(args, options),
    method: 'put',
})

updateb6804635474708cf82d31cc1bd14928b.definition = {
    methods: ["put","patch"],
    url: '/roles/{role}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\RoleController::update
 * @see app/Http/Controllers/RoleController.php:54
 * @route '/roles/{role}'
 */
updateb6804635474708cf82d31cc1bd14928b.url = (args: { role: number | { id: number } } | [role: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { role: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { role: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    role: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        role: typeof args.role === 'object'
                ? args.role.id
                : args.role,
                }

    return updateb6804635474708cf82d31cc1bd14928b.definition.url
            .replace('{role}', parsedArgs.role.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\RoleController::update
 * @see app/Http/Controllers/RoleController.php:54
 * @route '/roles/{role}'
 */
updateb6804635474708cf82d31cc1bd14928b.put = (args: { role: number | { id: number } } | [role: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateb6804635474708cf82d31cc1bd14928b.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\RoleController::update
 * @see app/Http/Controllers/RoleController.php:54
 * @route '/roles/{role}'
 */
updateb6804635474708cf82d31cc1bd14928b.patch = (args: { role: number | { id: number } } | [role: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateb6804635474708cf82d31cc1bd14928b.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\RoleController::update
 * @see app/Http/Controllers/RoleController.php:54
 * @route '/roles/{role}'
 */
    const updateb6804635474708cf82d31cc1bd14928bForm = (args: { role: number | { id: number } } | [role: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: updateb6804635474708cf82d31cc1bd14928b.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\RoleController::update
 * @see app/Http/Controllers/RoleController.php:54
 * @route '/roles/{role}'
 */
        updateb6804635474708cf82d31cc1bd14928bForm.put = (args: { role: number | { id: number } } | [role: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updateb6804635474708cf82d31cc1bd14928b.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\RoleController::update
 * @see app/Http/Controllers/RoleController.php:54
 * @route '/roles/{role}'
 */
        updateb6804635474708cf82d31cc1bd14928bForm.patch = (args: { role: number | { id: number } } | [role: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updateb6804635474708cf82d31cc1bd14928b.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    updateb6804635474708cf82d31cc1bd14928b.form = updateb6804635474708cf82d31cc1bd14928bForm

export const update = {
    '/api/roles/{role}': update41e19e86395ff8566bc2b55a7a706b34,
    '/roles/{role}': updateb6804635474708cf82d31cc1bd14928b,
}

/**
* @see \App\Http\Controllers\RoleController::destroy
 * @see app/Http/Controllers/RoleController.php:70
 * @route '/api/roles/{role}'
 */
const destroy41e19e86395ff8566bc2b55a7a706b34 = (args: { role: number | { id: number } } | [role: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy41e19e86395ff8566bc2b55a7a706b34.url(args, options),
    method: 'delete',
})

destroy41e19e86395ff8566bc2b55a7a706b34.definition = {
    methods: ["delete"],
    url: '/api/roles/{role}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\RoleController::destroy
 * @see app/Http/Controllers/RoleController.php:70
 * @route '/api/roles/{role}'
 */
destroy41e19e86395ff8566bc2b55a7a706b34.url = (args: { role: number | { id: number } } | [role: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { role: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { role: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    role: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        role: typeof args.role === 'object'
                ? args.role.id
                : args.role,
                }

    return destroy41e19e86395ff8566bc2b55a7a706b34.definition.url
            .replace('{role}', parsedArgs.role.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\RoleController::destroy
 * @see app/Http/Controllers/RoleController.php:70
 * @route '/api/roles/{role}'
 */
destroy41e19e86395ff8566bc2b55a7a706b34.delete = (args: { role: number | { id: number } } | [role: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy41e19e86395ff8566bc2b55a7a706b34.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\RoleController::destroy
 * @see app/Http/Controllers/RoleController.php:70
 * @route '/api/roles/{role}'
 */
    const destroy41e19e86395ff8566bc2b55a7a706b34Form = (args: { role: number | { id: number } } | [role: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy41e19e86395ff8566bc2b55a7a706b34.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\RoleController::destroy
 * @see app/Http/Controllers/RoleController.php:70
 * @route '/api/roles/{role}'
 */
        destroy41e19e86395ff8566bc2b55a7a706b34Form.delete = (args: { role: number | { id: number } } | [role: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy41e19e86395ff8566bc2b55a7a706b34.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy41e19e86395ff8566bc2b55a7a706b34.form = destroy41e19e86395ff8566bc2b55a7a706b34Form
    /**
* @see \App\Http\Controllers\RoleController::destroy
 * @see app/Http/Controllers/RoleController.php:70
 * @route '/roles/{role}'
 */
const destroyb6804635474708cf82d31cc1bd14928b = (args: { role: number | { id: number } } | [role: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyb6804635474708cf82d31cc1bd14928b.url(args, options),
    method: 'delete',
})

destroyb6804635474708cf82d31cc1bd14928b.definition = {
    methods: ["delete"],
    url: '/roles/{role}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\RoleController::destroy
 * @see app/Http/Controllers/RoleController.php:70
 * @route '/roles/{role}'
 */
destroyb6804635474708cf82d31cc1bd14928b.url = (args: { role: number | { id: number } } | [role: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { role: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { role: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    role: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        role: typeof args.role === 'object'
                ? args.role.id
                : args.role,
                }

    return destroyb6804635474708cf82d31cc1bd14928b.definition.url
            .replace('{role}', parsedArgs.role.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\RoleController::destroy
 * @see app/Http/Controllers/RoleController.php:70
 * @route '/roles/{role}'
 */
destroyb6804635474708cf82d31cc1bd14928b.delete = (args: { role: number | { id: number } } | [role: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyb6804635474708cf82d31cc1bd14928b.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\RoleController::destroy
 * @see app/Http/Controllers/RoleController.php:70
 * @route '/roles/{role}'
 */
    const destroyb6804635474708cf82d31cc1bd14928bForm = (args: { role: number | { id: number } } | [role: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroyb6804635474708cf82d31cc1bd14928b.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\RoleController::destroy
 * @see app/Http/Controllers/RoleController.php:70
 * @route '/roles/{role}'
 */
        destroyb6804635474708cf82d31cc1bd14928bForm.delete = (args: { role: number | { id: number } } | [role: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroyb6804635474708cf82d31cc1bd14928b.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroyb6804635474708cf82d31cc1bd14928b.form = destroyb6804635474708cf82d31cc1bd14928bForm

export const destroy = {
    '/api/roles/{role}': destroy41e19e86395ff8566bc2b55a7a706b34,
    '/roles/{role}': destroyb6804635474708cf82d31cc1bd14928b,
}

/**
* @see \App\Http\Controllers\RoleController::create
 * @see app/Http/Controllers/RoleController.php:0
 * @route '/roles/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/roles/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\RoleController::create
 * @see app/Http/Controllers/RoleController.php:0
 * @route '/roles/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\RoleController::create
 * @see app/Http/Controllers/RoleController.php:0
 * @route '/roles/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\RoleController::create
 * @see app/Http/Controllers/RoleController.php:0
 * @route '/roles/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\RoleController::create
 * @see app/Http/Controllers/RoleController.php:0
 * @route '/roles/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\RoleController::create
 * @see app/Http/Controllers/RoleController.php:0
 * @route '/roles/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\RoleController::create
 * @see app/Http/Controllers/RoleController.php:0
 * @route '/roles/create'
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
* @see \App\Http\Controllers\RoleController::edit
 * @see app/Http/Controllers/RoleController.php:0
 * @route '/roles/{role}/edit'
 */
export const edit = (args: { role: string | number } | [role: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/roles/{role}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\RoleController::edit
 * @see app/Http/Controllers/RoleController.php:0
 * @route '/roles/{role}/edit'
 */
edit.url = (args: { role: string | number } | [role: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { role: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    role: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        role: args.role,
                }

    return edit.definition.url
            .replace('{role}', parsedArgs.role.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\RoleController::edit
 * @see app/Http/Controllers/RoleController.php:0
 * @route '/roles/{role}/edit'
 */
edit.get = (args: { role: string | number } | [role: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\RoleController::edit
 * @see app/Http/Controllers/RoleController.php:0
 * @route '/roles/{role}/edit'
 */
edit.head = (args: { role: string | number } | [role: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\RoleController::edit
 * @see app/Http/Controllers/RoleController.php:0
 * @route '/roles/{role}/edit'
 */
    const editForm = (args: { role: string | number } | [role: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\RoleController::edit
 * @see app/Http/Controllers/RoleController.php:0
 * @route '/roles/{role}/edit'
 */
        editForm.get = (args: { role: string | number } | [role: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\RoleController::edit
 * @see app/Http/Controllers/RoleController.php:0
 * @route '/roles/{role}/edit'
 */
        editForm.head = (args: { role: string | number } | [role: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
const RoleController = { index, store, show, update, destroy, create, edit }

export default RoleController