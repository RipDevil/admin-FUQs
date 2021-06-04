import axios from 'axios';
import type { AxiosResponse } from 'axios';

export type ConfigType = {
  server: string;
};

export type ConfigPromise = Promise<AxiosResponse<ConfigType>>;

export function getConfig():ConfigPromise {
  return axios.get<ConfigType, AxiosResponse<ConfigType>>('/config.json');
}

