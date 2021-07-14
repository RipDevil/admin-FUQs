import { createDomain } from 'effector';
import { applyDebug } from '../../utils/debug';

export enum GStatusType {
    SUCCESS,
    WARNING,
    ERROR,
    NOTE,
}

export type GStatusParams = {
    type: GStatusType;
    text: string;
};

const gstatus = applyDebug(createDomain(), 'Global status');

const $gstatusText = gstatus.createStore<string | undefined>('');
const $gstatusType = gstatus.createStore<GStatusType>(GStatusType.NOTE);
const $gstatusVisible = gstatus.createStore(false);
const $gstatusInvisible = $gstatusVisible.map((state) => !state);

const showStatus = gstatus.createEvent<GStatusParams>();
const hideStatus = gstatus.createEvent();

export { $gstatusInvisible, $gstatusText, $gstatusVisible, $gstatusType, showStatus, hideStatus };
