import { forward, guard, sample } from 'effector';
import { $users, fetchUsersFx, getUsers } from './users.model';
import { hideLoader, showLoader } from '../global-spinner';
import { GStatusParams, GStatusType, showStatus } from '../global-status';

sample({
    clock: getUsers,
    fn: () => ({}), // hack
    target: fetchUsersFx,
});

sample({
    clock: getUsers,
    fn: () => 'Fetching users...',
    target: showLoader,
});

forward({
    from: fetchUsersFx.finally,
    to: hideLoader,
});

$users.on(fetchUsersFx.done, (_, { result: users }) => users);

sample({
    clock: fetchUsersFx.fail,
    fn: (clockSource): GStatusParams => {
        return {
            text: clockSource.error.message,
            type: GStatusType.WARNING,
        };
    },
    target: showStatus,
});
