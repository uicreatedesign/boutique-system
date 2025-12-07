import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\FabricController::index
 * @see app/Http/Controllers/FabricController.php:20
 * @route '/fabrics'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/fabrics',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\FabricController::index
 * @see app/Http/Controllers/FabricController.php:20
 * @route '/fabrics'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\FabricController::index
 * @see app/Http/Controllers/FabricController.php:20
 * @route '/fabrics'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\FabricController::index
 * @see app/Http/Controllers/FabricController.php:20
 * @route '/fabrics'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\FabricController::index
 * @see app/Http/Controllers/FabricController.php:20
 * @route '/fabrics'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\FabricController::index
 * @see app/Http/Controllers/FabricController.php:20
 * @route '/fabrics'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\FabricController::index
 * @see app/Http/Controllers/FabricController.php:20
 * @route '/fabrics'
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
* @see \App\Http\Controllers\FabricController::store
 * @see app/Http/Controllers/FabricController.php:29
 * @route '/fabrics'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/fabrics',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\FabricController::store
 * @see app/Http/Controllers/FabricController.php:29
 * @route '/fabrics'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\FabricController::store
 * @see app/Http/Controllers/FabricController.php:29
 * @route '/fabrics'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\FabricController::store
 * @see app/Http/Controllers/FabricController.php:29
 * @route '/fabrics'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\FabricController::store
 * @see app/Http/Controllers/FabricController.php:29
 * @route '/fabrics'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\FabricController::update
 * @see app/Http/Controllers/FabricController.php:46
 * @route '/fabrics/{fabric}'
 */
export const update = (args: { fabric: number | { id: number } } | [fabric: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/fabrics/{fabric}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\FabricController::update
 * @see app/Http/Controllers/FabricController.php:46
 * @route '/fabrics/{fabric}'
 */
update.url = (args: { fabric: number | { id: number } } | [fabric: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { fabric: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { fabric: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    fabric: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        fabric: typeof args.fabric === 'object'
                ? args.fabric.id
                : args.fabric,
                }

    return update.definition.url
            .replace('{fabric}', parsedArgs.fabric.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\FabricController::update
 * @see app/Http/Controllers/FabricController.php:46
 * @route '/fabrics/{fabric}'
 */
update.put = (args: { fabric: number | { id: number } } | [fabric: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\FabricController::update
 * @see app/Http/Controllers/FabricController.php:46
 * @route '/fabrics/{fabric}'
 */
    const updateForm = (args: { fabric: number | { id: number } } | [fabric: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\FabricController::update
 * @see app/Http/Controllers/FabricController.php:46
 * @route '/fabrics/{fabric}'
 */
        updateForm.put = (args: { fabric: number | { id: number } } | [fabric: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\FabricController::destroy
 * @see app/Http/Controllers/FabricController.php:63
 * @route '/fabrics/{fabric}'
 */
export const destroy = (args: { fabric: number | { id: number } } | [fabric: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/fabrics/{fabric}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\FabricController::destroy
 * @see app/Http/Controllers/FabricController.php:63
 * @route '/fabrics/{fabric}'
 */
destroy.url = (args: { fabric: number | { id: number } } | [fabric: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { fabric: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { fabric: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    fabric: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        fabric: typeof args.fabric === 'object'
                ? args.fabric.id
                : args.fabric,
                }

    return destroy.definition.url
            .replace('{fabric}', parsedArgs.fabric.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\FabricController::destroy
 * @see app/Http/Controllers/FabricController.php:63
 * @route '/fabrics/{fabric}'
 */
destroy.delete = (args: { fabric: number | { id: number } } | [fabric: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\FabricController::destroy
 * @see app/Http/Controllers/FabricController.php:63
 * @route '/fabrics/{fabric}'
 */
    const destroyForm = (args: { fabric: number | { id: number } } | [fabric: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\FabricController::destroy
 * @see app/Http/Controllers/FabricController.php:63
 * @route '/fabrics/{fabric}'
 */
        destroyForm.delete = (args: { fabric: number | { id: number } } | [fabric: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const fabrics = {
    index: Object.assign(index, index),
store: Object.assign(store, store),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default fabrics