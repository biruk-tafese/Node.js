import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"


// Get user from local Storage

const user = JSON.parse(localStorage.getItem('user'));

const initialState= {

    user: user ? user: null,
    isError: false,
    isSucess: false,
    isLoading: false,
    message:''
}

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
    extraReducers: () => {}

})

export const {reset} = authSlice.actions
export default authSlice.reducer