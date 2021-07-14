import { sample } from 'effector';
import {
    $gstatusText,
    $gstatusVisible,
    $gstatusType,
    hideStatus,
    showStatus,
    GStatusType,
} from './global-status.model';

$gstatusVisible.on(showStatus, () => true).on(hideStatus, () => false);

sample({
    clock: showStatus,
    fn: (sourceData): string => sourceData.text,
    target: $gstatusText,
});

sample({
    clock: showStatus,
    fn: (sourceData): GStatusType => sourceData.type,
    target: $gstatusType,
});
