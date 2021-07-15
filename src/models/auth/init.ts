import { forward, sample } from 'effector';

import { loginFx } from '../login-form/login-form.model';
import { showStatus, GStatusType } from '../global-status';
import type { GStatusParams } from '../global-status';
import {
    $authorized,
    $refreshToken,
    $token,
    saveTokensToLocalStorageFx,
    $localStorageChecked,
    checkLocaleStorage,
    getTokensFromLocalStorageFx,
} from './auth.model';

import type { TokenPair } from './auth.model';

const LOCAL_STORAGE_TOKEN_KEY = 'fuq-admin-token';
const LOCAL_STORAGE_REFRESH_TOKEN_KEY = 'fuq-admin-refresh-token';

$authorized.on(loginFx.done, () => true).on(getTokensFromLocalStorageFx.done, () => true);

$localStorageChecked.on(getTokensFromLocalStorageFx.finally, () => true);

saveTokensToLocalStorageFx.use(({ token, refreshToken }) => {
    localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, token);
    localStorage.setItem(LOCAL_STORAGE_REFRESH_TOKEN_KEY, refreshToken);
});

getTokensFromLocalStorageFx.use(() => {
    if (!localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY)) {
        console.log('JWT Token was not found in the Local Storage');
        throw new Error('JWT Token was not found in the Local Storage');
    }

    return {
        token: localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY),
        refreshToken: localStorage.getItem(LOCAL_STORAGE_REFRESH_TOKEN_KEY),
    };
});

sample({
    clock: loginFx.done,
    fn: (sourceData) => {
        return sourceData.result.token;
    },
    target: $token,
});

sample({
    clock: loginFx.done,
    fn: (sourceData) => {
        return sourceData.result.refreshToken;
    },
    target: $refreshToken,
});

sample({
    clock: loginFx.done,
    fn: (clockData): TokenPair => ({ token: clockData.result.token, refreshToken: clockData.result.refreshToken }),
    target: saveTokensToLocalStorageFx,
});

sample({
    clock: saveTokensToLocalStorageFx.fail,
    fn: (clockSource): GStatusParams => {
        return {
            text: clockSource.error.message,
            type: GStatusType.WARNING,
        };
    },
    target: showStatus,
});

forward({
    from: checkLocaleStorage,
    to: getTokensFromLocalStorageFx,
});

sample({
    clock: getTokensFromLocalStorageFx.done,
    fn: (sourceData) => {
        return sourceData.result.token;
    },
    target: $token,
});

sample({
    clock: getTokensFromLocalStorageFx.done,
    fn: (sourceData) => {
        return sourceData.result.refreshToken;
    },
    target: $refreshToken,
});
