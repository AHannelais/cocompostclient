import { SIGN_IN, SIGN_OUT } from "../actions/types";
import adminAccounts from "../adminAccounts";
const INITIAL_STATE = { isSignedIn: null, userId: null, adminAccount: null };
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      if (Object.values(adminAccounts).includes(state.userId)) {
        return {
          ...state,
          isSignedIn: true,
          userId: action.payload,
          adminAccount: true,
        };
      }
      return {
        ...state,
        isSignedIn: true,
        userId: action.payload,
        adminAccount: false,
      };

    case SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null, adminAccount: null };
    default:
      return state;
  }
};
