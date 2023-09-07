import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'

// 为 store state 声明类型
export interface State {
  form: string | null
}

// 定义 injection key
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    form: null
  },
  mutations: {
    setForm(state, json: string) {
      state.form = json;
    }
  }
})

export function useStore() {
  return baseUseStore(key)
}