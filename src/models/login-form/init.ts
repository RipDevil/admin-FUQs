import { combine, forward, sample } from 'effector';
import {
  $login,
  $password,
  loginChanged,
  loginFx,
  loginStarted,
  passwordChanged,
  resetForm,
} from './login-form.model';

import { showLoader, hideLoader } from '../global-spinner';

$login.on(loginChanged, (_oldLogin, newLogin) => newLogin).reset(resetForm);

$password
  .on(passwordChanged, (_oldPassword, newPassword) => newPassword)
  .reset(resetForm);

const $formData = combine($login, $password, (login, password) => ({
  login,
  password,
}));

$formData.reset(resetForm);

sample({
  source: $formData,
  target: loginFx,
  clock: loginStarted,
});

forward({ from: loginFx, to: resetForm });

sample({ clock: loginStarted, fn: () => 'Logging in', target: showLoader });

forward({ from: loginFx.done, to: hideLoader });

forward({ from: loginFx.fail, to: hideLoader });
