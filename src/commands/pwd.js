import store from '../store';

export default {
  execute() {
    const pwd = store.getters.getPwd;
    const formattedPwd = pwd.replace(/~/i, '/home/admin/');
    return formattedPwd;
  },
};
