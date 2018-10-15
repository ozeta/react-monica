import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import RowActionTypes from '../Actions/RowActionTypes';
import RowDispatcher from '../Dispatchers/RowDispatcher';
import Counter from '../Counter';
import Row from '../Row';
class RowStore extends ReduceStore {
  constructor() {
    super(RowDispatcher);
  }

  getInitialState() {
    return Immutable.OrderedMap();
  }

  reduce(state, action) {
    switch (action.type) {
      case RowActionTypes.ADD_USER:
      console.log("Store -> reducing ADD USER" + action.text);
      if (!action.text) {
        return state;
      }
      const id = Counter.increment();
      return state.set(id, new Row({
        t0:id,
        t1: action.text,
        t2: false,
      }));

    default:
      return state;
    }
  }
}

export default new RowStore();