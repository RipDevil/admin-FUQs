import type { AxiosResponse } from 'axios';

import { call } from '../../utils/call';
import { $config } from '../config/model';

export type TokensType = {
  token: string;
  refreshToken: string;
};

export type CredentialsType = {
  login: string;
  password: string;
};

export type TokensPromise = Promise<AxiosResponse<TokensType>>;

export function login(credentials: CredentialsType): TokensPromise {
  const { server } = $config.getState();
  return call<TokensType>(server + '/login', 'POST', credentials);
}

export function logout(): Promise<AxiosResponse<any>> {
  const { server } = $config.getState();
  return call<any>(server + '/logout', 'POST', undefined, 'FAKE_TOKEN');
}
