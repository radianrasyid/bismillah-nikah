import { configureStore } from "@reduxjs/toolkit";
import  storage  from "redux-persist/lib/storage"
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

import authSlice from "../feature/auth/authSlice";

const reducer = combineReducers({
    auth: authSlice,
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