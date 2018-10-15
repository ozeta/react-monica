'use strict';

import UserActionType from "./UserActionType";
import RowDispatcher from "../../dispatchers/RowDispatcher";

const UserActions = {
  addUserAction(name, lastSession, actions) {
    RowDispatcher.dispatch({
      type: UserActionType.ADD_USER,
      name, lastSession, actions
    });
  }
};

export default UserActions;
