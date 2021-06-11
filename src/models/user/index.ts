import type { AxiosError, AxiosResponse } from 'axios';
import { createStore, createEffect, attach } from 'effector';

import { $config } from '../config';
import type { ConfigType } from '../config';

export type TokensType = {
  token?: string;
  refreshToken?: string;
};

export type CredentialsType = {
  login: string;
  password: string;
};

const $user = createStore<TokensType>({});

const loginFx =  createEffect<CredentialsType, TokensType, AxiosError>();

const loginWithConfigFx = attach({
  effect: loginFx,
  mapParams: (credentials, config) => ({ ...credentials, config}),
  source: $config,
})

const logoutFx = createEffect<void, AxiosResponse<any>, AxiosError>();

export { $user, loginFx, logoutFx };
