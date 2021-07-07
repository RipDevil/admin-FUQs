import type { AxiosError, AxiosResponse } from 'axios';
import { createEffect, attach, createStore } from 'effector';

import { call } from '../../utils/call';

type CallType = { resource: string; data?: object; token?: string };

type TokenType = {
  token?: string;
};

type CredsType = {
  name: string;
  pass: string;
};

const $token = createStore<TokenType>({});

const backendRequest = createEffect<CallType, AxiosResponse, AxiosError>();

backendRequest.use(({ resource, token, data }) => {
  return call(`https://example.com/api${resource}`, 'GET', data, token);
});

const logoutRequest = attach({
  effect: backendRequest,
  source: $token,
  mapParams: (credentials: CredsType, state: TokenType) => {
    return { resource: '/logout', data: credentials, token: state.token };
  },
});

logoutRequest({ name: 'asd', pass: 'asd' });
