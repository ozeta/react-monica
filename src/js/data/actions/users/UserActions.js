'use strict';

import RowDispatcher from "../../dispatchers/RowDispatcher";
import UserActionTypes from "./UserActionType";

const UserActions = {
  addUserAction(name, lastSession, actions) {
    RowDispatcher.dispatch({
      type: UserActionTypes.ADD_USER,
      name, lastSession, actions
    });
  }
};

export default UserActions;
