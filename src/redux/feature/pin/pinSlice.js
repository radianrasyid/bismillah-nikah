import { RotateLeft } from "@mui/icons-material";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const pinSlice = createSlice({
    name: 'pin',
    initialState: { data: null },
    reducers: {
        setPinId: (state, action) => {
            const { data } = action.payload;
            state.data = data
        },
        logOut: (state, action) => {
            state.user = null;
            state.token = null;
            state.image = null;
            state.role = null;
            state.referral = null;
            state.id = null;
            state.leader_code = null;
            state.programId = null
        },
    }
})

export const { setPinId, logOut } = pinSlice.actions;

export default pinSlice.reducer;