import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
import settings from './settings'
/**
* @see \App\Http\Controllers\Settings\BackupController::index
 * @see app/Http/Controllers/Settings/BackupController.php:15
 * @route '/settings/backup'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/settings/backup',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Settings\BackupController::index
 * @see app/Http/Controllers/Settings/BackupController.php:15
 * @route '/settings/backup'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\BackupController::index
 * @see app/Http/Controllers/Settings/BackupController.php:15
 * @route '/settings/backup'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Settings\BackupController::index
 * @see app/Http/Controllers/Settings/BackupController.php:15
 * @route '/settings/backup'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Settings\BackupController::index
 * @see app/Http/Controllers/Settings/BackupController.php:15
 * @route '/settings/backup'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Settings\BackupController::index
 * @see app/Http/Controllers/Settings/BackupController.php:15
 * @route '/settings/backup'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Settings\BackupController::index
 * @see app/Http/Controllers/Settings/BackupController.php:15
 * @route '/settings/backup'
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
* @see \App\Http\Controllers\Settings\BackupController::create
 * @see app/Http/Controllers/Settings/BackupController.php:36
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
 * @see app/Http/Controllers/Settings/BackupController.php:36
 * @route '/api/settings/backup/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\BackupController::create
 * @see app/Http/Controllers/Settings/BackupController.php:36
 * @route '/api/settings/backup/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Settings\BackupController::create
 * @see app/Http/Controllers/Settings/BackupController.php:36
 * @route '/api/settings/backup/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Settings\BackupController::create
 * @see app/Http/Controllers/Settings/BackupController.php:36
 * @route '/api/settings/backup/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Settings\BackupController::create
 * @see app/Http/Controllers/Settings/BackupController.php:36
 * @route '/api/settings/backup/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Settings\BackupController::create
 * @see app/Http/Controllers/Settings/BackupController.php:36
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
/**
* @see \App\Http\Controllers\Settings\BackupController::download
 * @see app/Http/Controllers/Settings/BackupController.php:104
 * @route '/api/settings/backup/download/{id}'
 */
export const download = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: download.url(args, options),
    method: 'get',
})

download.definition = {
    methods: ["get","head"],
    url: '/api/settings/backup/download/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Settings\BackupController::download
 * @see app/Http/Controllers/Settings/BackupController.php:104
 * @route '/api/settings/backup/download/{id}'
 */
download.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                }

    return download.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\BackupController::download
 * @see app/Http/Controllers/Settings/BackupController.php:104
 * @route '/api/settings/backup/download/{id}'
 */
download.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: download.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Settings\BackupController::download
 * @see app/Http/Controllers/Settings/BackupController.php:104
 * @route '/api/settings/backup/download/{id}'
 */
download.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: download.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Settings\BackupController::download
 * @see app/Http/Controllers/Settings/BackupController.php:104
 * @route '/api/settings/backup/download/{id}'
 */
    const downloadForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: download.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Settings\BackupController::download
 * @see app/Http/Controllers/Settings/BackupController.php:104
 * @route '/api/settings/backup/download/{id}'
 */
        downloadForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: download.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Settings\BackupController::download
 * @see app/Http/Controllers/Settings/BackupController.php:104
 * @route '/api/settings/backup/download/{id}'
 */
        downloadForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: download.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    download.form = downloadForm
const backup = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
download: Object.assign(download, download),
settings: Object.assign(settings, settings),
}

export default backup