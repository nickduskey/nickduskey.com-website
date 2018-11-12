import { SET_PWD } from '../mutations';

const state = {
  pwd: '~',
  filesystem: {
    bin: {},
    boot: {},
    dev: {},
    etc: {},
    home: {},
    lib: {},
    lib64: {},
    'lost+found': {},
    mnt: {},
    opt: {},
    proc: {},
    root: {},
    run: {},
    sbin: {},
    srv: {},
    sys: {},
    tmp: {},
    usr: {},
    var: {},
  },
};

const getters = {
  getPwd(state) {
    return state.pwd;
  },
  getLs(state) {
    return Object.keys(state.filesystem);
  },
};

const actions = {};

const mutations = {
  [SET_PWD](state, path) {
    state.pwd = path;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
