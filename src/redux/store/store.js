import { configureStore } from "@reduxjs/toolkit";
import  storage  from "redux-persist/lib/storage"
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

import authSlice from "../feature/auth/authSlice";
import userSlice from "../optional/userSlice";
import pinSlice from "../feature/pin/pinSlice";

const reducer = combineReducers({
    auth: authSlice,
    user: userSlice,
    pin: pinSlice,
})

const persistConfig = {
    key: "root",
    storage,
}

const peristedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
    reducer: peristedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
})

export default store;