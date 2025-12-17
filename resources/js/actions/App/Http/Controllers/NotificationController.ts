import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\NotificationController::index
 * @see app/Http/Controllers/NotificationController.php:17
 * @route '/notifications'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/notifications',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\NotificationController::index
 * @see app/Http/Controllers/NotificationController.php:17
 * @route '/notifications'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\NotificationController::index
 * @see app/Http/Controllers/NotificationController.php:17
 * @route '/notifications'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\NotificationController::index
 * @see app/Http/Controllers/NotificationController.php:17
 * @route '/notifications'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\NotificationController::index
 * @see app/Http/Controllers/NotificationController.php:17
 * @route '/notifications'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\NotificationController::index
 * @see app/Http/Controllers/NotificationController.php:17
 * @route '/notifications'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\NotificationController::index
 * @see app/Http/Controllers/NotificationController.php:17
 * @route '/notifications'
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
* @see \App\Http\Controllers\NotificationController::store
 * @see app/Http/Controllers/NotificationController.php:84
 * @route '/notifications'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/notifications',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\NotificationController::store
 * @see app/Http/Controllers/NotificationController.php:84
 * @route '/notifications'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\NotificationController::store
 * @see app/Http/Controllers/NotificationController.php:84
 * @route '/notifications'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\NotificationController::store
 * @see app/Http/Controllers/NotificationController.php:84
 * @route '/notifications'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\NotificationController::store
 * @see app/Http/Controllers/NotificationController.php:84
 * @route '/notifications'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\NotificationController::markAsRead
 * @see app/Http/Controllers/NotificationController.php:59
 * @route '/notifications/{notification}/read'
 */
export const markAsRead = (args: { notification: number | { id: number } } | [notification: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: markAsRead.url(args, options),
    method: 'patch',
})

markAsRead.definition = {
    methods: ["patch"],
    url: '/notifications/{notification}/read',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\NotificationController::markAsRead
 * @see app/Http/Controllers/NotificationController.php:59
 * @route '/notifications/{notification}/read'
 */
markAsRead.url = (args: { notification: number | { id: number } } | [notification: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { notification: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { notification: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    notification: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        notification: typeof args.notification === 'object'
                ? args.notification.id
                : args.notification,
                }

    return markAsRead.definition.url
            .replace('{notification}', parsedArgs.notification.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\NotificationController::markAsRead
 * @see app/Http/Controllers/NotificationController.php:59
 * @route '/notifications/{notification}/read'
 */
markAsRead.patch = (args: { notification: number | { id: number } } | [notification: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: markAsRead.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\NotificationController::markAsRead
 * @see app/Http/Controllers/NotificationController.php:59
 * @route '/notifications/{notification}/read'
 */
    const markAsReadForm = (args: { notification: number | { id: number } } | [notification: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: markAsRead.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PATCH',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\NotificationController::markAsRead
 * @see app/Http/Controllers/NotificationController.php:59
 * @route '/notifications/{notification}/read'
 */
        markAsReadForm.patch = (args: { notification: number | { id: number } } | [notification: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: markAsRead.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    markAsRead.form = markAsReadForm
/**
* @see \App\Http\Controllers\NotificationController::markAllAsRead
 * @see app/Http/Controllers/NotificationController.php:68
 * @route '/notifications/mark-all-read'
 */
export const markAllAsRead = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: markAllAsRead.url(options),
    method: 'patch',
})

markAllAsRead.definition = {
    methods: ["patch"],
    url: '/notifications/mark-all-read',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\NotificationController::markAllAsRead
 * @see app/Http/Controllers/NotificationController.php:68
 * @route '/notifications/mark-all-read'
 */
markAllAsRead.url = (options?: RouteQueryOptions) => {
    return markAllAsRead.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\NotificationController::markAllAsRead
 * @see app/Http/Controllers/NotificationController.php:68
 * @route '/notifications/mark-all-read'
 */
markAllAsRead.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: markAllAsRead.url(options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\NotificationController::markAllAsRead
 * @see app/Http/Controllers/NotificationController.php:68
 * @route '/notifications/mark-all-read'
 */
    const markAllAsReadForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: markAllAsRead.url({
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PATCH',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\NotificationController::markAllAsRead
 * @see app/Http/Controllers/NotificationController.php:68
 * @route '/notifications/mark-all-read'
 */
        markAllAsReadForm.patch = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: markAllAsRead.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    markAllAsRead.form = markAllAsReadForm
/**
* @see \App\Http\Controllers\NotificationController::destroy
 * @see app/Http/Controllers/NotificationController.php:75
 * @route '/notifications/{notification}'
 */
export const destroy = (args: { notification: number | { id: number } } | [notification: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/notifications/{notification}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\NotificationController::destroy
 * @see app/Http/Controllers/NotificationController.php:75
 * @route '/notifications/{notification}'
 */
destroy.url = (args: { notification: number | { id: number } } | [notification: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { notification: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { notification: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    notification: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        notification: typeof args.notification === 'object'
                ? args.notification.id
                : args.notification,
                }

    return destroy.definition.url
            .replace('{notification}', parsedArgs.notification.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\NotificationController::destroy
 * @see app/Http/Controllers/NotificationController.php:75
 * @route '/notifications/{notification}'
 */
destroy.delete = (args: { notification: number | { id: number } } | [notification: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\NotificationController::destroy
 * @see app/Http/Controllers/NotificationController.php:75
 * @route '/notifications/{notification}'
 */
    const destroyForm = (args: { notification: number | { id: number } } | [notification: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\NotificationController::destroy
 * @see app/Http/Controllers/NotificationController.php:75
 * @route '/notifications/{notification}'
 */
        destroyForm.delete = (args: { notification: number | { id: number } } | [notification: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
/**
* @see \App\Http\Controllers\NotificationController::getUnreadCount
 * @see app/Http/Controllers/NotificationController.php:105
 * @route '/api/notifications/unread-count'
 */
export const getUnreadCount = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getUnreadCount.url(options),
    method: 'get',
})

getUnreadCount.definition = {
    methods: ["get","head"],
    url: '/api/notifications/unread-count',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\NotificationController::getUnreadCount
 * @see app/Http/Controllers/NotificationController.php:105
 * @route '/api/notifications/unread-count'
 */
getUnreadCount.url = (options?: RouteQueryOptions) => {
    return getUnreadCount.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\NotificationController::getUnreadCount
 * @see app/Http/Controllers/NotificationController.php:105
 * @route '/api/notifications/unread-count'
 */
getUnreadCount.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getUnreadCount.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\NotificationController::getUnreadCount
 * @see app/Http/Controllers/NotificationController.php:105
 * @route '/api/notifications/unread-count'
 */
getUnreadCount.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getUnreadCount.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\NotificationController::getUnreadCount
 * @see app/Http/Controllers/NotificationController.php:105
 * @route '/api/notifications/unread-count'
 */
    const getUnreadCountForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getUnreadCount.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\NotificationController::getUnreadCount
 * @see app/Http/Controllers/NotificationController.php:105
 * @route '/api/notifications/unread-count'
 */
        getUnreadCountForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getUnreadCount.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\NotificationController::getUnreadCount
 * @see app/Http/Controllers/NotificationController.php:105
 * @route '/api/notifications/unread-count'
 */
        getUnreadCountForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getUnreadCount.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    getUnreadCount.form = getUnreadCountForm
/**
* @see \App\Http\Controllers\NotificationController::getRecent
 * @see app/Http/Controllers/NotificationController.php:112
 * @route '/api/notifications/recent'
 */
export const getRecent = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getRecent.url(options),
    method: 'get',
})

getRecent.definition = {
    methods: ["get","head"],
    url: '/api/notifications/recent',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\NotificationController::getRecent
 * @see app/Http/Controllers/NotificationController.php:112
 * @route '/api/notifications/recent'
 */
getRecent.url = (options?: RouteQueryOptions) => {
    return getRecent.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\NotificationController::getRecent
 * @see app/Http/Controllers/NotificationController.php:112
 * @route '/api/notifications/recent'
 */
getRecent.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getRecent.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\NotificationController::getRecent
 * @see app/Http/Controllers/NotificationController.php:112
 * @route '/api/notifications/recent'
 */
getRecent.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getRecent.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\NotificationController::getRecent
 * @see app/Http/Controllers/NotificationController.php:112
 * @route '/api/notifications/recent'
 */
    const getRecentForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getRecent.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\NotificationController::getRecent
 * @see app/Http/Controllers/NotificationController.php:112
 * @route '/api/notifications/recent'
 */
        getRecentForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getRecent.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\NotificationController::getRecent
 * @see app/Http/Controllers/NotificationController.php:112
 * @route '/api/notifications/recent'
 */
        getRecentForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getRecent.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    getRecent.form = getRecentForm
const NotificationController = { index, store, markAsRead, markAllAsRead, destroy, getUnreadCount, getRecent }

export default NotificationController