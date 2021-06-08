import type { RouteDefinition } from 'svelte-spa-router';
import wrap from 'svelte-spa-router/wrap';

import FuqsPage from './fuqs-page.svelte';
import FuqPage from './fuq-page.svelte';
import UsersPage from './users-page.svelte';
import UserPage from './user-page.svelte';
import LoadingPage from './login-page.svelte';
import MainPage from './main-page.svelte';

// TODO: delete this mock
function isAuthorized() {
  return true;
}

const routes: RouteDefinition = {
  '/': MainPage,
  '/login': LoadingPage,
  // should be PRIVATE
  '/fuqs': wrap({
    component: FuqsPage,
    conditions: [isAuthorized],
  }),
  '/fuq': wrap({
    component: FuqPage,
    conditions: [isAuthorized],
  }),
  '/users': wrap({
    component: UsersPage,
    conditions: [isAuthorized],
  }),
  '/user': wrap({
    component: UserPage,
    conditions: [isAuthorized],
  }),
};

export default routes;
