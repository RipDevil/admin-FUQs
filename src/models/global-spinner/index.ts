import { createStore, createEvent } from 'effector';

export type LoaderType = {
  visible?: boolean;
  text?: string;
};

const defaultStore: LoaderType = {
  visible: false,
};

const $loader = createStore<LoaderType>(defaultStore);

const showLoader = createEvent<{ text: string } | void>('toggle global loader');
const hideLoader = createEvent('force global loader');


export { $loader, showLoader, hideLoader };
