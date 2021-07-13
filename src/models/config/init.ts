import axios from 'axios';
import { forward } from 'effector';
import {
  $config,
  $configInited,
  configDownloadFx,
  downloadConfig,
  ConfigType
} from './model';

forward({
  from: downloadConfig,
  to: configDownloadFx,
});

configDownloadFx.use(async () => {
  const axiosResponse = await axios.get<ConfigType>('config.json');
  return axiosResponse.data;
})

$configInited.on(configDownloadFx.done, () => true);
$config.on(configDownloadFx.done, (_state, payload) => payload.result)

$config.watch(console.log)