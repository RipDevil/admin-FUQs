import { attach, combine, createDomain, Effect, sample, Store } from 'effector';
import type { AxiosError, AxiosResponse } from 'axios';
import jwtDecode from 'jwt-decode';
import { fromUnixTime, isPast } from 'date-fns';

import { call, methodTypes } from '../../utils/call';
import { config } from '../config';

import { $refreshToken, $token, TokenPair, saveTokensToLocalStorageFx } from '../auth/auth.model';

export type ChainedCalls = {
    data: object;
    uri: string;
    method: methodTypes;
    server?: string;
    token?: string;
    refreshToken?: string;
};

const api = createDomain();

const makeRequestFx = api.createEffect<ChainedCalls, AxiosResponse, AxiosError>(async (params) => {
    const paramsCopy = params;
    if (params?.token) {
        const decodedToken: { exp: number } = jwtDecode(params.token);
        const expirationDate = fromUnixTime(decodedToken.exp);

        if (isPast(expirationDate)) {
            const newTokens = await call<TokenPair>(params.server + '/auth/refresh', 'POST', {
                refreshToken: params.refreshToken,
            });

            paramsCopy.token = newTokens.data.token;
            paramsCopy.refreshToken = newTokens.data.refreshToken;
        }
    }

    const res = await call<any>(
        paramsCopy.server + paramsCopy.uri,
        paramsCopy.method,
        paramsCopy.data,
        paramsCopy.token
    );

    return res.data;
});

const applyData = attach<ChainedCalls, Store<{ token: string; server: string }>, Effect<ChainedCalls, any, AxiosError>>(
    {
        effect: makeRequestFx,
        source: combine($token, $refreshToken, config, (token = '', refreshToken = '', config) => ({
            token,
            refreshToken,
            server: config?.server || '',
        })),
        mapParams: ({ data, uri, method }, states) => {
            return { data, uri, method, ...states };
        },
    }
);

export const createRequest = <ResponseType>(uri: string, method: methodTypes = 'GET') => {
    return attach<object, Effect<ChainedCalls, ResponseType, AxiosError>>({
        effect: applyData,
        mapParams: (data) => {
            return { data, uri, method };
        },
    });
};

sample({
    clock: makeRequestFx.done,
    fn: (clockData) => clockData.params.token,
    target: $token,
});

sample({
    clock: makeRequestFx.done,
    fn: (clockData) => clockData.params.refreshToken,
    target: $refreshToken,
});

sample({
    clock: makeRequestFx.done,
    fn: (clockData) => ({ token: clockData.params.token, refreshToken: clockData.params.refreshToken }),
    target: saveTokensToLocalStorageFx,
});

// @mna: I leave it here to emphasize the issue
saveTokensToLocalStorageFx.done.watch((payload) => {
    console.log('saveTokensToLocalStorageFx done ', payload);
});
