import store from '../store';

export default {
  execute() {
    return store.getters.getLs;
  },
};
