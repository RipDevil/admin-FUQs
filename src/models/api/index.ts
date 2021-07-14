import { attach, createDomain, Effect, sample, Store } from 'effector';
import type { AxiosError, AxiosResponse } from 'axios';

import { call, methodTypes } from '../../utils/call';
import type { ConfigType } from '../config/model';
import { config } from '../config';
import { token } from '../auth';

export type ChainedCalls = {
  data: object;
  uri: string;
  method: methodTypes;
  server?: string;
  token?: string;
};

const api = createDomain();

const makeRequestFx = api.createEffect<ChainedCalls, AxiosResponse, AxiosError>(
  async (params) => {
    const res = await call<any>(
      params.server + params.uri,
      params.method,
      params.data,
      params.token
    );
    return res.data;
  }
);

const applyTokenFx = attach<
  ChainedCalls,
  Store<string>,
  Effect<ChainedCalls, any, AxiosError>
>({
  effect: makeRequestFx,
  source: token,
  mapParams: ({ data, uri, server, method }, token) => {
    return { data, uri, server, method, token };
  },
});

const applyConfigFx = attach<
  ChainedCalls,
  Store<ConfigType>,
  Effect<ChainedCalls, any, AxiosError>
>({
  effect: applyTokenFx,
  source: config,
  mapParams: ({ data, uri, method }, states) => {
    return { data, uri, method, server: states.server };
  },
});

const createRequest = <ResponseType>(uri: string, method: methodTypes) =>
  attach<object, Effect<ChainedCalls, ResponseType, AxiosError>>({
    effect: applyConfigFx,
    mapParams: (data) => {
      return { data, uri, method };
    },
  });

export { createRequest };
