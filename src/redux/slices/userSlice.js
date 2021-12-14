import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loggedIn : false,
  username : "",
  page : ""
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserStatus: (state,action) => {
        console.log("This is slice action",action)
        state.loggedIn = action.payload.loggedIn
        state.username = action.payload.username
    },
    setPage : (state,action) => {
      console.log(action)
      state.page = action.payload.page;
    }
  },
})

// Action creators are generated for each case reducer function
export const {setUserStatus,setPage } = userSlice.actions

export default userSlice.reducer