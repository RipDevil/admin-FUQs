import { forward, guard, sample } from 'effector';
import {
    $gstatusText,
    $gstatusVisible,
    $gstatusType,
    hideStatus,
    showStatus,
    GStatusType,
    hideStatusTimeoutFx,
} from './global-status.model';

$gstatusVisible.on(showStatus, () => true).on(hideStatus, () => false);

hideStatusTimeoutFx.use(async () => {
    return new Promise<any>((resolve) => {
        setTimeout(resolve, 5000);
    });
});

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

forward({
    from: showStatus,
    to: hideStatusTimeoutFx,
});

guard({
    clock: hideStatusTimeoutFx.done,
    filter: $gstatusVisible,
    target: hideStatus,
});
