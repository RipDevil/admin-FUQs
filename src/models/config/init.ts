import axios from 'axios';
import { guard } from 'effector';
import { $config, $configInited, $configIsNotInited, configDownloadFx, downloadConfig, ConfigType } from './model';

guard({
    clock: downloadConfig,
    filter: $configIsNotInited,
    target: configDownloadFx,
});

configDownloadFx.use(async () => {
    const axiosResponse = await axios.get<ConfigType>('config.json');
    return axiosResponse.data;
});

$configInited.on(configDownloadFx.done, () => true);
$config.on(configDownloadFx.done, (_state, payload) => payload.result);
