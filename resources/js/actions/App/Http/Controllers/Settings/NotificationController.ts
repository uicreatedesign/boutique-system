import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
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
const NotificationController = { index, update }

export default NotificationController