import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Settings\ProfileController::remove
 * @see app/Http/Controllers/Settings/ProfileController.php:60
 * @route '/settings/profile/avatar'
 */
export const remove = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: remove.url(options),
    method: 'delete',
})

remove.definition = {
    methods: ["delete"],
    url: '/settings/profile/avatar',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Settings\ProfileController::remove
 * @see app/Http/Controllers/Settings/ProfileController.php:60
 * @route '/settings/profile/avatar'
 */
remove.url = (options?: RouteQueryOptions) => {
    return remove.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\ProfileController::remove
 * @see app/Http/Controllers/Settings/ProfileController.php:60
 * @route '/settings/profile/avatar'
 */
remove.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: remove.url(options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Settings\ProfileController::remove
 * @see app/Http/Controllers/Settings/ProfileController.php:60
 * @route '/settings/profile/avatar'
 */
    const removeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: remove.url({
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Settings\ProfileController::remove
 * @see app/Http/Controllers/Settings/ProfileController.php:60
 * @route '/settings/profile/avatar'
 */
        removeForm.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: remove.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    remove.form = removeForm
const avatar = {
    remove: Object.assign(remove, remove),
}

export default avatar