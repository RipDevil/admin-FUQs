import axios from 'axios';
import { combine, forward, sample } from 'effector';
import {
  $name,
  $password,
  loginChanged,
  loginFx,
  loginStarted,
  passwordChanged,
  resetForm
} from './login-form.model';

$name.on(loginChanged, (_oldLogin, newLogin) => newLogin);

$password.on(passwordChanged, (_oldPassword, newPassword) => newPassword);

const $login = combine($name, $password, (name, password) => ({
  name,
  password,
}));

$login.reset(resetForm);

loginFx.use(async (params) => {
  return await axios.post('/auth', { login: params.name, password: params.password });
});

sample({
  source: $login,
  target: loginFx,
  clock: loginStarted,
});

forward({ from: loginFx, to: resetForm });
