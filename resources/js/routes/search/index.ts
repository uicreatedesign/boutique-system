import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\SearchController::index
 * @see app/Http/Controllers/SearchController.php:20
 * @route '/search'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/search',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SearchController::index
 * @see app/Http/Controllers/SearchController.php:20
 * @route '/search'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SearchController::index
 * @see app/Http/Controllers/SearchController.php:20
 * @route '/search'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SearchController::index
 * @see app/Http/Controllers/SearchController.php:20
 * @route '/search'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\SearchController::index
 * @see app/Http/Controllers/SearchController.php:20
 * @route '/search'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\SearchController::index
 * @see app/Http/Controllers/SearchController.php:20
 * @route '/search'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\SearchController::index
 * @see app/Http/Controllers/SearchController.php:20
 * @route '/search'
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
* @see \App\Http\Controllers\SearchController::api
 * @see app/Http/Controllers/SearchController.php:25
 * @route '/api/search'
 */
export const api = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: api.url(options),
    method: 'get',
})

api.definition = {
    methods: ["get","head"],
    url: '/api/search',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SearchController::api
 * @see app/Http/Controllers/SearchController.php:25
 * @route '/api/search'
 */
api.url = (options?: RouteQueryOptions) => {
    return api.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SearchController::api
 * @see app/Http/Controllers/SearchController.php:25
 * @route '/api/search'
 */
api.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: api.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SearchController::api
 * @see app/Http/Controllers/SearchController.php:25
 * @route '/api/search'
 */
api.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: api.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\SearchController::api
 * @see app/Http/Controllers/SearchController.php:25
 * @route '/api/search'
 */
    const apiForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: api.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\SearchController::api
 * @see app/Http/Controllers/SearchController.php:25
 * @route '/api/search'
 */
        apiForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: api.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\SearchController::api
 * @see app/Http/Controllers/SearchController.php:25
 * @route '/api/search'
 */
        apiForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: api.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    api.form = apiForm
/**
* @see \App\Http\Controllers\SearchController::save
 * @see app/Http/Controllers/SearchController.php:105
 * @route '/api/search/save'
 */
export const save = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: save.url(options),
    method: 'post',
})

save.definition = {
    methods: ["post"],
    url: '/api/search/save',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SearchController::save
 * @see app/Http/Controllers/SearchController.php:105
 * @route '/api/search/save'
 */
save.url = (options?: RouteQueryOptions) => {
    return save.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SearchController::save
 * @see app/Http/Controllers/SearchController.php:105
 * @route '/api/search/save'
 */
save.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: save.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\SearchController::save
 * @see app/Http/Controllers/SearchController.php:105
 * @route '/api/search/save'
 */
    const saveForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: save.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\SearchController::save
 * @see app/Http/Controllers/SearchController.php:105
 * @route '/api/search/save'
 */
        saveForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: save.url(options),
            method: 'post',
        })
    
    save.form = saveForm
/**
* @see \App\Http\Controllers\SearchController::saved
 * @see app/Http/Controllers/SearchController.php:128
 * @route '/api/search/saved'
 */
export const saved = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: saved.url(options),
    method: 'get',
})

saved.definition = {
    methods: ["get","head"],
    url: '/api/search/saved',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SearchController::saved
 * @see app/Http/Controllers/SearchController.php:128
 * @route '/api/search/saved'
 */
saved.url = (options?: RouteQueryOptions) => {
    return saved.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SearchController::saved
 * @see app/Http/Controllers/SearchController.php:128
 * @route '/api/search/saved'
 */
saved.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: saved.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SearchController::saved
 * @see app/Http/Controllers/SearchController.php:128
 * @route '/api/search/saved'
 */
saved.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: saved.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\SearchController::saved
 * @see app/Http/Controllers/SearchController.php:128
 * @route '/api/search/saved'
 */
    const savedForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: saved.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\SearchController::saved
 * @see app/Http/Controllers/SearchController.php:128
 * @route '/api/search/saved'
 */
        savedForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: saved.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\SearchController::saved
 * @see app/Http/Controllers/SearchController.php:128
 * @route '/api/search/saved'
 */
        savedForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: saved.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    saved.form = savedForm
/**
* @see \App\Http\Controllers\SearchController::history
 * @see app/Http/Controllers/SearchController.php:133
 * @route '/api/search/history'
 */
export const history = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: history.url(options),
    method: 'get',
})

history.definition = {
    methods: ["get","head"],
    url: '/api/search/history',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SearchController::history
 * @see app/Http/Controllers/SearchController.php:133
 * @route '/api/search/history'
 */
history.url = (options?: RouteQueryOptions) => {
    return history.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SearchController::history
 * @see app/Http/Controllers/SearchController.php:133
 * @route '/api/search/history'
 */
history.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: history.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SearchController::history
 * @see app/Http/Controllers/SearchController.php:133
 * @route '/api/search/history'
 */
history.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: history.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\SearchController::history
 * @see app/Http/Controllers/SearchController.php:133
 * @route '/api/search/history'
 */
    const historyForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: history.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\SearchController::history
 * @see app/Http/Controllers/SearchController.php:133
 * @route '/api/search/history'
 */
        historyForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: history.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\SearchController::history
 * @see app/Http/Controllers/SearchController.php:133
 * @route '/api/search/history'
 */
        historyForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: history.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    history.form = historyForm
const search = {
    index: Object.assign(index, index),
api: Object.assign(api, api),
save: Object.assign(save, save),
saved: Object.assign(saved, saved),
history: Object.assign(history, history),
}

export default search