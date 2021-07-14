import { createDomain } from 'effector';
import { applyDebug } from '../../utils/debug';

const loader = applyDebug(createDomain(), 'Loader');

const $loaderText = loader.createStore<string | undefined>('');
const $loaderVisible = loader.createStore(false);
const $loaderInvisible = $loaderVisible.map((state) => !state);

const showLoader = loader.createEvent<string>();
const hideLoader = loader.createEvent();

export { $loaderInvisible, $loaderText, $loaderVisible, hideLoader, showLoader };
