import axios from 'axios';
import { forward } from 'effector';

import { $user, loginFx, logoutFx } from './';
import { showLoader, hideLoader } from '../global-spinner';

loginFx.use((credentials) => {
  console.log('credentials :>> ', credentials);
  return axios.post('/', credentials);
});

logoutFx.use(() => {
  return axios.post('/logout');
});

$user.on(loginFx.doneData, (_, userData) => userData).reset(logoutFx.done);

forward({
  from: [loginFx.finally, logoutFx.finally],
  to: hideLoader,
});

forward({
  from: [
    loginFx.pending.map(() => ({ text: 'Login pending' })),
    logoutFx.pending.map(() => ({ text: 'Logout pending' })),
  ],
  to: showLoader,
});