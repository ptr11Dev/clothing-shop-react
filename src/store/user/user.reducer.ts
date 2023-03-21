import { AnyAction } from "redux";
import { UserData } from "../../utils/firebase/firebase";
import {
  signInFailed,
  signInSucced,
  signOutFailed,
  signOutSucced,
  signUpFailed,
} from "./user.action";

export type UserState = {
  readonly currentUser: UserData | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
};

const INITIAL_STATE: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (state = INITIAL_STATE, action: AnyAction) => {
  if (signInSucced.match(action)) {
    return { ...state, currentUser: action.payload };
  } else if (signOutSucced.match(action)) {
    return { ...state, currentUser: null };
  } else if (
    signInFailed.match(action) ||
    signOutFailed.match(action) ||
    signUpFailed.match(action)
  ) {
    return { ...state, error: action.payload };
  } else {
    return state;
  }
};
