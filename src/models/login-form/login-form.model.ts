import type { AxiosError, AxiosResponse } from 'axios';
import { combine, createDomain } from 'effector';
import { applyDebug } from '../../utils/debug';

export type LoginData = {
  name: string;
  password: string;
};

export type LoginResData = {
  token: string,
  refreshToken: string
}

const loginForm = applyDebug(createDomain(), 'login-form');

const $name = loginForm.createStore('');
const $password = loginForm.createStore('');

// const $nameError = loginForm.createStore('');
// const $passwordError = loginForm.createStore('');

const loginChanged = loginForm.createEvent<string>();
const passwordChanged = loginForm.createEvent<string>();

const loginStarted = loginForm.createEvent();
const resetForm = loginForm.createEvent();

const $login = combine($name, $password, (name, password) => ({
  name,
  password
}));

const loginFx = loginForm.createEffect<LoginData, AxiosResponse<LoginResData>, AxiosError>();

export {
  $name,
  $password,
  loginChanged,
  loginFx,
  loginStarted,
  passwordChanged,
  resetForm,
  $login
};
