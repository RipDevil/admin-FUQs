import { GStatusType as STATUS_TYPE } from '../models/global-status';

export const statusClasses = {
    error: 'error',
    note: 'note',
    success: 'success',
    warning: 'warning',
};

export const getStatusClass = (type: STATUS_TYPE): string => {
    let className: string = statusClasses.note;

    if (type === STATUS_TYPE.ERROR) {
        className = statusClasses.error;
    }

    if (type === STATUS_TYPE.SUCCESS) {
        className = statusClasses.success;
    }

    if (type === STATUS_TYPE.WARNING) {
        className = statusClasses.warning;
    }

    return className;
};
