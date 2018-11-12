import Vue from 'vue';
import Vuex from 'vuex';

import filesystem from './modules/filesystem';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    filesystem,
  },
});
