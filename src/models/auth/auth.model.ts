import { createDomain } from "effector";
import { applyDebug } from "../../utils/debug";

const auth = applyDebug(createDomain(), 'Auth');

const $token = auth.createStore('');
const $refreshToken = auth.createStore('');
const $authorized = auth.createStore(false);

export {
  $token,
  $refreshToken,
  $authorized
};