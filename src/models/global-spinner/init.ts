import { forward } from 'effector';
import {
  $loaderText,
  $loaderVisible,
  hideLoader,
  showLoader,
} from './spinner.model';

$loaderVisible.on(showLoader, () => true).on(hideLoader, () => false);

forward({ from: showLoader, to: $loaderText });
