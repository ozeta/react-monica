import Layout from '../components/Layout';
import {Container} from 'flux/utils';
import RowActions from '../data/actions/RowActions';
import UserActions from "../data/actions/users/UserActions";
import RowStore from '../data/stores/RowStore';
import UserStore from "../data/stores/UserStore";

function getStores() {
  return [
    RowStore,
    UserStore,
  ];
}

function getState() {
  return {
    rows: RowStore.getState(),
    users: UserStore.getState(),

    addAction: RowActions.addAction,
    addUser: UserActions.addUserAction,
  };
}
// export default Container.create(Layout);
export default Container.createFunctional(Layout, getStores, getState);