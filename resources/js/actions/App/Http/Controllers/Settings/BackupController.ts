import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Settings\BackupController::create
 * @see app/Http/Controllers/Settings/BackupController.php:12
 * @route '/api/settings/backup/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/api/settings/backup/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Settings\BackupController::create
 * @see app/Http/Controllers/Settings/BackupController.php:12
 * @route '/api/settings/backup/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\BackupController::create
 * @see app/Http/Controllers/Settings/BackupController.php:12
 * @route '/api/settings/backup/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Settings\BackupController::create
 * @see app/Http/Controllers/Settings/BackupController.php:12
 * @route '/api/settings/backup/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Settings\BackupController::create
 * @see app/Http/Controllers/Settings/BackupController.php:12
 * @route '/api/settings/backup/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Settings\BackupController::create
 * @see app/Http/Controllers/Settings/BackupController.php:12
 * @route '/api/settings/backup/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Settings\BackupController::create
 * @see app/Http/Controllers/Settings/BackupController.php:12
 * @route '/api/settings/backup/create'
 */
        createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    create.form = createForm
const BackupController = { create }

export default BackupController