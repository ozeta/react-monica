import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import UserActionTypes from '../actions/users/UserActionType';
import RowDispatcher from '../dispatchers/RowDispatcher';
import Counter from '../Counter';
import Row from '../Row';

class UserStore extends ReduceStore {
  constructor() {
    super(RowDispatcher);
  }

  getInitialState() {
    return Immutable.OrderedMap();
  }

  reduce(state, action) {
    switch (action.type) {
      case UserActionTypes.ADD_USER:
        const id = Counter.increment();
         console.log("Store -> User -> reducing ADD USER <" + action + "> with id: " + id);
        if (!action.text) {
          return state;
        }
        return state.set(id, new Row({
          t0: action.text,
          t1: action.lastSession,
          t2: action.action,
        }));

      default:
        return state;
    }
  }
}

export default new UserStore();