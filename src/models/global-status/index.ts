export {
    $gstatusVisible as statusVisible,
    $gstatusText as statusText,
    showStatus,
    hideStatus,
    $gstatusInvisible as statusInvisible,
    $gstatusType as statusType,
    GStatusType, // because this is an ENUM and will be used
} from './global-status.model';

export type { GStatusParams } from './global-status.model';
