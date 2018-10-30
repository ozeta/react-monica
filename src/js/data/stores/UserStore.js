import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import UserActionTypes from '../actions/users/UserActionType';
import RowDispatcher from '../dispatchers/RowDispatcher';
import Counter from '../Counter';
import Row from '../Row';
import Rest from "../../api/Rest";

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
        console.log(action);
        if (!action.name) {
          return state;
        }
        return state.set(id, new Row({
          t0: action.name,
          t1: action.lastSession,
          t2: action.actions,
        }));
      case UserActionTypes.REMOVE_ONE:
        return state;
        //return state.filter(todo => !todo.complete);
      case UserActionTypes.GET_SMALL:
        console.log("getting small amounts of users");
        let smallUserArray = Rest.allocateSmallArray();
        smallUserArray.forEach(e=>{
          console.log(e);
          let row = new Row({
            t0: e.name,
            t1: e.lastSession,
            t2: e.action,
          });
          const id = Counter.increment();
          console.log("id: " + id);
          state = state.set(id, row);
        });
        return state;
      default:
        return state;
    }
  }
}

export default new UserStore();