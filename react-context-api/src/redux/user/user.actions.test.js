import { UserActionTypes } from "./user.types";
import { setCurrentUser } from "./user.actions";

it("should create an action to setCurrentUser", () => {
  const user = { id: 2, email: "test@gmail.com" };
  const expectedAction = {
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
  };
  expect(setCurrentUser(user)).toEqual(expectedAction);
});
