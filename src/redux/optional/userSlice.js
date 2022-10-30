import { RotateLeft } from "@mui/icons-material";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: { data: null },
    reducers: {
        setUserData: (state, action) => {
            const { data } = action.payload;
            state.data = data; 
        },
        resetUserData: (state, action) => {
            state.data = null;
        }
    }
})

export const { setUserData, resetUserData } = userSlice.actions;

export default userSlice.reducer;