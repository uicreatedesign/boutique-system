import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Settings\NotificationController::index
 * @see app/Http/Controllers/Settings/NotificationController.php:12
 * @route '/settings/notifications'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/settings/notifications',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Settings\NotificationController::index
 * @see app/Http/Controllers/Settings/NotificationController.php:12
 * @route '/settings/notifications'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\NotificationController::index
 * @see app/Http/Controllers/Settings/NotificationController.php:12
 * @route '/settings/notifications'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Settings\NotificationController::index
 * @see app/Http/Controllers/Settings/NotificationController.php:12
 * @route '/settings/notifications'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Settings\NotificationController::index
 * @see app/Http/Controllers/Settings/NotificationController.php:12
 * @route '/settings/notifications'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Settings\NotificationController::index
 * @see app/Http/Controllers/Settings/NotificationController.php:12
 * @route '/settings/notifications'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Settings\NotificationController::index
 * @see app/Http/Controllers/Settings/NotificationController.php:12
 * @route '/settings/notifications'
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
* @see \App\Http\Controllers\NotificationController::index
 * @see app/Http/Controllers/NotificationController.php:19
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
 * @see app/Http/Controllers/NotificationController.php:19
 * @route '/notifications'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\NotificationController::index
 * @see app/Http/Controllers/NotificationController.php:19
 * @route '/notifications'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\NotificationController::index
 * @see app/Http/Controllers/NotificationController.php:19
 * @route '/notifications'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\NotificationController::index
 * @see app/Http/Controllers/NotificationController.php:19
 * @route '/notifications'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\NotificationController::index
 * @see app/Http/Controllers/NotificationController.php:19
 * @route '/notifications'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\NotificationController::index
 * @see app/Http/Controllers/NotificationController.php:19
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
* @see \App\Http\Controllers\Settings\NotificationController::update
 * @see app/Http/Controllers/Settings/NotificationController.php:21
 * @route '/api/settings/notifications'
 */
export const update = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/api/settings/notifications',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Settings\NotificationController::update
 * @see app/Http/Controllers/Settings/NotificationController.php:21
 * @route '/api/settings/notifications'
 */
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\NotificationController::update
 * @see app/Http/Controllers/Settings/NotificationController.php:21
 * @route '/api/settings/notifications'
 */
update.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\Settings\NotificationController::update
 * @see app/Http/Controllers/Settings/NotificationController.php:21
 * @route '/api/settings/notifications'
 */
    const updateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url({
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Settings\NotificationController::update
 * @see app/Http/Controllers/Settings/NotificationController.php:21
 * @route '/api/settings/notifications'
 */
        updateForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\NotificationController::store
 * @see app/Http/Controllers/NotificationController.php:86
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
 * @see app/Http/Controllers/NotificationController.php:86
 * @route '/notifications'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\NotificationController::store
 * @see app/Http/Controllers/NotificationController.php:86
 * @route '/notifications'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\NotificationController::store
 * @see app/Http/Controllers/NotificationController.php:86
 * @route '/notifications'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\NotificationController::store
 * @see app/Http/Controllers/NotificationController.php:86
 * @route '/notifications'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\NotificationController::read
 * @see app/Http/Controllers/NotificationController.php:61
 * @route '/notifications/{notification}/read'
 */
export const read = (args: { notification: number | { id: number } } | [notification: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: read.url(args, options),
    method: 'patch',
})

read.definition = {
    methods: ["patch"],
    url: '/notifications/{notification}/read',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\NotificationController::read
 * @see app/Http/Controllers/NotificationController.php:61
 * @route '/notifications/{notification}/read'
 */
read.url = (args: { notification: number | { id: number } } | [notification: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return read.definition.url
            .replace('{notification}', parsedArgs.notification.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\NotificationController::read
 * @see app/Http/Controllers/NotificationController.php:61
 * @route '/notifications/{notification}/read'
 */
read.patch = (args: { notification: number | { id: number } } | [notification: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: read.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\NotificationController::read
 * @see app/Http/Controllers/NotificationController.php:61
 * @route '/notifications/{notification}/read'
 */
    const readForm = (args: { notification: number | { id: number } } | [notification: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: read.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PATCH',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\NotificationController::read
 * @see app/Http/Controllers/NotificationController.php:61
 * @route '/notifications/{notification}/read'
 */
        readForm.patch = (args: { notification: number | { id: number } } | [notification: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: read.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    read.form = readForm
/**
* @see \App\Http\Controllers\NotificationController::markAllRead
 * @see app/Http/Controllers/NotificationController.php:70
 * @route '/notifications/mark-all-read'
 */
export const markAllRead = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: markAllRead.url(options),
    method: 'patch',
})

markAllRead.definition = {
    methods: ["patch"],
    url: '/notifications/mark-all-read',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\NotificationController::markAllRead
 * @see app/Http/Controllers/NotificationController.php:70
 * @route '/notifications/mark-all-read'
 */
markAllRead.url = (options?: RouteQueryOptions) => {
    return markAllRead.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\NotificationController::markAllRead
 * @see app/Http/Controllers/NotificationController.php:70
 * @route '/notifications/mark-all-read'
 */
markAllRead.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: markAllRead.url(options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\NotificationController::markAllRead
 * @see app/Http/Controllers/NotificationController.php:70
 * @route '/notifications/mark-all-read'
 */
    const markAllReadForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: markAllRead.url({
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PATCH',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\NotificationController::markAllRead
 * @see app/Http/Controllers/NotificationController.php:70
 * @route '/notifications/mark-all-read'
 */
        markAllReadForm.patch = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: markAllRead.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    markAllRead.form = markAllReadForm
/**
* @see \App\Http\Controllers\NotificationController::destroy
 * @see app/Http/Controllers/NotificationController.php:77
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
 * @see app/Http/Controllers/NotificationController.php:77
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
 * @see app/Http/Controllers/NotificationController.php:77
 * @route '/notifications/{notification}'
 */
destroy.delete = (args: { notification: number | { id: number } } | [notification: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\NotificationController::destroy
 * @see app/Http/Controllers/NotificationController.php:77
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
 * @see app/Http/Controllers/NotificationController.php:77
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
* @see \App\Http\Controllers\NotificationController::unreadCount
 * @see app/Http/Controllers/NotificationController.php:107
 * @route '/api/notifications/unread-count'
 */
export const unreadCount = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: unreadCount.url(options),
    method: 'get',
})

unreadCount.definition = {
    methods: ["get","head"],
    url: '/api/notifications/unread-count',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\NotificationController::unreadCount
 * @see app/Http/Controllers/NotificationController.php:107
 * @route '/api/notifications/unread-count'
 */
unreadCount.url = (options?: RouteQueryOptions) => {
    return unreadCount.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\NotificationController::unreadCount
 * @see app/Http/Controllers/NotificationController.php:107
 * @route '/api/notifications/unread-count'
 */
unreadCount.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: unreadCount.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\NotificationController::unreadCount
 * @see app/Http/Controllers/NotificationController.php:107
 * @route '/api/notifications/unread-count'
 */
unreadCount.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: unreadCount.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\NotificationController::unreadCount
 * @see app/Http/Controllers/NotificationController.php:107
 * @route '/api/notifications/unread-count'
 */
    const unreadCountForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: unreadCount.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\NotificationController::unreadCount
 * @see app/Http/Controllers/NotificationController.php:107
 * @route '/api/notifications/unread-count'
 */
        unreadCountForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: unreadCount.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\NotificationController::unreadCount
 * @see app/Http/Controllers/NotificationController.php:107
 * @route '/api/notifications/unread-count'
 */
        unreadCountForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: unreadCount.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    unreadCount.form = unreadCountForm
const notifications = {
    index: Object.assign(index, index),
update: Object.assign(update, update),
store: Object.assign(store, store),
read: Object.assign(read, read),
markAllRead: Object.assign(markAllRead, markAllRead),
destroy: Object.assign(destroy, destroy),
unreadCount: Object.assign(unreadCount, unreadCount),
}

export default notifications