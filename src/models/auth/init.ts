import { sample } from 'effector';
import { loginFx } from '../login-form/login-form.model';
import { $authorized, $refreshToken, $token } from './auth.model';

$authorized.on(loginFx.done, () => true);

sample({
  source: loginFx.doneData,
  clock: loginFx.done,
  fn: (sourceData) => {
    return sourceData.data.token;
  },
  target: $token,
});

sample({
  source: loginFx.doneData,
  clock: loginFx.done,
  fn: (sourceData) => {
    return sourceData.data.refreshToken;
  },
  target: $refreshToken,
});
