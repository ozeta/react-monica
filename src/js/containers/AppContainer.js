import Layout from '../components/Layout';
import {Container} from 'flux/utils';
import UserActions from "../data/actions/users/UserActions";
import UserStore from "../data/stores/UserStore";
import SessionStore from "../data/stores/SessionStore";
import SessionActions from "../data/actions/sessions/SessionActions";

function getStores() {
  return [
    UserStore,
    SessionStore,
  ];
}

function getState() {
  return {
    users: UserStore.getState(),
    sessions: SessionStore.getState(),

    addUser: UserActions.addUserAction,
    getSmall: UserActions.getSmall,

    addSession: SessionActions.addSession(),

  };
}
// export default Container.create(Layout);
export default Container.createFunctional(Layout, getStores, getState);