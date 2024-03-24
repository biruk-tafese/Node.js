import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import authService from "./authService";

// Get user from local Storage

const user = JSON.parse(localStorage.getItem('user'));

const initialState= {

    user: user ? user: null,
    isError: false,
    isSucess: false,
    isLoading: false,
    message:''
}

// Register user
export const register = createAsyncThunk('auth/register', async(user, thunkAPI) => {
     try {
         return await authService.register;
      }catch(err) {
        const message = (err.response && err.response.data && err.response.data.message) || err.message || err.toString();

        return thunkAPI.rejectWithValue(message);
     }
}) 



export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isError = false
            state.isLoading = false
            state.isSucess = false
            state.message = ''
        }

    },
    extraReducers: (builder) => {
        builder
        .addCase(register.pending, (state)=> {
            state.isLoading = true
        })
        .addCase(register.fulfilled, (state, action)=> {
            state.isLoading = true
            state.isSucess = true
            state.user = action.payload
        })
        .addCase(register.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.user = null
        })
    }

})

export const {reset} = authSlice.actions
export default authSlice.reducer