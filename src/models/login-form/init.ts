import { combine, forward, sample } from 'effector';
import { $login, $password, loginChanged, loginFx, loginStarted, passwordChanged, resetForm } from './login-form.model';

import { showLoader, hideLoader } from '../global-spinner';

import { showStatus, hideStatus, GStatusType } from '../global-status';
import type { GStatusParams } from '../global-status';

$login.on(loginChanged, (_oldLogin, newLogin) => newLogin).reset(resetForm);

$password.on(passwordChanged, (_oldPassword, newPassword) => newPassword).reset(resetForm);

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

sample({
    clock: loginFx.done,
    fn: (): GStatusParams => {
        return {
            text: 'You have been logged in!',
            type: GStatusType.SUCCESS,
        };
    },
    target: showStatus,
});

sample({
    clock: loginFx.fail,
    fn: (clockData): GStatusParams => {
        return {
            text: clockData.error.message,
            type: GStatusType.ERROR,
        };
    },
    target: showStatus,
});
