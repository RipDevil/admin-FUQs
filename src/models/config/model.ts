import type { AxiosError } from 'axios';
import { createDomain } from 'effector';
import { applyDebug } from '../../utils/debug';

export type ConfigType = {
    server: string;
};

export type RequestType = {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    token?: string;
    params: object;
    server: string;
};

const configDomain = applyDebug(createDomain(), 'Config');

const $config = configDomain.createStore<ConfigType>({ server: '/' });

const $configInited = configDomain.createStore(false);

const $configIsNotInited = $configInited.map((inited) => !inited);

const downloadConfig = configDomain.createEvent();

const configDownloadFx = configDomain.createEffect<void, ConfigType, AxiosError>();

export { configDomain, $config, $configInited, $configIsNotInited, downloadConfig, configDownloadFx };
