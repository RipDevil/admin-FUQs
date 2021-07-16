import { createDomain } from 'effector';

import { createRequest } from '../api';
import type { User } from '../user';

const users = createDomain();

const $users = users.createStore<User[]>([]);

const getUsers = users.createEvent();

const fetchUsersFx = createRequest<User[]>('/users');

export { $users, getUsers, fetchUsersFx };
