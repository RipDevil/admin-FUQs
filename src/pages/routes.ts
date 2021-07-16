import { push, RouteDefinition } from 'svelte-spa-router';
import wrap from 'svelte-spa-router/wrap';

import FuqsPage from './fuqs-page.svelte';
import FuqPage from './fuq-page.svelte';
import UsersPage from './users-page.svelte';
import UserPage from './user-page.svelte';
import LoginPage from './login-page.svelte';
import MainPage from './main-page.svelte';
import { hideStatus } from '../models/global-status';

import { $authorized, $localStorageChecked, checkLocaleStorage } from '../models/auth/auth.model';

const hideStatusPrecondition = () => {
    hideStatus(); // is needed anymore?
    return true;
};

const redirectIfNotAuthorized = () => {
    if (!$authorized.getState()) {
        push('/login');
    }
    return true;
};

const routes: RouteDefinition = {
    '/': wrap({
        component: MainPage,
        conditions: [redirectIfNotAuthorized, hideStatusPrecondition],
    }),
    '/login': wrap({
        component: LoginPage,
        conditions: [hideStatusPrecondition],
    }),
    '/fuqs': wrap({
        component: FuqsPage,
        conditions: [redirectIfNotAuthorized, hideStatusPrecondition],
    }),
    '/fuq': wrap({
        component: FuqPage,
        conditions: [redirectIfNotAuthorized, hideStatusPrecondition],
    }),
    '/users': wrap({
        component: UsersPage,
        conditions: [redirectIfNotAuthorized, hideStatusPrecondition],
    }),
    '/user': wrap({
        component: UserPage,
        conditions: [redirectIfNotAuthorized, hideStatusPrecondition],
    }),
};

export default routes;
