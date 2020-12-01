import * as t from "../types";
import { combineReducers } from "redux";

interface IUser {
  id: number;
  name: string;
  age: number;
}

interface IUserInfo {
  userInfo: IUser;
}

const initialState: IUserInfo = {
  userInfo: {
    id: 1,
    name: "Vladimir",
    age: 23,
  },
};

export const userReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case t.SET_NAME:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  user: userReducer,
});
