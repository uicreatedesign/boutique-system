import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../wayfinder'
/**
 * @see routes/settings.php:30
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
 * @see routes/settings.php:30
 * @route '/settings/smtp'
 */
edit.url = (options?: RouteQueryOptions) => {
    return edit.definition.url + queryParams(options)
}

/**
 * @see routes/settings.php:30
 * @route '/settings/smtp'
 */
edit.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(options),
    method: 'get',
})
/**
 * @see routes/settings.php:30
 * @route '/settings/smtp'
 */
edit.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(options),
    method: 'head',
})

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
const smtp = {
    edit: Object.assign(edit, edit),
show: Object.assign(show, show),
update: Object.assign(update, update),
}

export default smtp