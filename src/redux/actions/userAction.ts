import * as t from "../types";

export function setNameAction() {
  return {
    type: t.SET_NAME,
    payload: {
      userIfo: {
        name: "New Name",
        age: 50,
      },
    },
  };
}

export const userAction = () => {
  return (dispatch, getState) => {
    const name = getState();
    setTimeout(() => {
      dispatch(setNameAction());
    }, 2000);
  };
};
