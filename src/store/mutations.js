import * as types from './mutation-types'

const mutations = {
  // singer 是一个载荷 Payload
  [types.SET_SINGER] (state, singer) {
    state.singer = singer
  }
}

export default mutations