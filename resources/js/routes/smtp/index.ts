import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
 * @see routes/settings.php:36
 * @route '/settings/smtp'
 */
export const edit = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/settings/smtp',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/settings.php:36
 * @route '/settings/smtp'
 */
edit.url = (options?: RouteQueryOptions) => {
    return edit.definition.url + queryParams(options)
}

/**
 * @see routes/settings.php:36
 * @route '/settings/smtp'
 */
edit.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(options),
    method: 'get',
})
/**
 * @see routes/settings.php:36
 * @route '/settings/smtp'
 */
edit.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(options),
    method: 'head',
})

    /**
 * @see routes/settings.php:36
 * @route '/settings/smtp'
 */
    const editForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(options),
        method: 'get',
    })

            /**
 * @see routes/settings.php:36
 * @route '/settings/smtp'
 */
        editForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(options),
            method: 'get',
        })
            /**
 * @see routes/settings.php:36
 * @route '/settings/smtp'
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
* @see \App\Http\Controllers\Settings\SmtpController::show
 * @see app/Http/Controllers/Settings/SmtpController.php:14
 * @route '/api/settings/smtp'
 */
export const show = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/settings/smtp',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Settings\SmtpController::show
 * @see app/Http/Controllers/Settings/SmtpController.php:14
 * @route '/api/settings/smtp'
 */
show.url = (options?: RouteQueryOptions) => {
    return show.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\SmtpController::show
 * @see app/Http/Controllers/Settings/SmtpController.php:14
 * @route '/api/settings/smtp'
 */
show.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Settings\SmtpController::show
 * @see app/Http/Controllers/Settings/SmtpController.php:14
 * @route '/api/settings/smtp'
 */
show.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Settings\SmtpController::show
 * @see app/Http/Controllers/Settings/SmtpController.php:14
 * @route '/api/settings/smtp'
 */
    const showForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Settings\SmtpController::show
 * @see app/Http/Controllers/Settings/SmtpController.php:14
 * @route '/api/settings/smtp'
 */
        showForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Settings\SmtpController::show
 * @see app/Http/Controllers/Settings/SmtpController.php:14
 * @route '/api/settings/smtp'
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
* @see \App\Http\Controllers\Settings\SmtpController::update
 * @see app/Http/Controllers/Settings/SmtpController.php:27
 * @route '/api/settings/smtp'
 */
export const update = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/api/settings/smtp',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Settings\SmtpController::update
 * @see app/Http/Controllers/Settings/SmtpController.php:27
 * @route '/api/settings/smtp'
 */
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\SmtpController::update
 * @see app/Http/Controllers/Settings/SmtpController.php:27
 * @route '/api/settings/smtp'
 */
update.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\Settings\SmtpController::update
 * @see app/Http/Controllers/Settings/SmtpController.php:27
 * @route '/api/settings/smtp'
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
* @see \App\Http\Controllers\Settings\SmtpController::update
 * @see app/Http/Controllers/Settings/SmtpController.php:27
 * @route '/api/settings/smtp'
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
* @see \App\Http\Controllers\Settings\SmtpController::test
 * @see app/Http/Controllers/Settings/SmtpController.php:49
 * @route '/api/settings/smtp/test'
 */
export const test = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: test.url(options),
    method: 'post',
})

test.definition = {
    methods: ["post"],
    url: '/api/settings/smtp/test',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Settings\SmtpController::test
 * @see app/Http/Controllers/Settings/SmtpController.php:49
 * @route '/api/settings/smtp/test'
 */
test.url = (options?: RouteQueryOptions) => {
    return test.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\SmtpController::test
 * @see app/Http/Controllers/Settings/SmtpController.php:49
 * @route '/api/settings/smtp/test'
 */
test.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: test.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Settings\SmtpController::test
 * @see app/Http/Controllers/Settings/SmtpController.php:49
 * @route '/api/settings/smtp/test'
 */
    const testForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: test.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Settings\SmtpController::test
 * @see app/Http/Controllers/Settings/SmtpController.php:49
 * @route '/api/settings/smtp/test'
 */
        testForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: test.url(options),
            method: 'post',
        })
    
    test.form = testForm
const smtp = {
    edit: Object.assign(edit, edit),
show: Object.assign(show, show),
update: Object.assign(update, update),
test: Object.assign(test, test),
}

export default smtp