// import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
// import React from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router";
// import { getUser } from "../auth/database";
// import { Auth, provider } from "../auth/firebase";
// import { fetchError, fetchStart, fetchSuccess } from "../features/authSlice";
// import { toastSuccessNotify, toastWarnNotify } from "../helpers/ToastNotify";

// const useLoginHook = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   //! Logs the user with email and password.
//   const LoginUser = async (values) => {
//     dispatch(fetchStart());
//     try {
//       const data = await signInWithEmailAndPassword(
//         Auth,
//         values.email,
//         values.password
//       );
//       const userId = data.user.uid;
//       const a = await getUser(userId);
//       const { userName, creationDate } = a;
//       dispatch(fetchSuccess({ userId, userName, creationDate }));

//       navigate("/");
//       toastSuccessNotify("Welcome traveler");
//     } catch (error) {
//       toastWarnNotify("Please try again.");
//       dispatch(fetchError());
//       console.log(error.message);
//     }
//   };

//   const LoginWithGoogle = async () => {
//     dispatch(fetchStart());
//     try {
//       const type = await signInWithPopup(Auth, provider);
//       console.log(type);
//       // dispatch(fetchSuccess(userId, user.userName, user, creationDate))
//       toastSuccessNotify("Welcome");
//       navigate("/");
//     } catch (error) {
//       toastWarnNotify("Something went wrong.");
//       console.log(error.message);
//     }
//   };

//   return { LoginUser, LoginWithGoogle };
// };

// export default useLoginHook;
