import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface UsernameState {
  value: string
}

// Define the initial state using that type
const initialState: UsernameState = {
  value: ''
}

const usernameSlice = createSlice({
  name: 'username',

  initialState,

  reducers: {
    submitUsername: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    }
  }
})

export const { submitUsername } = usernameSlice.actions

export default usernameSlice.reducer