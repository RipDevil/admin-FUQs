import type { Domain } from 'effector';

const isDebug = false;

export const applyDebug = (domain: Domain, name: string): Domain => {
  if (isDebug) {
    domain.onCreateStore((store) => {
      store.watch((state, payload) => {
        console.groupCollapsed(
          `State change --- ${name} :>> ${JSON.stringify(state)}`
        );
        console.log('state :>> ', state);
        console.log('payload :>> ', payload);
        console.groupEnd();
      });
    });
  }

  return domain;
};
