import { createStore, createEvent } from 'effector';
import type { ConfigType } from './';

const defaultStore: ConfigType = { server: '' };

const $config = createStore<ConfigType>(defaultStore);

const configChanged = createEvent<ConfigType>('config changed');

$config.on(configChanged, (_, payload) => payload);

export { $config, configChanged };
