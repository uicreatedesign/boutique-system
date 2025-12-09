import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
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
* @see \App\Http\Controllers\SearchController::search
 * @see app/Http/Controllers/SearchController.php:25
 * @route '/api/search'
 */
export const search = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: search.url(options),
    method: 'get',
})

search.definition = {
    methods: ["get","head"],
    url: '/api/search',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SearchController::search
 * @see app/Http/Controllers/SearchController.php:25
 * @route '/api/search'
 */
search.url = (options?: RouteQueryOptions) => {
    return search.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SearchController::search
 * @see app/Http/Controllers/SearchController.php:25
 * @route '/api/search'
 */
search.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: search.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SearchController::search
 * @see app/Http/Controllers/SearchController.php:25
 * @route '/api/search'
 */
search.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: search.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\SearchController::search
 * @see app/Http/Controllers/SearchController.php:25
 * @route '/api/search'
 */
    const searchForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: search.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\SearchController::search
 * @see app/Http/Controllers/SearchController.php:25
 * @route '/api/search'
 */
        searchForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: search.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\SearchController::search
 * @see app/Http/Controllers/SearchController.php:25
 * @route '/api/search'
 */
        searchForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: search.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    search.form = searchForm
/**
* @see \App\Http\Controllers\SearchController::saveSearch
 * @see app/Http/Controllers/SearchController.php:105
 * @route '/api/search/save'
 */
export const saveSearch = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: saveSearch.url(options),
    method: 'post',
})

saveSearch.definition = {
    methods: ["post"],
    url: '/api/search/save',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SearchController::saveSearch
 * @see app/Http/Controllers/SearchController.php:105
 * @route '/api/search/save'
 */
saveSearch.url = (options?: RouteQueryOptions) => {
    return saveSearch.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SearchController::saveSearch
 * @see app/Http/Controllers/SearchController.php:105
 * @route '/api/search/save'
 */
saveSearch.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: saveSearch.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\SearchController::saveSearch
 * @see app/Http/Controllers/SearchController.php:105
 * @route '/api/search/save'
 */
    const saveSearchForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: saveSearch.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\SearchController::saveSearch
 * @see app/Http/Controllers/SearchController.php:105
 * @route '/api/search/save'
 */
        saveSearchForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: saveSearch.url(options),
            method: 'post',
        })
    
    saveSearch.form = saveSearchForm
/**
* @see \App\Http\Controllers\SearchController::getSavedSearches
 * @see app/Http/Controllers/SearchController.php:128
 * @route '/api/search/saved'
 */
export const getSavedSearches = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getSavedSearches.url(options),
    method: 'get',
})

getSavedSearches.definition = {
    methods: ["get","head"],
    url: '/api/search/saved',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SearchController::getSavedSearches
 * @see app/Http/Controllers/SearchController.php:128
 * @route '/api/search/saved'
 */
getSavedSearches.url = (options?: RouteQueryOptions) => {
    return getSavedSearches.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SearchController::getSavedSearches
 * @see app/Http/Controllers/SearchController.php:128
 * @route '/api/search/saved'
 */
getSavedSearches.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getSavedSearches.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SearchController::getSavedSearches
 * @see app/Http/Controllers/SearchController.php:128
 * @route '/api/search/saved'
 */
getSavedSearches.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getSavedSearches.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\SearchController::getSavedSearches
 * @see app/Http/Controllers/SearchController.php:128
 * @route '/api/search/saved'
 */
    const getSavedSearchesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getSavedSearches.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\SearchController::getSavedSearches
 * @see app/Http/Controllers/SearchController.php:128
 * @route '/api/search/saved'
 */
        getSavedSearchesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getSavedSearches.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\SearchController::getSavedSearches
 * @see app/Http/Controllers/SearchController.php:128
 * @route '/api/search/saved'
 */
        getSavedSearchesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getSavedSearches.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    getSavedSearches.form = getSavedSearchesForm
/**
* @see \App\Http\Controllers\SearchController::getSearchHistory
 * @see app/Http/Controllers/SearchController.php:133
 * @route '/api/search/history'
 */
export const getSearchHistory = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getSearchHistory.url(options),
    method: 'get',
})

getSearchHistory.definition = {
    methods: ["get","head"],
    url: '/api/search/history',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SearchController::getSearchHistory
 * @see app/Http/Controllers/SearchController.php:133
 * @route '/api/search/history'
 */
getSearchHistory.url = (options?: RouteQueryOptions) => {
    return getSearchHistory.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SearchController::getSearchHistory
 * @see app/Http/Controllers/SearchController.php:133
 * @route '/api/search/history'
 */
getSearchHistory.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getSearchHistory.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SearchController::getSearchHistory
 * @see app/Http/Controllers/SearchController.php:133
 * @route '/api/search/history'
 */
getSearchHistory.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getSearchHistory.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\SearchController::getSearchHistory
 * @see app/Http/Controllers/SearchController.php:133
 * @route '/api/search/history'
 */
    const getSearchHistoryForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getSearchHistory.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\SearchController::getSearchHistory
 * @see app/Http/Controllers/SearchController.php:133
 * @route '/api/search/history'
 */
        getSearchHistoryForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getSearchHistory.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\SearchController::getSearchHistory
 * @see app/Http/Controllers/SearchController.php:133
 * @route '/api/search/history'
 */
        getSearchHistoryForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getSearchHistory.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    getSearchHistory.form = getSearchHistoryForm
const SearchController = { index, search, saveSearch, getSavedSearches, getSearchHistory }

export default SearchController