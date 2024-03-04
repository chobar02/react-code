import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: "",
}

export const idSlice = createSlice({
  name: 'id',
  initialState,
  reducers: {
    setID : (state, action) => {
        state.value = action.payload
    }
  },
})

export const {setID} = idSlice.actions
export default idSlice.reducer