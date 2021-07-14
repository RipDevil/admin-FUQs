import type { RouteDefinition } from 'svelte-spa-router';
import wrap from 'svelte-spa-router/wrap';

import FuqsPage from './fuqs-page.svelte';
import FuqPage from './fuq-page.svelte';
import UsersPage from './users-page.svelte';
import UserPage from './user-page.svelte';
import LoginPage from './login-page.svelte';
import MainPage from './main-page.svelte';
import { hideStatus } from '../models/global-status';

import { authorized } from '../models/auth';

const hideStatusPrecondition = () => {
  hideStatus();
  return true;
};

const routes: RouteDefinition = {
  '/': wrap({
    component: MainPage,
    conditions: [() => authorized.getState(), hideStatusPrecondition],
  }),
  '/login': wrap({
    component: LoginPage,
    conditions: [hideStatusPrecondition],
  }),
  '/fuqs': wrap({
    component: FuqsPage,
    conditions: [() => authorized.getState(), hideStatusPrecondition],
  }),
  '/fuq': wrap({
    component: FuqPage,
    conditions: [() => authorized.getState(), hideStatusPrecondition],
  }),
  '/users': wrap({
    component: UsersPage,
    conditions: [() => authorized.getState(), hideStatusPrecondition],
  }),
  '/user': wrap({
    component: UserPage,
    conditions: [() => authorized.getState(), hideStatusPrecondition],
  }),
};

export default routes;
