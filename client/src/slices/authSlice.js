import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading:false,
  token:localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
 setLoading(state,action){
    state.loading = action.payload
 },
 setToken(state,action){
    state.token = action.payload
 }
  },
})

// Action creators are generated for each case reducer function
export const { setLoading, setToken } = authSlice.actions

export default authSlice.reducer