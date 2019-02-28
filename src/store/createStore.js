//@flow

import type {Store} from './index.h'
import {storeFabric} from './storeFabric'
import {type Config, normalizeConfig} from './storeConfig'

export function createStore<State>(
  state: State,
  config: Config = {},
): Store<State> {
  const opts = normalizeConfig(config)
  return storeFabric({
    currentState: state,
    name: opts.name,
  })
}
