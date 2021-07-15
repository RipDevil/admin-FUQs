import { createDomain } from 'effector';
import { applyDebug } from '../../utils/debug';

export type TokenPair = {
    token: string;
    refreshToken: string;
};

const auth = applyDebug(createDomain(), 'Auth');

const $token = auth.createStore('');
const $refreshToken = auth.createStore('');
const $authorized = auth.createStore(false);
const $localStorageChecked = auth.createStore(false);

const checkLocaleStorage = auth.createEvent();

const saveTokensToLocalStorageFx = auth.createEffect<TokenPair, any, Error>();
const getTokensFromLocalStorageFx = auth.createEffect<void, TokenPair, Error>();

export {
    $token,
    $refreshToken,
    $authorized,
    saveTokensToLocalStorageFx,
    $localStorageChecked,
    checkLocaleStorage,
    getTokensFromLocalStorageFx,
};
