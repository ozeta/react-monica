import Layout from '../components/Layout';
import {Container} from 'flux/utils';
import RowStore from '../data/Stores/RowStore';
import RowActions from '../data/Actions/RowActions';

function getStores() {
  return [
    RowStore,
  ];
}

function getState() {
  return {
    rows: RowStore.getState(),
    addRow: RowActions.addRow
  };
}

export default Container.createFunctional(Layout, getStores, getState);