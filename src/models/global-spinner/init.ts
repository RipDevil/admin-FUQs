import { $loader, hideLoader, showLoader } from './';

$loader
  .on(showLoader, (_, payload) => ({
    text: payload && payload.text,
    visible: true,
  }))
  .reset(hideLoader);
