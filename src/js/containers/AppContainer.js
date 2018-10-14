import Layout from '../components/Layout';
import {Container} from 'flux/utils';
import TodoStore from '../data/Stores/RowStore';

function getStores() {
  return [
    RowStore,
  ];
}

function getState() {
  return {
    rows: RowStore.getState(),
  };
}

export default Container.createFunctional(Layout, getStores, getState);