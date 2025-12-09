import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
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
* @see \App\Http\Controllers\Settings\SmtpController::testEmail
 * @see app/Http/Controllers/Settings/SmtpController.php:49
 * @route '/api/settings/smtp/test'
 */
export const testEmail = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: testEmail.url(options),
    method: 'post',
})

testEmail.definition = {
    methods: ["post"],
    url: '/api/settings/smtp/test',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Settings\SmtpController::testEmail
 * @see app/Http/Controllers/Settings/SmtpController.php:49
 * @route '/api/settings/smtp/test'
 */
testEmail.url = (options?: RouteQueryOptions) => {
    return testEmail.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\SmtpController::testEmail
 * @see app/Http/Controllers/Settings/SmtpController.php:49
 * @route '/api/settings/smtp/test'
 */
testEmail.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: testEmail.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Settings\SmtpController::testEmail
 * @see app/Http/Controllers/Settings/SmtpController.php:49
 * @route '/api/settings/smtp/test'
 */
    const testEmailForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: testEmail.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Settings\SmtpController::testEmail
 * @see app/Http/Controllers/Settings/SmtpController.php:49
 * @route '/api/settings/smtp/test'
 */
        testEmailForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: testEmail.url(options),
            method: 'post',
        })
    
    testEmail.form = testEmailForm
const SmtpController = { show, update, testEmail }

export default SmtpController