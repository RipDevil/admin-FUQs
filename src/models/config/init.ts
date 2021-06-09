import axios from 'axios';

import { $config, getConfigFx } from './';

getConfigFx.use(() => {
  return axios.get('/config.json');
});

$config
  .on(getConfigFx.doneData, (_, newConfig) => newConfig);
