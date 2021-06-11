import { Effect, attach, createEffect, Combinable } from 'effector';

import { $config } from '../config';
import { $user } from '../user';

import type { ConfigType } from '../config';
import type { TokensType } from '../user';
import type { AxiosError } from 'axios';

function combine<Params, Done, Fail>(): Effect<Params, Done, Fail> {
  return attach({
    effect: createEffect<Params, Done, Fail>(),
    source: {
      config: $config,
      user: $user,
    },
    mapParams: (params, source) => {
      return { ...params, source };
    },
  });
}



type MockParamsType = {
  id: number
}

type MockType = {
  name: string
}

type MockTypeExtended = {
  ...args: MockType,
  source: Combinable
}

const mockFx = createEffect<MockParamsType, MockType>()

const mockExtendedFx = combine<MockType extends Combinable, MockType, AxiosError>()
