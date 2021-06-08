import type { AxiosResponse } from 'axios';

import { call } from '../../utils/call';

export type ConfigType = {
  server: string;
};

export type ConfigPromise = Promise<AxiosResponse<ConfigType>>;

export function getConfig():ConfigPromise {
  return call<ConfigType>('/config.json', 'GET');
}

