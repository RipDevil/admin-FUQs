import { createEffect, createStore } from 'effector';

import { changeLoader, hideLoader } from '../global-spinner/model';
import { login, logout, TokensType, CredentialsType } from './';

const defaultStore: TokensType = {
  token: '',
  refreshToken: '',
};

const $tokens = createStore<TokensType>(defaultStore);

const loginEffect = createEffect('login', {
  handler: async (credentials: CredentialsType): Promise<TokensType> => {
    const res = await login(credentials);
    console.log('res :>> ', res);
    return res.data;
  },
});

$tokens
  .on(loginEffect.done, (_, payload) => payload.result)
  .on(loginEffect.pending, () => {
    changeLoader({ text: 'Logging in' });
  })
  .on(loginEffect.finally, () => {
    hideLoader();
  });

const logoutFx = createEffect('logout', {
  handler: async (): Promise<any> => {
    const res = await logout();
    console.log('logoutFx res :>> ', res);
    return res.data;
  },
});

$tokens
  .reset(logoutFx.done)
  .on(logoutFx.pending, () => {
    changeLoader({ text: 'Logging in' });
  })
  .on(logoutFx.finally, () => {
    hideLoader();
  });

export {
  loginEffect,
  logoutFx,
  $tokens
}