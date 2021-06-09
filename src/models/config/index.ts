import type { AxiosError } from 'axios';
import { createStore, createEffect } from 'effector';

export type ConfigType = {
  server: string;
};

const defaultStore: ConfigType = { server: '' };

const $config = createStore<ConfigType>(defaultStore);

const getConfigFx = createEffect<void, ConfigType, AxiosError>();

export { $config, getConfigFx };
