import type { Domain } from 'effector';

const isDebug = true;
const verbose = 1;

export const applyDebug = (domain: Domain, name: string): Domain => {
    if (isDebug) {
        domain.onCreateStore((store) => {
            store.watch((state, payload) => {
                console.groupCollapsed(`State change --- ${name} :>> ${JSON.stringify(state)}`);
                console.log('state :>> ', state);
                console.log('payload :>> ', payload);
                console.groupEnd();
            });
        });

        verbose > 1 &&
            domain.onCreateEffect((fx) => {
                fx.watch((payload) => {
                    console.groupCollapsed(`Fx change --- ${name} :>> ${JSON.stringify(payload)}`);
                    console.log('payload :>> ', payload);
                    console.groupEnd();
                });
            });

        verbose > 2 &&
            domain.onCreateEvent((event) => {
                event.watch((payload) => {
                    console.groupCollapsed(`Event change --- ${name} :>> ${JSON.stringify(payload)}`);
                    console.log('payload :>> ', payload);
                    console.groupEnd();
                });
            });
    }

    return domain;
};
