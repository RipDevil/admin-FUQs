import { createDomain } from 'effector';
import { applyDebug } from '../../utils/debug';
import { createRequest } from '../api';

export type LoginData = {
    login: string;
    password: string;
};

export type LoginResData = {
    token: string;
    refreshToken: string;
};

const loginForm = applyDebug(createDomain(), 'login-form');

const $login = loginForm.createStore('');
const $password = loginForm.createStore('');

// const $nameError = loginForm.createStore('');
// const $passwordError = loginForm.createStore('');

const loginChanged = loginForm.createEvent<string>();
const passwordChanged = loginForm.createEvent<string>();

const loginStarted = loginForm.createEvent();
const resetForm = loginForm.createEvent();

const loginFx = createRequest<LoginResData>('/auth/login', 'POST');

export { $login, $password, loginChanged, loginFx, loginStarted, passwordChanged, resetForm };
