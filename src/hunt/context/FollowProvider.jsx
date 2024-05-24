import React, { useContext, useReducer } from "react";
import { followReducer } from "../reducers";
import { AuthContext } from "../../auth";
import { FirebaseDB } from "../../firebase/config";
import { followTypes } from "../types";
import { FollowContext } from "./FollowContext";
import { collection, doc, setDoc } from "firebase/firestore/lite";

const initialState = {
  follow: [],
};

export const FollowProvider = ({ children }) => {
  const [followState, dispatch] = useReducer(followReducer, initialState);

  const { user } = useContext(AuthContext);

  const saveFollow = async (follow) => {
    try {
      console.log(follow);
      const newfollow = doc(collection(FirebaseDB, "follows"));

      console.log(newfollow);

      await setDoc(newfollow, follow);

      follow.id = newfollow.id;

      const action = { type: followTypes.saveFollow, payload: follow };

      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <FollowContext.Provider
      value={{
        ...followState,
        saveFollow,
        user,
      }}
    >
      {children}
    </FollowContext.Provider>
  );
};
