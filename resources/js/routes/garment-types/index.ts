import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\GarmentTypeController::index
 * @see app/Http/Controllers/GarmentTypeController.php:20
 * @route '/garment-types'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/garment-types',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\GarmentTypeController::index
 * @see app/Http/Controllers/GarmentTypeController.php:20
 * @route '/garment-types'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\GarmentTypeController::index
 * @see app/Http/Controllers/GarmentTypeController.php:20
 * @route '/garment-types'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\GarmentTypeController::index
 * @see app/Http/Controllers/GarmentTypeController.php:20
 * @route '/garment-types'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\GarmentTypeController::index
 * @see app/Http/Controllers/GarmentTypeController.php:20
 * @route '/garment-types'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\GarmentTypeController::index
 * @see app/Http/Controllers/GarmentTypeController.php:20
 * @route '/garment-types'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\GarmentTypeController::index
 * @see app/Http/Controllers/GarmentTypeController.php:20
 * @route '/garment-types'
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
* @see \App\Http\Controllers\GarmentTypeController::store
 * @see app/Http/Controllers/GarmentTypeController.php:29
 * @route '/garment-types'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/garment-types',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\GarmentTypeController::store
 * @see app/Http/Controllers/GarmentTypeController.php:29
 * @route '/garment-types'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\GarmentTypeController::store
 * @see app/Http/Controllers/GarmentTypeController.php:29
 * @route '/garment-types'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\GarmentTypeController::store
 * @see app/Http/Controllers/GarmentTypeController.php:29
 * @route '/garment-types'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\GarmentTypeController::store
 * @see app/Http/Controllers/GarmentTypeController.php:29
 * @route '/garment-types'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\GarmentTypeController::update
 * @see app/Http/Controllers/GarmentTypeController.php:41
 * @route '/garment-types/{garmentType}'
 */
export const update = (args: { garmentType: number | { id: number } } | [garmentType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/garment-types/{garmentType}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\GarmentTypeController::update
 * @see app/Http/Controllers/GarmentTypeController.php:41
 * @route '/garment-types/{garmentType}'
 */
update.url = (args: { garmentType: number | { id: number } } | [garmentType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { garmentType: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { garmentType: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    garmentType: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        garmentType: typeof args.garmentType === 'object'
                ? args.garmentType.id
                : args.garmentType,
                }

    return update.definition.url
            .replace('{garmentType}', parsedArgs.garmentType.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\GarmentTypeController::update
 * @see app/Http/Controllers/GarmentTypeController.php:41
 * @route '/garment-types/{garmentType}'
 */
update.put = (args: { garmentType: number | { id: number } } | [garmentType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\GarmentTypeController::update
 * @see app/Http/Controllers/GarmentTypeController.php:41
 * @route '/garment-types/{garmentType}'
 */
    const updateForm = (args: { garmentType: number | { id: number } } | [garmentType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\GarmentTypeController::update
 * @see app/Http/Controllers/GarmentTypeController.php:41
 * @route '/garment-types/{garmentType}'
 */
        updateForm.put = (args: { garmentType: number | { id: number } } | [garmentType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\GarmentTypeController::destroy
 * @see app/Http/Controllers/GarmentTypeController.php:53
 * @route '/garment-types/{garmentType}'
 */
export const destroy = (args: { garmentType: number | { id: number } } | [garmentType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/garment-types/{garmentType}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\GarmentTypeController::destroy
 * @see app/Http/Controllers/GarmentTypeController.php:53
 * @route '/garment-types/{garmentType}'
 */
destroy.url = (args: { garmentType: number | { id: number } } | [garmentType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { garmentType: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { garmentType: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    garmentType: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        garmentType: typeof args.garmentType === 'object'
                ? args.garmentType.id
                : args.garmentType,
                }

    return destroy.definition.url
            .replace('{garmentType}', parsedArgs.garmentType.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\GarmentTypeController::destroy
 * @see app/Http/Controllers/GarmentTypeController.php:53
 * @route '/garment-types/{garmentType}'
 */
destroy.delete = (args: { garmentType: number | { id: number } } | [garmentType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\GarmentTypeController::destroy
 * @see app/Http/Controllers/GarmentTypeController.php:53
 * @route '/garment-types/{garmentType}'
 */
    const destroyForm = (args: { garmentType: number | { id: number } } | [garmentType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\GarmentTypeController::destroy
 * @see app/Http/Controllers/GarmentTypeController.php:53
 * @route '/garment-types/{garmentType}'
 */
        destroyForm.delete = (args: { garmentType: number | { id: number } } | [garmentType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const garmentTypes = {
    index: Object.assign(index, index),
store: Object.assign(store, store),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default garmentTypes