import { sample } from 'effector';
import { loginFx } from '../login-form/login-form.model';
import { $authorized, $refreshToken, $token } from './auth.model';

$authorized.on(loginFx.done, () => true);

sample({
    clock: loginFx.done,
    fn: (sourceData) => {
        return sourceData.result.token;
    },
    target: $token,
});

sample({
    clock: loginFx.done,
    fn: (sourceData) => {
        return sourceData.result.refreshToken;
    },
    target: $refreshToken,
});
