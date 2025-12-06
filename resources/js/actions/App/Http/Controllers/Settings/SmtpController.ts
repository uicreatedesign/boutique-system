import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Settings\SmtpController::show
 * @see app/Http/Controllers/Settings/SmtpController.php:12
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
 * @see app/Http/Controllers/Settings/SmtpController.php:12
 * @route '/api/settings/smtp'
 */
show.url = (options?: RouteQueryOptions) => {
    return show.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\SmtpController::show
 * @see app/Http/Controllers/Settings/SmtpController.php:12
 * @route '/api/settings/smtp'
 */
show.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Settings\SmtpController::show
 * @see app/Http/Controllers/Settings/SmtpController.php:12
 * @route '/api/settings/smtp'
 */
show.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Settings\SmtpController::update
 * @see app/Http/Controllers/Settings/SmtpController.php:25
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
 * @see app/Http/Controllers/Settings/SmtpController.php:25
 * @route '/api/settings/smtp'
 */
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\SmtpController::update
 * @see app/Http/Controllers/Settings/SmtpController.php:25
 * @route '/api/settings/smtp'
 */
update.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})
const SmtpController = { show, update }

export default SmtpController