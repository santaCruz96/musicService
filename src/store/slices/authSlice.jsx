import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: { user: null, token: '', isLogin: false },
    reducers: {
        setLogin: (state) => {
            state.isLogin = true
        },
        setLogout: (state) => {
            state.isLogin = false
            state.token = ''
        },
        setToken: (state, action) => {
            state.token = action.payload
        },
    },
})

export const { setLogin, setToken, setLogout } = authSlice.actions

export default authSlice.reducer
