import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Settings\GeneralSettingsController::edit
 * @see app/Http/Controllers/Settings/GeneralSettingsController.php:20
 * @route '/settings/general'
 */
export const edit = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/settings/general',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Settings\GeneralSettingsController::edit
 * @see app/Http/Controllers/Settings/GeneralSettingsController.php:20
 * @route '/settings/general'
 */
edit.url = (options?: RouteQueryOptions) => {
    return edit.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\GeneralSettingsController::edit
 * @see app/Http/Controllers/Settings/GeneralSettingsController.php:20
 * @route '/settings/general'
 */
edit.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Settings\GeneralSettingsController::edit
 * @see app/Http/Controllers/Settings/GeneralSettingsController.php:20
 * @route '/settings/general'
 */
edit.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Settings\GeneralSettingsController::edit
 * @see app/Http/Controllers/Settings/GeneralSettingsController.php:20
 * @route '/settings/general'
 */
    const editForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Settings\GeneralSettingsController::edit
 * @see app/Http/Controllers/Settings/GeneralSettingsController.php:20
 * @route '/settings/general'
 */
        editForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Settings\GeneralSettingsController::edit
 * @see app/Http/Controllers/Settings/GeneralSettingsController.php:20
 * @route '/settings/general'
 */
        editForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
/**
* @see \App\Http\Controllers\Settings\GeneralSettingsController::show
 * @see app/Http/Controllers/Settings/GeneralSettingsController.php:12
 * @route '/api/settings/general'
 */
export const show = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/settings/general',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Settings\GeneralSettingsController::show
 * @see app/Http/Controllers/Settings/GeneralSettingsController.php:12
 * @route '/api/settings/general'
 */
show.url = (options?: RouteQueryOptions) => {
    return show.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\GeneralSettingsController::show
 * @see app/Http/Controllers/Settings/GeneralSettingsController.php:12
 * @route '/api/settings/general'
 */
show.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Settings\GeneralSettingsController::show
 * @see app/Http/Controllers/Settings/GeneralSettingsController.php:12
 * @route '/api/settings/general'
 */
show.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Settings\GeneralSettingsController::show
 * @see app/Http/Controllers/Settings/GeneralSettingsController.php:12
 * @route '/api/settings/general'
 */
    const showForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Settings\GeneralSettingsController::show
 * @see app/Http/Controllers/Settings/GeneralSettingsController.php:12
 * @route '/api/settings/general'
 */
        showForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Settings\GeneralSettingsController::show
 * @see app/Http/Controllers/Settings/GeneralSettingsController.php:12
 * @route '/api/settings/general'
 */
        showForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
/**
* @see \App\Http\Controllers\Settings\GeneralSettingsController::update
 * @see app/Http/Controllers/Settings/GeneralSettingsController.php:26
 * @route '/api/settings/general'
 */
export const update = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/api/settings/general',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Settings\GeneralSettingsController::update
 * @see app/Http/Controllers/Settings/GeneralSettingsController.php:26
 * @route '/api/settings/general'
 */
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\GeneralSettingsController::update
 * @see app/Http/Controllers/Settings/GeneralSettingsController.php:26
 * @route '/api/settings/general'
 */
update.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\Settings\GeneralSettingsController::update
 * @see app/Http/Controllers/Settings/GeneralSettingsController.php:26
 * @route '/api/settings/general'
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
* @see \App\Http\Controllers\Settings\GeneralSettingsController::update
 * @see app/Http/Controllers/Settings/GeneralSettingsController.php:26
 * @route '/api/settings/general'
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
const GeneralSettingsController = { edit, show, update }

export default GeneralSettingsController