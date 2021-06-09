import { createStore, createEvent } from 'effector';

export type LoaderType = {
  visible?: boolean;
  text?: string;
};

const defaultStore: LoaderType = {
  visible: false,
};

const $globalLoader = createStore<LoaderType>(defaultStore);

const toggleGlobalLoader = createEvent<LoaderType>('toggle global loader');
const forceGlobalLoader = createEvent('force global loader');

$globalLoader
  .on(toggleGlobalLoader, (state) => ({ ...state, visible: !state.visible }))
  .on(forceGlobalLoader, (_, payload) => payload);

export { $globalLoader, toggleGlobalLoader, forceGlobalLoader };
