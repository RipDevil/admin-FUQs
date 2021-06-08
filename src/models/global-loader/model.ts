import { createStore, createEvent } from 'effector';

export type LoaderType = {
  visible?: boolean;
  text?: string;
};

const defaultStore: LoaderType = {
  visible: false,
};

const $globalLoader = createStore<LoaderType>(defaultStore);

const changeLoader = createEvent<LoaderType>('change loader');
const hideLoader = createEvent<void>('hide loader');

$globalLoader
  .on(changeLoader, (_, payload) => ({ visible: true, ...payload }))
  .reset(hideLoader);

export { $globalLoader, changeLoader, hideLoader };
