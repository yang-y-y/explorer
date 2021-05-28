import createPersistedState from 'vuex-persistedstate'

export default (context) => {
  createPersistedState({
    reducer(obj) {
      // 其中 username authority 为需要自动存储的 state
      const { theme } = obj;
      return {theme }
    }
  })(context.store);
}