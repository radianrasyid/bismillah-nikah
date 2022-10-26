import { RotateLeft } from "@mui/icons-material";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: { id: null, user: null, token: null, image: null, role: null, referral: null, leader_code: null },
    reducers: {
        setCredentials: (state, action) => {
            const { user, accessToken, image, role, referral, id, leader_code } = action.payload;
            state.user = user;
            state.token = accessToken;
            state.image = image;
            state.role = role;
            state.referral = referral;
            state.id = id;
            state.leader_code = leader_code;
        },
        logOut: (state, action) => {
            state.user = null;
            state.token = null;
            state.image = null;
            state.role = null;
            state.referral = null;
            state.id = null;
            state.leader_code = null;
        },
    }
})

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;