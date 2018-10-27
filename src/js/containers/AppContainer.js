import Layout from '../components/Layout';
import {Container} from 'flux/utils';
import UserActions from "../data/actions/users/UserActions";
import UserStore from "../data/stores/UserStore";

function getStores() {
  return [
    UserStore,
  ];
}

function getState() {
  return {
    users: UserStore.getState(),

    addUser: UserActions.addUserAction,
    getSmall: UserActions.getSmall,
  };
}
// export default Container.create(Layout);
export default Container.createFunctional(Layout, getStores, getState);