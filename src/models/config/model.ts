import type { AxiosError } from "axios";
import { createDomain } from "effector";

export type ConfigType = {
  server: string
}

const configDomain = createDomain();

const $config = configDomain.createStore<ConfigType>({ server: '/' });

const $configInited = configDomain.createStore(false);

const $configIsNotInited = $configInited.map(inited => !inited);

const downloadConfig = configDomain.createEvent();

const configDownloadFx = configDomain.createEffect<void, ConfigType, AxiosError>();

export {
  configDomain,
  $config,
  $configInited,
  $configIsNotInited,
  downloadConfig,
  configDownloadFx
};